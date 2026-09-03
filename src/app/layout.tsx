// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Bulk DA PA Checker - Free Moz Domain Authority & Spam Score Tool',
  description:
    'Free bulk DA PA checker. Check Moz Domain Authority, Page Authority, Spam Score, and Open PageRank for up to 10 websites at once without registration.',
  keywords: [
    'bulk da pa checker',
    'domain authority checker',
    'check da pa free',
    'moz spam score checker',
    'bulk domain authority lookup',
    'page authority checker',
  ],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://dapametrics.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Bulk DA PA Checker - Free Moz Domain Authority & Spam Score Tool',
    description:
      'Check Domain Authority, Page Authority, and Spam Score for up to 10 URLs instantly. Free export to CSV and Excel.',
    url: 'https://dapametrics.com',
    siteName: 'DAPA Metrics',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // SoftwareApplication Schema for Google Rich Snippets
  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'DAPA Metrics Bulk DA PA Checker',
    url: 'https://dapametrics.com',
    applicationCategory: 'SEOApplication',
    operatingSystem: 'All Web Browsers',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: [
      'Bulk DA Check',
      'Page Authority Check',
      'Moz Spam Score Analysis',
      'Domain Age Calculation',
      'CSV and Excel Export',
      'Domain Duplicate Exclusion',
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
      </body>
    </html>
  );
}
