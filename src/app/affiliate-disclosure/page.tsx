// src/app/affiliate-disclosure/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure - FTC Compliance | DAPA Metrics',
  description: 'Full transparency regarding our affiliate partnerships, advertising, and editorial independence.',
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 py-12 text-gray-800">
      
      <div className="bg-white border-2 border-gray-300 rounded-xl p-8 sm:p-12 shadow-sm">
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6 border-b border-gray-200 pb-4">
          FTC Affiliate Disclosure
        </h1>

        <div className="space-y-6 text-base sm:text-lg leading-relaxed text-gray-700">
          <p>
            In compliance with the <strong>Federal Trade Commission (FTC) guidelines</strong>, please assume that certain links, banners, and product recommendations on <strong>DAPA Metrics</strong> are affiliate links.
          </p>

          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 pt-4">What Does This Mean?</h2>
          <p>
            If you click on an affiliate link (for example, to SEMrush, Moz Pro, Ahrefs, or hosting providers) and subsequently purchase a subscription or trial, DAPA Metrics may earn an affiliate commission from that merchant.
          </p>
          <p className="font-semibold text-gray-900">
            This commission comes at zero additional cost to you. In many instances, our partnership links provide you with discounted pricing or extended free trials that are not available directly on the public market.
          </p>

          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 pt-4">Our Editorial Commitment</h2>
          <p>
            Our authority scores, spam risk evaluations, and comparative tables are 100% data-driven and objective. We never accept payment to inflate a website&apos;s Domain Authority or artificially lower a Spam Score. Our tool provides unbiased metrics regardless of commercial partnerships.
          </p>

          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 pt-4">Questions?</h2>
          <p>
            If you have any questions regarding our affiliate relationships, please reach out through our Contact page or email us at <strong>partnerships@dapametrics.com</strong>.
          </p>
        </div>
      </div>

    </div>
  );
}
