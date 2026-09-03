// src/app/terms/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - DAPA Metrics User Agreement',
  description: 'Terms of service, fair use policy, and limitations of liability for DAPA Metrics.',
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
      
      <div className="bg-white border border-gray-300 rounded-md p-6 sm:p-8 shadow-sm">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-3">
          Terms of Service
        </h1>
        <p className="text-xs text-gray-500 mb-6">Last Updated: September 2026</p>

        <div className="space-y-4 text-sm leading-relaxed text-gray-700">
          <p>
            By accessing and using <strong>DAPA Metrics</strong>, you accept and agree to be bound by the terms and provisions of this agreement.
          </p>

          <h2 className="text-lg font-bold text-gray-900 pt-2">1. Use License & Acceptable Use</h2>
          <p>
            Permission is granted to use DAPA Metrics for personal, educational, or commercial search engine optimization auditing. However, you may not:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Attempt to bypass rate limits or compromise server infrastructure through automated denial-of-service (DoS) attacks.</li>
            <li>Submit malicious private IP addresses, loopback addresses, or SSRF attack payloads.</li>
            <li>Resell or redistribute raw programmatic scraping access to our endpoints without prior written agreement.</li>
          </ul>

          <h2 className="text-lg font-bold text-gray-900 pt-2">2. Disclaimer of Warranties</h2>
          <p>
            The materials and metrics on DAPA Metrics are provided on an &apos;as is&apos; basis. DAPA Metrics makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
          </p>
          <p>
            Domain Authority, Page Authority, and Spam Score are proprietary estimates developed by third parties (Moz, Inc.). These metrics are algorithmic simulations and do not guarantee search rankings in Google or any other search engine.
          </p>

          <h2 className="text-lg font-bold text-gray-900 pt-2">3. Limitations of Liability</h2>
          <p>
            In no event shall DAPA Metrics or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the metrics provided on this website.
          </p>

          <h2 className="text-lg font-bold text-gray-900 pt-2">4. Trademark Attribution</h2>
          <p>
            Domain Authority (DA) and Page Authority (PA) are trademarks of Moz, Inc. Ahrefs and Domain Rating (DR) are trademarks of Ahrefs Pte. Ltd. DAPA Metrics is an independent software tool and is not affiliated, endorsed, or sponsored by Moz or Ahrefs.
          </p>
        </div>
      </div>

    </div>
  );
}
