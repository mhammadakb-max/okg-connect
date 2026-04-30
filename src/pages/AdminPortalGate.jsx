import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { base44 } from '@/api/base44Client';
import { Lock } from 'lucide-react';

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
      navigate('/admin/dashboard');
    } catch {
      setError('Incorrect password. Please try again.');
    }

    setLoading(false);
  };

  return (
    <section className="min-h-[70vh] bg-gray-50 border-t border-gray-200 flex items-center justify-center px-4 py-16">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-8 shadow-xl">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: '#F8B858' }}>
          <Lock className="w-6 h-6" style={{ color: '#001078' }} />
        </div>
        <p className="text-xs font-bold uppercase tracking-widest text-text-secondary mb-2">Private Admin Access</p>
        <h1 className="text-2xl font-extrabold mb-3" style={{ color: '#001078' }}>Enter admin password</h1>
        <p className="text-sm text-text-secondary mb-6">Sign in using omerkhalfangc@gmail.com, then enter the admin password.</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoFocus
          className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20"
          placeholder="Password"
        />
        {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
        <button disabled={loading} className="mt-6 w-full px-6 py-3 rounded-md text-white font-semibold disabled:opacity-60" style={{ backgroundColor: '#001078' }}>
          {loading ? 'Checking...' : 'Unlock Admin Portal'}
        </button>
      </form>
    </section>
  );
}