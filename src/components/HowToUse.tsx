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
    <div className="bg-white border border-gray-300 rounded-md p-6 sm:p-7 shadow-sm mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2.5">
        How to Use the Free DA PA Checker?
      </h2>
      <p className="text-[16px] text-gray-700 mb-5 leading-relaxed">
        Our free bulk DA PA checker helps you quickly calculate Moz Domain Authority, Page Authority, and Spam Score in 4 simple steps:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {steps.map((step) => (
          <div key={step.number} className="p-4 bg-gray-50 border border-gray-200 rounded">
            <span className="font-bold text-[#1D4ED8] text-[16px] block mb-1.5">{step.number}</span>
            <p className="text-[16px] text-gray-600 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
