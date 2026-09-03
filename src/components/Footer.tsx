// src/components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-300 mt-16 text-base text-gray-600">
      <div className="widescreen-container py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Col 1: About Platform */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-3">
              <img src="/logo.jpg" alt="DAPA Metrics Logo" className="h-10 w-auto object-contain rounded" />
              <div>
                <span className="font-bold text-gray-900 text-xl block">DAPA Metrics</span>
                <span className="text-xs text-gray-500 font-medium">Measure. Analyze. Grow.</span>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed max-w-lg mb-3 text-base">
              Free online SEO authority engine for digital marketers, webmasters, and SEO agencies to check Moz Domain Authority, Page Authority, Spam Score, and Open PageRank metrics in bulk.
            </p>
            <p className="text-xs text-gray-500">
              Disclaimer: Domain Authority (DA) and Page Authority (PA) are registered trademarks of Moz, Inc. DAPA Metrics is an independent SEO utility platform.
            </p>
          </div>

          {/* Col 2: SEO Tools */}
          <div>
            <h4 className="font-bold text-gray-900 uppercase text-xs tracking-wider mb-4">
              Available Tools
            </h4>
            <ul className="space-y-2.5 text-base font-medium">
              <li>
                <Link href="/" className="hover:text-blue-700 transition">Bulk DA PA Checker</Link>
              </li>
              <li>
                <Link href="/" className="hover:text-blue-700 transition">Moz Spam Score Checker</Link>
              </li>
              <li>
                <Link href="/" className="hover:text-blue-700 transition">Domain Age Lookup</Link>
              </li>
              <li>
                <Link href="/methodology" className="hover:text-blue-700 transition">Algorithm Methodology</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Compliance & Legal */}
          <div>
            <h4 className="font-bold text-gray-900 uppercase text-xs tracking-wider mb-4">
              Legal & Transparency
            </h4>
            <ul className="space-y-2.5 text-base font-medium">
              <li>
                <Link href="/privacy" className="hover:text-blue-700 transition">Privacy Policy (GDPR/CCPA)</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-blue-700 transition">Terms of Service</Link>
              </li>
              <li>
                <Link href="/affiliate-disclosure" className="hover:text-blue-700 transition">Affiliate Disclosure</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-700 transition">About Our Team</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-700 transition">Contact & Support</Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-sm">
          <div>
            &copy; {new Date().getFullYear()} DAPA Metrics. All rights reserved.
          </div>
          <div className="flex items-center space-x-4">
            <span>Serverless Edge Architecture</span>
            <span>•</span>
            <span>Zero Logging of Raw IPs</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
