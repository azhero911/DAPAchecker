// src/components/HowToUse.tsx

export default function HowToUse() {
  const steps = [
    {
      step: '1',
      title: 'Enter your URLs',
      desc: 'Paste up to 10 domains or URLs, with each entry on a separate line.',
    },
    {
      step: '2',
      title: 'Run the checker',
      desc: 'Select Check DA & PA to process your list.',
    },
    {
      step: '3',
      title: 'Review the results',
      desc: 'Your results are displayed together so you can compare the available metrics for each URL.',
    },
    {
      step: '4',
      title: 'Export the report',
      desc: 'Use the CSV download option when you want to save or analyze the results elsewhere.',
    },
  ];

  return (
    <div className="bg-white border border-gray-300 rounded-md p-6 sm:p-7 shadow-sm mb-8">
      <div className="pb-3 border-b border-gray-200 mb-4">
        <h2 className="text-xl font-bold text-gray-900">
          How to Check Domain Authority in Bulk
        </h2>
        <p className="text-sm text-gray-600 mt-1">
          Using DAPA Metrics is simple:
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {steps.map((item) => (
          <div key={item.step} className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <div className="w-8 h-8 rounded-full bg-blue-100 text-[#1D4ED8] font-bold text-sm flex items-center justify-center mb-2.5">
              {item.step}
            </div>
            <h3 className="font-bold text-gray-900 text-[16px] mb-1.5">{item.title}</h3>
            <p className="text-[14px] text-gray-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-5 pt-3.5 border-t border-gray-200 text-sm text-gray-700 bg-blue-50/60 p-3.5 rounded border border-blue-100">
        <strong className="text-blue-900 font-semibold">Tip:</strong> When comparing competitors, use websites that target similar keywords, audiences, and markets. A DA number becomes much more useful when you have relevant sites to compare it against.
      </div>
    </div>
  );
}
