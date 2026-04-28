import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, ArrowRight, CheckCircle2 } from 'lucide-react';
import PageHero from '../components/shared/PageHero';
import SectionEyebrow from '../components/shared/SectionEyebrow';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { base44 } from '@/api/base44Client';

const C = { ivory: '#F7F4EE', stone: '#F1ECE4', warmWhite: '#FBF9F5', charcoal: '#1F1F1B', charcoalDk: '#2E2B27', taupe: '#67635C', border: '#DDD6CB', bronze: '#B58A57' };

const contactInfo = [
  { icon: Phone, label: 'Phone / WhatsApp', value: '+971 54 217 1502' },
  { icon: Mail, label: 'Email', value: 'info@okgcontracting.com' },
  { icon: MapPin, label: 'Location', value: 'United Arab Emirates' },
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
const labelStyle = { fontSize: 12, fontWeight: 600, color: '#1F1F1B', display: 'block', marginBottom: 6, letterSpacing: '0.02em' };
const inputStyle = { background: '#FBF9F5', borderColor: '#DDD6CB' };

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', phone: '', email: '', location: '', service: '', scope: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    const body = `
New enquiry received from OKG website — okgcontracting.com

Name: ${form.name}
Company: ${form.company || 'Not provided'}
Phone / WhatsApp: ${form.phone || 'Not provided'}
Email: ${form.email}
Project Location: ${form.location || 'Not provided'}
Service Required: ${form.service || 'Not specified'}

Scope Details:
${form.scope || 'Not provided'}

---
Submitted: ${new Date().toLocaleString('en-GB', { timeZone: 'Asia/Dubai' })} (UAE time)
    `.trim();

    await base44.integrations.Core.SendEmail({
      to: 'omerkhalfangc@gmail.com',
      from_name: 'OKG Website',
      subject: `New OKG Enquiry — ${form.name}${form.company ? ' / ' + form.company : ''}`,
      body,
    });

    setSent(true);
    setForm({ name: '', company: '', phone: '', email: '', location: '', service: '', scope: '' });
    toast.success('Enquiry submitted. OKG will review your details and respond.');
    setSending(false);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        breadcrumb="Contact"
        title="Request a quotation or discuss a subcontract package."
        intro="Share drawings, BOQ, location, site condition and expected start date. OKG can review the scope and prepare a clear, structured proposal."
      />

      <section className="py-20 md:py-28" style={{ background: C.warmWhite }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">

            {/* Info panel */}
            <div className="lg:col-span-2 space-y-6">
              <SectionEyebrow label="Contact Details" />
              <motion.h2 {...fu} className="font-display text-[24px] md:text-[30px] font-extrabold leading-[1.15] tracking-[-0.015em]" style={{ color: C.charcoal }}>
                Talk to OKG about your project.
              </motion.h2>
              <motion.p {...fu} transition={{ delay: 0.1 }} className="text-[14px] leading-[1.85]" style={{ color: C.taupe }}>
                For a faster response, send the latest drawings, BOQ, scope notes, location, site photos and expected start date.
              </motion.p>

              <div className="space-y-3">
                {contactInfo.map((c, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-4 p-4 rounded-lg bg-white border"
                    style={{ borderColor: C.border }}
                  >
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: C.stone }}>
                      <c.icon className="w-4 h-4" style={{ color: C.charcoalDk }} />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono font-semibold tracking-[0.18em] uppercase mb-0.5" style={{ color: C.bronze }}>{c.label}</p>
                      <p className="text-[14px] font-semibold" style={{ color: C.charcoal }}>{c.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* What to include */}
              <motion.div {...fu} transition={{ delay: 0.3 }} className="relative rounded-lg p-6 overflow-hidden" style={{ background: C.stone, border: `1px solid ${C.border}` }}>
                <div className="absolute left-0 top-0 bottom-0 w-[2px]" style={{ background: C.bronze }} />
                <div className="pl-5">
                  <p className="text-[10.5px] font-mono font-semibold tracking-[0.18em] uppercase mb-3" style={{ color: C.bronze }}>What to include</p>
                  <ul className="space-y-2">
                    {['Latest drawings or BOQ', 'Project location and site access', 'Scope of work and quantities', 'Expected start date'].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-[13px]" style={{ color: C.taupe }}>
                        <span className="w-1 h-1 rounded-full shrink-0" style={{ background: C.bronze }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Site image */}
              <motion.div {...fu} transition={{ delay: 0.35 }} className="relative rounded-xl overflow-hidden hidden lg:block" style={{ height: 200 }}>
                <img
                  src="https://media.base44.com/images/public/69f0f9c5f2486cca9280edd1/5879e578b_generated_image.png"
                  alt="UAE construction site cranes modern buildings"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(46,43,39,0) 0%, rgba(46,43,39,0.6) 100%)' }} />
                <div className="absolute bottom-0 left-0 right-0 px-5 py-4">
                  <p className="text-[11.5px] font-semibold text-white">Building Contracting · UAE</p>
                  <p className="text-[11px]" style={{ color: 'rgba(251,249,245,0.55)' }}>Civil · Masonry · Fit-Out · QHSE</p>
                </div>
              </motion.div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <motion.div
                {...fu}
                transition={{ delay: 0.1 }}
                className="rounded-xl p-7 md:p-9 border bg-white"
                style={{ borderColor: C.border, boxShadow: '0 4px 20px rgba(31,31,27,0.06)' }}
              >
                {sent ? (
                  <div className="text-center py-12">
                    <CheckCircle2 className="w-12 h-12 mx-auto mb-4" style={{ color: C.bronze }} />
                    <h3 className="text-[22px] font-bold mb-2" style={{ color: C.charcoal }}>Enquiry received.</h3>
                    <p className="text-[14px] leading-relaxed mb-6" style={{ color: C.taupe }}>
                      OKG will review your details and respond with a structured proposal.
                    </p>
                    <button onClick={() => setSent(false)} className="text-[13px] font-semibold underline" style={{ color: C.charcoal }}>
                      Send another enquiry
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-[20px] font-bold mb-1.5" style={{ color: C.charcoal }}>Request a quotation</h3>
                    <p className="text-[13px] mb-7" style={{ color: C.taupe }}>Use this form to share project details. OKG will respond with a structured proposal.</p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <label style={labelStyle}>Full Name *</label>
                          <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required placeholder="Your full name" style={inputStyle} />
                        </div>
                        <div>
                          <label style={labelStyle}>Company Name</label>
                          <Input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Company or project name" style={inputStyle} />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <label style={labelStyle}>Phone / WhatsApp</label>
                          <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+971 54 217 1502" style={inputStyle} />
                        </div>
                        <div>
                          <label style={labelStyle}>Email Address *</label>
                          <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required placeholder="email@example.com" style={inputStyle} />
                        </div>
                      </div>
                      <div>
                        <label style={labelStyle}>Project Location</label>
                        <Input value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} placeholder="e.g. Dubai, Abu Dhabi, Sharjah" style={inputStyle} />
                      </div>
                      <div>
                        <label style={labelStyle}>Service Required</label>
                        <Select value={form.service} onValueChange={(v) => setForm({ ...form, service: v })}>
                          <SelectTrigger style={inputStyle}>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {serviceOptions.map((opt) => <SelectItem key={opt} value={opt}>{opt}</SelectItem>)}
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
                          style={inputStyle}
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={sending}
                        className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-lg text-[13.5px] font-semibold transition-all hover:opacity-85 disabled:opacity-60"
                        style={{ background: C.charcoalDk, color: '#FBF9F5' }}
                      >
                        {sending ? 'Sending…' : 'Submit Enquiry'}
                        {!sending && <ArrowRight className="w-4 h-4" />}
                      </button>
                      <p className="text-[11.5px] text-center" style={{ color: '#9CA3AF' }}>
                        OKG will review your enquiry and respond with a structured proposal.
                      </p>
                    </form>
                  </>
                )}
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}