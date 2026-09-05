// src/components/HowToUse.tsx
import Link from 'next/link';

export default function HowToUse() {
  const steps = [
    {
      step: '01',
      title: 'Paste Domain URLs',
      desc: 'Enter up to 10 web addresses into the bulk input box. Supports full URLs (https://example.com/page) or clean root domains (example.com).',
    },
    {
      step: '02',
      title: 'Filter Duplicates',
      desc: 'Enable "Exclude Same Domain" to automatically deduplicate repetitive submissions and preserve your batch quota.',
    },
    {
      step: '03',
      title: 'Instant Multi-Engine Audit',
      desc: 'Click "Check DA PA" to query Moz Domain Authority, Page Authority, diagnostic Spam Score, and Open PageRank simultaneously.',
    },
    {
      step: '04',
      title: 'Download CSV Report',
      desc: 'Click "Download CSV Report" to export your formatted audit spreadsheet ready for client presentations and link outreach.',
    },
  ];

  return (
    <div className="bg-white border border-gray-300 rounded-md p-6 sm:p-7 shadow-sm mb-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-gray-200 mb-4 gap-2">
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            How to Use the Free Bulk DA PA Checker
          </h2>
          <p className="text-sm text-gray-500 mt-0.5">
            Audit multiple root domains and specific web pages in 4 straightforward steps
          </p>
        </div>
        <span className="self-start sm:self-center px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full border border-green-200">
          ⚡ 100% Free · No Sign-Up
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {steps.map((item) => (
          <div key={item.step} className="p-4 bg-gray-50 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
            <div className="w-8 h-8 rounded-full bg-blue-100 text-[#1D4ED8] font-bold text-xs flex items-center justify-center mb-2">
              {item.step}
            </div>
            <h3 className="font-bold text-gray-900 text-[16px] mb-1.5">{item.title}</h3>
            <p className="text-[14px] text-gray-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-5 pt-3 border-t border-gray-200 text-xs text-gray-500 flex flex-wrap items-center justify-between gap-2">
        <span>💡 Need deeper link building tips? Check our <Link href="/blog/category/technical-seo" className="text-blue-700 font-bold hover:underline">Technical SEO guides</Link>.</span>
        <span className="text-gray-400">Average response latency: &lt;150ms per domain</span>
      </div>
    </div>
  );
}
