// src/app/contact/page.tsx
import React from 'react';
import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://dapametrics.vercel.app';

export const metadata: Metadata = {
  title: 'Contact Us — Support & Editorial Team',
  description:
    'Get in touch with the DAPA Metrics engineering and editorial team for technical inquiries, bug reports, and compliance requests.',
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: 'Contact Us — Support & Editorial Team | DAPA Metrics',
    description:
      'Get in touch with the DAPA Metrics engineering and editorial team for technical inquiries, bug reports, and compliance requests.',
    url: `${SITE_URL}/contact`,
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <div className="w-full max-w-[1550px] mx-auto px-4 sm:px-8 py-10 text-gray-800">
      
      <div className="max-w-4xl mx-auto">
        
        <div className="bg-white border border-gray-300 rounded-lg p-6 sm:p-10 shadow-sm mb-8">
          <h1 className="text-2xl sm:text-[34px] font-bold text-gray-900 mb-2 border-b border-gray-200 pb-3 leading-tight">
            Contact DAPA Metrics
          </h1>
          <p className="text-[16px] text-gray-600 mb-6 leading-relaxed">
            Have questions about our SEO metrics, want to report an algorithm bug, or need enterprise bulk API integration? Reach out to our technical team below.
          </p>

          <ContactForm />
        </div>

        {/* Physical Office & Compliance Card (GDPR / AdSense Requirement) */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 sm:p-8 text-sm text-gray-600 space-y-4">
          <h2 className="text-base font-bold text-gray-900">
            Office &amp; Data Controller Information
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <span className="font-semibold text-gray-800 block">Lead Controller:</span>
              <span>Operations &amp; Compliance Lead</span>
              <span className="block text-xs text-gray-500">DAPA Metrics Editorial Team</span>
            </div>
            <div>
              <span className="font-semibold text-gray-800 block">Registered Office:</span>
              <span>71-75 Shelton Street, Covent Garden</span>
              <span className="block text-xs text-gray-500">London, WC2H 9JQ, United Kingdom</span>
            </div>
            <div>
              <span className="font-semibold text-gray-800 block">Direct Inquiries:</span>
              <span className="font-mono text-blue-700 font-bold">support@dapametrics.com</span>
              <span className="block text-xs text-gray-500">Response time: 24–48 hours</span>
            </div>
          </div>
          <p className="text-xs text-gray-500 pt-3 border-t border-gray-200">
            For GDPR / CCPA data inquiries, deletion requests, or technical bug reports, please email us directly with the subject line &quot;Data Privacy Request&quot;.
          </p>
        </div>

      </div>

    </div>
  );
}
