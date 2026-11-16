import React, { useState } from 'react';
import MarkerHighlight from './stationery/MarkerHighlight';
import RuledNotebookCard from './stationery/RuledNotebookCard';

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

  const activeQuery = PRESET_QUERIES[selectedIdx];
  const evalData = rerankerEnabled ? activeQuery.rerankerOn : activeQuery.rerankerOff;

  return (
    <section id="evals" className="relative py-20 sm:py-28 bg-[#fbf3e2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="eyebrow-marker text-2xl sm:text-3xl text-[#1fbfa4]">
            interactive lab ✎
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#241f1a] tracking-tight">
            Quantitative Evals &amp;{' '}
            <MarkerHighlight color="teal">
              RAG Benchmarking.
            </MarkerHighlight>
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#544b3f]">
            Test real-time retrieval parameters. Toggle the BAAI Cross-Encoder reranker to observe quantitative precision lifts, distractor chunk demotions, and streaming latencies.
          </p>
        </div>

        {/* Dashboard Paper Card */}
        <div className="bg-[#fffaf0] border-[2.5px] border-[#241f1a] rounded-2xl p-6 sm:p-8 shadow-[8px_8px_0_#241f1a] max-w-5xl mx-auto space-y-6">
          
          {/* Controls Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-[#241f1a]/20 pb-5">
            {/* Mode selection pills */}
            <div className="flex flex-wrap items-center gap-2.5">
              {PRESET_QUERIES.map((q, idx) => (
                <button
                  key={q.id}
                  onClick={() => setSelectedIdx(idx)}
                  className={`px-3.5 py-1.5 rounded-lg border-2 font-mono text-xs sm:text-sm font-bold transition-all shadow-[2px_2px_0_#241f1a] ${
                    selectedIdx === idx
                      ? 'bg-[#241f1a] text-[#fbf3e2] border-[#241f1a]'
                      : 'bg-white text-[#241f1a] border-[#241f1a] hover:bg-[#fff6e0]'
                  }`}
                >
                  {q.label}
                </button>
              ))}
            </div>

            {/* Interactive Toggle Pill */}
            <button
              onClick={() => setRerankerEnabled(!rerankerEnabled)}
              className={`px-4 py-2 rounded-xl border-2 font-mono text-xs sm:text-sm font-bold transition-all flex items-center gap-2.5 shadow-[3px_3px_0_#241f1a] active:translate-x-0.5 active:translate-y-0.5 ${
                rerankerEnabled
                  ? 'bg-[#eafaf4] text-[#1fbfa4] border-[#1fbfa4]'
                  : 'bg-[#fff2f2] text-[#ff5a5f] border-[#ff5a5f]'
              }`}
            >
              <span className={`w-3 h-3 rounded-full ${rerankerEnabled ? 'bg-[#36c25f]' : 'bg-[#ff5a5f]'}`} />
              <span>
                BAAI Cross-Encoder:{' '}
                {rerankerEnabled ? 'ENABLED (+28% Lift)' : 'DISABLED (Naive Cosine)'}
              </span>
            </button>
          </div>

          {/* Active Query Display */}
          <div className="bg-white border-2 border-[#241f1a] rounded-xl p-4 shadow-[3px_3px_0_#241f1a]">
            <span className="font-mono text-xs font-bold text-[#544b3f] uppercase tracking-wider block mb-1">
              Sample Evaluation Prompt
            </span>
            <div className="font-display font-bold text-base sm:text-lg text-[#241f1a]">
              &ldquo;{activeQuery.query}&rdquo;
            </div>
          </div>

          {/* 4 Metric KPI Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-[#fffdf6] border-2 border-[#241f1a] rounded-xl p-4 text-center shadow-[3px_3px_0_#241f1a]">
              <div className="font-mono text-xs text-[#544b3f] font-bold uppercase mb-1">
                Context Precision
              </div>
              <div className="font-display font-black text-2xl sm:text-3xl text-[#1fbfa4]">
                {evalData.precision}
              </div>
            </div>

            <div className="bg-[#fffdf6] border-2 border-[#241f1a] rounded-xl p-4 text-center shadow-[3px_3px_0_#241f1a]">
              <div className="font-mono text-xs text-[#544b3f] font-bold uppercase mb-1">
                Faithfulness
              </div>
              <div className="font-display font-black text-2xl sm:text-3xl text-[#3a7bff]">
                {evalData.faithfulness}
              </div>
            </div>

            <div className="bg-[#fffdf6] border-2 border-[#241f1a] rounded-xl p-4 text-center shadow-[3px_3px_0_#241f1a]">
              <div className="font-mono text-xs text-[#544b3f] font-bold uppercase mb-1">
                Streaming TTFT
              </div>
              <div className="font-display font-black text-2xl sm:text-3xl text-[#241f1a]">
                {evalData.latency}
              </div>
            </div>

            <div className="bg-[#fffdf6] border-2 border-[#241f1a] rounded-xl p-4 text-center shadow-[3px_3px_0_#241f1a]">
              <div className="font-mono text-xs text-[#544b3f] font-bold uppercase mb-1">
                Distractors
              </div>
              <div className={`font-display font-black text-xl sm:text-2xl ${evalData.distractorDemoted ? 'text-[#36c25f]' : 'text-[#ff5a5f]'}`}>
                {evalData.distractorDemoted ? '● Demoted' : '⚠️ Polluted'}
              </div>
            </div>
          </div>

          {/* Punched-Hole Ruled Notebook Output Sheet */}
          <RuledNotebookCard className="shadow-[4px_4px_0_#241f1a]">
            <div className="space-y-3 font-mono text-xs sm:text-sm">
              <div className="flex items-center justify-between border-b border-[#241f1a]/15 pb-2">
                <span className="font-bold text-[#ff5a5f] uppercase tracking-wider">
                  Verified Grounded Citation
                </span>
                <span className="approved-stamp">
                  {evalData.distractorDemoted ? '✓ Grounded' : 'Drift Warning'}
                </span>
              </div>

              <div className="font-mono text-xs sm:text-[13px] text-[#3a7bff] bg-white border border-[#241f1a]/20 p-2.5 rounded-lg">
                {evalData.citation}
              </div>

              <div className="pt-2">
                <span className="font-bold text-[#241f1a] uppercase text-xs block mb-1.5">
                  Synthesized LLM Output
                </span>
                <p className="font-sans text-xs sm:text-sm text-[#241f1a] leading-relaxed bg-[#fffaf0] p-3 rounded-lg border border-[#241f1a]/20">
                  {evalData.answer}
                </p>
              </div>
            </div>
          </RuledNotebookCard>

        </div>

      </div>
    </section>
  );
}
