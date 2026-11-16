import React from 'react';

export default function RuledNotebookCard({ children, className = '' }) {
  return (
    <div className={`spiral-sheet ${className}`}>
      <div className="spiral-holes" aria-hidden="true">
        <span className="spiral-hole" />
        <span className="spiral-hole" />
        <span className="spiral-hole" />
        <span className="spiral-hole" />
        <span className="spiral-hole" />
        <span className="spiral-hole" />
      </div>
      {children}
    </div>
  );
}
