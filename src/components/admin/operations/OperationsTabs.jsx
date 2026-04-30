import React from 'react';

const tabs = [
  { key: 'overview', label: 'Overview' },
  { key: 'crm', label: 'CRM' },
  { key: 'projects', label: 'Projects' },
  { key: 'contractors', label: 'Main Contractors' },
  { key: 'subcontractors', label: 'Subcontractors' },
  { key: 'subcontractorPayments', label: 'Subcon Payments' },
  { key: 'documents', label: 'Documents' },
  { key: 'tasks', label: 'Tasks' },
  { key: 'shifts', label: 'Crew Scheduling' },
  { key: 'attendance', label: 'Site Attendance' },
  { key: 'incidents', label: 'Incidents' },
  { key: 'compliance', label: 'Compliance' },
  { key: 'tenders', label: 'Tender CRM' },
];

export default function OperationsTabs({ activeTab, onChange }) {
  return (
    <div className="mb-6 flex gap-2 overflow-x-auto pb-2">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onChange(tab.key)}
          className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-colors ${activeTab === tab.key ? 'bg-navy text-white' : 'bg-white border border-gray-200 text-text-secondary hover:bg-gray-50'}`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}