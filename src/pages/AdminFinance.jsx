import React, { useEffect, useState } from 'react';
import { base44 } from '@/api/base44Client';
import FinanceSummaryCards from '@/components/finance/FinanceSummaryCards';
import PaymentRecordForm from '@/components/finance/PaymentRecordForm';
import PaymentRecordTable from '@/components/finance/PaymentRecordTable';
import AdminShell from '@/components/admin/AdminShell';
import AdminExportButtons from '@/components/admin/AdminExportButtons';
import AdminAiPanel from '@/components/admin/AdminAiPanel';

export default function AdminFinance() {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const loadRecords = async () => {
    const response = await base44.functions.invoke('adminListPaymentRecords', {});
    setRecords(response.data.records || []);
  };

  useEffect(() => {
    const init = async () => {
      const authed = await base44.auth.isAuthenticated();
      if (!authed) {
        setError('Please sign in as an admin to view payment records.');
        setLoading(false);
        return;
      }
      try {
        await loadRecords();
      } catch {
        setError('Admin access required.');
      }
      setLoading(false);
    };
    init();
  }, []);

  const handleCreate = async (data) => {
    setSaving(true);
    await base44.functions.invoke('adminCreatePaymentRecord', data);
    await loadRecords();
    setSaving(false);
  };

  const handleDelete = async (id) => {
    await base44.functions.invoke('adminDeletePaymentRecord', { id });
    setRecords((prev) => prev.filter((record) => record.id !== id));
  };

  return (
    <AdminShell title="Admin Finance" intro="Track income, expenses, pending payments and profit or loss for OKG projects.">
      {loading ? (
        <div className="flex justify-center py-16"><div className="w-8 h-8 border-4 border-gray-200 border-t-navy rounded-full animate-spin" /></div>
      ) : error ? (
        <div className="bg-white border border-gray-200 rounded-xl p-8 text-center">
          <p className="text-text-secondary mb-5">{error}</p>
          <button onClick={() => base44.auth.redirectToLogin('/admin/finance')} className="px-6 py-3 text-white font-semibold rounded-md" style={{ backgroundColor: '#001078' }}>Admin sign in</button>
        </div>
      ) : (
        <>
          <FinanceSummaryCards records={records} />
          <AdminExportButtons records={records} />
          <div className="mb-8">
            <AdminAiPanel />
          </div>
          <PaymentRecordForm onSubmit={handleCreate} saving={saving} />
          <PaymentRecordTable records={records} onDelete={handleDelete} />
        </>
      )}
    </AdminShell>
  );
}