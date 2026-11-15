import React, { useState } from 'react';
import { Play, Terminal, ArrowUpRight, Cpu, Database, Bot, Shield, CheckCircle2, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function AWDeviceShowcase() {
  const [activeTab, setActiveTab] = useState('videosage');
  const [isSimulating, setIsSimulating] = useState(false);
  const [logs, setLogs] = useState([
    '[INIT] System ready. Select a pipeline and run live simulation.',
  ]);

  const simulatePipeline = () => {
    if (isSimulating) return;
    setIsSimulating(true);

    if (activeTab === 'videosage') {
      setLogs(['[00.05s] Parsing multi-hour video transcript stream...']);
      const steps = [
        '[00.22s] Timestamp chunking: boundaries pinned at 15-second speaker intervals.',
        '[00.48s] Qdrant HNSW vector search: querying 5,000+ vectors in 12.4ms.',
        '[00.82s] BAAI Cross-Encoder evaluating top-20 candidate segments...',
        '[01.15s] Precision Lift: Distractor chunk (score: 0.38) demoted. Context Precision: 92%.',
        '[01.55s] Gemini 2.5 Flash streaming response initiated. TTFT: 680ms.',
        '[02.10s] Timestamp citation verified: [14:22] bound to YouTube offset.',
      ];
      steps.forEach((step, i) => {
        setTimeout(() => {
          setLogs((prev) => [...prev, step]);
          if (i === steps.length - 1) setIsSimulating(false);
        }, (i + 1) * 450);
      });
    } else {
      setLogs(['[00.08s] Launching Playwright Stealth Chromium context...']);
      const steps = [
        '[00.35s] Browser fingerprint masked: CDP flags stripped, user-agent normalized.',
        '[00.75s] Gemini Flash parsing candidate resume (PDF)... 18 skills matched.',
        '[01.30s] Wellfound portal navigation with Gaussian keystroke latency jitter.',
        '[01.90s] Recruiter Memory Vault: screening question matched (confidence: 0.94).',
        '[02.60s] Form filled. Telegram HITL webhook dispatched to operator.',
        '[03.30s] Operator callback: APPROVED. Application submitted with 0 bot flags.',
      ];
      steps.forEach((step, i) => {
        setTimeout(() => {
          setLogs((prev) => [...prev, step]);
          if (i === steps.length - 1) setIsSimulating(false);
        }, (i + 1) * 450);
      });
    }
  };

  return (
    <section id="built-like-this" className="py-28 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.12] bg-zinc-900/60 backdrop-blur-md text-[11px] font-mono tracking-widest text-zinc-400 uppercase mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-live-dot" />
          <span>PRODUCTION ARCHITECTURE &bull; SACHIN SHARMA</span>
        </div>

        {/* Title */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
          Built like this.
        </h2>

        <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto mb-14 font-normal">
          Interactive 3D system console. Toggle through real engineering pipelines and test real-time telemetry streaming.
        </p>

        {/* 3D Perspective Device Showcase */}
        <div className="perspective-stage w-full max-w-5xl mx-auto">
          <div className="device-3d-tilt rounded-3xl bg-[#0e0f14]/90 border border-white/[0.12] overflow-hidden text-left shadow-2xl">
            {/* macOS Window Chrome Top Bar */}
            <div className="px-5 py-3.5 bg-[#14151c]/90 border-b border-white/[0.08] flex items-center justify-between">
              {/* Traffic Lights */}
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>

              {/* URL Address Bar */}
              <div className="hidden sm:flex items-center gap-2 px-4 py-1 rounded-full bg-[#0a0a0e] border border-white/[0.08] text-xs font-mono text-zinc-400 w-80 justify-center">
                <span className="text-zinc-600">https://</span>
                <span className="text-zinc-200">
                  {activeTab === 'videosage' ? 'videosage.ai/rag-pipeline' : 'autoapply.agent/stealth'}
                </span>
              </div>

              {/* System Badge */}
              <div className="text-[11px] font-mono text-zinc-400">
                AI System Engine v2.6
              </div>
            </div>

            {/* Inner App Interface */}
            <div className="p-6 sm:p-8 bg-[#0a0b0f]/80 space-y-6">
              {/* Tabs Switcher */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-5">
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => {
                      setActiveTab('videosage');
                      setLogs(['Switched to VideoSage AI. Click "Run Live Simulation" to test.']);
                    }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                      activeTab === 'videosage'
                        ? 'bg-white text-black font-bold shadow-lg'
                        : 'bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800'
                    }`}
                  >
                    <Database className="w-3.5 h-3.5" />
                    <span>VideoSage AI (Video RAG)</span>
                  </button>

                  <button
                    onClick={() => {
                      setActiveTab('autoapply');
                      setLogs(['Switched to AutoApply Agent. Click "Run Live Simulation" to test.']);
                    }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                      activeTab === 'autoapply'
                        ? 'bg-white text-black font-bold shadow-lg'
                        : 'bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800'
                    }`}
                  >
                    <Bot className="w-3.5 h-3.5" />
                    <span>AutoApply (Stealth Agent)</span>
                  </button>
                </div>

                <button
                  onClick={simulatePipeline}
                  disabled={isSimulating}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-bold font-mono transition-all shadow-[0_0_20px_rgba(43,214,123,0.3)] active:scale-95 disabled:opacity-50"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{isSimulating ? 'Processing...' : 'Run Live Simulation'}</span>
                </button>
              </div>

              {/* Two-Column Telemetry & Architecture Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                {/* Visual Blueprint (7 cols) */}
                <div className="lg:col-span-7 p-6 rounded-2xl bg-[#111218]/90 border border-white/[0.08] flex flex-col justify-between space-y-6">
                  <div>
                    <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                      <Layers className="w-4 h-4 text-zinc-300" />
                      <span>Data Ingestion & Synthesis Topology</span>
                    </div>

                    {activeTab === 'videosage' ? (
                      <div className="space-y-3 pt-2">
                        <div className="text-lg font-bold text-white">Timestamp-Aware Semantic Vector Search</div>
                        <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                          Multi-hour video transcripts are segmented by speaker pauses into semantic windows. Qdrant HNSW vector index yields top-20 nearest chunks, which are then passed through a BAAI cross-encoder to elevate retrieval precision by <span className="text-white font-semibold">+28%</span> before Gemini 2.5 Flash streaming.
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-3 pt-2">
                        <div className="text-lg font-bold text-white">Autonomous Multi-Platform Web Agent</div>
                        <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                          Employs Playwright stealth with human-emulated typing jitter (Gaussian latency distribution) and CDP attribute masking. An intelligent Recruiter Q&A Memory Vault answers screening questions, backed by Telegram Human-In-The-Loop fallback for 100% accuracy.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Architecture Badges */}
                  <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-2 text-[11px] font-mono">
                    {activeTab === 'videosage' && ['Python 3.11', 'Qdrant HNSW', 'BAAI Reranker', 'Gemini 2.5 Flash', 'Streamlit Cloud'].map(b => (
                      <span key={b} className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-white/[0.08] text-zinc-300">{b}</span>
                    ))}
                    {activeTab === 'autoapply' && ['Python', 'Playwright Stealth', 'Gemini Flash', 'Supabase RLS', 'Telegram HITL'].map(b => (
                      <span key={b} className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-white/[0.08] text-zinc-300">{b}</span>
                    ))}
                  </div>
                </div>

                {/* Live Console Output (5 cols) */}
                <div className="lg:col-span-5 p-5 rounded-2xl bg-[#06070a] border border-white/[0.08] flex flex-col justify-between">
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] text-xs font-mono text-zinc-400">
                    <span className="flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                      <span>live_telemetry.log</span>
                    </span>
                    <span className="text-[10px] text-zinc-500">Live SSE Pipe</span>
                  </div>

                  <div className="py-4 space-y-2 font-mono text-[11px] text-zinc-300 h-52 overflow-y-auto leading-relaxed">
                    {logs.map((log, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-zinc-600 select-none">&gt;</span>
                        <span className={log.includes('Lift') || log.includes('APPROVED') || log.includes('verified') ? 'text-emerald-400 font-bold' : 'text-zinc-300'}>
                          {log}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-zinc-500">
                    <span>STATUS: ACTIVE ENGINE</span>
                    <span className="text-emerald-400">● 60 FPS STREAM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
