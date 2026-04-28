import React from 'react';

export default function SectionEyebrow({ label, light = false }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span
        className="w-5 h-px rounded-full"
        style={{ background: light ? 'rgba(249,168,37,0.4)' : '#F9A825', opacity: light ? 0.7 : 1 }}
      />
      <span
        className="text-[10.5px] font-mono font-semibold tracking-[0.22em] uppercase"
        style={{ color: light ? 'rgba(255,255,255,0.7)' : '#1A237E' }}
      >
        {label}
      </span>
    </div>
  );
}