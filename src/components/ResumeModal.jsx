import React from 'react';
import { X, Download, ExternalLink, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0d0f17] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-white/[0.08] flex items-center justify-between bg-slate-950/60">
          <div>
            <h3 className="text-lg font-bold text-white">Sachin Sharma &mdash; AI Engineer Resume</h3>
            <p className="text-xs text-slate-400 font-mono">ATS-Compliant &bull; Generative AI & Agentic Systems</p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/Sachin_Sharma_AI_Engineer_Resume.pdf"
              download="Sachin_Sharma_AI_Engineer_Resume.pdf"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500 text-white text-xs font-semibold hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/20"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Body Preview */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 text-xs sm:text-sm text-slate-300">
          {/* Contact Bar */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>Jaipur, Rajasthan, India</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>+91 6378046617</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-purple-400" />
              <a href="mailto:Sachin.Sharma.37919@gmail.com" className="hover:text-white underline">
                Sachin.Sharma.37919@gmail.com
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 font-bold">
              Professional Summary
            </h4>
            <p className="leading-relaxed bg-slate-950/40 p-4 rounded-xl border border-slate-900 text-slate-300">
              Generative AI & Agentic AI Engineer specializing in Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), and Autonomous Agent architectures. Experienced in building production-grade RAG pipelines, automated LLM evaluations (Ragas, DeepEval), LLMOps workflows, and robust safety guardrails to mitigate hallucinations and prompt injections. Skilled in Python, FastAPI, vector databases, prompt engineering, and containerized cloud deployments.
            </p>
          </div>

          {/* Quick PDF Viewer Embed */}
          <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 h-96">
            <iframe
              src="/Sachin_Sharma_AI_Engineer_Resume.pdf#view=FitH"
              title="Resume Preview"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/[0.08] bg-slate-950/60 flex items-center justify-between text-xs text-slate-400">
          <span>Targeting: AI Engineer / GenAI Engineer / Agentic AI Roles</span>
          <button
            onClick={onClose}
            className="px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 text-white font-medium transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
