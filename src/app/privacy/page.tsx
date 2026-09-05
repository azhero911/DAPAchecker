// src/app/privacy/page.tsx
import { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://dapametrics.vercel.app';

export const metadata: Metadata = {
  title: 'Privacy Policy | DAPA Metrics',
  description:
    'Understand how DAPA Metrics handles technical data, cookies, third-party infrastructure processors, and visitor privacy.',
  alternates: {
    canonical: `${SITE_URL}/privacy`,
  },
  openGraph: {
    title: 'Privacy Policy | DAPA Metrics',
    description: 'Data processing transparency and privacy standards at DAPA Metrics.',
    url: `${SITE_URL}/privacy`,
    type: 'website',
  },
};

export default function PrivacyPage() {
  return (
    <div className="w-full max-w-[1550px] mx-auto px-4 sm:px-8 py-10 text-gray-800">
      
      <div className="bg-white border border-gray-300 rounded-lg p-6 sm:p-10 shadow-sm">
        <h1 className="text-2xl sm:text-[34px] font-bold text-gray-900 mb-2 border-b border-gray-200 pb-3 leading-tight">
          Privacy Policy
        </h1>
        <p className="text-[16px] text-gray-500 mb-6">Last Reviewed: September 2026</p>

        <div className="space-y-6 text-[16px] leading-relaxed text-gray-700">
          <p>
            At <strong>DAPA Metrics</strong> (accessible from {SITE_URL}), we prioritize transparency regarding the technical data processed when you access our tools and informational content. This Privacy Policy details our data minimization practices, our use of cookies, and the third-party infrastructure providers that power our platform.
          </p>

          <h2 className="text-xl font-bold text-gray-900 pt-3">1. Information We Process</h2>
          <p>
            DAPA Metrics does not require user registration or credit card information to use our core bulk authority checking tools. When you use our service:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>
              <strong>Domain Queries</strong>: The domain names and URLs you submit for checking are processed to retrieve authority metrics. Queries are cached in temporary storage to deliver fast results for repeated lookups and avoid redundant third-party API calls.
            </li>
            <li>
              <strong>IP Addresses and Rate Limiting</strong>: Within our application logic, incoming IP addresses are salted and hashed using one-way cryptographic algorithms (<code className="bg-gray-100 px-1 py-0.5 rounded text-sm text-gray-800">SHA-256</code>) in memory to enforce fair usage rate limits. We do not store raw, unhashed IP addresses linked to your domain search queries in our application databases.
            </li>
            <li>
              <strong>Server Logs</strong>: Like most web services, standard technical connection metadata (including browser user-agent, request timestamp, and routing information) may be processed by our upstream cloud hosting network for delivery, performance monitoring, and distributed denial-of-service (DDoS) mitigation.
            </li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 pt-3">2. Cookies and Browser Storage</h2>
          <p>
            We use essential local storage and lightweight cookies strictly to retain your functional preferences:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>
              <code className="bg-gray-100 px-1 py-0.5 rounded text-sm text-gray-800">localStorage</code>: Retains your active interface preferences (such as duplicate exclusion settings or session state) on your own device.
            </li>
            <li>
              <strong>Consent Cookies</strong>: Remembers whether you have acknowledged our cookie notice banner.
            </li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 pt-3">3. Third-Party Infrastructure &amp; Data Processors</h2>
          <p>
            To deliver reliable, high-performance web analytics, DAPA Metrics relies on established infrastructure partners:
          </p>
          <div className="border border-gray-200 rounded-lg overflow-hidden my-3">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 border-b border-gray-200 font-semibold text-gray-800">
                <tr>
                  <th className="py-2.5 px-3">Processor</th>
                  <th className="py-2.5 px-3">Purpose</th>
                  <th className="py-2.5 px-3">Data Handled</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-gray-600">
                <tr>
                  <td className="py-2.5 px-3 font-medium text-gray-900">Vercel, Inc.</td>
                  <td className="py-2.5 px-3">Edge hosting, CDN routing, serverless compute</td>
                  <td className="py-2.5 px-3">Technical HTTP request headers, IP for network routing</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-medium text-gray-900">Neon / PostgreSQL</td>
                  <td className="py-2.5 px-3">Serverless database persistence</td>
                  <td className="py-2.5 px-3">Aggregate search counts, user contact forms, feedback ratings</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-medium text-gray-900">Upstash, Inc.</td>
                  <td className="py-2.5 px-3">Edge caching and rate-limit counters</td>
                  <td className="py-2.5 px-3">Hashed IP tokens, cached domain authority metrics</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-medium text-gray-900">Open PageRank API</td>
                  <td className="py-2.5 px-3">PageRank metric resolution</td>
                  <td className="py-2.5 px-3">Queried domain names (via server-to-server API calls)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold text-gray-900 pt-3">4. Third-Party Advertising Policy</h2>
          <p>
            DAPA Metrics does not currently deploy behavioral advertising networks or third-party tracking beacons. When advertising partners (such as Google AdSense) are introduced to support infrastructure maintenance costs, advertisements will be served in compliance with Google publisher policies. Visitors will have access to privacy controls to manage personalized ad preferences via Google Ads Settings.
          </p>

          <h2 className="text-xl font-bold text-gray-900 pt-3">5. Data Retention &amp; User Rights</h2>
          <p>
            We retain feedback submissions and voluntary contact requests only as long as necessary to address inquiries. We do not sell, rent, or trade user search histories to third-party data brokers.
          </p>
          <p>
            Depending on your jurisdiction (such as the European Economic Area or California), you may have rights regarding access, correction, or deletion of personal data you have voluntarily provided (e.g. through our contact form).
          </p>

          <h2 className="text-xl font-bold text-gray-900 pt-3">6. Contact Information</h2>
          <p>
            If you have questions regarding this Privacy Policy or wish to exercise any applicable data rights, contact us at <a href="mailto:support@dapametrics.com" className="text-blue-700 underline font-bold">support@dapametrics.com</a> or via our <a href="/contact" className="text-blue-700 underline font-bold">contact page</a>.
          </p>
        </div>

      </div>

    </div>
  );
}
