import React from 'react';
import BuildOpsSidebar from './BuildOpsSidebar';
import { Search, Bell, Building2 } from 'lucide-react';

export default function BuildOpsShell({ title, intro, children }) {
  return (
    <div className="min-h-screen bg-slate-100 lg:flex">
      <BuildOpsSidebar />
      <main className="flex-1 min-w-0">
        <header className="sticky top-0 z-20 bg-white/95 backdrop-blur border-b border-slate-200">
          <div className="px-4 md:px-8 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500">BuildOps Network / OKG Building Contracting</p>
              <h1 className="text-2xl md:text-3xl font-extrabold text-slate-950">{title}</h1>
            </div>
            <div className="flex items-center gap-2">
              <div className="hidden md:flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500 min-w-64">
                <Search className="w-4 h-4" /> Global search
              </div>
              <button className="h-10 w-10 rounded-xl border border-slate-200 bg-white flex items-center justify-center"><Bell className="w-4 h-4" /></button>
              <button className="h-10 rounded-xl border border-slate-200 bg-white px-3 flex items-center gap-2 text-sm font-bold"><Building2 className="w-4 h-4" /> Switch Company</button>
            </div>
          </div>
        </header>
        <section className="px-4 md:px-8 py-6 md:py-8">
          {intro && <p className="text-slate-600 max-w-4xl mb-6">{intro}</p>}
          {children}
        </section>
      </main>
    </div>
  );
}