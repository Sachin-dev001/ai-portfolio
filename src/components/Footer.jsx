import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUp, Terminal, Sparkles, MapPin, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer({ onOpenResume }) {
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
    <footer id="contact" className="border-t border-white/[0.08] bg-[#07080c] relative pt-20 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/[0.08]">
          {/* Main Pitch */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>AVAILABLE FOR AI & GENAI ROLES</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Let’s build reliable, production-grade AI systems together.
            </h2>

            <p className="text-sm text-slate-400 max-w-lg leading-relaxed">
              Actively interviewing for <span className="text-white font-medium">AI Engineer</span>, <span className="text-white font-medium">GenAI Engineer</span>, and <span className="text-white font-medium">Agentic Systems</span> positions. Open to both remote opportunities and on-site roles.
            </p>

            {/* Email Copy Card */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="p-2 sm:px-4 sm:py-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-3 text-xs sm:text-sm font-mono text-slate-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>{email}</span>
                <button
                  onClick={copyEmail}
                  className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition flex items-center gap-1 text-xs"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              <a
                href={`mailto:${email}`}
                className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-white font-semibold text-xs sm:text-sm transition shadow-lg shadow-cyan-500/20"
              >
                Send Direct Email
              </a>
            </div>
          </div>

          {/* Contact Details & Links */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-4">Location & Connect</h4>
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>Jaipur, Rajasthan, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>+91 6378046617</span>
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <a
                    href="https://github.com/Sachin-dev001"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/sachin-sharma-659ab53b6"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-4">Quick Navigation</h4>
              <div className="space-y-2 text-xs text-slate-400">
                <div><a href="#hero" className="hover:text-cyan-400 transition">Overview & Metrics</a></div>
                <div><a href="#vector-space" className="hover:text-cyan-400 transition">3D Semantic Space</a></div>
                <div><a href="#projects" className="hover:text-cyan-400 transition">AutoApply & VideoSage AI</a></div>
                <div><a href="#playground" className="hover:text-cyan-400 transition">RAG & Eval Playground</a></div>
                <div><a href="#skills" className="hover:text-cyan-400 transition">Technical Competencies</a></div>
                <div><button onClick={onOpenResume} className="hover:text-cyan-400 transition">Download Resume (PDF)</button></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span>SACHIN SHARMA &copy; 2026 &bull; Production GenAI & Multi-Agent Engineering</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
