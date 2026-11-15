import React from 'react';

const TECH_BENCHMARKS = [
  { name: 'Gemini 2.5 Flash', stat: 'Sub-800ms TTFT' },
  { name: 'Qdrant Vector DB', stat: '5K+ HNSW Vectors' },
  { name: 'Playwright Stealth', stat: 'Zero Bot Flags' },
  { name: 'BAAI Cross-Encoder', stat: '+28% Precision Lift' },
  { name: 'FastAPI SSE', stat: '60 FPS Stream' },
  { name: 'LangChain & RAG', stat: 'Hybrid Search' },
  { name: 'Supabase Auth & RLS', stat: 'Multi-Tenant' },
  { name: 'Telegram Bot API', stat: 'Real-time HITL' },
  { name: 'Python 3.12', stat: 'Async Core' },
  { name: 'Docker & Microservices', stat: 'Production Ready' },
  { name: 'PyTorch & HuggingFace', stat: 'Dense Embeddings' },
];

export default function AWTrustedMarquee() {
  return (
    <section className="trusted" id="trusted" style={{ padding: '40px 0 60px' }}>
      <p className="trusted-label fade-up text-center mb-6 text-xs uppercase tracking-widest text-zinc-400 font-mono">
        ENGINEERING STACK & BENCHMARKS &bull; <span className="chrome font-bold">PROVEN IN PRODUCTION</span>
      </p>

      <div className="marquee overflow-hidden relative">
        <div className="animate-marquee-left flex items-center gap-6 whitespace-nowrap">
          {/* First loop */}
          {TECH_BENCHMARKS.map((item, idx) => (
            <div
              key={`tech-1-${idx}`}
              className="flex items-center gap-3 px-5 py-2.5 rounded-full glass border border-white/10"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" style={{ boxShadow: '0 0 8px #2bd67b' }} />
              <span className="font-semibold text-sm text-white tracking-tight">{item.name}</span>
              <span className="text-xs font-mono text-zinc-400 border-l border-white/10 pl-3">
                {item.stat}
              </span>
            </div>
          ))}

          {/* Duplicate loop for infinite seamless scrolling */}
          {TECH_BENCHMARKS.map((item, idx) => (
            <div
              key={`tech-2-${idx}`}
              className="flex items-center gap-3 px-5 py-2.5 rounded-full glass border border-white/10"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" style={{ boxShadow: '0 0 8px #2bd67b' }} />
              <span className="font-semibold text-sm text-white tracking-tight">{item.name}</span>
              <span className="text-xs font-mono text-zinc-400 border-l border-white/10 pl-3">
                {item.stat}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
