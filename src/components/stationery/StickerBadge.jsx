import React from 'react';

export default function StickerBadge({
  text = 'zero hallucinations!',
  color = '#8b5cf6',
  rotate = '-12deg',
  className = '',
}) {
  return (
    <div
      className={`absolute select-none font-hand font-bold text-white text-center leading-tight flex items-center justify-center p-2 rounded-full border-[2.5px] border-[#241f1a] shadow-[3px_3px_0_#241f1a] ${className}`}
      style={{
        backgroundColor: color,
        transform: `rotate(${rotate})`,
        width: '92px',
        height: '92px',
      }}
      aria-hidden="true"
    >
      <span className="text-[17px] leading-tight">{text}</span>
    </div>
  );
}
