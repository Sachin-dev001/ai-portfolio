import React from 'react';
import MarkerHighlight from './stationery/MarkerHighlight';

const FAQS = [
  {
    q: 'Why combine dense vector search with cross-encoder reranking in VideoSage AI?',
    a: 'Pure embedding search (bi-encoders) is fast (sub-15ms) across 5,000+ vector chunks in Qdrant, but it relies on independent vector representations and frequently yields distractor chunks with high cosine overlap. Applying a BAAI Cross-Encoder over the top-k candidates jointly evaluates query-chunk interactions, lifting context precision by 28% and ensuring exact timestamp alignment without hallucination.',
  },
  {
    q: 'How does AutoApply achieve zero bot detection on strict job portals like Wellfound and Naukri?',
    a: 'Traditional browser automation triggers anti-bot systems via CDP automation flags (navigator.webdriver = true) and unnatural uniform keystroke latency. AutoApply strips CDP flags using Playwright stealth profiles, applies randomized Gaussian keystroke curves (emulating human typing intervals between 90ms and 220ms), and pauses at ambiguous screening questions to request human approval via Telegram webhooks.',
  },
  {
    q: 'What is your methodology for quantitative LLM evaluation?',
    a: 'I reject qualitative "vibes-based" evaluations. Instead, I define explicit evaluation datasets and measure the RAG Triad: Context Precision (is the retrieved content relevant?), Faithfulness (is the answer strictly grounded in the retrieved chunks?), and Answer Relevance (does it answer the prompt without drift?). Any change in prompt or chunking strategy is benchmarked against regression baselines.',
  },
  {
    q: 'What is your current availability for AI Engineering roles?',
    a: 'I am actively open to AI Engineer, Agentic Systems Engineer, and Applied ML Engineer roles (Full-time or high-impact contract). I can immediately contribute to production RAG pipelines, agentic orchestration, evaluation suites, and low-latency LLM serving.',
  },
  {
    q: 'Where can I inspect your code and live deployments?',
    a: 'Both flagship systems have public GitHub repositories: VideoSage AI (github.com/Sachin-dev001/video-sage-ai) is deployed live on Streamlit Cloud, and AutoApply (github.com/Sachin-dev001/ai-job-agent) features complete architecture diagrams, stealth profiles, and Telegram integration.',
  },
];

export default function AWFAQSection() {
  return (
    <section id="faq" className="relative py-20 sm:py-28 bg-[#fbf3e2]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <span className="eyebrow-marker text-2xl sm:text-3xl text-[#ff5a5f]">
            technical faq ✎
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#241f1a] tracking-tight">
            Everything you need to{' '}
            <MarkerHighlight color="yellow">
              know.
            </MarkerHighlight>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((item, idx) => (
            <details
              key={idx}
              className="group bg-[#fffaf0] border-[2.5px] border-[#241f1a] rounded-2xl p-5 sm:p-6 shadow-[4px_4px_0_#241f1a] transition-all duration-200 cursor-pointer"
            >
              <summary className="font-display font-bold text-lg sm:text-xl text-[#241f1a] list-none flex items-center justify-between gap-4 outline-none select-none">
                <span>{item.q}</span>
                <span className="w-8 h-8 rounded-full border-2 border-[#241f1a] bg-white flex items-center justify-center font-mono text-sm text-[#241f1a] shadow-[2px_2px_0_#241f1a] group-open:rotate-45 transition-transform flex-shrink-0">
                  +
                </span>
              </summary>
              <div className="mt-4 pt-4 border-t-2 border-[#241f1a]/15 text-[#544b3f] font-sans text-sm sm:text-base leading-relaxed">
                <p>{item.a}</p>
              </div>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
}
