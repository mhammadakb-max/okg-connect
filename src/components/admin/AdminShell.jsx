import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BarChart3, Bot, FileText, HardHat, LayoutDashboard } from 'lucide-react';

const links = [
  { to: '/admin/dashboard', label: 'Dashboard', Icon: LayoutDashboard },
  { to: '/admin/finance', label: 'Finance', Icon: BarChart3 },
  { to: '/admin/contact-submissions', label: 'Enquiries', Icon: FileText },
  { to: '/admin/subcontractors', label: 'Subcontractors', Icon: HardHat },
];

export default function AdminShell({ title, intro, children }) {
  const location = useLocation();

  return (
    <section className="bg-gray-50 border-t border-gray-200 py-10 md:py-14 min-h-[75vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 rounded-3xl bg-white border border-gray-200 p-6 md:p-8 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-text-secondary mb-2">OKG Admin Portal</p>
              <h1 className="text-3xl md:text-4xl font-extrabold" style={{ color: '#001078' }}>{title}</h1>
              {intro && <p className="mt-3 text-text-secondary max-w-2xl">{intro}</p>}
            </div>
            <div className="flex flex-wrap gap-2">
              {links.map(({ to, label, Icon }) => {
                const active = location.pathname === to;
                return (
                  <Link key={to} to={to} className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${active ? 'bg-navy text-white' : 'bg-gray-100 text-text-secondary hover:bg-gray-200'}`}>
                    <Icon className="w-4 h-4" />
                    {label}
                  </Link>
                );
              })}
              <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold bg-gold/20 text-navy">
                <Bot className="w-4 h-4" /> AI Ready
              </span>
            </div>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}