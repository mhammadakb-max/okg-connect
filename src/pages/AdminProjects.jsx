import React from 'react';
import AdminModulePage from '@/components/admin/os/AdminModulePage';
import { adminConfigs } from '@/components/admin/os/adminConfigs';

export default function AdminProjects() {
  return <AdminModulePage config={adminConfigs.projects} />;
}