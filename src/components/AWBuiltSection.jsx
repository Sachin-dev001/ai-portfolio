import React, { useState } from 'react';
import MarkerHighlight from './stationery/MarkerHighlight';
import RuledNotebookCard from './stationery/RuledNotebookCard';

export default function AWBuiltSection() {
  const [activeTab, setActiveTab] = useState('videosage');
  const [isSimulating, setIsSimulating] = useState(false);
  const [logs, setLogs] = useState([
    '[INIT] System ready. Select a pipeline and run live simulation.',
    '[STATUS] Vector engine connected. Streamlit / FastAPI SSE standby.',
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
        '[01.15s] Precision Lift: Distractor chunk (score: 0.38) demoted. Context Precision: 92.4%.',
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
    <section id="architecture" className="relative py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="eyebrow-marker text-2xl sm:text-3xl text-[#ff5a5f]">
            flagship architecture console ✎
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#241f1a] tracking-tight">
            Built{' '}
            <MarkerHighlight color="teal">
              like this.
            </MarkerHighlight>
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#544b3f] max-w-xl mx-auto">
            Interactive system console. Toggle between production architectures and test real-time telemetry streaming.
          </p>
        </div>

        {/* Paper-and-Ink Ledger Window (Modeled on Quorvel .dash) */}
        <div className="bg-[#fffaf0] border-[2.5px] border-[#241f1a] rounded-2xl shadow-[8px_8px_0_#241f1a] overflow-hidden max-w-5xl mx-auto">
          
          {/* Top Window Bar */}
          <div className="bg-[#f4e9cf] border-b-2 border-[#241f1a] px-4 py-3 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-[#ff5a5f] border border-[#241f1a]" />
              <span className="w-3.5 h-3.5 rounded-full bg-[#ffc23c] border border-[#241f1a]" />
              <span className="w-3.5 h-3.5 rounded-full bg-[#36c25f] border border-[#241f1a]" />
            </div>

            <div className="bg-[#ffffff] border border-[#241f1a] rounded-md px-3 py-1 font-mono text-xs text-[#544b3f] flex items-center gap-1.5 shadow-inner truncate max-w-xs sm:max-w-md">
              <span className="text-[#3a7bff] font-bold">https://</span>
              <span>{activeTab === 'videosage' ? 'videosage.ai/rag-pipeline' : 'autoapply.agent/stealth-flow'}</span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#1fbfa4] bg-[#eafaf4] px-2.5 py-1 rounded-md border border-[#1fbfa4]/40 hidden sm:flex">
              <span className="w-2 h-2 rounded-full bg-[#36c25f] animate-pulse" />
              60 FPS SSE STREAM
            </div>
          </div>

          {/* Pipeline Toggle Bar */}
          <div className="bg-[#fffdf6] border-b-2 border-[#241f1a] p-3 sm:p-4 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <button
                onClick={() => {
                  setActiveTab('videosage');
                  setLogs(['[SWITCH] Selected VideoSage AI (Video RAG pipeline).']);
                }}
                className={`px-3.5 py-1.5 rounded-lg border-2 font-mono text-xs sm:text-sm font-bold transition-all shadow-[2px_2px_0_#241f1a] ${
                  activeTab === 'videosage'
                    ? 'bg-[#3a7bff] text-white border-[#241f1a]'
                    : 'bg-[#ffffff] text-[#241f1a] border-[#241f1a] hover:bg-[#fbf3e2]'
                }`}
              >
                01 VideoSage AI (Video RAG)
              </button>

              <button
                onClick={() => {
                  setActiveTab('autoapply');
                  setLogs(['[SWITCH] Selected AutoApply (Autonomous Stealth Agent).']);
                }}
                className={`px-3.5 py-1.5 rounded-lg border-2 font-mono text-xs sm:text-sm font-bold transition-all shadow-[2px_2px_0_#241f1a] ${
                  activeTab === 'autoapply'
                    ? 'bg-[#ffc23c] text-[#241f1a] border-[#241f1a]'
                    : 'bg-[#ffffff] text-[#241f1a] border-[#241f1a] hover:bg-[#fbf3e2]'
                }`}
              >
                02 AutoApply (Stealth Agent)
              </button>
            </div>

            <button
              onClick={simulatePipeline}
              disabled={isSimulating}
              className={`btn-paper btn-coral text-xs sm:text-sm py-1.5 px-4 font-bold shadow-[2px_2px_0_#241f1a] ${
                isSimulating ? 'opacity-60 cursor-not-allowed' : ''
              }`}
            >
              {isSimulating ? 'Simulating...' : '▶ Run Live Simulation'}
            </button>
          </div>

          {/* Window Body: 2-Column Blueprint & Monospace Log Feed */}
          <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#fffaf0]">
            
            {/* Left Pane: Architecture Blueprint Sheet */}
            <div className="lg:col-span-6 space-y-4">
              <RuledNotebookCard className="shadow-[4px_4px_0_#241f1a]">
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-[#241f1a]/15 pb-2">
                    <span className="font-mono text-xs font-bold text-[#ff5a5f] uppercase tracking-wider">
                      Blueprint Specification
                    </span>
                    <span className="font-mono text-[11px] text-[#544b3f]">REV 2.6</span>
                  </div>

                  <h3 className="font-display font-bold text-lg sm:text-xl text-[#241f1a]">
                    {activeTab === 'videosage'
                      ? 'Timestamp-Aware Semantic Video RAG'
                      : 'Stealth Browser Automation & HITL Agent'}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-[#544b3f] leading-relaxed">
                    {activeTab === 'videosage'
                      ? 'Multi-hour video transcripts segmented by speaker pauses into semantic windows. Qdrant HNSW vector index yields top-20 chunks, reranked by BAAI cross-encoder to elevate precision by +28.3% before streaming via Gemini 2.5 Flash.'
                      : 'Playwright stealth context with Gaussian typing delay curves and CDP fingerprint spoofing. Features a Human-In-The-Loop Telegram bot webhook and Supabase Recruiter Memory Vault with 0 bot flags.'}
                  </p>

                  <div className="pt-2">
                    <span className="font-mono text-[11px] font-bold text-[#241f1a] block mb-1.5 uppercase">
                      Technology Stack
                    </span>
                    <div className="flex flex-wrap gap-1.5 font-mono text-[11px] font-bold">
                      {activeTab === 'videosage' ? (
                        <>
                          <span className="px-2 py-0.5 rounded bg-[#fbf3e2] border border-[#241f1a]">PYTHON 3.12</span>
                          <span className="px-2 py-0.5 rounded bg-[#fbf3e2] border border-[#241f1a]">QDRANT HNSW</span>
                          <span className="px-2 py-0.5 rounded bg-[#ffc23c]/30 border border-[#241f1a]">BAAI CROSS-ENCODER</span>
                          <span className="px-2 py-0.5 rounded bg-[#eafaf4] text-[#1fbfa4] border border-[#241f1a]">GEMINI 2.5 FLASH</span>
                          <span className="px-2 py-0.5 rounded bg-[#fbf3e2] border border-[#241f1a]">FASTAPI SSE</span>
                        </>
                      ) : (
                        <>
                          <span className="px-2 py-0.5 rounded bg-[#fbf3e2] border border-[#241f1a]">PLAYWRIGHT STEALTH</span>
                          <span className="px-2 py-0.5 rounded bg-[#3a7bff]/20 border border-[#241f1a]">TELEGRAM HITL</span>
                          <span className="px-2 py-0.5 rounded bg-[#fbf3e2] border border-[#241f1a]">SUPABASE RLS</span>
                          <span className="px-2 py-0.5 rounded bg-[#eafaf4] text-[#1fbfa4] border border-[#241f1a]">GEMINI FLASH PARSER</span>
                          <span className="px-2 py-0.5 rounded bg-[#fbf3e2] border border-[#241f1a]">DOCKER CONTAINER</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </RuledNotebookCard>
            </div>

            {/* Right Pane: live_telemetry.log Terminal */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="bg-[#241f1a] text-[#fbf3e2] border-2 border-[#241f1a] rounded-xl shadow-[4px_4px_0_#241f1a] overflow-hidden flex-1 flex flex-col min-h-[280px]">
                <div className="bg-[#362f27] px-3.5 py-2 border-b border-zinc-700 flex items-center justify-between font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#1fbfa4] animate-ping" />
                    <span className="text-zinc-300 font-bold">live_telemetry.log</span>
                  </div>
                  <span className="text-[#36c25f] text-[11px] font-bold">● ACTIVE RECORDING</span>
                </div>

                <div className="p-4 font-mono text-[12px] sm:text-[13px] leading-relaxed space-y-2 flex-1 overflow-y-auto max-h-[300px]">
                  {logs.map((log, index) => (
                    <div
                      key={index}
                      className={
                        log.includes('Lift') || log.includes('APPROVED')
                          ? 'text-[#ffc23c] font-bold'
                          : log.includes('verified') || log.includes('PASS')
                          ? 'text-[#36c25f]'
                          : log.includes('[INIT]') || log.includes('[SWITCH]')
                          ? 'text-zinc-400'
                          : 'text-[#fbf3e2]'
                      }
                    >
                      {log}
                    </div>
                  ))}
                  {isSimulating && (
                    <div className="flex items-center gap-2 text-[#3a7bff] animate-pulse">
                      <span>▸ streaming inference tokens...</span>
                    </div>
                  )}
                </div>

                <div className="bg-[#1c1815] px-3.5 py-2 border-t border-zinc-800 flex items-center justify-between font-mono text-[11px] text-zinc-400">
                  <span>LOG BUFFER: 64 KB</span>
                  <span>TIME-TO-FIRST-TOKEN: 680ms</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
