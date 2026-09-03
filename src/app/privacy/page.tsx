// src/app/privacy/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - GDPR & CCPA Compliance | DAPA Metrics',
  description: 'DAPA Metrics privacy policy regarding cookies, Google AdSense, data protection, and user rights.',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
      
      <div className="bg-white border border-gray-300 rounded-md p-6 sm:p-8 shadow-sm">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-3">
          Privacy Policy
        </h1>
        <p className="text-xs text-gray-500 mb-6">Last Updated: September 2026</p>

        <div className="space-y-4 text-sm leading-relaxed text-gray-700">
          <p>
            At <strong>DAPA Metrics</strong> (accessible from dapametrics.com), the privacy of our visitors is one of our primary priorities. This Privacy Policy document contains types of information that is collected and recorded by DAPA Metrics and how we use it.
          </p>

          <h2 className="text-lg font-bold text-gray-900 pt-2">1. Data Minimization & IP Anonymization</h2>
          <p>
            DAPA Metrics does not require user registration, credit cards, or personal credentials to access our free bulk checking tools. When you submit domains to our API, your IP address is immediately hashed using cryptographic algorithms (`SHA-256`) with a rotating salt. We never store raw, identifiable IP addresses in our databases.
          </p>

          <h2 className="text-lg font-bold text-gray-900 pt-2">2. Cookies and Web Beacons</h2>
          <p>
            Like any other website, DAPA Metrics uses &apos;cookies&apos;. These cookies are used to store information including visitors&apos; preferences and the pages on the website that the visitor accessed. The information is used to optimize the users&apos; experience by customizing our web page content based on visitors&apos; browser type and device settings.
          </p>

          <h2 className="text-lg font-bold text-gray-900 pt-2">3. Google DoubleClick DART Cookie & Advertising</h2>
          <p>
            Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to dapametrics.com and other sites on the internet. Visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL: <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">https://policies.google.com/technologies/ads</a>.
          </p>

          <h2 className="text-lg font-bold text-gray-900 pt-2">4. GDPR Data Protection Rights</h2>
          <p>
            We want to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>The right to access – You have the right to request copies of your personal data.</li>
            <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate.</li>
            <li>The right to erasure – You have the right to request that we erase your personal data under certain conditions.</li>
            <li>The right to object to processing – You have the right to object to our processing of your personal data.</li>
          </ul>

          <h2 className="text-lg font-bold text-gray-900 pt-2">5. Data Retention Policy</h2>
          <p>
            Domain metric checks stored in our temporary caching layer are retained for a maximum duration of 7 to 30 days to facilitate fast repeat queries and reduce server load, after which they are systematically purged.
          </p>

          <h2 className="text-lg font-bold text-gray-900 pt-2">6. Contact Us</h2>
          <p>
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at <strong>privacy@dapametrics.com</strong>.
          </p>
        </div>
      </div>

    </div>
  );
}
