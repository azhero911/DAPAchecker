// src/app/methodology/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Metric Methodology - How Domain Authority & Spam Scores Are Calculated',
  description:
    'Scientific methodology whitepaper explaining the mathematical models behind Moz DA, PA, Spam Score, and Open PageRank algorithms.',
};

export default function MethodologyPage() {
  return (
    <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 py-12 text-gray-800">
      
      <div className="bg-white border-2 border-gray-300 rounded-xl p-8 sm:p-12 shadow-sm">
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6 border-b border-gray-200 pb-4">
          Algorithm & Scoring Methodology
        </h1>

        <div className="space-y-6 text-base sm:text-lg leading-relaxed text-gray-700">
          <p>
            At DAPA Metrics, we believe webmasters and search marketers deserve complete clarity on how website metrics are calculated. Below is the technical breakdown of the algorithms utilized across our platform.
          </p>

          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 pt-4">
            1. Moz Domain Authority (DA) Mathematical Model
          </h2>
          <p>
            Domain Authority is not a single calculation; it is a <strong>machine learning algorithm</strong> trained to predict how often a website appears in Google SERPs across thousands of test search queries.
          </p>
          <ul className="list-disc list-inside space-y-2.5 pl-2">
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

          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 pt-4">
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

          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 pt-4">
            3. Open PageRank & Crawl Graph
          </h2>
          <p>
            Open PageRank uses open web crawl archives (Common Crawl) to compute an open algorithmic PageRank score on a 0.0 to 10.0 scale. It serves as an independent benchmark of web-graph centrality without commercial bias.
          </p>

          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 pt-4">
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
