import React from 'react';
import { ArrowUpRight, Cpu, Bot, CheckCircle2, Zap } from 'lucide-react';

const SERVICES = [
  {
    num: '01',
    title: 'High-Throughput Video RAG & Semantic Retrieval',
    tag: 'RETRIEVAL ARCHITECTURE',
    blurb:
      'Stop losing context in multi-hour multimedia. I architect timestamp-aware chunking pipelines indexing video transcripts into Qdrant HNSW vector spaces, applying BAAI cross-encoders to lift context precision by 28% and stream answers in under 800ms.',
    metrics: '5,000+ vectors • Sub-800ms TTFT • Zero transcript drift',
  },
  {
    num: '02',
    title: 'Autonomous Stealth Web Agents & HITL Automation',
    tag: 'AGENTIC SYSTEMS',
    blurb:
      'Brittle browser automations break on modern security gates. I engineer stealth Playwright agents with randomized Gaussian typing jitter and fingerprint spoofing that automate 50+ job submissions daily with zero bot detection flags and Telegram operator checkpoints.',
    metrics: '85% time saved • Telegram webhook HITL • Zero Cloudflare/portal bans',
  },
  {
    num: '03',
    title: 'Quantitative LLM Evaluation Suites & Guardrails',
    tag: 'EVALS & OBSERVABILITY',
    blurb:
      'Eliminate vibes-based prompt engineering. I design quantitative eval suites that benchmark Context Precision, Grounded Faithfulness, and Answer Relevance against golden datasets, ensuring deterministic outputs before shipping to production.',
    metrics: 'Automated regression test suites • Synthetic test suites • Grounded citations',
  },
  {
    num: '04',
    title: 'Low-Latency Inference & Full-Stack Integration',
    tag: 'PRODUCTION SYSTEMS',
    blurb:
      'End-to-end production pipelines powered by FastAPI, asynchronous task queues, Server-Sent Events (SSE) streaming at 60 FPS, Supabase Row-Level Security, and containerized Docker runtimes.',
    metrics: 'FastAPI SSE streaming • Supabase Auth & RLS • Dockerized microservices',
  },
];

export default function AWServicesSection() {
  return (
    <section className="services wrap" id="services" style={{ padding: '100px var(--gutter)' }}>
      {/* Eyebrow */}
      <span className="chip glass mb-6 inline-block" data-liquid="chip">
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
        Core Capabilities
      </span>

      {/* Main Title (Identical to AW Media) */}
      <h2 className="display services-title reveal-lines mb-14">
        <span className="line">
          <span className="line-in">Stop building brittle AI demos</span>
        </span>
        <span className="line">
          <span className="line-in">for problems that demand</span>
        </span>
        <span className="line">
          <span className="line-in chrome">production engineering.</span>
        </span>
      </h2>

      {/* Rows Table (Exact AW Media structure) */}
      <div className="rows border-b border-white/10">
        {SERVICES.map((svc) => (
          <div
            key={svc.num}
            className="row group hover:bg-white/[0.02] transition-colors py-10 px-4 -mx-4 rounded-2xl cursor-default"
          >
            <div>
              <span className="font-mono text-xs text-zinc-500 block mb-2">{svc.num} / {svc.tag}</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                {svc.title}
              </h3>
            </div>

            <div>
              <p className="text-zinc-300 font-sans text-sm sm:text-base leading-relaxed mb-3">
                {svc.blurb}
              </p>
              <div className="font-mono text-xs text-emerald-400 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                {svc.metrics}
              </div>
            </div>

            <div className="hidden md:flex justify-end items-center">
              <span className="row-cta text-xs font-mono text-zinc-400 group-hover:text-white flex items-center gap-1 transition">
                <span>Production Spec</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
