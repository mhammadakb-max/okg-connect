import React from 'react';
import { ArrowDownCircle, ArrowUpCircle, Scale, Clock } from 'lucide-react';

const formatCurrency = (value) => new Intl.NumberFormat('en-AE', {
  style: 'currency',
  currency: 'AED',
  maximumFractionDigits: 0,
}).format(value || 0);

export default function FinanceSummaryCards({ records }) {
  const paidIncome = records.filter((r) => r.record_type === 'income' && r.status === 'paid').reduce((sum, r) => sum + Number(r.amount || 0), 0);
  const paidExpenses = records.filter((r) => r.record_type === 'expense' && r.status === 'paid').reduce((sum, r) => sum + Number(r.amount || 0), 0);
  const pending = records.filter((r) => r.status === 'pending').reduce((sum, r) => sum + Number(r.amount || 0), 0);
  const net = paidIncome - paidExpenses;

  const cards = [
    { label: 'Income Received', value: paidIncome, Icon: ArrowDownCircle, tone: 'text-green-700' },
    { label: 'Expenses Paid', value: paidExpenses, Icon: ArrowUpCircle, tone: 'text-red-700' },
    { label: net >= 0 ? 'Net Profit' : 'Net Loss', value: net, Icon: Scale, tone: net >= 0 ? 'text-green-700' : 'text-red-700' },
    { label: 'Pending Amounts', value: pending, Icon: Clock, tone: 'text-amber-700' },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
      {cards.map(({ label, value, Icon, tone }) => (
        <div key={label} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <p className="text-xs font-bold uppercase tracking-widest text-text-secondary">{label}</p>
            <Icon className={`w-5 h-5 ${tone}`} />
          </div>
          <p className={`text-2xl font-extrabold ${tone}`}>{formatCurrency(value)}</p>
        </div>
      ))}
    </div>
  );
}