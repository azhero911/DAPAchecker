// src/app/terms/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - DAPA Metrics User Agreement',
  description: 'Terms of service, fair use policy, and limitations of liability for DAPA Metrics.',
};

export default function TermsPage() {
  return (
    <div className="w-full max-w-[1550px] mx-auto px-4 sm:px-8 py-10 text-gray-800">
      
      <div className="bg-white border border-gray-300 rounded-lg p-6 sm:p-10 shadow-sm">
        <h1 className="text-2xl sm:text-[34px] font-bold text-gray-900 mb-2 border-b border-gray-200 pb-3 leading-tight">
          Terms of Service
        </h1>
        <p className="text-[16px] text-gray-500 mb-6">Last Updated: September 2026</p>

        <div className="space-y-5 text-[16px] leading-relaxed text-gray-700">
          <p>
            By accessing and using <strong>DAPA Metrics</strong>, you accept and agree to be bound by the terms and provisions of this agreement.
          </p>

          <h2 className="text-xl font-bold text-gray-900 pt-3">1. Use License & Acceptable Use</h2>
          <p>
            Permission is granted to use DAPA Metrics for personal, educational, or commercial search engine optimization auditing. However, you may not:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>Attempt to bypass rate limits or compromise server infrastructure through automated denial-of-service (DoS) attacks.</li>
            <li>Submit malicious private IP addresses, loopback addresses, or SSRF attack payloads.</li>
            <li>Resell or redistribute raw programmatic scraping access to our endpoints without prior written agreement.</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 pt-3">2. Disclaimer of Warranties</h2>
          <p>
            The materials and metrics on DAPA Metrics are provided on an &apos;as is&apos; basis. DAPA Metrics makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
          </p>
          <p>
            Domain Authority, Page Authority, and Spam Score are proprietary estimates developed by third parties (Moz, Inc.). These metrics are algorithmic simulations and do not guarantee search rankings in Google or any other search engine.
          </p>

          <h2 className="text-xl font-bold text-gray-900 pt-3">3. Trademark Notice</h2>
          <p>
            Domain Authority, Page Authority, MozRank, and MozTrust are trademarks of Moz, Inc. DAPA Metrics is an independent analytics platform and is not officially affiliated with, endorsed by, or sponsored by Moz.
          </p>
        </div>

      </div>

    </div>
  );
}
