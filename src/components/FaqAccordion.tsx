// src/components/FaqAccordion.tsx
'use client';

import React, { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    question: 'What is Domain Authority?',
    answer:
      'Domain Authority is a Moz-developed score that estimates the ranking strength of a domain on a 0–100 scale. It is primarily useful for comparing websites rather than predicting a specific Google ranking position.',
  },
  {
    question: 'Is Domain Authority a Google ranking factor?',
    answer:
      'No. DA is a third-party Moz metric. Google does not use Moz\'s DA score as a ranking factor. Use DA as an SEO comparison and research metric instead.',
  },
  {
    question: 'What is Page Authority?',
    answer:
      'Page Authority is a Moz metric that estimates the ranking strength of an individual webpage. Unlike DA, which evaluates a domain, PA focuses on a specific URL.',
  },
  {
    question: 'What is a good DA score?',
    answer:
      'There is no universal good score. Your most useful benchmark is often the DA of relevant competitors ranking for the keywords and topics you care about.',
  },
  {
    question: 'Does a high Spam Score mean my website is penalized?',
    answer:
      'No. A Spam Score is a diagnostic metric and is not itself a Google penalty. A high score should encourage further investigation rather than an automatic conclusion that your website has been penalized.',
  },
  {
    question: 'How many URLs can I check?',
    answer:
      'DAPA Metrics currently allows you to check up to 10 URLs per batch using the free checker.',
  },
  {
    question: 'Can I download my results?',
    answer:
      'Yes. After running a check, you can download the available results as a CSV report.',
  },
  {
    question: 'Should I focus only on DA?',
    answer:
      'No. DA is only one third-party metric. Consider the relevance and quality of your content, your competitors, your backlink profile, technical SEO, and actual search performance alongside authority metrics.',
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
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${idx}`}
                className="w-full flex items-center justify-between text-left text-[16px] font-bold text-gray-900 hover:text-blue-700 transition"
              >
                <span>{item.question}</span>
                <span className="text-xl text-gray-500 ml-2 font-mono">
                  {isOpen ? '−' : '+'}
                </span>
              </button>

              {/* Keep in DOM for search crawlers while toggling visibility */}
              <div
                id={`faq-answer-${idx}`}
                className={`mt-2.5 text-[16px] text-gray-700 leading-relaxed pr-4 transition-all ${
                  isOpen ? 'block' : 'hidden'
                }`}
              >
                {item.answer}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
