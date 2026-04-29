import React from 'react';

export default function MultiSelectGroup({ label, options, selected, onToggle }) {
  return (
    <div>
      <p className="block text-sm font-semibold mb-3" style={{ color: '#001078' }}>{label}</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {options.map((option) => {
          const active = selected.includes(option);
          return (
            <button
              key={option}
              type="button"
              onClick={() => onToggle(option)}
              className={`px-4 py-2.5 rounded-md border text-sm font-medium text-left transition-colors ${active ? 'bg-navy text-white border-navy' : 'bg-white text-text-secondary border-gray-200 hover:border-gray-300'}`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}