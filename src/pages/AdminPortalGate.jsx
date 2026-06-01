import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { base44 } from '@/api/base44Client';
import { Lock, ShieldCheck, LayoutDashboard, FolderKanban, ReceiptText } from 'lucide-react';

export default function AdminPortalGate() {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await base44.functions.invoke('verifyAdminPortalPassword', { password });
      sessionStorage.setItem('okg_admin_portal_unlocked', 'true');
      sessionStorage.setItem('okg_admin_portal_unlocked_at', String(Date.now()));

      const isAuthenticated = await base44.auth.isAuthenticated();
      if (!isAuthenticated) {
        base44.auth.redirectToLogin(`${window.location.origin}/portal/dashboard`);
        return;
      }

      navigate('/portal/dashboard');
    } catch {
      setError('Incorrect password. Please try again.');
    }

    setLoading(false);
  };

  return (
    <section className="min-h-[78vh] bg-bg-light border-t border-gray-200 px-4 py-12 md:py-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.15fr_0.85fr] gap-8 items-stretch">
        <div className="relative overflow-hidden rounded-3xl bg-navy p-8 md:p-10 text-white shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(248,184,88,0.28),transparent_22rem)]" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-2 text-xs font-bold uppercase tracking-widest text-gold mb-8">
              <ShieldCheck className="w-4 h-4" /> OKG Operations Portal
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">Private operations portal for OKG authorised users.</h1>
            <p className="text-white/75 max-w-2xl leading-relaxed mb-8">A private operations portal built for enquiry tracking, client CRM, quotations, invoices, documents, labour attendance and construction reporting.</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { Icon: LayoutDashboard, label: 'Live Dashboard', value: 'KPIs' },
                { Icon: FolderKanban, label: 'Projects', value: 'Workflow' },
                { Icon: ReceiptText, label: 'Invoices', value: 'Finance' },
              ].map(({ Icon, label, value }) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/10 p-4">
                  <Icon className="w-5 h-5 text-gold mb-3" />
                  <p className="text-sm font-bold">{label}</p>
                  <p className="text-xs text-white/60">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="w-full bg-white border border-gray-200 rounded-3xl p-8 shadow-xl flex flex-col justify-center">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-gold">
            <Lock className="w-6 h-6 text-navy" />
          </div>
          <p className="text-xs font-bold uppercase tracking-widest text-text-secondary mb-2">Private Admin Access</p>
          <h2 className="text-2xl font-extrabold mb-3 text-navy">Enter portal password</h2>
          <p className="text-sm text-text-secondary mb-6">Unlock the OKG admin portal, then sign in with an approved admin account.</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoFocus
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20"
            placeholder="Password"
          />
          {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
          <button disabled={loading} className="mt-6 w-full px-6 py-3 rounded-xl bg-navy text-white font-semibold disabled:opacity-60 hover:bg-navy/90 transition-colors">
            {loading ? 'Checking...' : 'Unlock Admin Portal'}
          </button>
        </form>
      </div>
    </section>
  );
}