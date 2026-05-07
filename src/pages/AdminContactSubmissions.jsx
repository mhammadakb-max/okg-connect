import React, { useEffect, useMemo, useState } from 'react';
import { base44 } from '@/api/base44Client';
import AdminShell from '@/components/admin/AdminShell';
import AdminContactSubmissionCard from '@/components/contact/AdminContactSubmissionCard';

export default function AdminContactSubmissions() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('all');

  const loadSubmissions = async () => {
    const response = await base44.functions.invoke('adminListContactSubmissions', {});
    setSubmissions(response.data.submissions || []);
  };

  useEffect(() => {
    const init = async () => {
      const authed = await base44.auth.isAuthenticated();
      if (!authed) {
        setError('Please sign in as an admin to view enquiries.');
        setLoading(false);
        return;
      }
      try {
        await loadSubmissions();
      } catch {
        setError('Admin access required.');
      }
      setLoading(false);
    };
    init();
  }, []);

  const handleSave = async (id, status, internal_notes) => {
    const response = await base44.functions.invoke('adminUpdateContactSubmission', { id, status, internal_notes });
    setSubmissions((prev) => prev.map((item) => item.id === id ? response.data.submission : item));
  };

  const filteredSubmissions = useMemo(() => {
    if (filter === 'all') return submissions;
    return submissions.filter((submission) => (submission.status || 'new') === filter);
  }, [submissions, filter]);

  return (
    <AdminShell title="Enquiry Management" intro="Manage website enquiries, follow-ups, assigned team members, internal notes and conversion flow.">
          {loading ? (
            <div className="flex justify-center py-16"><div className="w-8 h-8 border-4 border-gray-200 border-t-navy rounded-full animate-spin" /></div>
          ) : error ? (
            <div className="bg-white border border-gray-200 rounded-xl p-8 text-center">
              <p className="text-text-secondary mb-5">{error}</p>
              <button onClick={() => base44.auth.redirectToLogin('/admin/contact-submissions')} className="px-6 py-3 text-white font-semibold rounded-md" style={{ backgroundColor: '#001078' }}>Admin sign in</button>
            </div>
          ) : (
            <>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                <p className="text-sm text-text-secondary">Showing {filteredSubmissions.length} of {submissions.length} submissions</p>
                <select value={filter} onChange={(e) => setFilter(e.target.value)} className="w-full md:w-56 px-4 py-2.5 border border-gray-200 rounded-md bg-white">
                  <option value="all">All statuses</option>
                  <option value="new">New</option>
                  <option value="contacted">Contacted</option>
                  <option value="site_visit_required">Site Visit Required</option>
                  <option value="quotation_sent">Quotation Sent</option>
                  <option value="won">Won</option>
                  <option value="lost">Lost</option>
                  <option value="reviewed">Reviewed</option>
                  <option value="archived">Archived</option>
                </select>
              </div>
              {filteredSubmissions.length === 0 ? (
                <div className="bg-white border border-gray-200 rounded-xl p-8 text-center text-text-secondary">No contact submissions found.</div>
              ) : (
                <div className="space-y-6">
                  {filteredSubmissions.map((submission) => <AdminContactSubmissionCard key={submission.id} submission={submission} onSave={handleSave} />)}
                </div>
              )}
            </>
          )}
    </AdminShell>
  );
}