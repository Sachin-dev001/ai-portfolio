import React from 'react';
import { Cpu, Bot, Database, ShieldCheck, Zap, Server, Terminal, Sparkles } from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    title: 'Generative AI & LLMs',
    icon: Sparkles,
    color: 'text-cyan-400',
    borderColor: 'hover:border-cyan-500/40',
    skills: [
      { name: 'LangChain & LangGraph', level: 'Production' },
      { name: 'RAG Architectures', level: 'Advanced' },
      { name: 'Prompt & Context Engineering', level: 'Expert' },
      { name: 'Google Gemini API (2.5 Flash)', level: 'Production' },
      { name: 'Anthropic Claude API', level: 'Advanced' },
      { name: 'OpenAI API & Tool Calling', level: 'Advanced' },
    ],
  },
  {
    title: 'Agentic AI & Automation',
    icon: Bot,
    color: 'text-emerald-400',
    borderColor: 'hover:border-emerald-500/40',
    skills: [
      { name: 'Autonomous Multi-Agent Systems', level: 'Advanced' },
      { name: 'Playwright Stealth Automation', level: 'Expert' },
      { name: 'Human-In-The-Loop (HITL)', level: 'Production' },
      { name: 'Function / Tool Calling', level: 'Advanced' },
      { name: 'Recruiter Q&A Memory Vault', level: 'Production' },
      { name: 'Browser Fingerprint Masking', level: 'Advanced' },
    ],
  },
  {
    title: 'Vector Search & Retrieval',
    icon: Database,
    color: 'text-blue-400',
    borderColor: 'hover:border-blue-500/40',
    skills: [
      { name: 'Qdrant Vector Database', level: 'Production' },
      { name: 'BAAI Cross-Encoder Rerankers', level: 'Advanced' },
      { name: 'ChromaDB & FAISS', level: 'Advanced' },
      { name: 'Hybrid Sparse-Dense Search', level: 'Advanced' },
      { name: 'Timestamp-Aware Chunking', level: 'Production' },
      { name: 'HNSW Cosine Vector Indexing', level: 'Advanced' },
    ],
  },
  {
    title: 'LLMOps, Evals & Guardrails',
    icon: ShieldCheck,
    color: 'text-purple-400',
    borderColor: 'hover:border-purple-500/40',
    skills: [
      { name: 'Ragas Evaluation Suite', level: 'Production' },
      { name: 'DeepEval Framework', level: 'Advanced' },
      { name: 'Context Recall & Precision', level: 'Benchmarked' },
      { name: 'Faithfulness & Hallucination Mitigation', level: 'Advanced' },
      { name: 'NeMo Guardrails & Safety Filters', level: 'Production' },
      { name: 'Prompt Injection Defense', level: 'Advanced' },
    ],
  },
  {
    title: 'Inference, Serving & Latency',
    icon: Zap,
    color: 'text-amber-400',
    borderColor: 'hover:border-amber-500/40',
    skills: [
      { name: 'Sub-800ms TTFT Streaming', level: 'Optimized' },
      { name: 'Ollama Local LLM Serving', level: 'Advanced' },
      { name: '4-bit Quantization (AWQ/GGUF)', level: 'Practitioner' },
      { name: 'AsyncIO Concurrency', level: 'Advanced' },
      { name: 'Token Consumption Optimization', level: 'Cost Aware' },
    ],
  },
  {
    title: 'Backend & Infrastructure',
    icon: Server,
    color: 'text-rose-400',
    borderColor: 'hover:border-rose-500/40',
    skills: [
      { name: 'Python 3.11+', level: 'Expert' },
      { name: 'FastAPI (REST & SSE)', level: 'Production' },
      { name: 'Docker & Containerization', level: 'Production' },
      { name: 'PostgreSQL & Supabase RLS', level: 'Production' },
      { name: 'Streamlit UI Framework', level: 'Production' },
      { name: 'Git & GitHub Actions CI/CD', level: 'Advanced' },
    ],
  },
];

export default function SkillsGrid() {
  return (
    <section id="skills" className="py-20 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-2">
              <Cpu className="w-4 h-4" />
              <span>SYSTEMS & TOOLING TAXONOMY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Technical Competencies
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md">
            Organized by functional engineering domain rather than an unstructured keyword dump.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className={`p-6 rounded-2xl bg-gradient-to-b from-[#111420] to-[#0c0d14] border border-white/10 shadow-xl transition-all ${category.borderColor}`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    <Icon className={`w-5 h-5 ${category.color}`} />
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight">{category.title}</h3>
                </div>

                <div className="space-y-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800/80 flex items-center justify-between text-xs"
                    >
                      <span className="font-medium text-slate-200">{skill.name}</span>
                      <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                        {skill.level}
                      </span>
                    </div>
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
