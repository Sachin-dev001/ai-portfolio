import React from 'react';

export default function WavyStrikethrough({ children, color = '#ff5a5f', className = '' }) {
  return (
    <span className={`relative inline-block ${className}`}>
      {children}
      <svg
        className="absolute left-0 right-0 top-1/2 -translate-y-1/2 w-full h-[18px] pointer-events-none"
        viewBox="0 0 200 34"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          stroke={color}
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
          d="M4 15 Q52 4 100 13 T196 11"
        />
        <path
          stroke={color}
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          d="M6 24 Q60 15 112 23 T196 20"
        />
      </svg>
    </span>
  );
}
