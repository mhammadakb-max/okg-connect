import React, { useState } from 'react';

const initialForm = {
  record_type: 'income',
  status: 'paid',
  amount: '',
  payment_date: new Date().toISOString().slice(0, 10),
  description: '',
  category: '',
  project_name: '',
  client_or_vendor: '',
  payment_method: '',
  notes: '',
};

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="text-xs font-bold uppercase tracking-widest text-text-secondary">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

export default function PaymentRecordForm({ onSubmit, saving }) {
  const [form, setForm] = useState(initialForm);
  const update = (field, value) => setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSubmit(form);
    setForm(initialForm);
  };

  const inputClass = "w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20";

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm mb-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        <Field label="Type">
          <select className={inputClass} value={form.record_type} onChange={(e) => update('record_type', e.target.value)}>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </Field>
        <Field label="Status">
          <select className={inputClass} value={form.status} onChange={(e) => update('status', e.target.value)}>
            <option value="paid">Paid / Received</option>
            <option value="pending">Pending</option>
          </select>
        </Field>
        <Field label="Amount">
          <input className={inputClass} type="number" min="0" step="0.01" required value={form.amount} onChange={(e) => update('amount', e.target.value)} />
        </Field>
        <Field label="Date">
          <input className={inputClass} type="date" required value={form.payment_date} onChange={(e) => update('payment_date', e.target.value)} />
        </Field>
        <Field label="Description">
          <input className={inputClass} required value={form.description} onChange={(e) => update('description', e.target.value)} placeholder="e.g. Villa project payment" />
        </Field>
        <Field label="Category">
          <input className={inputClass} value={form.category} onChange={(e) => update('category', e.target.value)} placeholder="Materials, labour, client payment" />
        </Field>
        <Field label="Project">
          <input className={inputClass} value={form.project_name} onChange={(e) => update('project_name', e.target.value)} placeholder="Project name" />
        </Field>
        <Field label="Client / Vendor">
          <input className={inputClass} value={form.client_or_vendor} onChange={(e) => update('client_or_vendor', e.target.value)} placeholder="Name" />
        </Field>
      </div>
      <div className="grid md:grid-cols-[1fr_2fr] gap-5 mt-5">
        <Field label="Payment Method">
          <input className={inputClass} value={form.payment_method} onChange={(e) => update('payment_method', e.target.value)} placeholder="Bank, cash, cheque" />
        </Field>
        <Field label="Notes">
          <input className={inputClass} value={form.notes} onChange={(e) => update('notes', e.target.value)} placeholder="Optional admin notes" />
        </Field>
      </div>
      <div className="mt-6 flex justify-end">
        <button disabled={saving} className="px-6 py-3 rounded-md text-white font-semibold disabled:opacity-60" style={{ backgroundColor: '#001078' }}>
          {saving ? 'Saving...' : 'Add Record'}
        </button>
      </div>
    </form>
  );
}