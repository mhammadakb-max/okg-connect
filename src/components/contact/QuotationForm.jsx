import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';

const initialFormData = {
  name: '', company: '', email: '', phone: '', whatsapp: '', projectName: '', projectLocation: '', emirate: '', service: '', expectedStartDate: '', workersRequired: '', estimatedQuantities: '', message: '', preferredCallbackTime: '', website: '',
};

const inputClass = 'w-full rounded-md border border-border bg-white px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent';
const allowedTypes = ['application/pdf', 'image/png', 'image/jpeg', 'image/webp', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/msword'];
const maxFileSize = 8 * 1024 * 1024;

export default function QuotationForm({ mode = 'quotation' }) {
  const [formData, setFormData] = useState(initialFormData);
  const [files, setFiles] = useState({ boq: null, drawings: null, scopeDocument: null });
  const [submitted, setSubmitted] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const isQuotation = mode !== 'contact';
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFile = (name, file) => {
    if (!file) return setFiles({ ...files, [name]: null });
    if (!allowedTypes.includes(file.type) || file.size > maxFileSize) {
      setErrorMessage('Please upload PDF, Word or image files only, with a maximum size of 8MB each.');
      return;
    }
    setFiles({ ...files, [name]: file });
  };

  const uploadFiles = async () => {
    const uploaded = {};
    for (const [key, file] of Object.entries(files)) {
      if (file) {
        const result = await base44.integrations.Core.UploadFile({ file });
        uploaded[key] = result.file_url;
      }
    }
    return uploaded;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage('');
    try {
      const uploadedFiles = await uploadFiles();
      const response = await base44.functions.invoke('sendContactForm', { ...formData, ...uploadedFiles, formType: isQuotation ? 'quotation' : 'contact' });
      setSubmitted(response.data.reference || 'OKG enquiry received');
      setFormData(initialFormData);
      setFiles({ boq: null, drawings: null, scopeDocument: null });
    } catch {
      setErrorMessage('Submission failed. Please try again or contact OKG directly by phone or WhatsApp.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center shadow-sm"><p className="mb-2 text-lg font-black text-primary">Thank you. Your request has been received.</p><p className="text-muted-foreground">Reference: <span className="font-bold text-primary">{submitted}</span></p></div>;
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-white p-6 shadow-sm md:p-8">
      <input type="text" name="website" value={formData.website} onChange={handleChange} className="hidden" tabIndex="-1" autoComplete="off" />
      <div className="mb-6"><p className="mb-2 text-xs font-black uppercase tracking-widest text-accent">{isQuotation ? 'Request Quotation' : 'Contact Form'}</p><h2 className="text-2xl font-black text-primary">{isQuotation ? 'Tell us about your project' : 'Send OKG a message'}</h2></div>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Contact person" name="name" value={formData.name} onChange={handleChange} required />
        <Field label="Company name" name="company" value={formData.company} onChange={handleChange} />
        <Field label="Email address" name="email" type="email" value={formData.email} onChange={handleChange} required />
        <Field label="Phone number" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
        {isQuotation && <Field label="WhatsApp number" name="whatsapp" type="tel" value={formData.whatsapp} onChange={handleChange} />}
        {isQuotation && <Field label="Project name" name="projectName" value={formData.projectName} onChange={handleChange} />}
        <Field label="Project location" name="projectLocation" value={formData.projectLocation} onChange={handleChange} required={isQuotation} />
        {isQuotation && <SelectField label="Emirate" name="emirate" value={formData.emirate} onChange={handleChange} options={['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Umm Al Quwain']} />}
        <SelectField label={isQuotation ? 'Type of work' : 'Subject'} name="service" value={formData.service} onChange={handleChange} required options={['Civil Works', 'Plastering and Gypsum Works', 'Masonry and Blockwork', 'Concrete Works', 'Steel and Shuttering', 'Skilled Workforce Deployment', 'Site Supervision', 'Documentation Control', 'General Enquiry']} />
        {isQuotation && <Field label="Expected start date" name="expectedStartDate" type="date" value={formData.expectedStartDate} onChange={handleChange} />}
        {isQuotation && <Field label="Required number of workers" name="workersRequired" type="number" value={formData.workersRequired} onChange={handleChange} />}
        {isQuotation && <Field label="Estimated quantities" name="estimatedQuantities" value={formData.estimatedQuantities} onChange={handleChange} />}
        <Field label="Preferred callback time" name="preferredCallbackTime" value={formData.preferredCallbackTime} onChange={handleChange} placeholder="Optional" />
      </div>
      <div className="mt-4"><label className="mb-2 block text-sm font-bold text-primary">{isQuotation ? 'Scope of work / Additional message' : 'Message'}</label><textarea name="message" value={formData.message} onChange={handleChange} required rows={6} className={`${inputClass} resize-none`} /></div>
      {isQuotation && <div className="mt-5 grid gap-4 md:grid-cols-3"><FileInput label="Upload BOQ" onChange={(file) => handleFile('boq', file)} /><FileInput label="Upload drawings" onChange={(file) => handleFile('drawings', file)} /><FileInput label="Upload scope document" onChange={(file) => handleFile('scopeDocument', file)} /></div>}
      {errorMessage && <p className="mt-4 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{errorMessage}</p>}
      <button type="submit" disabled={submitting} className="mt-6 w-full rounded-md bg-primary px-6 py-3.5 text-sm font-black text-white disabled:opacity-60">{submitting ? 'Submitting...' : isQuotation ? 'Submit Quotation Request' : 'Send Message'}</button>
    </form>
  );
}

function Field({ label, name, value, onChange, type = 'text', required = false, placeholder = '' }) {
  return <div><label className="mb-2 block text-sm font-bold text-primary">{label}</label><input type={type} name={name} value={value} onChange={onChange} required={required} placeholder={placeholder} className={inputClass} /></div>;
}

function SelectField({ label, name, value, onChange, options, required = false }) {
  return <div><label className="mb-2 block text-sm font-bold text-primary">{label}</label><select name={name} value={value} onChange={onChange} required={required} className={inputClass}><option value="">Select</option>{options.map((option) => <option key={option} value={option}>{option}</option>)}</select></div>;
}

function FileInput({ label, onChange }) {
  return <div><label className="mb-2 block text-sm font-bold text-primary">{label}</label><input type="file" accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.webp" onChange={(e) => onChange(e.target.files?.[0] || null)} className="w-full rounded-md border border-border bg-secondary px-3 py-2 text-sm" /></div>;
}