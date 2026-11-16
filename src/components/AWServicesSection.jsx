import React from 'react';
import MarkerHighlight from './stationery/MarkerHighlight';
import WavyStrikethrough from './stationery/WavyStrikethrough';
import PushPin from './stationery/PushPin';

const CAPABILITIES = [
  {
    num: '01',
    category: 'RETRIEVAL ARCHITECTURE',
    title: 'High-Throughput Video RAG & Semantic Retrieval',
    desc: 'Stop losing context in multi-hour multimedia. I architect timestamp-aware chunking pipelines indexing video transcripts into Qdrant HNSW vector spaces, applying BAAI cross-encoders to lift context precision by 28% and stream answers in under 800ms.',
    metrics: ['5,000+ vectors indexed', 'Sub-800ms TTFT', 'Zero transcript drift'],
    color: '#ff5a5f',
    bg: '#fffaf0',
    rotate: '-1deg',
    pin: 'coral',
  },
  {
    num: '02',
    category: 'AGENT SYSTEMS',
    title: 'Autonomous Stealth Web Agents & HITL Automation',
    desc: 'Brittle browser automations break on modern security gates. I engineer stealth Playwright agents with randomized Gaussian typing jitter and fingerprint spoofing that automate 50+ job submissions daily with zero bot detection flags and Telegram operator checkpoints.',
    metrics: ['85% time saved', 'Telegram webhook HITL', 'Zero Cloudflare/portal bans'],
    color: '#3a7bff',
    bg: '#eef3ff',
    rotate: '1deg',
    pin: 'cobalt',
  },
  {
    num: '03',
    category: 'EVALS & OBSERVABILITY',
    title: 'Quantitative LLM Evaluation Suites & Guardrails',
    desc: 'Eliminate vibes-based prompt engineering. I design quantitative eval suites that benchmark Context Precision, Grounded Faithfulness, and Answer Relevance against golden datasets, ensuring deterministic outputs before shipping to production.',
    metrics: ['Automated regression suites', 'Synthetic test suites', 'Grounded citations'],
    color: '#1fbfa4',
    bg: '#eafaf4',
    rotate: '-1.5deg',
    pin: 'teal',
  },
  {
    num: '04',
    category: 'PRODUCTION SYSTEMS',
    title: 'Low-Latency Inference & Production Streaming',
    desc: 'End-to-end production pipelines powered by FastAPI asynchronous task queues, Server-Sent Events (SSE) streaming at 60 FPS, Supabase Row-Level Security, and containerized Docker runtimes.',
    metrics: ['FastAPI SSE streaming', 'Supabase Auth & RLS', 'Dockerized microservices'],
    color: '#8b5cf6',
    bg: '#fff6e0',
    rotate: '1.5deg',
    pin: 'yellow',
  },
];

export default function AWServicesSection() {
  return (
    <section id="capabilities" className="relative py-20 sm:py-28 bg-[#fbf3e2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-16">
          <span className="eyebrow-marker text-2xl sm:text-3xl text-[#8b5cf6]">
            core capabilities ✎
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#241f1a] leading-tight tracking-tight">
            Stop building{' '}
            <WavyStrikethrough color="#ff5a5f">
              brittle AI demos
            </WavyStrikethrough>{' '}
            for problems that demand{' '}
            <MarkerHighlight color="pink">
              production engineering.
            </MarkerHighlight>
          </h2>
        </div>

        {/* 2x2 Neo-Brutalist Tilted Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {CAPABILITIES.map((cap) => (
            <div
              key={cap.num}
              className="relative border-[2.5px] border-[#241f1a] rounded-2xl p-7 sm:p-8 shadow-[6px_6px_0_#241f1a] transition-all hover:rotate-0 hover:scale-[1.02] duration-200 flex flex-col justify-between"
              style={{
                backgroundColor: cap.bg,
                transform: `rotate(${cap.rotate})`,
              }}
            >
              <PushPin color={cap.pin} />

              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#241f1a]/20 pb-3 font-mono text-xs">
                  <span className="font-black text-base text-[#241f1a]">
                    {cap.num}
                  </span>
                  <span
                    className="font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white/70 border border-[#241f1a]"
                    style={{ color: cap.color }}
                  >
                    {cap.category}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#241f1a]">
                  {cap.title}
                </h3>

                <p className="font-sans text-sm sm:text-base text-[#544b3f] leading-relaxed">
                  {cap.desc}
                </p>

                {/* Key Deliverables Bullet Points */}
                <div className="pt-2 space-y-1.5 font-mono text-xs text-[#241f1a]">
                  {cap.metrics.map((m, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="text-[#36c25f] font-bold">✓</span>
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#241f1a]/20 mt-6 flex items-center justify-between">
                <span className="btn-paper bg-white text-xs sm:text-sm py-1.5 px-3.5 font-bold shadow-[2px_2px_0_#241f1a] cursor-default">
                  Production Spec ↗
                </span>
                <span className="font-mono text-[11px] text-[#544b3f]">Verified Metric</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
