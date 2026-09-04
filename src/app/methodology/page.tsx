// src/app/methodology/page.tsx
import { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://dapametrics.vercel.app';

export const metadata: Metadata = {
  title: 'Metric Methodology — How DA, PA, and Spam Scores Are Evaluated',
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
          Algorithm &amp; Scoring Methodology
        </h1>

        <div className="space-y-5 text-[16px] leading-relaxed text-gray-700">
          <p>
            At DAPA Metrics, we believe webmasters and search marketers deserve complete clarity on how website metrics are calculated and interpreted. Below is the technical breakdown of the metrics and data providers utilized across our platform.
          </p>

          <h2 className="text-xl font-bold text-gray-900 pt-3">
            1. Moz Domain Authority (DA) Mathematical Model
          </h2>
          <p>
            Domain Authority is a proprietary machine learning model developed by Moz. It predicts how likely a website is to rank in Google SERPs based on relative link equity across the web.
          </p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>
              <strong>Input Factors</strong>: Evaluates dozens of signals across Moz&apos;s link index, including total unique referring domains, root domain equity, link diversity, and link quality.
            </li>
            <li>
              <strong>The Logarithmic Scale</strong>: DA operates on a 1–100 logarithmic scale, meaning increases at the higher end generally become significantly more difficult. However, there is no fixed formula or specific number of backlinks required to achieve a given DA score, as score calculations depend on relative comparative strength across Moz&apos;s global web index.
            </li>
            <li>
              <strong>Relative Scaling</strong>: Because DA is scaled against Moz&apos;s entire crawled web graph, a site&apos;s score may adjust during monthly index updates even if its own backlink profile remained constant, if broader comparative index distributions change.
            </li>
            <li>
              <strong>Data Attribution</strong>: Moz&apos;s proprietary Domain Authority, Page Authority, and Spam Score metrics are retrieved via third-party SEO data providers.
            </li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 pt-3">
            2. Moz Spam Score (SS) Diagnostic Model
          </h2>
          <p>
            Moz Spam Score is a <strong>third-party diagnostic metric</strong> that measures how closely a website&apos;s link profile and on-page signals resemble characteristics commonly associated with websites Moz has identified as spam-like.
          </p>
          <p>
            Key signals evaluated include: extreme ratios of links to text, disproportionate external outbound links, absence of verifiable contact information, thin content footprints, heavy reliance on non-standard TLDs, and unnatural exact-match anchor text distributions.
          </p>
          <p>
            Moz Spam Score is not an official Google penalty metric, nor does Google use it in search ranking. It serves as an investigative aid for webmasters conducting backlink audits.
          </p>

          <h2 className="text-xl font-bold text-gray-900 pt-3">
            3. Open PageRank &amp; Crawl Graph
          </h2>
          <p>
            Open PageRank calculates an open-source PageRank algorithm over the neutral <strong>Common Crawl</strong> dataset. Using standard eigenvector centrality on a 0.0 to 10.0 scale, Open PageRank offers an open, transparent indicator of link graph centrality across millions of crawled domains. Update frequency varies by data provider and crawl index releases.
          </p>

          <h2 className="text-xl font-bold text-gray-900 pt-3">
            4. Data Freshness &amp; Caching Architecture
          </h2>
          <p>
            Because third-party authority indices update periodically (typically on 30-to-45-day crawl release cycles), querying the same domain multiple times within short intervals produces identical metric data. DAPA Metrics utilizes an in-memory cache layer to optimize repeat queries, reduce unnecessary network traffic, and ensure responsive page performance.
          </p>
        </div>
      </div>

    </div>
  );
}
