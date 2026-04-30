import React from 'react';
import { CalendarDays, ClipboardCheck, KanbanSquare, MessageSquare, ShieldCheck, UserCheck } from 'lucide-react';

const suites = [
  {
    title: 'Construction Workforce App',
    source: 'Connecteam-style',
    items: [
      { label: 'Crew scheduling', Icon: CalendarDays, tab: 'shifts' },
      { label: 'Site attendance', Icon: UserCheck, tab: 'attendance' },
      { label: 'Daily tasks & checklists', Icon: ClipboardCheck, tab: 'tasks' },
    ],
  },
  {
    title: 'Site Compliance & Incident Control',
    source: 'Guardhouse-style',
    items: [
      { label: 'Incident reporting', Icon: ShieldCheck, tab: 'incidents' },
      { label: 'Compliance renewals', Icon: ClipboardCheck, tab: 'compliance' },
      { label: 'Subcontractor document control', Icon: KanbanSquare, tab: 'documents' },
    ],
  },
  {
    title: 'Construction CRM Pipeline',
    source: 'Monday-style',
    items: [
      { label: 'Tender pipeline', Icon: KanbanSquare, tab: 'tenders' },
      { label: 'Lead follow-ups', Icon: MessageSquare, tab: 'crm' },
      { label: 'Main contractor relationships', Icon: UserCheck, tab: 'contractors' },
    ],
  },
];

export default function ConstructionSuitePanel({ onTabChange }) {
  return (
    <div className="grid lg:grid-cols-3 gap-5 mb-8">
      {suites.map((suite) => (
        <div key={suite.title} className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-text-secondary mb-2">{suite.source}</p>
          <h3 className="text-lg font-extrabold mb-5" style={{ color: '#001078' }}>{suite.title}</h3>
          <div className="grid gap-3">
            {suite.items.map(({ label, Icon, tab }) => (
              <button key={label} onClick={() => onTabChange(tab)} className="flex items-center justify-between rounded-xl border border-gray-200 p-4 text-left text-sm font-semibold hover:bg-gray-50">
                <span className="flex items-center gap-3"><Icon className="w-4 h-4 text-navy" />{label}</span>
                <span className="text-text-secondary">Open</span>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}