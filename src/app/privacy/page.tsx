// src/app/privacy/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - GDPR & CCPA Compliance | DAPA Metrics',
  description: 'DAPA Metrics privacy policy regarding cookies, Google AdSense, data protection, and user rights.',
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
            At <strong>DAPA Metrics</strong> (accessible from dapametrics.com), the privacy of our visitors is one of our primary priorities. This Privacy Policy document contains types of information that is collected and recorded by DAPA Metrics and how we use it.
          </p>

          <h2 className="text-xl font-bold text-gray-900 pt-3">1. Data Minimization & IP Anonymization</h2>
          <p>
            DAPA Metrics does not require user registration, credit cards, or personal credentials to access our free bulk checking tools. When you submit domains to our API, your IP address is immediately hashed using cryptographic algorithms (`SHA-256`) with a rotating salt. We never store raw, identifiable IP addresses in our databases.
          </p>

          <h2 className="text-xl font-bold text-gray-900 pt-3">2. Cookies and Web Beacons</h2>
          <p>
            Like any other website, DAPA Metrics uses &apos;cookies&apos;. These cookies are used to store information including visitors&apos; preferences and the pages on the website that the visitor accessed. The information is used to optimize the users&apos; experience by customizing our web page content based on visitors&apos; browser type and device settings.
          </p>

          <h2 className="text-xl font-bold text-gray-900 pt-3">3. Google DoubleClick DART Cookie & Advertising</h2>
          <p>
            Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to dapametrics.com and other sites on the internet. Visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL: <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-bold">https://policies.google.com/technologies/ads</a>.
          </p>

          <h2 className="text-xl font-bold text-gray-900 pt-3">4. GDPR Data Protection Rights</h2>
          <p>
            Under the General Data Protection Regulation (GDPR), European Union citizens have the right to request access to their personal data, rectify inaccuracies, request erasure, or object to data processing. Because DAPA Metrics anonymizes all domain queries and maintains zero personal logs, no persistent personal data is stored across our servers.
          </p>

          <h2 className="text-xl font-bold text-gray-900 pt-3">5. CCPA Privacy Rights (California Consumer Privacy Act)</h2>
          <p>
            Under the CCPA, California consumers have the right to request disclosure of categories of personal information collected, request deletion, and opt out of the sale of personal information. DAPA Metrics never sells, rents, or trades user search data or query history to third-party data brokers.
          </p>
        </div>

      </div>

    </div>
  );
}
