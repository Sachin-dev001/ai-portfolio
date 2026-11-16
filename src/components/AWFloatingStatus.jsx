import React, { useState, useEffect } from 'react';

export default function AWFloatingStatus() {
  const [isVisible, setIsVisible] = useState(true);

  // Auto-hide when scrolled down near the footer
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      
      // If within 300px of bottom, fade out to prevent overlapping footer links
      if (docHeight - (scrollY + winHeight) < 320) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <aside
      aria-label="Availability Status"
      className={`fixed bottom-3 left-3 sm:bottom-6 sm:left-6 z-40 pointer-events-auto transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <a
        href="mailto:Sachin.Sharma.37919@gmail.com"
        className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-[#fffaf0] border-2 border-[#1A1917] rounded-full shadow-[2.5px_2.5px_0px_#1A1917] sm:shadow-[3px_3px_0px_#1A1917] hover:shadow-[4px_4px_0px_#1A1917] hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 transition-all text-[#1A1917] font-mono text-[11px] sm:text-xs font-bold"
      >
        <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#36c25f] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-[#36c25f]" />
        </span>
        <span>Open to work &bull; AI Engineer</span>
      </a>
    </aside>
  );
}