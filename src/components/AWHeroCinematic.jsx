import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';

export default function AWHeroCinematic({ onOpenResume }) {
  return (
    <section className="hero" id="hero">
      {/* Background Cinematic Video Loop & Shade (Identical to AW Media) */}
      <div className="hero-media" data-hero-media="">
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
          poster="/hero-poster.webp"
        >
          <source src="/hero-cinematic.mp4" type="video/mp4" />
        </video>
        <div className="hero-shade" />
      </div>

      {/* Hero Inner Content */}
      <div className="hero-inner" data-hero-inner="">
        <span className="chip glass" data-liquid="chip">
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
          Specializing in Production RAG, Autonomous Agents & LLMOps
        </span>

        {/* Hero Title: Prominent Personal Branding */}
        <h1 className="hero-title">
          <span className="line">
            <span className="line-in">SACHIN SHARMA</span>
          </span>
          <span className="line">
            <span className="line-in chrome">AI & Agentic Systems Engineer.</span>
          </span>
        </h1>

        <p className="hero-sub">
          Building production-grade Generative AI systems: low-latency hybrid RAG pipelines, autonomous stealth web agents with human-in-the-loop safeguards, and quantitative eval suites.
        </p>

        <div className="hero-ctas">
          <button type="button" onClick={onOpenResume} className="btn btn-solid">
            <span>Download ATS Resume</span>
          </button>
          <a className="btn btn-glass glass" data-liquid="btn" href="#built">
            <span>View Flagship Work</span>
          </a>
        </div>

        <ul className="hero-proof">
          <li>Sub-800ms TTFT Streaming</li>
          <li>+28% Precision Lift via Reranker</li>
          <li>50+ Daily Stealth Submissions</li>
          <li>Zero Bot Detection Flags</li>
        </ul>
      </div>

      {/* Scroll Cue (Identical to AW Media) */}
      <div className="scroll-cue" aria-hidden="true">
        <span>Scroll</span>
        <i />
      </div>
    </section>
  );
}
