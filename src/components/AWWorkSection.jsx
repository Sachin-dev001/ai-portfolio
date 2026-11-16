import React from 'react';
import MarkerHighlight from './stationery/MarkerHighlight';
import PushPin from './stationery/PushPin';

export default function AWWorkSection() {
  return (
    <section id="work" className="relative py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="space-y-3 mb-14 text-center sm:text-left">
          <span className="eyebrow-marker text-2xl sm:text-3xl text-[#3a7bff]">
            recent work · showing 2 flagship ai systems ✎
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#241f1a] tracking-tight">
            From concept to live.{' '}
            <MarkerHighlight color="yellow">
              Systems that ship.
            </MarkerHighlight>
          </h2>
        </div>

        {/* 2 Flagship Systems Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          
          {/* Project 1: AutoApply */}
          <article className="relative bg-[#fff6e0] border-[2.5px] border-[#241f1a] rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0_#241f1a] transform -rotate-1 hover:rotate-0 transition-transform duration-200 flex flex-col justify-between">
            <PushPin color="coral" />

            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#241f1a]/20 pb-3 font-mono text-xs">
                <span className="font-bold text-[#ff5a5f] uppercase tracking-wider">
                  AUTONOMOUS MULTI-AGENT
                </span>
                <span className="px-2 py-0.5 rounded bg-[#ffffff] border border-[#241f1a] font-bold text-[#36c25f]">
                  ● PRODUCTION DEPLOYED
                </span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl text-[#241f1a]">
                AutoApply: Stealth Web Application Agent
              </h3>

              <p className="font-sans text-sm sm:text-base text-[#544b3f] leading-relaxed">
                Architected an autonomous multi-platform application agent for Wellfound and Naukri utilizing Playwright stealth with human-emulation typing, cutting application time by 85%. Features a Human-In-The-Loop Telegram bot and Recruiter Memory Vault with zero bot-detection flags.
              </p>

              {/* 3 KPI Boxes */}
              <div className="grid grid-cols-3 gap-2.5 pt-2">
                <div className="bg-white border-2 border-[#241f1a] rounded-lg p-2.5 text-center shadow-[2px_2px_0_#241f1a]">
                  <div className="font-display font-black text-lg sm:text-xl text-[#ff5a5f]">85%</div>
                  <div className="font-mono text-[10px] text-[#544b3f] font-bold uppercase">Time Reduction</div>
                </div>
                <div className="bg-white border-2 border-[#241f1a] rounded-lg p-2.5 text-center shadow-[2px_2px_0_#241f1a]">
                  <div className="font-display font-black text-lg sm:text-xl text-[#241f1a]">50+/day</div>
                  <div className="font-mono text-[10px] text-[#544b3f] font-bold uppercase">Submissions</div>
                </div>
                <div className="bg-white border-2 border-[#241f1a] rounded-lg p-2.5 text-center shadow-[2px_2px_0_#241f1a]">
                  <div className="font-display font-black text-lg sm:text-xl text-[#36c25f]">0 Flags</div>
                  <div className="font-mono text-[10px] text-[#544b3f] font-bold uppercase">Bot Evasion</div>
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="pt-2 flex flex-wrap gap-1.5 font-mono text-[11px] font-bold text-[#241f1a]">
                <span className="px-2 py-0.5 rounded bg-white border border-[#241f1a]">PYTHON</span>
                <span className="px-2 py-0.5 rounded bg-white border border-[#241f1a]">PLAYWRIGHT STEALTH</span>
                <span className="px-2 py-0.5 rounded bg-white border border-[#241f1a]">GEMINI FLASH</span>
                <span className="px-2 py-0.5 rounded bg-white border border-[#241f1a]">SUPABASE RLS</span>
                <span className="px-2 py-0.5 rounded bg-white border border-[#241f1a]">TELEGRAM HITL</span>
              </div>
            </div>

            <div className="pt-6 border-t border-[#241f1a]/20 mt-6 flex items-center justify-between">
              <a
                href="https://github.com/Sachin-dev001/ai-job-agent"
                target="_blank"
                rel="noreferrer"
                className="btn-paper btn-coral text-sm py-2 px-5 font-bold shadow-[3px_3px_0_#241f1a]"
              >
                Inspect Code on GitHub ↗
              </a>
              <span className="font-mono text-xs text-[#544b3f]">Open Source (MIT)</span>
            </div>
          </article>

          {/* Project 2: VideoSage AI */}
          <article className="relative bg-[#eafaf4] border-[2.5px] border-[#241f1a] rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0_#241f1a] transform rotate-1 hover:rotate-0 transition-transform duration-200 flex flex-col justify-between">
            <PushPin color="cobalt" />

            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#241f1a]/20 pb-3 font-mono text-xs">
                <span className="font-bold text-[#1fbfa4] uppercase tracking-wider">
                  PRODUCTION RAG &amp; STREAMING
                </span>
                <span className="px-2 py-0.5 rounded bg-[#ffffff] border border-[#241f1a] font-bold text-[#36c25f]">
                  ● LIVE DEPLOYMENT
                </span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl text-[#241f1a]">
                VideoSage AI: Timestamp-Aware Video RAG
              </h3>

              <p className="font-sans text-sm sm:text-base text-[#544b3f] leading-relaxed">
                End-to-end RAG system indexing multi-hour YouTube video transcripts using timestamp-aware chunking and semantic vector search in Qdrant across 5,000+ vector chunks. Combines dense embeddings with BAAI cross-encoder reranking to boost context precision by 28% with sub-800ms streaming TTFT.
              </p>

              {/* 3 KPI Boxes */}
              <div className="grid grid-cols-3 gap-2.5 pt-2">
                <div className="bg-white border-2 border-[#241f1a] rounded-lg p-2.5 text-center shadow-[2px_2px_0_#241f1a]">
                  <div className="font-display font-black text-lg sm:text-xl text-[#3a7bff]">+28.3%</div>
                  <div className="font-mono text-[10px] text-[#544b3f] font-bold uppercase">Precision Lift</div>
                </div>
                <div className="bg-white border-2 border-[#241f1a] rounded-lg p-2.5 text-center shadow-[2px_2px_0_#241f1a]">
                  <div className="font-display font-black text-lg sm:text-xl text-[#1fbfa4]">&lt;800ms</div>
                  <div className="font-mono text-[10px] text-[#544b3f] font-bold uppercase">Streaming TTFT</div>
                </div>
                <div className="bg-white border-2 border-[#241f1a] rounded-lg p-2.5 text-center shadow-[2px_2px_0_#241f1a]">
                  <div className="font-display font-black text-lg sm:text-xl text-[#241f1a]">5,000+</div>
                  <div className="font-mono text-[10px] text-[#544b3f] font-bold uppercase">Vectors Indexed</div>
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="pt-2 flex flex-wrap gap-1.5 font-mono text-[11px] font-bold text-[#241f1a]">
                <span className="px-2 py-0.5 rounded bg-white border border-[#241f1a]">PYTHON</span>
                <span className="px-2 py-0.5 rounded bg-white border border-[#241f1a]">GEMINI 2.5 FLASH</span>
                <span className="px-2 py-0.5 rounded bg-white border border-[#241f1a]">QDRANT HNSW</span>
                <span className="px-2 py-0.5 rounded bg-white border border-[#241f1a]">BAAI CROSS-ENCODER</span>
                <span className="px-2 py-0.5 rounded bg-white border border-[#241f1a]">STREAMLIT CLOUD</span>
              </div>
            </div>

            <div className="pt-6 border-t border-[#241f1a]/20 mt-6 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <a
                  href="https://video-sage-ai.streamlit.app"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-paper btn-ink text-sm py-2 px-5 font-bold shadow-[3px_3px_0_#241f1a]"
                >
                  Launch Live App ↗
                </a>
                <a
                  href="https://github.com/Sachin-dev001/video-sage-ai"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-mono font-bold text-[#241f1a] underline hover:text-[#3a7bff]"
                >
                  GitHub Code
                </a>
              </div>
              <span className="font-mono text-xs text-[#544b3f]">Streamlit Cloud Live</span>
            </div>
          </article>

        </div>

      </div>
    </section>
  );
}
