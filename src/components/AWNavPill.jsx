import React, { useState } from 'react';

const NAV_LINKS = [
  { label: 'Architecture', href: '#architecture' },
  { label: 'Work', href: '#work' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Process', href: '#process' },
  { label: 'Evals Lab', href: '#evals' },
  { label: 'Globe', href: '#everywhere' },
  { label: 'Credentials', href: '#credentials' },
  { label: 'FAQ', href: '#faq' },
];

export default function AWNavPill({ onOpenResume }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-[1000] transition-all duration-200"
      style={{
        backgroundColor: 'rgba(250, 246, 239, 0.90)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
      }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-20 gap-2 sm:gap-4">
          
          {/* Brand Logo (Left): Blue paper plane SVG + Bold Serif Sachin Sharma */}
          <a
            href="#top"
            className="flex items-center gap-2 group cursor-pointer flex-shrink-0"
            aria-label="Sachin Sharma Portfolio Home"
          >
            {/* Hand-drawn blue paper-plane SVG icon (#4A80F0 fill with 2px #1A1917 ink stroke) */}
            <div className="w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center transform group-hover:-rotate-12 transition-transform duration-200 flex-shrink-0">
              <svg 
                viewBox="0 0 64 64" 
                className="w-full h-full filter drop-shadow-[1px_1px_0_#1A1917]"
                aria-hidden="true"
              >
                <path 
                  d="M4 30 L60 6 L40 58 L31 40 Z" 
                  fill="#4A80F0" 
                  stroke="#1A1917" 
                  strokeWidth="2.5" 
                  strokeLinejoin="round" 
                />
                <path 
                  d="M60 6 L31 40" 
                  stroke="#1A1917" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                />
              </svg>
            </div>
            
            <div className="flex items-baseline gap-1.5 sm:gap-2">
              <span className="font-display font-black text-lg sm:text-2xl text-[#1A1917] tracking-tight">
                Sachin Sharma
              </span>
              <span className="hidden xl:inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-mono font-bold bg-[#eafaf4] text-[#1fbfa4] border border-[#1fbfa4]/40 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#36c25f] animate-ping mr-1.5" />
                ONLINE
              </span>
            </div>
          </a>

          {/* Desktop Nav Links with animated coral-red (#FF5A4F) underline bar */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7 font-sans font-bold text-[14.5px] text-[#544b3f]">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative py-1 hover:text-[#1A1917] transition-colors duration-150 group"
              >
                {link.label}
                {/* Coral-red underline bar that expands left-to-right on hover */}
                <span 
                  className="absolute left-0 right-0 -bottom-0.5 h-[2.5px] bg-[#FF5A4F] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" 
                />
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-3 flex-shrink-0">
            <a
              href="https://github.com/Sachin-dev001"
              target="_blank"
              rel="noreferrer"
              className="p-2 text-[#1A1917] hover:text-[#4A80F0] transition-colors rounded-lg hidden sm:flex"
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
              className="p-2 text-[#1A1917] hover:text-[#0A66C2] transition-colors rounded-lg hidden sm:flex"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            {/* Coral Pill CTA Button: #FF5A4F fill, white text, 2px solid #1A1917, 3px 3px 0px #1A1917 hard offset shadow */}
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-1 sm:px-5 sm:py-2 rounded-full font-sans font-extrabold text-xs sm:text-[14.5px] text-white bg-[#FF5A4F] border-2 border-[#1A1917] shadow-[2.5px_2.5px_0px_#1A1917] sm:shadow-[3px_3px_0px_#1A1917] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#1A1917] active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0px_#1A1917] transition-all cursor-pointer min-h-[34px] sm:min-h-[40px]"
            >
              <span>Resume</span>
              <span className="font-bold">→</span>
            </button>

            {/* Mobile Menu Hamburger Button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-1.5 sm:p-2 text-[#1A1917] border-2 border-[#1A1917] rounded-xl bg-[#fffaf0] shadow-[2px_2px_0px_#1A1917] sm:shadow-[2.5px_2.5px_0px_#1A1917] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all min-h-[34px] min-w-[34px] flex items-center justify-center"
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

      {/* Full-width hand-drawn organic wavy ink SVG line along the bottom with soft paper elevation shadow */}
      <div 
        className="w-full overflow-hidden leading-none pointer-events-none" 
        style={{
          filter: 'drop-shadow(0px 4px 6px rgba(26, 25, 23, 0.08))'
        }}
        aria-hidden="true"
      >
        <svg 
          viewBox="0 0 1440 14" 
          preserveAspectRatio="none" 
          className="w-full h-3.5 block"
        >
          {/* Paper extension body connecting seamlessly to wave edge */}
          <path 
            d="M0,0 L0,5 Q60,11 120,5 T240,5 T360,5 T480,5 T600,5 T720,5 T840,5 T960,5 T1080,5 T1200,5 T1320,5 T1440,5 L1440,0 Z" 
            fill="rgba(250, 246, 239, 0.90)" 
          />
          {/* Hand-drawn ink stroke line */}
          <path 
            d="M0,5 Q60,11 120,5 T240,5 T360,5 T480,5 T600,5 T720,5 T840,5 T960,5 T1080,5 T1200,5 T1320,5 T1440,5" 
            fill="none" 
            stroke="#1A1917" 
            strokeWidth="1.75" 
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="lg:hidden bg-[#FAF6EF] border-b-2 border-[#1A1917] px-4 py-5 space-y-4 shadow-[0_8px_0_rgba(26,25,23,0.15)] animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2 font-sans font-bold text-sm">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="p-2.5 rounded-xl border-2 border-[#1A1917] bg-[#fffaf0] hover:bg-[#ffc23c] text-[#1A1917] shadow-[2px_2px_0px_#1A1917] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all text-center min-h-[44px] flex items-center justify-center text-xs sm:text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center justify-center gap-3 pt-3 border-t border-[#1A1917]/15">
            <a
              href="https://github.com/Sachin-dev001"
              target="_blank"
              rel="noreferrer"
              className="p-2 px-3.5 rounded-xl border-2 border-[#1A1917] bg-white font-mono text-xs font-bold flex items-center gap-1.5 shadow-[2px_2px_0px_#1A1917] min-h-[40px]"
            >
              GitHub ↗
            </a>
            <a
              href="https://linkedin.com/in/sachin-sharma-659ab53b6"
              target="_blank"
              rel="noreferrer"
              className="p-2 px-3.5 rounded-xl border-2 border-[#1A1917] bg-white font-mono text-xs font-bold flex items-center gap-1.5 shadow-[2px_2px_0px_#1A1917] min-h-[40px]"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}