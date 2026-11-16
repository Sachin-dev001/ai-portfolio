import React from 'react';
import MaskingTape from './stationery/MaskingTape';

const STAT_CARDS = [
  { value: '85%', label: 'Manual Time Reduction', tape: 'yellow', rotate: '-2deg' },
  { value: '+28%', label: 'Context Precision Lift', tape: 'mint', rotate: '2deg' },
  { value: '0 Flags', label: 'Stealth Bot Evasion', tape: 'blue', rotate: '-1.5deg' },
  { value: '<800ms', label: 'Streaming TTFT Latency', tape: 'pink', rotate: '2deg' },
];

export default function AWIntroSection() {
  return (
    <section className="relative py-20 sm:py-28 ruled-notebook border-y-2 border-[#241f1a]/15 bg-[#fbf3e2]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Bold Serif Philosophical Statement */}
          <div className="lg:col-span-6 space-y-6">
            <span className="eyebrow-marker text-2xl sm:text-3xl text-[#3a7bff]">
              proven in production ✎
            </span>

            <h2 className="font-display font-black text-3xl sm:text-5xl text-[#241f1a] leading-[1.15] tracking-tight">
              &ldquo;Production-grade engineering, AI-accelerated where it counts, bespoke where it matters.&rdquo;
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#544b3f] leading-relaxed">
              Autonomous web agents, timestamp-aware video RAG pipelines, and the quantitative evaluation suites behind them. Deterministic state machines, stealth anti-bot emulation, and semantic rerankers built around real production constraints, so the system scales without hallucinating.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-sm font-sans font-bold text-[#3a7bff]">
              <a href="#architecture" className="hover:underline flex items-center gap-1">
                Explore Console <span>↓</span>
              </a>
              <span className="text-[#241f1a]/30">•</span>
              <a href="#work" className="hover:underline flex items-center gap-1">
                Flagship Work <span>↓</span>
              </a>
              <span className="text-[#241f1a]/30">•</span>
              <a href="#evals" className="hover:underline flex items-center gap-1">
                Evaluation Lab <span>↓</span>
              </a>
            </div>
          </div>

          {/* Right Column: 4 Taped Sticky Metric Cards Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 pt-4">
            {STAT_CARDS.map((stat, i) => (
              <div
                key={i}
                className="relative bg-[#fffaf0] border-[2.5px] border-[#241f1a] rounded-xl p-6 shadow-[5px_5px_0_#241f1a] hover:rotate-0 hover:scale-105 transition-all duration-200"
                style={{ transform: `rotate(${stat.rotate})` }}
              >
                <MaskingTape color={stat.tape} rotate={i % 2 === 0 ? '-4deg' : '3deg'} />
                
                <div className="font-display font-black text-4xl sm:text-5xl text-[#241f1a] tracking-tight mb-2">
                  {stat.value}
                </div>
                
                <div className="font-mono text-xs sm:text-sm font-bold text-[#544b3f] uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
