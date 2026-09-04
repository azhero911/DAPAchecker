// src/app/blog/author/[author]/page.tsx
import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { BLOG_POSTS } from '@/data/blogPosts';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://dapametrics.vercel.app';

interface AuthorPageProps {
  params: Promise<{ author: string }>;
}

export async function generateStaticParams() {
  return [{ author: 'author' }];
}

export async function generateMetadata({ params }: AuthorPageProps): Promise<Metadata> {
  const { author } = await params;

  if (author !== 'author') {
    return { title: 'Author Not Found' };
  }

  const authorUrl = `${SITE_URL}/blog/author/author`;

  return {
    title: 'Author — Senior SEO Analyst & Engineer | DAPA Metrics',
    description:
      'Technical guides, research analyses, and SEO methodology articles authored by Author and the DAPA Metrics Editorial Team.',
    keywords: [
      'dapa metrics author',
      'seo analyst',
      'technical seo guides',
      'domain authority research',
    ],
    alternates: {
      canonical: authorUrl,
    },
    openGraph: {
      title: 'Author — DAPA Metrics Editorial Team',
      description:
        'Technical guides, research analyses, and SEO methodology articles authored by Author and the DAPA Metrics Editorial Team.',
      url: authorUrl,
      type: 'profile',
    },
  };
}

export default async function AuthorPage({ params }: AuthorPageProps) {
  const { author } = await params;

  if (author !== 'author') {
    notFound();
  }

  const authorPosts = BLOG_POSTS;

  return (
    <div className="w-full max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Breadcrumbs */}
      <nav className="text-xs text-gray-500 mb-6 flex items-center gap-2">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
        <span>/</span>
        <span className="text-gray-800 font-medium">Author</span>
      </nav>

      {/* Author Bio Header Card */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-10 mb-10 shadow-sm">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-[#1D4ED8] text-white font-bold flex items-center justify-center text-3xl flex-shrink-0 shadow-md">
            ✍
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Author</h1>
              <span className="px-3 py-1 rounded-full bg-blue-50 text-[#1D4ED8] text-xs font-bold border border-blue-200">
                Senior SEO Analyst &amp; Web Engineer
              </span>
              <span className="text-xs text-gray-500">📍 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, UK</span>
            </div>
            <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed max-w-3xl">
              Lead technical author and web engineer with the DAPA Metrics Editorial Team. Specializing in search engine link graph algorithms, crawl efficiency, eigenvector centrality models, and evidence-based SEO methodology. All guides are written according to strict editorial standards without commercial bias or sponsored placements.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-bold text-[#1D4ED8]">
              <Link href="/about" className="hover:underline">
                Our Editorial Standards &amp; Methodology →
              </Link>
              <span>•</span>
              <Link href="/contact" className="hover:underline">
                Contact Editorial Team →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Publications Heading */}
      <div className="mb-6 flex items-center justify-between border-b border-gray-200 pb-3">
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            Published Technical Guides ({authorPosts.length})
          </h2>
          <p className="text-xs text-gray-500 mt-0.5">
            Peer-reviewed guides on Domain Authority, Page Authority, link building, and web graph analysis.
          </p>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {authorPosts.map((post) => (
          <article
            key={post.slug}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:border-blue-300 hover:shadow-md transition flex flex-col justify-between group"
          >
            <div>
              <div className="flex flex-wrap items-center gap-2.5 text-xs text-gray-500 mb-2">
                <span className="px-2 py-0.5 rounded bg-blue-50 text-[#1D4ED8] font-bold border border-blue-100">
                  {post.category}
                </span>
                <span>•</span>
                <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition">
                <Link href={`/blog/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </h3>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4">
                {post.excerpt}
              </p>
            </div>

            <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
              <span className="text-gray-400">By Author</span>
              <Link
                href={`/blog/${post.slug}`}
                className="font-bold text-[#1D4ED8] hover:underline inline-flex items-center gap-1"
              >
                Read Guide →
              </Link>
            </div>
          </article>
        ))}
      </div>

    </div>
  );
}
