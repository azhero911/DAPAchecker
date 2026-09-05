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
            <strong>Domain Authority (DA)</strong> is a search engine ranking metric created by Moz that predicts how likely a website is to rank in Google search engine result pages (SERPs). Scores range on a logarithmic scale from 1 to 100, where higher numbers correspond to greater comparative ranking potential.
          </p>
          <p>
            <strong>Page Authority (PA)</strong> measures the predictive ranking ability of an individual web page rather than the whole root domain. While a brand&apos;s homepage may enjoy a DA of 60, a brand-new blog post or newly published landing page will initially start with a modest PA until it receives internal link equity and external backlinks.
          </p>
          <div className="p-4 bg-blue-50 border border-blue-200 rounded text-blue-950 text-[16px]">
            <span className="font-bold text-[#1D4ED8] block mb-1">The 1–100 Logarithmic Scale Reality:</span>
            DA uses a 1–100 logarithmic scale, and score increases at the higher end generally become significantly more difficult. However, there is no fixed number of backlinks or referring domains required to increase a site&apos;s DA, as score adjustments depend on the relative quality, diversity, and equity distribution of linking root domains across Moz&apos;s comparative web index.
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
            Domain Authority is an independent industry simulation. SEOs rely on DA because it correlates with search visibility. As a website earns genuine, authoritative editorial backlinks, both its organic search visibility and its Moz DA naturally rise in tandem.
          </p>
        </div>
      </div>

      {/* 3. Spam Score Risk Table */}
      <div className="bg-white border border-gray-300 rounded-md p-6 sm:p-7 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2.5">
          Moz Spam Score (SS): Diagnostic Bands &amp; Meaning
        </h2>
        <p className="text-[16px] text-gray-600 mb-4">
          Moz Spam Score is a third-party diagnostic metric that measures how closely a site&apos;s characteristics resemble those associated with sites Moz has identified as spam-like. It is not an official Google penalty score or a direct probability of receiving a Google penalty:
        </p>
        <div className="table-scroll-container">
          <table className="w-full text-left text-[16px] tool-table border-collapse min-w-[750px]">
            <thead className="bg-gray-100 text-gray-800 font-bold uppercase text-sm">
              <tr>
                <th className="py-3 px-3.5">Spam Score %</th>
                <th className="py-3 px-3.5">Diagnostic Band</th>
                <th className="py-3 px-3.5">Profile Characteristics</th>
                <th className="py-3 px-3.5">Recommended Action</th>
              </tr>
            </thead>
            <tbody className="text-[16px]">
              <tr>
                <td className="py-3 px-3.5 font-bold text-green-700">1% – 30%</td>
                <td className="py-3 px-3.5 font-bold text-green-700">Low Spam Score</td>
                <td className="py-3 px-3.5 text-gray-700">Natural organic link profile typical of healthy, established websites.</td>
                <td className="py-3 px-3.5 text-gray-600">Standard periodic monitoring; no remediation required.</td>
              </tr>
              <tr>
                <td className="py-3 px-3.5 font-bold text-amber-600">31% – 60%</td>
                <td className="py-3 px-3.5 font-bold text-amber-600">Medium Spam Score</td>
                <td className="py-3 px-3.5 text-gray-700">Exhibits patterns such as unbalanced follow/nofollow ratios, thin pages, or commercial anchor clustering.</td>
                <td className="py-3 px-3.5 text-gray-600">Investigate referring domains and evaluate link acquisition channels.</td>
              </tr>
              <tr className="bg-red-50/50">
                <td className="py-3 px-3.5 font-bold text-red-600">61% – 100%</td>
                <td className="py-3 px-3.5 font-bold text-red-600">High Spam Score</td>
                <td className="py-3 px-3.5 text-gray-700">A higher score indicates stronger correlation with sites exhibiting characteristics associated with penalized or banned domains.</td>
                <td className="py-3 px-3.5 text-red-700">Investigate the site carefully, but do not treat the score as evidence of a Google penalty. Note: Google automatically ignores most low-quality links; disavow only for verified manual actions or unnatural link schemes.</td>
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
            <span className="text-green-700 font-semibold block mb-1.5 text-sm">Niche Blogs &amp; Local SMBs</span>
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

      {/* 5. SEO Authority Metrics Comparison Table (DA vs DR vs AS vs CF/TF) */}
      <div className="bg-white border border-gray-300 rounded-md p-6 sm:p-7 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2.5">
          SEO Authority Metrics Comparison: DA vs DR vs AS vs Trust Flow
        </h2>
        <p className="text-[16px] text-gray-600 mb-4 leading-relaxed">
          Major SEO software providers each calculate proprietary website authority scores. While all operate on relative scales to predict search potential, their underlying math and crawl data vary:
        </p>
        <div className="table-scroll-container">
          <table className="w-full text-left text-[16px] tool-table border-collapse min-w-[800px]">
            <thead className="bg-gray-100 text-gray-800 font-bold uppercase text-sm">
              <tr>
                <th className="py-3 px-3.5">Metric</th>
                <th className="py-3 px-3.5">Provider</th>
                <th className="py-3 px-3.5">Scale</th>
                <th className="py-3 px-3.5">Primary Focus</th>
                <th className="py-3 px-3.5">Key Difference</th>
              </tr>
            </thead>
            <tbody className="text-[16px] divide-y divide-gray-200">
              <tr>
                <td className="py-3.5 px-3.5 font-bold text-blue-700">Domain Authority (DA)</td>
                <td className="py-3.5 px-3.5 font-semibold text-gray-900">Moz</td>
                <td className="py-3.5 px-3.5 font-mono text-sm">1 – 100 Logarithmic</td>
                <td className="py-3.5 px-3.5 text-gray-700">Predicts likelihood of ranking in Google SERPs based on comparative link equity.</td>
                <td className="py-3.5 px-3.5 text-gray-600">Uses machine learning model calibrated against thousands of real search results.</td>
              </tr>
              <tr>
                <td className="py-3.5 px-3.5 font-bold text-emerald-700">Domain Rating (DR)</td>
                <td className="py-3.5 px-3.5 font-semibold text-gray-900">Ahrefs</td>
                <td className="py-3.5 px-3.5 font-mono text-sm">1 – 100 Logarithmic</td>
                <td className="py-3.5 px-3.5 text-gray-700">Measures the raw strength of a target site&apos;s backlink profile and referring domains.</td>
                <td className="py-3.5 px-3.5 text-gray-600">Focuses strictly on link equity quantity and quality without search traffic correlation.</td>
              </tr>
              <tr>
                <td className="py-3.5 px-3.5 font-bold text-purple-700">Authority Score (AS)</td>
                <td className="py-3.5 px-3.5 font-semibold text-gray-900">Semrush</td>
                <td className="py-3.5 px-3.5 font-mono text-sm">1 – 100 Composite</td>
                <td className="py-3.5 px-3.5 text-gray-700">Combines backlink data, estimated organic search traffic, and spam indicators.</td>
                <td className="py-3.5 px-3.5 text-gray-600">Accounts for organic keyword rankings and site traffic in addition to link counts.</td>
              </tr>
              <tr>
                <td className="py-3.5 px-3.5 font-bold text-amber-700">Trust Flow / Citation Flow</td>
                <td className="py-3.5 px-3.5 font-semibold text-gray-900">Majestic</td>
                <td className="py-3.5 px-3.5 font-mono text-sm">0 – 100 Independent</td>
                <td className="py-3.5 px-3.5 text-gray-700">Trust Flow (quality &amp; neighborhood) paired against Citation Flow (link volume).</td>
                <td className="py-3.5 px-3.5 text-gray-600">Measures link distance from trusted seed sites to detect artificial link spam.</td>
              </tr>
              <tr>
                <td className="py-3.5 px-3.5 font-bold text-indigo-700">Open PageRank (OPR)</td>
                <td className="py-3.5 px-3.5 font-semibold text-gray-900">Open PageRank</td>
                <td className="py-3.5 px-3.5 font-mono text-sm">0 – 10.0 Centrality</td>
                <td className="py-3.5 px-3.5 text-gray-700">Calculates graph eigenvector centrality across millions of open web crawl nodes.</td>
                <td className="py-3.5 px-3.5 text-gray-600">Open-data implementation of Stanford&apos;s original PageRank graph algorithm.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 6. Actionable Ways to Increase DA */}
      <div className="bg-white border border-gray-300 rounded-md p-6 sm:p-7 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2.5">
          5 White-Hat Strategies to Strengthen Your Domain Authority
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[16px] text-gray-700">
          <div className="p-4 border border-gray-200 rounded bg-gray-50">
            <h4 className="font-bold text-gray-900 text-[16px] mb-1.5">1. Prioritize Referring Domain Diversity</h4>
            <p className="text-gray-600 text-[16px] leading-relaxed">Earning 10 links from 10 distinct, thematic root domains builds broader domain equity than 100 repetitive links from a single site.</p>
          </div>
          <div className="p-4 border border-gray-200 rounded bg-gray-50">
            <h4 className="font-bold text-gray-900 text-[16px] mb-1.5">2. Fix Broken Inbound Links with 301s</h4>
            <p className="text-gray-600 text-[16px] leading-relaxed">Reclaim lost backlink equity by 301-redirecting 404 URLs that previously acquired external backlinks to relevant, active pages.</p>
          </div>
          <div className="p-4 border border-gray-200 rounded bg-gray-50">
            <h4 className="font-bold text-gray-900 text-[16px] mb-1.5">3. Optimize Internal Linking Silos</h4>
            <p className="text-gray-600 text-[16px] leading-relaxed">Distribute authority from your homepage and cornerstone guides to target sub-pages using contextual, descriptive internal links.</p>
          </div>
          <div className="p-4 border border-gray-200 rounded bg-gray-50">
            <h4 className="font-bold text-gray-900 text-[16px] mb-1.5">4. Audit Link Profile Regularly</h4>
            <p className="text-gray-600 text-[16px] leading-relaxed">Monitor your inbound link profile periodically and ensure your acquisition practices follow search engine webmaster guidelines.</p>
          </div>
          <div className="p-4 border border-gray-200 rounded bg-gray-50 md:col-span-2">
            <h4 className="font-bold text-gray-900 text-[16px] mb-1.5">5. Publish Original Industry Data &amp; Tools (Digital PR)</h4>
            <p className="text-gray-600 text-[16px] leading-relaxed">Publishing original research data, annual benchmarks, or free utilities naturally earns organic editorial citations without paid outreach.</p>
          </div>
        </div>
        <div className="mt-4 pt-3 border-t border-gray-200 flex flex-wrap gap-4 text-xs font-bold text-blue-700">
          <Link href="/methodology" className="hover:underline">
            Read Full Calculation Methodology →
          </Link>
          <span>•</span>
          <Link href="/blog/category/technical-seo" className="hover:underline">
            Technical SEO Guides →
          </Link>
          <span>•</span>
          <Link href="/blog/category/seo-fundamentals" className="hover:underline">
            SEO Fundamentals Guides →
          </Link>
        </div>
      </div>

    </div>
  );
}
