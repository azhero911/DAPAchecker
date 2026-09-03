// src/app/about/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us - DAPA Metrics Team & Editorial Standards',
  description: 'Learn about the mission, engineering team, and data standards behind DAPA Metrics free SEO tools.',
};

export default function AboutPage() {
  return (
    <div className="w-full max-w-[1550px] mx-auto px-4 sm:px-8 py-10 text-gray-800">
      
      <div className="bg-white border border-gray-300 rounded-lg p-6 sm:p-10 shadow-sm">
        <h1 className="text-2xl sm:text-[34px] font-bold text-gray-900 mb-4 border-b border-gray-200 pb-3 leading-tight">
          About DAPA Metrics
        </h1>

        <div className="space-y-5 text-[16px] leading-relaxed text-gray-700">
          <p>
            Welcome to <strong>DAPA Metrics</strong>. We are an independent team of software engineers, SEO specialists, and webmasters dedicated to making essential search engine optimization data transparent, accurate, and completely free.
          </p>

          <h2 className="text-xl font-bold text-gray-900 pt-3">Why We Built DAPA Metrics</h2>
          <p>
            Checking basic website authority shouldn’t feel like navigating an obstacle course. Most existing free DA checkers are cluttered with invasive pop-ups, slow loading times, mandatory email paywalls, and annoying image CAPTCHAs that disrupt digital marketing workflows.
          </p>
          <p>
            We built DAPA Metrics to provide a <strong>clean, fast, desktop-grade utility</strong> where SEO professionals, bloggers, domain flippers, and small business owners can evaluate up to 10 domains simultaneously without ads blocking their screen or waiting 30 seconds for a result.
          </p>

          <h2 className="text-xl font-bold text-gray-900 pt-3">Our Data Principles</h2>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>
              <strong>Metric Transparency</strong>: We clearly distinguish between distinct algorithms (Moz DA/PA, Moz Spam Score, and Open PageRank). We never synthesize or alter data to mislead users.
            </li>
            <li>
              <strong>Zero Data Selling</strong>: We do not store or sell your search history. Client domain checks are anonymized and cached strictly to maintain fast performance and lower server overhead.
            </li>
            <li>
              <strong>Independent Platform</strong>: Domain Authority and Page Authority are trademarks of Moz, Inc. We are not owned or operated by Moz, which allows us to provide neutral, objective data tools.
            </li>
          </ul>

          <div className="mt-8 pt-6 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4">
            <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-[#1D4ED8] hover:bg-[#1E40AF] text-white font-bold rounded-lg transition text-[16px]">
              Try the Bulk DA PA Checker Free →
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-700 font-bold text-[16px]">
              Contact our team
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
}
