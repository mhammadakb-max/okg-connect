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

const C = { ivory: '#F7F4EE', stone: '#F1ECE4', warmWhite: '#FBF9F5', charcoal: '#1F1F1B', charcoalDk: '#2E2B27', taupe: '#67635C', border: '#DDD6CB', bronze: '#B58A57' };

const roles = [
  { icon: ClipboardCheck, title: 'Site Supervisors', text: 'For daily control, reporting, worker coordination, site instructions and progress follow-up.' },
  { icon: Wrench, title: 'Skilled Workers', text: 'Masons, plasterers, steel fixers, shuttering carpenters, helpers and finishing workers.' },
  { icon: Users, title: 'Subcontractors', text: 'Specialist teams for controlled work packages with documentation and accountability.' },
  { icon: FileText, title: 'Admin Support', text: 'Quotation, document control, worker records, attendance and client coordination.' },
];

const fu = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };
const labelStyle = { fontSize: 12, fontWeight: 600, color: '#1F1F1B', display: 'block', marginBottom: 6 };
const inputStyle = { background: '#FBF9F5', borderColor: '#DDD6CB' };

export default function Careers() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', position: '', details: '' });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    const body = `
New job application received from OKG website — okgcontracting.com/careers

Name: ${form.name}
Phone / WhatsApp: ${form.phone || 'Not provided'}
Email: ${form.email}
Position / Trade: ${form.position || 'Not specified'}

Experience & Details:
${form.details || 'Not provided'}

---
Submitted: ${new Date().toLocaleString('en-GB', { timeZone: 'Asia/Dubai' })} (UAE time)
    `.trim();

    await base44.integrations.Core.SendEmail({
      to: 'omerkhalfangc@gmail.com',
      from_name: 'OKG Website — Careers',
      subject: `New Job Application — ${form.name}${form.position ? ' / ' + form.position : ''}`,
      body,
    });

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
      <div className="relative h-48 sm:h-60 md:h-72 overflow-hidden" style={{ borderBottom: `1px solid ${C.border}` }}>
        <img
          src="https://media.base44.com/images/public/69f0f9c5f2486cca9280edd1/2f6870904_generated_image.png"
          alt="Construction workers in PPE and hard hats at UAE building site"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(247,244,238,0) 0%, rgba(46,43,39,0.5) 100%)' }} />
      </div>

      {/* Roles */}
      <section className="py-20 md:py-28" style={{ background: C.warmWhite }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionEyebrow label="Careers" />
          <motion.h2 {...fu} className="font-display text-[28px] md:text-[38px] font-extrabold leading-[1.12] tracking-[-0.018em] mb-4" style={{ color: C.charcoal }}>
            We value reliability, skill and site discipline.
          </motion.h2>
          <motion.p {...fu} transition={{ delay: 0.1 }} className="text-[15px] leading-[1.85] mb-12 max-w-2xl" style={{ color: C.taupe }}>
            OKG looks for people who respect attendance, safety, workmanship and clear communication. Construction teams are judged by output and behaviour on site.
          </motion.p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {roles.map((r, i) => <ValueCard key={i} icon={r.icon} title={r.title} text={r.text} index={i} />)}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 md:py-28" style={{ background: C.stone, borderTop: `1px solid ${C.border}` }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionEyebrow label="Apply" />
          <motion.h2 {...fu} className="font-display text-[26px] md:text-[34px] font-extrabold leading-[1.15] tracking-[-0.015em] mb-3" style={{ color: C.charcoal }}>
            Send your details.
          </motion.h2>
          <motion.p {...fu} transition={{ delay: 0.1 }} className="text-[14px] leading-[1.85] mb-8" style={{ color: C.taupe }}>
            Include your trade, years of experience, current visa status and location. OKG will review your details and be in touch.
          </motion.p>

          <motion.form
            {...fu}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="rounded-xl p-7 md:p-9 border bg-white space-y-5"
            style={{ borderColor: C.border, boxShadow: '0 4px 20px rgba(31,31,27,0.06)' }}
          >
            <div>
              <label style={labelStyle}>Full Name</label>
              <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required placeholder="Your full name" style={inputStyle} />
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label style={labelStyle}>Phone / WhatsApp</label>
                <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+971 54 217 1502" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Email Address</label>
                <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required placeholder="email@example.com" style={inputStyle} />
              </div>
            </div>
            <div>
              <label style={labelStyle}>Position / Trade</label>
              <Input value={form.position} onChange={(e) => setForm({ ...form, position: e.target.value })} placeholder="e.g. Mason, Site Supervisor, Plasterer" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Experience, visa status, location and availability</label>
              <Textarea
                value={form.details}
                onChange={(e) => setForm({ ...form, details: e.target.value })}
                rows={4}
                placeholder="Briefly describe your experience, current visa status, location and availability..."
                style={inputStyle}
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-lg text-[13.5px] font-semibold transition-all hover:opacity-85 disabled:opacity-60"
              style={{ background: C.charcoalDk, color: '#FBF9F5' }}
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