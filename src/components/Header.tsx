// src/components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-300 shadow-[0_1px_3px_rgba(0,0,0,0.05)] sticky top-0 z-40">
      <div className="widescreen-container h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <img src="/logo.jpg" alt="DAPA Metrics Logo" className="h-12 w-auto object-contain rounded" />
          <div>
            <span className="text-2xl font-black text-gray-900 tracking-tight">
              DAPA Metrics
            </span>
            <span className="hidden sm:inline-block text-xs font-semibold text-gray-500 ml-2 py-0.5 px-2 bg-gray-100 rounded border border-gray-200">
              Measure. Analyze. Grow.
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8 text-base font-semibold text-gray-700">
          <Link href="/" className="text-[#1D4ED8] font-bold border-b-2 border-[#1D4ED8] pb-6 pt-6">
            DA PA Checker
          </Link>
          <Link href="/methodology" className="hover:text-gray-900 pb-6 pt-6 border-b-2 border-transparent transition">
            Methodology
          </Link>
          <Link href="/about" className="hover:text-gray-900 pb-6 pt-6 border-b-2 border-transparent transition">
            About Us
          </Link>
          <Link href="/contact" className="hover:text-gray-900 pb-6 pt-6 border-b-2 border-transparent transition">
            Contact
          </Link>
          <Link href="/affiliate-disclosure" className="hover:text-gray-900 pb-6 pt-6 border-b-2 border-transparent transition">
            Affiliate Notice
          </Link>
        </nav>

        {/* Free Tool Badge & Sign In */}
        <div className="flex items-center space-x-3">
          <Link href="/admin" className="px-4 py-2 text-base font-bold text-gray-700 hover:text-[#1D4ED8] border border-gray-300 rounded bg-white transition shadow-sm">
            Sign In
          </Link>
          <span className="hidden sm:inline-block text-sm font-bold px-3 py-1.5 bg-blue-50 text-[#1D4ED8] border border-blue-200 rounded">
            100% Free Bulk Tool
          </span>
        </div>

      </div>
    </header>
  );
}
