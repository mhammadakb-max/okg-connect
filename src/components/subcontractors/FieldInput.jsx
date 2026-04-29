import React from 'react';

export default function FieldInput({ label, name, value, onChange, type = 'text', required = false, placeholder = '', multiline = false }) {
  const baseClass = 'w-full px-4 py-2.5 border border-gray-200 rounded-md text-text-primary focus:outline-none focus:ring-2 resize-none';

  return (
    <div>
      <label className="block text-sm font-semibold mb-2" style={{ color: '#001078' }}>
        {label}{required && <span className="text-red-500"> *</span>}
      </label>
      {multiline ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          rows={4}
          placeholder={placeholder}
          className={baseClass}
          style={{ '--tw-ring-color': '#F8B858' }}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          className={baseClass}
          style={{ '--tw-ring-color': '#F8B858' }}
        />
      )}
    </div>
  );
}