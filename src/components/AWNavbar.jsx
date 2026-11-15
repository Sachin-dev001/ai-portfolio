import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, FileText, ChevronDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function AWNavbar({ onOpenResume }) {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className="pointer-events-auto w-full max-w-5xl aw-glass-pill rounded-full px-6 py-3 flex items-center justify-between shadow-2xl">
        {/* Brand Logo - PROMINENT SACHIN SHARMA */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <span className="font-extrabold text-sm tracking-tight text-white group-hover:text-zinc-300 transition">
            SACHIN SHARMA
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-live-dot" />
        </a>

        {/* Center Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8 text-[13px] font-medium text-zinc-300">
          <a href="#work" className="hover:text-white transition">
            Work
          </a>
          <a href="#built-like-this" className="hover:text-white transition">
            Architecture
          </a>
          <a href="#services" className="hover:text-white transition">
            Systems
          </a>
          <a href="#evals-lab" className="hover:text-white transition">
            Evals Lab
          </a>
          <a href="#credentials" className="hover:text-white transition">
            Credentials
          </a>
        </div>

        {/* Right CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://github.com/Sachin-dev001"
            target="_blank"
            rel="noreferrer"
            className="p-2 text-zinc-400 hover:text-white transition"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/sachin-sharma-659ab53b6"
            target="_blank"
            rel="noreferrer"
            className="p-2 text-zinc-400 hover:text-white transition"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <button
            onClick={onOpenResume}
            className="px-4 py-1.5 rounded-full bg-white hover:bg-zinc-200 text-black text-xs font-bold tracking-tight transition-all shadow-md active:scale-95 flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={onOpenResume}
            className="px-3 py-1 rounded-full bg-white text-black text-xs font-bold"
          >
            Resume
          </button>
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="p-2 text-zinc-400 hover:text-white"
          >
            {mobileMenu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenu && (
        <div className="pointer-events-auto absolute top-20 left-4 right-4 p-6 aw-glass-card rounded-3xl md:hidden space-y-4 text-sm text-zinc-200">
          <a href="#work" onClick={() => setMobileMenu(false)} className="block py-1 hover:text-white font-medium">Work & Flagship Systems</a>
          <a href="#built-like-this" onClick={() => setMobileMenu(false)} className="block py-1 hover:text-white font-medium">Built Like This (3D Architecture)</a>
          <a href="#services" onClick={() => setMobileMenu(false)} className="block py-1 hover:text-white font-medium">Bespoke AI Systems</a>
          <a href="#evals-lab" onClick={() => setMobileMenu(false)} className="block py-1 hover:text-white font-medium">RAG & Eval Inspector</a>
          <a href="#credentials" onClick={() => setMobileMenu(false)} className="block py-1 hover:text-white font-medium">Academic Credentials</a>
          <div className="pt-3 border-t border-white/10 flex items-center gap-4">
            <a href="https://github.com/Sachin-dev001" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white">
              <GithubIcon className="w-4 h-4" /> GitHub
            </a>
            <a href="https://linkedin.com/in/sachin-sharma-659ab53b6" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white">
              <LinkedinIcon className="w-4 h-4" /> LinkedIn
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
