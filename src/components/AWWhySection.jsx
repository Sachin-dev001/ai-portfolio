import React from 'react';
import MaskingTape from './stationery/MaskingTape';

const PRINCIPLES = [
  {
    num: '001',
    title: 'Production-First Mindset. No toy scripts.',
    desc: 'I do not build weekend wrapper scripts. I engineer resilient production architectures: sub-800ms streaming TTFT, deterministic fallback paths, and minimal memory footprints.',
    footer: '+ <800ms TTFT · Zero crash loops',
    tape: 'yellow',
    rotate: '-1.5deg',
    bg: '#fffaf0',
  },
  {
    num: '002',
    title: 'Quantified Evaluation. Not gut feel.',
    desc: 'Every retrieval and model decision is validated against measurable metrics: +28% context precision lift with BAAI cross-encoders evaluated against golden domain datasets.',
    footer: '+ +28% Context Precision · 0.96 Faithfulness',
    tape: 'mint',
    rotate: '1.5deg',
    bg: '#eafaf4',
  },
  {
    num: '003',
    title: 'Full-Stack Ownership from Vector DB to UI.',
    desc: 'From high-dimensional HNSW vector spaces in Qdrant and FastAPI SSE streaming to responsive, accessible modern web frontends, I own the entire engineering lifecycle.',
    footer: '+ End-to-End Delivery · FastAPI to React/UI',
    tape: 'blue',
    rotate: '-2deg',
    bg: '#eef3ff',
  },
  {
    num: '004',
    title: 'Built-In Human-in-the-Loop & Safety Gates.',
    desc: 'Autonomous agents shouldn\'t run unchecked. I wire real-time Telegram operator approval gates, strict RLS policies, and deterministic state recovery into every agent workflow.',
    footer: '+ Telegram HITL · Zero Bot Flags',
    tape: 'pink',
    rotate: '1deg',
    bg: '#fff2f2',
  },
];

export default function AWWhySection() {
  return (
    <section id="why" className="relative py-20 sm:py-28 bg-[#fbf3e2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="eyebrow-marker text-2xl sm:text-3xl text-[#ff5a5f]">
            engineering philosophy ✎
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#241f1a] tracking-tight">
            Why engineering teams hire Sachin.
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#544b3f]">
            Four engineering principles that separate production-ready AI systems from fragile proof-of-concepts.
          </p>
        </div>

        {/* 4 Taped Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {PRINCIPLES.map((item) => (
            <div
              key={item.num}
              className="relative border-[2.5px] border-[#241f1a] rounded-2xl p-7 sm:p-8 shadow-[6px_6px_0_#241f1a] transition-all hover:rotate-0 hover:scale-[1.02] duration-200 flex flex-col justify-between"
              style={{
                backgroundColor: item.bg,
                transform: `rotate(${item.rotate})`,
              }}
            >
              <MaskingTape color={item.tape} rotate={item.rotate === '-1.5deg' || item.rotate === '-2deg' ? '-4deg' : '3deg'} />

              <div className="space-y-3">
                <span className="font-mono text-xs font-bold text-[#ff5a5f] uppercase tracking-widest block">
                  PRINCIPLE // {item.num}
                </span>

                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#241f1a]">
                  {item.title}
                </h3>

                <p className="font-sans text-sm sm:text-base text-[#544b3f] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-[#241f1a]/20 mt-6 font-mono text-xs font-bold text-[#241f1a] flex items-center justify-between">
                <span>{item.footer}</span>
                <span className="text-[#36c25f]">✓ VERIFIED</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
