import React from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function AWWorkSection() {
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
      bgImg: '/renewafuel.jpg',
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
      bgImg: '/matcha.jpg',
    },
  ];

  return (
    <section id="work" style={{ padding: '120px 0 80px' }}>
      <div className="wrap">
        {/* Section Header (Exact AW Media structure) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="chip glass" data-liquid="chip">
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
              Recent Work
            </span>

            <h2 className="display" style={{ marginTop: '24px' }}>
              <span className="line">
                <span className="line-in">From concept to live.</span>
              </span>
              <span className="line">
                <span className="line-in chrome">Systems that ship.</span>
              </span>
            </h2>
          </div>

          <div className="font-mono text-xs text-zinc-400">
            SHOWING 2 FLAGSHIP AI SYSTEMS
          </div>
        </div>

        {/* Work Cards (Exact AW Media glass card style) */}
        <div className="space-y-12">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="glass"
              style={{
                borderRadius: '32px',
                padding: 'clamp(32px, 5vw, 56px)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Background ambient lighting */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `url(${proj.bgImg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: 0.12,
                  filter: 'grayscale(1) contrast(1.2)',
                  pointerEvents: 'none',
                }}
              />

              <div style={{ position: 'relative', zIndex: 4 }}>
                {/* Header Row */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="chip glass" style={{ fontSize: '11px', letterSpacing: '0.15em' }}>
                      {proj.badge}
                    </span>
                    <span className="text-emerald-400 text-xs font-mono flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      {proj.status}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    {proj.live && (
                      <a
                        href={proj.live}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-solid"
                        style={{ padding: '8px 20px', fontSize: '12px' }}
                      >
                        <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                        <span>Launch App</span>
                      </a>
                    )}
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-glass glass"
                      style={{ padding: '10px' }}
                      title="GitHub"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                  {proj.title}
                </h3>
                <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed max-w-3xl mb-8">
                  {proj.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 pt-6 border-t border-white/[0.08]">
                  {proj.metrics.map((m, idx) => (
                    <div key={idx} className="glass p-4 rounded-2xl" style={{ background: 'rgba(0,0,0,0.5)' }}>
                      <div className="text-2xl sm:text-3xl font-mono font-bold text-white mb-1">{m.value}</div>
                      <div className="text-xs text-zinc-400 font-sans">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-zinc-500 mr-2">Core Tech:</span>
                  {proj.tech.map((t) => (
                    <span key={t} className="chip glass" style={{ fontSize: '11px' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
