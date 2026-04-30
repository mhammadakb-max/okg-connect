import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { base44 } from '@/api/base44Client';
import AdminShell from '@/components/admin/AdminShell';
import AdminStatGrid from '@/components/admin/AdminStatGrid';
import AdminAiPanel from '@/components/admin/AdminAiPanel';
import AdminExportButtons from '@/components/admin/AdminExportButtons';
import { ArrowRight } from 'lucide-react';

const money = (value) => new Intl.NumberFormat('en-AE', { style: 'currency', currency: 'AED', maximumFractionDigits: 0 }).format(value || 0);

export default function AdminDashboard() {
  const [data, setData] = useState({ records: [], submissions: [], profiles: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const [finance, enquiries, subcontractors] = await Promise.all([
        base44.functions.invoke('adminListPaymentRecords', {}),
        base44.functions.invoke('adminListContactSubmissions', {}),
        base44.functions.invoke('adminListSubcontractors', {}),
      ]);
      setData({
        records: finance.data.records || [],
        submissions: enquiries.data.submissions || [],
        profiles: subcontractors.data.profiles || [],
      });
      setLoading(false);
    };
    load();
  }, []);

  const income = data.records.filter((r) => r.record_type === 'income').reduce((sum, r) => sum + Number(r.amount || 0), 0);
  const expenses = data.records.filter((r) => r.record_type === 'expense').reduce((sum, r) => sum + Number(r.amount || 0), 0);
  const pending = data.records.filter((r) => r.status === 'pending').reduce((sum, r) => sum + Number(r.amount || 0), 0);
  const newEnquiries = data.submissions.filter((s) => s.status === 'new').length;

  const stats = [
    { label: 'Net Position', value: money(income - expenses), color: income - expenses >= 0 ? '#15803d' : '#b91c1c' },
    { label: 'Pending Payments', value: money(pending), color: '#b45309' },
    { label: 'New Enquiries', value: newEnquiries, note: `${data.submissions.length} total enquiries` },
    { label: 'Subcontractors', value: data.profiles.length, note: 'Registered profiles' },
  ];

  return (
    <AdminShell title="Admin Dashboard" intro="A central view for finance, enquiries, subcontractors, exports and AI support.">
      {loading ? (
        <div className="flex justify-center py-16"><div className="w-8 h-8 border-4 border-gray-200 border-t-navy rounded-full animate-spin" /></div>
      ) : (
        <>
          <AdminStatGrid stats={stats} />
          <AdminExportButtons records={data.records} />
          <div className="grid lg:grid-cols-[1fr_0.9fr] gap-8 mb-8">
            <AdminAiPanel />
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-extrabold mb-4" style={{ color: '#001078' }}>Quick Actions</h2>
              <div className="grid gap-3">
                {[
                  { to: '/admin/finance', label: 'Add income or expense record' },
                  { to: '/admin/contact-submissions', label: 'Review customer enquiries' },
                  { to: '/admin/subcontractors', label: 'Review subcontractor registrations' },
                ].map((action) => (
                  <Link key={action.to} to={action.to} className="flex items-center justify-between rounded-xl border border-gray-200 p-4 text-sm font-semibold hover:bg-gray-50">
                    {action.label}
                    <ArrowRight className="w-4 h-4 text-text-secondary" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </AdminShell>
  );
}