import React, { useState } from 'react';
import { Terminal, Play, RotateCcw, ExternalLink, ArrowUpRight, GitBranch, Cpu, CheckCircle2, Shield, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectsLuxury() {
  // Terminal state for AutoApply simulation
  const [autoApplyRunning, setAutoApplyRunning] = useState(false);
  const [autoApplyLogs, setAutoApplyLogs] = useState([
    'System standby. Click "Simulate Agent Execution" to run pipeline.',
  ]);

  // Terminal state for VideoSage simulation
  const [videoSageRunning, setVideoSageRunning] = useState(false);
  const [videoSageLogs, setVideoSageLogs] = useState([
    'Qdrant index ready: 5,240 vector chunks indexed with HNSW.',
  ]);

  const runAutoApplySim = () => {
    if (autoApplyRunning) return;
    setAutoApplyRunning(true);
    setAutoApplyLogs(['[00.12s] Initializing Playwright stealth browser profile...']);

    const steps = [
      '[00.35s] Fingerprint masked: CDP attributes neutralized, WebGL vendor normalized.',
      '[00.82s] Google Gemini Flash parsing candidate resume (PDF)... 18 skills extracted.',
      '[01.40s] Navigating to Wellfound portal... Injecting Gaussian keystroke typing jitter.',
      '[02.10s] Screening Question: "Experience with LangGraph multi-agent architectures?"',
      '[02.65s] Memory Vault vector search match: "1.5+ years production RAG/agents" (score: 0.94).',
      '[03.20s] Form filled. Telegram HITL webhook dispatched for operator approval.',
      '[04.05s] Telegram callback: APPROVED by human operator.',
      '[04.80s] Submission complete. Portal status: 200 OK. Zero bot detection flags.',
    ];

    steps.forEach((step, idx) => {
      setTimeout(() => {
        setAutoApplyLogs((prev) => [...prev, step]);
        if (idx === steps.length - 1) setAutoApplyRunning(false);
      }, (idx + 1) * 550);
    });
  };

  const runVideoSageSim = () => {
    if (videoSageRunning) return;
    setVideoSageRunning(true);
    setVideoSageLogs(['[00.08s] Ingesting query: "How does timestamp chunking maintain context?"']);

    const steps = [
      '[00.22s] Query dense embedding generated (BAAI/bge-large-en).',
      '[00.41s] Qdrant HNSW vector search retrieved top-20 nearest candidate chunks.',
      '[00.75s] BAAI Cross-Encoder reranker evaluating raw query-passage interaction...',
      '[01.10s] Precision lift applied: Distractor chunk (score: 0.42) demoted.',
      '[01.45s] Top match selected: Chapter 4 (14m:22s) with rerank confidence 0.96.',
      '[01.90s] Gemini 2.5 Flash streaming response initiated. First token latency: 680ms.',
      '[02.40s] Clickable video jump offset generated: [14:22] -> YouTube player synced.',
    ];

    steps.forEach((step, idx) => {
      setTimeout(() => {
        setVideoSageLogs((prev) => [...prev, step]);
        if (idx === steps.length - 1) setVideoSageRunning(false);
      }, (idx + 1) * 500);
    });
  };

  return (
    <section id="projects" className="py-24 border-t border-white/[0.07] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
              FLAGSHIP ENGINEERING WORK
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Selected AI Systems
            </h2>
          </div>
          <p className="text-zinc-400 text-sm max-w-md font-sans leading-relaxed">
            Detailed case studies with real architectural pipelines, hard performance metrics, and interactive telemetry consoles.
          </p>
        </div>

        {/* Systems List */}
        <div className="space-y-16">
          {/* Project 1: AutoApply Agent */}
          <div className="rounded-3xl bg-[#0c0d12]/90 border border-white/[0.08] overflow-hidden shadow-2xl">
            {/* Header info */}
            <div className="p-6 sm:p-10 border-b border-white/[0.06] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-400">
                  <span className="px-2.5 py-0.5 rounded-md bg-zinc-800 text-zinc-200 border border-white/10">
                    AUTONOMOUS MULTI-AGENT
                  </span>
                  <span>&bull;</span>
                  <span>Playwright Stealth &bull; Gemini Flash &bull; Supabase RLS</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  AutoApply: Stealth AI Job Application Agent
                </h3>
                <p className="text-sm text-zinc-400 max-w-2xl leading-relaxed">
                  Engineered an autonomous multi-platform application agent for Wellfound and Naukri. Employs Playwright stealth with human-emulated keystroke typing jitter, an intelligent Recruiter Q&A Memory Vault, and Telegram Human-In-The-Loop (HITL) fallback.
                </p>
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-3 shrink-0">
                <a
                  href="https://github.com/Sachin-dev001/ai-job-agent"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-semibold text-xs transition"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View Repository</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Interactive Grid: Architecture + Live Terminal Simulator */}
            <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Architecture Columns (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <h4 className="text-xs font-mono uppercase text-zinc-500 tracking-wider flex items-center gap-2">
                  <GitBranch className="w-4 h-4 text-zinc-400" />
                  System Pipeline & Engineering Specifications
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-2xl bg-zinc-950/70 border border-white/[0.06] space-y-2">
                    <div className="font-mono text-zinc-300 font-semibold flex items-center justify-between">
                      <span>01. RESUME EXTRACTION</span>
                      <span className="text-[10px] text-zinc-500">Gemini Flash</span>
                    </div>
                    <p className="text-zinc-400 leading-relaxed">
                      Converts PDF/DOCX resumes into semantic attributes, generating personalized employer-specific pitches in sub-1.2 seconds.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-zinc-950/70 border border-white/[0.06] space-y-2">
                    <div className="font-mono text-zinc-300 font-semibold flex items-center justify-between">
                      <span>02. STEALTH ENGINE</span>
                      <span className="text-[10px] text-emerald-400">Zero Flags</span>
                    </div>
                    <p className="text-zinc-400 leading-relaxed">
                      Randomized bezier mouse trajectories and Gaussian keystroke latency bypass modern browser bot-detection heuristics completely.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-zinc-950/70 border border-white/[0.06] space-y-2">
                    <div className="font-mono text-zinc-300 font-semibold flex items-center justify-between">
                      <span>03. RECRUITER MEMORY</span>
                      <span className="text-[10px] text-zinc-500">Vector Search</span>
                    </div>
                    <p className="text-zinc-400 leading-relaxed">
                      Persistent question-answer vector store matches tricky portal screening questions against past verified responses.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-zinc-950/70 border border-white/[0.06] space-y-2">
                    <div className="font-mono text-zinc-300 font-semibold flex items-center justify-between">
                      <span>04. TELEGRAM HITL</span>
                      <span className="text-[10px] text-zinc-500">Human Fallback</span>
                    </div>
                    <p className="text-zinc-400 leading-relaxed">
                      Real-time webhook notifications with inline 1-tap approval buttons for ambiguous forms or two-factor authentication gates.
                    </p>
                  </div>
                </div>

                {/* Hard Metrics Row */}
                <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono">
                  <div className="flex items-center gap-2 text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>85% Reduction in Application Overhead</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                    <span>50+ Submissions/day with 0 Bot Bans</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                    <span>Supabase Multi-Tenant RLS</span>
                  </div>
                </div>
              </div>

              {/* Interactive Telemetry Console (5 cols) */}
              <div className="lg:col-span-5 rounded-2xl bg-zinc-950 border border-white/[0.08] overflow-hidden flex flex-col justify-between shadow-xl">
                <div className="p-3 border-b border-white/[0.08] bg-zinc-900/50 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                    <Terminal className="w-3.5 h-3.5 text-zinc-300" />
                    <span>agent_telemetry.log</span>
                  </div>
                  <button
                    onClick={runAutoApplySim}
                    disabled={autoApplyRunning}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 disabled:opacity-50 text-white text-[11px] font-mono transition"
                  >
                    <Play className="w-3 h-3 text-emerald-400" />
                    <span>{autoApplyRunning ? 'Simulating...' : 'Run Simulation'}</span>
                  </button>
                </div>

                <div className="p-4 font-mono text-[11px] text-zinc-300 space-y-1.5 h-64 overflow-y-auto leading-relaxed bg-[#08080a]">
                  {autoApplyLogs.map((log, i) => (
                    <div key={i} className="text-zinc-400">
                      <span className="text-zinc-600 select-none mr-2">&gt;</span>
                      <span className={log.includes('APPROVED') || log.includes('complete') ? 'text-emerald-400 font-semibold' : ''}>
                        {log}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="p-2.5 border-t border-white/[0.06] bg-zinc-900/40 text-[10px] font-mono text-zinc-500 flex items-center justify-between">
                  <span>Engine: Playwright Python</span>
                  <span>State: Active Agent</span>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2: VideoSage AI */}
          <div className="rounded-3xl bg-[#0c0d12]/90 border border-white/[0.08] overflow-hidden shadow-2xl">
            {/* Header info */}
            <div className="p-6 sm:p-10 border-b border-white/[0.06] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-400">
                  <span className="px-2.5 py-0.5 rounded-md bg-zinc-800 text-zinc-200 border border-white/10">
                    PRODUCTION RAG & REAL-TIME STREAMING
                  </span>
                  <span>&bull;</span>
                  <span>Qdrant HNSW &bull; BAAI Cross-Encoder &bull; Gemini 2.5 Flash</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  VideoSage AI: Timestamp-Aware Conversational Video RAG
                </h3>
                <p className="text-sm text-zinc-400 max-w-2xl leading-relaxed">
                  End-to-end RAG system indexing multi-hour YouTube video transcripts using timestamp-aware chunking and semantic vector search in Qdrant across 5,000+ vector chunks. Elevates context precision by +28% with BAAI cross-encoders.
                </p>
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-3 shrink-0">
                <a
                  href="https://video-sage-ai.streamlit.app"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-semibold text-xs transition"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Launch Live App</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://github.com/Sachin-dev001/video-sage-ai"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-white/10 transition"
                  title="GitHub Repository"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Interactive Grid: Architecture + Live Terminal Simulator */}
            <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Architecture Columns (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <h4 className="text-xs font-mono uppercase text-zinc-500 tracking-wider flex items-center gap-2">
                  <GitBranch className="w-4 h-4 text-zinc-400" />
                  RAG Retrieval Pipeline Specifications
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-2xl bg-zinc-950/70 border border-white/[0.06] space-y-2">
                    <div className="font-mono text-zinc-300 font-semibold flex items-center justify-between">
                      <span>01. TIMESTAMP CHUNKING</span>
                      <span className="text-[10px] text-zinc-500">Temporal Sync</span>
                    </div>
                    <p className="text-zinc-400 leading-relaxed">
                      Splits lecture transcripts along semantic speaker pauses, binding millisecond timestamps to every vector for exact 1-click video jumps.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-zinc-950/70 border border-white/[0.06] space-y-2">
                    <div className="font-mono text-zinc-300 font-semibold flex items-center justify-between">
                      <span>02. QDRANT VECTOR DB</span>
                      <span className="text-[10px] text-zinc-500">5,000+ Vectors</span>
                    </div>
                    <p className="text-zinc-400 leading-relaxed">
                      Indexes high-dimensional embeddings via HNSW graphs, querying nearest neighbor candidates in sub-15ms.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-zinc-950/70 border border-white/[0.06] space-y-2">
                    <div className="font-mono text-zinc-300 font-semibold flex items-center justify-between">
                      <span>03. BAAI CROSS-ENCODER</span>
                      <span className="text-[10px] text-emerald-400">+28% Precision</span>
                    </div>
                    <p className="text-zinc-400 leading-relaxed">
                      Secondary reranker examines full query-context interaction to prune out irrelevant distractor chunks before synthesis.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-zinc-950/70 border border-white/[0.06] space-y-2">
                    <div className="font-mono text-zinc-300 font-semibold flex items-center justify-between">
                      <span>04. ASYNC STREAMING</span>
                      <span className="text-[10px] text-zinc-500">&lt;800ms TTFT</span>
                    </div>
                    <p className="text-zinc-400 leading-relaxed">
                      Google Gemini 2.5 Flash assembles tokens via asynchronous streaming, ensuring instant response and fluid UI rendering.
                    </p>
                  </div>
                </div>

                {/* Hard Metrics Row */}
                <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono">
                  <div className="flex items-center gap-2 text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>+28% Retrieval Context Precision Lift</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                    <span>Sub-800ms TTFT over 1,000+ trials</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                    <span>Deployed on Streamlit Cloud (500+ sessions)</span>
                  </div>
                </div>
              </div>

              {/* Interactive Telemetry Console (5 cols) */}
              <div className="lg:col-span-5 rounded-2xl bg-zinc-950 border border-white/[0.08] overflow-hidden flex flex-col justify-between shadow-xl">
                <div className="p-3 border-b border-white/[0.08] bg-zinc-900/50 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                    <Terminal className="w-3.5 h-3.5 text-zinc-300" />
                    <span>rag_reranker_trace.log</span>
                  </div>
                  <button
                    onClick={runVideoSageSim}
                    disabled={videoSageRunning}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 disabled:opacity-50 text-white text-[11px] font-mono transition"
                  >
                    <Play className="w-3 h-3 text-emerald-400" />
                    <span>{videoSageRunning ? 'Querying...' : 'Query RAG'}</span>
                  </button>
                </div>

                <div className="p-4 font-mono text-[11px] text-zinc-300 space-y-1.5 h-64 overflow-y-auto leading-relaxed bg-[#08080a]">
                  {videoSageLogs.map((log, i) => (
                    <div key={i} className="text-zinc-400">
                      <span className="text-zinc-600 select-none mr-2">&gt;</span>
                      <span className={log.includes('lift') || log.includes('First token') ? 'text-emerald-400 font-semibold' : ''}>
                        {log}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="p-2.5 border-t border-white/[0.06] bg-zinc-900/40 text-[10px] font-mono text-zinc-500 flex items-center justify-between">
                  <span>Index: Qdrant HNSW</span>
                  <span>Model: Gemini 2.5 Flash</span>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3: AU Foundation Enterprise Evals */}
          <div className="p-6 sm:p-10 rounded-3xl bg-[#0c0d12]/90 border border-white/[0.08] shadow-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <span className="px-2 py-0.5 rounded bg-zinc-800 border border-white/10 text-zinc-300">
                  ENTERPRISE LLMOPS
                </span>
                <span>&bull;</span>
                <span>AU Foundation &bull; 2025–2026</span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Automated LLM Evaluation Suites & Safety Guardrails
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-sans">
                Constructed automated evaluation suites using <span className="text-zinc-200 font-mono">Ragas</span> and <span className="text-zinc-200 font-mono">DeepEval</span> benchmarking Context Recall, Faithfulness, and Answer Relevance over 200+ test scenarios. Deployed input/output validation guardrails reducing hallucinations by 25% and defending against prompt injection vulnerabilities.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 shrink-0 w-full lg:w-auto font-mono">
              <div className="p-4 rounded-2xl bg-zinc-950 border border-white/[0.07] text-center">
                <div className="text-2xl font-bold text-white">+24%</div>
                <div className="text-[10px] text-zinc-500 mt-1">Context Precision</div>
              </div>
              <div className="p-4 rounded-2xl bg-zinc-950 border border-white/[0.07] text-center">
                <div className="text-2xl font-bold text-emerald-400">-25%</div>
                <div className="text-[10px] text-zinc-500 mt-1">Hallucinations</div>
              </div>
              <div className="p-4 rounded-2xl bg-zinc-950 border border-white/[0.07] text-center">
                <div className="text-2xl font-bold text-white">200+</div>
                <div className="text-[10px] text-zinc-500 mt-1">Eval Scenarios</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
