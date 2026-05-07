import React from 'react';
import BuildOpsShell from '@/components/saas/BuildOpsShell';
import WorkflowBoard from '@/components/saas/WorkflowBoard';
import FeatureMatrix from '@/components/saas/FeatureMatrix';

export default function BuildOpsWorkerSharing() {
  return (
    <BuildOpsShell title="Worker Document Sharing & Compliance Packs" intro="Consent-based, revocable company-to-company worker document exchange for manpower suppliers, subcontractors and main contractors.">
      <WorkflowBoard title="Worker Approval Workflow" columns={[
        { title: 'Supplier', cards: ['Select workers', 'Attach documents', 'Confirm consent', 'Send compliance pack'] },
        { title: 'Main Contractor', cards: ['View shared profile', 'Review documents', 'Request missing items', 'Approve / reject worker'] },
        { title: 'Site', cards: ['Issue QR pass', 'Complete induction', 'Assign to project', 'Supervisor check-in'] },
        { title: 'Audit', cards: ['Viewed by user', 'Downloaded by user', 'Access expiry', 'Revoke anytime'] },
      ]} />
      <div className="mt-6">
        <FeatureMatrix groups={[
          { title: 'Privacy Rules', items: ['No public worker document access', 'Consent checkbox before sharing', 'Data protection notice required', 'Role-based access and expiry date required'] },
          { title: 'Compliance Pack', items: ['Worker summary, passport, visa, Emirates ID and labour card', 'Insurance, NOC, safety induction and trade certificate', 'PDF pack, watermark, cover page and missing warning placeholders'] },
          { title: 'Receiver Actions', items: ['Approve worker for site', 'Reject or request missing document', 'Mark compliant/non-compliant', 'Assign worker to project after approval'] },
        ]} />
      </div>
    </BuildOpsShell>
  );
}