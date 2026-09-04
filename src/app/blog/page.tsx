// src/app/blog/page.tsx
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { BLOG_POSTS } from '@/data/blogPosts';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://dapametrics.vercel.app';

export const metadata: Metadata = {
  title: 'SEO Guides, Authority Insights & Industry News',
  description:
    'Comprehensive guides on Moz Domain Authority, Spam Score diagnostics, Open PageRank, white-hat link building, and expired domain vetting by DAPA Metrics.',
  keywords: [
    'seo guides',
    'domain authority tutorials',
    'reduce spam score',
    'open pagerank guide',
    'backlink strategies',
    'expired domain vetting',
  ],
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: 'SEO Guides & Authority Insights | DAPA Metrics Blog',
    description:
      'Learn how to calculate, track, and evaluate your Domain Authority and search visibility with actionable, expert-written guides.',
    url: `${SITE_URL}/blog`,
    type: 'website',
  },
};

const CATEGORIES = [
  { name: 'All Topics', slug: '' },
  { name: 'SEO Fundamentals', slug: 'seo-fundamentals' },
  { name: 'Technical SEO', slug: 'technical-seo' },
  { name: 'SEO Comparison', slug: 'seo-comparison' },
  { name: 'Link Building', slug: 'link-building' },
  { name: 'Troubleshooting', slug: 'troubleshooting' },
  { name: 'Advanced SEO', slug: 'advanced-seo' },
  { name: 'Agency Insights', slug: 'agency-insights' },
];

function getCategorySlug(categoryName: string): string {
  return categoryName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export default function BlogIndexPage() {
  return (
    <div className="w-full max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="inline-block px-3 py-1 bg-blue-50 text-[#1D4ED8] text-xs font-bold uppercase tracking-wider rounded-full border border-blue-200 mb-3">
          Knowledge Base &amp; SEO Insights
        </span>
        <h1 className="text-2xl sm:text-[34px] font-bold text-gray-900 mb-3 leading-tight">
          SEO Guides &amp; Domain Authority Strategies
        </h1>
        <p className="text-[16px] text-gray-600 leading-relaxed">
          In-depth tutorials, technical analyses, and research-backed frameworks to help you evaluate web metrics, diagnose spam signals, and improve search visibility.
        </p>
      </div>

      {/* Category Pills Navigation */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {CATEGORIES.map((cat) => {
          const href = cat.slug ? `/blog/category/${cat.slug}` : '/blog';
          const isAll = cat.slug === '';
          return (
            <Link
              key={cat.name}
              href={href}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition border ${
                isAll
                  ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400 hover:text-blue-600'
              }`}
            >
              {cat.name}
            </Link>
          );
        })}
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post) => {
          const catSlug = getCategorySlug(post.category);
          return (
            <article
              key={post.slug}
              className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-6">
                {/* Category & Date & Read Time */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                  <Link
                    href={`/blog/category/${catSlug}`}
                    className="px-2.5 py-0.5 rounded bg-blue-50 text-[#1D4ED8] font-bold border border-blue-100 hover:bg-blue-100 transition"
                  >
                    {post.category}
                  </Link>
                  <span className="text-gray-400 font-medium">
                    {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} · {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1D4ED8] transition leading-snug">
                  <Link href={`/blog/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h2>

                {/* Excerpt */}
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
              </div>

              {/* Card Footer */}
              <div className="px-6 py-4 bg-gray-50/80 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#1D4ED8] text-white font-bold flex items-center justify-center text-[10px]">
                    ✍
                  </div>
                  <Link href="/blog/author/author" className="font-medium text-gray-700 hover:text-blue-700">
                    {post.author.name}
                  </Link>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-[#1D4ED8] font-bold group-hover:translate-x-0.5 transition inline-flex items-center gap-1"
                >
                  Read Guide →
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      {/* Bottom CTA to the Tool */}
      <div className="mt-16 p-8 bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl text-white text-center shadow-lg">
        <h2 className="text-2xl font-bold mb-2">Ready to audit your website's authority?</h2>
        <p className="text-blue-200 text-sm sm:text-base max-w-2xl mx-auto mb-6">
          Analyze Moz DA, Page Authority, and Spam Score for up to 10 domains simultaneously with zero registration.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-white text-[#1D4ED8] font-bold rounded-md hover:bg-gray-100 shadow transition"
        >
          Check Your Domain Authority Now →
        </Link>
      </div>

    </div>
  );
}
