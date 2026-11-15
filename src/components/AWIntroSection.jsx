import React from 'react';
import { ArrowRight, Code2, Cpu, ShieldCheck } from 'lucide-react';

export default function AWIntroSection() {
  return (
    <section className="intro wrap" id="intro" style={{ padding: '80px var(--gutter)' }}>
      <div className="intro-grid">
        {/* Big Impact Statement */}
        <h2 className="statement text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-white">
          <span className="g-block block mb-1">
            <span className="w text-white">Production-grade</span>{' '}
            <span className="w text-white">engineering,</span>
          </span>
          <span className="g-block block mb-1">
            <span className="w text-zinc-400">AI-accelerated</span>{' '}
            <span className="w text-zinc-400">where</span>{' '}
            <span className="w text-zinc-400">it</span>{' '}
            <span className="w text-zinc-400">counts,</span>
          </span>
          <span className="g-block block">
            <span className="w chrome">bespoke</span>{' '}
            <span className="w chrome">where</span>{' '}
            <span className="w chrome">it</span>{' '}
            <span className="w chrome">matters.</span>
          </span>
        </h2>

        {/* Side Details */}
        <div className="intro-side fade-up flex flex-col justify-between space-y-6">
          <p className="lede text-base sm:text-lg text-zinc-300 font-sans leading-relaxed">
            Autonomous web agents, timestamp-aware video RAG pipelines, and the quantitative evaluation suites behind them. Deterministic state machines, stealth anti-bot emulation, and semantic rerankers built round real production constraints, so the system scales without hallucinating.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10 font-mono text-xs text-zinc-400">
            <div>
              <span className="text-white text-lg font-bold block">85%</span>
              <span>Manual Time Reduction</span>
            </div>
            <div>
              <span className="text-white text-lg font-bold block">+28%</span>
              <span>Context Precision Lift</span>
            </div>
            <div>
              <span className="text-white text-lg font-bold block">0 Flags</span>
              <span>Stealth Bot Evasion</span>
            </div>
            <div>
              <span className="text-white text-lg font-bold block">&lt;800ms</span>
              <span>Streaming TTFT</span>
            </div>
          </div>

          <div className="text-links flex flex-wrap gap-5 text-sm font-medium">
            <a href="#built" className="text-white hover:text-emerald-400 flex items-center gap-1.5 transition">
              Explore Console <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a href="#work" className="text-zinc-400 hover:text-white flex items-center gap-1.5 transition">
              Flagship Work <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a href="#evals-lab" className="text-zinc-400 hover:text-white flex items-center gap-1.5 transition">
              Evaluation Lab <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
