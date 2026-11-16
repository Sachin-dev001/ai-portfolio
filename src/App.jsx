import React, { useState } from 'react';
import AWNavPill from './components/AWNavPill';
import AWHeroCinematic from './components/AWHeroCinematic';
import AWBuiltSection from './components/AWBuiltSection';
import AWTrustedMarquee from './components/AWTrustedMarquee';
import AWIntroSection from './components/AWIntroSection';
import AWWorkSection from './components/AWWorkSection';
import AWServicesSection from './components/AWServicesSection';
import AWProcessSection from './components/AWProcessSection';
import AWWhySection from './components/AWWhySection';
import AWEvalsSection from './components/AWEvalsSection';
import AWGlobeSection from './components/AWGlobeSection';
import AWCredentialsSection from './components/AWCredentialsSection';
import AWFAQSection from './components/AWFAQSection';
import AWCTASection from './components/AWCTASection';
import AWFooterSection from './components/AWFooterSection';
import AWFloatingStatus from './components/AWFloatingStatus';
import ResumeModalLuxury from './components/ResumeModalLuxury';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fbf3e2] text-[#241f1a] selection:bg-[#ffc23c] selection:text-[#241f1a] relative overflow-x-hidden font-sans">
      
      {/* 1. Persistent Sticky Wavy Neo-Brutalist Navigation Header (Fixed Top) */}
      <AWNavPill onOpenResume={() => setIsResumeOpen(true)} />

      <main className="relative z-10 pt-16 sm:pt-20">
        {/* 2. Hero Section: 2-Column Warm Paper & Overlapping Taped Index Cards */}
        <AWHeroCinematic onOpenResume={() => setIsResumeOpen(true)} />

        {/* 3. Flagship Architecture Console: "Built like this." with Interactive Telemetry */}
        <AWBuiltSection />

        {/* 4. Tilted Dark Charcoal Marquee Strip */}
        <AWTrustedMarquee />

        {/* 5. Ruled-Notebook Statement & 4 Taped Sticky Metric Cards */}
        <AWIntroSection />

        {/* 6. Recent Work: "From concept to live. Systems that ship." */}
        <AWWorkSection />

        {/* 7. Core Capabilities: 2×2 Tilted Paper Cards Grid */}
        <AWServicesSection />

        {/* 8. Engineering Methodology: Interactive 3D Spinning Dial Carousel */}
        <AWProcessSection />

        {/* 9. Why Engineering Teams Hire Sachin: 4 Taped Principles */}
        <AWWhySection />

        {/* 10. Quantitative Evals & RAG Benchmarking Lab */}
        <AWEvalsSection />

        {/* 11. Interactive Draggable Sketchbook Globe ("Ships wherever your teams build.") */}
        <AWGlobeSection />

        {/* 12. Education & Credentials: B.Tech CSE (2026) & Skill India Govt NSDC */}
        <AWCredentialsSection />

        {/* 13. Technical FAQ: Accordion Cards */}
        <AWFAQSection />

        {/* 14. High-Impact Call to Action with Paper Plane & Doodles */}
        <AWCTASection onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* 15. Deep Charcoal / Dark Ink Footer */}
      <AWFooterSection onOpenResume={() => setIsResumeOpen(true)} />

      {/* 16. Persistent Floating Bottom-Left Status Pill ("● Open to work · AI Engineer") */}
      <AWFloatingStatus />

      {/* 17. ATS Resume High-Res Modal Viewer */}
      <ResumeModalLuxury isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}
