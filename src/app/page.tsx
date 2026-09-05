// src/app/page.tsx
import CheckerTool from '@/components/CheckerTool';
import HowToUse from '@/components/HowToUse';
import EducationalHub from '@/components/EducationalHub';
import FaqAccordion from '@/components/FaqAccordion';
import ResourcesAndCta from '@/components/ResourcesAndCta';

export default function HomePage() {
  return (
    <div className="w-full max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-[#1D4ED8] border border-blue-200 mb-3.5">
          <span>✓</span>
          <span>No account required</span>
        </div>
        <h1 className="text-2xl sm:text-[34px] font-bold text-gray-900 mb-3 leading-tight tracking-tight">
          Free Bulk Domain &amp; Page Authority Checker
        </h1>
        <p className="text-lg text-gray-700 font-medium mb-2">
          Check multiple websites at once and compare important SEO authority metrics in one place.
        </p>
        <p className="text-[15px] text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Enter up to 10 domains or URLs to check Domain Authority (DA), Page Authority (PA), Spam Score, and other available metrics. Review your results in a simple table and export them as a CSV report.
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

      {/* Additional Resources, About & Final CTA */}
      <ResourcesAndCta />

    </div>
  );
}
