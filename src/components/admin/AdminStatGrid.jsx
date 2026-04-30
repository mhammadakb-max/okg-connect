import React from 'react';

export default function AdminStatGrid({ stats }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-text-secondary mb-3">{stat.label}</p>
          <p className="text-3xl font-extrabold" style={{ color: stat.color || '#001078' }}>{stat.value}</p>
          {stat.note && <p className="mt-2 text-xs text-text-secondary">{stat.note}</p>}
        </div>
      ))}
    </div>
  );
}