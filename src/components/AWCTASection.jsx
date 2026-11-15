import React from 'react';
import { Mail, ArrowRight, FileText } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';

export default function AWCTASection({ onOpenResume }) {
  const email = 'Sachin.Sharma.37919@gmail.com';

  return (
    <section className="cta relative text-center overflow-hidden" id="cta" style={{ padding: '120px var(--gutter)' }}>
      {/* Background Ambient Glow Lens */}
      <div
        className="cta-lens absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(43, 214, 123, 0.12) 0%, rgba(255, 255, 255, 0.03) 40%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="wrap-narrow cta-inner relative z-10 max-w-3xl mx-auto space-y-8">
        <span className="chip glass inline-block" data-liquid="chip">
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
          Open to Work &bull; AI Engineer
        </span>

        <h2 className="cta-title display reveal-lines text-4xl sm:text-6xl font-black text-white tracking-tight">
          <span className="line block">
            <span className="line-in">Ready to accelerate your</span>
          </span>
          <span className="line block">
            <span className="line-in chrome">AI roadmap?</span>
          </span>
        </h2>

        <p className="lede text-zinc-300 font-sans text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          Available for AI Engineer & Agentic Systems roles. Whether you need low-latency RAG retrieval, autonomous web agents with human-in-the-loop safeguards, or rigorous quantitative evaluation suites, let's connect.
        </p>

        <div className="cta-actions flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            type="button"
            onClick={onOpenResume}
            className="btn btn-solid btn-lg"
            style={{ padding: '14px 32px', fontSize: '15px' }}
          >
            <FileText className="w-4 h-4 mr-2" />
            <span>Download ATS Resume</span>
          </button>

          <a
            href={`mailto:${email}`}
            className="btn btn-glass glass btn-lg flex items-center gap-2"
            style={{ padding: '14px 28px', fontSize: '14px' }}
          >
            <Mail className="w-4 h-4" />
            <span>{email}</span>
          </a>

          <a
            href="https://linkedin.com/in/sachin-sharma-659ab53b6"
            target="_blank"
            rel="noreferrer"
            className="btn btn-glass glass btn-lg flex items-center gap-2"
            style={{ padding: '14px 24px', fontSize: '14px' }}
          >
            <LinkedinIcon className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}
