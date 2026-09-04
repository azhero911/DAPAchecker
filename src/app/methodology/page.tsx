// src/app/methodology/page.tsx
import { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://dapametrics.vercel.app';

export const metadata: Metadata = {
  title: 'Metric Methodology — How DA, PA, and Spam Scores Are Calculated',
  description:
    'Technical whitepaper explaining the mathematical models and graph algorithms behind Moz Domain Authority, Page Authority, Spam Score, and Open PageRank.',
  alternates: {
    canonical: `${SITE_URL}/methodology`,
  },
  openGraph: {
    title: 'Metric Methodology — DAPA Metrics Scoring Algorithms',
    description:
      'Learn how Moz DA, PA, and Open PageRank calculate web authority using machine learning and eigenvector centrality.',
    url: `${SITE_URL}/methodology`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Metric Methodology — DAPA Metrics Scoring Algorithms',
    description:
      'Technical explanation of how Domain Authority, Page Authority, and Spam Score are calculated.',
  },
};

export default function MethodologyPage() {
  return (
    <div className="w-full max-w-[1550px] mx-auto px-4 sm:px-8 py-10 text-gray-800">
      
      <div className="bg-white border border-gray-300 rounded-lg p-6 sm:p-10 shadow-sm">
        <h1 className="text-2xl sm:text-[34px] font-bold text-gray-900 mb-4 border-b border-gray-200 pb-3 leading-tight">
          Algorithm & Scoring Methodology
        </h1>

        <div className="space-y-5 text-[16px] leading-relaxed text-gray-700">
          <p>
            At DAPA Metrics, we believe webmasters and search marketers deserve complete clarity on how website metrics are calculated. Below is the technical breakdown of the algorithms utilized across our platform.
          </p>

          <h2 className="text-xl font-bold text-gray-900 pt-3">
            1. Moz Domain Authority (DA) Mathematical Model
          </h2>
          <p>
            Domain Authority is not a single calculation; it is a <strong>machine learning algorithm</strong> trained to predict how often a website appears in Google SERPs across thousands of test search queries.
          </p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>
              <strong>Input Factors</strong>: Evaluates over 40 distinct signals, including total referring domains, root domain link equity, link diversity, MozRank, and MozTrust.
            </li>
            <li>
              <strong>The Logarithmic Nature</strong>: Because DA uses a logarithmic scale (1 to 100), moving from DA 20 to DA 30 might require 20 high-quality root referring domains, whereas moving from DA 75 to DA 85 requires thousands of authoritative editorial links.
            </li>
            <li>
              <strong>Relative Scaling</strong>: Your DA score is scaled against the entire global web index. If massive sites like Wikipedia or Amazon earn millions of new links faster than your site, your DA may adjust downward slightly during monthly recalculations.
            </li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 pt-3">
            2. Moz Spam Score (SS) Algorithm
          </h2>
          <p>
            Moz Spam Score evaluates <strong>27 distinct correlation features</strong> identified among sites that Google has penalized or deindexed.
          </p>
          <p>
            Key signals include: low text-to-HTML ratios, disproportionate external outbound links, lack of contact/about pages, thin content footprints, heavy reliance on non-standard TLDs, and unnatural exact-match anchor text distribution.
          </p>
          <p>
            A Spam Score of 2% means that only 2% of sites with similar link features have been penalized by Google. A Spam Score of 70% indicates that 70% of sites sharing those patterns faced algorithmic or manual penalties.
          </p>

          <h2 className="text-xl font-bold text-gray-900 pt-3">
            3. Open PageRank & Crawl Graph
          </h2>
          <p>
            Open PageRank uses open web crawl archives (Common Crawl) to compute an open algorithmic PageRank score on a 0.0 to 10.0 scale. It serves as an independent benchmark of web-graph centrality without commercial bias.
          </p>

          <h2 className="text-xl font-bold text-gray-900 pt-3">
            4. Data Freshness & Caching Architecture
          </h2>
          <p>
            Because Moz updates its global index every 30 to 45 days, querying the same domain multiple times within a 24-hour period produces identical results. DAPA Metrics stores verified domain data in an encrypted cache for up to 7 days, guaranteeing sub-100ms response times while reducing unnecessary network bandwidth.
          </p>
        </div>
      </div>

    </div>
  );
}
