import React from 'react';
import BuildOpsShell from '@/components/saas/BuildOpsShell';
import FeatureMatrix from '@/components/saas/FeatureMatrix';

export default function BuildOpsSecurity() {
  return (
    <BuildOpsShell title="Security, Audit Logs & Data Protection" intro="Security and legal control centre for privacy, document sharing, consent tracking, audit logs, soft delete and access revocation.">
      <FeatureMatrix groups={[
        { title: 'Policies', items: ['Privacy Policy', 'Terms of Service', 'Data Protection Policy', 'Worker Document Sharing Policy', 'Data Processing Agreement placeholder'] },
        { title: 'Controls', items: ['Export company data', 'Delete account request', 'Access logs', 'Revoke shared access', 'Consent tracking and watermarking'] },
        { title: 'Audit Events', items: ['Login and failed login', 'Document uploaded/shared/viewed/downloaded/revoked', 'Worker approved', 'Timesheet edited', 'Invoice deleted', 'Subscription changed'] },
      ]} />
    </BuildOpsShell>
  );
}