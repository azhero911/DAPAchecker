// src/app/about/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us - DAPA Metrics Team & Editorial Standards',
  description: 'Learn about the mission, engineering team, and data standards behind DAPA Metrics free SEO tools.',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
      
      <div className="bg-white border border-gray-300 rounded-md p-6 sm:p-8 shadow-sm">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-3">
          About DAPA Metrics
        </h1>

        <div className="space-y-4 text-sm leading-relaxed text-gray-700">
          <p>
            Welcome to <strong>DAPA Metrics</strong>. We are an independent team of software engineers, SEO specialists, and webmasters dedicated to making essential search engine optimization data transparent, accurate, and completely free.
          </p>

          <h2 className="text-lg font-bold text-gray-900 pt-2">Why We Built DAPA Metrics</h2>
          <p>
            Checking basic website authority shouldn’t feel like navigating an obstacle course. Most existing free DA checkers are cluttered with invasive pop-ups, slow loading times, mandatory email paywalls, and annoying image CAPTCHAs that disrupt digital marketing workflows.
          </p>
          <p>
            We built DAPA Metrics to provide a <strong>clean, fast, desktop-grade utility</strong> where SEO professionals, bloggers, domain flippers, and small business owners can evaluate up to 10 domains simultaneously without ads blocking their screen or waiting 30 seconds for a result.
          </p>

          <h2 className="text-lg font-bold text-gray-900 pt-2">Our Data Principles</h2>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>
              <strong>Metric Transparency</strong>: We clearly distinguish between distinct algorithms (Moz DA/PA, Moz Spam Score, and Open PageRank). We never synthesize or alter data to mislead users.
            </li>
            <li>
              <strong>Zero Data Selling</strong>: We do not store or sell your search history. Client domain checks are anonymized and cached strictly to maintain fast performance and lower server overhead.
            </li>
            <li>
              <strong>No Spam Guarantee</strong>: We do not require account registration or email submission to use our free bulk tools.
            </li>
          </ul>

          <h2 className="text-lg font-bold text-gray-900 pt-2">Contact & Feedback</h2>
          <p>
            Have suggestions for improvement, feature requests, or agency API inquiries? Reach out directly via our{' '}
            <Link href="/contact" className="text-blue-700 font-semibold hover:underline">
              Contact Page
            </Link>
            . We review all feedback and continuously update our platform.
          </p>
        </div>
      </div>

    </div>
  );
}
