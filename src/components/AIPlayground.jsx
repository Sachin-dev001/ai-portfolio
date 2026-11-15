import React, { useState, useMemo } from 'react';
import { Sliders, Cpu, CheckCircle2, AlertTriangle, ShieldCheck, Zap, ArrowRight, Gauge, Activity, RefreshCw } from 'lucide-react';

const SCENARIOS = [
  {
    id: 'rag-rerank',
    title: 'Timestamped Video Transcript Search (VideoSage AI)',
    query: 'How does timestamp-aware chunking maintain chapter context in multi-hour lectures?',
    chunks: [
      { id: 'c1', timestamp: '14:22', text: 'Timestamp-aware chunking enforces hard boundaries at subtitle speaker pauses and video chapter markers, preserving the temporal offset for 1-click video seeking.', baseCosine: 0.74, rerankScore: 0.95, groundTruth: true },
      { id: 'c2', timestamp: '03:10', text: 'Naive chunking by character count splits sentences mid-phrase, causing retrieval engines to drop key semantic context and misalign timestamps.', baseCosine: 0.81, rerankScore: 0.62, groundTruth: false },
      { id: 'c3', timestamp: '48:50', text: 'Qdrant HNSW indexing retrieves the top-20 nearest vectors using cosine similarity in sub-12 milliseconds.', baseCosine: 0.78, rerankScore: 0.86, groundTruth: true },
      { id: 'c4', timestamp: '1:12:04', text: 'Video compression algorithms use intra-frames and delta frames to minimize bandwidth during video playback.', baseCosine: 0.72, rerankScore: 0.18, groundTruth: false },
    ],
  },
  {
    id: 'agent-hitl',
    title: 'Autonomous Web Agent HITL Decision (AutoApply)',
    query: 'What triggers human-in-the-loop fallback when encountering dynamic portal forms?',
    chunks: [
      { id: 'c1', timestamp: 'Step 12', text: 'When form confidence falls below 0.85 or a 2FA/CAPTCHA is detected, the agent dispatches a Telegram alert with inline approve/reject buttons.', baseCosine: 0.79, rerankScore: 0.96, groundTruth: true },
      { id: 'c2', timestamp: 'Step 04', text: 'Playwright stealth injects randomized mouse bezier trajectories and keystroke jitter to mirror genuine human user interaction.', baseCosine: 0.83, rerankScore: 0.68, groundTruth: false },
      { id: 'c3', timestamp: 'Step 15', text: 'Recruiter Q&A Memory Vault performs semantic vector lookups against previously verified answers before escalating to human operator.', baseCosine: 0.76, rerankScore: 0.89, groundTruth: true },
    ],
  },
];

