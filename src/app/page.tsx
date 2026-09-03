// src/app/page.tsx
import CheckerTool from '@/components/CheckerTool';
import HowToUse from '@/components/HowToUse';
import EducationalHub from '@/components/EducationalHub';
import FaqAccordion from '@/components/FaqAccordion';

export default function HomePage() {
  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Page Heading (Clean, crisp, 1600px width matching authentic design) */}
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          Bulk DA PA Checker (Free up to 10 URLs)
        </h1>
        <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Analyze Moz Domain Authority (DA), Page Authority (PA), Spam Score, and Domain Age in bulk without registration or CAPTCHAs.
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
