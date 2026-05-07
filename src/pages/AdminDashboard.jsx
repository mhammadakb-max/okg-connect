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
      const [finance, enquiries, subcontractors, operations] = await Promise.all([
        base44.functions.invoke('adminListPaymentRecords', {}),
        base44.functions.invoke('adminListContactSubmissions', {}),
        base44.functions.invoke('adminListSubcontractors', {}),
        base44.functions.invoke('adminListOperations', {}),
      ]);
      setData({
        records: finance.data.records || [],
        submissions: enquiries.data.submissions || [],
        profiles: subcontractors.data.profiles || [],
        operations: operations.data || {},
      });
      setLoading(false);
    };
    load();
  }, []);

  const income = data.records.filter((r) => r.record_type === 'income').reduce((sum, r) => sum + Number(r.amount || 0), 0);
  const expenses = data.records.filter((r) => r.record_type === 'expense').reduce((sum, r) => sum + Number(r.amount || 0), 0);
  const pending = data.records.filter((r) => r.status === 'pending').reduce((sum, r) => sum + Number(r.amount || 0), 0);
  const newEnquiries = data.submissions.filter((s) => s.status === 'new').length;
  const weekAgo = new Date();
  weekAgo.setDate(weekAgo.getDate() - 7);
  const newThisWeek = data.submissions.filter((s) => new Date(s.created_date) >= weekAgo).length;
  const operations = data.operations || {};
  const activeProjects = (operations.projects || []).filter((p) => ['mobilised', 'in_progress', 'mobilising', 'awarded'].includes(p.status)).length;
  const pendingQuotes = (operations.quotations || []).filter((q) => q.status === 'draft').length;
  const submittedQuotes = (operations.quotations || []).filter((q) => q.status === 'sent').length;
  const approvedQuotes = (operations.quotations || []).filter((q) => q.status === 'approved').length;
  const pendingInvoices = (operations.invoices || []).filter((i) => ['unpaid', 'part_paid', 'overdue'].includes(i.payment_status)).length;
  const estimatedValue = (operations.projects || []).reduce((sum, p) => sum + Number(p.contract_value || 0), 0) + (operations.quotations || []).reduce((sum, q) => sum + Number(q.total_amount || 0), 0);

  const stats = [
    { label: 'Total Enquiries', value: data.submissions.length, note: `${newThisWeek} new this week` },
    { label: 'Active Projects', value: activeProjects, note: `${operations.projects?.length || 0} total projects` },
    { label: 'Pending Quotations', value: pendingQuotes, note: `${submittedQuotes} submitted / ${approvedQuotes} approved` },
    { label: 'Pending Invoices', value: pendingInvoices, note: 'Unpaid, part-paid or overdue' },
    { label: 'Estimated Value', value: money(estimatedValue), note: 'Projects and quotation pipeline' },
    { label: 'New Enquiries', value: newEnquiries, note: 'Awaiting first contact' },
  ];

  return (
    <AdminShell title="OKG Command Dashboard" intro="Premium operating dashboard for enquiries, projects, quotations, invoices, documents, labour and reports.">
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
                  { to: '/admin/projects', label: 'Add Project' },
                  { to: '/admin/quotations', label: 'Create Quotation' },
                  { to: '/admin/clients', label: 'Add Client' },
                  { to: '/admin/documents', label: 'Upload Document' },
                  { to: '/admin/contact-submissions', label: 'View Enquiries' },
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