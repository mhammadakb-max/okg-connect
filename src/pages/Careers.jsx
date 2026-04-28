import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, Wrench, Users, FileText } from 'lucide-react';
import PageHero from '../components/shared/PageHero';
import SectionEyebrow from '../components/shared/SectionEyebrow';
import ValueCard from '../components/shared/ValueCard';
import CTABand from '../components/shared/CTABand';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const roles = [
  { icon: ClipboardCheck, title: 'Site Supervisors', text: 'For daily control, reporting, worker coordination, site instructions and progress follow-up.' },
  { icon: Wrench, title: 'Skilled Workers', text: 'Masons, plasterers, steel fixers, shuttering carpenters, helpers and finishing workers.' },
  { icon: Users, title: 'Subcontractors', text: 'Specialist teams for controlled work packages with documentation and accountability.' },
  { icon: FileText, title: 'Admin Support', text: 'Quotation, document control, worker records, attendance and client coordination.' },
];

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

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
        title="Join a company being built with discipline from day one."
        intro="OKG is a new contracting company. As work grows, the company will need responsible site supervisors, skilled workers, subcontractors and support staff."
      />

      {/* Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionEyebrow label="Careers" />
          <motion.h2 {...fadeUp} className="text-2xl md:text-3xl font-bold text-navy mb-4 max-w-2xl">
            We value reliability, skill and site discipline.
          </motion.h2>
          <motion.p {...fadeUp} transition={{ delay: 0.1 }} className="text-steel mb-10 max-w-2xl">
            OKG's future recruitment should focus on people who respect attendance, safety, workmanship and communication. Construction teams are judged by output and behaviour on site.
          </motion.p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roles.map((r, i) => (
              <ValueCard key={i} icon={r.icon} title={r.title} text={r.text} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 md:py-24 bg-offwhite">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionEyebrow label="Apply" />
          <motion.h2 {...fadeUp} className="text-2xl md:text-3xl font-bold text-navy mb-4">
            Send your details.
          </motion.h2>
          <motion.p {...fadeUp} transition={{ delay: 0.1 }} className="text-steel mb-8">
            This form can later connect to an email or recruitment service.
          </motion.p>

          <motion.form
            {...fadeUp}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-white rounded-xl p-6 md:p-8 border border-border shadow-sm space-y-5"
          >
            <div>
              <label className="text-sm font-medium text-navy mb-1.5 block">Full Name</label>
              <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required placeholder="Your full name" />
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium text-navy mb-1.5 block">Phone / WhatsApp</label>
                <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+971 XX XXX XXXX" />
              </div>
              <div>
                <label className="text-sm font-medium text-navy mb-1.5 block">Email Address</label>
                <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required placeholder="email@example.com" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-navy mb-1.5 block">Position / Trade</label>
              <Input value={form.position} onChange={(e) => setForm({ ...form, position: e.target.value })} placeholder="e.g. Mason, Site Supervisor, Plasterer" />
            </div>
            <div>
              <label className="text-sm font-medium text-navy mb-1.5 block">Experience, visa status, location and availability</label>
              <Textarea value={form.details} onChange={(e) => setForm({ ...form, details: e.target.value })} rows={4} placeholder="Briefly describe your experience, current visa status, location and availability..." />
            </div>
            <Button type="submit" className="w-full bg-navy hover:bg-navy/90 text-white font-semibold py-3">
              Submit Application
            </Button>
          </motion.form>
        </div>
      </section>

      <CTABand />
    </>
  );
}