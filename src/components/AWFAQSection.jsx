import React from 'react';

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
    <section className="faq wrap" id="faq" style={{ padding: '100px var(--gutter)' }}>
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
          Technical FAQ
        </span>

        <h2 className="display reveal-lines">
          <span className="line">
            <span className="line-in">Everything you need to</span>
          </span>
          <span className="line">
            <span className="line-in chrome">know.</span>
          </span>
        </h2>
      </div>

      <div className="faq-list space-y-4">
        {FAQS.map((item, idx) => (
          <details
            key={idx}
            className="qa glass p-6 sm:p-8 rounded-3xl cursor-pointer transition-all duration-300 group hover:border-white/30"
          >
            <summary className="font-bold text-lg sm:text-xl text-white list-none flex items-center justify-between gap-4 outline-none">
              <span>{item.q}</span>
              <span className="w-8 h-8 rounded-full glass flex items-center justify-center font-mono text-sm text-zinc-400 group-open:rotate-45 group-open:text-white transition-transform">
                +
              </span>
            </summary>
            <div className="qa-body mt-4 pt-4 border-t border-white/10 text-zinc-300 font-sans text-sm sm:text-base leading-relaxed">
              <p>{item.a}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
