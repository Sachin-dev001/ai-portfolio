import React from 'react';
import { X, Download } from 'lucide-react';

export default function ResumeModalLuxury({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[94vh] bg-[#0c0d12] border border-white/[0.1] rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-white/[0.08] flex items-center justify-between bg-zinc-950/70">
          <div className="truncate mr-3">
            <h3 className="text-sm sm:text-base font-bold text-white tracking-tight truncate">
              Sachin Sharma &mdash; AI Engineer Resume
            </h3>
            <p className="text-[11px] text-zinc-400 font-mono truncate">
              B.Tech CSE &bull; Production RAG &bull; Stealth Agents
            </p>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <a
              href="/Sachin_Sharma_AI_Engineer_Resume.pdf"
              download="Sachin_Sharma_AI_Engineer_Resume.pdf"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 text-xs font-semibold font-mono transition"
            >
              <Download className="w-3.5 h-3.5" />
              <span>PDF</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white transition"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* PDF Frame */}
        <div className="flex-1 overflow-y-auto p-2 sm:p-4 bg-[#08080a]">
          <div className="rounded-xl overflow-hidden border border-white/[0.08] bg-zinc-950 h-[62vh] min-h-[350px]">
            <iframe
              src="/Sachin_Sharma_AI_Engineer_Resume.pdf#view=FitH"
              title="Resume Document"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 sm:p-4 border-t border-white/[0.06] bg-zinc-950/70 flex items-center justify-between text-[11px] font-mono text-zinc-500">
          <span className="truncate mr-2">ATS-Compliant Single-Column PDF</span>
          <button
            onClick={onClose}
            className="px-3 py-1 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-medium transition flex-shrink-0"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
