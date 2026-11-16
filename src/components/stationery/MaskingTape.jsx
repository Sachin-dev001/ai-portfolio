import React from 'react';

export default function MaskingTape({ color = 'yellow', className = '', rotate = '-3deg' }) {
  const colorMap = {
    yellow: 'rgba(255, 194, 60, 0.65)',
    blue: 'rgba(58, 123, 255, 0.45)',
    mint: 'rgba(31, 191, 164, 0.45)',
    pink: 'rgba(255, 126, 182, 0.55)',
  };

  const bg = colorMap[color] || colorMap.yellow;

  return (
    <div
      className={`masking-tape ${className}`}
      style={{
        background: bg,
        transform: `translateX(-50%) rotate(${rotate})`,
      }}
      aria-hidden="true"
    />
  );
}
