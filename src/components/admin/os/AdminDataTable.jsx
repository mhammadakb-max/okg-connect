import React from 'react';
import { Download, Edit3, Trash2 } from 'lucide-react';

const prettify = (value) => String(value || '').replaceAll('_', ' ').replace(/\b\w/g, (letter) => letter.toUpperCase());

export default function AdminDataTable({ title, records = [], columns = [], onEdit, onDelete, emptyText = 'No records found.' }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="flex flex-col gap-3 border-b border-gray-200 p-5 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-lg font-extrabold text-navy">{title}</h3>
          <p className="text-sm text-text-secondary">{records.length} records</p>
        </div>
        <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 py-2 text-sm font-bold text-text-secondary hover:bg-gray-50">
          <Download className="h-4 w-4" /> Export
        </button>
      </div>
      {records.length === 0 ? (
        <div className="p-8 text-center text-text-secondary">{emptyText}</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-bg-light text-left text-xs uppercase tracking-widest text-text-secondary">
              <tr>
                {columns.map((column) => <th key={column.key} className="px-5 py-4 font-extrabold">{column.label}</th>)}
                <th className="px-5 py-4 text-right font-extrabold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {records.map((record) => (
                <tr key={record.id} className="hover:bg-gray-50">
                  {columns.map((column) => (
                    <td key={column.key} className="max-w-xs truncate px-5 py-4 text-text-primary">
                      {column.render ? column.render(record) : prettify(record[column.key] || '—')}
                    </td>
                  ))}
                  <td className="px-5 py-4 text-right">
                    <div className="inline-flex gap-2">
                      {onEdit && <button onClick={() => onEdit(record)} className="rounded-lg border border-gray-200 p-2 text-text-secondary hover:bg-gray-50"><Edit3 className="h-4 w-4" /></button>}
                      {onDelete && <button onClick={() => onDelete(record)} className="rounded-lg border border-red-100 p-2 text-red-600 hover:bg-red-50"><Trash2 className="h-4 w-4" /></button>}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}