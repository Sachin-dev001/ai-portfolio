import React, { useState } from 'react';
import { ArrowUp, ArrowUpRight, Mail, Copy, Check, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function AWFooter({ onOpenResume }) {
  const [copied, setCopied] = useState(false);
  const email = 'Sachin.Sharma.37919@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] pt-24 pb-14 text-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Massive Call to Action Header */}
        <div className="pb-16 border-b border-white/[0.08] flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/[0.1] bg-zinc-900/60 text-[11px] font-mono tracking-widest text-zinc-400 uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-live-dot" />
              <span>DIRECT CONTACT &bull; SACHIN SHARMA</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Let’s build systems<br />
              <span className="text-zinc-500">that think and scale.</span>
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={copyEmail}
              className="px-6 py-3.5 rounded-full aw-glass-pill text-zinc-200 hover:text-white text-xs font-mono font-medium transition flex items-center gap-2"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied to Clipboard' : email}</span>
            </button>

            <a
              href={`mailto:${email}`}
              className="px-7 py-3.5 rounded-full bg-white hover:bg-zinc-200 text-black text-xs font-bold font-mono tracking-tight transition shadow-lg active:scale-95"
            >
              Send Direct Email
            </a>
          </div>
        </div>

        {/* Directory Grid */}
        <div className="py-16 border-b border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-10 text-xs font-sans">
          {/* Col 1 */}
          <div className="space-y-4">
            <div className="font-mono text-zinc-500 uppercase tracking-widest text-[11px]">Flagship Systems</div>
            <ul className="space-y-2.5 text-zinc-400">
              <li><a href="#work" className="hover:text-white transition">AutoApply (Stealth Agent)</a></li>
              <li><a href="#work" className="hover:text-white transition">VideoSage AI (Video RAG)</a></li>
              <li><a href="#built-like-this" className="hover:text-white transition">Interactive 3D Console</a></li>
              <li><a href="#evals-lab" className="hover:text-white transition">RAG & Eval Inspector</a></li>
            </ul>
          </div>

          {/* Col 2 */}
          <div className="space-y-4">
            <div className="font-mono text-zinc-500 uppercase tracking-widest text-[11px]">Core Capabilities</div>
            <ul className="space-y-2.5 text-zinc-400">
              <li><a href="#services" className="hover:text-white transition">Autonomous Agent Swarms</a></li>
              <li><a href="#services" className="hover:text-white transition">Qdrant HNSW Vector Search</a></li>
              <li><a href="#services" className="hover:text-white transition">Cross-Encoder Rerankers</a></li>
              <li><a href="#services" className="hover:text-white transition">Sub-800ms Token Streaming</a></li>
              <li><a href="#services" className="hover:text-white transition">Supabase Multi-Tenant RLS</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-4">
            <div className="font-mono text-zinc-500 uppercase tracking-widest text-[11px]">Academic Foundations</div>
            <div className="space-y-2 text-zinc-400">
              <div className="text-white font-medium">Poornima University</div>
              <div className="text-[11px] text-zinc-500">BTech in Computer Science &bull; 2022–2026</div>
              <div className="text-white font-medium pt-2">Skill India / NSDC</div>
              <div className="text-[11px] text-zinc-500">Certified AI & Data Science (2026)</div>
            </div>
          </div>

          {/* Col 4 */}
          <div className="space-y-4">
            <div className="font-mono text-zinc-500 uppercase tracking-widest text-[11px]">Connect & Links</div>
            <ul className="space-y-2.5 text-zinc-400">
              <li>
                <a href="https://github.com/Sachin-dev001" target="_blank" rel="noreferrer" className="hover:text-white flex items-center gap-1.5 transition">
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub Profile</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-600" />
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/sachin-sharma-659ab53b6" target="_blank" rel="noreferrer" className="hover:text-white flex items-center gap-1.5 transition">
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-600" />
                </a>
              </li>
              <li>
                <button onClick={onOpenResume} className="hover:text-white flex items-center gap-1.5 transition text-left">
                  <FileText className="w-3.5 h-3.5" />
                  <span>Download ATS Resume (PDF)</span>
                </button>
              </li>
              <li className="pt-2 text-zinc-500 font-mono text-[11px]">
                Jaipur, Rajasthan, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-600">
          <div>
            &copy; 2026 Sachin Sharma &bull; AI & Agentic Systems Engineer Portfolio
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
