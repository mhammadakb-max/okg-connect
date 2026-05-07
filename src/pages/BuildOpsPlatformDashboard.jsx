import React from 'react';
import BuildOpsShell from '@/components/saas/BuildOpsShell';
import SaasMetricCard from '@/components/saas/SaasMetricCard';
import FeatureMatrix from '@/components/saas/FeatureMatrix';

const metrics = [
  ['Registered Companies', '1', 'OKG is the first tenant', 'amber'], ['Active Companies', '1', 'Paid/trial accounts', 'green'], ['MRR', 'AED 0', 'Billing placeholder', 'slate'], ['Total Users', '1', 'Admin users', 'slate'], ['Projects Created', '0', 'Across all tenants', 'slate'], ['Documents Stored', '0', 'Secure vault records', 'slate'], ['Worker Shares', '0', 'Inter-company packages', 'slate'], ['Suspicious Alerts', '0', 'Security monitoring', 'green'],
];

export default function BuildOpsPlatformDashboard() {
  return (
    <BuildOpsShell title="Platform Owner Dashboard" intro="SaaS-wide control centre for companies, subscriptions, usage, security, support and network growth.">
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        {metrics.map(([label, value, note, tone]) => <SaasMetricCard key={label} label={label} value={value} note={note} tone={tone} />)}
      </div>
      <FeatureMatrix groups={[
        { title: 'SaaS Controls', items: ['Company registration and suspension', 'Trial, paid, suspended and cancelled status', 'Manual activation, coupons and plan limits', 'Support ticket and failed payment monitoring'] },
        { title: 'Security Oversight', items: ['Audit logs for serious actions', 'Device history placeholders', 'Suspicious activity alerts', 'Data export and delete request controls'] },
        { title: 'Network Intelligence', items: ['Company-to-company document shares', 'RFQ and work-order activity', 'High-usage companies', 'Trial ending soon and usage limits'] },
      ]} />
    </BuildOpsShell>
  );
}