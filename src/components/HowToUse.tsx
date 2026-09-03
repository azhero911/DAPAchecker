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
    <div className="bg-white border border-gray-300 rounded-md p-6 shadow-sm mb-8">
      <h2 className="text-lg font-bold text-gray-900 mb-2 border-b border-gray-200 pb-2">
        How to Use the Bulk DA PA Checker?
      </h2>
      <p className="text-xs text-gray-600 mb-6 leading-relaxed">
        Our free online authority checker lets digital marketers and webmasters evaluate multiple domains in 4 simple steps:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
        {steps.map((step) => (
          <div key={step.number} className="p-3.5 bg-gray-50 border border-gray-200 rounded">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded bg-[#1D4ED8] text-white font-bold text-xs mb-2">
              {step.number}
            </span>
            <h3 className="font-bold text-gray-900 text-sm mb-1">{step.title}</h3>
            <p className="text-gray-600 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
