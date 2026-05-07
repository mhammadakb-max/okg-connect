import React, { useMemo, useState } from 'react';
import { base44 } from '@/api/base44Client';
import AdminShell from '@/components/admin/AdminShell';
import AdminDataTable from './AdminDataTable';
import AdminFilters from './AdminFilters';
import AdminMetricCard from './AdminMetricCard';
import AdminModuleForm from './AdminModuleForm';

const matchesSearch = (record, search) => !search || Object.values(record).join(' ').toLowerCase().includes(search.toLowerCase());

export default function AdminModulePage({ config }) {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('all');

  const load = async () => {
    const response = await base44.functions.invoke('adminListOperations', {});
    setRecords(response.data[config.moduleKey] || []);
    setLoading(false);
  };

  React.useEffect(() => { load(); }, []);

  const filtered = useMemo(() => records.filter((record) => matchesSearch(record, search) && (status === 'all' || record[config.statusKey] === status)), [records, search, status, config.statusKey]);

  const createRecord = async (data) => {
    setSaving(true);
    await base44.functions.invoke('adminCreateOperationRecord', { module: config.moduleKey, data });
    await load();
    setSaving(false);
  };

  const deleteRecord = async (record) => {
    await base44.functions.invoke('adminDeleteOperationRecord', { module: config.moduleKey, id: record.id });
    await load();
  };

  return (
    <AdminShell title={config.title} intro={config.intro}>
      {loading ? (
        <div className="flex justify-center py-16"><div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-navy" /></div>
      ) : (
        <>
          <div className="mb-6 grid gap-4 md:grid-cols-3">
            {config.metrics.map((metric) => <AdminMetricCard key={metric.label} {...metric.get(records)} />)}
          </div>
          <AdminFilters search={search} onSearch={setSearch} status={status} onStatus={setStatus} statuses={config.statuses || []} />
          <AdminModuleForm title={config.formTitle} fields={config.fields} onSubmit={createRecord} saving={saving} />
          <AdminDataTable title={config.tableTitle} records={filtered} columns={config.columns} onDelete={deleteRecord} />
        </>
      )}
    </AdminShell>
  );
}