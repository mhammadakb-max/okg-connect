import React, { useState } from 'react';
import { Mail, Phone, CalendarDays, Save } from 'lucide-react';

const statusStyles = {
  new: 'bg-yellow-50 text-yellow-700 border-yellow-200',
  under_review: 'bg-blue-50 text-blue-700 border-blue-200',
  site_visit_required: 'bg-purple-50 text-purple-700 border-purple-200',
  quotation_in_preparation: 'bg-amber-50 text-amber-700 border-amber-200',
  quoted: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  negotiating: 'bg-orange-50 text-orange-700 border-orange-200',
  awarded: 'bg-green-50 text-green-700 border-green-200',
  lost: 'bg-red-50 text-red-700 border-red-200',
  archived: 'bg-gray-100 text-gray-600 border-gray-200',
  contacted: 'bg-blue-50 text-blue-700 border-blue-200',
  quotation_sent: 'bg-amber-50 text-amber-700 border-amber-200',
  won: 'bg-green-50 text-green-700 border-green-200',
  reviewed: 'bg-green-50 text-green-700 border-green-200',
};

const formatStatus = (value) => String(value || '').replaceAll('_', ' ').replace(/\b\w/g, (letter) => letter.toUpperCase());

export default function AdminContactSubmissionCard({ submission, onSave }) {
  const [status, setStatus] = useState(submission.status || 'new');
  const [notes, setNotes] = useState(submission.internal_notes || '');
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    await onSave(submission.id, status, notes);
    setSaving(false);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-5">
        <div>
          <h3 className="text-xl font-bold mb-1" style={{ color: '#001078' }}>{submission.name}</h3>
          <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
            <span className="flex items-center gap-2"><Mail className="w-4 h-4" /> {submission.email}</span>
            {submission.phone && <span className="flex items-center gap-2"><Phone className="w-4 h-4" /> {submission.phone}</span>}
            <span className="flex items-center gap-2"><CalendarDays className="w-4 h-4" /> {new Date(submission.created_date).toLocaleDateString()}</span>
          </div>
        </div>
        <span className={`inline-flex w-fit px-3 py-1 rounded-full border text-xs font-bold uppercase ${statusStyles[status] || statusStyles.new}`}>
          {formatStatus(status)}
        </span>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-5">
        <p className="text-sm text-text-secondary whitespace-pre-wrap">{submission.message}</p>
      </div>

      <div className="grid lg:grid-cols-[220px_1fr_auto] gap-4 items-end">
        <div>
          <label className="block text-sm font-semibold mb-2" style={{ color: '#001078' }}>Status</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)} className="w-full px-4 py-2.5 border border-gray-200 rounded-md bg-white">
            <option value="new">New</option>
            <option value="under_review">Under Review</option>
            <option value="site_visit_required">Site Visit Required</option>
            <option value="quotation_in_preparation">Quotation in Preparation</option>
            <option value="quoted">Quoted</option>
            <option value="negotiating">Negotiating</option>
            <option value="awarded">Awarded</option>
            <option value="lost">Lost</option>
            <option value="archived">Archived</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2" style={{ color: '#001078' }}>Internal Notes</label>
          <textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={3} className="w-full px-4 py-2.5 border border-gray-200 rounded-md resize-none" placeholder="Add private admin notes..." />
        </div>
        <button onClick={handleSave} disabled={saving} className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-white font-semibold rounded-md disabled:opacity-60" style={{ backgroundColor: '#001078' }}>
          <Save className="w-4 h-4" /> {saving ? 'Saving...' : 'Save'}
        </button>
      </div>
    </div>
  );
}