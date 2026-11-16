import React from 'react';

export default function PaperPlaneDoodle({
  color = '#ff5a5f',
  size = 48,
  className = '',
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 30 L60 6 L40 58 L31 40 Z"
        fill={color}
        stroke="#241f1a"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M60 6 L31 40 L40 58 Z"
        fill="#241f1a"
        fillOpacity="0.15"
        stroke="#241f1a"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M4 30 L31 40 L60 6"
        fill="none"
        stroke="#241f1a"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  );
}
