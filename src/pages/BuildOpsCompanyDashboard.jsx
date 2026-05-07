import React from 'react';
import BuildOpsShell from '@/components/saas/BuildOpsShell';
import SaasMetricCard from '@/components/saas/SaasMetricCard';
import WorkflowBoard from '@/components/saas/WorkflowBoard';
import FeatureMatrix from '@/components/saas/FeatureMatrix';

const metrics = [
  ['New Enquiries', '0', 'Awaiting action', 'amber'], ['Active Projects', '0', 'Live sites', 'green'], ['Pending Quotations', '0', 'Draft/sent', 'slate'], ['Overdue Invoices', '0', 'Needs follow-up', 'red'], ['Active Workers', '0', 'Available/assigned', 'slate'], ['Attendance Today', '0%', 'Completion rate', 'slate'], ['Expiring Documents', '0', 'Worker/company docs', 'amber'], ['Profit Estimate', 'AED 0', 'Revenue less costs', 'green'],
];

export default function BuildOpsCompanyDashboard() {
  return (
    <BuildOpsShell title="Company Operating Dashboard" intro="OKG Building Contracting tenant workspace for enquiries, projects, finance, labour, documents, compliance and collaboration.">
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        {metrics.map(([label, value, note, tone]) => <SaasMetricCard key={label} label={label} value={value} note={note} tone={tone} />)}
      </div>
      <div className="grid xl:grid-cols-[1.2fr_0.8fr] gap-6">
        <WorkflowBoard title="Construction Approval Flow" columns={[
          { title: 'Commercial', cards: ['Enquiry received', 'RFQ / quotation sent', 'Quotation accepted', 'Project created'] },
          { title: 'Worker Compliance', cards: ['Worker submitted', 'Documents reviewed', 'Worker approved', 'QR site pass issued'] },
          { title: 'Site Operations', cards: ['Induction completed', 'Attendance logged', 'Work log submitted', 'Measurement approved'] },
          { title: 'Finance', cards: ['Timesheet locked', 'Invoice issued', 'Payment approved', 'Retention tracked'] },
        ]} />
        <FeatureMatrix groups={[{ title: 'Tenant Rules', items: ['Every record includes company_id', 'Shared records use owner_company_id and shared_with_company_id', 'Worker documents are never public', 'Revocable, consent-based document sharing', 'Suspended companies see upgrade/access screen'] }]} />
      </div>
    </BuildOpsShell>
  );
}