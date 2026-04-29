import React, { useEffect, useState } from 'react';
import { base44 } from '@/api/base44Client';
import PageHero from '@/components/shared/PageHero';
import SubcontractorCard from '@/components/subcontractors/SubcontractorCard';

export default function AdminSubcontractors() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadProfiles = async () => {
      const authed = await base44.auth.isAuthenticated();
      if (!authed) {
        setLoading(false);
        setError('Please sign in as an admin to view subcontractor registrations.');
        return;
      }
      try {
        const response = await base44.functions.invoke('adminListSubcontractors', {});
        setProfiles(response.data.profiles || []);
      } catch {
        setError('Admin access required.');
      }
      setLoading(false);
    };
    loadProfiles();
  }, []);

  return (
    <>
      <PageHero title="Admin Subcontractor Portal" intro="Review subcontractor registrations submitted through the OKG vendor portal." eyebrow="Admin" breadcrumb="Admin Subcontractors" />
      <section className="bg-gray-50 border-t border-gray-200 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="flex justify-center py-16"><div className="w-8 h-8 border-4 border-gray-200 border-t-navy rounded-full animate-spin" /></div>
          ) : error ? (
            <div className="bg-white border border-gray-200 rounded-xl p-8 text-center">
              <p className="text-text-secondary mb-5">{error}</p>
              <button onClick={() => base44.auth.redirectToLogin('/admin/subcontractors')} className="px-6 py-3 text-white font-semibold rounded-md" style={{ backgroundColor: '#001078' }}>Admin sign in</button>
            </div>
          ) : profiles.length === 0 ? (
            <div className="bg-white border border-gray-200 rounded-xl p-8 text-center text-text-secondary">No subcontractor registrations yet.</div>
          ) : (
            <div className="space-y-6">
              {profiles.map((profile) => <SubcontractorCard key={profile.id} profile={profile} />)}
            </div>
          )}
        </div>
      </section>
    </>
  );
}