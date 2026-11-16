import React from 'react';

const MARQUEE_ITEMS = [
  'PYTHON 3.12 · ASYNC CORE',
  'DOCKER & MICROSERVICES · PRODUCTION READY',
  'PYTORCH & HUGGINGFACE · DENSE EMBEDDINGS',
  'GEMINI 2.5 FLASH · LOW-LATENCY STREAMING',
  'QDRANT HNSW · HIGH-DIMENSIONAL VECTOR DB',
  'PLAYWRIGHT STEALTH · ZERO BOT DETECTION FLAGS',
  'TELEGRAM BOT API · REAL-TIME HITL WEBHOOKS',
  'FASTAPI · 60 FPS SERVER-SENT EVENTS',
  'RAGAS & DEEPEVAL · QUANTITATIVE EVALUATIONS',
];

export default function AWTrustedMarquee() {
  return (
    <div className="relative py-8 overflow-hidden">
      <div className="quorvel-strip">
        <div className="strip-track-infinite">
          {/* Repeating list for seamless continuous infinite loop */}
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, index) => (
            <span key={index} className="inline-flex items-center gap-6">
              <span className="text-[#fbf3e2] hover:text-[#ffc23c] transition-colors cursor-default">
                {item}
              </span>
              <span className="w-2.5 h-2.5 bg-[#ffc23c] rotate-45 inline-block" aria-hidden="true" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
