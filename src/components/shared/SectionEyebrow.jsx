import React from 'react';

export default function SectionEyebrow({ label }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <span className="w-2 h-2 rounded-full bg-gold"></span>
      <span className="text-sm font-mono font-medium tracking-wider uppercase text-navy">
        {label}
      </span>
    </div>
  );
}