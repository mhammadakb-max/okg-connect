import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, Wrench, Users, FileText, ArrowRight } from 'lucide-react';
import PageHero from '../components/shared/PageHero';
import SectionEyebrow from '../components/shared/SectionEyebrow';
import ValueCard from '../components/shared/ValueCard';
import CTABand from '../components/shared/CTABand';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const roles = [
  { icon: ClipboardCheck, title: 'Site Supervisors', text: 'For daily control, reporting, worker coordination, site instructions and progress follow-up.' },
  { icon: Wrench, title: 'Skilled Workers', text: 'Masons, plasterers, steel fixers, shuttering carpenters, helpers and finishing workers.' },
  { icon: Users, title: 'Subcontractors', text: 'Specialist teams for controlled work packages with documentation and accountability.' },
  { icon: FileText, title: 'Admin Support', text: 'Quotation, document control, worker records, attendance and client coordination.' },
];

const fu = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };
const labelStyle = { fontSize: 13, fontWeight: 600, color: '#001078', display: 'block', marginBottom: 6 };

export default function Careers() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', position: '', details: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Application submitted. We will be in touch.');
    setForm({ name: '', phone: '', email: '', position: '', details: '' });
  };

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Join a team built around site discipline and professional delivery."
        intro="OKG is a UAE-based building contracting company. We seek responsible site supervisors, skilled workers, subcontractors and support staff who take quality and accountability seriously."
      />

      {/* Roles */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionEyebrow label="Careers" />
          <motion.h2 {...fu} className="font-display text-3xl md:text-[40px] font-bold leading-[1.18] tracking-[-0.015em] mb-4" style={{ color: '#001078' }}>
            We value reliability, skill and site discipline.
          </motion.h2>
          <motion.p {...fu} transition={{ delay: 0.1 }} className="text-[15px] leading-[1.8] mb-12 max-w-2xl" style={{ color: '#6B7280' }}>
            OKG looks for people who respect attendance, safety, workmanship and clear communication. Construction teams are judged by output and behaviour on site.
          </motion.p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {roles.map((r, i) => (
              <ValueCard key={i} icon={r.icon} title={r.title} text={r.text} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 md:py-28" style={{ background: '#F7F8FB' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionEyebrow label="Apply" />
          <motion.h2 {...fu} className="text-3xl md:text-[36px] font-bold leading-[1.2] tracking-[-0.015em] mb-3" style={{ color: '#001078' }}>
            Send your details.
          </motion.h2>
          <motion.p {...fu} transition={{ delay: 0.1 }} className="text-[14px] leading-[1.8] mb-8" style={{ color: '#6B7280' }}>
            Include your trade, years of experience, current visa status and location. OKG will review your details and be in touch.
          </motion.p>

          <motion.form
            {...fu}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-7 md:p-9 border border-gray-100 shadow-md space-y-5"
          >
            <div>
              <label style={labelStyle}>Full Name</label>
              <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required placeholder="Your full name" />
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label style={labelStyle}>Phone / WhatsApp</label>
                <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+971 XX XXX XXXX" />
              </div>
              <div>
                <label style={labelStyle}>Email Address</label>
                <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required placeholder="email@example.com" />
              </div>
            </div>
            <div>
              <label style={labelStyle}>Position / Trade</label>
              <Input value={form.position} onChange={(e) => setForm({ ...form, position: e.target.value })} placeholder="e.g. Mason, Site Supervisor, Plasterer" />
            </div>
            <div>
              <label style={labelStyle}>Experience, visa status, location and availability</label>
              <Textarea
                value={form.details}
                onChange={(e) => setForm({ ...form, details: e.target.value })}
                rows={4}
                placeholder="Briefly describe your experience, current visa status, location and availability..."
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl text-[14px] font-bold text-white transition-all hover:scale-[1.01] shadow-md"
              style={{ background: '#001078' }}
            >
              Submit Application
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.form>
        </div>
      </section>

      <CTABand />
    </>
  );
}