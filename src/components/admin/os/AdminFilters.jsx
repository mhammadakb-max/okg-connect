import React from 'react';
import { Search } from 'lucide-react';

export default function AdminFilters({ search, onSearch, status, onStatus, statuses = [] }) {
  return (
    <div className="mb-6 grid gap-3 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm md:grid-cols-[1fr_220px]">
      <label className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3">
        <Search className="h-4 w-4 text-text-secondary" />
        <input value={search} onChange={(e) => onSearch(e.target.value)} placeholder="Search admin records..." className="w-full bg-transparent text-sm outline-none" />
      </label>
      <select value={status} onChange={(e) => onStatus(e.target.value)} className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none">
        <option value="all">All statuses</option>
        {statuses.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
      </select>
    </div>
  );
}