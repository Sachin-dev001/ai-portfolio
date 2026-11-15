import React from 'react';
import { GraduationCap, Award, BookOpen, Layers } from 'lucide-react';

export default function AWCredentialsSection() {
  const credentials = [
    {
      title: 'Bachelor of Computer Applications (BCA)',
      org: 'Undergraduate Degree',
      period: '2023 - 2026 (Graduating Year)',
      desc: 'Rigorous foundational training across Data Structures & Algorithms, Distributed Systems, Relational & NoSQL Database Design, Operating Systems, and Python Software Engineering.',
      tags: ['Data Structures & Algorithms', 'Distributed Systems', 'Database Internals', 'Python 3'],
    },
    {
      title: 'GenAI & Production RAG Systems Architecture',
      org: 'Independent Engineering Track',
      period: '2024 - Present',
      desc: 'Specialized deep-dive in semantic vector search (HNSW), cross-encoder rerankers, deterministic agent state machines, synthetic eval set generation, and low-latency inference streaming.',
      tags: ['Qdrant Vector DB', 'Cross-Encoders', 'Playwright Stealth', 'FastAPI SSE'],
    },
  ];

  return (
    <section className="credentials wrap" id="credentials" style={{ padding: '80px var(--gutter)' }}>
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="chip glass inline-block mb-4" data-liquid="chip">
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
            Academic & Technical Background
          </span>

          <h2 className="display reveal-lines">
            <span className="line">
              <span className="line-in">Education &</span>
            </span>
            <span className="line">
              <span className="line-in chrome">Credentials.</span>
            </span>
          </h2>
        </div>

        <span className="font-mono text-xs text-zinc-400">
          BACHELOR OF COMPUTER APPLICATIONS &bull; 2026
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {credentials.map((cred, idx) => (
          <div
            key={idx}
            className="glass p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between hover:border-white/30 transition-all"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider bg-emerald-950/40 border border-emerald-500/20 px-3 py-1 rounded-full">
                  {cred.org}
                </span>
                <span className="font-mono text-xs text-zinc-400">{cred.period}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                {cred.title}
              </h3>

              <p className="text-zinc-300 font-sans text-sm leading-relaxed mb-6">
                {cred.desc}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
              {cred.tags.map((t, i) => (
                <span
                  key={i}
                  className="font-mono text-[11px] text-zinc-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
