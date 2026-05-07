import React from 'react';
import BuildOpsShell from '@/components/saas/BuildOpsShell';

const plans = [
  ['Starter', '3 users', ['20 clients', '20 projects', '50 quotations/month', 'Basic invoices', 'Basic document storage']],
  ['Professional', '10 users', ['Unlimited clients/projects', 'Invoices', 'Labour attendance', 'Timesheets', 'PDF exports']],
  ['Business Network', '25 users', ['Company sharing', 'Worker document exchange', 'RFQs', 'Work orders', 'Inter-company invoices', 'Labour marketplace']],
  ['Enterprise', 'Unlimited users', ['Multiple branches', 'White-label', 'API access', 'Custom permissions', 'Audit logs', 'Priority support']],
];

export default function BuildOpsPlans() {
  return (
    <BuildOpsShell title="SaaS Plans & Billing" intro="Subscription plan structure, billing controls, usage limits, trial countdown and manual platform-admin activation.">
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
        {plans.map(([name, users, features]) => (
          <div key={name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-extrabold text-slate-950">{name}</h3>
            <p className="text-sm text-slate-500 mt-1">{users}</p>
            <div className="h-px bg-slate-200 my-5" />
            <ul className="space-y-2 text-sm text-slate-600">{features.map((f) => <li key={f}>• {f}</li>)}</ul>
            <button className="mt-6 w-full rounded-xl bg-slate-950 text-white py-3 font-bold">Plan Placeholder</button>
          </div>
        ))}
      </div>
    </BuildOpsShell>
  );
}