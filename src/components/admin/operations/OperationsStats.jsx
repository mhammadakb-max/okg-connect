import React from 'react';
import { Building2, ClipboardList, FileCheck2, HandCoins, HardHat, Users } from 'lucide-react';

const config = [
  { key: 'crm', label: 'CRM Records', Icon: Users },
  { key: 'projects', label: 'Projects', Icon: ClipboardList },
  { key: 'contractors', label: 'Main Contractors', Icon: Building2 },
  { key: 'subcontractors', label: 'Subcontractors', Icon: HardHat },
  { key: 'documents', label: 'Documents', Icon: FileCheck2 },
  { key: 'subcontractorPayments', label: 'Subcon Payments', Icon: HandCoins },
];

export default function OperationsStats({ data }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
      {config.map(({ key, label, Icon }) => (
        <div key={key} className="rounded-2xl bg-white border border-gray-200 p-5 shadow-sm">
          <Icon className="w-5 h-5 text-navy mb-4" />
          <p className="text-2xl font-extrabold text-text-primary">{data[key]?.length || 0}</p>
          <p className="text-xs font-bold uppercase tracking-widest text-text-secondary">{label}</p>
        </div>
      ))}
    </div>
  );
}