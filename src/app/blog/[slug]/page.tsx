// src/app/blog/[slug]/page.tsx
import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { BLOG_POSTS } from '@/data/blogPosts';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://dapametrics.vercel.app';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Article Not Found',
    };
  }

  const postUrl = `${SITE_URL}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: postUrl,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author.name],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${post.slug}`,
    },
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
      url: `${SITE_URL}/about`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'DAPA Metrics',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.svg`,
      },
    },
  };

  // Convert markdown content into formatted HTML elements
  const formatMarkdown = (md: string) => {
    return md
      .split('\n\n')
      .map((block, i) => {
        const trimmed = block.trim();
        if (trimmed.startsWith('## ')) {
          return (
            <h2 key={i} className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 mb-4">
              {trimmed.replace('## ', '')}
            </h2>
          );
        }
        if (trimmed.startsWith('### ')) {
          return (
            <h3 key={i} className="text-lg sm:text-xl font-bold text-gray-800 mt-6 mb-3">
              {trimmed.replace('### ', '')}
            </h3>
          );
        }
        if (trimmed.startsWith('---')) {
          return <hr key={i} className="my-8 border-gray-200" />;
        }
        if (trimmed.startsWith('- ') || trimmed.startsWith('1. ')) {
          const items = trimmed.split('\n');
          return (
            <ul key={i} className="list-disc list-inside space-y-2 text-[16px] text-gray-700 my-4 pl-2 leading-relaxed">
              {items.map((item, itemIdx) => (
                <li key={itemIdx} className="leading-relaxed">
                  {item.replace(/^[-*]\s+|\d+\.\s+/, '')}
                </li>
              ))}
            </ul>
          );
        }
        if (trimmed.startsWith('```')) {
          const codeLines = trimmed.replace(/```[a-z]*\n?/, '').replace(/```$/, '');
          return (
            <pre key={i} className="p-4 bg-gray-900 text-green-400 font-mono text-xs sm:text-sm rounded-lg overflow-x-auto my-4">
              <code>{codeLines}</code>
            </pre>
          );
        }
        return (
          <p key={i} className="text-[16px] text-gray-700 leading-relaxed mb-4">
            {trimmed}
          </p>
        );
      });
  };

  // Get other posts for recommendation
  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="w-full max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Breadcrumbs */}
        <nav className="text-xs text-gray-500 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-blue-600">Blog</Link>
          <span>/</span>
          <span className="text-gray-800 font-medium truncate max-w-md">{post.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Article Column (8 cols) */}
          <article className="lg:col-span-8 bg-white border border-gray-200 rounded-xl p-6 sm:p-10 shadow-sm">
            
            {/* Header */}
            <div className="border-b border-gray-200 pb-6 mb-6">
              <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                <span className="px-3 py-1 rounded bg-blue-50 text-[#1D4ED8] font-bold border border-blue-100">
                  {post.category}
                </span>
                <span>•</span>
                <span>Published {post.publishedAt}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>

              <h1 className="text-2xl sm:text-[34px] font-bold text-gray-900 leading-tight mb-4">
                {post.title}
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed">
                {post.excerpt}
              </p>

              {/* Author Strip */}
              <div className="mt-6 flex items-center gap-3 pt-6 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-[#1D4ED8] text-white font-bold flex items-center justify-center text-sm">
                  AZ
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">{post.author.name}</div>
                  <div className="text-xs text-gray-500">{post.author.role} · DAPA Metrics</div>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose max-w-none text-gray-800 leading-relaxed">
              {formatMarkdown(post.content)}
            </div>

            {/* Author Bio Box */}
            <div className="mt-12 p-6 bg-gray-50 border border-gray-200 rounded-xl flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-[#1D4ED8] text-white font-bold flex items-center justify-center text-lg flex-shrink-0">
                AZ
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-base">Written by {post.author.name}</h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                  Software engineer and SEO specialist based in Faisalabad, Pakistan. Arham built DAPA Metrics to provide clean, fast, and accessible domain authority analysis without commercial paywalls.
                </p>
                <div className="mt-2">
                  <Link href="/about" className="text-xs font-bold text-[#1D4ED8] hover:underline">
                    Read founder story &amp; methodology →
                  </Link>
                </div>
              </div>
            </div>

          </article>

          {/* Sidebar (4 cols) */}
          <aside className="lg:col-span-4 space-y-6">
            
            {/* CTA Box */}
            <div className="bg-gradient-to-br from-[#1D4ED8] to-indigo-900 rounded-xl p-6 text-white shadow-md">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-200 block mb-2">
                Free SEO Utility
              </span>
              <h3 className="text-lg font-bold mb-2">Check Domain Authority in Bulk</h3>
              <p className="text-blue-100 text-xs sm:text-sm mb-4 leading-relaxed">
                Test up to 10 URLs instantly for Moz DA, PA, and Spam Score without signing up.
              </p>
              <Link
                href="/"
                className="block w-full text-center py-2.5 bg-white text-[#1D4ED8] font-bold text-sm rounded shadow hover:bg-gray-100 transition"
              >
                Launch Free Checker →
              </Link>
            </div>

            {/* Related Articles */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">
                Recommended Guides
              </h3>
              <div className="space-y-4">
                {otherPosts.map((other) => (
                  <div key={other.slug} className="border-b border-gray-100 pb-3 last:border-b-0 last:pb-0">
                    <span className="text-[10px] font-bold uppercase text-blue-600 tracking-wider block mb-1">
                      {other.category}
                    </span>
                    <Link
                      href={`/blog/${other.slug}`}
                      className="text-sm font-bold text-gray-800 hover:text-blue-600 transition leading-snug line-clamp-2"
                    >
                      {other.title}
                    </Link>
                    <span className="text-xs text-gray-400 block mt-1">{other.readTime}</span>
                  </div>
                ))}
              </div>
            </div>

          </aside>

        </div>

      </div>
    </>
  );
}
