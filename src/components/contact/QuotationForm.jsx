import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { base44 } from '@/api/base44Client';

const initialFormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  projectLocation: '',
  preferredStartDate: '',
  budgetRange: '',
  message: '',
};

const inputClass = 'w-full px-4 py-2.5 border border-gray-200 rounded-md text-text-primary focus:outline-none focus:ring-2 bg-white';

export default function QuotationForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await base44.functions.invoke('sendContactForm', { ...formData, formType: 'quotation' });
    setFormData(initialFormData);
    setSubmitted(true);
    setSubmitting(false);
    setTimeout(() => setSubmitted(false), 5000);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center shadow-sm">
        <p className="text-lg font-semibold mb-2" style={{ color: '#001078' }}>
          Thank you for your quotation request!
        </p>
        <p className="text-text-secondary">
          OKG has received your details and will respond shortly.
        </p>
      </div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="premium-card rounded-2xl border border-gray-200 p-6 md:p-8 space-y-5"
    >
      <div>
        <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#F8B858' }}>Request Quotation</p>
        <h3 className="text-2xl font-extrabold mb-2" style={{ color: '#001078' }}>Tell us about your project</h3>
        <p className="text-sm text-text-secondary">Share the key details so OKG can prepare a clear and structured quotation.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <Field label="Full Name" name="name" value={formData.name} onChange={handleChange} required />
        <Field label="Company Name" name="company" value={formData.company} onChange={handleChange} />
        <Field label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required />
        <Field label="Phone / WhatsApp" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold mb-2" style={{ color: '#001078' }}>Required Service</label>
          <select name="service" value={formData.service} onChange={handleChange} required className={inputClass} style={{ '--tw-ring-color': '#F8B858' }}>
            <option value="">Select a service</option>
            <option>Building Contracting Works</option>
            <option>Blockwork & Masonry</option>
            <option>Plastering Works</option>
            <option>Concrete Works</option>
            <option>Steel Fixing & Shuttering</option>
            <option>Fit-Out & Finishing</option>
            <option>Renovation & Maintenance</option>
            <option>Subcontracting Support</option>
          </select>
        </div>
        <Field label="Project Location" name="projectLocation" value={formData.projectLocation} onChange={handleChange} required />
        <Field label="Preferred Start Date" name="preferredStartDate" type="date" value={formData.preferredStartDate} onChange={handleChange} />
        <Field label="Estimated Budget / BOQ Value" name="budgetRange" value={formData.budgetRange} onChange={handleChange} placeholder="Optional" />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2" style={{ color: '#001078' }}>Scope / Project Details</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          required
          placeholder="Describe scope, quantities, drawings/BOQ availability, timeline and any special site requirements."
          className={`${inputClass} resize-none`}
          style={{ '--tw-ring-color': '#F8B858' }}
        />
      </div>

      <button type="submit" disabled={submitting} className="w-full py-3 text-white font-semibold rounded-md transition-opacity hover:opacity-90 disabled:opacity-60" style={{ backgroundColor: '#001078' }}>
        {submitting ? 'Sending Request...' : 'Submit Quotation Request'}
      </button>

      <p className="text-xs text-text-secondary text-center">
        Your request will be delivered directly to OKG by email.
      </p>
    </motion.form>
  );
}

function Field({ label, name, value, onChange, type = 'text', required = false, placeholder = '' }) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-2" style={{ color: '#001078' }}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className={inputClass}
        style={{ '--tw-ring-color': '#F8B858' }}
      />
    </div>
  );
}