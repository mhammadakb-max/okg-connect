import React from 'react';

export default function SectionEyebrow({ label, light = false }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="w-6 h-px rounded-full" style={{ background: light ? 'rgba(181,138,87,0.5)' : '#B58A57' }} />
      <span
        className="text-[10.5px] font-mono font-semibold tracking-[0.22em] uppercase"
        style={{ color: light ? 'rgba(181,138,87,0.7)' : '#B58A57' }}
      >
        {label}
      </span>
    </div>
  );
}