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
import { base44 } from '@/api/base44Client';

const P = { white: '#FFFFFF', bg: '#F7F9FF', tint: '#EAF0FF', blue: '#6E85E8', blueL: '#8FA2F2', head: '#5F6D9A', head2: '#3D4A73', body: '#7C86A8', muted: '#97A0BC', border: '#E6EBF5' };

const roles = [
  { icon: ClipboardCheck, title: 'Site Supervisors', text: 'For daily control, reporting, worker coordination, site instructions and progress follow-up.' },
  { icon: Wrench, title: 'Skilled Workers', text: 'Masons, plasterers, steel fixers, shuttering carpenters, helpers and finishing workers.' },
  { icon: Users, title: 'Subcontractors', text: 'Specialist teams for controlled work packages with documentation and accountability.' },
  { icon: FileText, title: 'Admin Support', text: 'Quotation, document control, worker records, attendance and client coordination.' },
];

const labelCls = { fontSize: 12, fontWeight: 600, color: '#5F6D9A', display: 'block', marginBottom: 6 };
const inputStyle = { background: '#FCFDFF', borderColor: '#E6EBF5', color: '#5F6D9A' };
const fu = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

export default function Careers() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', position: '', details: '' });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    const body = `New job application from OKG website — okgcontracting.com/careers\n\nName: ${form.name}\nPhone: ${form.phone || 'Not provided'}\nEmail: ${form.email}\nPosition: ${form.position || 'Not specified'}\n\nDetails:\n${form.details || 'Not provided'}\n\n---\n${new Date().toLocaleString('en-GB', { timeZone: 'Asia/Dubai' })} (UAE time)`;
    await base44.integrations.Core.SendEmail({ to: 'omerkhalfangc@gmail.com', from_name: 'OKG Website — Careers', subject: `New Job Application — ${form.name}${form.position ? ' / ' + form.position : ''}`, body });
    toast.success('Application submitted. We will be in touch.');
    setForm({ name: '', phone: '', email: '', position: '', details: '' });
    setSending(false);
  };

  return (
    <>
      <PageHero
        eyebrow="Careers"
        breadcrumb="Careers"
        title="Join a team built around site discipline and professional delivery."
        intro="OKG is a UAE-based building contracting company. We seek responsible site supervisors, skilled workers, subcontractors and support staff who take quality and accountability seriously."
      />

      {/* Hero image band */}
      <div className="relative h-48 sm:h-60 md:h-64 overflow-hidden" style={{ borderBottom: `1px solid ${P.border}` }}>
        <img
          src="https://media.base44.com/images/public/69f0f9c5f2486cca9280edd1/2f6870904_generated_image.png"
          alt="Construction workers in PPE and hard hats at UAE building site"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(247,249,255,0.3) 0%, rgba(61,74,115,0.4) 100%)' }} />
      </div>

      {/* Roles */}
      <section className="py-20 md:py-28" style={{ background: P.white }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionEyebrow label="Careers" />
          <motion.h2 {...fu} className="font-display text-[28px] md:text-[38px] font-extrabold leading-[1.12] tracking-[-0.018em] mb-4" style={{ color: P.head2 }}>
            We value reliability, skill and site discipline.
          </motion.h2>
          <motion.p {...fu} transition={{ delay: 0.1 }} className="text-[15px] leading-[1.85] mb-12 max-w-2xl" style={{ color: P.body }}>
            OKG looks for people who respect attendance, safety, workmanship and clear communication. Construction teams are judged by output and behaviour on site.
          </motion.p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {roles.map((r, i) => <ValueCard key={i} icon={r.icon} title={r.title} text={r.text} index={i} />)}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 md:py-28" style={{ background: P.bg, borderTop: `1px solid ${P.border}` }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionEyebrow label="Apply" />
          <motion.h2 {...fu} className="font-display text-[26px] md:text-[34px] font-extrabold leading-[1.15] tracking-[-0.015em] mb-3" style={{ color: P.head2 }}>
            Send your details.
          </motion.h2>
          <motion.p {...fu} transition={{ delay: 0.1 }} className="text-[14px] leading-[1.85] mb-8" style={{ color: P.body }}>
            Include your trade, years of experience, current visa status and location. OKG will review and be in touch.
          </motion.p>

          <motion.form
            {...fu} transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="rounded-2xl p-7 md:p-9 space-y-5"
            style={{ background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(16px)', border: `1px solid ${P.border}`, boxShadow: '0 8px 32px rgba(110,133,232,0.1)' }}
          >
            <div>
              <label style={labelCls}>Full Name</label>
              <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required placeholder="Your full name" style={inputStyle} />
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label style={labelCls}>Phone / WhatsApp</label>
                <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+971 54 217 1502" style={inputStyle} />
              </div>
              <div>
                <label style={labelCls}>Email Address</label>
                <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required placeholder="email@example.com" style={inputStyle} />
              </div>
            </div>
            <div>
              <label style={labelCls}>Position / Trade</label>
              <Input value={form.position} onChange={(e) => setForm({ ...form, position: e.target.value })} placeholder="e.g. Mason, Site Supervisor, Plasterer" style={inputStyle} />
            </div>
            <div>
              <label style={labelCls}>Experience, visa status, location and availability</label>
              <Textarea value={form.details} onChange={(e) => setForm({ ...form, details: e.target.value })} rows={4} placeholder="Briefly describe your experience, current visa status, location and availability..." style={inputStyle} />
            </div>
            <button
              type="submit" disabled={sending}
              className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl text-[13.5px] font-semibold transition-all hover:opacity-88 disabled:opacity-60"
              style={{ background: 'linear-gradient(135deg, #6E85E8 0%, #8FA2F2 100%)', color: '#fff', boxShadow: '0 4px 20px rgba(110,133,232,0.25)' }}
            >
              {sending ? 'Sending…' : 'Submit Application'}
              {!sending && <ArrowRight className="w-4 h-4" />}
            </button>
          </motion.form>
        </div>
      </section>

      <CTABand />
    </>
  );
}