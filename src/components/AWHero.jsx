import React from 'react';
import { ArrowDown, ArrowRight, FileText, Sparkles, MapPin, Award, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function AWHero({ onOpenResume }) {
  const tickerItems = [
    'SACHIN SHARMA',
    'SUB-800MS TTFT STREAMING',
    'PLAYWRIGHT STEALTH AGENT',
    '+28% RETRIEVAL CONTEXT PRECISION',
    '50+ DAILY STEALTH SUBMISSIONS',
    'ZERO BOT DETECTION FLAGS',
    '5,000+ VECTOR CHUNKS INDEXED',
    'QDRANT HNSW & CROSS-ENCODER RERANKING',
    'POORNIMA UNIVERSITY BTECH CSE',
  ];

  return (
    <section id="hero" className="relative min-h-screen pt-36 pb-16 flex flex-col justify-between overflow-hidden">
      {/* Ambient background glows for rich depth */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-slate-800/30 via-zinc-700/15 to-transparent blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-white/[0.03] blur-[130px] pointer-events-none rounded-full" />

      {/* Hero Center Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex-1 flex flex-col justify-center items-center z-20">
        {/* Floating status pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/[0.12] bg-zinc-900/80 backdrop-blur-xl text-xs font-mono tracking-widest text-zinc-300 uppercase mb-8 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-live-dot" />
          <span className="font-semibold text-white">SACHIN SHARMA</span>
          <span className="text-zinc-600">&bull;</span>
          <span className="text-zinc-400">JAIPUR, INDIA</span>
          <span className="text-zinc-600">&bull;</span>
          <span className="text-emerald-400">OPEN TO WORK</span>
        </div>

        {/* MASSIVE PERSONAL BRANDING HEADLINE (Rethink Sans + Chrome Text) */}
        <div className="space-y-2 mb-6">
          <h1 className="display-title text-6xl sm:text-8xl md:text-9xl font-extrabold tracking-tighter leading-[0.92] select-none">
            <span className="chrome-text">SACHIN</span><br />
            <span className="text-white">SHARMA</span>
          </h1>
          <div className="text-sm sm:text-lg md:text-xl font-mono uppercase tracking-[0.25em] text-zinc-400 pt-3">
            AI & Agentic Systems Engineer
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          Building production-grade Generative AI systems: low-latency hybrid RAG pipelines, autonomous stealth web agents with human-in-the-loop safeguards, and quantitative eval suites.
        </p>

        {/* Action Buttons (AW Media solid + ghost styles) */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <button
            onClick={onOpenResume}
            className="aw-btn-solid px-8 py-3.5 text-sm font-bold tracking-tight active:scale-95 flex items-center gap-2"
          >
            <FileText className="w-4 h-4" />
            <span>Download ATS Resume</span>
          </button>

          <a
            href="#work"
            className="aw-btn-ghost px-7 py-3.5 text-sm font-medium tracking-tight active:scale-95 flex items-center gap-2"
          >
            <span>Explore Flagship Work</span>
            <ArrowRight className="w-4 h-4 text-zinc-400" />
          </a>

          <div className="flex items-center gap-2 pl-2">
            <a
              href="https://github.com/Sachin-dev001"
              target="_blank"
              rel="noreferrer"
              className="p-3.5 rounded-full aw-btn-ghost text-zinc-300 hover:text-white transition"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/sachin-sharma-659ab53b6"
              target="_blank"
              rel="noreferrer"
              className="p-3.5 rounded-full aw-btn-ghost text-zinc-300 hover:text-white transition"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Academic Credentials Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
            <span>BTech Computer Science &bull; Poornima University</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Govt. Certified AI & Data Science (Skill India / NSDC)</span>
          </div>
        </div>
      </div>

      {/* Running Marquee Ticker */}
      <div className="w-full border-t border-white/[0.08] pt-4 pb-2 bg-black/60 backdrop-blur-md z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between mb-3 text-[11px] font-mono text-zinc-500 uppercase">
          <div className="flex items-center gap-2">
            <span>SCROLL FOR SYSTEMS</span>
            <ArrowDown className="w-3 h-3 animate-bounce" />
          </div>
          <div className="hidden sm:block text-zinc-400">
            PRODUCTION SYSTEM BENCHMARKS
          </div>
        </div>

        <div className="overflow-hidden relative whitespace-nowrap py-2 border-y border-white/[0.06]">
          <div className="animate-marquee flex items-center gap-8 text-xs font-mono text-zinc-400">
            {[...tickerItems, ...tickerItems].map((item, idx) => (
              <span key={idx} className="flex items-center gap-8">
                <span className="text-zinc-200 font-semibold tracking-wider">{item}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 inline-block" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
