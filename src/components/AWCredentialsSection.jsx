import React from 'react';
import { GraduationCap, Award, BookOpen, Layers } from 'lucide-react';

export default function AWCredentialsSection() {
  const credentials = [
    {
      title: 'Bachelor of Technology (B.Tech) in Computer Science & Engineering',
      org: 'Poornima University',
      badge: 'DEGREE • 2022 – 2026',
      period: 'Graduating 2026',
      desc: 'Rigorous engineering training across Data Structures & Algorithms, Artificial Intelligence, Database Management Systems (DBMS), Operating Systems, and Software Engineering.',
      tags: ['Data Structures & Algorithms', 'Artificial Intelligence', 'Database Internals', 'Operating Systems', 'Python & C++'],
    },
    {
      title: 'Certificate in Artificial Intelligence & Data Science',
      org: 'Skill India (Government of India / NSDC)',
      badge: 'GOVT OF INDIA ACCREDITED',
      period: 'Certified 2026',
      desc: 'National Skill Development Corporation (NSDC) government certification in AI architectures, Machine Learning, Deep Learning models, statistical modeling, and data science pipelines.',
      tags: ['Skill India', 'NSDC Govt of India', 'Machine Learning', 'Deep Learning', 'Data Science'],
    },
    {
      title: 'Production GenAI & Agentic Systems Architecture',
      org: 'Independent Applied Engineering',
      badge: 'PRODUCTION SYSTEMS',
      period: '2024 – Present',
      desc: 'Architecting high-throughput video RAG pipelines with Qdrant and BAAI cross-encoders (+28% precision lift), autonomous Playwright stealth agents with zero bot flags, and automated LLM eval suites.',
      tags: ['Qdrant HNSW', 'BAAI Cross-Encoder', 'Playwright Stealth', 'FastAPI SSE', 'Ragas & DeepEval'],
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
          B.TECH IN COMPUTER SCIENCE &bull; 2022–2026
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {credentials.map((cred, idx) => (
          <div
            key={idx}
            className="glass p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between hover:border-white/30 transition-all"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className="font-mono text-[10.5px] text-emerald-400 uppercase tracking-wider bg-emerald-950/40 border border-emerald-500/20 px-3 py-1 rounded-full">
                  {cred.badge}
                </span>
                <span className="font-mono text-xs text-zinc-400">{cred.period}</span>
              </div>

              <span className="font-mono text-xs text-zinc-400 block mb-1">{cred.org}</span>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 tracking-tight">
                {cred.title}
              </h3>

              <p className="text-zinc-300 font-sans text-xs sm:text-sm leading-relaxed mb-6">
                {cred.desc}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
              {cred.tags.map((t, i) => (
                <span
                  key={i}
                  className="font-mono text-[10.5px] text-zinc-300 bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-full"
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
