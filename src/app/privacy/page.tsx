// src/app/privacy/page.tsx
import { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://dapametrics.vercel.app';

export const metadata: Metadata = {
  title: 'Privacy Policy — GDPR & CCPA Compliance | DAPA Metrics',
  description:
    'Learn how DAPA Metrics protects user privacy with cryptographic SHA-256 IP hashing, zero search history storage, and GDPR/CCPA compliance.',
  alternates: {
    canonical: `${SITE_URL}/privacy`,
  },
  openGraph: {
    title: 'Privacy Policy — DAPA Metrics GDPR & Data Protection',
    description: 'Cryptographic IP anonymization and zero user tracking standards at DAPA Metrics.',
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
        <p className="text-[16px] text-gray-500 mb-6">Last Updated: September 2026</p>

        <div className="space-y-5 text-[16px] leading-relaxed text-gray-700">
          <p>
            At <strong>DAPA Metrics</strong> (accessible from {SITE_URL}), the privacy of our visitors is of paramount importance. This Privacy Policy document details the types of technical data processed by DAPA Metrics and how we uphold stringent data minimization standards.
          </p>

          <h2 className="text-xl font-bold text-gray-900 pt-3">1. Data Minimization &amp; Cryptographic IP Anonymization</h2>
          <p>
            DAPA Metrics does not require user registration, credit cards, or personal credentials to access our free bulk authority checking tools. When you submit domains to our API, your IP address is processed strictly in memory and immediately hashed using cryptographic algorithms (<code className="bg-gray-100 px-1 py-0.5 rounded text-sm text-gray-800">SHA-256</code>) with a rotating salt. We never store raw, identifiable IP addresses in our databases or disk logs.
          </p>

          <h2 className="text-xl font-bold text-gray-900 pt-3">2. Cookies and Local Storage</h2>
          <p>
            DAPA Metrics uses lightweight essential cookies and browser <code className="bg-gray-100 px-1 py-0.5 rounded text-sm text-gray-800">localStorage</code> strictly to store visitor preferences (such as your cookie consent preference and active tool filter states). We do not use intrusive cross-site tracking cookies.
          </p>

          <h2 className="text-xl font-bold text-gray-900 pt-3">3. Third-Party Advertising &amp; Ad Networks Policy</h2>
          <p>
            DAPA Metrics does not currently run behavioral advertising or employ Google DoubleClick DART cookies. When third-party advertising partners (such as Google AdSense) are deployed in the future to support free infrastructure costs, they may use cookies and web beacons to serve contextually relevant ads. Visitors will always retain the right to opt out of personalized advertising via the <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-bold">Google Ads Settings</a> and our consent preferences banner.
          </p>

          <h2 className="text-xl font-bold text-gray-900 pt-3">4. GDPR Compliance (General Data Protection Regulation)</h2>
          <p>
            Under the European Union GDPR, web visitors possess the right to data portability, rectification, and erasure. Because DAPA Metrics maintains a zero-logging architecture for raw IP addresses and does not require account creation, our servers retain no personally identifiable information (PII) linking search queries to individual users.
          </p>

          <h2 className="text-xl font-bold text-gray-900 pt-3">5. CCPA Compliance (California Consumer Privacy Act)</h2>
          <p>
            Under the CCPA, California consumers are entitled to transparency regarding the sale of personal information. DAPA Metrics <strong>does not sell, rent, or trade</strong> user search data or query history to third-party data brokers or marketing lists.
          </p>

          <h2 className="text-xl font-bold text-gray-900 pt-3">6. Data Controller Contact</h2>
          <p>
            If you have questions or require further clarification regarding our privacy practices, please contact our Lead Data Controller at <a href="mailto:support@dapametrics.com" className="text-blue-700 underline font-bold">support@dapametrics.com</a> (71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom).
          </p>
        </div>

      </div>

    </div>
  );
}
