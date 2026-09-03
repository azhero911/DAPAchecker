// src/app/page.tsx
import CheckerTool from '@/components/CheckerTool';
import HowToUse from '@/components/HowToUse';
import EducationalHub from '@/components/EducationalHub';
import FaqAccordion from '@/components/FaqAccordion';

export default function HomePage() {
  return (
    <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 py-10">
      
      {/* Page Heading (Large 1700px Widescreen & Prominent Font) */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-3 tracking-tight">
          Bulk DA PA Checker (Free up to 10 URLs)
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Analyze Moz Domain Authority (DA), Page Authority (PA), Spam Score, and Domain Age in bulk with zero signup gates.
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
