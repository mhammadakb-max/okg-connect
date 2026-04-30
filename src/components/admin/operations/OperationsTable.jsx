import React from 'react';
import { Trash2 } from 'lucide-react';

const columns = {
  crm: ['company_name', 'contact_person', 'stage', 'priority', 'estimated_value', 'next_follow_up'],
  projects: ['project_name', 'main_contractor', 'status', 'progress', 'contract_value', 'target_completion'],
  contractors: ['company_name', 'contact_person', 'relationship_status', 'prequalification_status', 'payment_terms'],
  subcontractors: ['company_name', 'contact_person', 'status', 'phone', 'email'],
  subcontractorPayments: ['subcontractor_name', 'project_name', 'invoice_number', 'amount', 'status', 'due_date'],
  documents: ['title', 'document_type', 'related_party', 'status', 'expiry_date'],
  tasks: ['title', 'department', 'assigned_to', 'priority', 'status', 'due_date'],
  shifts: ['shift_title', 'project_name', 'site_location', 'crew_type', 'shift_date', 'status'],
  attendance: ['worker_name', 'project_name', 'subcontractor_name', 'attendance_status', 'hours_worked'],
  incidents: ['incident_title', 'project_name', 'incident_type', 'severity', 'status', 'incident_date'],
  compliance: ['check_title', 'party_name', 'check_type', 'status', 'due_date'],
  tenders: ['opportunity_name', 'client_name', 'main_contractor', 'stage', 'estimated_value', 'bid_due_date'],
};

const moduleLabels = {
  crm: 'CRM',
  projects: 'Projects',
  contractors: 'Main Contractors',
  subcontractors: 'Subcontractors',
  subcontractorPayments: 'Subcontractor Payments',
  documents: 'Documents',
  tasks: 'Tasks',
  shifts: 'Crew Scheduling',
  attendance: 'Site Attendance',
  incidents: 'Site Incidents',
  compliance: 'Construction Compliance',
  tenders: 'Tender CRM Pipeline',
};

const prettify = (value) => value.replaceAll('_', ' ').replace(/\b\w/g, (letter) => letter.toUpperCase());

export default function OperationsTable({ moduleKey, records, onDelete }) {
  const visibleColumns = columns[moduleKey] || [];
  const canDelete = moduleKey !== 'subcontractors';

  return (
    <div className="rounded-2xl bg-white border border-gray-200 shadow-sm overflow-hidden">
      <div className="p-5 border-b border-gray-200 flex items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-extrabold" style={{ color: '#001078' }}>{moduleLabels[moduleKey]}</h3>
          <p className="text-sm text-text-secondary">{records.length} records</p>
        </div>
      </div>
      {records.length === 0 ? (
        <div className="p-8 text-center text-text-secondary">No records yet.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-left text-xs uppercase tracking-widest text-text-secondary">
              <tr>
                {visibleColumns.map((column) => <th key={column} className="px-5 py-4 font-bold">{prettify(column)}</th>)}
                {canDelete && <th className="px-5 py-4 font-bold text-right">Actions</th>}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {records.map((record) => (
                <tr key={record.id} className="hover:bg-gray-50">
                  {visibleColumns.map((column) => (
                    <td key={column} className="px-5 py-4 text-text-primary max-w-xs truncate">
                      {column === 'file_url' && record[column] ? <a href={record[column]} target="_blank" rel="noopener noreferrer" className="text-navy font-semibold">Open file</a> : record[column] || '—'}
                    </td>
                  ))}
                  {canDelete && (
                    <td className="px-5 py-4 text-right">
                      <button onClick={() => onDelete(moduleKey, record.id)} className="inline-flex items-center gap-1 text-xs font-bold text-red-600 hover:text-red-700">
                        <Trash2 className="w-3.5 h-3.5" /> Delete
                      </button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}