// src/app/sitemap.ts
import { MetadataRoute } from 'next';
import { BLOG_POSTS } from '@/data/blogPosts';

const CATEGORIES = [
  'seo-fundamentals',
  'technical-seo',
  'seo-comparison',
  'link-building',
  'troubleshooting',
  'advanced-seo',
  'agency-insights',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dapametrics.vercel.app';

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/methodology`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.4 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.4 },
    { url: `${baseUrl}/affiliate-disclosure`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.4 },
    { url: `${baseUrl}/blog/author/author`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
  ];

  const categoryRoutes: MetadataRoute.Sitemap = CATEGORIES.map((cat) => ({
    url: `${baseUrl}/blog/category/${cat}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.publishedAt),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...categoryRoutes, ...blogRoutes];
}
