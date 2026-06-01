import React, { useMemo, useState } from 'react';
import { base44 } from '@/api/base44Client';

const prettify = (value) => String(value || '').replaceAll('_', ' ').replace(/\b\w/g, (letter) => letter.toUpperCase());

export default function AdminModuleForm({ title, fields, onSubmit, saving }) {
  const initial = useMemo(() => Object.fromEntries(fields.map((field) => [field.name, field.defaultValue || ''])), [fields]);
  const [form, setForm] = useState(initial);
  const [uploading, setUploading] = useState(false);

  const handleFile = async (fieldName, file) => {
    if (!file) return;
    setUploading(true);
    const { file_url } = await base44.integrations.Core.UploadFile({ file });
    setForm((current) => ({ ...current, [fieldName]: file_url }));
    setUploading(false);
  };

  const submit = async (e) => {
    e.preventDefault();
    await onSubmit(form);
    setForm(initial);
  };

  return (
    <form onSubmit={submit} className="mb-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <h3 className="mb-5 text-lg font-extrabold text-navy">{title}</h3>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {fields.map((field) => {
          const value = form[field.name] || '';
          const common = "rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-navy";
          if (field.type === 'select') {
            return (
              <select key={field.name} value={value} onChange={(e) => setForm({ ...form, [field.name]: e.target.value })} className={common} required={field.required}>
                <option value="">{field.label || prettify(field.name)}</option>
                {field.options.map((option) => <option key={option.value || option} value={option.value || option}>{option.label || prettify(option)}</option>)}
              </select>
            );
          }
          if (field.type === 'textarea') {
            return <textarea key={field.name} value={value} onChange={(e) => setForm({ ...form, [field.name]: e.target.value })} placeholder={field.label || prettify(field.name)} className={`${common} min-h-24 md:col-span-2 xl:col-span-3`} required={field.required} />;
          }
          if (field.type === 'checkbox') {
            return (
              <label key={field.name} className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3 text-sm font-semibold text-navy">
                <input type="checkbox" checked={!!form[field.name]} onChange={(e) => setForm({ ...form, [field.name]: e.target.checked })} />
                {field.label || prettify(field.name)}
              </label>
            );
          }
          if (field.type === 'file') {
            return (
              <div key={field.name} className="rounded-xl border border-gray-200 px-4 py-3 text-sm">
                <input type="file" onChange={(e) => handleFile(field.name, e.target.files?.[0])} className="w-full text-sm" />
                {uploading && <p className="mt-2 text-xs text-text-secondary">Uploading...</p>}
                {value && <a href={value} target="_blank" rel="noopener noreferrer" className="mt-2 block text-xs font-bold text-navy">File uploaded</a>}
              </div>
            );
          }
          return <input key={field.name} type={field.type || 'text'} value={value} onChange={(e) => setForm({ ...form, [field.name]: e.target.value })} placeholder={field.label || prettify(field.name)} className={common} required={field.required} />;
        })}
      </div>
      <button disabled={saving} className="mt-5 rounded-xl bg-navy px-6 py-3 text-sm font-extrabold text-white disabled:opacity-60">
        {saving ? 'Saving...' : 'Save Record'}
      </button>
    </form>
  );
}