// src/app/page.tsx
import CheckerTool from '@/components/CheckerTool';
import HowToUse from '@/components/HowToUse';
import EducationalHub from '@/components/EducationalHub';
import FaqAccordion from '@/components/FaqAccordion';

export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      
      {/* Page Heading (Exact low-competition target: Bulk DA PA Checker Free) */}
      <div className="text-center mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1.5">
          Bulk DA PA Checker (Free up to 10 URLs)
        </h1>
        <p className="text-sm text-gray-600 max-w-2xl mx-auto">
          Analyze Moz Domain Authority (DA), Page Authority (PA), Spam Score, and Domain Age in bulk without registration or CAPTCHAs.
        </p>
      </div>

      {/* Main Interactive Tool Box */}
      <CheckerTool />

      {/* 4-Step User Guide */}
      <HowToUse />

      {/* Educational Hub & Comparison Tables (AdSense Thin-Content Prevention) */}
      <EducationalHub />

      {/* FAQ with Google Schema */}
      <FaqAccordion />

    </div>
  );
}
