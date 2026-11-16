import React from 'react';

export default function StarburstBadge({
  text = 'GOVT ACCREDITED',
  color = '#ffc23c',
  size = 96,
  className = '',
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
      aria-hidden="true"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 96 96"
        className="absolute inset-0"
      >
        <path
          d="M48 6 l9 18 l20 -6 l-7 20 l16 14 l-21 4 l-2 21 l-15 -15 l-15 15 l-2 -21 l-21 -4 l16 -14 l-7 -20 l20 6 Z"
          fill={color}
          stroke="#241f1a"
          strokeWidth="3"
          strokeLinejoin="round"
        />
      </svg>
      <span className="relative z-10 font-hand font-bold text-[13px] leading-tight text-center text-[#241f1a] px-2">
        {text}
      </span>
    </div>
  );
}
