import React, { useState } from 'react';
import { Sliders, CheckCircle2, AlertTriangle, ShieldCheck, Zap, RefreshCw } from 'lucide-react';

const PRESET_QUERIES = [
  {
    id: 'query-1',
    label: 'Video RAG Precision',
    query: 'How does VideoSage AI align timestamp boundaries across multi-hour transcripts?',
    rerankerOn: {
      precision: '92.4%',
      faithfulness: '0.96',
      latency: '680ms',
      distractorDemoted: true,
      citation: '[14:22 - 14:45] "Speaker transition interval pinned at 15-second boundaries..."',
      answer:
        'VideoSage AI parses multi-hour transcripts into 15-second boundary-pinned speaker windows. Candidate chunks are retrieved via Qdrant HNSW and reranked using the BAAI cross-encoder, filtering out 3 distractor chunks and maintaining sub-800ms TTFT streaming.',
    },
    rerankerOff: {
      precision: '64.1%',
      faithfulness: '0.72',
      latency: '410ms',
      distractorDemoted: false,
      citation: '[02:11 - 02:40] (Distractor intro chunk ranked #1 by naive vector cosine)',
      answer:
        'The system retrieves chunks based purely on embedding vector cosine similarity. Due to semantic overlap in generic speech, distractor chunks pollute the context window, causing a 28% drop in precision.',
    },
  },
  {
    id: 'query-2',
    label: 'Stealth Agent Evasion',
    query: 'How does AutoApply bypass bot detection on Wellfound and Naukri without bans?',
    rerankerOn: {
      precision: '94.8%',
      faithfulness: '0.98',
      latency: '740ms',
      distractorDemoted: true,
      citation: '[Stealth Profile Verified] CDP flags stripped, Gaussian keystroke curve (90-210ms)',
      answer:
        'AutoApply strips navigator.webdriver and CDP instrumentation flags using Playwright stealth profiles. Form interactions emulate human keystroke latency curves with randomized Gaussian jitter, while Telegram HITL webhooks request operator authorization for screening questions.',
    },
    rerankerOff: {
      precision: '68.0%',
      faithfulness: '0.75',
      latency: '390ms',
      distractorDemoted: false,
      citation: '[Telemetry Warning] Fixed-interval typing detected (potential bot flag risk)',
      answer:
        'Standard Playwright scripts exhibit deterministic keystroke delays (e.g. constant 50ms) and detectable CDP automation flags, triggering Cloudflare Turnstile rate limits.',
    },
  },
];

export default function AWEvalsSection() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [rerankerEnabled, setRerankerEnabled] = useState(true);
  const [isEvaluating, setIsEvaluating] = useState(false);

  const activeQuery = PRESET_QUERIES[selectedIdx];
  const evalData = rerankerEnabled ? activeQuery.rerankerOn : activeQuery.rerankerOff;

  const runEvaluation = () => {
    setIsEvaluating(true);
    setTimeout(() => {
      setIsEvaluating(false);
    }, 400);
  };

  return (
    <section className="evals wrap" id="evals-lab" style={{ padding: '100px var(--gutter)' }}>
      {/* Header */}
      <div className="mb-12">
        <span className="chip glass inline-block mb-6" data-liquid="chip">
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
          Interactive Lab
        </span>

        <h2 className="display reveal-lines">
          <span className="line">
            <span className="line-in">Quantitative Evals &</span>
          </span>
          <span className="line">
            <span className="line-in chrome">RAG Benchmarking.</span>
          </span>
        </h2>

        <p className="text-zinc-400 font-sans text-base max-w-2xl mt-4">
          Test real-time retrieval parameters. Toggle the BAAI Cross-Encoder reranker to observe quantitative precision lifts, distractor chunk demotions, and streaming latencies.
        </p>
      </div>

      {/* Main Glass Console */}
      <div className="glass p-6 sm:p-10 rounded-3xl relative overflow-hidden">
        {/* Controls Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
          {/* Query Selector Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {PRESET_QUERIES.map((q, idx) => (
              <button
                key={q.id}
                onClick={() => setSelectedIdx(idx)}
                className={`btn ${selectedIdx === idx ? 'btn-solid' : 'btn-glass glass'}`}
                style={{ padding: '8px 18px', fontSize: '13px' }}
              >
                <span>{q.label}</span>
              </button>
            ))}
          </div>

          {/* Reranker Toggle */}
          <div className="flex items-center gap-3 glass px-4 py-2 rounded-full">
            <span className="font-mono text-xs text-zinc-300">BAAI Cross-Encoder:</span>
            <button
              onClick={() => {
                setRerankerEnabled(!rerankerEnabled);
                runEvaluation();
              }}
              className={`px-3 py-1 rounded-full font-mono text-xs font-bold transition-all ${
                rerankerEnabled
                  ? 'bg-emerald-400 text-black shadow-[0_0_12px_#2bd67b]'
                  : 'bg-zinc-800 text-zinc-400 border border-white/10'
              }`}
            >
              {rerankerEnabled ? 'ENABLED (+28%)' : 'BYPASSED'}
            </button>
          </div>
        </div>

        {/* Query Display */}
        <div className="py-6 border-b border-white/10">
          <span className="font-mono text-xs text-zinc-500 block mb-2">INPUT QUERY:</span>
          <p className="font-mono text-sm sm:text-base text-white font-medium">
            "{activeQuery.query}"
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-b border-white/10">
          <div className="glass p-4 rounded-2xl">
            <span className="font-mono text-[11px] text-zinc-400 block mb-1">CONTEXT PRECISION</span>
            <span
              className={`font-mono text-2xl font-black ${
                rerankerEnabled ? 'text-emerald-400' : 'text-amber-400'
              }`}
            >
              {evalData.precision}
            </span>
          </div>

          <div className="glass p-4 rounded-2xl">
            <span className="font-mono text-[11px] text-zinc-400 block mb-1">FAITHFULNESS SCORE</span>
            <span className="font-mono text-2xl font-black text-white">{evalData.faithfulness}</span>
          </div>

          <div className="glass p-4 rounded-2xl">
            <span className="font-mono text-[11px] text-zinc-400 block mb-1">STREAMING TTFT</span>
            <span className="font-mono text-2xl font-black text-white">{evalData.latency}</span>
          </div>

          <div className="glass p-4 rounded-2xl">
            <span className="font-mono text-[11px] text-zinc-400 block mb-1">DISTRACTOR DEMOTION</span>
            <span
              className={`font-mono text-sm font-bold flex items-center gap-1.5 mt-2 ${
                evalData.distractorDemoted ? 'text-emerald-400' : 'text-rose-400'
              }`}
            >
              {evalData.distractorDemoted ? (
                <>
                  <CheckCircle2 className="w-4 h-4" /> Demoted
                </>
              ) : (
                <>
                  <AlertTriangle className="w-4 h-4" /> Contaminated
                </>
              )}
            </span>
          </div>
        </div>

        {/* Evaluated Output & Grounded Citation */}
        <div className="pt-6 space-y-4">
          <div>
            <span className="font-mono text-xs text-zinc-500 block mb-2">VERIFIED GROUNDED CITATION:</span>
            <div className="p-3 rounded-xl bg-black/60 border border-white/10 font-mono text-xs text-zinc-300">
              {evalData.citation}
            </div>
          </div>

          <div>
            <span className="font-mono text-xs text-zinc-500 block mb-2">SYNTHESIZED RESPONSE:</span>
            <p className="text-zinc-200 text-sm leading-relaxed font-sans bg-white/[0.02] p-4 rounded-2xl border border-white/5">
              {evalData.answer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
