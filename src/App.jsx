import React, { useState } from 'react';
import BackgroundScene3D from './components/BackgroundScene3D';
import CursorGlow from './components/CursorGlow';
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
import AWCredentialsSection from './components/AWCredentialsSection';
import AWFAQSection from './components/AWFAQSection';
import AWCTASection from './components/AWCTASection';
import AWFooterSection from './components/AWFooterSection';
import AWFloatingStatus from './components/AWFloatingStatus';
import ResumeModalLuxury from './components/ResumeModalLuxury';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-[#f5f5f7] selection:bg-white selection:text-black relative overflow-x-hidden font-sans">
      {/* 1. Subtle Ambient 3D Particle Constellation in Background */}
      <BackgroundScene3D />

      {/* 2. Interactive Ambient Cursor Spotlight */}
      <CursorGlow />

      {/* 3. Floating Glass Pill Navigation Header */}
      <AWNavPill onOpenResume={() => setIsResumeOpen(true)} />

      <main className="relative z-10">
        {/* 4. Hero Section: Cinematic Looping Video + Prominent SACHIN SHARMA + Proof Points */}
        <AWHeroCinematic onOpenResume={() => setIsResumeOpen(true)} />

        {/* 5. 3D Perspective Device Stage: "Built like this." with Interactive Console */}
        <AWBuiltSection />

        {/* 6. Marquee: Tech Stack & Production Benchmarks Continuous Ticker */}
        <AWTrustedMarquee />

        {/* 7. Intro Statement: "Production-grade engineering, AI-accelerated where it counts, bespoke where it matters." */}
        <AWIntroSection />

        {/* 8. Recent Work: "From concept to live. Systems that ship." (VideoSage AI & AutoApply) */}
        <AWWorkSection />

        {/* 9. Core Capabilities / Services: "Stop building brittle AI demos for problems that demand production engineering." */}
        <AWServicesSection />

        {/* 10. Engineering Methodology: "From problem to production, in five clear steps." */}
        <AWProcessSection />

        {/* 11. Why Hire Sachin: Bento Grid */}
        <AWWhySection />

        {/* 12. Quantitative Evals & RAG Benchmarking Lab */}
        <AWEvalsSection />

        {/* 13. Academic Credentials: BCA Degree (2026) & Core Systems */}
        <AWCredentialsSection />

        {/* 14. Technical FAQ: Accordion */}
        <AWFAQSection />

        {/* 15. High-Impact Call to Action with Ambient Lens */}
        <AWCTASection onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* 16. Luxury Multi-Column Directory Footer */}
      <div className="relative z-10">
        <AWFooterSection onOpenResume={() => setIsResumeOpen(true)} />
      </div>

      {/* 17. Persistent Floating Bottom-Left Status Pill ("● Open to work") */}
      <AWFloatingStatus />

      {/* 18. ATS Resume High-Res Modal Viewer */}
      <ResumeModalLuxury isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}
