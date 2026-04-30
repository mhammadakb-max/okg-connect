import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '@/lib/AuthContext';
import { base44 } from '@/api/base44Client';

export default function ProtectedAdminRoute() {
  const { user, isAuthenticated, isLoadingAuth, authChecked } = useAuth();
  const location = useLocation();

  if (isLoadingAuth || !authChecked) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin" />
      </div>
    );
  }

  if (!isAuthenticated) {
    base44.auth.redirectToLogin(window.location.href);
    return null;
  }

  if (user?.role !== 'admin') {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4 text-center bg-white">
        <div className="max-w-md rounded-2xl border border-gray-200 p-8 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-text-secondary mb-2">Private Area</p>
          <h1 className="text-2xl font-extrabold mb-3" style={{ color: '#001078' }}>Admin access required</h1>
          <p className="text-text-secondary">This portal is private and only available to OKG admin users.</p>
        </div>
      </div>
    );
  }

  if (sessionStorage.getItem('okg_admin_portal_unlocked') !== 'true') {
    return <Navigate to="/okg-admin" replace state={{ from: location.pathname }} />;
  }

  return <Outlet />;
}