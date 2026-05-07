import React from 'react';

export default function AdminMetricCard({ label, value, note, tone = 'navy' }) {
  const toneClass = tone === 'gold' ? 'bg-gold/15 text-navy' : tone === 'green' ? 'bg-green-50 text-green-700' : tone === 'red' ? 'bg-red-50 text-red-700' : 'bg-navy/5 text-navy';

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className={`mb-5 inline-flex rounded-xl px-3 py-1 text-xs font-extrabold uppercase tracking-widest ${toneClass}`}>
        {label}
      </div>
      <p className="text-2xl md:text-3xl font-extrabold text-text-primary">{value}</p>
      {note && <p className="mt-2 text-sm text-text-secondary">{note}</p>}
    </div>
  );
}