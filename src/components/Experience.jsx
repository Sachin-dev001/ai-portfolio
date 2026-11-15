import React from 'react';
import { Briefcase, GraduationCap, Award, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-2">
              <Briefcase className="w-4 h-4" />
              <span>TRACK RECORD & CREDENTIALS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Experience & Education
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md">
            Hands-on enterprise engineering experience in production RAG systems and rigorous computer science foundations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Work Experience (Left 7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-sm font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              Engineering Experience
            </h3>

            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#111420] to-[#0c0d14] border border-white/10 shadow-xl space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
                <div>
                  <h4 className="text-lg font-bold text-white">AI & GenAI Engineering Trainee</h4>
                  <div className="text-sm text-cyan-400 font-medium">AU Foundation</div>
                </div>
                <div className="flex flex-col sm:items-end text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-slate-500" /> Dec 2025 – Apr 2026</span>
                  <span className="flex items-center gap-1.5 mt-0.5"><MapPin className="w-3.5 h-3.5 text-slate-500" /> Jaipur, Rajasthan, India</span>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    Architected production-grade RAG retrieval pipelines using LangChain and vector databases, integrating cross-encoders to lift context precision by <span className="text-white font-semibold">24%</span> across 10,000+ benchmark queries.
                  </p>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    Constructed automated LLM evaluation pipelines using <span className="text-cyan-300 font-mono text-xs">Ragas</span> and <span className="text-purple-300 font-mono text-xs">DeepEval</span>, benchmarking context recall, faithfulness, and answer relevance across 200+ test scenarios.
                  </p>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    Integrated input/output safety guardrails and validation filters, cutting hallucination rates by <span className="text-white font-semibold">25%</span> and defending against prompt injection vulnerabilities.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-2 border-t border-slate-800/60">
                {['LangChain', 'Ragas', 'DeepEval', 'Qdrant', 'Cross-Encoders', 'Safety Guardrails', 'FastAPI'].map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-400">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Education & Certs (Right 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-sm font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              Education & Certifications
            </h3>

            {/* University */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-[#111420] to-[#0c0d14] border border-white/10 shadow-xl space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h4 className="text-base font-bold text-white">Poornima University</h4>
                  <div className="text-xs text-cyan-400 font-medium">BTech in Computer Science & Engineering</div>
                </div>
                <span className="text-[11px] font-mono text-slate-400">2022 – 2026</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Core Coursework: Data Structures & Algorithms, Artificial Intelligence, Database Management Systems (DBMS), Operating Systems, Software Engineering.
              </p>
              <div className="text-[11px] font-mono text-slate-500">Jaipur, Rajasthan, India</div>
            </div>

            {/* Certifications */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-[#111420] to-[#0c0d14] border border-white/10 shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                <Award className="w-4 h-4 text-amber-400" />
                <span>GOVERNMENT & PROFESSIONAL ACCREDITATION</span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400 mt-1 shrink-0" />
                  <div>
                    <div className="font-semibold text-white">Certificate in Artificial Intelligence & Data Science</div>
                    <div className="text-slate-400 text-[11px] mt-0.5">Skill India (Government of India / NSDC) &bull; 2026</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 mt-1 shrink-0" />
                  <div>
                    <div className="font-semibold text-white">AI & Data Science Professional Certificate</div>
                    <div className="text-slate-400 text-[11px] mt-0.5">AU Foundation &bull; 2026</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
