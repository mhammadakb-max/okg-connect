import React, { useEffect, useState } from 'react';
import { base44 } from '@/api/base44Client';
import PageHero from '@/components/shared/PageHero';
import FinanceSummaryCards from '@/components/finance/FinanceSummaryCards';
import PaymentRecordForm from '@/components/finance/PaymentRecordForm';
import PaymentRecordTable from '@/components/finance/PaymentRecordTable';

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
    <>
      <PageHero title="Admin Finance" intro="Track income, expenses, pending payments and profit or loss for OKG projects." eyebrow="Admin" breadcrumb="Finance" />
      <section className="bg-gray-50 border-t border-gray-200 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <PaymentRecordForm onSubmit={handleCreate} saving={saving} />
              <PaymentRecordTable records={records} onDelete={handleDelete} />
            </>
          )}
        </div>
      </section>
    </>
  );
}