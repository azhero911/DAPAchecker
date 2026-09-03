// src/components/EducationalHub.tsx
import Link from 'next/link';

export default function EducationalHub() {
  return (
    <div className="space-y-6 mb-8 text-gray-800">
      
      {/* 1. What is DA & PA */}
      <div className="bg-white border border-gray-300 rounded-md p-6 sm:p-7 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2.5">
          What is Moz Domain Authority (DA) and Page Authority (PA)?
        </h2>
        <div className="text-[16px] leading-relaxed space-y-3 text-gray-700">
          <p>
            <strong>Domain Authority (DA)</strong> is a search engine ranking metric created by Moz that predicts how likely a website is to rank in Google search engine result pages (SERPs). Scores range on a logarithmic scale from 1 to 100, where higher numbers correspond to greater organic ranking power.
          </p>
          <p>
            <strong>Page Authority (PA)</strong> measures the predictive ranking ability of an individual web page rather than the whole root domain. While a brand&apos;s homepage may enjoy a DA of 60, a brand-new blog post or newly published landing page will initially start with a modest PA until it receives internal link equity and external backlinks.
          </p>
          <div className="p-4 bg-blue-50 border border-blue-200 rounded text-blue-950 text-[16px]">
            <span className="font-bold text-[#1D4ED8] block mb-1">The 1–100 Logarithmic Scale Reality:</span>
            Growing your score from DA 15 to DA 25 requires roughly 20 to 30 quality referring domains. In contrast, climbing from DA 70 to DA 80 requires thousands of high-tier editorial backlinks from established publications.
          </div>
        </div>
      </div>

      {/* 2. Does Google Use DA? (Trust & Authority Signal) */}
      <div className="bg-white border border-gray-300 rounded-md p-6 sm:p-7 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2.5">
          Does Google Use Domain Authority to Rank Websites?
        </h2>
        <div className="text-[16px] leading-relaxed text-gray-700 space-y-3">
          <p>
            <strong>No, Google does not use Domain Authority in its ranking algorithms.</strong> Google search representatives have repeatedly confirmed that Google assesses individual pages using PageRank and hundreds of proprietary ranking signals.
          </p>
          <p>
            Domain Authority is an independent industry simulation. SEOs rely on DA because it heavily correlates with Google rankings. As a website earns genuine, authoritative editorial backlinks, both its Google visibility and its Moz DA naturally rise in tandem.
          </p>
        </div>
      </div>

      {/* 3. Spam Score Risk Table */}
      <div className="bg-white border border-gray-300 rounded-md p-6 sm:p-7 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2.5">
          Moz Spam Score (SS): What Do the Risk Percentages Mean?
        </h2>
        <p className="text-[16px] text-gray-600 mb-4">
          Moz evaluates 27 common signals found among websites that Google has penalized or de-indexed:
        </p>
        <div className="table-scroll-container">
          <table className="w-full text-left text-[16px] tool-table border-collapse min-w-[750px]">
            <thead className="bg-gray-100 text-gray-800 font-bold uppercase text-sm">
              <tr>
                <th className="py-3 px-3.5">Spam Score %</th>
                <th className="py-3 px-3.5">Risk Level</th>
                <th className="py-3 px-3.5">Backlink Impact</th>
                <th className="py-3 px-3.5">Recommended Action</th>
              </tr>
            </thead>
            <tbody className="text-[16px]">
              <tr>
                <td className="py-3 px-3.5 font-bold text-green-700">1% – 30%</td>
                <td className="py-3 px-3.5 font-bold text-green-700">Low Risk (Safe)</td>
                <td className="py-3 px-3.5 text-gray-700">Healthy link profile. Safe for guest posting, brand partnerships, and expired domain acquisition.</td>
                <td className="py-3 px-3.5 text-gray-600">No action needed. Standard quarterly monitoring.</td>
              </tr>
              <tr>
                <td className="py-3 px-3.5 font-bold text-amber-600">31% – 60%</td>
                <td className="py-3 px-3.5 font-bold text-amber-600">Moderate Risk</td>
                <td className="py-3 px-3.5 text-gray-700">Exhibits link farm patterns, thin affiliate content, or unnatural sitewide footer links.</td>
                <td className="py-3 px-3.5 text-gray-600">Audit backlink anchor texts and disavow suspicious sources.</td>
              </tr>
              <tr className="bg-red-50/50">
                <td className="py-3 px-3.5 font-bold text-red-600">61% – 100%</td>
                <td className="py-3 px-3.5 font-bold text-red-600">Toxic / Severe Risk</td>
                <td className="py-3 px-3.5 text-gray-700">Strong correlation with Google manual action penalties or algorithmic suppression.</td>
                <td className="py-3 px-3.5 text-red-700 font-bold">Immediate backlink cleanup and submit Google Disavow file.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 4. Benchmark Categories */}
      <div className="bg-white border border-gray-300 rounded-md p-6 sm:p-7 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2.5">
          What is Considered a Good Domain Authority Score?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-[16px] mt-4">
          <div className="p-4 bg-gray-50 border border-gray-200 rounded">
            <span className="font-bold text-gray-900 text-lg block">DA 1 – 20</span>
            <span className="text-blue-700 font-semibold block mb-1.5 text-sm">New / Emerging Sites</span>
            <p className="text-gray-600 text-[16px] leading-relaxed">Standard for websites under 12 months. Ranks for low-competition long-tail keywords.</p>
          </div>
          <div className="p-4 bg-gray-50 border border-gray-200 rounded">
            <span className="font-bold text-gray-900 text-lg block">DA 21 – 40</span>
            <span className="text-green-700 font-semibold block mb-1.5 text-sm">Niche Blogs & Local SMBs</span>
            <p className="text-gray-600 text-[16px] leading-relaxed">Healthy organic foundation. Competes effectively for local and medium-competition guides.</p>
          </div>
          <div className="p-4 bg-gray-50 border border-gray-200 rounded">
            <span className="font-bold text-gray-900 text-lg block">DA 41 – 65</span>
            <span className="text-purple-700 font-semibold block mb-1.5 text-sm">Established Brands</span>
            <p className="text-gray-600 text-[16px] leading-relaxed">Authoritative status. Regularly ranks for competitive high-volume commercial keywords.</p>
          </div>
          <div className="p-4 bg-gray-50 border border-gray-200 rounded">
            <span className="font-bold text-gray-900 text-lg block">DA 66 – 100</span>
            <span className="text-amber-700 font-semibold block mb-1.5 text-sm">Industry Giants</span>
            <p className="text-gray-600 text-[16px] leading-relaxed">Global powerhouses (Wikipedia, Forbes, Apple) with millions of natural editorial links.</p>
          </div>
        </div>
      </div>

      {/* 5. Actionable Ways to Increase DA (All 5 Strategies) */}
      <div className="bg-white border border-gray-300 rounded-md p-6 sm:p-7 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2.5">
          5 White-Hat Strategies to Increase Your Domain Authority
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[16px] text-gray-700">
          <div className="p-4 border border-gray-200 rounded bg-gray-50">
            <h4 className="font-bold text-gray-900 text-[16px] mb-1.5">1. Prioritize Referring Domain Diversity</h4>
            <p className="text-gray-600 text-[16px] leading-relaxed">Earning 10 links from 10 distinct root domains boosts DA significantly more than 100 links from a single site.</p>
          </div>
          <div className="p-4 border border-gray-200 rounded bg-gray-50">
            <h4 className="font-bold text-gray-900 text-[16px] mb-1.5">2. Fix Broken Inbound Links with 301s</h4>
            <p className="text-gray-600 text-[16px] leading-relaxed">Reclaim lost backlink equity by 301-redirecting 404 pages that previously acquired backlinks to relevant live pages.</p>
          </div>
          <div className="p-4 border border-gray-200 rounded bg-gray-50">
            <h4 className="font-bold text-gray-900 text-[16px] mb-1.5">3. Optimize Internal PageRank Silos</h4>
            <p className="text-gray-600 text-[16px] leading-relaxed">Distribute authority from your homepage to high-priority content using contextual, descriptive internal links.</p>
          </div>
          <div className="p-4 border border-gray-200 rounded bg-gray-50">
            <h4 className="font-bold text-gray-900 text-[16px] mb-1.5">4. Maintain Spam Score Below 30%</h4>
            <p className="text-gray-600 text-[16px] leading-relaxed">Perform regular backlink audits and disavow automated scraper domains and spam blog comment footprints.</p>
          </div>
          <div className="p-4 border border-gray-200 rounded bg-gray-50 md:col-span-2">
            <h4 className="font-bold text-gray-900 text-[16px] mb-1.5">5. Publish Original Industry Data & Tools (Digital PR)</h4>
            <p className="text-gray-600 text-[16px] leading-relaxed">Publishing original data studies, annual surveys, or free utilities naturally earns organic editorial backlinks and press citations without paid outreach.</p>
          </div>
        </div>
      </div>

    </div>
  );
}
