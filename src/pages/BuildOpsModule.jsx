import React from 'react';
import BuildOpsShell from '@/components/saas/BuildOpsShell';
import FeatureMatrix from '@/components/saas/FeatureMatrix';
import WorkflowBoard from '@/components/saas/WorkflowBoard';

const moduleContent = {
  companies: { title: 'Companies / Tenants', intro: 'Manage unlimited construction companies, profiles, verification, subscriptions, users and public mini websites.', groups: [{ title: 'Company Account', items: ['Logo, trade licence, VAT/TRN, address and bank details', 'Company type and services offered', 'Licence and insurance document vault', 'Subscription plan and usage limits'] }, { title: 'Access', items: ['Company users and roles', 'Company switcher placeholder', 'Permissions for view, create, edit, approve, export and share', 'White-label branding settings'] }] },
  workers: { title: 'Worker Document Vault', intro: 'Secure employee and labour compliance system with private document vaults and approval workflows.', groups: [{ title: 'Worker Profile', items: ['Worker ID, photo, nationality, visa and Emirates ID', 'Trade, skill level, rates, accommodation and transport', 'Assigned company, project, current site and status'] }, { title: 'Document Vault', items: ['Passport, visa, Emirates ID, labour card and insurance', 'Expiry reminders, renewal reminders and approval status', 'Download permission, sharing permission and watermark option'] }] },
  network: { title: 'B2B Company Network', intro: 'A secure construction network where companies can connect, share documents, issue RFQs and collaborate on projects.', groups: [{ title: 'Company Profiles', items: ['Verified badge placeholder, rating placeholder and services', 'Request quotation, manpower or documents', 'Trusted and blocked company lists'] }, { title: 'Collaboration', items: ['Project invitations and subcontract scopes', 'Inter-company work orders and payment records', 'Shared progress, attendance and worker compliance packs'] }] },
  documents: { title: 'Document Management', intro: 'Company, worker, project, invoice, quotation and compliance document control with sharing and expiry workflows.', groups: [{ title: 'Controls', items: ['Upload, preview, version history and tags', 'Approval status, folder structure and missing checklist', 'OCR and AI document reading placeholders'] }, { title: 'Sharing', items: ['Share with company or user', 'Time-limited access and revoke sharing', 'Watermark and download permission controls'] }] },
  attendance: { title: 'Attendance & Time Logs', intro: 'Advanced time logging for supervisors, workers, QR check-ins, approvals and invoiceable timesheets.', groups: [{ title: 'Attendance Methods', items: ['Manual, supervisor and QR check-in', 'GPS, geofence, face recognition and biometric placeholders', 'Photo proof and edit reason tracking'] }, { title: 'Approvals', items: ['Daily, weekly and monthly timesheets', 'Supervisor and client approval flows', 'Disputed hours and locked approved timesheets'] }] },
  marketplace: { title: 'Construction Marketplaces', intro: 'Future-ready labour, lead, material supplier and equipment rental marketplace sections.', groups: [{ title: 'Labour Marketplace', items: ['List available workers and manpower requests', 'Filter by trade, location, compliance and rate', 'Receive bids, approve workers and create work orders'] }, { title: 'Future Markets', items: ['Construction lead marketplace', 'Material quotation comparison placeholder', 'Equipment rental booking placeholder'] }] },
  integrations: { title: 'API & Integration Settings', intro: 'Clean placeholders for future integrations; no real API is active until credentials are provided.', groups: [{ title: 'Communication', items: ['WhatsApp API, Email SMTP, SMS and push placeholders', 'Google Maps, Drive, Dropbox and OneDrive placeholders', 'E-signature and OCR placeholders'] }, { title: 'Advanced', items: ['AI document reader placeholder', 'Biometric and face recognition placeholders', 'Accounting and payroll integrations'] }] },
};

export default function BuildOpsModule({ type = 'companies' }) {
  const content = moduleContent[type] || moduleContent.companies;
  return (
    <BuildOpsShell title={content.title} intro={content.intro}>
      <FeatureMatrix groups={content.groups} />
      <div className="mt-6">
        <WorkflowBoard title="Operating Workflow" columns={[
          { title: 'Create', cards: ['Tenant record', 'Role permissions', 'Linked project/company'] },
          { title: 'Review', cards: ['Approval queue', 'Missing information', 'Internal notes'] },
          { title: 'Share', cards: ['Controlled access', 'Watermark and expiry', 'Audit trail'] },
          { title: 'Report', cards: ['PDF / Excel / CSV', 'Dashboard metrics', 'AI placeholder'] },
        ]} />
      </div>
    </BuildOpsShell>
  );
}