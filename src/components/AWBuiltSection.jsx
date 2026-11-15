import React, { useState } from 'react';
import { Play, Terminal, Database, Bot, Layers, ArrowUpRight } from 'lucide-react';

export default function AWBuiltSection() {
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
        '[02.10s] Timestamp citation verified: [14:22] bound to YouTube player offset.',
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
    <section className="built" id="built" style={{ padding: '100px 0 60px' }}>
      <div className="built-head text-center px-4" style={{ maxWidth: '960px', margin: '0 auto' }}>
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
          Flagship Architecture Console
        </span>

        <h2 className="display reveal-lines" style={{ marginTop: '20px' }}>
          <span className="line">
            <span className="line-in">
              Built <span className="chrome">like this.</span>
            </span>
          </span>
        </h2>

        <p className="lede" style={{ marginTop: '16px', maxWidth: '640px', marginInline: 'auto' }}>
          Interactive system console. Toggle between production architectures and test real-time telemetry streaming.
        </p>
      </div>

      {/* 3D Perspective Device Mockup */}
      <div className="built-stage" data-built-stage="" style={{ marginTop: '40px' }}>
        <div className="device glass built-device" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Top Device Bar with macOS lights and URL bar */}
          <div className="device-bar flex items-center justify-between">
            <span className="lights flex items-center gap-1.5">
              <i style={{ backgroundColor: '#ff5f56' }} />
              <i style={{ backgroundColor: '#ffbd2e' }} />
              <i style={{ backgroundColor: '#27c93f' }} />
            </span>
            <span className="url glass truncate max-w-[200px] sm:max-w-none text-xs">
              <em>https://</em>
              {activeTab === 'videosage' ? 'videosage.ai/rag-pipeline' : 'autoapply.agent/stealth'}
            </span>
            <span className="bar-end font-mono text-[11px] text-zinc-500 hidden sm:block">
              60 FPS SSE Stream
            </span>
          </div>

          {/* Device Inner Content */}
          <div className="built-screen" style={{ background: '#07080b', borderRadius: '0 0 24px 24px' }}>
            {/* Pipeline Tabs */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-white/[0.08]">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={() => {
                    setActiveTab('videosage');
                    setLogs(['Switched to VideoSage AI. Click "Run Live Simulation" to test.']);
                  }}
                  className={`btn ${activeTab === 'videosage' ? 'btn-solid' : 'btn-glass glass'} justify-center`}
                  style={{ padding: '9px 18px', fontSize: '12.5px' }}
                >
                  <Database className="w-3.5 h-3.5 mr-2" />
                  <span>VideoSage AI (Video RAG)</span>
                </button>

                <button
                  onClick={() => {
                    setActiveTab('autoapply');
                    setLogs(['Switched to AutoApply Agent. Click "Run Live Simulation" to test.']);
                  }}
                  className={`btn ${activeTab === 'autoapply' ? 'btn-solid' : 'btn-glass glass'} justify-center`}
                  style={{ padding: '9px 18px', fontSize: '12.5px' }}
                >
                  <Bot className="w-3.5 h-3.5 mr-2" />
                  <span>AutoApply (Stealth Agent)</span>
                </button>
              </div>

              <button
                onClick={simulatePipeline}
                disabled={isSimulating}
                className="btn btn-solid w-full sm:w-auto justify-center"
                style={{
                  padding: '9px 22px',
                  fontSize: '12.5px',
                  background: 'linear-gradient(180deg, #2bd67b 0%, #1ea85d 100%)',
                  color: '#000',
                  boxShadow: '0 0 25px rgba(43,214,123,0.4)',
                }}
              >
                <Play className="w-3.5 h-3.5 mr-2 fill-current" />
                <span>{isSimulating ? 'Processing...' : 'Run Live Simulation'}</span>
              </button>
            </div>

            {/* Topology & Telemetry Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-5">
              {/* Architecture Blueprint (7 cols) */}
              <div className="lg:col-span-7 p-5 sm:p-6 rounded-2xl glass flex flex-col justify-between space-y-4">
                <div>
                  <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-zinc-300" />
                    <span>System Architecture Blueprint</span>
                  </div>

                  {activeTab === 'videosage' ? (
                    <div className="space-y-2 pt-1">
                      <div className="text-lg sm:text-xl font-bold text-white">Timestamp-Aware Semantic Vector Search</div>
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                        Multi-hour video transcripts are segmented by speaker pauses into semantic windows. Qdrant HNSW vector index yields top-20 nearest chunks, which are then passed through a BAAI cross-encoder to elevate retrieval precision by <span className="text-white font-semibold">+28%</span> before Gemini 2.5 Flash streaming.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-2 pt-1">
                      <div className="text-lg sm:text-xl font-bold text-white">Autonomous Multi-Platform Web Agent</div>
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                        Employs Playwright stealth with human-emulated typing jitter (Gaussian latency distribution) and CDP attribute masking. An intelligent Recruiter Q&A Memory Vault answers screening questions, backed by Telegram Human-In-The-Loop fallback for 100% accuracy.
                      </p>
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-white/[0.08] flex flex-wrap gap-1.5 text-[11px] font-mono">
                  {activeTab === 'videosage' && ['Python 3.11', 'Qdrant HNSW', 'BAAI Reranker', 'Gemini 2.5 Flash', 'Streamlit Cloud'].map(b => (
                    <span key={b} className="chip glass" style={{ padding: '5px 12px', fontSize: '10.5px' }}>{b}</span>
                  ))}
                  {activeTab === 'autoapply' && ['Python', 'Playwright Stealth', 'Gemini Flash', 'Supabase RLS', 'Telegram HITL'].map(b => (
                    <span key={b} className="chip glass" style={{ padding: '5px 12px', fontSize: '10.5px' }}>{b}</span>
                  ))}
                </div>
              </div>

              {/* Console Output (5 cols) */}
              <div className="lg:col-span-5 p-4 sm:p-5 rounded-2xl glass flex flex-col justify-between" style={{ background: '#040507' }}>
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] text-xs font-mono text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                    <span>live_telemetry.log</span>
                  </span>
                  <span className="text-[10px] text-zinc-500">Live Stream</span>
                </div>

                <div className="py-3 space-y-2 font-mono text-[11px] sm:text-[11.5px] text-zinc-300 h-48 sm:h-56 overflow-y-auto leading-relaxed">
                  {logs.map((log, idx) => (
                    <div key={idx} className="flex items-start gap-1.5">
                      <span className="text-zinc-600 select-none">&gt;</span>
                      <span className={log.includes('Lift') || log.includes('APPROVED') || log.includes('verified') ? 'text-emerald-400 font-bold' : 'text-zinc-300'}>
                        {log}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-zinc-500">
                  <span>ENGINE: ACTIVE</span>
                  <span className="text-emerald-400">&bull; 60 FPS LOGS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
