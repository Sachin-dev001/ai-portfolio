import React from 'react';

export default function PushPin({ color = 'coral', className = '' }) {
  const colorMap = {
    coral: '#ff5a5f',
    cobalt: '#3a7bff',
    teal: '#1fbfa4',
    yellow: '#ffc23c',
  };

  const bg = colorMap[color] || colorMap.coral;

  return (
    <div
      className={`push-pin ${className}`}
      style={{ backgroundColor: bg }}
      aria-hidden="true"
    />
  );
}
