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
      'A good DA score is entirely relative to your specific niche and competitors. For newly launched or local service websites, a DA between 15 and 30 is typical. For competitive industries, a DA of 45 to 65 is common, while global publications like Wikipedia or major news outlets score above 85. DA operates on a 1–100 logarithmic scale, meaning score increases become progressively more difficult at higher levels.',
  },
  {
    question: 'How often does Moz update Domain Authority?',
    answer:
      'Moz recalculates and updates its global link index approximately once every 30 to 45 days. Because DA is a relative metric comparing your website against the entire web crawl graph, your score can adjust slightly during index updates even if your own backlink profile stayed constant.',
  },
  {
    question: 'What is the Moz Spam Score and what does it mean?',
    answer:
      'Moz Spam Score is a third-party diagnostic metric developed by Moz that measures how closely a site\'s characteristics resemble those of sites Moz has identified as spam-like. It is not an official Google penalty score or a direct probability of receiving a Google penalty. Moz groups scores into Low (1–30%), Medium (31–60%), and High (61–100%) to help webmasters prioritize backlink audits.',
  },
  {
    question: 'How does DAPA Metrics differ from other free tools?',
    answer:
      'DAPA Metrics delivers clean, multi-metric intelligence (Moz DA, PA, Spam Score, Domain Age, and Open PageRank) in a single fast check without CAPTCHAs, forced email sign-ups, or invasive ads. You can also download your complete batch as a clean CSV report in one click.',
  },
  {
    question: 'Does Google use Domain Authority as a direct ranking factor?',
    answer:
      'No. Google representatives have consistently confirmed that Google does not use third-party metrics like Moz DA in its core ranking algorithms. However, DA serves as a helpful comparative benchmark for webmasters because it models backlink quality and root domain authority across the web.',
  },
  {
    question: 'Why did my Domain Authority drop suddenly?',
    answer:
      'The most common reasons for a DA change include: 1) Moz updated its global index with newer comparative data, 2) referring domains were removed, URLs changed, or linking websites shut down, 3) competitors in your industry acquired new authority links at a faster rate, or 4) previously linking domains were re-evaluated in Moz\'s index. A DA decrease by itself does not demonstrate that Google has demoted your website. Check Search Console performance and ranking changes separately.',
  },
  {
    question: 'What is the difference between Domain Authority (DA) and Page Authority (PA)?',
    answer:
      'Domain Authority (DA) evaluates the predictive ranking power of the entire root domain (including subdomains and internal directories). In contrast, Page Authority (PA) measures the strength of an individual, specific URL. A homepage might have a PA of 55 and DA of 60, while a newly published blog post on the same site starts with a modest PA (e.g., 10–20) until it acquires internal link equity and external citations.',
  },
  {
    question: 'How is Domain Authority calculated on a logarithmic scale?',
    answer:
      'Moz uses machine learning to map raw link equity onto a 1–100 logarithmic curve. Because the scale is logarithmic, growing from DA 20 to DA 30 requires significantly fewer high-quality referring domains than advancing from DA 70 to DA 80. Furthermore, there is no fixed number of backlinks required to reach any specific tier because calculations depend on comparative equity across Moz\'s entire crawled web graph.',
  },
  {
    question: 'Can I check multiple domains in bulk without registering?',
    answer:
      'Yes. DAPA Metrics allows you to paste up to 10 URLs per submission completely free with zero registration, CAPTCHAs, or credit card requirements. You can also check the "Exclude Same Domain" option to automatically eliminate duplicate URL submissions.',
  },
  {
    question: 'How do I export my bulk check results into a CSV or Excel report?',
    answer:
      'After running a check, simply click the "Download CSV Report" button located above the results table. The system generates a formatted, UTF-8 encoded .csv spreadsheet containing domain names, DA, PA, Spam Score percentages, Open PageRank values, and age status, ready to open in Microsoft Excel, Google Sheets, or agency reporting dashboards.',
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
