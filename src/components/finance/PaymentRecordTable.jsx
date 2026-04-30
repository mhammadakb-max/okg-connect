import React from 'react';
import { Trash2 } from 'lucide-react';

const formatCurrency = (value) => new Intl.NumberFormat('en-AE', {
  style: 'currency',
  currency: 'AED',
  maximumFractionDigits: 0,
}).format(value || 0);

export default function PaymentRecordTable({ records, onDelete }) {
  if (records.length === 0) {
    return <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center text-text-secondary">No payment records yet.</div>;
  }

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-left text-xs uppercase tracking-widest text-text-secondary">
            <tr>
              <th className="px-5 py-4">Date</th>
              <th className="px-5 py-4">Type</th>
              <th className="px-5 py-4">Details</th>
              <th className="px-5 py-4">Project</th>
              <th className="px-5 py-4">Status</th>
              <th className="px-5 py-4 text-right">Amount</th>
              <th className="px-5 py-4"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {records.map((record) => (
              <tr key={record.id} className="hover:bg-gray-50/70">
                <td className="px-5 py-4 whitespace-nowrap">{record.payment_date}</td>
                <td className="px-5 py-4">
                  <span className={`rounded-full px-3 py-1 text-xs font-bold ${record.record_type === 'income' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                    {record.record_type}
                  </span>
                </td>
                <td className="px-5 py-4 min-w-64">
                  <p className="font-semibold text-text-primary">{record.description}</p>
                  <p className="text-xs text-text-secondary">{record.category || 'Uncategorised'}{record.client_or_vendor ? ` • ${record.client_or_vendor}` : ''}</p>
                </td>
                <td className="px-5 py-4 text-text-secondary">{record.project_name || '-'}</td>
                <td className="px-5 py-4">
                  <span className={`rounded-full px-3 py-1 text-xs font-bold ${record.status === 'paid' ? 'bg-navy/5 text-navy' : 'bg-amber-50 text-amber-700'}`}>
                    {record.status || 'paid'}
                  </span>
                </td>
                <td className={`px-5 py-4 text-right font-bold ${record.record_type === 'income' ? 'text-green-700' : 'text-red-700'}`}>
                  {record.record_type === 'expense' ? '-' : ''}{formatCurrency(Number(record.amount || 0))}
                </td>
                <td className="px-5 py-4 text-right">
                  <button onClick={() => onDelete(record.id)} className="p-2 rounded-md text-red-600 hover:bg-red-50" aria-label="Delete record">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}