import React from 'react';

export default function SaasMetricCard({ label, value, note, tone = 'slate' }) {
  const tones = {
    slate: 'border-slate-200 bg-white',
    amber: 'border-amber-200 bg-amber-50',
    green: 'border-emerald-200 bg-emerald-50',
    red: 'border-red-200 bg-red-50',
  };
  return (
    <div className={`rounded-2xl border p-5 shadow-sm ${tones[tone] || tones.slate}`}>
      <p className="text-xs uppercase tracking-widest font-bold text-slate-500">{label}</p>
      <p className="text-2xl font-extrabold text-slate-950 mt-2">{value}</p>
      {note && <p className="text-sm text-slate-500 mt-1">{note}</p>}
    </div>
  );
}