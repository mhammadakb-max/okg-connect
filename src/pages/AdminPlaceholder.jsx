import React from 'react';
import AdminShell from '@/components/admin/AdminShell';
import AdminMetricCard from '@/components/admin/os/AdminMetricCard';
import { CalendarDays, Download, Filter, Search } from 'lucide-react';

const moduleCopy = {
  reports: ['Reports', 'Filter enquiry, quotation, project, invoice, labour and subcontractor reports by date, client, project and status.'],
  roles: ['Admin User Roles', 'Role-based access area for Super Admin, Manager, Accountant, Supervisor and Sales/Admin Staff permissions.'],
  notifications: ['Notifications & Reminders', 'Track follow-ups, overdue invoices, document expiries, delayed projects, task deadlines and payment reminders.'],
  settings: ['Admin Settings', 'Manage company profile, logo, address, VAT/TRN, bank details, default terms, email templates and user settings.'],
  cms: ['Website CMS', 'Control homepage text, services, about content, contact details, gallery, testimonials, FAQ and SEO content.'],
  seo: ['SEO Admin Panel', 'Manage meta titles, descriptions, focus keywords, slugs, image alt text, Open Graph data, sitemap and robots settings.'],
};

export default function AdminPlaceholder({ type }) {
  const [title, intro] = moduleCopy[type] || ['Admin Module', 'Premium admin module structure.'];
  return (
    <AdminShell title={title} intro={intro}>
      <div className="grid gap-4 md:grid-cols-3 mb-6">
        <AdminMetricCard label="Status" value="Ready" note="Structure prepared for admin workflow" />
        <AdminMetricCard label="Access" value="Role Controlled" tone="gold" note="Designed for permission-based use" />
        <AdminMetricCard label="Exports" value="PDF / Excel" note="Report export area" />
      </div>
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="grid gap-4 md:grid-cols-3">
          {[Search, Filter, Download].map((Icon, index) => (
            <div key={index} className="rounded-2xl border border-gray-200 bg-bg-light p-5">
              <Icon className="mb-4 h-5 w-5 text-navy" />
              <p className="font-extrabold text-text-primary">{['Search and filter records', 'Apply date/status controls', 'Download professional reports'][index]}</p>
              <p className="mt-2 text-sm text-text-secondary">Clean, corporate interface prepared for OKG admin staff.</p>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-2xl border border-dashed border-gray-300 p-6 text-sm text-text-secondary">
          <CalendarDays className="mb-3 h-5 w-5 text-gold" />
          This module is structured for the requested premium workflow and can be expanded with approval steps, calendars, audit logs and templates.
        </div>
      </div>
    </AdminShell>
  );
}