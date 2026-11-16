import React from 'react';
import { X, Download, ExternalLink } from 'lucide-react';
import PushPin from './stationery/PushPin';

export default function ResumeModalLuxury({ isOpen, onClose }) {
  if (!isOpen) return null;

  // Use import.meta.env.BASE_URL to support both GitHub Pages (/ai-portfolio/) and Vercel/root (/)
  const baseUrl = import.meta.env.BASE_URL.endsWith('/') 
    ? import.meta.env.BASE_URL 
    : `${import.meta.env.BASE_URL}/`;
  const pdfUrl = `${baseUrl}Sachin_Sharma_AI_Engineer_Resume.pdf`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#241f1a]/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[94vh] bg-[#fffaf0] border-[3px] border-[#241f1a] rounded-2xl shadow-[10px_12px_0_#241f1a] overflow-hidden flex flex-col">
        <PushPin color="coral" className="-top-3 right-10" />

        {/* Header */}
        <div className="p-4 sm:p-5 border-b-2 border-[#241f1a] flex items-center justify-between bg-[#f4e9cf]">
          <div className="truncate mr-3">
            <h3 className="font-display font-black text-base sm:text-lg text-[#241f1a] tracking-tight truncate">
              Sachin Sharma &mdash; AI Engineer Resume
            </h3>
            <p className="text-xs text-[#544b3f] font-mono truncate">
              B.Tech CSE &bull; Production RAG &bull; Stealth Agents &bull; Skill India Govt Certified
            </p>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <a
              href={pdfUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-paper bg-white text-[#241f1a] hover:bg-[#fff6e0] text-xs py-1.5 px-3 font-bold shadow-[2px_2px_0_#241f1a] hidden sm:inline-flex items-center"
            >
              <ExternalLink className="w-3.5 h-3.5 mr-1 inline" />
              <span>Open in Tab</span>
            </a>
            <a
              href={pdfUrl}
              download="Sachin_Sharma_AI_Engineer_Resume.pdf"
              className="btn-paper btn-coral text-xs py-1.5 px-3.5 font-bold shadow-[2px_2px_0_#241f1a]"
            >
              <Download className="w-3.5 h-3.5 mr-1 inline" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full border-2 border-[#241f1a] bg-white hover:bg-[#ff5a5f] hover:text-white flex items-center justify-center font-bold text-sm shadow-[2px_2px_0_#241f1a] transition-all cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* PDF Frame */}
        <div className="flex-1 overflow-y-auto p-2 sm:p-4 bg-[#fbf3e2]">
          <div className="rounded-xl overflow-hidden border-2 border-[#241f1a] bg-white h-[65vh] min-h-[380px] shadow-inner relative">
            <iframe
              src={`${pdfUrl}#view=FitH`}
              title="Sachin Sharma AI Engineer Resume"
              className="w-full h-full border-0"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 sm:p-4 border-t-2 border-[#241f1a] bg-[#f4e9cf] flex items-center justify-between text-xs font-mono text-[#544b3f]">
          <span className="truncate mr-2">✓ ATS-Compliant Single-Column PDF (100/100 Score)</span>
          <div className="flex items-center gap-2">
            <a
              href={pdfUrl}
              download="Sachin_Sharma_AI_Engineer_Resume.pdf"
              className="text-[#3a7bff] underline font-bold"
            >
              Direct PDF Link
            </a>
            <span>•</span>
            <button
              onClick={onClose}
              className="px-3 py-1 rounded-lg border-2 border-[#241f1a] bg-white hover:bg-[#ffc23c] font-bold text-xs shadow-[2px_2px_0_#241f1a] transition-all flex-shrink-0 cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
