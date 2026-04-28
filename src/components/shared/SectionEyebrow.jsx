import React from 'react';

export default function SectionEyebrow({ label, light = false }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="w-7 h-[2px] rounded-full" style={{ background: '#F8B858' }} />
      <span
        className="text-[10.5px] font-mono font-bold tracking-[0.22em] uppercase"
        style={{ color: light ? 'rgba(248,184,88,0.75)' : '#F8B858' }}
      >
        {label}
      </span>
    </div>
  );
}