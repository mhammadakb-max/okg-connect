import React, { useEffect, useMemo, useState } from 'react';
import { base44 } from '@/api/base44Client';

const fieldsByModule = {
  crm: ['company_name', 'contact_person', 'email', 'phone', 'lead_source', 'stage', 'priority', 'estimated_value', 'next_follow_up', 'notes'],
  projects: ['project_name', 'client_name', 'main_contractor', 'location', 'scope', 'status', 'progress', 'start_date', 'target_completion', 'contract_value', 'project_manager', 'notes'],
  contractors: ['company_name', 'contact_person', 'designation', 'email', 'phone', 'office_location', 'relationship_status', 'payment_terms', 'prequalification_status', 'notes'],
  documents: ['title', 'document_type', 'related_party', 'expiry_date', 'status', 'file_url', 'notes'],
  tasks: ['title', 'department', 'related_project', 'assigned_to', 'priority', 'status', 'due_date', 'notes'],
  subcontractorPayments: ['subcontractor_name', 'project_name', 'invoice_number', 'amount', 'status', 'due_date', 'paid_date', 'payment_method', 'notes'],
};

const selectOptions = {
  'crm.stage': ['new', 'contacted', 'quoted', 'negotiation', 'won', 'lost'],
  'crm.priority': ['low', 'medium', 'high', 'urgent'],
  'projects.status': ['tender', 'awarded', 'mobilising', 'in_progress', 'on_hold', 'completed', 'closed'],
  'contractors.relationship_status': ['prospect', 'active', 'preferred', 'inactive'],
  'contractors.prequalification_status': ['not_started', 'submitted', 'approved', 'rejected'],
  'documents.document_type': ['subcontractor', 'project', 'contract', 'qHSE', 'finance', 'legal', 'other'],
  'documents.status': ['draft', 'active', 'expired', 'archived'],
  'tasks.department': ['management', 'commercial', 'projects', 'finance', 'procurement', 'qHSE', 'subcontractors'],
  'tasks.priority': ['low', 'medium', 'high', 'urgent'],
  'tasks.status': ['todo', 'in_progress', 'waiting', 'done'],
  'subcontractorPayments.status': ['pending', 'approved', 'paid', 'held'],
};

const prettify = (value) => value.replaceAll('_', ' ').replace(/\b\w/g, (letter) => letter.toUpperCase());

export default function OperationsForm({ moduleKey, onSubmit, saving }) {
  const fields = fieldsByModule[moduleKey] || [];
  const initial = useMemo(() => Object.fromEntries(fields.map((field) => [field, ''])), [fields]);
  const [form, setForm] = useState(initial);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    setForm(initial);
  }, [initial]);

  const handleFileUpload = async (file) => {
    if (!file) return;
    setUploading(true);
    const { file_url } = await base44.integrations.Core.UploadFile({ file });
    setForm((current) => ({ ...current, file_url }));
    setUploading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSubmit(moduleKey, form);
    setForm(initial);
  };

  if (!fields.length) return null;

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm mb-6">
      <h3 className="text-lg font-extrabold mb-4" style={{ color: '#001078' }}>Add {prettify(moduleKey)} Record</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {fields.map((field) => {
          const isLong = field === 'notes' || field === 'scope';
          const type = field.includes('date') ? 'date' : field.includes('amount') || field.includes('value') || field === 'progress' ? 'number' : 'text';
          const options = selectOptions[`${moduleKey}.${field}`];
          if (options) {
            return (
              <select key={field} value={form[field] || ''} onChange={(e) => setForm({ ...form, [field]: e.target.value })} className="rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-navy">
                <option value="">{prettify(field)}</option>
                {options.map((option) => <option key={option} value={option}>{prettify(option)}</option>)}
              </select>
            );
          }
          if (field === 'file_url') {
            return (
              <div key={field} className="rounded-xl border border-gray-200 px-4 py-3 text-sm">
                <input type="file" onChange={(e) => handleFileUpload(e.target.files?.[0])} className="w-full text-sm" />
                {uploading && <p className="mt-2 text-xs text-text-secondary">Uploading...</p>}
                {form.file_url && <a href={form.file_url} target="_blank" rel="noopener noreferrer" className="mt-2 block text-xs font-bold text-navy">Document uploaded</a>}
              </div>
            );
          }
          return isLong ? (
            <textarea key={field} placeholder={prettify(field)} value={form[field] || ''} onChange={(e) => setForm({ ...form, [field]: e.target.value })} className="md:col-span-2 lg:col-span-3 rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-navy min-h-24" />
          ) : (
            <input key={field} type={type} placeholder={prettify(field)} value={form[field] || ''} onChange={(e) => setForm({ ...form, [field]: e.target.value })} className="rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-navy" />
          );
        })}
      </div>
      <button disabled={saving} className="mt-5 rounded-md bg-navy px-6 py-3 text-sm font-bold text-white disabled:opacity-60">
        {saving ? 'Saving...' : 'Save Record'}
      </button>
    </form>
  );
}