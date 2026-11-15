import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUp, Terminal, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function FooterLuxury({ onOpenResume }) {
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
    <footer id="contact" className="border-t border-white/[0.07] bg-[#050608] relative pt-24 pb-14 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/[0.07]">
          {/* Main Pitch */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              INITIATE CONVERSATION
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Let’s build reliable AI systems that scale.
            </h2>

            <p className="text-sm text-zinc-400 max-w-lg leading-relaxed font-sans">
              Currently open to <span className="text-white font-medium">AI Engineer</span>, <span className="text-white font-medium">GenAI Engineer</span>, and <span className="text-white font-medium">Agentic Systems</span> opportunities. Let’s talk about architectures, benchmarks, and production deployments.
            </p>

            {/* Email Copy Card */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="px-4 py-3 rounded-2xl bg-zinc-950 border border-white/[0.09] flex items-center gap-3 text-xs sm:text-sm font-mono text-zinc-300">
                <Mail className="w-4 h-4 text-zinc-400" />
                <span>{email}</span>
                <button
                  onClick={copyEmail}
                  className="px-2.5 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white transition flex items-center gap-1.5 text-xs font-mono"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <a
                href={`mailto:${email}`}
                className="px-5 py-3 rounded-2xl bg-zinc-100 hover:bg-white text-zinc-950 font-semibold text-xs sm:text-sm transition-all shadow-md active:scale-95"
              >
                Send Direct Email
              </a>
            </div>
          </div>

          {/* Navigation & Links (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8 font-mono text-xs">
            <div className="space-y-3">
              <div className="text-zinc-500 uppercase tracking-wider text-[11px]">Connect</div>
              <div className="space-y-2">
                <div>
                  <a
                    href="https://github.com/Sachin-dev001"
                    target="_blank"
                    rel="noreferrer"
                    className="text-zinc-400 hover:text-white flex items-center gap-1.5 transition"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3 h-3 text-zinc-600" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://linkedin.com/in/sachin-sharma-659ab53b6"
                    target="_blank"
                    rel="noreferrer"
                    className="text-zinc-400 hover:text-white flex items-center gap-1.5 transition"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3 h-3 text-zinc-600" />
                  </a>
                </div>
                <div className="pt-2 text-[11px] text-zinc-600">
                  Jaipur, Rajasthan, India
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-zinc-500 uppercase tracking-wider text-[11px]">Explore</div>
              <div className="space-y-2 text-zinc-400">
                <div><a href="#hero" className="hover:text-white transition">Overview</a></div>
                <div><a href="#3d-experience" className="hover:text-white transition">3D System</a></div>
                <div><a href="#projects" className="hover:text-white transition">Case Studies</a></div>
                <div><a href="#playground" className="hover:text-white transition">Evals Lab</a></div>
                <div><button onClick={onOpenResume} className="hover:text-white transition text-left">Resume (PDF)</button></div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Meta */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-600">
          <div>
            &copy; 2026 Sachin Sharma &bull; Minimal Luxury AI Systems Portfolio
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
