import React from 'react';
import PaperPlaneDoodle from './stationery/PaperPlaneDoodle';

export default function AWFooterSection({ onOpenResume }) {
  return (
    <footer className="bg-[#241f1a] text-[#fbf3e2] pt-16 pb-12 border-t-[3px] border-[#241f1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-12 border-b border-[#fbf3e2]/15">
          
          {/* Brand & Mission */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <PaperPlaneDoodle color="#36c25f" size={32} />
              <span className="font-display font-black text-2xl tracking-tight text-white">
                SACHIN SHARMA
              </span>
            </div>

            <p className="font-hand text-2xl text-[#ffc23c] font-bold rotate-[-1deg]">
              hope is not a production strategy ✎
            </p>

            <p className="font-sans text-sm text-[#c9bfa9] max-w-md leading-relaxed">
              Specialized in production-grade RAG retrieval, stealth browser agent architectures, and quantitative LLM evaluation suites.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#362f27] text-[#36c25f] border border-[#36c25f]/40">
                ● OPEN FOR AI ROLES
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#362f27] text-[#ffc23c] border border-[#ffc23c]/40">
                B.TECH CSE 2026
              </span>
            </div>
          </div>

          {/* Quick Links Column 1: Flagship Systems */}
          <div className="md:col-span-3 space-y-3 font-sans">
            <span className="font-hand font-bold text-xl text-[#ffc23c] block">
              flagship systems ✎
            </span>
            <ul className="space-y-2 text-sm text-[#c9bfa9]">
              <li>
                <a
                  href="https://video-sage-ai.streamlit.app"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  VideoSage AI (Live App) ↗
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Sachin-dev001/video-sage-ai"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  VideoSage AI (GitHub) ↗
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Sachin-dev001/ai-job-agent"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  AutoApply Agent (GitHub) ↗
                </a>
              </li>
              <li>
                <a
                  href="#architecture"
                  className="hover:text-white transition-colors"
                >
                  Architecture Console
                </a>
              </li>
              <li>
                <a
                  href="#evals"
                  className="hover:text-white transition-colors"
                >
                  Quantitative Evals Lab
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Column 2: Navigation & Contact */}
          <div className="md:col-span-3 space-y-3 font-sans">
            <span className="font-hand font-bold text-xl text-[#ffc23c] block">
              navigation ✎
            </span>
            <ul className="space-y-2 text-sm text-[#c9bfa9]">
              <li>
                <a href="#capabilities" className="hover:text-white transition-colors">
                  Core Capabilities
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  5-Step Process
                </a>
              </li>
              <li>
                <a href="#why" className="hover:text-white transition-colors">
                  Why Sachin
                </a>
              </li>
              <li>
                <a href="#credentials" className="hover:text-white transition-colors">
                  Credentials &amp; Education
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenResume}
                  className="hover:text-white transition-colors text-left"
                >
                  View ATS Resume
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Signoff */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#8c8270]">
          <div>
            © 2026 Sachin Sharma. Built with paper, ink &amp; production-grade AI ☕
          </div>
          <div className="flex items-center gap-6 text-[#c9bfa9]">
            <a
              href="https://github.com/Sachin-dev001"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/sachin-sharma-659ab53b6"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:Sachin.Sharma.37919@gmail.com"
              className="hover:text-white transition-colors"
            >
              Email
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
