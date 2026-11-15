import React, { useState } from 'react';
import { Terminal, Mail, FileText, Menu, X, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Navbar({ onOpenResume }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#090a0f]/80 border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Name */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 transition shadow-lg shadow-cyan-500/10">
            <Terminal className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-white tracking-tight text-sm sm:text-base">SACHIN SHARMA</span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Open to Work
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-mono">Generative & Agentic AI Engineer</p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-300">
          <a href="#hero" className="hover:text-cyan-400 transition">Overview</a>
          <a href="#vector-space" className="hover:text-cyan-400 transition flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            3D Vector Space
          </a>
          <a href="#projects" className="hover:text-cyan-400 transition">AI Systems</a>
          <a href="#playground" className="hover:text-cyan-400 transition">Eval & RAG Playground</a>
          <a href="#skills" className="hover:text-cyan-400 transition">Technical Stack</a>
          <a href="#experience" className="hover:text-cyan-400 transition">Experience</a>
        </nav>

        {/* Quick Social & Action CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://github.com/Sachin-dev001"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition"
            title="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/sachin-sharma-659ab53b6"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition"
            title="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 transition shadow-lg shadow-cyan-500/20 active:scale-95"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={onOpenResume}
            className="px-2.5 py-1 rounded-md text-xs font-semibold bg-cyan-600 text-white"
          >
            Resume
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 border-t border-slate-800 bg-[#090a0f] space-y-2 text-sm text-slate-300">
          <a href="#hero" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-cyan-400">Overview</a>
          <a href="#vector-space" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-cyan-400">3D Vector Space</a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-cyan-400">AI Systems & Architecture</a>
          <a href="#playground" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-cyan-400">Interactive Eval Playground</a>
          <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-cyan-400">Technical Stack</a>
          <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-cyan-400">Experience</a>
          <div className="pt-2 flex items-center gap-3">
            <a href="https://github.com/Sachin-dev001" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white flex items-center gap-1.5 text-xs">
              <GithubIcon className="w-4 h-4" /> GitHub
            </a>
            <a href="https://linkedin.com/in/sachin-sharma-659ab53b6" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white flex items-center gap-1.5 text-xs">
              <LinkedinIcon className="w-4 h-4" /> LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
