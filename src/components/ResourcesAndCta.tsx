// src/components/ResourcesAndCta.tsx
import Link from 'next/link';

export default function ResourcesAndCta() {
  return (
    <div className="space-y-6 mb-12 text-gray-800">

      {/* Explore More SEO Resources */}
      <div className="bg-white border border-gray-300 rounded-md p-6 sm:p-7 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-2 border-b border-gray-200 pb-2.5">
          Explore More SEO Resources
        </h2>
        <p className="text-[16px] text-gray-700 font-medium mb-3">
          Want to understand the numbers behind your results?
        </p>
        <p className="text-sm text-gray-600 mb-4">
          Learn more about:
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm mb-4">
          <li>
            <Link
              href="/blog/what-is-a-good-domain-authority-score"
              className="flex items-center gap-2.5 p-3.5 bg-gray-50 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50/40 text-blue-800 font-bold transition group"
            >
              <span className="text-gray-400 group-hover:text-blue-600 transition">→</span>
              <span>What Is a Good Domain Authority Score?</span>
            </Link>
          </li>
          <li>
            <Link
              href="/blog/how-to-check-domain-authority-free"
              className="flex items-center gap-2.5 p-3.5 bg-gray-50 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50/40 text-blue-800 font-bold transition group"
            >
              <span className="text-gray-400 group-hover:text-blue-600 transition">→</span>
              <span>How to Check Domain Authority for Free</span>
            </Link>
          </li>
          <li>
            <Link
              href="/blog/moz-spam-score-explained"
              className="flex items-center gap-2.5 p-3.5 bg-gray-50 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50/40 text-blue-800 font-bold transition group"
            >
              <span className="text-gray-400 group-hover:text-blue-600 transition">→</span>
              <span>Moz Spam Score Explained</span>
            </Link>
          </li>
          <li>
            <Link
              href="/blog/domain-authority-vs-page-authority"
              className="flex items-center gap-2.5 p-3.5 bg-gray-50 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50/40 text-blue-800 font-bold transition group"
            >
              <span className="text-gray-400 group-hover:text-blue-600 transition">→</span>
              <span>Domain Authority vs Page Authority</span>
            </Link>
          </li>
          <li className="sm:col-span-2">
            <Link
              href="/methodology"
              className="flex items-center gap-2.5 p-3.5 bg-gray-50 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50/40 text-blue-800 font-bold transition group"
            >
              <span className="text-gray-400 group-hover:text-blue-600 transition">→</span>
              <span>DAPA Metrics Methodology</span>
            </Link>
          </li>
        </ul>

        <p className="text-xs text-gray-500 pt-2 border-t border-gray-100">
          These pages can provide deeper explanations while the homepage remains focused on the actual checker.
        </p>
      </div>

      {/* About DAPA Metrics */}
      <div className="bg-white border border-gray-300 rounded-md p-6 sm:p-7 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2.5">
          About DAPA Metrics
        </h2>
        <div className="text-[16px] leading-relaxed space-y-3 text-gray-700">
          <p>
            DAPA Metrics is an independent SEO metrics tool designed to make website authority research simpler.
          </p>
          <p>
            The platform brings commonly used third-party SEO metrics into a straightforward workflow so users can compare websites without manually checking every domain individually.
          </p>
          <p>
            DAPA Metrics is not affiliated with or endorsed by Moz or Google.
          </p>
          <p className="text-sm text-gray-600 pt-2 border-t border-gray-100">
            For information about how metrics are obtained and interpreted, see our{' '}
            <Link href="/methodology" className="text-blue-700 underline font-semibold hover:text-blue-900">
              Methodology page
            </Link>
            .
          </p>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white border border-blue-900 rounded-xl p-8 sm:p-10 text-center shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 tracking-tight">
          Check Your Websites in Bulk
        </h2>
        <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-2">
          Compare your domains, competitors, or SEO prospects in one place.
        </p>
        <p className="text-gray-400 text-sm mb-6">
          Enter up to 10 URLs and start your free check.
        </p>
        <div className="mb-6">
          <a
            href="#tool"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-[#1D4ED8] hover:bg-[#2563EB] text-white font-bold text-base rounded shadow-md transition"
          >
            Check DA &amp; PA
          </a>
        </div>
        <p className="text-xs text-gray-400 max-w-2xl mx-auto leading-relaxed border-t border-gray-800 pt-4">
          DAPA Metrics provides third-party SEO metrics for research and comparison. Metrics should not be interpreted as Google ranking scores or guarantees of search performance.
        </p>
      </div>

    </div>
  );
}