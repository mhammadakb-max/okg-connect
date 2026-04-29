import React from 'react';
import { motion } from 'framer-motion';

const scopeRows = [
  { param: 'Scope & BOQ', details: 'Work list, quantities, specifications and deliverables.' },
  { param: 'Documentation', details: 'Quotations, contracts, approvals and change management.' },
  { param: 'Materials & Logistics', details: 'Material supply, storage, handling and delivery coordination.' },
  { param: 'Site Access', details: 'Site entry, working hours, access restrictions and safety requirements.' },
  { param: 'Approvals', details: 'Inspection schedules, sign-off authority and handover process.' },
];

export default function ScopeParameterTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl shadow-navy/5"
    >
      <div className="grid gap-0 divide-y divide-gray-200">
        {scopeRows.map((row, idx) => (
          <div key={row.param} className="grid md:grid-cols-[0.35fr_0.65fr] transition-colors duration-300 hover:bg-gray-50">
            <div className="flex items-center gap-4 px-6 py-5">
              <span className="text-sm font-extrabold text-gold">{String(idx + 1).padStart(2, '0')}</span>
              <span className="text-sm font-extrabold text-navy">{row.param}</span>
            </div>
            <div className="border-t border-gray-100 px-6 py-5 text-sm leading-relaxed text-text-secondary md:border-l md:border-t-0">
              {row.details}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}