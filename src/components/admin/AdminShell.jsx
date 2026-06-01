import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bot } from 'lucide-react';
import { adminModules } from '@/components/admin/os/adminModules';

const links = adminModules;

export default function AdminShell({ title, intro, children }) {
  const location = useLocation();

  return (
    <section className="bg-bg-light border-t border-gray-200 py-8 md:py-10 min-h-[75vh]">
      <div className="max-w-[92rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 rounded-3xl bg-white border border-gray-200 p-6 md:p-8 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-text-secondary mb-2">OKG Operations Portal</p>
              <h1 className="text-3xl md:text-4xl font-extrabold" style={{ color: '#001078' }}>{title}</h1>
              {intro && <p className="mt-3 text-text-secondary max-w-2xl">{intro}</p>}
            </div>
            <div className="max-h-40 overflow-y-auto rounded-2xl border border-gray-200 bg-bg-light p-2 grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-2">
             {links.map(({ path, label, Icon }) => {
               const active = location.pathname === path;
               return (
                 <Link key={path} to={path} className={`inline-flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-bold transition-colors ${active ? 'bg-navy text-white' : 'bg-white text-text-secondary hover:bg-gray-100'}`}>
                   <Icon className="w-4 h-4" />
                   {label}
                 </Link>
               );
             })}
             <span className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-bold bg-gold/20 text-navy">
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