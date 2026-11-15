import React from 'react';
import { X, Download, ExternalLink, Mail, Phone, MapPin, Check } from 'lucide-react';

export default function ResumeModalLuxury({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-[#0c0d12] border border-white/[0.1] rounded-3xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-white/[0.08] flex items-center justify-between bg-zinc-950/60">
          <div>
            <h3 className="text-base font-bold text-white tracking-tight">Sachin Sharma &mdash; AI Engineer Resume</h3>
            <p className="text-xs text-zinc-400 font-mono">Production RAG &bull; Autonomous Agents &bull; LLMOps</p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/Sachin_Sharma_AI_Engineer_Resume.pdf"
              download="Sachin_Sharma_AI_Engineer_Resume.pdf"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 text-xs font-semibold font-mono transition"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* PDF Frame */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-[#08080a]">
          <div className="rounded-2xl overflow-hidden border border-white/[0.08] bg-zinc-950 h-[580px]">
            <iframe
              src="/Sachin_Sharma_AI_Engineer_Resume.pdf#view=FitH"
              title="Resume Document"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/[0.06] bg-zinc-950/60 flex items-center justify-between text-xs font-mono text-zinc-500">
          <span>Format: ATS-Compliant Single-Column PDF</span>
          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-medium transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
