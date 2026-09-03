// src/components/HowToUse.tsx

export default function HowToUse() {
  const steps = [
    {
      number: 'Step 1: Paste URLs',
      desc: 'Copy and paste your list of domains or URLs into the text box above.',
    },
    {
      number: 'Step 2: Set Options',
      desc: 'Check "Exclude Same Domain" to prevent duplicate checks.',
    },
    {
      number: 'Step 3: Click Check',
      desc: 'Press the blue "Check DA PA" button to fetch live metrics.',
    },
    {
      number: 'Step 4: Export Report',
      desc: 'Download your data in an Excel / CSV spreadsheet for client pitches.',
    },
  ];

  return (
    <div className="bg-white border border-gray-300 rounded-md p-6 shadow-sm mb-8">
      <h2 className="text-lg font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2">
        How to Use the Free DA PA Checker?
      </h2>
      <p className="text-xs text-gray-700 mb-4 leading-relaxed">
        Our free bulk DA PA checker helps you quickly calculate Moz Domain Authority, Page Authority, and Spam Score in 4 simple steps:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
        {steps.map((step) => (
          <div key={step.number} className="p-3.5 bg-gray-50 border border-gray-200 rounded">
            <span className="font-bold text-[#1D4ED8] block mb-1">{step.number}</span>
            <p className="text-gray-600 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
