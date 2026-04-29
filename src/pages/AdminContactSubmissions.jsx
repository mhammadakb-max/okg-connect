import React, { useEffect, useMemo, useState } from 'react';
import { base44 } from '@/api/base44Client';
import PageHero from '@/components/shared/PageHero';
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
        setError('Please sign in as an admin to view contact submissions.');
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
    <>
      <PageHero title="Admin Contact Dashboard" intro="View enquiries from the website, update their status and keep private internal notes." eyebrow="Admin" breadcrumb="Contact Submissions" />
      <section className="bg-gray-50 border-t border-gray-200 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
      </section>
    </>
  );
}