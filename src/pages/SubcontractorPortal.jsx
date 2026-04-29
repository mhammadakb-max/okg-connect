import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { base44 } from '@/api/base44Client';
import PageHero from '@/components/shared/PageHero';
import FieldInput from '@/components/subcontractors/FieldInput';
import MultiSelectGroup from '@/components/subcontractors/MultiSelectGroup';

const serviceOptions = ['Blockwork & Masonry', 'Plastering', 'Concrete Works', 'Steel Fixing', 'Shuttering/Formwork', 'Fit-Out & Finishing', 'MEP Support', 'Painting', 'Flooring', 'Renovation & Maintenance', 'Manpower Supply', 'Cleaning & Site Support'];
const emirateOptions = ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Umm Al Quwain', 'Ras Al Khaimah', 'Fujairah'];

const emptyForm = {
  company_name: '', trade_license_number: '', license_expiry_date: '', vat_trn: '', contact_person: '', designation: '', email: '', phone: '', whatsapp: '', office_location: '',
  emirates_covered: [], services: [], manpower_count: '', supervisor_count: '', equipment_available: '', previous_projects: '', client_references: '', insurance_status: '', hse_documents: '', quality_documents: '', bank_details_ready: 'no', notes: '', status: 'submitted',
};

export default function SubcontractorPortal() {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState(emptyForm);
  const [loading, setLoading] = useState(true);
  const [saved, setSaved] = useState(false);
  const [existingId, setExistingId] = useState(null);

  useEffect(() => {
    const loadProfile = async () => {
      const authed = await base44.auth.isAuthenticated();
      if (!authed) {
        setLoading(false);
        return;
      }
      const me = await base44.auth.me();
      setUser(me);
      const profiles = await base44.entities.SubcontractorProfile.filter({ created_by: me.email }, '-created_date', 1);
      if (profiles.length) {
        setExistingId(profiles[0].id);
        setFormData({ ...emptyForm, ...profiles[0] });
      } else {
        setFormData((prev) => ({ ...prev, email: me.email || '' }));
      }
      setLoading(false);
    };
    loadProfile();
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const toggleList = (field, value) => setFormData((prev) => ({ ...prev, [field]: prev[field].includes(value) ? prev[field].filter((item) => item !== value) : [...prev[field], value] }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { ...formData, status: existingId ? formData.status : 'submitted' };
    if (existingId) {
      await base44.entities.SubcontractorProfile.update(existingId, payload);
    } else {
      const created = await base44.entities.SubcontractorProfile.create(payload);
      setExistingId(created.id);
    }
    setSaved(true);
    setTimeout(() => setSaved(false), 5000);
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-gray-200 border-t-navy rounded-full animate-spin" /></div>;

  if (!user) {
    return (
      <>
        <PageHero title="Subcontractor Portal" intro="Sign in to submit your company details and register as an OKG subcontractor." eyebrow="Vendor Registration" breadcrumb="Subcontractor Portal" />
        <section className="bg-white py-20"><div className="max-w-xl mx-auto px-4 text-center"><button onClick={() => base44.auth.redirectToLogin('/subcontractor-portal')} className="px-6 py-3 text-white font-semibold rounded-md" style={{ backgroundColor: '#001078' }}>Sign in to register</button></div></section>
      </>
    );
  }

  return (
    <>
      <PageHero title="Subcontractor Registration" intro="Submit your company, manpower, document readiness and trade capability details for OKG review." eyebrow="Vendor Registration" breadcrumb="Subcontractor Portal" />
      <section className="bg-white border-t border-gray-200 py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {saved && <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 text-green-700 text-sm font-medium">Your subcontractor profile has been saved successfully.</div>}
          <motion.form initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} onSubmit={handleSubmit} className="space-y-10">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 md:p-8 space-y-6">
              <h2 className="text-2xl font-bold" style={{ color: '#001078' }}>Company Information</h2>
              <div className="grid md:grid-cols-2 gap-5">
                <FieldInput label="Company Name" name="company_name" value={formData.company_name} onChange={handleChange} required />
                <FieldInput label="Trade License Number" name="trade_license_number" value={formData.trade_license_number} onChange={handleChange} />
                <FieldInput label="License Expiry Date" name="license_expiry_date" type="date" value={formData.license_expiry_date} onChange={handleChange} />
                <FieldInput label="VAT TRN" name="vat_trn" value={formData.vat_trn} onChange={handleChange} />
                <FieldInput label="Office Location" name="office_location" value={formData.office_location} onChange={handleChange} placeholder="Emirate / area / address" />
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 md:p-8 space-y-6">
              <h2 className="text-2xl font-bold" style={{ color: '#001078' }}>Contact Details</h2>
              <div className="grid md:grid-cols-2 gap-5">
                <FieldInput label="Contact Person" name="contact_person" value={formData.contact_person} onChange={handleChange} required />
                <FieldInput label="Designation" name="designation" value={formData.designation} onChange={handleChange} />
                <FieldInput label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                <FieldInput label="Phone" name="phone" value={formData.phone} onChange={handleChange} required />
                <FieldInput label="WhatsApp" name="whatsapp" value={formData.whatsapp} onChange={handleChange} />
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 md:p-8 space-y-6">
              <h2 className="text-2xl font-bold" style={{ color: '#001078' }}>Capability & Coverage</h2>
              <MultiSelectGroup label="Services Offered *" options={serviceOptions} selected={formData.services} onToggle={(value) => toggleList('services', value)} />
              <MultiSelectGroup label="Emirates Covered" options={emirateOptions} selected={formData.emirates_covered} onToggle={(value) => toggleList('emirates_covered', value)} />
              <div className="grid md:grid-cols-2 gap-5">
                <FieldInput label="Available Manpower Count" name="manpower_count" value={formData.manpower_count} onChange={handleChange} />
                <FieldInput label="Available Supervisor Count" name="supervisor_count" value={formData.supervisor_count} onChange={handleChange} />
                <FieldInput label="Equipment / Tools Available" name="equipment_available" value={formData.equipment_available} onChange={handleChange} multiline />
                <FieldInput label="Previous Projects" name="previous_projects" value={formData.previous_projects} onChange={handleChange} multiline />
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 md:p-8 space-y-6">
              <h2 className="text-2xl font-bold" style={{ color: '#001078' }}>Documents & Compliance</h2>
              <div className="grid md:grid-cols-2 gap-5">
                <FieldInput label="Insurance / Workmen Compensation Status" name="insurance_status" value={formData.insurance_status} onChange={handleChange} multiline />
                <FieldInput label="HSE Documents Available" name="hse_documents" value={formData.hse_documents} onChange={handleChange} multiline placeholder="Safety policy, risk assessments, method statements, toolbox records etc." />
                <FieldInput label="Quality Documents Available" name="quality_documents" value={formData.quality_documents} onChange={handleChange} multiline />
                <FieldInput label="Client References" name="client_references" value={formData.client_references} onChange={handleChange} multiline />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: '#001078' }}>Bank details ready for vendor registration?</label>
                <select name="bank_details_ready" value={formData.bank_details_ready} onChange={handleChange} className="w-full px-4 py-2.5 border border-gray-200 rounded-md bg-white">
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>
              <FieldInput label="Additional Notes" name="notes" value={formData.notes} onChange={handleChange} multiline />
            </div>

            <button type="submit" className="w-full py-3 text-white font-semibold rounded-md transition-opacity hover:opacity-90" style={{ backgroundColor: '#001078' }}>
              {existingId ? 'Update Registration' : 'Submit Registration'}
            </button>
          </motion.form>
        </div>
      </section>
    </>
  );
}