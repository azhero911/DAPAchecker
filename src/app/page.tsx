// src/app/page.tsx
import CheckerTool from '@/components/CheckerTool';
import HowToUse from '@/components/HowToUse';
import EducationalHub from '@/components/EducationalHub';
import FaqAccordion from '@/components/FaqAccordion';

export default function HomePage() {
  return (
    <div className="w-full max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Page Heading (Exact 34px 700-weight on laptop, responsive on mobile, 1550px container) */}
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-[34px] font-bold text-gray-900 mb-2.5 leading-tight">
          Bulk DA PA Checker — Free Domain Authority Tool
        </h1>
        <p className="text-[16px] text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Check up to 10 URLs at once, no registration required. Analyze Moz Domain Authority (DA), Page Authority (PA), Spam Score, and Open PageRank quickly with instant CSV export.
        </p>
      </div>

      {/* Main Interactive Tool Box */}
      <CheckerTool />

      {/* 4-Step User Guide */}
      <HowToUse />

      {/* Educational Hub & Comparison Tables */}
      <EducationalHub />

      {/* FAQ with Google Schema */}
      <FaqAccordion />

    </div>
  );
}
