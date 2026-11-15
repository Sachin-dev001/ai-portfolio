import React, { useState, useMemo } from 'react';
import { Sliders, Cpu, CheckCircle2, AlertTriangle, Shield, Play, Layers, Compass, Check } from 'lucide-react';

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

export default function AIPlaygroundLuxury() {
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState(0);
  const [enableReranker, setEnableReranker] = useState(true);
  const [threshold, setThreshold] = useState(0.70);

  const scenario = SCENARIOS[selectedScenarioIndex];

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
    <section id="playground" className="py-24 border-t border-white/[0.07] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
              INTERACTIVE BENCHMARK LABORATORY
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              RAG & Eval Inspector
            </h2>
          </div>
          <p className="text-zinc-400 text-sm max-w-md font-sans leading-relaxed">
            Simulate and inspect the precision vs. latency trade-offs between naive vector similarity and cross-encoder reranking under Ragas evaluation metrics.
          </p>
        </div>

        {/* Lab Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Panel (Left Col) */}
          <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl bg-[#0c0d12]/90 border border-white/[0.08] shadow-2xl space-y-6">
            <div>
              <label className="block text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
                Evaluation Scenario:
              </label>
              <div className="space-y-2">
                {SCENARIOS.map((sc, idx) => (
                  <button
                    key={sc.id}
                    onClick={() => setSelectedScenarioIndex(idx)}
                    className={`w-full text-left p-3 rounded-xl border text-xs font-mono transition ${
                      selectedScenarioIndex === idx
                        ? 'bg-zinc-800 text-white border-white/20'
                        : 'bg-zinc-950/60 border-white/[0.06] text-zinc-400 hover:text-white hover:border-white/10'
                    }`}
                  >
                    {sc.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Toggle Reranker */}
            <div className="pt-4 border-t border-white/[0.06] space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-300 font-medium">Cross-Encoder Reranker</span>
                <button
                  onClick={() => setEnableReranker(!enableReranker)}
                  className={`px-3 py-1 rounded-lg text-xs font-mono transition ${
                    enableReranker
                      ? 'bg-zinc-100 text-zinc-950 font-bold'
                      : 'bg-zinc-800 text-zinc-400 hover:text-white'
                  }`}
                >
                  {enableReranker ? 'ENABLED' : 'DISABLED'}
                </button>
              </div>
              <p className="text-[11px] text-zinc-500 font-sans leading-relaxed">
                {enableReranker
                  ? 'Active: Re-scores top passages via full cross-attention for deep query-context alignment.'
                  : 'Disabled: Relying strictly on fast bi-encoder cosine distance.'}
              </p>
            </div>

            {/* Similarity Filter Slider */}
            <div className="pt-4 border-t border-white/[0.06] space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-400">Min Threshold Score:</span>
                <span className="text-white font-bold">{threshold.toFixed(2)}</span>
              </div>
              <input
                type="range"
                min="0.50"
                max="0.95"
                step="0.05"
                value={threshold}
                onChange={(e) => setThreshold(parseFloat(e.target.value))}
                className="w-full h-1 bg-zinc-800 rounded appearance-none cursor-pointer accent-zinc-200"
              />
              <div className="flex justify-between text-[10px] text-zinc-600 font-mono">
                <span>0.50 (Permissive)</span>
                <span>0.95 (Strict)</span>
              </div>
            </div>

            {/* Benchmark Scores */}
            <div className="pt-4 border-t border-white/[0.06] space-y-4">
              <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Ragas Metric Benchmarks:</div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-zinc-400">Context Precision</span>
                  <span className="text-white font-bold">{precisionScore}%</span>
                </div>
                <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-zinc-200 transition-all duration-300" style={{ width: `${precisionScore}%` }} />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-zinc-400">DeepEval Faithfulness</span>
                  <span className="text-white font-bold">{faithfulnessScore}%</span>
                </div>
                <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-400 transition-all duration-300" style={{ width: `${faithfulnessScore}%` }} />
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs font-mono text-zinc-500">
                <span>Synthetic Query TTFT:</span>
                <span className="text-zinc-300 font-semibold">{latencyMs}ms</span>
              </div>
            </div>
          </div>

          {/* Results Area (Right Col) */}
          <div className="lg:col-span-8 space-y-4">
            <div className="p-4 sm:p-5 rounded-2xl bg-zinc-950 border border-white/[0.07] flex items-center justify-between gap-4">
              <div>
                <div className="text-[10px] font-mono text-zinc-500 uppercase">Input Search Query:</div>
                <p className="text-sm font-medium text-white mt-0.5">"{scenario.query}"</p>
              </div>
              <div className="text-xs font-mono text-zinc-400 bg-zinc-900 px-3 py-1 rounded-lg border border-white/[0.08] shrink-0">
                {passedCount} / {scenario.chunks.length} Chunks Retained
              </div>
            </div>

            <div className="space-y-3">
              {processedChunks.map((chunk, index) => (
                <div
                  key={chunk.id}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                    chunk.passed
                      ? chunk.groundTruth
                        ? 'bg-zinc-900/60 border-emerald-500/30'
                        : 'bg-zinc-900/40 border-white/[0.1]'
                      : 'bg-zinc-950/30 border-white/[0.04] opacity-35'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-zinc-800 text-zinc-200">
                        Rank #{index + 1}
                      </span>
                      <span className="text-xs font-mono text-zinc-400">{chunk.timestamp}</span>
                      {chunk.groundTruth ? (
                        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                          Ground Truth
                        </span>
                      ) : (
                        <span className="text-[10px] font-mono text-zinc-500 bg-zinc-900 px-2 py-0.5 rounded">
                          Distractor
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-4 text-xs font-mono">
                      <span className="text-zinc-500">
                        Cosine: <span className="text-zinc-300">{chunk.baseCosine.toFixed(2)}</span>
                      </span>
                      {enableReranker && (
                        <span className="text-zinc-200 font-semibold bg-zinc-800 px-2 py-0.5 rounded">
                          Rerank: {chunk.rerankScore.toFixed(2)}
                        </span>
                      )}
                      <span>
                        {chunk.passed ? (
                          <span className="text-emerald-400 text-xs flex items-center gap-1">
                            <Check className="w-3.5 h-3.5" /> Accepted
                          </span>
                        ) : (
                          <span className="text-zinc-600 text-xs">Filtered Out</span>
                        )}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-300 leading-relaxed font-sans">{chunk.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
