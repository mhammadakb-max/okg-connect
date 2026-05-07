import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Building2, LayoutDashboard, Users, FolderKanban, HardHat, Clock3, FileText, Share2, Network, ClipboardList, ReceiptText, Camera, CheckSquare, CalendarDays, BarChart3, MessageSquare, Settings, ShieldCheck, CreditCard, Headphones, Store, Truck, Package, Wrench } from 'lucide-react';

const sections = [
  { title: 'Platform Admin', items: [
    { label: 'Platform Dashboard', path: '/admin/platform', Icon: ShieldCheck },
    { label: 'Companies', path: '/admin/companies', Icon: Building2 },
    { label: 'Subscriptions', path: '/admin/subscriptions', Icon: CreditCard },
    { label: 'Support Tickets', path: '/admin/support', Icon: Headphones },
  ]},
  { title: 'Company Portal', items: [
    { label: 'Dashboard', path: '/admin/dashboard', Icon: LayoutDashboard },
    { label: 'Enquiries', path: '/admin/contact-submissions', Icon: FileText },
    { label: 'Clients', path: '/admin/clients', Icon: Users },
    { label: 'Projects', path: '/admin/projects', Icon: FolderKanban },
    { label: 'Workers', path: '/admin/workers', Icon: HardHat },
    { label: 'Attendance', path: '/admin/attendance', Icon: Clock3 },
    { label: 'Timesheets', path: '/admin/timesheets', Icon: ClipboardList },
    { label: 'Documents', path: '/admin/documents', Icon: FileText },
    { label: 'Document Requests', path: '/admin/document-requests', Icon: Share2 },
    { label: 'Company Network', path: '/admin/network', Icon: Network },
    { label: 'RFQs', path: '/admin/rfqs', Icon: ClipboardList },
    { label: 'Quotations', path: '/admin/quotations', Icon: ClipboardList },
    { label: 'Work Orders', path: '/admin/work-orders', Icon: CheckSquare },
    { label: 'BOQ / Measurements', path: '/admin/boq', Icon: FileText },
    { label: 'Invoices', path: '/admin/invoices', Icon: ReceiptText },
    { label: 'Site Photos', path: '/admin/photos', Icon: Camera },
    { label: 'Tasks', path: '/admin/tasks', Icon: CheckSquare },
    { label: 'Calendar', path: '/admin/calendar', Icon: CalendarDays },
    { label: 'Reports', path: '/admin/reports', Icon: BarChart3 },
    { label: 'Messages', path: '/admin/messages', Icon: MessageSquare },
    { label: 'Settings', path: '/admin/settings', Icon: Settings },
  ]},
  { title: 'Marketplace', items: [
    { label: 'Labour Marketplace', path: '/admin/labour-marketplace', Icon: Store },
    { label: 'Lead Marketplace', path: '/admin/lead-marketplace', Icon: Store },
    { label: 'Material Suppliers', path: '/admin/material-suppliers', Icon: Package },
    { label: 'Equipment Rental', path: '/admin/equipment-rental', Icon: Truck },
    { label: 'Integrations', path: '/admin/integrations', Icon: Wrench },
  ]},
];

export default function BuildOpsSidebar() {
  const location = useLocation();
  return (
    <aside className="bg-slate-950 text-white lg:sticky lg:top-0 lg:h-screen lg:w-80 overflow-y-auto">
      <div className="p-5 border-b border-white/10">
        <p className="text-xs uppercase tracking-[0.25em] text-amber-300 font-bold">BuildOps Network</p>
        <h2 className="text-xl font-extrabold mt-1">Construction OS</h2>
        <p className="text-xs text-white/55 mt-2">Tenant: OKG Building Contracting</p>
      </div>
      <nav className="p-4 space-y-6">
        {sections.map((section) => (
          <div key={section.title}>
            <p className="px-3 mb-2 text-[11px] uppercase tracking-widest text-white/40 font-bold">{section.title}</p>
            <div className="space-y-1">
              {section.items.map(({ label, path, Icon }) => {
                const active = location.pathname === path;
                return (
                  <Link key={path} to={path} className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors ${active ? 'bg-amber-300 text-slate-950' : 'text-white/72 hover:bg-white/10 hover:text-white'}`}>
                    <Icon className="w-4 h-4" />
                    {label}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
}