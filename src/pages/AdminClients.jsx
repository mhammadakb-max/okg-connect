import React from 'react';
import AdminModulePage from '@/components/admin/os/AdminModulePage';
import { adminConfigs } from '@/components/admin/os/adminConfigs';

export default function AdminClients() {
  return <AdminModulePage config={adminConfigs.clients} />;
}