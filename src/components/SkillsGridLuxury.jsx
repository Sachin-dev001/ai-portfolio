import React from 'react';
import { Cpu, Bot, Database, Shield, Zap, Server } from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    title: 'Generative AI & LLMs',
    icon: Cpu,
    skills: ['LangChain & LangGraph', 'RAG Architectures', 'Prompt & Context Engineering', 'Google Gemini 2.5 Flash', 'Claude 3.5 Sonnet API', 'OpenAI Function Calling'],
  },
  {
    title: 'Agentic AI & Automation',
    icon: Bot,
    skills: ['Autonomous Multi-Agent Systems', 'Playwright Stealth Automation', 'Human-In-The-Loop (HITL)', 'Recruiter Memory Vault', 'Browser Fingerprint Masking', 'Tool Use Protocols'],
  },
  {
    title: 'Vector Search & Retrieval',
    icon: Database,
    skills: ['Qdrant Vector Database', 'BAAI Cross-Encoder Rerankers', 'ChromaDB & FAISS', 'Hybrid Sparse-Dense Search', 'Timestamp-Aware Chunking', 'HNSW Cosine Vector Indexing'],
  },
  {
    title: 'LLMOps, Evals & Guardrails',
    icon: Shield,
    skills: ['Ragas Evaluation Suite', 'DeepEval Framework', 'Context Recall & Precision', 'Hallucination Mitigation', 'NeMo Guardrails & Safety Filters', 'Prompt Injection Defense'],
  },
  {
    title: 'Inference & Latency Optimization',
    icon: Zap,
    skills: ['Sub-800ms TTFT Streaming', 'Ollama Local LLM Serving', '4-bit Quantization (AWQ/GGUF)', 'AsyncIO Concurrency', 'Token Consumption Optimization'],
  },
  {
    title: 'Backend & Infrastructure',
    icon: Server,
    skills: ['Python 3.11+', 'FastAPI (REST & SSE)', 'Docker & Containerization', 'PostgreSQL & Supabase RLS', 'Streamlit UI Framework', 'GitHub Actions CI/CD'],
  },
];

export default function SkillsGridLuxury() {
  return (
    <section id="skills" className="py-24 border-t border-white/[0.07] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
              SYSTEMS TAXONOMY
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Technical Stack
            </h2>
          </div>
          <p className="text-zinc-400 text-sm max-w-md font-sans leading-relaxed">
            Categorized strictly by engineering domain and production deployment experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className="p-6 sm:p-8 rounded-3xl bg-[#0c0d12]/90 border border-white/[0.08] shadow-xl hover:border-white/20 transition-all space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-zinc-900 border border-white/10 text-zinc-300">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight">{cat.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-xl bg-zinc-950/80 border border-white/[0.06] text-xs font-mono text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
