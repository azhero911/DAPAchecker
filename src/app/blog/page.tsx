// src/app/blog/page.tsx
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { BLOG_POSTS } from '@/data/blogPosts';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://dapametrics.vercel.app';

export const metadata: Metadata = {
  title: 'SEO Guides, Authority Insights & Industry News',
  description:
    'Comprehensive guides on Moz Domain Authority, Spam Score reduction, Open PageRank, white-hat link building, and expired domain vetting by DAPA Metrics.',
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: 'SEO Guides & Authority Insights | DAPA Metrics Blog',
    description:
      'Learn how to calculate, track, and improve your Domain Authority and search rankings with actionable, expert-written guides.',
    url: `${SITE_URL}/blog`,
    type: 'website',
  },
};

export default function BlogIndexPage() {
  return (
    <div className="w-full max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="inline-block px-3 py-1 bg-blue-50 text-[#1D4ED8] text-xs font-bold uppercase tracking-wider rounded-full border border-blue-200 mb-3">
          Knowledge Base &amp; SEO Insights
        </span>
        <h1 className="text-2xl sm:text-[34px] font-bold text-gray-900 mb-3 leading-tight">
          SEO Guides &amp; Domain Authority Strategies
        </h1>
        <p className="text-[16px] text-gray-600 leading-relaxed">
          In-depth tutorials, technical case studies, and research-backed frameworks to help you analyze web metrics, reduce spam scores, and grow search rankings.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post) => (
          <article
            key={post.slug}
            className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition flex flex-col justify-between overflow-hidden group"
          >
            <div className="p-6">
              {/* Category & Time */}
              <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                <span className="px-2.5 py-0.5 rounded bg-blue-50 text-[#1D4ED8] font-bold border border-blue-100">
                  {post.category}
                </span>
                <span>{post.readTime}</span>
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
                  AZ
                </div>
                <span className="font-medium text-gray-700">{post.author.name}</span>
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="text-[#1D4ED8] font-bold group-hover:translate-x-0.5 transition inline-flex items-center gap-1"
              >
                Read Guide →
              </Link>
            </div>
          </article>
        ))}
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
