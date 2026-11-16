import React from 'react';
import MaskingTape from './stationery/MaskingTape';
import MarkerHighlight from './stationery/MarkerHighlight';
import StickerBadge from './stationery/StickerBadge';
import PaperPlaneDoodle from './stationery/PaperPlaneDoodle';

export default function AWHeroCinematic({ onOpenResume }) {
  return (
    <section id="top" className="relative pt-6 sm:pt-14 pb-16 sm:pb-24 overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Hero Typography & Actions */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            
            {/* Handwritten Eyebrow */}
            <div className="max-w-full overflow-hidden">
              <span className="font-hand font-bold text-lg sm:text-2xl lg:text-3xl text-[#3a7bff] -rotate-1 inline-block leading-tight">
                specializing in production rag, autonomous agents & llmops ✎
              </span>
            </div>

            {/* Display Bold Serif Headline */}
            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl xl:text-[68px] text-[#241f1a] leading-[1.12] tracking-tight">
              <span>SACHIN SHARMA — </span>
              <br className="hidden sm:inline" />
              <span>AI &amp; </span>
              <MarkerHighlight color="yellow">
                Agentic Systems
              </MarkerHighlight>{' '}
              <span>Engineer.</span>
            </h1>

            {/* Lead Narrative */}
            <p className="font-sans text-base sm:text-xl text-[#544b3f] leading-relaxed max-w-2xl font-medium">
              Architecting resilient production-grade Generative AI infrastructure: low-latency hybrid RAG retrieval pipelines, autonomous stealth web agents with human-in-the-loop safeguards, and quantitative LLM evaluation suites.
            </p>

            {/* Action Buttons & Handwritten Note */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-5">
              <a
                href="#architecture"
                className="btn-paper btn-ink text-sm sm:text-lg py-2.5 px-5 sm:py-3 sm:px-6 shadow-[3px_3px_0_#241f1a] min-h-[44px] flex items-center"
              >
                Explore Console <span>→</span>
              </a>

              <a
                href="#work"
                className="btn-paper bg-[#ffffff] hover:bg-[#fff6e0] text-[#241f1a] text-sm sm:text-lg py-2.5 px-5 sm:py-3 sm:px-6 shadow-[3px_3px_0_#241f1a] min-h-[44px] flex items-center"
              >
                Flagship Work
              </a>

              <div className="flex items-center gap-1.5 font-hand text-lg sm:text-2xl text-[#3a7bff] font-bold">
                <span>production-first, zero toy scripts</span>
                <span className="text-xl">✍</span>
              </div>
            </div>

            {/* Micro Badge Row */}
            <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono font-bold text-[#544b3f]">
              <span className="px-2.5 py-1 rounded-md bg-[#fffaf0] border border-[#241f1a]/30 shadow-sm">
                JAIPUR, RAJASTHAN
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#fffaf0] border border-[#241f1a]/30 shadow-sm">
                B.TECH CSE (2022–2026)
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#eafaf4] text-[#1fbfa4] border border-[#1fbfa4]/50 shadow-sm">
                ● GOVT NSDC AI/DS CERTIFIED
              </span>
            </div>

          </div>

          {/* Right Column: Taped Stationery Index Cards Stack & Doodles */}
          <div className="lg:col-span-5 relative min-h-[340px] sm:min-h-[440px] flex items-center justify-center my-3 lg:my-0 w-full max-w-full overflow-hidden sm:overflow-visible">
            
            {/* Flying Paper Plane Doodle */}
            <div className="absolute -top-3 right-0 sm:right-6 animate-bounce z-20">
              <PaperPlaneDoodle color="#ff5a5f" size={44} className="rotate-[-10deg]" />
            </div>

            {/* Circular Purple Sticker Badge */}
            <StickerBadge
              text="zero hallucinations!"
              color="#8b5cf6"
              rotate="-10deg"
              className="-bottom-2 left-2 sm:left-4 z-30 shadow-[3px_3px_0_#241f1a]"
            />

            {/* Card 1: RAG Retrieval Log (White, Blue Tape, -2deg) */}
            <div
              className="absolute w-[92%] max-w-[340px] bg-white border-[2.5px] border-[#241f1a] rounded-xl p-4 sm:p-5 shadow-[4px_4px_0_#241f1a] sm:shadow-[5px_5px_0_#241f1a] transform -rotate-1 sm:-rotate-2 -translate-y-14 sm:-translate-y-16 translate-x-0 sm:-translate-x-3 transition-transform hover:rotate-0 hover:z-20 hover:scale-105 duration-200"
              style={{ zIndex: 12 }}
            >
              <MaskingTape color="blue" rotate="-4deg" />
              <div className="flex items-center justify-between border-b border-[#241f1a]/15 pb-2 mb-2 font-mono text-xs">
                <span className="font-bold flex items-center gap-1.5 text-[#241f1a]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3a7bff]" />
                  rag_retrieval.log
                </span>
                <span className="text-[#36c25f] font-bold">200 OK</span>
              </div>
              <div className="space-y-1.5 font-mono text-xs sm:text-[13px] text-[#241f1a]">
                <div className="flex justify-between">
                  <span className="text-[#544b3f]">Precision Lift:</span>
                  <span className="font-bold text-[#ff5a5f]">+28.3% (BAAI)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#544b3f]">Streaming TTFT:</span>
                  <span className="font-bold text-[#1fbfa4]">&lt;800ms SSE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#544b3f]">Vector Storage:</span>
                  <span className="font-bold">5,000+ Chunks</span>
                </div>
              </div>
            </div>

            {/* Card 2: Stealth Agent Run (Pale Yellow, Amber Tape, +2.5deg) */}
            <div
              className="absolute w-[92%] max-w-[340px] bg-[#fff6e0] border-[2.5px] border-[#241f1a] rounded-xl p-4 sm:p-5 shadow-[4px_4px_0_#241f1a] sm:shadow-[5px_5px_0_#241f1a] transform rotate-1 sm:rotate-[2.5deg] translate-y-2 sm:translate-y-3 translate-x-0 sm:translate-x-3 transition-transform hover:rotate-0 hover:z-20 hover:scale-105 duration-200"
              style={{ zIndex: 14 }}
            >
              <MaskingTape color="yellow" rotate="3deg" />
              <div className="flex items-center justify-between border-b border-[#241f1a]/15 pb-2 mb-2 font-mono text-xs">
                <span className="font-bold flex items-center gap-1.5 text-[#241f1a]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffc23c]" />
                  stealth_agent.run
                </span>
                <span className="text-[#1fbfa4] font-bold">ACTIVE</span>
              </div>
              <div className="space-y-1.5 font-mono text-xs sm:text-[13px] text-[#241f1a]">
                <div className="flex justify-between">
                  <span className="text-[#544b3f]">Latency Reduction:</span>
                  <span className="font-bold text-[#ff5a5f]">85% Faster</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#544b3f]">Automated Submits:</span>
                  <span className="font-bold">50+ Portals/Day</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#544b3f]">Bot Detection:</span>
                  <span className="font-bold text-[#36c25f]">0 Flags (Stealth)</span>
                </div>
              </div>
            </div>

            {/* Card 3: Evals Guardrails Pass (Pale Mint, Mint Tape, -1deg) */}
            <div
              className="absolute w-[92%] max-w-[340px] bg-[#eafaf4] border-[2.5px] border-[#241f1a] rounded-xl p-4 sm:p-5 shadow-[4px_4px_0_#241f1a] sm:shadow-[5px_5px_0_#241f1a] transform -rotate-0.5 sm:-rotate-1 translate-y-18 sm:translate-y-22 translate-x-0 sm:-translate-x-2 transition-transform hover:rotate-0 hover:z-20 hover:scale-105 duration-200"
              style={{ zIndex: 16 }}
            >
              <MaskingTape color="mint" rotate="-2deg" />
              <div className="flex items-center justify-between border-b border-[#241f1a]/15 pb-2 mb-2 font-mono text-xs">
                <span className="font-bold flex items-center gap-1.5 text-[#241f1a]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1fbfa4]" />
                  eval_guardrails.pass
                </span>
                <span className="approved-stamp">✓ PASS</span>
              </div>
              <div className="space-y-1.5 font-mono text-xs sm:text-[13px] text-[#241f1a]">
                <div className="flex justify-between">
                  <span className="text-[#544b3f]">Context Precision:</span>
                  <span className="font-bold text-[#1fbfa4]">92.4% Verified</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#544b3f]">Faithfulness:</span>
                  <span className="font-bold">0.96 Score</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#544b3f]">Hallucination Drift:</span>
                  <span className="font-bold text-[#36c25f]">&lt;3% Bound</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}