import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { Bot, Sparkles } from 'lucide-react';

const modes = [
  { value: 'finance_insights', label: 'Finance insights' },
  { value: 'enquiry_reply', label: 'Enquiry reply' },
  { value: 'business_summary', label: 'Business summary' },
];

export default function AdminAiPanel() {
  const [type, setType] = useState('business_summary');
  const [message, setMessage] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    setLoading(true);
    const response = await base44.functions.invoke('adminGenerateAiInsights', { type, message });
    setResult(response.data.result || 'No response generated.');
    setLoading(false);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#F8B858' }}>
          <Bot className="w-5 h-5" style={{ color: '#001078' }} />
        </div>
        <div>
          <h2 className="text-xl font-extrabold" style={{ color: '#001078' }}>AI Admin Assistant</h2>
          <p className="text-sm text-text-secondary">Ask for finance insights, enquiry replies or management summaries.</p>
        </div>
      </div>
      <div className="grid md:grid-cols-[220px_1fr_auto] gap-3">
        <select value={type} onChange={(e) => setType(e.target.value)} className="rounded-md border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20">
          {modes.map((mode) => <option key={mode.value} value={mode.value}>{mode.label}</option>)}
        </select>
        <input value={message} onChange={(e) => setMessage(e.target.value)} className="rounded-md border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20" placeholder="Optional instruction, e.g. draft reply for latest villa enquiry" />
        <button onClick={generate} disabled={loading} className="inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold text-white disabled:opacity-60" style={{ backgroundColor: '#001078' }}>
          <Sparkles className="w-4 h-4" />
          {loading ? 'Thinking...' : 'Generate'}
        </button>
      </div>
      {result && <div className="mt-5 whitespace-pre-wrap rounded-xl bg-gray-50 border border-gray-200 p-5 text-sm leading-relaxed text-text-primary">{result}</div>}
    </div>
  );
}