export default function AIPlayground() {
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState(0);
  const [enableReranker, setEnableReranker] = useState(true);
  const [threshold, setThreshold] = useState(0.70);

  const scenario = SCENARIOS[selectedScenarioIndex];

  // Processed chunks based on controls
  const processedChunks = useMemo(() => {
    return scenario.chunks
      .map((chunk) => {
        const score = enableReranker ? chunk.rerankScore : chunk.baseCosine;
        const passed = score >= threshold;
        return { ...chunk, currentScore: score, passed };
      })
      .sort((a, b) => b.currentScore - a.currentScore);
  }, [scenario, enableReranker, threshold]);

  const passedCount = processedChunks.filter((c) => c.passed).length;
  const precisionScore = enableReranker ? 92 : 68;
  const faithfulnessScore = enableReranker ? 96 : 74;
  const latencyMs = enableReranker ? 740 : 420;

  return (
    <section id="playground" className="py-20 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-2">
              <Sliders className="w-4 h-4" />
              <span>LIVE EVALUATION & RETRIEVAL INSPECTOR</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Interactive RAG & Eval Playground
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md">
            Test the trade-off between standard bi-encoder vector similarity vs. cross-encoder reranking and see real-time impact on Ragas evaluation scores.
          </p>
        </div>

        {/* Playground Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Panel (Left Col) */}
          <div className="lg:col-span-4 p-6 rounded-2xl bg-gradient-to-b from-[#111420] to-[#0c0d14] border border-white/10 shadow-xl space-y-6">
            <div>
              <label className="block text-xs font-mono text-slate-400 uppercase mb-2">
                Select Benchmark Scenario:
              </label>
              <div className="space-y-2">
                {SCENARIOS.map((sc, idx) => (
                  <button
                    key={sc.id}
                    onClick={() => setSelectedScenarioIndex(idx)}
                    className={`w-full text-left p-3 rounded-xl border text-xs font-medium transition ${
                      selectedScenarioIndex === idx
                        ? 'bg-cyan-500/10 border-cyan-500/40 text-cyan-300'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                    }`}
                  >
                    {sc.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Toggle Cross-Encoder Reranker */}
            <div className="pt-4 border-t border-slate-800/80">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-slate-300 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-cyan-400" />
                  Cross-Encoder Reranker
                </span>
                <button
                  onClick={() => setEnableReranker(!enableReranker)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    enableReranker ? 'bg-cyan-500' : 'bg-slate-700'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      enableReranker ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
              <p className="text-[11px] text-slate-400">
                {enableReranker
                  ? 'Active: Re-scores candidate vectors with BAAI cross-encoder for deep query-context alignment.'
                  : 'Disabled: Relying solely on fast bi-encoder cosine distance (susceptible to false positives).'}
              </p>
            </div>

            {/* Similarity Filter Slider */}
            <div className="pt-4 border-t border-slate-800/80">
              <div className="flex items-center justify-between text-xs font-mono mb-2">
                <span className="text-slate-300">Min Similarity Threshold:</span>
                <span className="text-cyan-400 font-bold">{threshold.toFixed(2)}</span>
              </div>
              <input
                type="range"
                min="0.50"
                max="0.95"
                step="0.05"
                value={threshold}
                onChange={(e) => setThreshold(parseFloat(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                <span>0.50 (Permissive)</span>
                <span>0.95 (Strict)</span>
              </div>
            </div>

            {/* Evaluation Score Gauges */}
            <div className="pt-4 border-t border-slate-800/80 space-y-3">
              <div className="text-xs font-mono text-slate-400 uppercase">Ragas Benchmark Scores:</div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-slate-300">Context Precision</span>
                  <span className={enableReranker ? 'text-emerald-400 font-bold' : 'text-amber-400 font-bold'}>
                    {precisionScore}%
                  </span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-300 ${
                      enableReranker ? 'bg-emerald-500' : 'bg-amber-500'
                    }`}
                    style={{ width: `${precisionScore}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-slate-300">DeepEval Faithfulness</span>
                  <span className={enableReranker ? 'text-emerald-400 font-bold' : 'text-amber-400 font-bold'}>
                    {faithfulnessScore}%
                  </span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-300 ${
                      enableReranker ? 'bg-cyan-500' : 'bg-amber-500'
                    }`}
                    style={{ width: `${faithfulnessScore}%` }}
                  />
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Est. End-to-End Latency:</span>
                <span className="text-white font-semibold">{latencyMs}ms</span>
              </div>
            </div>
          </div>

          {/* Inspection Results Area (Right Col) */}
          <div className="lg:col-span-8 space-y-4">
            {/* Query Banner */}
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
              <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 mt-0.5">
                <Cpu className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <div className="text-[11px] font-mono text-cyan-400 uppercase">Input Search Query:</div>
                <p className="text-sm font-medium text-white mt-0.5">"{scenario.query}"</p>
              </div>
              <div className="text-right">
                <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                  {passedCount} / {scenario.chunks.length} Passed Filter
                </span>
              </div>
            </div>

            {/* Candidates List */}
            <div className="space-y-3">
              {processedChunks.map((chunk, index) => (
                <div
                  key={chunk.id}
                  className={`p-4 rounded-xl border transition-all ${
                    chunk.passed
                      ? chunk.groundTruth
                        ? 'bg-slate-950/80 border-emerald-500/30'
                        : 'bg-slate-950/80 border-amber-500/30'
                      : 'bg-slate-950/40 border-slate-800/50 opacity-40'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                        Rank #{index + 1}
                      </span>
                      <span className="text-xs font-mono text-cyan-400">{chunk.timestamp}</span>
                      {chunk.groundTruth ? (
                        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                          Ground Truth Match
                        </span>
                      ) : (
                        <span className="text-[10px] font-mono text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded">
                          Distractor Chunk
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-3 text-xs font-mono">
                      <div className="text-slate-400">
                        Bi-Encoder: <span className="text-slate-200">{chunk.baseCosine.toFixed(2)}</span>
                      </div>
                      {enableReranker && (
                        <div className="text-cyan-400 font-bold bg-cyan-950/80 border border-cyan-800/50 px-2 py-0.5 rounded">
                          Reranker Score: {chunk.rerankScore.toFixed(2)}
                        </div>
                      )}
                      <div>
                        {chunk.passed ? (
                          <span className="text-emerald-400 flex items-center gap-1 text-[11px]">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Accepted
                          </span>
                        ) : (
                          <span className="text-slate-500 flex items-center gap-1 text-[11px]">
                            <AlertTriangle className="w-3.5 h-3.5" /> Dropped
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-sans">{chunk.text}</p>
                </div>
              ))}
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Notice: Turning the Reranker ON demotes distractor chunks, boosting context precision from 68% to 92%.</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
