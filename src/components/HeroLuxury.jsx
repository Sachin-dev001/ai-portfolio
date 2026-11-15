import React from 'react';
import { ArrowDownRight, Terminal, Shield, Gauge, Database, Bot, ArrowRight, FileText } from 'lucide-react';

export default function HeroLuxury({ onOpenResume }) {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle luxury ambient backlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-zinc-700/10 blur-[140px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Eyebrow Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-8 border-b border-white/[0.07] mb-12 text-xs font-mono text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-status" />
            <span className="text-zinc-300">STATUS: OPEN FOR AI ENGINEER ROLES</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-zinc-500">
            <span>LOC: JAIPUR, INDIA</span>
            <span>&bull;</span>
            <span>SPECIALIZATION: PRODUCTION RAG & AGENTIC ARCHITECTURES</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-8">
            Engineering High-Precision <span className="text-zinc-400 font-normal">RAG Pipelines</span> & <span className="italic font-serif font-light text-zinc-200">Autonomous Agents</span>.
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed mb-10">
            I am <span className="text-white font-semibold">Sachin Sharma</span>. I build production-grade Generative AI systems: low-latency hybrid vector retrieval, stealth multi-agent workflows with human-in-the-loop safeguards, and automated LLM evaluation suites (<span className="text-zinc-200 font-mono text-sm">Ragas</span>, <span className="text-zinc-200 font-mono text-sm">DeepEval</span>).
          </p>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-4 mb-16">
            <a
              href="#projects"
              className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-zinc-100 hover:bg-white text-zinc-950 font-semibold text-sm transition-all shadow-lg active:scale-95"
            >
              <span>Explore Architecture & Projects</span>
              <ArrowDownRight className="w-4 h-4" />
            </a>

            <a
              href="#3d-experience"
              className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 border border-white/[0.09] text-sm font-medium transition-all"
            >
              <span>Launch 3D WebGL System</span>
              <ArrowRight className="w-4 h-4 text-zinc-500" />
            </a>

            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-transparent hover:bg-white/[0.04] text-zinc-400 hover:text-white border border-transparent hover:border-white/[0.08] text-sm font-mono transition-all"
            >
              <FileText className="w-4 h-4" />
              <span>ATS Resume (PDF)</span>
            </button>
          </div>
        </div>

        {/* Minimal Luxury Metric Columns (No AI-slop boxes) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-white/[0.07]">
          <div className="space-y-1">
            <div className="text-xs font-mono text-zinc-500 flex items-center gap-1.5">
              <Gauge className="w-3.5 h-3.5 text-zinc-400" />
              <span>INFERENCE TTFT</span>
            </div>
            <div className="text-3xl sm:text-4xl font-mono font-bold text-white tracking-tight">&lt;800ms</div>
            <p className="text-xs text-zinc-500 font-sans">Gemini 2.5 Flash async token streaming</p>
          </div>

          <div className="space-y-1">
            <div className="text-xs font-mono text-zinc-500 flex items-center gap-1.5">
              <Database className="w-3.5 h-3.5 text-zinc-400" />
              <span>RETRIEVAL PRECISION</span>
            </div>
            <div className="text-3xl sm:text-4xl font-mono font-bold text-white tracking-tight">+28%</div>
            <p className="text-xs text-zinc-500 font-sans">Via BAAI cross-encoder reranking</p>
          </div>

          <div className="space-y-1">
            <div className="text-xs font-mono text-zinc-500 flex items-center gap-1.5">
              <Bot className="w-3.5 h-3.5 text-zinc-400" />
              <span>AGENT SUBMISSIONS</span>
            </div>
            <div className="text-3xl sm:text-4xl font-mono font-bold text-white tracking-tight">50+/day</div>
            <p className="text-xs text-zinc-500 font-sans">Stealth Playwright with zero bot flags</p>
          </div>

          <div className="space-y-1">
            <div className="text-xs font-mono text-zinc-500 flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-zinc-400" />
              <span>GUARDRAIL DEFENSE</span>
            </div>
            <div className="text-3xl sm:text-4xl font-mono font-bold text-white tracking-tight">-25%</div>
            <p className="text-xs text-zinc-500 font-sans">Hallucinations eliminated via evals</p>
          </div>
        </div>
      </div>
    </section>
  );
}
