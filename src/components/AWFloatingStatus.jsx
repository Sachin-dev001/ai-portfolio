import React, { useState } from 'react';
import { Mail, Copy, Check, X, ArrowUpRight } from 'lucide-react';

export default function AWFloatingStatus() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = 'dev.sachinsharma01@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed bottom-6 left-6 z-40">
      {/* Floating Pill (Exact AW Media structure) */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="glass rounded-full px-4 py-2.5 flex items-center gap-2.5 text-xs font-mono text-zinc-300 hover:text-white transition shadow-2xl active:scale-95 group border border-white/10"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400" style={{ boxShadow: '0 0 8px #2bd67b' }} />
          <span className="font-semibold tracking-wide text-white">Open to work</span>
          <span className="text-zinc-600">|</span>
          <span className="text-[11px] text-zinc-400 group-hover:text-zinc-200">AI Engineer</span>
        </button>
      </div>

      {/* Popover Card */}
      {isOpen && (
        <div
          className="absolute bottom-14 left-0 w-80 p-5 rounded-2xl glass border border-white/20 shadow-2xl space-y-4 text-xs font-sans"
          style={{ background: 'linear-gradient(180deg, rgba(20,20,24,0.98), rgba(10,10,14,0.99))' }}
        >
          <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="font-bold text-white font-mono text-[11px]">DIRECT CONTACT</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-zinc-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-3">
            <div>
              <div className="text-[10px] font-mono text-zinc-400 uppercase">Primary Email</div>
              <div className="flex items-center justify-between mt-1 p-2 rounded-xl bg-black/60 border border-white/10 text-zinc-300 font-mono text-[11px]">
                <span className="truncate mr-2">{email}</span>
                <button
                  onClick={copyEmail}
                  className="px-2 py-0.5 rounded bg-zinc-800 hover:bg-zinc-700 text-white transition text-[10px]"
                >
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>
            </div>

            <div>
              <div className="text-[10px] font-mono text-zinc-400 uppercase">Phone & Location</div>
              <div className="mt-1 text-zinc-300 font-mono text-[11px] p-2 rounded-xl bg-black/60 border border-white/10 flex items-center justify-between">
                <span>+91 6378046617</span>
                <span className="text-zinc-400">Jaipur, IN</span>
              </div>
            </div>

            <a
              href={`mailto:${email}`}
              className="btn btn-solid w-full block text-center py-2.5 rounded-xl font-bold text-xs"
            >
              Send Direct Email &rarr;
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
