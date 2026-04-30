import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Clock3, FolderKanban } from 'lucide-react';

export default function OperationsOverview({ data, onTabChange }) {
  const activeProjects = (data.projects || []).filter((p) => ['awarded', 'mobilising', 'in_progress'].includes(p.status)).length;
  const pendingTasks = (data.tasks || []).filter((t) => t.status !== 'done').length;
  const pendingPayments = (data.subcontractorPayments || []).filter((p) => p.status === 'pending' || p.status === 'approved').length;
  const openIncidents = (data.incidents || []).filter((i) => i.status !== 'closed').length;
  const pendingCompliance = (data.compliance || []).filter((c) => ['pending', 'submitted', 'expired'].includes(c.status)).length;
  const activeTenders = (data.tenders || []).filter((t) => !['awarded', 'lost'].includes(t.stage)).length;

  const cards = [
    { label: 'Active project tracking', value: activeProjects, Icon: FolderKanban, tab: 'projects' },
    { label: 'Open operation tasks', value: pendingTasks, Icon: Clock3, tab: 'tasks' },
    { label: 'Pending subcontractor payments', value: pendingPayments, Icon: CheckCircle2, tab: 'subcontractorPayments' },
    { label: 'Open site incidents', value: openIncidents, Icon: Clock3, tab: 'incidents' },
    { label: 'Pending compliance checks', value: pendingCompliance, Icon: CheckCircle2, tab: 'compliance' },
    { label: 'Active tender opportunities', value: activeTenders, Icon: FolderKanban, tab: 'tenders' },
  ];

  return (
    <div className="grid lg:grid-cols-[1fr_0.8fr] gap-6">
      <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
        <h2 className="text-xl font-extrabold mb-2" style={{ color: '#001078' }}>Corporate operations command centre</h2>
        <p className="text-text-secondary mb-6">Manage CRM, project progress, contractors, subcontractor documents, payments and internal actions from one admin-only portal.</p>
        <div className="grid md:grid-cols-3 gap-4">
          {cards.map(({ label, value, Icon, tab }) => (
            <button key={label} onClick={() => onTabChange(tab)} className="text-left rounded-xl border border-gray-200 p-5 hover:bg-gray-50 transition-colors">
              <Icon className="w-5 h-5 text-navy mb-4" />
              <p className="text-3xl font-extrabold text-text-primary">{value}</p>
              <p className="text-sm font-semibold text-text-secondary">{label}</p>
            </button>
          ))}
        </div>
      </div>
      <div className="rounded-2xl bg-navy p-6 shadow-sm text-white">
        <h3 className="text-xl font-extrabold mb-4">Linked admin areas</h3>
        <div className="grid gap-3">
          {[
            { to: '/admin/finance', label: 'Finance ledger' },
            { to: '/admin/subcontractors', label: 'Subcontractor registrations' },
            { to: '/admin/contact-submissions', label: 'Website enquiries' },
          ].map((item) => (
            <Link key={item.to} to={item.to} className="flex items-center justify-between rounded-xl bg-white/10 p-4 text-sm font-semibold hover:bg-white/15">
              {item.label}<ArrowRight className="w-4 h-4" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}