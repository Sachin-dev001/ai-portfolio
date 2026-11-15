import React from 'react';
import { ArrowRight, Bot, Cpu, Database, Gauge, ShieldCheck, Zap, Download, ExternalLink } from 'lucide-react';

export default function Hero({ onOpenResume }) {
  return (
    <section id="hero" className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      {/* Background radial gradient mesh */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-cyan-500/10 via-purple-500/10 to-transparent blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-6 shadow-lg shadow-cyan-500/5">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>LLMOps &bull; Production RAG &bull; Autonomous Multi-Agent Systems</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
            Engineering <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Production RAG</span> & <br className="hidden sm:inline" />
            Autonomous Agent Architectures
          </h1>

          {/* Subtitle with domain substance */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Hi, I’m <span className="text-white font-semibold">Sachin Sharma</span>. I build production-grade Generative AI systems: end-to-end vector retrieval pipelines, automated LLM evaluations (<span className="text-cyan-300 font-mono text-sm">Ragas</span>, <span className="text-purple-300 font-mono text-sm">DeepEval</span>), cross-encoder rerankers, stealth web agents, and sub-800ms streaming inference.
          </p>

          {/* Direct Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-14">
            <a
              href="#projects"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm hover:from-cyan-400 hover:to-blue-500 transition shadow-lg shadow-cyan-500/25 active:scale-95"
            >
              <span>Inspect AI Systems</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#vector-space"
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-slate-200 font-medium text-sm hover:bg-slate-800 hover:text-white hover:border-cyan-500/40 transition shadow-md"
            >
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>Launch 3D Vector Space</span>
            </a>

            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300 font-medium text-sm hover:bg-slate-800 hover:text-white transition"
            >
              <Download className="w-4 h-4 text-slate-400" />
              <span>View ATS Resume</span>
            </button>
          </div>

          {/* Hard Engineering Metrics Banner (Proof of Work) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-left">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-white/[0.08] backdrop-blur-sm hover:border-cyan-500/30 transition">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono mb-1">
                <Gauge className="w-3.5 h-3.5" />
                <span>INFERENCE LATENCY</span>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">&lt;800ms</div>
              <div className="text-xs text-slate-400 mt-1">TTFT via Gemini 2.5 Flash Async Stream</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-white/[0.08] backdrop-blur-sm hover:border-blue-500/30 transition">
              <div className="flex items-center gap-2 text-blue-400 text-xs font-mono mb-1">
                <Database className="w-3.5 h-3.5" />
                <span>RETRIEVAL PRECISION</span>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">+28%</div>
              <div className="text-xs text-slate-400 mt-1">Precision lift via BAAI Cross-Encoder</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-white/[0.08] backdrop-blur-sm hover:border-emerald-500/30 transition">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono mb-1">
                <Bot className="w-3.5 h-3.5" />
                <span>AUTONOMOUS AGENT</span>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">50+/day</div>
              <div className="text-xs text-slate-400 mt-1">Stealth Playwright Portal Submissions</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-white/[0.08] backdrop-blur-sm hover:border-purple-500/30 transition">
              <div className="flex items-center gap-2 text-purple-400 text-xs font-mono mb-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>HALLUCINATION MITIGATION</span>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">-25%</div>
              <div className="text-xs text-slate-400 mt-1">Via Guardrails & Context Validation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
