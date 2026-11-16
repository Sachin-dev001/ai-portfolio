import React, { useState, useEffect, useRef } from 'react';
import PushPin from './stationery/PushPin';

const PROCESS_STEPS = [
  {
    num: '01',
    category: 'DISCOVERY & ARCHITECTURE',
    title: 'Audit domain constraints & data pipelines',
    desc: 'Analyze query distribution, document semantics, and anti-bot security boundaries. Map transcript timestamps or authentication flows before writing a single line of model logic.',
    tags: ['Data profiling', 'Payload schemas', 'Threat modeling'],
    color: '#ff5a5f',
    bg: '#fffaf0',
    pin: 'coral',
  },
  {
    num: '02',
    category: 'CHUNKING & VECTOR RETRIEVAL',
    title: 'Precision chunking & high-dimensional indexing',
    desc: 'Determine semantic chunk boundaries (15–30 second timestamp-aware speaker chunks for video, or DOM-node hierarchy for agents). Index into Qdrant with HNSW indexes for sub-15ms vector retrieval.',
    tags: ['Qdrant HNSW', 'Semantic chunking', 'Dense embeddings'],
    color: '#3a7bff',
    bg: '#eef3ff',
    pin: 'cobalt',
  },
  {
    num: '03',
    category: 'RERANKING & EVASION',
    title: 'Cross-encoder reranking & stealth fingerprinting',
    desc: 'Mitigate the retrieval cliff by applying BAAI Cross-Encoders over top-K candidates, lifting precision by +28%. For agents, strip automation flags and apply Gaussian typing delay curves.',
    tags: ['BAAI Cross-Encoder', 'Playwright Stealth', 'Memory Vault'],
    color: '#ffc23c',
    bg: '#fff6e0',
    pin: 'yellow',
  },
  {
    num: '04',
    category: 'EVALS & GUARDRAILS',
    title: 'Quantitative evals & human-in-the-loop gates',
    desc: 'Execute automated regression evaluation measuring Context Precision, Faithfulness, and Answer Relevance against golden ground-truth datasets. Wire Telegram webhooks for operator overrides.',
    tags: ['RAG Triad metrics', 'Synthetic test sets', 'Telegram HITL'],
    color: '#1fbfa4',
    bg: '#eafaf4',
    pin: 'teal',
  },
  {
    num: '05',
    category: 'PRODUCTION DEPLOYMENT',
    title: 'Containerization, streaming SSE & observability',
    desc: 'Ship containerized microservices on Docker and FastAPI with 60 FPS Server-Sent Event (SSE) streaming for sub-800ms Time-To-First-Token. Instrument telemetry and latency tracing.',
    tags: ['Docker + FastAPI SSE', 'Supabase Auth & RLS', '60 FPS telemetry'],
    color: '#8b5cf6',
    bg: '#fff2f2',
    pin: 'coral',
  },
];

