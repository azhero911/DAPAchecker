// src/app/blog/category/[category]/page.tsx
import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { BLOG_POSTS } from '@/data/blogPosts';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://dapametrics.vercel.app';

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

// Category mappings with descriptions
const CATEGORY_MAP: Record<string, { name: string; description: string }> = {
  'seo-fundamentals': {
    name: 'SEO Fundamentals',
    description:
      'Foundational concepts of search engine optimization, Domain Authority calculation models, logarithmic metrics, and baseline ranking factors.',
  },
  'technical-seo': {
    name: 'Technical SEO',
    description:
      'In-depth technical analysis covering internal linking architecture, crawl efficiency, Page Authority distribution, and diagnostic spam signals.',
  },
  'seo-comparison': {
    name: 'SEO Comparison',
    description:
      'Comparative evaluations of search authority metrics, algorithmic differences between Open PageRank, Moz DA, and web crawl graphs.',
  },
  'link-building': {
    name: 'Link Building',
    description:
      'Sustainable, Google-compliant white-hat link acquisition frameworks, digital PR outreach, and editorial citation methodologies.',
  },
  'troubleshooting': {
    name: 'Troubleshooting',
    description:
      'Diagnostic guides for analyzing sudden metric fluctuations, index updates, link decay, and search performance diagnostics.',
  },
  'advanced-seo': {
    name: 'Advanced SEO',
    description:
      'Advanced protocols for expired domain vetting, backlink forensics, historical snapshot analysis, and technical web graph audits.',
  },
  'agency-insights': {
    name: 'Agency Insights',
    description:
      'Strategic guides for digital marketing agencies, international consultants, client reporting standards, and monetization compliance.',
  },
};

function getCategorySlug(categoryName: string): string {
  return categoryName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export async function generateStaticParams() {
  return Object.keys(CATEGORY_MAP).map((category) => ({
    category,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const catInfo = CATEGORY_MAP[category];

  if (!catInfo) {
    return { title: 'Category Not Found' };
  }

  const categoryUrl = `${SITE_URL}/blog/category/${category}`;

  return {
    title: `${catInfo.name} Guides & Tutorials | DAPA Metrics`,
    description: catInfo.description,
    keywords: [
      catInfo.name.toLowerCase(),
      'seo guides',
      'domain authority',
      'page authority',
      'dapa metrics blog',
    ],
    alternates: {
      canonical: categoryUrl,
    },
    openGraph: {
      title: `${catInfo.name} Guides | DAPA Metrics`,
      description: catInfo.description,
      url: categoryUrl,
      type: 'website',
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const catInfo = CATEGORY_MAP[category];

  if (!catInfo) {
    notFound();
  }

  // Filter posts belonging to this category
  const matchingPosts = BLOG_POSTS.filter(
    (post) => getCategorySlug(post.category) === category
  );

  const allCategories = Object.entries(CATEGORY_MAP);

  return (
    <div className="w-full max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Breadcrumbs */}
      <nav className="text-xs text-gray-500 mb-6 flex items-center gap-2">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
        <span>/</span>
        <span className="text-gray-800 font-medium">{catInfo.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Main Category Content (8 cols) */}
        <main className="lg:col-span-8">
          
          {/* Header Banner */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 mb-8 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded border border-blue-200 inline-block mb-3">
              Topic Category
            </span>
            <h1 className="text-2xl sm:text-[34px] font-bold text-gray-900 leading-tight mb-3">
              {catInfo.name}
            </h1>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              {catInfo.description}
            </p>
            <div className="mt-4 pt-4 border-t border-gray-100 text-xs text-gray-500">
              Showing {matchingPosts.length} article{matchingPosts.length === 1 ? '' : 's'} in this topic
            </div>
          </div>

          {/* Posts Grid */}
          {matchingPosts.length === 0 ? (
            <div className="bg-white border border-gray-200 rounded-xl p-8 text-center text-gray-500">
              No articles currently published in this category. Check back soon!
            </div>
          ) : (
            <div className="space-y-6">
              {matchingPosts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white border border-gray-200 rounded-xl p-6 sm:p-7 shadow-sm hover:border-blue-300 hover:shadow-md transition group"
                >
                  <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-2.5">
                    <span className="px-2.5 py-0.5 rounded bg-blue-50 text-[#1D4ED8] font-bold border border-blue-100">
                      {post.category}
                    </span>
                    <span>•</span>
                    <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition">
                    <Link href={`/blog/${post.slug}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-[10px]">
                        ✍
                      </div>
                      <Link href="/blog/author/author" className="text-gray-700 font-medium hover:text-blue-700">
                        {post.author.name}
                      </Link>
                    </div>
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
          )}

        </main>

        {/* Sidebar (4 cols) */}
        <aside className="lg:col-span-4 space-y-6">
          
          {/* Categories Navigation */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">
              All Blog Topics
            </h3>
            <div className="space-y-2">
              {allCategories.map(([slug, data]) => {
                const isActive = slug === category;
                return (
                  <Link
                    key={slug}
                    href={`/blog/category/${slug}`}
                    className={`block px-3 py-2 rounded-lg text-sm transition font-medium ${
                      isActive
                        ? 'bg-blue-50 text-[#1D4ED8] font-bold border border-blue-200'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                    }`}
                  >
                    {data.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Checker CTA */}
          <div className="bg-gradient-to-br from-[#1D4ED8] to-indigo-900 rounded-xl p-6 text-white shadow-md">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-200 block mb-2">
              Free Utility
            </span>
            <h3 className="text-lg font-bold mb-2">Check Domain Authority Free</h3>
            <p className="text-blue-100 text-xs sm:text-sm mb-4 leading-relaxed">
              Analyze up to 10 URLs in bulk for Moz DA, PA, Spam Score, and Open PageRank.
            </p>
            <Link
              href="/"
              className="block w-full text-center py-2.5 bg-white text-[#1D4ED8] font-bold text-sm rounded shadow hover:bg-gray-100 transition"
            >
              Open Bulk Checker →
            </Link>
          </div>

        </aside>

      </div>

    </div>
  );
}
