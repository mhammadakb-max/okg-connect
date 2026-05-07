import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function FeatureMatrix({ groups }) {
  return (
    <div className="grid xl:grid-cols-3 gap-5">
      {groups.map((group) => (
        <div key={group.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="font-extrabold text-slate-950 mb-3">{group.title}</h3>
          <div className="space-y-2">
            {group.items.map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}