// src/components/FaqAccordion.tsx
'use client';

import React, { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    question: 'What is a good Domain Authority (DA) score?',
    answer:
      'A good DA score depends on your competitive niche. For new or local websites, a DA between 20 and 35 is considered healthy. For competitive e-commerce or national publications, a DA of 50 to 70+ is typical. Established authority leaders like Wikipedia, Google, and The New York Times have scores between 90 and 100.',
  },
  {
    question: 'How often does Moz update Domain Authority?',
    answer:
      'Moz recalculates and updates its global link index approximately once every 30 to 45 days. Because DA is a relative metric comparing your website against the entire web crawl graph, your score can fluctuate slightly during index updates even if your own backlink profile stayed constant.',
  },
  {
    question: 'What is an acceptable Spam Score on Moz?',
    answer:
      'A Moz Spam Score between 1% and 30% is considered low risk and completely normal for healthy sites. Scores between 31% and 60% indicate moderate risk and warrant a backlink audit. A Spam Score above 61% indicates severe toxicity or potential manual penalties from Google.',
  },
  {
    question: 'How does DAPA Metrics differ from other free tools?',
    answer:
      'DAPA Metrics delivers clean, multi-metric intelligence (Moz DA, PA, Spam Score, Domain Age, and Open PageRank) in a single fast check without CAPTCHAs, forced email sign-ups, or invasive ads. You can also export your complete batch to Excel or CSV in one click.',
  },
  {
    question: 'Does Google use Domain Authority as a direct ranking factor?',
    answer:
      'No. Google representatives have confirmed that Google does not use third-party metrics like Moz DA or Ahrefs DR in its core ranking algorithms. However, DA highly correlates with search performance because it accurately models backlink quality and root domain authority.',
  },
  {
    question: 'Why did my Domain Authority drop suddenly?',
    answer:
      'The most common reasons for a DA drop include: 1) Moz updated its 30-day index with newer web data, 2) your website lost several high-authority referring domains, 3) your competitors earned more links faster, or 4) toxic spam links were detected pointing to your domain.',
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  // Google FAQPage Schema.org JSON-LD
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_DATA.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <div id="faq" className="bg-white border border-gray-300 rounded-md p-6 sm:p-7 shadow-sm mb-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2.5">
        Frequently Asked Questions
      </h2>
      <p className="text-[16px] text-gray-600 mb-6">
        Common questions about Domain Authority, Page Authority, Spam Score, and our checking tool.
      </p>

      <div className="divide-y divide-gray-200">
        {FAQ_DATA.map((item, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div key={item.question} className="py-4">
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between text-left text-[16px] font-bold text-gray-900 hover:text-blue-700 transition"
              >
                <span>{item.question}</span>
                <span className="text-xl text-gray-500 ml-2 font-mono">
                  {isOpen ? '−' : '+'}
                </span>
              </button>

              {isOpen && (
                <div className="mt-2.5 text-[16px] text-gray-700 leading-relaxed pr-4">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
