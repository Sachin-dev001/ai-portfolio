import React from 'react';
import { ArrowUpRight, Bot, Database, Shield, Zap, Cpu, Server } from 'lucide-react';

export default function AWServicesBento() {
  const capabilities = [
    {
      category: 'AGENTIC WORKFLOWS',
      title: 'Autonomous Multi-Agent Architectures',
      description:
        'Self-directed agent execution pipelines combining stealth browser automation, Human-In-The-Loop (HITL) fallback triggers, and persistent vector memory banks.',
      tags: ['Playwright Stealth', 'Telegram HITL', 'Memory Vault', 'Multi-tenant RLS'],
    },
    {
      category: 'HIGH-PRECISION RETRIEVAL',
      title: 'Production RAG & Cross-Encoder Reranking',
      description:
        'Hybrid dense-sparse vector pipelines engineered on Qdrant HNSW indexes, pairing sub-minute timestamp chunking with secondary BAAI cross-encoder rerankers to lift context precision by +28%.',
      tags: ['Qdrant Vector DB', 'BAAI Reranker', 'Timestamp Chunking', 'Hybrid Search'],
    },
    {
      category: 'LLMOPS & SAFETY GATES',
      title: 'Automated Evals & Guardrails',
      description:
        'Automated evaluation suites leveraging Ragas and DeepEval across 200+ test scenarios to mathematically benchmark Faithfulness, Context Recall, and Answer Relevance. Input/output safety filters eliminate hallucinations by 25%.',
      tags: ['Ragas Suite', 'DeepEval', 'NeMo Guardrails', 'Injection Defense'],
    },
    {
      category: 'INFERENCE & LATENCY',
      title: 'Low-Latency Inference & Streaming',
      description:
        'Asynchronous SSE token streaming delivering sub-800ms Time-To-First-Token (TTFT) via Google Gemini 2.5 Flash. Local model serving with Ollama and 4-bit AWQ/GGUF quantization.',
      tags: ['Gemini 2.5 Flash', '<800ms TTFT', 'Ollama Serving', '4-bit AWQ/GGUF'],
    },
  ];

  return (
    <section id="services" className="py-28 bg-black relative border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header (Exact AW Media structure) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-3xl">
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
              Production-grade engineering,<br />
              <span className="text-zinc-400">AI-accelerated where it counts,</span><br />
              bespoke where it matters.
            </h2>
          </div>

          <div className="max-w-sm text-sm text-zinc-400 font-sans leading-relaxed">
            <p>
              Autonomous agents, high-precision retrieval pipelines, and the evals behind them. Built round how systems already operate in production.
            </p>
          </div>
        </div>

        {/* Bento Grid (Exact AW Media 4-card structure) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-3xl aw-glass-card group flex flex-col justify-between space-y-6 relative overflow-hidden"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono tracking-widest text-zinc-400 uppercase">
                  {cap.category}
                </span>
                <div className="w-8 h-8 rounded-full bg-white/[0.06] group-hover:bg-white text-zinc-400 group-hover:text-black flex items-center justify-center transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                  {cap.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed font-sans">
                  {cap.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-2 text-[11px] font-mono">
                {cap.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full bg-zinc-900 border border-white/[0.08] text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
