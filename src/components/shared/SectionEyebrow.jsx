import React from 'react';

export default function SectionEyebrow({ label, light = false }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span
        className="w-5 h-px rounded-full"
        style={{ background: light ? 'rgba(142,162,242,0.5)' : '#6E85E8', opacity: light ? 0.6 : 1 }}
      />
      <span
        className="text-[10.5px] font-mono font-semibold tracking-[0.22em] uppercase"
        style={{ color: light ? 'rgba(142,162,242,0.75)' : '#6E85E8' }}
      >
        {label}
      </span>
    </div>
  );
}