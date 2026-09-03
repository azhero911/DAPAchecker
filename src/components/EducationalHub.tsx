// src/components/EducationalHub.tsx
import Link from 'next/link';

export default function EducationalHub() {
  return (
    <div className="space-y-10 mb-16 text-gray-800">
      
      {/* 1. What is DA & PA Section */}
      <div className="bg-white border-2 border-gray-300 rounded-xl p-8 sm:p-10 shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4 border-b border-gray-200 pb-3">
          What is Moz Domain Authority (DA) and Page Authority (PA)?
        </h2>
        
        <div className="text-base sm:text-lg leading-relaxed space-y-4 text-gray-700">
          <p>
            <strong>Domain Authority (DA)</strong> is a search engine ranking score developed by Moz that predicts how likely an entire root domain is to rank in Google search engine result pages (SERPs). Scores range from 1 to 100, with higher numbers indicating a stronger capability to rank for competitive search queries.
          </p>
          <p>
            <strong>Page Authority (PA)</strong> measures the predictive ranking strength of a specific individual URL rather than the entire root domain. While a website&apos;s homepage might carry a high DA of 65, an internal blog post or newly published product page might start with a PA of 15 until it acquires internal link equity and direct external backlinks.
          </p>
          
          <div className="p-5 bg-blue-50/70 border border-blue-200 rounded-lg mt-4 text-base text-blue-950">
            <span className="font-bold text-[#1D4ED8] text-lg block mb-1">Mathematical Reality: The 1–100 Logarithmic Curve</span>
            Moz calculates authority on a logarithmic scale. This means growing your score from DA 15 to DA 25 requires roughly 20 to 30 quality referring domains. In contrast, moving from DA 70 to DA 80 requires thousands of authoritative editorial mentions from top-tier publications.
          </div>
        </div>
      </div>

      {/* 2. Does Google Use Domain Authority? (E-E-A-T Quality Signal) */}
      <div className="bg-white border-2 border-gray-300 rounded-xl p-8 sm:p-10 shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4 border-b border-gray-200 pb-3">
          Does Google Use Domain Authority to Rank Websites?
        </h2>
        <div className="text-base sm:text-lg leading-relaxed space-y-4 text-gray-700">
          <p>
            <strong>No, Google does not use Domain Authority in its ranking algorithms.</strong> Google search representatives (including John Mueller and Gary Illyes) have repeatedly clarified that Google calculates ranking signals on a per-page basis using PageRank and proprietary ranking systems.
          </p>
          <p>
            Moz Domain Authority is an external third-party metric. However, SEO professionals rely on DA because it heavily correlates with search visibility. When a website earns high-quality backlinks from diverse root domains, both Moz DA and Google organic rankings naturally increase together.
          </p>
        </div>
      </div>

      {/* 3. Moz Spam Score Breakdown Table */}
      <div className="bg-white border-2 border-gray-300 rounded-xl p-8 sm:p-10 shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4 border-b border-gray-200 pb-3">
          Moz Spam Score (SS): What Do the Risk Percentages Mean?
        </h2>
        <p className="text-base sm:text-lg text-gray-600 mb-6">
          Spam Score represents the percentage of websites with similar link profiles and footprint anomalies that have been penalized or de-indexed by Google:
        </p>

        <div className="table-scroll-container">
          <table className="w-full text-left text-base tool-table border-collapse min-w-[850px]">
            <thead className="bg-gray-100 text-gray-900 font-bold uppercase text-sm">
              <tr>
                <th className="py-3.5 px-4">Spam Score %</th>
                <th className="py-3.5 px-4">Risk Assessment</th>
                <th className="py-3.5 px-4">Impact on Rankings & Backlinks</th>
                <th className="py-3.5 px-4">Recommended Action</th>
              </tr>
            </thead>
            <tbody className="text-base">
              <tr>
                <td className="py-4 px-4 font-black text-green-700 text-xl">1% – 30%</td>
                <td className="py-4 px-4 font-bold text-green-700">Low Risk (Safe)</td>
                <td className="py-4 px-4 text-gray-700">Clean backlink profile. Safe for guest posting, partnerships, and expired domain acquisition.</td>
                <td className="py-4 px-4 text-gray-600">No action needed. Regular quarterly backlink monitoring.</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-black text-amber-600 text-xl">31% – 60%</td>
                <td className="py-4 px-4 font-bold text-amber-600">Moderate Risk</td>
                <td className="py-4 px-4 text-gray-700">Shows unnatural link patterns, thin affiliate content, or reciprocal link scheme footprints.</td>
                <td className="py-4 px-4 text-gray-600">Audit backlink anchors and disavow suspicious sitewide footer links.</td>
              </tr>
              <tr className="bg-red-50/40">
                <td className="py-4 px-4 font-black text-red-600 text-xl">61% – 100%</td>
                <td className="py-4 px-4 font-bold text-red-600">High / Toxic Risk</td>
                <td className="py-4 px-4 text-gray-700">Strong correlation with Google algorithmic or manual actions. Toxic for SEO.</td>
                <td className="py-4 px-4 text-red-700 font-bold">Immediate backlink cleanup and submit Google Disavow file.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 4. What is a Good DA Score? (By Niche / Business Category) */}
      <div className="bg-white border-2 border-gray-300 rounded-xl p-8 sm:p-10 shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4 border-b border-gray-200 pb-3">
          What is a Good Domain Authority Score?
        </h2>
        <p className="text-base sm:text-lg text-gray-600 mb-6">
          Authority is relative to your specific industry competitors. Here is the realistic benchmark breakdown:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-base">
          <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl">
            <span className="font-black text-gray-900 text-2xl block mb-1">DA 1 – 20</span>
            <span className="text-blue-700 font-bold block mb-2 text-base">New / Emerging Sites</span>
            <p className="text-gray-600 leading-relaxed text-base">Typical for domains under 12 months old. Can rank for zero-competition long-tail keywords.</p>
          </div>
          <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl">
            <span className="font-black text-gray-900 text-2xl block mb-1">DA 21 – 40</span>
            <span className="text-green-700 font-bold block mb-2 text-base">Niche Blogs & Local SMBs</span>
            <p className="text-gray-600 leading-relaxed text-base">Solid foundation. Consistently ranks for local queries and medium-tail informational guides.</p>
          </div>
          <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl">
            <span className="font-black text-gray-900 text-2xl block mb-1">DA 41 – 65</span>
            <span className="text-purple-700 font-bold block mb-2 text-base">Established Brands</span>
            <p className="text-gray-600 leading-relaxed text-base">Strong organic visibility. Capable of outranking competitive commercial buyer-intent pages.</p>
          </div>
          <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl">
            <span className="font-black text-gray-900 text-2xl block mb-1">DA 66 – 100</span>
            <span className="text-amber-700 font-bold block mb-2 text-base">Industry Giants</span>
            <p className="text-gray-600 leading-relaxed text-base">Global publications (Forbes, NYTimes, Wikipedia) with millions of passive editorial backlinks.</p>
          </div>
        </div>
      </div>

      {/* 5. 5 Actionable Ways to Increase Domain Authority */}
      <div className="bg-white border-2 border-gray-300 rounded-xl p-8 sm:p-10 shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4 border-b border-gray-200 pb-3">
          5 Actionable Ways to Increase Your Domain Authority
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base text-gray-700">
          <div className="p-6 border border-gray-200 rounded-xl bg-gray-50">
            <h4 className="font-bold text-gray-900 text-lg mb-2">1. Earn Unique Root Referring Domains</h4>
            <p className="leading-relaxed text-gray-600 text-base">
              Getting 10 links from 10 different root websites increases your DA far more than receiving 100 links from the same domain. Focus on publisher diversity.
            </p>
          </div>

          <div className="p-6 border border-gray-200 rounded-xl bg-gray-50">
            <h4 className="font-bold text-gray-900 text-lg mb-2">2. Fix Broken Inbound Links & Redirect Chains</h4>
            <p className="leading-relaxed text-gray-600 text-base">
              Check for 404 errors on pages that previously had backlinks. Re-route them via 301 redirects to reclaim lost link equity and immediately boost Page Authority.
            </p>
          </div>

          <div className="p-6 border border-gray-200 rounded-xl bg-gray-50">
            <h4 className="font-bold text-gray-900 text-lg mb-2">3. Optimize Internal Link Silos</h4>
            <p className="leading-relaxed text-gray-600 text-base">
              Funnel authority from your strongest pages (like your homepage) to your commercial service and product pages using descriptive, non-spammy anchor text.
            </p>
          </div>

          <div className="p-6 border border-gray-200 rounded-xl bg-gray-50">
            <h4 className="font-bold text-gray-900 text-lg mb-2">4. Remove & Disavow Toxic Backlink Footprints</h4>
            <p className="leading-relaxed text-gray-600 text-base">
              Keep your Spam Score below 30% by monitoring negative SEO attacks and submitting disavow files for automated blog-comment and link-farm spam.
            </p>
          </div>

          <div className="p-6 border border-gray-200 rounded-xl bg-gray-50 md:col-span-2">
            <h4 className="font-bold text-gray-900 text-lg mb-2">5. Publish Original Industry Data & Tools (Digital PR)</h4>
            <p className="leading-relaxed text-gray-600 text-base">
              Publishing original data studies, annual surveys, or free utilities naturally earns organic editorial backlinks and press citations without paid outreach.
            </p>
          </div>
        </div>
      </div>

      {/* 6. Authority Comparison: Moz DA vs Ahrefs DR vs Open PageRank */}
      <div className="bg-white border-2 border-gray-300 rounded-xl p-8 sm:p-10 shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4 border-b border-gray-200 pb-3">
          Authority Metric Comparison: Moz DA vs. Ahrefs DR vs. Open PageRank
        </h2>

        <div className="table-scroll-container">
          <table className="w-full text-left text-base tool-table border-collapse min-w-[850px]">
            <thead className="bg-gray-100 text-gray-900 font-bold uppercase text-sm">
              <tr>
                <th className="py-3.5 px-4">Metric Name</th>
                <th className="py-3.5 px-4">Provider</th>
                <th className="py-3.5 px-4">Scale</th>
                <th className="py-3.5 px-4">Calculation Basis</th>
                <th className="py-3.5 px-4">Update Cycle</th>
              </tr>
            </thead>
            <tbody className="text-base">
              <tr>
                <td className="py-4 px-4 font-bold text-blue-800 text-lg">Domain Authority (DA)</td>
                <td className="py-4 px-4 text-gray-700">Moz, Inc.</td>
                <td className="py-4 px-4 font-mono font-bold">1 – 100</td>
                <td className="py-4 px-4 text-gray-700">Machine learning SERP prediction based on 40+ backlink signals.</td>
                <td className="py-4 px-4 text-gray-600">Every 30–45 Days</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-bold text-blue-800 text-lg">Page Authority (PA)</td>
                <td className="py-4 px-4 text-gray-700">Moz, Inc.</td>
                <td className="py-4 px-4 font-mono font-bold">1 – 100</td>
                <td className="py-4 px-4 text-gray-700">Page-specific predictive ranking strength based on direct URL backlinks.</td>
                <td className="py-4 px-4 text-gray-600">Every 30–45 Days</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-bold text-blue-800 text-lg">Domain Rating (DR)</td>
                <td className="py-4 px-4 text-gray-700">Ahrefs</td>
                <td className="py-4 px-4 font-mono font-bold">0 – 100</td>
                <td className="py-4 px-4 text-gray-700">Logarithmic score tracking raw quantity and quality of referring domains.</td>
                <td className="py-4 px-4 text-gray-600">Continuous Live Crawl</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-bold text-blue-800 text-lg">Open PageRank</td>
                <td className="py-4 px-4 text-gray-700">DomCop / Common Crawl</td>
                <td className="py-4 px-4 font-mono font-bold">0.0 – 10.0</td>
                <td className="py-4 px-4 text-gray-700">Open algorithmic PageRank calculation based on open web crawl graph.</td>
                <td className="py-4 px-4 text-gray-600">Monthly Index Crawl</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
