import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import PageHero from '../components/shared/PageHero';
import SectionEyebrow from '../components/shared/SectionEyebrow';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

const contactInfo = [
  { icon: MapPin, label: 'Location', value: 'United Arab Emirates' },
  { icon: Phone, label: 'Phone / WhatsApp', value: '+971 XX XXX XXXX' },
  { icon: Mail, label: 'Email', value: 'info@okgcontracting.com' },
];

const serviceOptions = [
  'Building contracting works',
  'Blockwork and masonry',
  'Plastering works',
  'Concrete, shuttering and steel fixing',
  'Fit-out and finishing',
  'Subcontracting or manpower support',
  'Renovation and maintenance',
];

const fu = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

const labelStyle = { fontSize: 13, fontWeight: 600, color: '#001078', display: 'block', marginBottom: 6 };

export default function Contact() {
  const [form, setForm] = useState({
    name: '', company: '', phone: '', email: '', location: '', service: '', scope: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Enquiry submitted. OKG will review your details and respond.');
    setForm({ name: '', company: '', phone: '', email: '', location: '', service: '', scope: '' });
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Request a quotation or discuss a subcontract package."
        intro="Share drawings, BOQ, location, site condition and expected start date. OKG can review the scope and prepare a clear, structured proposal."
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">

            {/* ── Left info panel ── */}
            <div className="lg:col-span-2">
              {/* UAE site background panel */}
              <div className="relative rounded-2xl overflow-hidden mb-8 h-52 hidden lg:block">
                <img
                  src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80"
                  alt="UAE construction skyline and building site"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(0,16,120,0.88) 0%, rgba(0,8,51,0.75) 100%)' }} />
                <div className="absolute inset-0 px-7 flex flex-col justify-end pb-6">
                  <p className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase mb-2" style={{ color: '#F8B858' }}>OKG Building Contracting</p>
                  <p className="text-[16px] font-bold text-white leading-snug">Building Contracting · UAE</p>
                  <p className="text-[12.5px] mt-1" style={{ color: 'rgba(255,255,255,0.55)' }}>Civil · Masonry · Fit-Out · Finishing · QHSE</p>
                </div>
              </div>
              <SectionEyebrow label="Contact Details" />
              <motion.h2 {...fu} className="font-display text-2xl md:text-[32px] font-bold leading-[1.2] tracking-[-0.015em] mb-4" style={{ color: '#001078' }}>
                Talk to OKG about your project.
              </motion.h2>
              <motion.p {...fu} transition={{ delay: 0.1 }} className="text-[14px] leading-[1.8] mb-8" style={{ color: '#6B7280' }}>
                For a faster response, send the latest drawings, BOQ, scope notes, location, site photos and expected start date.
              </motion.p>

              <div className="space-y-5 mb-10">
                {contactInfo.map((c, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(0,16,120,0.07)' }}
                    >
                      <c.icon className="w-4.5 h-4.5" style={{ color: '#001078' }} />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono font-semibold tracking-[0.18em] uppercase mb-1" style={{ color: '#F8B858' }}>{c.label}</p>
                      <p className="text-[14px] font-semibold" style={{ color: '#1E1E1E' }}>{c.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* What to send */}
              <motion.div
                {...fu}
                transition={{ delay: 0.3 }}
                className="relative rounded-2xl p-6 border border-gray-100 overflow-hidden"
                style={{ background: '#F7F8FB' }}
              >
                <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: '#F8B858' }} />
                <div className="pl-4">
                  <p className="text-[12px] font-mono font-semibold tracking-widest uppercase mb-3" style={{ color: '#001078' }}>What to include</p>
                  <ul className="space-y-2">
                    {['Latest drawings or BOQ', 'Project location and site access', 'Scope of work and quantities', 'Expected start date'].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-[13px]" style={{ color: '#6B7280' }}>
                        <span className="w-1 h-1 rounded-full shrink-0" style={{ background: '#F8B858' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* ── Form ── */}
            <div className="lg:col-span-3">
              <motion.div
                {...fu}
                transition={{ delay: 0.15 }}
                className="rounded-2xl p-7 md:p-9 border border-gray-100 shadow-lg shadow-navy/5"
                style={{ background: '#F7F8FB' }}
              >
                <h3 className="text-[20px] font-bold mb-1.5" style={{ color: '#001078' }}>Request a quotation</h3>
                <p className="text-[13px] mb-7" style={{ color: '#6B7280' }}>
                  Use this form to share project details. OKG will respond with a structured proposal.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label style={labelStyle}>Full Name</label>
                      <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required placeholder="Your full name" className="bg-white" />
                    </div>
                    <div>
                      <label style={labelStyle}>Company Name</label>
                      <Input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Company or project name" className="bg-white" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label style={labelStyle}>Phone / WhatsApp</label>
                      <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+971 XX XXX XXXX" className="bg-white" />
                    </div>
                    <div>
                      <label style={labelStyle}>Email Address</label>
                      <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required placeholder="email@example.com" className="bg-white" />
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>Project Location</label>
                    <Input value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} placeholder="e.g. Dubai, Abu Dhabi, Sharjah" className="bg-white" />
                  </div>
                  <div>
                    <label style={labelStyle}>Service Required</label>
                    <Select value={form.service} onValueChange={(v) => setForm({ ...form, service: v })}>
                      <SelectTrigger className="bg-white">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceOptions.map((opt) => (
                          <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label style={labelStyle}>Scope Details</label>
                    <Textarea
                      value={form.scope}
                      onChange={(e) => setForm({ ...form, scope: e.target.value })}
                      rows={4}
                      placeholder="Briefly describe the scope, quantity, expected start date and any documents available."
                      className="bg-white"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl text-[14px] font-bold text-white transition-all hover:scale-[1.01] shadow-md"
                    style={{ background: '#001078' }}
                  >
                    Submit Enquiry
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[12px] text-center" style={{ color: '#9CA3AF' }}>
                    OKG will review your enquiry and respond with a structured proposal.
                  </p>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}