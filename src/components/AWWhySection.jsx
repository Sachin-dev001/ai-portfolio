import React from 'react';

const TILES = [
  {
    num: '01',
    title: 'Production-First Mindset. No toy scripts.',
    desc: 'I do not build weekend wrapper scripts. I engineer resilient production architectures: sub-800ms streaming TTFT, deterministic fallback paths, and minimal memory footprints.',
    metric: '<800ms TTFT • Zero Crash Loop',
  },
  {
    num: '02',
    title: 'Quantified Evaluation. Not gut feel.',
    desc: 'Every retrieval and model decision is validated against measurable metrics: +28% context precision lift with BAAI cross-encoders evaluated against golden domain datasets.',
    metric: '92% Context Precision • 0.94 Faithfulness',
  },
  {
    num: '03',
    title: 'Autonomous Stealth Reliability. Zero bot flags.',
    desc: 'Stealth web automation requires true browser fingerprint masking, CDP flag neutralization, and human-emulated typing jitter, coupled with real-time Telegram HITL operator webhooks.',
    metric: '50+ Submissions/Day • 0 Detection Bans',
  },
  {
    num: '04',
    title: 'Full-Stack Ownership from Vector DB to UI.',
    desc: 'From high-dimensional HNSW vector spaces in Qdrant and FastAPI SSE streaming to responsive, accessible modern web frontends, I own the entire engineering lifecycle.',
    metric: 'End-to-End Delivery • Modern Stack',
  },
];

export default function AWWhySection() {
  return (
    <section className="why wrap" id="why" style={{ padding: '100px var(--gutter)' }}>
      <div className="bento">
        {/* Title Tile (Spans 1 or 2 cols in bento) */}
        <div className="tile glass p-8 sm:p-12 rounded-3xl flex flex-col justify-between" style={{ gridColumn: '1 / -1' }}>
          <div>
            <span className="chip glass inline-block mb-6" data-liquid="chip">
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
              Engineering Philosophy
            </span>
            <h2 className="display why-title reveal-lines">
              <span className="line">
                <span className="line-in">Why engineering teams</span>
              </span>
              <span className="line">
                <span className="line-in">hire <span className="chrome">Sachin.</span></span>
              </span>
            </h2>
          </div>

          <p className="text-zinc-400 font-sans text-base max-w-xl mt-6">
            Four engineering principles that separate production-ready AI systems from fragile proof-of-concepts.
          </p>
        </div>

        {/* 4 Bento Grid Tiles */}
        {TILES.map((t) => (
          <article
            key={t.num}
            className="tile glass p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden group hover:border-white/30 transition-all"
            style={{
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
            }}
          >
            <div>
              <span className="tile-no font-mono text-xs text-zinc-500 font-bold block mb-4">
                0{t.num}
              </span>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                {t.title}
              </h3>
              <p className="text-sm text-zinc-300 font-sans leading-relaxed">
                {t.desc}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 font-mono text-xs text-emerald-400 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>{t.metric}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
