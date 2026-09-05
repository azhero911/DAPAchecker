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
              <strong>Input Factors</strong>: Evaluates multiple link-based signals across Moz&apos;s link index, including total unique referring domains, root domain equity, link diversity, and link quality.
            </li>
            <li>
              <strong>The Logarithmic Scale</strong>: DA operates on a 1–100 logarithmic scale, meaning increases at the higher end generally become significantly more difficult. However, there is no fixed formula, multiplier, or specific number of backlinks required to achieve a given DA score, as score calculations depend on comparative equity across Moz&apos;s entire crawled web graph.
            </li>
            <li>
              <strong>Relative Scaling</strong>: Because DA is scaled against Moz&apos;s entire crawled web graph, a site&apos;s score may adjust during index updates even if its own backlink profile remained constant, if broader comparative index distributions change.
            </li>
            <li>
              <strong>Data Attribution</strong>: Moz&apos;s proprietary Domain Authority, Page Authority, and Spam Score metrics are retrieved via third-party SEO data providers.
            </li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 pt-3">
            2. Moz Spam Score (SS) Diagnostic Model
          </h2>
          <p>
            Moz Spam Score is a <strong>third-party diagnostic metric</strong> based on 27 features correlated with domains that Moz has found to have been penalized or banned by Google. It is a correlation-based signal, not proof that a site is spammy or has received a Google penalty.
          </p>
          <p>
            Moz specifically clarifies that Spam Score is not a measurement of the spamminess of links pointing to your site, and a high score should be used as a starting point for investigation rather than automatically disavowing links. Google&apos;s algorithms automatically ignore many low-quality or scraper links without requiring manual intervention.
          </p>
          <p>
            Moz Spam Score is not an official Google penalty metric, nor does Google use third-party metrics in search ranking. It serves as an investigative aid for webmasters conducting backlink audits.
          </p>

          <h2 className="text-xl font-bold text-gray-900 pt-3">
            3. Open PageRank &amp; Graph Eigenvector Centrality
          </h2>
          <p>
            Open PageRank implements the foundational PageRank formulation pioneered by Larry Page, Sergey Brin, Rajeev Motwani, and Terry Winograd at Stanford University (1998). It computes an iterative random-walk probability distribution over the neutral <strong>Common Crawl</strong> web graph:
          </p>
          <div className="p-4 bg-slate-50 border border-slate-200 rounded font-mono text-sm sm:text-base text-slate-800 text-center my-3 overflow-x-auto">
            PR(u) = (1 - d) / N + d · ∑ [ PR(v) / L(v) ]
          </div>
          <p className="text-sm text-gray-600">
            Where <em>u</em> is a target web page, <em>v</em> represents pages linking to <em>u</em>, <em>L(v)</em> is the outbound link count of page <em>v</em>, <em>N</em> is total web nodes, and <em>d</em> is the probability damping factor (typically set to 0.85).
          </p>
          <p>
            Because Open PageRank evaluates raw hyperlink topology without commercial search intent weightings, it provides an open, structural reference for estimating graph connectivity. Update cadence varies according to Common Crawl index releases.
          </p>

          <h2 className="text-xl font-bold text-gray-900 pt-3">
            4. Distributed Edge Caching &amp; Anti-Abuse Architecture
          </h2>
          <p>
            Because web authority indices update approximately once every 30 to 45 days, querying the same domain repeatedly within short intervals produces identical metrics. DAPA Metrics utilizes a distributed multi-tier cache infrastructure:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>
              <strong>Upstash KV (Redis Edge Cache)</strong>: Checked domains are stored with a 7-day Time-To-Live (TTL). Repeat lookups for popular domains resolve from edge memory rapidly, conserving API quotas and delivering fast responses.
            </li>
            <li>
              <strong>Cryptographic Rate Limiting</strong>: IP addresses are salted and hashed using one-way cryptographic tokens (<code>SHA-256</code>) in memory to prevent automated scraping while guaranteeing visitor anonymity and privacy.
            </li>
            <li>
              <strong>PostgreSQL Historical Persistence</strong>: Live searches are logged into serverless PostgreSQL tables for trend reporting and aggregate benchmarks without collecting personal browsing footprints.
            </li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 pt-3">
            5. Primary Scientific &amp; Search Engine References
          </h2>
          <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 space-y-2">
            <div>• <strong>Stanford InfoLab (1998)</strong>: <em>The PageRank Citation Ranking: Bringing Order to the Web</em> (Page, Brin, Motwani, Winograd).</div>
            <div>• <strong>Google Search Central</strong>: <em>Spam Policies for Google Web Search &amp; Link Best Practices</em>.</div>
            <div>• <strong>Moz Learning Center</strong>: <em>Domain Authority, Page Authority &amp; Spam Score Diagnostic Documentation</em>.</div>
            <div>• <strong>Common Crawl Foundation</strong>: <em>Open Web Crawl Graph &amp; Graph Topology Datasets</em>.</div>
          </div>

        </div>
      </div>
    </div>
  );
}
