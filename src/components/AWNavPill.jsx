import React, { useState } from 'react';
import PaperPlaneDoodle from './stationery/PaperPlaneDoodle';

const NAV_LINKS = [
  { label: 'Architecture', href: '#architecture' },
  { label: 'Work', href: '#work' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Process', href: '#process' },
  { label: 'Why Sachin', href: '#why' },
  { label: 'Evals Lab', href: '#evals' },
  { label: 'Credentials', href: '#credentials' },
  { label: 'FAQ', href: '#faq' },
];

export default function AWNavPill({ onOpenResume }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#fbf3e2]/95 backdrop-blur-sm transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-3">
          
          {/* Brand */}
          <a
            href="#top"
            className="flex items-center gap-2 group cursor-pointer flex-shrink-0"
            aria-label="Sachin Sharma Portfolio Home"
          >
            <PaperPlaneDoodle color="#3a7bff" size={28} className="group-hover:rotate-12 transition-transform duration-200" />
            <span className="font-display font-black text-base sm:text-2xl text-[#241f1a] tracking-tight">
              SACHIN SHARMA
            </span>
            <span className="items-center px-2 py-0.5 rounded-full text-[11px] font-mono font-bold bg-[#eafaf4] text-[#1fbfa4] border border-[#1fbfa4]/40 shadow-sm ml-1 hidden lg:inline-flex">
              <span className="w-1.5 h-1.5 rounded-full bg-[#36c25f] animate-ping mr-1.5" />
              ONLINE
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 font-sans font-bold text-[14.5px] text-[#544b3f]">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative py-1 hover:text-[#ff5a5f] transition-colors duration-150 group"
              >
                {link.label}
                <span className="absolute left-0 right-0 -bottom-0.5 h-[2px] bg-[#ff5a5f] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            <a
              href="https://github.com/Sachin-dev001"
              target="_blank"
              rel="noreferrer"
              className="p-2 text-[#241f1a] hover:text-[#3a7bff] transition-colors rounded-lg hidden sm:flex"
              aria-label="GitHub Profile"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>

            <a
              href="https://linkedin.com/in/sachin-sharma-659ab53b6"
              target="_blank"
              rel="noreferrer"
              className="p-2 text-[#241f1a] hover:text-[#0A66C2] transition-colors rounded-lg hidden sm:flex"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            {/* Coral CTA Button */}
            <button
              onClick={onOpenResume}
              className="btn-paper btn-coral text-xs sm:text-base py-1 px-3 sm:py-2 sm:px-5 font-bold shadow-[2px_2px_0_#241f1a]"
            >
              Resume <span className="text-xs sm:text-sm">→</span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-1.5 text-[#241f1a] border-2 border-[#241f1a] rounded-lg bg-[#fffaf0] shadow-[2px_2px_0_#241f1a]"
              aria-label="Toggle Navigation Menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Hand-drawn Wavy Bottom Border */}
      <div className="wavy-line" aria-hidden="true" />

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="lg:hidden bg-[#fffaf0] border-b-2 border-[#241f1a] px-6 py-6 space-y-4 shadow-[0_8px_0_rgba(36,31,26,0.15)]">
          <div className="grid grid-cols-2 gap-2.5 font-sans font-bold text-sm">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="p-2.5 rounded-lg border-2 border-[#241f1a] bg-[#fbf3e2] hover:bg-[#ffc23c] text-[#241f1a] shadow-[2px_2px_0_#241f1a] transition-all text-center"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 pt-3 border-t border-[#241f1a]/15">
            <a
              href="https://github.com/Sachin-dev001"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg border border-[#241f1a] bg-white font-mono text-xs font-bold flex items-center gap-1.5 shadow-[2px_2px_0_#241f1a]"
            >
              GitHub ↗
            </a>
            <a
              href="https://linkedin.com/in/sachin-sharma-659ab53b6"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg border border-[#241f1a] bg-white font-mono text-xs font-bold flex items-center gap-1.5 shadow-[2px_2px_0_#241f1a]"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
