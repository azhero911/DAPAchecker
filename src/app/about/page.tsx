// src/app/about/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://dapametrics.vercel.app';

export const metadata: Metadata = {
  title: 'About Us — Founder Story & Data Standards',
  description:
    'Meet Arham Zahid and the engineering team behind DAPA Metrics. Learn about our data standards, serverless architecture, and mission to democratize SEO metrics.',
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: 'About Us — DAPA Metrics Founder Story & Mission',
    description:
      'Learn how DAPA Metrics was founded by Arham Zahid in Faisalabad, Pakistan, to provide fast, privacy-focused, paywall-free domain authority analysis.',
    url: `${SITE_URL}/about`,
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <div className="w-full max-w-[1550px] mx-auto px-4 sm:px-8 py-10 text-gray-800">
      
      <div className="bg-white border border-gray-300 rounded-lg p-6 sm:p-10 shadow-sm">
        
        {/* Header */}
        <div className="border-b border-gray-200 pb-4 mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded border border-blue-200">
            About Our Platform &amp; Founder
          </span>
          <h1 className="text-2xl sm:text-[34px] font-bold text-gray-900 mt-3 leading-tight">
            Building Fast, Paywall-Free SEO Intelligence
          </h1>
          <p className="text-[16px] text-gray-600 mt-2">
            Independent software development, transparent link graph algorithms, and zero intrusive ads.
          </p>
        </div>

        <div className="space-y-6 text-[16px] leading-relaxed text-gray-700">
          
          {/* Founder Bio Box (E-E-A-T) */}
          <div className="p-6 bg-blue-50/60 border border-blue-200 rounded-xl flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-[#1D4ED8] text-white font-black text-2xl flex items-center justify-center flex-shrink-0 shadow-md">
              AZ
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-xl font-bold text-gray-900">Arham Zahid</h2>
                <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-[#1D4ED8] text-xs font-bold">
                  Founder &amp; Lead Engineer
                </span>
                <span className="text-xs text-gray-500">📍 Faisalabad, Punjab, Pakistan</span>
              </div>
              <p className="text-sm text-gray-700 mt-2 leading-relaxed">
                Full-stack engineer and digital marketer with over 5 years of experience building modern web applications and optimizing enterprise search rankings. Arham architected DAPA Metrics using Next.js edge runtimes and distributed caching to deliver sub-second domain authority lookups across the globe.
              </p>
              <div className="mt-3 flex items-center gap-4 text-xs font-bold text-[#1D4ED8]">
                <a
                  href="https://github.com/azhero911"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center gap-1"
                >
                  GitHub Profile ↗
                </a>
                <span>•</span>
                <Link href="/contact" className="hover:underline">
                  Direct Founder Contact →
                </Link>
              </div>
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 pt-3">
            Why We Founded DAPA Metrics
          </h2>
          <p>
            Checking essential website authority shouldn’t feel like navigating a minefield of spam. For years, digital marketing professionals, freelancers, and small business owners in developing markets (including South Asia, Southeast Asia, and Eastern Europe) have relied on free DA checkers to vet link building targets and evaluate client websites.
          </p>
          <p>
            Unfortunately, most legacy free tools on the market are burdened with:
          </p>
          <ul className="list-disc list-inside space-y-1.5 pl-2">
            <li>Aggressive interstitial advertisements and disruptive auto-playing video banners.</li>
            <li>Mandatory registration walls demanding business email addresses to view basic numbers.</li>
            <li>Aggressive Google reCAPTCHAs on every single domain query.</li>
            <li>Deliberately slowed processing times designed to upsell enterprise subscription tiers.</li>
          </ul>
          <p>
            We built <strong>DAPA Metrics</strong> to counter this trend: a lightning-fast, desktop-grade utility where anyone can analyze up to 10 URLs in bulk simultaneously with zero registration, zero CAPTCHAs, and instant CSV/Excel export.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 pt-3">
            Our Data &amp; Engineering Standards
          </h2>
          <p>
            To guarantee that our metrics reflect actual search engine reality, our platform combines multiple independent link intelligence sources:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
            <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
              <h3 className="font-bold text-gray-900 text-sm mb-1">Open PageRank Graph</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Calculated over the massive neutral Common Crawl dataset, providing an unmanipulated global web graph rank from 0 to 10.
              </p>
            </div>
            <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
              <h3 className="font-bold text-gray-900 text-sm mb-1">Moz Machine Learning</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Evaluates linking root domains and relative link equity on a logarithmic 1 to 100 scale, modeled to predict search ranking probability.
              </p>
            </div>
            <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
              <h3 className="font-bold text-gray-900 text-sm mb-1">Multi-Tier Edge Cache</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Redis-backed edge cache speeds up repeat queries to under 50ms while protecting upstream APIs from redundant quota consumption.
              </p>
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 pt-3">
            Our Commitment to Privacy &amp; GDPR Compliance
          </h2>
          <p>
            Unlike advertising-heavy tools that harvest user search patterns to sell domain scouting databases, DAPA Metrics adheres to strict privacy principles:
          </p>
          <ul className="list-disc list-inside space-y-1.5 pl-2">
            <li><strong>Zero Raw IP Logging</strong>: All incoming IP addresses are immediately hashed via one-way cryptographic SHA-256 salts for rate limiting and discarded.</li>
            <li><strong>No User Search Reselling</strong>: The domains you audit remain your confidential workflow. We do not sell query data to domain brokers.</li>
            <li><strong>Editorial Independence</strong>: Domain Authority (DA) and Page Authority (PA) are registered trademarks of Moz, Inc. We are an independent software organization and maintain no commercial affiliation with Moz, ensuring completely unbiased metrics.</li>
          </ul>

          {/* Bottom Action */}
          <div className="mt-8 pt-6 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1D4ED8] hover:bg-[#1E40AF] text-white font-bold rounded-lg transition text-[16px]"
            >
              Launch Bulk DA PA Checker Free →
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-blue-700 font-bold text-[16px]"
            >
              Get in Touch with Arham &amp; Team →
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
}
