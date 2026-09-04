// src/app/affiliate-disclosure/page.tsx
import { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://dapametrics.vercel.app';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure — FTC Compliance & Transparency | DAPA Metrics',
  description: 'Full transparency regarding our affiliate partnerships, advertising, and editorial independence.',
  alternates: {
    canonical: `${SITE_URL}/affiliate-disclosure`,
  },
  openGraph: {
    title: 'Affiliate Disclosure — DAPA Metrics FTC Compliance',
    description: 'Learn about our affiliate relationships, monetization standards, and editorial independence.',
    url: `${SITE_URL}/affiliate-disclosure`,
    type: 'website',
  },
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="w-full max-w-[1550px] mx-auto px-4 sm:px-8 py-10 text-gray-800">
      
      <div className="bg-white border border-gray-300 rounded-lg p-6 sm:p-10 shadow-sm">
        <h1 className="text-2xl sm:text-[34px] font-bold text-gray-900 mb-4 border-b border-gray-200 pb-3 leading-tight">
          FTC Affiliate Disclosure
        </h1>

        <div className="space-y-5 text-[16px] leading-relaxed text-gray-700">
          <p>
            In compliance with the <strong>Federal Trade Commission (FTC) guidelines</strong>, please assume that certain links, banners, and product recommendations on <strong>DAPA Metrics</strong> are affiliate links.
          </p>

          <h2 className="text-xl font-bold text-gray-900 pt-3">What Does This Mean?</h2>
          <p>
            If you click on an affiliate link (for example, to SEMrush, Moz Pro, Ahrefs, or hosting providers) and subsequently purchase a subscription or trial, DAPA Metrics may earn an affiliate commission from that merchant.
          </p>
          <p className="font-semibold text-gray-900">
            This commission comes at zero additional cost to you. In many instances, our partnership links provide you with discounted pricing or extended free trials that are not available directly on the public market.
          </p>

          <h2 className="text-xl font-bold text-gray-900 pt-3">Our Editorial Commitment</h2>
          <p>
            Our authority scores, spam risk evaluations, and comparative tables are 100% data-driven and objective. We never accept payment to inflate a website&apos;s Domain Authority or artificially lower a Spam Score. Our tool provides unbiased metrics regardless of commercial partnerships.
          </p>

          <h2 className="text-xl font-bold text-gray-900 pt-3">Questions?</h2>
          <p>
            If you have any questions regarding our affiliate relationships, please reach out through our Contact page or email us at <strong>partnerships@dapametrics.com</strong>.
          </p>
        </div>
      </div>

    </div>
  );
}
