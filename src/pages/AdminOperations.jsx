import React, { useEffect, useState } from 'react';
import { base44 } from '@/api/base44Client';
import AdminShell from '@/components/admin/AdminShell';
import OperationsStats from '@/components/admin/operations/OperationsStats';
import OperationsTabs from '@/components/admin/operations/OperationsTabs';
import OperationsOverview from '@/components/admin/operations/OperationsOverview';
import ConstructionSuitePanel from '@/components/admin/operations/ConstructionSuitePanel';
import OperationsForm from '@/components/admin/operations/OperationsForm';
import OperationsTable from '@/components/admin/operations/OperationsTable';

const emptyData = {
  crm: [],
  projects: [],
  contractors: [],
  documents: [],
  tasks: [],
  subcontractorPayments: [],
  subcontractors: [],
  shifts: [],
  attendance: [],
  incidents: [],
  compliance: [],
  tenders: [],
};

const editableModules = ['crm', 'projects', 'contractors', 'documents', 'tasks', 'subcontractorPayments', 'shifts', 'attendance', 'incidents', 'compliance', 'tenders'];

export default function AdminOperations() {
  const [data, setData] = useState(emptyData);
  const [activeTab, setActiveTab] = useState('overview');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const loadData = async () => {
    const response = await base44.functions.invoke('adminListOperations', {});
    setData({ ...emptyData, ...response.data });
  };

  useEffect(() => {
    const init = async () => {
      const authed = await base44.auth.isAuthenticated();
      if (!authed) {
        setError('Please sign in as an admin to view operations.');
        setLoading(false);
        return;
      }
      await loadData();
      setLoading(false);
    };
    init();
  }, []);

  const handleCreate = async (moduleKey, formData) => {
    setSaving(true);
    await base44.functions.invoke('adminCreateOperationRecord', { module: moduleKey, data: formData });
    await loadData();
    setSaving(false);
  };

  const handleDelete = async (moduleKey, id) => {
    await base44.functions.invoke('adminDeleteOperationRecord', { module: moduleKey, id });
    await loadData();
  };

  return (
    <AdminShell title="Operations Portal" intro="Advanced admin-only control centre for CRM, projects, contractors, subcontractor payments, documents and tasks.">
      {loading ? (
        <div className="flex justify-center py-16"><div className="w-8 h-8 border-4 border-gray-200 border-t-navy rounded-full animate-spin" /></div>
      ) : error ? (
        <div className="bg-white border border-gray-200 rounded-xl p-8 text-center">
          <p className="text-text-secondary mb-5">{error}</p>
          <button onClick={() => base44.auth.redirectToLogin('/admin/operations')} className="px-6 py-3 text-white font-semibold rounded-md" style={{ backgroundColor: '#001078' }}>Admin sign in</button>
        </div>
      ) : (
        <>
          <OperationsStats data={data} />
          <ConstructionSuitePanel onTabChange={setActiveTab} />
          <OperationsTabs activeTab={activeTab} onChange={setActiveTab} />
          {activeTab === 'overview' ? (
            <OperationsOverview data={data} onTabChange={setActiveTab} />
          ) : (
            <>
              {editableModules.includes(activeTab) && <OperationsForm moduleKey={activeTab} onSubmit={handleCreate} saving={saving} />}
              <OperationsTable moduleKey={activeTab} records={data[activeTab] || []} onDelete={handleDelete} />
            </>
          )}
        </>
      )}
    </AdminShell>
  );
}