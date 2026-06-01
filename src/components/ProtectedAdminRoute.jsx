import { useEffect } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '@/lib/AuthContext';
import { base44 } from '@/api/base44Client';

const allowedRoles = ['admin', 'Super Admin', 'Finance Admin', 'Operations Manager', 'Project Manager', 'HR Admin'];
const SESSION_LIMIT_MS = 8 * 60 * 60 * 1000;

export default function ProtectedAdminRoute() {
  const { user, isAuthenticated, isLoadingAuth, authChecked } = useAuth();
  const location = useLocation();

  useEffect(() => {
    let meta = document.head.querySelector('meta[name="robots"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'robots';
      document.head.appendChild(meta);
    }
    meta.content = 'noindex, nofollow';
  }, []);

  if (isLoadingAuth || !authChecked) {
    return <div className="fixed inset-0 flex items-center justify-center bg-white"><div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin" /></div>;
  }

  if (!isAuthenticated) {
    base44.auth.redirectToLogin(window.location.href);
    return null;
  }

  const unlockedAt = Number(sessionStorage.getItem('okg_admin_portal_unlocked_at') || 0);
  const unlocked = sessionStorage.getItem('okg_admin_portal_unlocked') === 'true' && Date.now() - unlockedAt < SESSION_LIMIT_MS;

  if (!allowedRoles.includes(user?.role) && user?.email !== 'omerkhalfangc@gmail.com') {
    return <div className="min-h-screen flex items-center justify-center px-4 text-center bg-white"><div className="max-w-md rounded-2xl border border-border p-8 shadow-sm"><p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">OKG Operations Portal</p><h1 className="text-2xl font-extrabold mb-3 text-primary">Access denied</h1><p className="text-muted-foreground">This private portal is only available to authorised OKG users.</p></div></div>;
  }

  if (!unlocked) {
    sessionStorage.removeItem('okg_admin_portal_unlocked');
    sessionStorage.removeItem('okg_admin_portal_unlocked_at');
    return <Navigate to="/portal" replace state={{ from: location.pathname }} />;
  }

  return <Outlet />;
}