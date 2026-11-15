import React, { useState } from 'react';

const STEPS = [
  {
    num: '01',
    label: 'DISCOVERY & ARCHITECTURE',
    title: 'Audit domain constraints & data pipelines.',
    body: 'Analyze query distribution, document semantics, and anti-bot security boundaries. Map transcript timestamps or authentication flows before writing a single line of model logic.',
    tech: 'Data profiling • Payload schemas • Threat modeling',
  },
  {
    num: '02',
    label: 'CHUNKING & VECTOR RETRIEVAL',
    title: 'Precision chunking & high-dimensional indexing.',
    body: 'Determine semantic chunk boundaries (15-30 second timestamp-aware speaker chunks for video, or DOM-node hierarchy for agents). Ingest into Qdrant with HNSW indexes for sub-15ms vector retrieval.',
    tech: 'Qdrant HNSW • Semantic chunking • Dense embeddings',
  },
  {
    num: '03',
    label: 'RERANKING & EVASION',
    title: 'Cross-encoder reranking & stealth fingerprinting.',
    body: 'Mitigate the retrieval cliff by applying BAAI Cross-Encoders over top-k candidates, lifting precision by +28%. For agents, strip automation flags and apply Gaussian typing delay curves.',
    tech: 'BAAI Cross-Encoder • Playwright Stealth • Memory Vault',
  },
  {
    num: '04',
    label: 'EVALS & GUARDRAILS',
    title: 'Quantitative evals & human-in-the-loop gates.',
    body: 'Execute automated regression evaluation measuring Context Precision, Faithfulness, and Answer Relevance against golden ground truth datasets. Wire Telegram webhooks for operator overrides.',
    tech: 'RAG Triad metrics • Synthetic test sets • Telegram HITL',
  },
  {
    num: '05',
    label: 'PRODUCTION DEPLOYMENT',
    title: 'Containerization, streaming SSE & observability.',
    body: 'Ship containerized microservices on Docker and FastAPI with 60 FPS Server-Sent Event (SSE) streaming for sub-800ms Time-To-First-Token. Instrument telemetry and latency tracing.',
    tech: 'Docker • FastAPI SSE • Supabase Auth & RLS',
  },
];

export default function AWProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="process wrap" id="process" style={{ padding: '100px var(--gutter)' }}>
      {/* Sticky Left Sidebar */}
      <div className="process-side">
        <div className="process-sticky md:sticky md:top-28 space-y-6">
          <span className="chip glass inline-block" data-liquid="chip">
            <i
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#2bd67b',
                boxShadow: '0 0 10px #2bd67b',
                marginRight: '8px',
                display: 'inline-block',
              }}
            />
            Engineering Methodology
          </span>

          <h2 className="display reveal-lines">
            <span className="line">
              <span className="line-in">From problem to production,</span>
            </span>
            <span className="line">
              <span className="line-in chrome">in five clear steps.</span>
            </span>
          </h2>

          <p className="text-zinc-400 font-sans text-sm sm:text-base leading-relaxed max-w-sm">
            Deterministic, measurable, and zero-hallucination engineering for complex agentic and retrieval systems.
          </p>

          <div className="hidden md:flex items-center gap-2 pt-4">
            {STEPS.map((s, idx) => (
              <button
                key={s.num}
                onClick={() => setActiveStep(idx)}
                className={`w-9 h-9 rounded-full font-mono text-xs font-bold transition-all ${
                  activeStep === idx
                    ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.4)]'
                    : 'glass text-zinc-400 hover:text-white'
                }`}
              >
                {s.num}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Right Steps Column */}
      <ol className="steps space-y-6 list-none p-0 m-0">
        {STEPS.map((step, idx) => (
          <li
            key={step.num}
            onMouseEnter={() => setActiveStep(idx)}
            className="step glass p-8 sm:p-10 rounded-3xl transition-all duration-300 relative overflow-hidden group hover:border-white/30"
            style={{
              background:
                activeStep === idx
                  ? 'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)'
                  : 'linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
            }}
          >
            <div className="flex items-center justify-between gap-4 mb-4">
              <span className="step-no font-mono text-3xl sm:text-4xl font-black text-white/30 group-hover:text-emerald-400 transition-colors">
                {step.num}
              </span>
              <span className="step-label font-mono text-xs tracking-wider text-zinc-400 uppercase bg-white/5 px-3 py-1 rounded-full border border-white/10">
                {step.label}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight">
              {step.title}
            </h3>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-sans mb-6">
              {step.body}
            </p>

            <div className="pt-4 border-t border-white/10 font-mono text-xs text-emerald-400 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>{step.tech}</span>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
