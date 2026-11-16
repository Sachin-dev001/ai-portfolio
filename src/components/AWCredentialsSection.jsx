import React from 'react';
import StarburstBadge from './stationery/StarburstBadge';
import PushPin from './stationery/PushPin';

export default function AWCredentialsSection() {
  return (
    <section id="credentials" className="relative py-20 sm:py-28 bg-[#fbf3e2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="eyebrow-marker text-2xl sm:text-3xl text-[#36c25f]">
            academic &amp; technical background ✎
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#241f1a] tracking-tight">
            Education &amp; Credentials.
          </h2>
          <p className="font-mono text-xs sm:text-sm font-bold text-[#544b3f] uppercase tracking-wider">
            B.TECH IN COMPUTER SCIENCE · 2022–2026 · SKILL INDIA GOVT CERTIFIED
          </p>
        </div>

        {/* 3 Pricing-Style Credential Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          
          {/* Card 1: Degree */}
          <div className="relative bg-white border-[2.5px] border-[#241f1a] rounded-2xl p-6 sm:p-8 shadow-[5px_5px_0_#241f1a] sm:shadow-[6px_6px_0_#241f1a] transform rotate-0 sm:-rotate-1 hover:rotate-0 transition-transform duration-200 flex flex-col justify-between">
            <PushPin color="coral" />

            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#241f1a]/20 pb-3 font-mono text-xs">
                <span className="font-bold text-[#3a7bff] uppercase tracking-wider">
                  DEGREE · 2022 – 2026
                </span>
                <span className="px-2 py-0.5 rounded bg-[#fbf3e2] border border-[#241f1a] font-bold text-[#241f1a]">
                  Graduating 2026
                </span>
              </div>

              <div>
                <span className="font-mono text-xs text-[#544b3f] font-bold uppercase block mb-1">
                  Poornima University, Jaipur
                </span>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#241f1a]">
                  B.Tech in Computer Science &amp; Engineering
                </h3>
              </div>

              <p className="font-sans text-xs sm:text-sm text-[#544b3f] leading-relaxed">
                Rigorous engineering training across Data Structures &amp; Algorithms, Artificial Intelligence, Database Management Systems (DBMS), Operating Systems, and Software Engineering.
              </p>

              <div className="pt-2 flex flex-wrap gap-1.5 font-mono text-[11px] font-bold text-[#241f1a]">
                <span className="px-2 py-0.5 rounded bg-[#fbf3e2] border border-[#241f1a]">DSA</span>
                <span className="px-2 py-0.5 rounded bg-[#fbf3e2] border border-[#241f1a]">AI &amp; DBMS</span>
                <span className="px-2 py-0.5 rounded bg-[#fbf3e2] border border-[#241f1a]">Python &amp; C++</span>
              </div>
            </div>

            <div className="pt-6 border-t border-[#241f1a]/20 mt-6 font-mono text-xs text-[#544b3f] flex items-center justify-between">
              <span>Full-time Campus</span>
              <span className="text-[#36c25f] font-bold">✓ Verified</span>
            </div>
          </div>

          {/* Card 2: Skill India NSDC Certificate with Starburst */}
          <div className="relative bg-[#fff6e0] border-[2.5px] border-[#241f1a] rounded-2xl p-6 sm:p-8 shadow-[5px_5px_0_#241f1a] sm:shadow-[6px_6px_0_#241f1a] transform rotate-0 sm:rotate-1 hover:rotate-0 transition-transform duration-200 flex flex-col justify-between">
            {/* Starburst badge pinned at top right */}
            <div className="absolute -top-6 -right-2 sm:-top-7 sm:-right-6 z-20">
              <StarburstBadge text="GOVT ACCREDITED" color="#ffc23c" size={88} />
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#241f1a]/20 pb-3 font-mono text-xs">
                <span className="font-bold text-[#ff5a5f] uppercase tracking-wider">
                  GOVERNMENT ACCREDITATION
                </span>
                <span className="px-2 py-0.5 rounded bg-white border border-[#241f1a] font-bold text-[#36c25f]">
                  Certified 2026
                </span>
              </div>

              <div>
                <span className="font-mono text-xs text-[#544b3f] font-bold uppercase block mb-1">
                  Skill India (Govt. of India / NSDC)
                </span>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#241f1a]">
                  Certificate in AI &amp; Data Science
                </h3>
              </div>

              <p className="font-sans text-xs sm:text-sm text-[#544b3f] leading-relaxed">
                National Skill Development Corporation (NSDC) government certification in AI architecture, Machine Learning, Deep Learning models, statistical modeling, and data science pipelines.
              </p>

              <div className="pt-2 flex flex-wrap gap-1.5 font-mono text-[11px] font-bold text-[#241f1a]">
                <span className="px-2 py-0.5 rounded bg-white border border-[#241f1a]">Deep Learning</span>
                <span className="px-2 py-0.5 rounded bg-white border border-[#241f1a]">Data Science</span>
                <span className="px-2 py-0.5 rounded bg-[#ffc23c]/40 border border-[#241f1a]">Govt NSDC</span>
              </div>
            </div>

            <div className="pt-6 border-t border-[#241f1a]/20 mt-6 font-mono text-xs text-[#544b3f] flex items-center justify-between">
              <span>National Registry</span>
              <span className="text-[#36c25f] font-bold">✓ Official Credential</span>
            </div>
          </div>

          {/* Card 3: AU Foundation Experience */}
          <div className="relative bg-[#eafaf4] border-[2.5px] border-[#241f1a] rounded-2xl p-6 sm:p-8 shadow-[5px_5px_0_#241f1a] sm:shadow-[6px_6px_0_#241f1a] transform rotate-0 sm:-rotate-1 hover:rotate-0 transition-transform duration-200 flex flex-col justify-between">
            <PushPin color="teal" />

            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#241f1a]/20 pb-3 font-mono text-xs">
                <span className="font-bold text-[#1fbfa4] uppercase tracking-wider">
                  PRODUCTION EXPERIENCE
                </span>
                <span className="px-2 py-0.5 rounded bg-white border border-[#241f1a] font-bold text-[#241f1a]">
                  Dec 2025 – Apr 2026
                </span>
              </div>

              <div>
                <span className="font-mono text-xs text-[#544b3f] font-bold uppercase block mb-1">
                  AU Foundation
                </span>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#241f1a]">
                  AI &amp; GenAI Engineering Trainee
                </h3>
              </div>

              <p className="font-sans text-xs sm:text-sm text-[#544b3f] leading-relaxed">
                Architected production-grade RAG retrieval pipelines using LangChain and vector databases (+24% precision lift across 10,000+ benchmark queries), constructed automated LLM evaluation pipelines with Ragas/DeepEval, and integrated safety guardrails.
              </p>

              <div className="pt-2 flex flex-wrap gap-1.5 font-mono text-[11px] font-bold text-[#241f1a]">
                <span className="px-2 py-0.5 rounded bg-white border border-[#241f1a]">LangChain RAG</span>
                <span className="px-2 py-0.5 rounded bg-white border border-[#241f1a]">Ragas &amp; DeepEval</span>
                <span className="px-2 py-0.5 rounded bg-white border border-[#241f1a]">Safety Guardrails</span>
              </div>
            </div>

            <div className="pt-6 border-t border-[#241f1a]/20 mt-6 font-mono text-xs text-[#544b3f] flex items-center justify-between">
              <span>Jaipur, Rajasthan</span>
              <span className="text-[#36c25f] font-bold">✓ Industry Trainee</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}