export default function AWProcessSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = PROCESS_STEPS.length;

  const nextStep = () => setActiveIndex((prev) => (prev + 1) % total);
  const prevStep = () => setActiveIndex((prev) => (prev - 1 + total) % total);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextStep();
      if (e.key === 'ArrowLeft') prevStep();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="process" className="relative py-20 sm:py-28 overflow-hidden bg-[#fbf3e2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-6">
          <span className="eyebrow-marker text-2xl sm:text-3xl text-[#3a7bff]">
            engineering methodology ✎
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#241f1a] tracking-tight">
            From problem to production, in five clear steps.
          </h2>
          <p className="font-hand font-bold text-xl sm:text-2xl text-[#3a7bff] -rotate-1 pt-1">
            spin it → (click a card, use step pills, or use ← → keys)
          </p>
        </div>

        {/* Stepper Pills Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 py-6">
          {PROCESS_STEPS.map((step, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`px-3.5 py-1.5 rounded-xl border-2 font-mono text-xs sm:text-sm font-bold transition-all shadow-[2px_2px_0_#241f1a] ${
                activeIndex === idx
                  ? 'bg-[#241f1a] text-[#fbf3e2] border-[#241f1a] scale-105'
                  : 'bg-white text-[#241f1a] border-[#241f1a] hover:bg-[#fff6e0]'
              }`}
            >
              {step.num} {step.category.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* 3D Circular Carousel Stage */}
        <div className="relative h-[480px] sm:h-[460px] max-w-4xl mx-auto flex items-center justify-center">
          {PROCESS_STEPS.map((step, idx) => {
            // Calculate 3D circular offset
            const offset = (idx - activeIndex + total) % total;
            // Map offset: 0 is active center, 1 & 4 are sides, 2 & 3 are behind
            let zIndex = 10;
            let transform = 'translateX(-50%) scale(0.7) translateY(40px)';
            let opacity = 0.35;
            let filter = 'blur(1.5px)';
            let isCenter = false;

            if (offset === 0) {
              zIndex = 30;
              transform = 'translateX(-50%) scale(1) translateY(0px)';
              opacity = 1;
              filter = 'blur(0px)';
              isCenter = true;
            } else if (offset === 1 || offset === total - 1) {
              const xShift = offset === 1 ? '160px' : '-160px';
              zIndex = 20;
              transform = `translateX(calc(-50% + ${xShift})) scale(0.85) translateY(18px)`;
              opacity = 0.75;
              filter = 'blur(0.5px)';
            } else {
              const xShift = offset === 2 ? '280px' : '-280px';
              zIndex = 10;
              transform = `translateX(calc(-50% + ${xShift})) scale(0.7) translateY(36px)`;
              opacity = 0.25;
              filter = 'blur(2px)';
            }

            return (
              <div
                key={step.num}
                onClick={() => setActiveIndex(idx)}
                className="witem"
                style={{
                  transform,
                  opacity,
                  filter,
                  zIndex,
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <div
                  className="prim relative border-[2.5px] border-[#241f1a] rounded-2xl p-6 sm:p-7 shadow-[6px_6px_0_#241f1a]"
                  style={{ backgroundColor: step.bg }}
                >
                  <PushPin color={step.pin} />

                  <div className="flex items-center justify-between border-b border-[#241f1a]/20 pb-2 mb-3">
                    <span className="font-hand font-bold text-3xl text-[#241f1a]">
                      {step.num}
                    </span>
                    <span
                      className="font-mono text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white border border-[#241f1a]"
                      style={{ color: step.color }}
                    >
                      {step.category}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg sm:text-xl text-[#241f1a] mb-2 leading-snug">
                    {step.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-[#544b3f] leading-relaxed mb-4">
                    {step.desc}
                  </p>

                  <div className="pt-2 border-t border-[#241f1a]/15 flex flex-wrap gap-1.5 font-mono text-[10px] text-[#241f1a] font-bold">
                    {step.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="px-2 py-0.5 rounded bg-white border border-[#241f1a]">
                        + {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Arrow Controls */}
        <div className="flex items-center justify-center gap-6 pt-4">
          <button
            onClick={prevStep}
            className="w-12 h-12 rounded-full border-[2.5px] border-[#241f1a] bg-[#fffaf0] hover:bg-[#ffc23c] font-bold text-xl flex items-center justify-center shadow-[3px_3px_0_#241f1a] active:translate-x-0.5 active:translate-y-0.5 transition-all"
            aria-label="Previous step"
          >
            ←
          </button>
          <span className="font-mono text-sm font-bold text-[#544b3f]">
            {activeIndex + 1} / {total}
          </span>
          <button
            onClick={nextStep}
            className="w-12 h-12 rounded-full border-[2.5px] border-[#241f1a] bg-[#fffaf0] hover:bg-[#ffc23c] font-bold text-xl flex items-center justify-center shadow-[3px_3px_0_#241f1a] active:translate-x-0.5 active:translate-y-0.5 transition-all"
            aria-label="Next step"
          >
            →
          </button>
        </div>

      </div>
    </section>
  );
}
