import React from 'react';

export default function MarkerHighlight({ children, color = 'yellow', className = '' }) {
  const colorClass = {
    yellow: 'highlight-yellow',
    teal: 'highlight-teal',
    pink: 'highlight-pink',
  }[color] || 'highlight-yellow';

  return (
    <span className={`marker-highlight ${colorClass} ${className}`}>
      {children}
    </span>
  );
}
