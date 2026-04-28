import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import PageHero from '../components/shared/PageHero';
import SectionEyebrow from '../components/shared/SectionEyebrow';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

const contactInfo = [
  { icon: MapPin, label: 'Location', value: 'United Arab Emirates' },
  { icon: Phone, label: 'Phone', value: '+971 XX XXX XXXX' },
  { icon: Mail, label: 'Email', value: 'info@okgcontracting.com' },
];

const serviceOptions = [
  'Building contracting works',
  'Blockwork and masonry',
  'Plastering works',
  'Concrete, shuttering and steel fixing',
  'Fit-out and finishing',
  'Subcontracting or manpower support',
];

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

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
        title="Request a quotation or discuss a subcontract package."
        intro="Share your drawings, BOQ, location, site condition and expected start date. OKG can review the scope and prepare a clear proposal."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <SectionEyebrow label="Contact Details" />
              <motion.h2 {...fadeUp} className="text-2xl md:text-3xl font-bold text-navy mb-4">
                Talk to OKG about your project.
              </motion.h2>
              <motion.p {...fadeUp} transition={{ delay: 0.1 }} className="text-steel mb-8 leading-relaxed">
                For a faster response, send the latest drawings, BOQ, scope notes, location, site photos and expected start date.
              </motion.p>

              <div className="space-y-5">
                {contactInfo.map((c, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center shrink-0">
                      <c.icon className="w-5 h-5 text-navy" />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-gold uppercase tracking-wider mb-0.5">{c.label}</p>
                      <p className="text-charcoal font-medium">{c.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Image */}
              <div className="mt-10 rounded-2xl overflow-hidden shadow-lg hidden lg:block">
                <img
                  src="https://media.base44.com/images/public/69f0f9c5f2486cca9280edd1/cb91a0e25_generated_1adfcffb.png"
                  alt="Modern UAE construction site office"
                  className="w-full h-56 object-cover"
                />
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="bg-offwhite rounded-xl p-6 md:p-8 border border-border">
                <h3 className="text-xl font-bold text-navy mb-2">Request a quotation</h3>
                <p className="text-steel text-sm mb-6">
                  Use this enquiry form to share project details. It can later connect to email, WhatsApp, CRM or a backend service.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-medium text-navy mb-1.5 block">Full Name</label>
                      <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-navy mb-1.5 block">Company Name</label>
                      <Input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Company or project name" />
                    </div>
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
                    <label className="text-sm font-medium text-navy mb-1.5 block">Project Location</label>
                    <Input value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} placeholder="e.g. Dubai, Abu Dhabi, Sharjah" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-navy mb-1.5 block">Service Required</label>
                    <Select value={form.service} onValueChange={(v) => setForm({ ...form, service: v })}>
                      <SelectTrigger>
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
                    <label className="text-sm font-medium text-navy mb-1.5 block">Scope Details</label>
                    <Textarea
                      value={form.scope}
                      onChange={(e) => setForm({ ...form, scope: e.target.value })}
                      rows={4}
                      placeholder="Briefly describe the scope, quantity, expected start date and any documents available."
                    />
                  </div>
                  <Button type="submit" className="w-full bg-navy hover:bg-navy/90 text-white font-semibold py-3">
                    Submit Enquiry
                  </Button>
                  <p className="text-xs text-steel text-center">
                    Note: Form submission requires backend connection during development.
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