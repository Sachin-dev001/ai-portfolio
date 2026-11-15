import React from 'react';
import { Mail, ArrowUpRight, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function AWFooterSection({ onOpenResume }) {
  const email = 'Sachin.Sharma.37919@gmail.com';

  return (
    <footer className="footer border-t border-white/10" style={{ padding: '80px var(--gutter) 40px' }}>
      <div className="wrap">
        <div className="foot-top grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Column (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-black tracking-tight text-white">
                SACHIN SHARMA
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" style={{ boxShadow: '0 0 10px #2bd67b' }} />
            </div>

            <p className="foot-line text-zinc-300 font-sans text-sm max-w-sm leading-relaxed">
              AI & Agentic Systems Engineer specializing in low-latency video RAG, stealth browser agents, and quantitative LLM evaluation suites.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400 glass px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Open for AI Engineering Roles &bull; B.Tech CSE 2026
              </span>
            </div>

            {/* Social Icons */}
            <div className="socials flex items-center gap-3 pt-4">
              <a
                href="https://github.com/Sachin-dev001"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-zinc-300 hover:text-white hover:scale-105 transition"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href="https://linkedin.com/in/sachin-sharma-659ab53b6"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-zinc-300 hover:text-white hover:scale-105 transition"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${email}`}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-zinc-300 hover:text-white hover:scale-105 transition"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={onOpenResume}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-zinc-300 hover:text-white hover:scale-105 transition"
                title="Resume"
              >
                <FileText className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Nav Links Column 1: Systems (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider block mb-4">
              FLAGSHIP SYSTEMS
            </span>
            <ul className="space-y-2 text-sm text-zinc-300 font-sans">
              <li>
                <a href="#built" className="hover:text-white transition flex items-center gap-1">
                  Architecture Console
                </a>
              </li>
              <li>
                <a
                  href="https://video-sage-ai.streamlit.app"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition flex items-center gap-1"
                >
                  VideoSage AI (Live) <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Sachin-dev001/ai-job-agent"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition flex items-center gap-1"
                >
                  AutoApply Agent <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                </a>
              </li>
              <li>
                <a href="#evals-lab" className="hover:text-white transition">
                  Quantitative Evals Lab
                </a>
              </li>
            </ul>
          </div>

          {/* Nav Links Column 2: Navigation (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider block mb-4">
              NAVIGATION
            </span>
            <ul className="space-y-2 text-sm text-zinc-300 font-sans">
              <li>
                <a href="#hero" className="hover:text-white transition">Top of Page</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">Core Capabilities</a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition">Engineering Methodology</a>
              </li>
              <li>
                <a href="#credentials" className="hover:text-white transition">Credentials (B.Tech & NSDC)</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition">Technical FAQ</a>
              </li>
              <li>
                <button
                  onClick={onOpenResume}
                  className="text-emerald-400 hover:underline flex items-center gap-1 font-mono text-xs pt-2"
                >
                  Download ATS Resume (PDF) &rarr;
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Foot Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-zinc-500">
          <div>
            &copy; 2026 Sachin Sharma. All rights reserved.
          </div>
          <div>
            Poornima University &bull; B.Tech Computer Science &bull; NSDC AI & DS
          </div>
        </div>
      </div>
    </footer>
  );
}
