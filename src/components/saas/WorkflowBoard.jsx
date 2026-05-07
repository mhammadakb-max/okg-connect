import React from 'react';

export default function WorkflowBoard({ title, columns }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-extrabold text-slate-950 mb-4">{title}</h3>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
        {columns.map((column) => (
          <div key={column.title} className="rounded-xl bg-slate-50 border border-slate-200 p-4">
            <p className="text-sm font-extrabold text-slate-800 mb-3">{column.title}</p>
            <div className="space-y-2">
              {column.cards.map((card) => <div key={card} className="rounded-lg bg-white border border-slate-200 px-3 py-2 text-sm text-slate-600">{card}</div>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}