// src/app/editorial-standards/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://dapametrics.vercel.app';

export const metadata: Metadata = {
  title: 'Editorial Standards — How DAPA Metrics Researches and Publishes Content',
  description:
    'Understand how DAPA Metrics selects topics, researches sources, fact-checks claims, attributes information, updates articles, and handles corrections. Our editorial process is designed around accuracy and transparency.',
  keywords: [
    'dapa metrics editorial standards',
    'editorial policy',
    'content accuracy',
    'fact checking policy',
    'how articles are written',
  ],
  alternates: {
    canonical: `${SITE_URL}/editorial-standards`,
  },
  openGraph: {
    title: 'Editorial Standards — DAPA Metrics',
    description:
      'How DAPA Metrics selects, researches, writes, fact-checks, and updates its SEO content.',
    url: `${SITE_URL}/editorial-standards`,
    type: 'website',
  },
};

export default function EditorialStandardsPage() {
  return (
    <div className="w-full max-w-[1550px] mx-auto px-4 sm:px-8 py-10 text-gray-800">
      <div className="bg-white border border-gray-300 rounded-lg p-6 sm:p-10 shadow-sm">

        {/* Header */}
        <div className="border-b border-gray-200 pb-4 mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded border border-blue-200">
            Transparency
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-3">
            Editorial Standards
          </h1>
          <p className="text-gray-600 mt-2 max-w-2xl">
            This page explains how DAPA Metrics selects topics, researches sources, writes and
            fact-checks articles, and handles updates and corrections. We believe transparent
            editorial practices are fundamental to trustworthy content.
          </p>
          <p className="text-sm text-gray-400 mt-2">Last reviewed: September 2026</p>
        </div>

        <div className="space-y-10 max-w-3xl">

          {/* 1 — Who Writes */}
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">1. Who Writes Our Content</h2>
            <p className="text-gray-700 leading-relaxed">
              Articles on DAPA Metrics are published under the byline{' '}
              <strong>DAPA Metrics Editorial Team</strong>. We do not claim individual named authors
              unless an author explicitly agrees to be identified and their credentials can be
              independently verified.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              Content is produced with the assistance of AI writing tools and reviewed for factual
              accuracy, source attribution, and alignment with our editorial standards before
              publication. We believe in transparency about this process: AI tools help with drafting
              and structure, but all factual claims are verified against primary sources and
              corrected where necessary.
            </p>
          </section>

          {/* 2 — How Topics Are Selected */}
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">2. How Topics Are Selected</h2>
            <p className="text-gray-700 leading-relaxed">
              We select topics based on:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-gray-700 mt-2 pl-2">
              <li>
                <strong>Search intent match</strong> — we research what readers are actually asking
                and what questions remain underserved in existing content.
              </li>
              <li>
                <strong>Relevance to our tools</strong> — topics are prioritised if they connect
                meaningfully to Domain Authority, Page Authority, Spam Score, Open PageRank, or
                related SEO metrics that DAPA Metrics measures.
              </li>
              <li>
                <strong>Factual tractability</strong> — we do not publish articles on topics where
                we cannot find reliable primary sources for key claims.
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              We do not publish content solely to target keyword volume. Articles that do not provide
              genuine informational value beyond what other sources already offer are not published.
            </p>
          </section>

          {/* 3 — How We Research and Source */}
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">3. How We Research and Source Claims</h2>
            <p className="text-gray-700 leading-relaxed">
              For every article, we identify the primary authoritative sources for key factual
              claims. These are linked in the article&apos;s reference section. Our preferred source
              types are:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-gray-700 mt-2 pl-2">
              <li>Official vendor documentation (e.g. Moz, Google Search Central)</li>
              <li>Peer-reviewed research or publicly citable industry research</li>
              <li>Official API and product documentation</li>
              <li>Primary data we have collected and can describe transparently</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              Where a claim reflects our own interpretation or a common industry convention rather
              than a documented fact, we label it explicitly — for example, using phrases like
              &quot;DAPA Metrics&apos; practical interpretation&quot; or &quot;illustrative reference
              ranges.&quot; We do not present DAPA-derived heuristics as official industry statistics.
            </p>
          </section>

          {/* 4 — How We Fact-Check */}
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">4. How We Fact-Check</h2>
            <p className="text-gray-700 leading-relaxed">
              Before an article is published, we verify that:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-gray-700 mt-2 pl-2">
              <li>Every specific factual claim is supported by a linkable primary source.</li>
              <li>Proprietary metric methodologies (e.g. Moz Spam Score) are described in terms
                consistent with the vendor&apos;s own documentation, not reconstructed from
                assumptions.</li>
              <li>Numerical thresholds or benchmarks that are not based on documented research are
                labelled as illustrative, not as established standards.</li>
              <li>No personal information, addresses, or private details appear in the content.</li>
            </ul>
          </section>

          {/* 5 — How Articles Are Updated */}
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">5. How Articles Are Updated</h2>
            <p className="text-gray-700 leading-relaxed">
              SEO metrics, vendor methodologies, and best practices evolve. We review articles
              periodically and update them when:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-gray-700 mt-2 pl-2">
              <li>A vendor (e.g. Moz, Google) changes its methodology or documentation.</li>
              <li>We identify a factual error or imprecision in the published version.</li>
              <li>A reader or expert identifies an inaccuracy and contacts us.</li>
              <li>The article&apos;s guidance has become outdated relative to current practice.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              Updated articles display a &quot;Last reviewed&quot; date. Substantive corrections are
              noted in the article where relevant.
            </p>
          </section>

          {/* 6 — How We Handle Corrections */}
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">6. How We Handle Corrections</h2>
            <p className="text-gray-700 leading-relaxed">
              If you believe an article contains a factual error, we want to hear about it. Contact
              us via the{' '}
              <Link href="/contact" className="text-blue-600 hover:underline">
                contact page
              </Link>
              . Please include:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-gray-700 mt-2 pl-2">
              <li>The specific claim you believe is incorrect.</li>
              <li>A link to the primary source that contradicts it, if available.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              We review all correction requests. If an error is confirmed, we update the article
              promptly and acknowledge the correction.
            </p>
          </section>

          {/* 7 — Commercial interests */}
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">7. Commercial Interests and Independence</h2>
            <p className="text-gray-700 leading-relaxed">
              DAPA Metrics is an independent platform. Content is not commissioned by or written on
              behalf of any third-party tool, vendor, or agency. Articles that reference DAPA
              Metrics&apos; own tools do so because those tools are directly relevant to the topic —
              not as a substitute for providing genuine informational value.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              The site is supported by display advertising. Advertisers have no editorial influence
              over article content, topic selection, or conclusions.
            </p>
          </section>

          {/* Contact */}
          <div className="border-t border-gray-200 pt-6">
            <p className="text-gray-600 text-sm">
              Questions about our editorial process?{' '}
              <Link href="/contact" className="text-blue-600 hover:underline">
                Contact the DAPA Metrics Editorial Team.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
