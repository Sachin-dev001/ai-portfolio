import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2, Code2, BookOpen } from 'lucide-react';

export default function ExperienceLuxury() {
  return (
    <section id="credentials" className="py-28 relative border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.12] bg-zinc-900/60 backdrop-blur-md text-[11px] font-mono tracking-widest text-zinc-400 uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-live-dot" />
              <span>EDUCATION & ACCREDITATIONS</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
              Academic Foundations
            </h2>
          </div>
          <p className="text-zinc-400 text-sm max-w-md font-sans leading-relaxed">
            Computer science engineering degree and government-accredited AI certifications forming the rigorous foundation of all system architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* University Degree */}
          <div className="p-8 sm:p-10 rounded-3xl aw-glass-card space-y-6">
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-2xl bg-zinc-900 border border-white/10 text-white">
                <GraduationCap className="w-6 h-6 text-zinc-200" />
              </div>
              <span className="text-xs font-mono text-zinc-400 px-3 py-1 rounded-full bg-zinc-900 border border-white/[0.08]">
                2022 &ndash; 2026
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white tracking-tight mb-1">Poornima University</h3>
              <div className="text-sm font-mono text-zinc-300">
                Bachelor of Technology (BTech) in Computer Science & Engineering
              </div>
              <div className="text-xs text-zinc-500 font-mono mt-1 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>Jaipur, Rajasthan, India</span>
              </div>
            </div>

            <p className="text-sm text-zinc-400 leading-relaxed font-sans">
              Rigorous four-year engineering program covering data structures, algorithm design, operating system internals, database systems (DBMS), distributed architecture, and software engineering.
            </p>

            <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-2 text-xs font-mono text-zinc-400">
              <span className="px-2.5 py-1 rounded-lg bg-black/40 border border-white/[0.06]">Data Structures & Algo</span>
              <span className="px-2.5 py-1 rounded-lg bg-black/40 border border-white/[0.06]">Artificial Intelligence</span>
              <span className="px-2.5 py-1 rounded-lg bg-black/40 border border-white/[0.06]">DBMS & SQL</span>
              <span className="px-2.5 py-1 rounded-lg bg-black/40 border border-white/[0.06]">Operating Systems</span>
            </div>
          </div>

          {/* Government Certification */}
          <div className="p-8 sm:p-10 rounded-3xl aw-glass-card space-y-6">
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-2xl bg-zinc-900 border border-white/10 text-white">
                <Award className="w-6 h-6 text-emerald-400" />
              </div>
              <span className="text-xs font-mono text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                Accredited 2026
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white tracking-tight mb-1">Skill India (NSDC)</h3>
              <div className="text-sm font-mono text-zinc-300">
                Certificate in Artificial Intelligence & Data Science
              </div>
              <div className="text-xs text-zinc-500 font-mono mt-1">
                Government of India / National Skill Development Corporation
              </div>
            </div>

            <p className="text-sm text-zinc-400 leading-relaxed font-sans">
              Comprehensive government certification covering machine learning fundamentals, deep learning pipelines, generative AI models, vector embeddings, statistical modeling, and data science methodologies.
            </p>

            <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-2 text-xs font-mono text-zinc-400">
              <span className="px-2.5 py-1 rounded-lg bg-black/40 border border-white/[0.06]">Machine Learning</span>
              <span className="px-2.5 py-1 rounded-lg bg-black/40 border border-white/[0.06]">Neural Networks</span>
              <span className="px-2.5 py-1 rounded-lg bg-black/40 border border-white/[0.06]">Data Science</span>
              <span className="px-2.5 py-1 rounded-lg bg-black/40 border border-white/[0.06]">Vector Embeddings</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
