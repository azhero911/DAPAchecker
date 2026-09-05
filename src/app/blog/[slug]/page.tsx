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

export function getCategorySlug(category: string): string {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
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
    keywords: [
      post.category.toLowerCase(),
      'domain authority',
      'seo guide',
      'page authority',
      'spam score',
      'dapa metrics blog',
    ],
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: postUrl,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author.name],
      images: [
        {
          url: `${SITE_URL}/og-image.svg`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [`${SITE_URL}/og-image.svg`],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const categorySlug = getCategorySlug(post.category);

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${SITE_URL}/blog/${post.slug}#article`,
        headline: post.title,
        description: post.excerpt,
        datePublished: post.publishedAt,
        dateModified: post.updatedAt || post.publishedAt,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${SITE_URL}/blog/${post.slug}`,
        },
        author: {
          '@type': 'Organization',
          name: post.author.name,
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
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${SITE_URL}/blog/${post.slug}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: SITE_URL,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Blog',
            item: `${SITE_URL}/blog`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: post.category,
            item: `${SITE_URL}/blog/category/${categorySlug}`,
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: post.title,
            item: `${SITE_URL}/blog/${post.slug}`,
          },
        ],
      },
    ],
  };

  // Convert markdown links [text](url) and bold text into clickable React nodes
  const renderInlineText = (text: string) => {
    // Process markdown links [text](url)
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts: (string | React.ReactNode)[] = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      const linkText = match[1];
      const linkUrl = match[2];
      parts.push(
        <Link
          key={match.index}
          href={linkUrl}
          className="text-[#1D4ED8] font-bold hover:underline"
        >
          {linkText}
        </Link>
      );
      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : text;
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
        if (trimmed.startsWith('|')) {
          const tableRows = trimmed.split('\n').filter((row) => row.trim().startsWith('|'));
          if (tableRows.length >= 2) {
            const parseRow = (row: string) =>
              row
                .split('|')
                .slice(1, -1)
                .map((cell) => cell.trim().replace(/\*\*(.*?)\*\*/g, '$1'));
            const headerCells = parseRow(tableRows[0]);
            const dataRows = tableRows.slice(2);

            return (
              <div key={i} className="my-6 overflow-x-auto">
                <table className="w-full text-left text-sm border border-gray-200 rounded-lg overflow-hidden border-collapse">
                  <thead className="bg-gray-100 text-gray-900 font-bold">
                    <tr>
                      {headerCells.map((cell, cIdx) => (
                        <th key={cIdx} className="py-2.5 px-4 border-b border-gray-200">
                          {renderInlineText(cell)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 bg-white">
                    {dataRows.map((row, rIdx) => {
                      const cells = parseRow(row);
                      return (
                        <tr key={rIdx} className="hover:bg-gray-50/50">
                          {cells.map((c, cIdx) => (
                            <td key={cIdx} className="py-2.5 px-4 text-gray-700">
                              {renderInlineText(c)}
                            </td>
                          ))}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            );
          }
        }
        if (trimmed.startsWith('- ') || trimmed.startsWith('1. ')) {
          const items = trimmed.split('\n');
          return (
            <ul key={i} className="list-disc list-inside space-y-2 text-[16px] text-gray-700 my-4 pl-2 leading-relaxed">
              {items.map((item, itemIdx) => (
                <li key={itemIdx} className="leading-relaxed">
                  {renderInlineText(item.replace(/^[-*]\s+|\d+\.\s+/, ''))}
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
            {renderInlineText(trimmed)}
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="w-full max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Breadcrumbs */}
        <nav className="text-xs text-gray-500 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-blue-600">Blog</Link>
          <span>/</span>
          <Link href={`/blog/category/${categorySlug}`} className="hover:text-blue-600">
            {post.category}
          </Link>
          <span>/</span>
          <span className="text-gray-800 font-medium truncate max-w-md">{post.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Article Column (8 cols) */}
          <article className="lg:col-span-8 bg-white border border-gray-200 rounded-xl p-6 sm:p-10 shadow-sm">
            
            {/* Header */}
            <div className="border-b border-gray-200 pb-6 mb-6">
              <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-3">
                <Link
                  href={`/blog/category/${categorySlug}`}
                  className="px-3 py-1 rounded bg-blue-50 text-[#1D4ED8] font-bold border border-blue-100 hover:bg-blue-100 transition"
                >
                  {post.category}
                </Link>
                <span>•</span>
                <span>Published {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                {post.updatedAt && (
                  <>
                    <span>•</span>
                    <span className="text-green-700 font-semibold">Updated {new Date(post.updatedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </>
                )}
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
                  ✍
                </div>
                <div>
                  <Link href="/blog/author/author" className="font-bold text-gray-900 text-sm hover:text-blue-700">
                    {post.author.name}
                  </Link>
                  <div className="text-xs text-gray-500">{post.author.role} · DAPA Metrics Editorial Team</div>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose max-w-none text-gray-800 leading-relaxed">
              {formatMarkdown(post.content)}
            </div>

            {/* Structured Sources & References Box */}
            {post.sources && post.sources.length > 0 && (
              <div className="mt-10 p-6 bg-slate-50 border border-slate-200 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-[#1D4ED8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <h3 className="text-base font-bold text-gray-900">Sources &amp; Authoritative References</h3>
                </div>
                <p className="text-xs text-gray-600 mb-4">
                  The analysis and technical guidance in this guide are corroborated by official documentation and academic search literature:
                </p>
                <ul className="space-y-3">
                  {post.sources.map((src, sIdx) => (
                    <li key={sIdx} className="text-xs sm:text-sm text-gray-700 flex items-start gap-2">
                      <span className="text-blue-600 font-bold mt-0.5">•</span>
                      <div>
                        <a
                          href={src.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#1D4ED8] font-bold hover:underline inline-flex items-center gap-1"
                        >
                          {src.title} — {src.publisher}
                          <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                        {src.note && <p className="text-xs text-gray-500 mt-0.5">{src.note}</p>}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Author Bio Box */}
            <div className="mt-8 p-6 bg-gray-50 border border-gray-200 rounded-xl flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-[#1D4ED8] text-white font-bold flex items-center justify-center text-xl flex-shrink-0">
                ✍
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-base">
                  Written by{' '}
                  <Link href="/blog/author/author" className="hover:text-blue-700 underline">
                    {post.author.name}
                  </Link>
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                  Senior technical SEO analyst and web engineer with the DAPA Metrics Editorial Team. DAPA Metrics was built to provide clean, fast, and accessible domain authority analysis without commercial paywalls or data scraping.
                </p>
                <div className="mt-2 flex items-center gap-3">
                  <Link href="/blog/author/author" className="text-xs font-bold text-[#1D4ED8] hover:underline">
                    View Author Profile &amp; Guides →
                  </Link>
                  <span className="text-gray-300">•</span>
                  <Link href="/about" className="text-xs font-bold text-gray-600 hover:underline">
                    Editorial Standards
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
                    <Link
                      href={`/blog/category/${getCategorySlug(other.category)}`}
                      className="text-[10px] font-bold uppercase text-blue-600 tracking-wider block mb-1 hover:underline"
                    >
                      {other.category}
                    </Link>
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
