import React from 'react';
import { Terminal, Layers, Cpu, Sliders, Briefcase, FileText, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function FloatingDock({ onOpenResume }) {
  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-4xl">
      <div className="flex items-center justify-between px-4 py-2.5 rounded-2xl bg-[#0c0d12]/85 border border-white/[0.09] backdrop-blur-2xl shadow-2xl shadow-black/80">
        {/* Brand / Logo */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-xl bg-zinc-800 border border-white/10 flex items-center justify-center text-zinc-100 group-hover:border-zinc-400 transition shadow-inner">
            <Terminal className="w-4 h-4 text-zinc-200" />
          </div>
          <div>
            <div className="text-xs font-bold tracking-tight text-white flex items-center gap-1.5">
              <span>SACHIN SHARMA</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-status" />
            </div>
            <div className="text-[10px] font-mono text-zinc-400">AI & Agentic Systems</div>
          </div>
        </a>

        {/* Center Links (Desktop) */}
        <div className="hidden md:flex items-center gap-1 text-xs font-mono text-zinc-400">
          <a href="#3d-experience" className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/[0.05] transition flex items-center gap-1">
            <Cpu className="w-3.5 h-3.5" />
            <span>3D System</span>
          </a>
          <a href="#projects" className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/[0.05] transition flex items-center gap-1">
            <Layers className="w-3.5 h-3.5" />
            <span>Projects</span>
          </a>
          <a href="#playground" className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/[0.05] transition flex items-center gap-1">
            <Sliders className="w-3.5 h-3.5" />
            <span>Evals Lab</span>
          </a>
          <a href="#experience" className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/[0.05] transition flex items-center gap-1">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Credentials</span>
          </a>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/Sachin-dev001"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/[0.06] transition"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/sachin-sharma-659ab53b6"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/[0.06] transition"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 text-xs font-semibold font-mono tracking-tight transition active:scale-95 shadow-md"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
