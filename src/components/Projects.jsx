import React, { useState } from 'react';
import { Bot, Video, ShieldCheck, ExternalLink, Activity, ArrowRight, CheckCircle2, Cpu, Terminal, GitBranch, Layers, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects() {
  const [activeTab, setActiveTab] = useState({
    autoapply: 'architecture',
    videosage: 'architecture',
    aufoundation: 'evals',
  });

  const toggleTab = (project, tab) => {
    setActiveTab((prev) => ({ ...prev, [project]: tab }));
  };

  return (
    <section id="projects" className="py-20 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-2">
              <Layers className="w-4 h-4" />
              <span>PRODUCTION SYSTEMS & CASE STUDIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured AI Engineering Work
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md">
            Production-grade autonomous agents, high-precision retrieval architectures, and automated evaluation frameworks built with real-world constraints.
          </p>
        </div>

        <div className="space-y-12">
          {/* Project 1: AutoApply Agent */}
          <div className="rounded-2xl bg-gradient-to-b from-[#111420] to-[#0c0d14] border border-white/10 overflow-hidden shadow-2xl transition hover:border-cyan-500/30">
            {/* Header Bar */}
            <div className="p-6 sm:p-8 border-b border-white/[0.06] flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    AUTONOMOUS MULTI-AGENT
                  </span>
                  <span className="text-xs text-slate-500">&bull;</span>
                  <span className="text-xs font-mono text-slate-400">Playwright Stealth &bull; Gemini Flash &bull; Supabase RLS</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  AutoApply: Autonomous AI Job Application Agent
                </h3>
              </div>

              {/* Action Buttons & Tabs */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <div className="flex rounded-lg bg-slate-900/90 border border-slate-800 p-1 text-xs">
                  <button
                    onClick={() => toggleTab('autoapply', 'architecture')}
                    className={`px-3 py-1.5 rounded font-medium transition ${
                      activeTab.autoapply === 'architecture'
                        ? 'bg-cyan-500 text-white shadow'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    System Architecture
                  </button>
                  <button
                    onClick={() => toggleTab('autoapply', 'metrics')}
                    className={`px-3 py-1.5 rounded font-medium transition ${
                      activeTab.autoapply === 'metrics'
                        ? 'bg-cyan-500 text-white shadow'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Key Metrics & Highlights
                  </button>
                </div>

                <a
                  href="https://github.com/Sachin-dev001/ai-job-agent"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs font-medium hover:border-cyan-400 transition"
                >
                  <GithubIcon className="w-4 h-4 text-slate-400" />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-6 sm:p-8">
              {activeTab.autoapply === 'architecture' ? (
                <div>
                  <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <GitBranch className="w-4 h-4" />
                    Autonomous Execution & HITL Pipeline Flow
                  </h4>

                  {/* Interactive Flow Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80">
                      <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                        <span>STAGE 01</span>
                        <span className="text-cyan-400">Context</span>
                      </div>
                      <div className="font-semibold text-white text-sm mb-1">Resume Parsing & Tailoring</div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Google Gemini Flash extracts structured attributes from PDF/DOCX and generates role-specific custom pitches in real-time.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80">
                      <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                        <span>STAGE 02</span>
                        <span className="text-emerald-400">Execution</span>
                      </div>
                      <div className="font-semibold text-white text-sm mb-1">Stealth Human Emulation</div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Playwright Stealth navigates Wellfound and Naukri with randomized human typing cadence, mouse curve jitter, and browser fingerprint masking.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80">
                      <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                        <span>STAGE 03</span>
                        <span className="text-purple-400">Intelligence</span>
                      </div>
                      <div className="font-semibold text-white text-sm mb-1">Recruiter Memory Vault</div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Vectorized persistent memory bank matches employer screening questions against historical user answers to autofill tricky forms.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80">
                      <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                        <span>STAGE 04</span>
                        <span className="text-amber-400">HITL Gateway</span>
                      </div>
                      <div className="font-semibold text-white text-sm mb-1">Telegram Bot Fallback</div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Any ambiguous prompt or captcha sends an instant Telegram alert with inline action buttons for human sign-off before submission.
                      </p>
                    </div>
                  </div>

                  {/* Architecture Badges & Tech Stack */}
                  <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800/60">
                    <span className="text-xs text-slate-500 font-mono">Infrastructure:</span>
                    {['Python', 'Playwright Stealth', 'Google Gemini Flash', 'Supabase Auth & RLS', 'PostgreSQL', 'Docker', 'Telegram Bot API'].map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded bg-slate-900 text-slate-300 border border-slate-800 text-xs font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-slate-950/80 border border-emerald-500/20">
                      <div className="text-3xl font-extrabold text-emerald-400 font-mono">85%</div>
                      <div className="text-xs font-semibold text-white mt-1">Application Time Reduction</div>
                      <p className="text-xs text-slate-400 mt-1">From manual 8-minute forms down to under 70 seconds per application.</p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950/80 border border-cyan-500/20">
                      <div className="text-3xl font-extrabold text-cyan-400 font-mono">50+ / day</div>
                      <div className="text-xs font-semibold text-white mt-1">Daily Automated Submissions</div>
                      <p className="text-xs text-slate-400 mt-1">Zero bot detection flags or account bans across Wellfound & Naukri portals.</p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950/80 border border-purple-500/20">
                      <div className="text-3xl font-extrabold text-purple-400 font-mono">100+</div>
                      <div className="text-xs font-semibold text-white mt-1">Concurrent Sessions</div>
                      <p className="text-xs text-slate-400 mt-1">Multi-tenant isolation guaranteed via Supabase Row-Level Security (RLS).</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-2">
                    <div className="font-semibold text-white text-sm">Key Engineering Challenge Solved:</div>
                    <p className="leading-relaxed">
                      Modern hiring portals utilize aggressive client-side bot detection (mouse velocity heuristics, CDP attribute inspection, typing timing analysis). Standard selenium/playwright instances get flagged instantly. By implementing native human keystroke cadence jitter (Gaussian distribution delays), randomized bezier curve cursor trajectories, and a Human-In-The-Loop (HITL) Telegram fallback, the agent achieves a 100% submission success rate.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Project 2: VideoSage AI */}
          <div className="rounded-2xl bg-gradient-to-b from-[#111420] to-[#0c0d14] border border-white/10 overflow-hidden shadow-2xl transition hover:border-cyan-500/30">
            {/* Header Bar */}
            <div className="p-6 sm:p-8 border-b border-white/[0.06] flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    PRODUCTION RAG & REAL-TIME STREAMING
                  </span>
                  <span className="text-xs text-slate-500">&bull;</span>
                  <span className="text-xs font-mono text-slate-400">Qdrant Vector DB &bull; BAAI Cross-Encoder &bull; Gemini 2.5 Flash</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  VideoSage AI: Timestamp-Aware Conversational Video RAG
                </h3>
              </div>

              {/* Action Buttons & Tabs */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <div className="flex rounded-lg bg-slate-900/90 border border-slate-800 p-1 text-xs">
                  <button
                    onClick={() => toggleTab('videosage', 'architecture')}
                    className={`px-3 py-1.5 rounded font-medium transition ${
                      activeTab.videosage === 'architecture'
                        ? 'bg-cyan-500 text-white shadow'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    System Architecture
                  </button>
                  <button
                    onClick={() => toggleTab('videosage', 'metrics')}
                    className={`px-3 py-1.5 rounded font-medium transition ${
                      activeTab.videosage === 'metrics'
                        ? 'bg-cyan-500 text-white shadow'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Key Metrics & Highlights
                  </button>
                </div>

                <a
                  href="https://video-sage-ai.streamlit.app"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-cyan-500 text-white text-xs font-semibold hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/20"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live App</span>
                </a>

                <a
                  href="https://github.com/Sachin-dev001/video-sage-ai"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs font-medium hover:border-cyan-400 transition"
                >
                  <GithubIcon className="w-4 h-4 text-slate-400" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-6 sm:p-8">
              {activeTab.videosage === 'architecture' ? (
                <div>
                  <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <GitBranch className="w-4 h-4" />
                    High-Precision Video Transcript RAG Flow
                  </h4>

                  {/* Interactive Flow Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80">
                      <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                        <span>STAGE 01</span>
                        <span className="text-cyan-400">Ingestion</span>
                      </div>
                      <div className="font-semibold text-white text-sm mb-1">Timestamp Chunking</div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Parses multi-hour YouTube transcripts into semantic windows preserving start/end millisecond offsets for precise video seeking.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80">
                      <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                        <span>STAGE 02</span>
                        <span className="text-blue-400">Dense Index</span>
                      </div>
                      <div className="font-semibold text-white text-sm mb-1">Qdrant Vector Storage</div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Indexes 5,000+ vector chunks with HNSW indexing, querying candidate passages via cosine similarity in sub-15ms.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80">
                      <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                        <span>STAGE 03</span>
                        <span className="text-purple-400">Reranking</span>
                      </div>
                      <div className="font-semibold text-white text-sm mb-1">BAAI Cross-Encoder</div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Re-scores top-20 retrieved candidates against the raw user query, elevating retrieval precision by +28% and eliminating irrelevant segments.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80">
                      <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                        <span>STAGE 04</span>
                        <span className="text-amber-400">Serving</span>
                      </div>
                      <div className="font-semibold text-white text-sm mb-1">Gemini 2.5 Flash Async</div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Asynchronous token streaming delivers instant response with clickable timestamp citations jumping directly to the source video chapter.
                      </p>
                    </div>
                  </div>

                  {/* Architecture Badges & Tech Stack */}
                  <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800/60">
                    <span className="text-xs text-slate-500 font-mono">Infrastructure:</span>
                    {['Python', 'Gemini 2.5 Flash', 'LangChain', 'Qdrant Vector DB', 'BAAI/bge-reranker', 'Streamlit Cloud', 'AsyncIO'].map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded bg-slate-900 text-slate-300 border border-slate-800 text-xs font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-slate-950/80 border border-cyan-500/20">
                      <div className="text-3xl font-extrabold text-cyan-400 font-mono">+28%</div>
                      <div className="text-xs font-semibold text-white mt-1">Retrieval Context Precision</div>
                      <p className="text-xs text-slate-400 mt-1">Cross-encoder reranking eliminates noisy distractor transcript chunks.</p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950/80 border border-emerald-500/20">
                      <div className="text-3xl font-extrabold text-emerald-400 font-mono">&lt;800ms</div>
                      <div className="text-xs font-semibold text-white mt-1">Time-To-First-Token (TTFT)</div>
                      <p className="text-xs text-slate-400 mt-1">Achieved across 1,000+ benchmark trials via asynchronous streaming.</p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950/80 border border-purple-500/20">
                      <div className="text-3xl font-extrabold text-purple-400 font-mono">5,000+</div>
                      <div className="text-xs font-semibold text-white mt-1">Indexed Vector Chunks</div>
                      <p className="text-xs text-slate-400 mt-1">Handling multi-hour technical lectures and conference keynotes.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-2">
                    <div className="font-semibold text-white text-sm">Why Cross-Encoder Reranking Matters in RAG:</div>
                    <p className="leading-relaxed">
                      Bi-encoders (standard vector embeddings) map query and document into separate vectors independently. While fast for top-k ANN search, they miss complex semantic nuances. By pairing Qdrant’s high-speed HNSW dense search with a secondary BAAI cross-encoder reranker on the top-20 candidates, VideoSage achieves both sub-second query latency and near-perfect citation relevance.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Project 3: Enterprise RAG & Evals (AU Foundation) */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#111420] to-[#0c0d14] border border-white/10 shadow-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  ENTERPRISE LLMOPS & EVALS
                </span>
                <span className="text-xs text-slate-500 font-mono">AU Foundation &bull; 2025–2026</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Automated LLM Evaluation Pipelines & Safety Guardrails
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Constructed automated evaluation suites using <span className="text-cyan-300 font-mono">Ragas</span> and <span className="text-purple-300 font-mono">DeepEval</span> benchmarking Context Recall, Faithfulness, and Answer Relevance over 200+ test scenarios. Deployed input/output validation guardrails reducing hallucinations by 25% and defending against adversarial prompt injections.
              </p>
            </div>

            <div className="flex flex-wrap lg:flex-nowrap items-center gap-3 shrink-0">
              <div className="px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
                <div className="text-xl font-bold font-mono text-cyan-400">+24%</div>
                <div className="text-[11px] text-slate-400">Context Precision</div>
              </div>
              <div className="px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
                <div className="text-xl font-bold font-mono text-purple-400">-25%</div>
                <div className="text-[11px] text-slate-400">Hallucinations</div>
              </div>
              <div className="px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
                <div className="text-xl font-bold font-mono text-emerald-400">200+</div>
                <div className="text-[11px] text-slate-400">Eval Scenarios</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
