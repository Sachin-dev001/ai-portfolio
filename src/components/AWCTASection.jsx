import React from 'react';
import MarkerHighlight from './stationery/MarkerHighlight';
import PaperPlaneDoodle from './stationery/PaperPlaneDoodle';
import PushPin from './stationery/PushPin';

export default function AWCTASection({ onOpenResume }) {
  return (
    <section className="relative py-20 sm:py-28 bg-[#fbf3e2] overflow-visible">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Large Tilted Paper CTA Card */}
        <div className="relative bg-[#fffaf0] border-[3px] border-[#241f1a] rounded-3xl p-8 sm:p-14 shadow-[10px_12px_0_#241f1a] text-center space-y-6 transform -rotate-0.5">
          <PushPin color="coral" className="-top-3 right-8" />
          
          <div className="absolute top-6 left-6 hidden sm:block animate-pulse">
            <PaperPlaneDoodle color="#3a7bff" size={42} className="rotate-[25deg]" />
          </div>

          <span className="eyebrow-marker text-2xl sm:text-3xl text-[#ff5a5f]">
            let&apos;s build together ✎
          </span>

          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-[#241f1a] tracking-tight leading-tight max-w-3xl mx-auto">
            Ready to accelerate your{' '}
            <MarkerHighlight color="yellow">
              AI roadmap?
            </MarkerHighlight>
          </h2>

          <p className="font-sans text-base sm:text-xl text-[#544b3f] max-w-2xl mx-auto leading-relaxed">
            Available for AI Engineer &amp; Agentic Systems roles. Whether you need low-latency RAG retrieval, autonomous web agents with human-in-the-loop safeguards, or rigorous quantitative evaluation suites, let&apos;s connect.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <button
              onClick={onOpenResume}
              className="btn-paper btn-coral text-base sm:text-lg py-3 px-7 font-bold shadow-[4px_4px_0_#241f1a]"
            >
              Download ATS Resume ↓
            </button>

            <a
              href="mailto:Sachin.Sharma.37919@gmail.com"
              className="btn-paper btn-ink text-base sm:text-lg py-3 px-7 font-bold shadow-[4px_4px_0_#241f1a]"
            >
              Sachin.Sharma.37919@gmail.com ✉
            </a>
          </div>

          <div className="pt-4 flex items-center justify-center gap-4 text-xs font-mono font-bold text-[#544b3f]">
            <span>● 24HR RESPONSE TIME</span>
            <span>•</span>
            <span>REMOTE / HYBRID FRIENDLY</span>
            <span>•</span>
            <span>JAIPUR, INDIA</span>
          </div>

        </div>

      </div>
    </section>
  );
}
