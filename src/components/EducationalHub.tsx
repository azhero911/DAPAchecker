// src/components/EducationalHub.tsx
import Link from 'next/link';

export default function EducationalHub() {
  return (
    <div className="space-y-6 mb-8 text-gray-800">
      
      {/* 1. Check Multiple Domains at Once */}
      <div className="bg-white border border-gray-300 rounded-md p-6 sm:p-7 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2.5">
          Check Multiple Domains at Once
        </h2>
        <div className="text-[16px] leading-relaxed space-y-3 text-gray-700">
          <p>
            Checking websites individually can make a simple SEO comparison unnecessarily time-consuming.
          </p>
          <p>
            DAPA Metrics lets you analyze multiple domains in one batch so you can compare websites, review potential link prospects, research competitors, or organize SEO reports without repeating the same lookup.
          </p>
        </div>

        <div className="mt-5 pt-3 border-t border-gray-100">
          <h3 className="font-bold text-gray-900 text-[15px] mb-3">Useful for:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
            <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
              <strong className="text-gray-900 block mb-0.5">SEO audits</strong>
              <span className="text-gray-600">Compare authority metrics across websites.</span>
            </div>
            <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
              <strong className="text-gray-900 block mb-0.5">Competitor research</strong>
              <span className="text-gray-600">Benchmark competing domains and pages.</span>
            </div>
            <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
              <strong className="text-gray-900 block mb-0.5">Link-building research</strong>
              <span className="text-gray-600">Review potential websites before outreach.</span>
            </div>
            <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
              <strong className="text-gray-900 block mb-0.5">Client reporting</strong>
              <span className="text-gray-600">Collect metrics into one downloadable report.</span>
            </div>
            <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg sm:col-span-2 lg:col-span-2">
              <strong className="text-gray-900 block mb-0.5">Website research</strong>
              <span className="text-gray-600">Quickly compare multiple domains side by side.</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. What Are DA, PA and Spam Score? */}
      <div className="bg-white border border-gray-300 rounded-md p-6 sm:p-7 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2.5">
          What Are DA, PA and Spam Score?
        </h2>
        <p className="text-[16px] text-gray-600 leading-relaxed mb-5">
          Domain Authority, Page Authority, and Spam Score are third-party SEO metrics that can help you evaluate and compare websites. They are useful for SEO research, but they should not be treated as Google&apos;s ranking scores.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-[15px]">
          {/* DA */}
          <div className="p-5 bg-gray-50 border border-gray-200 rounded-lg flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Domain Authority (DA)</h3>
              <p className="text-gray-700 leading-relaxed">
                Domain Authority (DA) is a score developed by Moz that estimates a domain&apos;s ability to rank in search engine results. DA uses a 0–100 scale, with higher scores representing greater predicted ranking strength.
              </p>
              <p className="text-gray-700 leading-relaxed mt-2.5">
                DA is best used as a comparative SEO metric. For example, comparing your website with competitors targeting the same audience can give you useful context about the relative strength of their domains.
              </p>
            </div>
            <div className="mt-3.5 pt-3 border-t border-gray-200 text-xs font-semibold text-blue-900 bg-blue-50/70 p-2 rounded">
              Important: DA is not a Google ranking factor.
            </div>
          </div>

          {/* PA */}
          <div className="p-5 bg-gray-50 border border-gray-200 rounded-lg flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Page Authority (PA)</h3>
              <p className="text-gray-700 leading-relaxed">
                Page Authority (PA) is a Moz metric designed to estimate the ranking strength of an individual webpage.
              </p>
              <p className="text-gray-700 leading-relaxed mt-2.5">
                While DA evaluates a domain, PA focuses on a specific page. Looking at both can help you distinguish between the overall authority of a website and the relative strength of a particular URL.
              </p>
            </div>
            <div className="mt-3.5 pt-3 border-t border-gray-200 text-xs text-gray-600 italic">
              A strong domain does not automatically mean that every page on that domain has the same level of authority.
            </div>
          </div>

          {/* Spam Score */}
          <div className="p-5 bg-gray-50 border border-gray-200 rounded-lg flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Spam Score</h3>
              <p className="text-gray-700 leading-relaxed">
                Spam Score is a Moz metric intended to help identify websites that share characteristics associated with sites that have been penalized or considered spammy.
              </p>
              <p className="text-gray-700 leading-relaxed mt-2.5">
                It should be treated as a diagnostic signal, not a Google penalty score. A higher Spam Score does not mean that Google has penalized a website. If a domain has a high score, investigate its backlink profile, content quality, and overall SEO practices before drawing conclusions.
              </p>
            </div>
            <div className="mt-3.5 pt-3 border-t border-gray-200 text-xs font-semibold text-amber-900 bg-amber-50/70 p-2 rounded">
              Diagnostic signal only — not a Google penalty score.
            </div>
          </div>
        </div>
      </div>

      {/* 3. Why Use a Bulk DA & PA Checker? */}
      <div className="bg-white border border-gray-300 rounded-md p-6 sm:p-7 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2.5">
          Why Use a Bulk DA &amp; PA Checker?
        </h2>
        <p className="text-[16px] text-gray-600 leading-relaxed mb-5">
          When you only need to check one website, a single-domain checker may be enough. When you have a list of websites, bulk checking is more practical.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[15px]">
          <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
            <h3 className="font-bold text-gray-900 text-base mb-1.5 flex items-center gap-2">
              <span className="text-blue-600">📊</span> Compare competitors
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Enter several competing websites and compare their available authority metrics side by side.
            </p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
            <h3 className="font-bold text-gray-900 text-base mb-1.5 flex items-center gap-2">
              <span className="text-blue-600">🔍</span> Research link prospects
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Use authority metrics as one part of your evaluation when researching websites for potential outreach or link opportunities.
            </p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
            <h3 className="font-bold text-gray-900 text-base mb-1.5 flex items-center gap-2">
              <span className="text-blue-600">📋</span> Review client websites
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Collect multiple domains into a single report instead of checking each website separately.
            </p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
            <h3 className="font-bold text-gray-900 text-base mb-1.5 flex items-center gap-2">
              <span className="text-blue-600">📥</span> Export your results
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Download your results as a CSV file so you can continue analyzing or organizing the data in a spreadsheet.
            </p>
          </div>
        </div>
      </div>

      {/* 4. What Is a Good Domain Authority Score? */}
      <div className="bg-white border border-gray-300 rounded-md p-6 sm:p-7 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2.5">
          What Is a Good Domain Authority Score?
        </h2>
        <div className="text-[16px] leading-relaxed space-y-3.5 text-gray-700">
          <p>
            There is no universal DA score that makes a website &ldquo;good.&rdquo;
          </p>
          <p>
            A DA of 30 may be competitive in one niche and relatively weak in another. The most useful benchmark is often the authority of websites competing for the same search queries.
          </p>
          
          <div className="p-4 bg-slate-50 border-l-4 border-[#1D4ED8] rounded-r my-3 text-slate-800">
            <p className="text-sm sm:text-base mb-1">
              <strong>Instead of asking:</strong> <span className="text-gray-500 line-through">&ldquo;Is DA 40 good?&rdquo;</span>
            </p>
            <p className="text-sm sm:text-base font-semibold text-blue-900">
              <strong>Ask:</strong> &ldquo;How does my DA compare with the websites I&apos;m competing against?&rdquo;
            </p>
          </div>

          <p>
            You can use DAPA Metrics to compare several relevant domains and build a more realistic benchmark for your own SEO research.
          </p>
          <p className="text-xs text-gray-500">
            Remember: these comparisons are directional. DA is a third-party Moz metric, not a score assigned by Google.
          </p>
        </div>
      </div>

      {/* 5. DA vs PA: What's the Difference? */}
      <div className="bg-white border border-gray-300 rounded-md p-6 sm:p-7 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2.5">
          DA vs PA: What&apos;s the Difference?
        </h2>
        <div className="table-scroll-container my-3">
          <table className="w-full text-left text-[15px] tool-table border-collapse min-w-[600px]">
            <thead className="bg-gray-100 text-gray-800 font-bold uppercase text-xs">
              <tr>
                <th className="py-3 px-3.5 border-b border-gray-200">Metric</th>
                <th className="py-3 px-3.5 border-b border-gray-200">What it measures</th>
                <th className="py-3 px-3.5 border-b border-gray-200">Useful for</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="py-3 px-3.5 font-bold text-blue-700">DA</td>
                <td className="py-3 px-3.5 text-gray-700">Relative authority of a domain</td>
                <td className="py-3 px-3.5 text-gray-600">Comparing websites</td>
              </tr>
              <tr>
                <td className="py-3 px-3.5 font-bold text-indigo-700">PA</td>
                <td className="py-3 px-3.5 text-gray-700">Relative authority of an individual page</td>
                <td className="py-3 px-3.5 text-gray-600">Comparing specific URLs</td>
              </tr>
              <tr>
                <td className="py-3 px-3.5 font-bold text-amber-700">Spam Score</td>
                <td className="py-3 px-3.5 text-gray-700">Spam-related risk signals</td>
                <td className="py-3 px-3.5 text-gray-600">Investigating potentially problematic profiles</td>
              </tr>
              <tr>
                <td className="py-3 px-3.5 font-bold text-emerald-700">OPR</td>
                <td className="py-3 px-3.5 text-gray-700">Independent link-authority metric</td>
                <td className="py-3 px-3.5 text-gray-600">Additional authority comparison</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4 pt-3 border-t border-gray-200 text-[15px] text-gray-700 space-y-2">
          <p className="font-semibold text-gray-900">
            DA and PA should not be treated as interchangeable.
          </p>
          <p className="text-gray-600">
            For example, a website may have a relatively strong domain while a newly published page on that domain has considerably less page-level authority.
          </p>
        </div>
      </div>

      {/* 6. Open PageRank */}
      <div className="bg-white border border-gray-300 rounded-md p-6 sm:p-7 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-1">
          Open PageRank
        </h2>
        <h3 className="text-base font-semibold text-gray-600 mb-3 border-b border-gray-200 pb-2.5">
          A Different Way to Look at Link Authority
        </h3>
        <div className="text-[16px] leading-relaxed space-y-3 text-gray-700">
          <p>
            DAPA Metrics can also provide Open PageRank (OPR) as an additional authority signal.
          </p>
          <p>
            Open PageRank is an independent metric based on link data and is presented on a 0–10 scale. Its methodology combines PageRank-related data with authority-weighted referring-domain information.
          </p>
          <p>
            OPR is not Moz DA and should not be interpreted as a Google ranking score. It can instead be used as another data point when comparing domains.
          </p>
          <p className="text-sm text-gray-500 italic">
            For newer websites, Open PageRank data may take time to reflect newly discovered links because its coverage depends on crawling and available link data.
          </p>
        </div>
      </div>

      {/* 7. How to Improve Your Domain Authority */}
      <div className="bg-white border border-gray-300 rounded-md p-6 sm:p-7 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-2 border-b border-gray-200 pb-2.5">
          How to Improve Your Domain Authority
        </h2>
        <div className="text-[16px] leading-relaxed mb-4 text-gray-700">
          <p className="font-medium text-gray-900 mb-1">
            There isn&apos;t a shortcut that guarantees a higher DA.
          </p>
          <p className="text-gray-600">
            Instead, focus on building a website that deserves to be referenced.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[15px] mb-5">
          <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <h4 className="font-bold text-gray-900 text-base mb-1">1. Create genuinely useful content</h4>
            <p className="text-gray-600 leading-relaxed">Publish original resources that answer real questions and provide information users can actually use.</p>
          </div>
          <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <h4 className="font-bold text-gray-900 text-base mb-1">2. Earn relevant backlinks</h4>
            <p className="text-gray-600 leading-relaxed">Focus on earning links because your content is useful—not simply collecting large numbers of links.</p>
          </div>
          <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <h4 className="font-bold text-gray-900 text-base mb-1">3. Build relationships in your niche</h4>
            <p className="text-gray-600 leading-relaxed">Industry publications, communities, organizations, and relevant websites can provide opportunities for legitimate visibility and references.</p>
          </div>
          <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <h4 className="font-bold text-gray-900 text-base mb-1">4. Improve your website structure</h4>
            <p className="text-gray-600 leading-relaxed">Make important pages easy for users and search engines to discover through logical navigation and internal links.</p>
          </div>
          <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg md:col-span-2">
            <h4 className="font-bold text-gray-900 text-base mb-1">5. Keep evaluating your competitors</h4>
            <p className="text-gray-600 leading-relaxed">Compare your website with relevant competitors rather than chasing an arbitrary DA target.</p>
          </div>
        </div>

        <div className="p-3.5 bg-blue-50/70 border border-blue-200 rounded text-sm text-gray-700">
          <strong className="text-blue-900 font-semibold">Note:</strong> Google&apos;s own guidance emphasizes helpful, reliable, people-first content and warns against creating content primarily to manipulate search rankings.
        </div>
      </div>

      {/* 8. DAPA Metrics Is Built for Practical SEO Research */}
      <div className="bg-white border border-gray-300 rounded-md p-6 sm:p-7 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2.5">
          DAPA Metrics Is Built for Practical SEO Research
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-[15px]">
          <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <h3 className="font-bold text-gray-900 text-base mb-1 text-blue-900">Free bulk checking</h3>
            <p className="text-gray-600">Analyze up to 10 URLs in a single check.</p>
          </div>
          <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <h3 className="font-bold text-gray-900 text-base mb-1 text-blue-900">Multiple SEO metrics</h3>
            <p className="text-gray-600">Review available authority and spam-related metrics together rather than relying on a single number.</p>
          </div>
          <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <h3 className="font-bold text-gray-900 text-base mb-1 text-blue-900">Simple workflow</h3>
            <p className="text-gray-600">Paste your URLs, run the check, compare the results, and export your data.</p>
          </div>
          <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <h3 className="font-bold text-gray-900 text-base mb-1 text-blue-900">CSV reporting</h3>
            <p className="text-gray-600">Download your results for spreadsheets, research, or client reporting.</p>
          </div>
          <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg sm:col-span-2 lg:col-span-2">
            <h3 className="font-bold text-gray-900 text-base mb-1 text-blue-900">No unnecessary account barrier</h3>
            <p className="text-gray-600">Start checking without creating an account.</p>
          </div>
        </div>
      </div>

    </div>
  );
}
