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
    default: 'Bulk DA PA Checker — Free Domain Authority Tool | DAPA Metrics',
    template: '%s | DAPA Metrics',
  },
  description:
    'Free bulk DA PA checker tool. Check Moz Domain Authority, Page Authority, Spam Score, and Open PageRank for up to 10 websites at once without registration or CAPTCHAs.',
  keywords: [
    'bulk da pa checker',
    'domain authority checker',
    'check da pa free',
    'page authority checker',
    'spam score checker',
    'bulk domain authority lookup',
    'open pagerank checker',
    'da pa checker online',
  ],
  authors: [{ name: 'Author', url: `${SITE_URL}/about` }],
  creator: 'Author',
  publisher: 'DAPA Metrics',
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Bulk DA PA Checker — Free Domain Authority Tool | DAPA Metrics',
    description:
      'Check Domain Authority, Page Authority, Spam Score, and Domain Age for up to 10 URLs instantly. Free export to CSV and Excel.',
    url: SITE_URL,
    siteName: 'DAPA Metrics',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'DAPA Metrics - Free Bulk DA PA Checker',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bulk DA PA Checker — Free Domain Authority Tool',
    description:
      'Analyze Domain Authority, Page Authority, and Spam Score in bulk with zero sign-up required. Free CSV export.',
    images: ['/og-image.svg'],
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
  // SoftwareApplication Schema for Google Rich Snippets
  const softwareSchema = {
    '@context': 'https://schema.org',
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
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '2340',
      bestRating: '5',
      worstRating: '1',
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
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
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
