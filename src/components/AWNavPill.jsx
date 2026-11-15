import React, { useState } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function AWNavPill({ onOpenResume }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className="pointer-events-auto nav-pill glass">
        {/* Brand Logo - PROMINENT SACHIN SHARMA */}
        <a href="#hero" className="flex items-center gap-2.5 mr-2">
          <span className="font-extrabold text-sm sm:text-base tracking-tight text-white hover:text-emerald-400 transition">
            SACHIN SHARMA
          </span>
          <span className="w-2 h-2 rounded-full bg-emerald-400" style={{ boxShadow: '0 0 10px #2bd67b' }} />
        </a>

        {/* Center Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-6 text-[13px] font-medium text-zinc-300">
          <a href="#built" className="hover:text-white transition">Architecture</a>
          <a href="#work" className="hover:text-white transition">Work</a>
          <a href="#services" className="hover:text-white transition">Capabilities</a>
          <a href="#process" className="hover:text-white transition">Process</a>
          <a href="#why" className="hover:text-white transition">Why Sachin</a>
          <a href="#evals-lab" className="hover:text-white transition">Evals Lab</a>
          <a href="#credentials" className="hover:text-white transition">BCA 2026</a>
          <a href="#faq" className="hover:text-white transition">FAQ</a>
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5 ml-2">
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
            className="btn btn-solid"
            style={{ padding: '8px 18px', fontSize: '12px' }}
          >
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={onOpenResume}
            className="btn btn-solid"
            style={{ padding: '6px 12px', fontSize: '11px' }}
          >
            <span>Resume</span>
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="p-2 text-zinc-400 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div
          className="pointer-events-auto absolute top-20 left-4 right-4 p-6 glass rounded-3xl lg:hidden space-y-3 text-sm text-zinc-200 border border-white/20 shadow-2xl"
          style={{ background: 'linear-gradient(rgba(18, 18, 22, 0.98), rgba(8, 8, 12, 0.99))' }}
        >
          <a href="#built" onClick={() => setOpen(false)} className="block py-1 hover:text-white">Architecture & Console</a>
          <a href="#work" onClick={() => setOpen(false)} className="block py-1 hover:text-white">Recent Work & Systems</a>
          <a href="#services" onClick={() => setOpen(false)} className="block py-1 hover:text-white">Core Capabilities</a>
          <a href="#process" onClick={() => setOpen(false)} className="block py-1 hover:text-white">Engineering Methodology</a>
          <a href="#why" onClick={() => setOpen(false)} className="block py-1 hover:text-white">Why Hire Sachin</a>
          <a href="#evals-lab" onClick={() => setOpen(false)} className="block py-1 hover:text-white">Quantitative Evals Lab</a>
          <a href="#credentials" onClick={() => setOpen(false)} className="block py-1 hover:text-white">Education & Credentials (BCA)</a>
          <a href="#faq" onClick={() => setOpen(false)} className="block py-1 hover:text-white">Technical FAQ</a>
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
    </header>
  );
}
