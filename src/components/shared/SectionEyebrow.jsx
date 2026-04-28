import React from 'react';

export default function SectionEyebrow({ label }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <span className="w-1 h-1 rounded-full" style={{ backgroundColor: '#F8B858' }} />
      <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#001078' }}>
        {label}
      </span>
    </div>
  );
}