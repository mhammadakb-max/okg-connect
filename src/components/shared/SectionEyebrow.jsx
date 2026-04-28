import React from 'react';

export default function SectionEyebrow({ label, light = false }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="w-8 h-px" style={{ background: '#F8B858' }} />
      <span
        className={`text-[11px] font-mono font-semibold tracking-[0.2em] uppercase ${
          light ? 'text-white/50' : ''
        }`}
        style={!light ? { color: '#F8B858' } : {}}
      >
        {label}
      </span>
    </div>
  );
}