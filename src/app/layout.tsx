// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://dapametrics.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Free Bulk Domain & Page Authority Checker | DAPA Metrics',
    template: '%s | DAPA Metrics',
  },
  description:
    'Check up to 10 domains for Domain Authority, Page Authority, Spam Score and Open PageRank. Free bulk SEO checker with CSV export.',
  keywords: [
    'free bulk domain authority checker',
    'free bulk DA PA checker',
    'bulk domain authority checker',
    'bulk page authority checker',
    'check multiple domains DA PA',
    'domain authority checker no login',
    'free DA PA checker for SEO',
    'bulk Open PageRank checker',
    'domain authority vs page authority',
  ],
  authors: [{ name: 'Author', url: `${SITE_URL}/about` }],
  creator: 'Author',
  publisher: 'DAPA Metrics',
  verification: {
    google: 'SlfwyzB-2CCD-w2QJozo4XGN8UTuGAWGHIhtfyd3DpA',
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Free Bulk Domain & Page Authority Checker | DAPA Metrics',
    description:
      'Check up to 10 domains for Domain Authority, Page Authority, Spam Score and Open PageRank. Free bulk SEO checker with CSV export.',
    url: SITE_URL,
    siteName: 'DAPA Metrics',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: `${SITE_URL}/og-image.svg`,
        width: 1200,
        height: 630,
        alt: 'DAPA Metrics - Free Bulk Domain & Page Authority Checker',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Bulk Domain & Page Authority Checker | DAPA Metrics',
    description:
      'Check up to 10 domains for Domain Authority, Page Authority, Spam Score and Open PageRank. Free bulk SEO checker with CSV export.',
    images: [`${SITE_URL}/og-image.svg`],
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
          ...(process.env.NEXT_PUBLIC_BING_VERIFICATION
            ? { other: { 'msvalidate.01': process.env.NEXT_PUBLIC_BING_VERIFICATION } }
            : {}),
        },
      }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Multi-Schema JSON-LD Graph for Google Rich Snippets
  const jsonLdGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'DAPA Metrics Bulk DA PA Checker',
        url: SITE_URL,
        applicationCategory: 'WebApplication',
        operatingSystem: 'All Modern Web Browsers',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        featureList: [
          'Bulk Domain Authority (DA) Calculation',
          'Page Authority (PA) Metric Analysis',
          'Moz Spam Score Percentage & Risk Classification',
          'Open PageRank Decimal & Global Web Ranking',
          'Referring Backlink Domain Count',
          'Excel & CSV Spreadsheet Export',
          'One-Click Metrics Copy-to-Clipboard',
          'Duplicate Domain & URL Exclusion Filters',
        ],
      },
      {
        '@type': 'Organization',
        name: 'DAPA Metrics',
        url: SITE_URL,
        logo: `${SITE_URL}/favicon.svg`,
        description: 'Independent SEO analytics platform providing free bulk Domain Authority, Page Authority, and Spam Score diagnostics.',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '71-75 Shelton Street, Covent Garden',
          addressLocality: 'London',
          postalCode: 'WC2H 9JQ',
          addressCountry: 'GB',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer support',
          url: `${SITE_URL}/contact`,
        },
      },
      {
        '@type': 'WebSite',
        name: 'DAPA Metrics',
        url: SITE_URL,
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${SITE_URL}/?domains={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        />
      </head>
      <body className="bg-[#F0F2F5] text-gray-800 antialiased min-h-screen flex flex-col justify-between">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
