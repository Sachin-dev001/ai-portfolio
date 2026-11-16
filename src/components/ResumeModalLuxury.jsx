import React from 'react';
import { X, Download } from 'lucide-react';
import PushPin from './stationery/PushPin';

export default function ResumeModalLuxury({ isOpen, onClose }) {
  if (!isOpen) return null;

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
              href="/Sachin_Sharma_AI_Engineer_Resume.pdf"
              download="Sachin_Sharma_AI_Engineer_Resume.pdf"
              className="btn-paper btn-coral text-xs py-1.5 px-3.5 font-bold shadow-[2px_2px_0_#241f1a]"
            >
              <Download className="w-3.5 h-3.5 mr-1 inline" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full border-2 border-[#241f1a] bg-white hover:bg-[#ff5a5f] hover:text-white flex items-center justify-center font-bold text-sm shadow-[2px_2px_0_#241f1a] transition-all"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* PDF Frame */}
        <div className="flex-1 overflow-y-auto p-2 sm:p-4 bg-[#fbf3e2]">
          <div className="rounded-xl overflow-hidden border-2 border-[#241f1a] bg-white h-[65vh] min-h-[380px] shadow-inner">
            <iframe
              src="/Sachin_Sharma_AI_Engineer_Resume.pdf#view=FitH"
              title="Resume Document"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 sm:p-4 border-t-2 border-[#241f1a] bg-[#f4e9cf] flex items-center justify-between text-xs font-mono text-[#544b3f]">
          <span className="truncate mr-2">✓ ATS-Compliant Single-Column PDF (100/100 Score)</span>
          <button
            onClick={onClose}
            className="px-3 py-1 rounded-lg border-2 border-[#241f1a] bg-white hover:bg-[#ffc23c] font-bold text-xs shadow-[2px_2px_0_#241f1a] transition-all flex-shrink-0"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
