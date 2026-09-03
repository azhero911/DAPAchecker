// src/components/HowToUse.tsx

export default function HowToUse() {
  const steps = [
    {
      number: '1',
      title: 'Paste Domains or URLs',
      desc: 'Enter up to 10 website domains or full web page links into the text box above (one URL per line).',
    },
    {
      number: '2',
      title: 'Configure Options',
      desc: 'Toggle "Exclude Same Domain" to automatically remove duplicate website entries from your check.',
    },
    {
      number: '3',
      title: 'Run Instant Verification',
      desc: 'Click the blue "Check DA PA" button to query Moz, Spam Score, and Open PageRank databases.',
    },
    {
      number: '4',
      title: 'Export to Excel / CSV',
      desc: 'Click "Download CSV / Excel" to save complete metric reports for client audits and pitch decks.',
    },
  ];

  return (
    <div className="bg-white border-2 border-gray-300 rounded-xl p-8 sm:p-10 shadow-sm mb-12">
      <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3 border-b border-gray-200 pb-3">
        How to Use the Bulk DA PA Checker?
      </h2>
      <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
        Our free online authority checker lets digital marketers and webmasters evaluate multiple domains in 4 simple steps:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-base">
        {steps.map((step) => (
          <div key={step.number} className="p-6 bg-gray-50 border border-gray-200 rounded-xl hover:border-blue-300 transition">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#1D4ED8] text-white font-black text-base mb-3 shadow-sm">
              {step.number}
            </span>
            <h3 className="font-bold text-gray-900 text-lg mb-2">{step.title}</h3>
            <p className="text-gray-600 leading-relaxed text-base">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
