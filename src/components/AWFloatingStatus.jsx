import React from 'react';

export default function AWFloatingStatus() {
  return (
    <aside
      aria-label="Availability Status"
      className="fixed bottom-6 left-6 z-40 hidden sm:block pointer-events-auto"
    >
      <a
        href="mailto:Sachin.Sharma.37919@gmail.com"
        className="flex items-center gap-2.5 px-4 py-2 bg-[#fffaf0] border-2 border-[#241f1a] rounded-full shadow-[3px_3px_0_#241f1a] hover:shadow-[4px_4px_0_#241f1a] hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 transition-all text-[#241f1a] font-mono text-xs font-bold"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#36c25f] opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#36c25f]" />
        </span>
        <span>Open to work &bull; AI Engineer</span>
      </a>
    </aside>
  );
}
