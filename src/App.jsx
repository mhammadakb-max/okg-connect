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
import BuildOpsPlatformDashboard from './pages/BuildOpsPlatformDashboard';
import BuildOpsCompanyDashboard from './pages/BuildOpsCompanyDashboard';
import BuildOpsPlaceholder from './pages/BuildOpsPlaceholder';
import BuildOpsWorkerSharing from './pages/BuildOpsWorkerSharing';
import BuildOpsMobileOps from './pages/BuildOpsMobileOps';
import BuildOpsPlans from './pages/BuildOpsPlans';
import BuildOpsSecurity from './pages/BuildOpsSecurity';

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
          <Route path="/admin/platform" element={<BuildOpsPlatformDashboard />} />
          <Route path="/admin/dashboard" element={<BuildOpsCompanyDashboard />} />
          <Route path="/admin/companies" element={<BuildOpsPlaceholder type="companies" />} />
          <Route path="/admin/subscriptions" element={<BuildOpsPlans />} />
          <Route path="/admin/support" element={<BuildOpsPlaceholder type="integrations" />} />
          <Route path="/admin/subcontractors" element={<BuildOpsPlaceholder type="network" />} />
          <Route path="/admin/contact-submissions" element={<AdminContactSubmissions />} />
          <Route path="/admin/finance" element={<AdminFinance />} />
          <Route path="/admin/operations" element={<BuildOpsCompanyDashboard />} />
          <Route path="/admin/clients" element={<BuildOpsPlaceholder type="companies" />} />
          <Route path="/admin/projects" element={<BuildOpsPlaceholder type="documents" />} />
          <Route path="/admin/quotations" element={<BuildOpsPlaceholder type="documents" />} />
          <Route path="/admin/invoices" element={<BuildOpsPlaceholder type="documents" />} />
          <Route path="/admin/workers" element={<BuildOpsPlaceholder type="workers" />} />
          <Route path="/admin/worker-sharing" element={<BuildOpsWorkerSharing />} />
          <Route path="/admin/attendance" element={<BuildOpsPlaceholder type="attendance" />} />
          <Route path="/admin/timesheets" element={<BuildOpsPlaceholder type="attendance" />} />
          <Route path="/admin/documents" element={<BuildOpsPlaceholder type="documents" />} />
          <Route path="/admin/document-requests" element={<BuildOpsPlaceholder type="documents" />} />
          <Route path="/admin/network" element={<BuildOpsPlaceholder type="network" />} />
          <Route path="/admin/rfqs" element={<BuildOpsPlaceholder type="network" />} />
          <Route path="/admin/work-orders" element={<BuildOpsPlaceholder type="network" />} />
          <Route path="/admin/boq" element={<BuildOpsPlaceholder type="documents" />} />
          <Route path="/admin/photos" element={<BuildOpsPlaceholder type="documents" />} />
          <Route path="/admin/tasks" element={<BuildOpsPlaceholder type="attendance" />} />
          <Route path="/admin/calendar" element={<BuildOpsMobileOps />} />
          <Route path="/admin/reports" element={<BuildOpsPlaceholder type="integrations" />} />
          <Route path="/admin/messages" element={<BuildOpsPlaceholder type="network" />} />
          <Route path="/admin/settings" element={<BuildOpsSecurity />} />
          <Route path="/admin/labour-marketplace" element={<BuildOpsPlaceholder type="marketplace" />} />
          <Route path="/admin/lead-marketplace" element={<BuildOpsPlaceholder type="marketplace" />} />
          <Route path="/admin/material-suppliers" element={<BuildOpsPlaceholder type="marketplace" />} />
          <Route path="/admin/equipment-rental" element={<BuildOpsPlaceholder type="marketplace" />} />
          <Route path="/admin/integrations" element={<BuildOpsPlaceholder type="integrations" />} />
          <Route path="/admin/roles" element={<BuildOpsSecurity />} />
          <Route path="/admin/notifications" element={<BuildOpsPlaceholder type="integrations" />} />
          <Route path="/admin/cms" element={<BuildOpsPlaceholder type="companies" />} />
          <Route path="/admin/seo" element={<BuildOpsPlaceholder type="companies" />} />
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