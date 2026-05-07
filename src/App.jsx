import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import ProtectedAdminRoute from './components/ProtectedAdminRoute';

import Layout from './components/layout/Layout';
import ScrollToTop from './components/layout/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import PeopleFocus from './pages/PeopleFocus';
import Services from './pages/Services';
import Capabilities from './pages/Capabilities';
import QHSE from './pages/QHSE';
import QualityPolicy from './pages/QualityPolicy';
import HealthSafetyPolicy from './pages/HealthSafetyPolicy';
import EnvironmentalPolicy from './pages/EnvironmentalPolicy';
import SocialCommitment from './pages/SocialCommitment';
import Projects from './pages/Projects';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import SubcontractorPortal from './pages/SubcontractorPortal';
import AdminSubcontractors from './pages/AdminSubcontractors';
import AdminContactSubmissions from './pages/AdminContactSubmissions';
import AdminFinance from './pages/AdminFinance';
import AdminOperations from './pages/AdminOperations';
import AdminDashboard from './pages/AdminDashboard';
import AdminPortalGate from './pages/AdminPortalGate';
import AdminClients from './pages/AdminClients';
import AdminProjects from './pages/AdminProjects';
import AdminQuotations from './pages/AdminQuotations';
import AdminInvoices from './pages/AdminInvoices';
import AdminPlaceholder from './pages/AdminPlaceholder';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      navigateToLogin();
      return null;
    }
  }

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/people-focus" element={<PeopleFocus />} />
        <Route path="/services" element={<Services />} />
        <Route path="/capabilities" element={<Capabilities />} />
        <Route path="/qhse" element={<QHSE />} />
        <Route path="/quality-policy" element={<QualityPolicy />} />
        <Route path="/health-safety-policy" element={<HealthSafetyPolicy />} />
        <Route path="/environmental-policy" element={<EnvironmentalPolicy />} />
        <Route path="/social-commitment" element={<SocialCommitment />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/subcontractor-portal" element={<SubcontractorPortal />} />
        <Route path="/okg-admin" element={<AdminPortalGate />} />
        <Route element={<ProtectedAdminRoute />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/subcontractors" element={<AdminSubcontractors />} />
          <Route path="/admin/contact-submissions" element={<AdminContactSubmissions />} />
          <Route path="/admin/finance" element={<AdminFinance />} />
          <Route path="/admin/operations" element={<AdminOperations />} />
          <Route path="/admin/clients" element={<AdminClients />} />
          <Route path="/admin/projects" element={<AdminProjects />} />
          <Route path="/admin/quotations" element={<AdminQuotations />} />
          <Route path="/admin/invoices" element={<AdminInvoices />} />
          <Route path="/admin/documents" element={<AdminOperations />} />
          <Route path="/admin/attendance" element={<AdminOperations />} />
          <Route path="/admin/boq" element={<AdminPlaceholder type="reports" />} />
          <Route path="/admin/photos" element={<AdminPlaceholder type="reports" />} />
          <Route path="/admin/tasks" element={<AdminOperations />} />
          <Route path="/admin/reports" element={<AdminPlaceholder type="reports" />} />
          <Route path="/admin/roles" element={<AdminPlaceholder type="roles" />} />
          <Route path="/admin/notifications" element={<AdminPlaceholder type="notifications" />} />
          <Route path="/admin/settings" element={<AdminPlaceholder type="settings" />} />
          <Route path="/admin/cms" element={<AdminPlaceholder type="cms" />} />
          <Route path="/admin/seo" element={<AdminPlaceholder type="seo" />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <ScrollToTop />
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App