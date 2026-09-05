// src/app/terms/page.tsx
import { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://dapametrics.vercel.app';

export const metadata: Metadata = {
  title: 'Terms of Service | DAPA Metrics',
  description: 'Terms of service, fair use API policy, metric accuracy disclaimers, and limitations of liability for DAPA Metrics.',
  alternates: {
    canonical: `${SITE_URL}/terms`,
  },
  openGraph: {
    title: 'Terms of Service | DAPA Metrics',
    description: 'Fair use policies, metric accuracy disclaimers, and user terms for DAPA Metrics.',
    url: `${SITE_URL}/terms`,
    type: 'website',
  },
};

export default function TermsPage() {
  return (
    <div className="w-full max-w-[1550px] mx-auto px-4 sm:px-8 py-10 text-gray-800">
      
      <div className="bg-white border border-gray-300 rounded-lg p-6 sm:p-10 shadow-sm">
        <h1 className="text-2xl sm:text-[34px] font-bold text-gray-900 mb-2 border-b border-gray-200 pb-3 leading-tight">
          Terms of Service
        </h1>
        <p className="text-[16px] text-gray-500 mb-6">Last Reviewed: September 2026</p>

        <div className="space-y-6 text-[16px] leading-relaxed text-gray-700">
          <p>
            By accessing and using <strong>DAPA Metrics</strong> ({SITE_URL}), you agree to comply with and be bound by the following terms and conditions. If you disagree with any part of these terms, please do not use our services.
          </p>

          <h2 className="text-xl font-bold text-gray-900 pt-3">1. Acceptable Use &amp; Prohibited Activities</h2>
          <p>
            DAPA Metrics provides free online search engine optimization diagnostic tools for individual webmasters, digital marketing agencies, and researchers. When using our platform, you agree not to:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>Attempt to bypass rate limits or query throttling mechanisms through distributed denial-of-service (DDoS) techniques or rotating proxy farms.</li>
            <li>Submit invalid, malformed, or malicious payloads, including private network IP addresses or server-side request forgery (SSRF) targets.</li>
            <li>Scrape, redistribute, or commercially resell bulk programmatic API responses without prior written authorization.</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 pt-3">2. Third-Party Metrics &amp; Data Accuracy Disclaimer</h2>
          <p>
            The metrics provided on DAPA Metrics — including Moz Domain Authority, Page Authority, Moz Spam Score, and Open PageRank — originate from third-party indexes, public datasets (such as Common Crawl), and external APIs.
          </p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>
              <strong>Algorithmic Estimates</strong>: These metrics are third-party simulations and comparative approximations. They are not official Google ranking factors and do not guarantee search rankings or organic traffic performance.
            </li>
            <li>
              <strong>Freshness &amp; Availability</strong>: Third-party indexes update on independent cycles (typically every 30 to 45 days). Metrics may at times be delayed, estimated, temporarily unavailable, or subject to upstream adjustments.
            </li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 pt-3">3. Service Availability</h2>
          <p>
            DAPA Metrics is provided on an &quot;as is&quot; and &quot;as available&quot; basis. While we strive for continuous availability, we make no representation or warranty that our services will be uninterrupted, error-free, or entirely free of downtime caused by maintenance, cloud network events, or upstream API outages.
          </p>

          <h2 className="text-xl font-bold text-gray-900 pt-3">4. API Quotas &amp; Abuse Prevention</h2>
          <p>
            To ensure reliable service for all visitors, automated requests are subject to cryptographic rate limiting. We reserve the right to temporarily or permanently suspend access for IP addresses or client clients that engage in aggressive, abusive, or automated scraping behaviors.
          </p>

          <h2 className="text-xl font-bold text-gray-900 pt-3">5. User Responsibility &amp; Limitation of Liability</h2>
          <p>
            Users are solely responsible for how they interpret and apply information obtained from DAPA Metrics. DAPA Metrics and its maintainers shall not be held liable for any direct, indirect, consequential, or economic loss resulting from link acquisition campaigns, domain purchases, SEO strategies, or disavow actions based on metrics shown on this platform.
          </p>

          <h2 className="text-xl font-bold text-gray-900 pt-3">6. Trademark Notice</h2>
          <p>
            Domain Authority, Page Authority, MozRank, and MozTrust are registered trademarks of Moz, Inc. DAPA Metrics is an independent analytics platform and is not officially affiliated with, sponsored by, or endorsed by Moz, Inc.
          </p>

          <h2 className="text-xl font-bold text-gray-900 pt-3">7. Contact</h2>
          <p>
            If you have questions regarding these Terms of Service, please contact us via our <a href="/contact" className="text-blue-700 underline font-bold">contact page</a> or at <a href="mailto:support@dapametrics.com" className="text-blue-700 underline font-bold">support@dapametrics.com</a>.
          </p>
        </div>

      </div>

    </div>
  );
}
