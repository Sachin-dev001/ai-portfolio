import React from 'react';
import { ExternalLink, ArrowUpRight, Bot, Database, Zap } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function AWWorkDeck() {
  const projects = [
    {
      id: 'autoapply',
      badge: 'AUTONOMOUS MULTI-AGENT',
      status: 'PRODUCTION DEPLOYED',
      title: 'AutoApply: Stealth Web Application Agent',
      description:
        'Architected an autonomous multi-platform application agent for Wellfound and Naukri utilizing Playwright stealth with human-emulation typing, cutting application time by 85%. Features a Human-In-The-Loop Telegram bot and Recruiter Memory Vault with zero bot detection flags.',
      metrics: [
        { label: 'Time Reduction', value: '85%' },
        { label: 'Daily Submissions', value: '50+/day' },
        { label: 'Bot Detection Flags', value: 'Zero' },
      ],
      tech: ['Python', 'Playwright Stealth', 'Google Gemini Flash', 'Supabase Auth & RLS', 'Telegram Bot API'],
      github: 'https://github.com/Sachin-dev001/ai-job-agent',
      live: null,
      bgGradient: 'from-emerald-950/30 via-zinc-900/60 to-black/80',
    },
    {
      id: 'videosage',
      badge: 'PRODUCTION RAG & STREAMING',
      status: 'LIVE APP AVAILABLE',
      title: 'VideoSage AI: Timestamp-Aware Video RAG',
      description:
        'End-to-end RAG system indexing multi-hour YouTube video transcripts using timestamp-aware chunking and semantic vector search in Qdrant across 5,000+ vector chunks. Combines dense embeddings with BAAI cross-encoder reranking to boost context precision by 28% with sub-800ms streaming latency.',
      metrics: [
        { label: 'Context Precision Lift', value: '+28%' },
        { label: 'Streaming TTFT Latency', value: '<800ms' },
        { label: 'Indexed Vector Chunks', value: '5,000+' },
      ],
      tech: ['Python', 'Gemini 2.5 Flash', 'Qdrant Vector DB', 'BAAI Reranker', 'Streamlit Cloud'],
      github: 'https://github.com/Sachin-dev001/video-sage-ai',
      live: 'https://video-sage-ai.streamlit.app',
      bgGradient: 'from-blue-950/30 via-zinc-900/60 to-black/80',
    },
  ];

  return (
    <section id="work" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.12] bg-zinc-900/60 backdrop-blur-md text-[11px] font-mono tracking-widest text-zinc-400 uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-live-dot" />
              <span>FLAGSHIP ENGINEERING</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              From concept to live.<br />
              <span className="text-zinc-400">Systems that ship.</span>
            </h2>
          </div>

          <div className="text-xs font-mono text-zinc-400 flex items-center gap-2">
            <span>2 PRODUCTION-GRADE SYSTEMS</span>
          </div>
        </div>

        {/* Project Cards */}
        <div className="space-y-12">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className={`rounded-3xl p-8 sm:p-12 border border-white/[0.1] bg-gradient-to-b ${proj.bgGradient} aw-glass-card shadow-2xl relative overflow-hidden`}
            >
              {/* Header badges */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className="px-3 py-1 rounded-full bg-white/[0.08] text-white border border-white/10 font-semibold tracking-wider">
                    {proj.badge}
                  </span>
                  <span className="text-zinc-500">&bull;</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-live-dot" />
                    {proj.status}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  {proj.live && (
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-1.5 rounded-full bg-white hover:bg-zinc-200 text-black text-xs font-bold font-mono transition-all flex items-center gap-1.5 shadow-md active:scale-95"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Launch Live App</span>
                    </a>
                  )}

                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full bg-black/60 border border-white/10 hover:border-white/30 text-white transition"
                    title="GitHub Repository"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Title & Description */}
              <div className="max-w-3xl mb-8">
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                  {proj.title}
                </h3>
                <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
                  {proj.description}
                </p>
              </div>

              {/* Metrics Highlights Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 pt-6 border-t border-white/[0.08]">
                {proj.metrics.map((m, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-black/50 border border-white/[0.06]">
                    <div className="text-2xl sm:text-3xl font-mono font-bold text-white mb-1">{m.value}</div>
                    <div className="text-xs text-zinc-400 font-sans">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="text-xs font-mono text-zinc-500 mr-2">Core Tech:</span>
                {proj.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full bg-zinc-900/90 border border-white/[0.08] text-xs font-mono text-zinc-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
