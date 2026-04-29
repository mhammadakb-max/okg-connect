import React from 'react';
import PageHero from '@/components/shared/PageHero';
import SectionEyebrow from '@/components/shared/SectionEyebrow';
import QuotationForm from '@/components/contact/QuotationForm';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <PageHero
        title="Contact OKG"
        intro="Send us your project requirements and our team will review the scope, location, timeline and next steps with clarity."
        eyebrow="Contact"
        breadcrumb="Contact"
      />

      {/* Quotation Section */}
      <section className="bg-white border-t border-gray-200 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-start">
            <QuotationForm />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-8"
            >
              <SectionEyebrow label="How We Respond" />
              <h2 className="text-3xl font-bold mb-5" style={{ color: '#001078' }}>
                Clear information helps us quote properly.
              </h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                Please include the work scope, location, drawings or BOQ status, expected start date and any site access requirements. This helps OKG review your request faster and respond with practical next steps.
              </p>
              <div className="grid gap-3">
                {['Scope review and clarification', 'Practical delivery and mobilisation guidance', 'Commercial response based on provided details'].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-xl bg-white border border-gray-200 p-4">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#F8B858' }} />
                    <span className="text-sm font-medium text-text-primary">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Details */}
      <section className="bg-gray-50 border-t border-gray-200 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 max-w-2xl"
          >
            <SectionEyebrow label="Contact Details" />
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#001078' }}>
              Prefer to speak directly?
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Contact OKG for project enquiries, quotation follow-ups, subcontractor coordination or general company information.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { Icon: Phone, label: 'Phone', value: '+971 54 217 1502' },
              { Icon: Mail, label: 'Email', value: 'info@okgcontracting.com' },
              { Icon: MessageCircle, label: 'WhatsApp', value: '+971 54 217 1502', link: 'https://wa.me/971542171502' },
              { Icon: MapPin, label: 'Office', value: 'Warba Centre, Office 504, Al Muraqabat, Deira, Dubai, UAE' },
            ].map((contact, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#F8B858' }}>
                  <contact.Icon className="w-5 h-5" style={{ color: '#001078' }} />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#001078' }}>
                  {contact.label}
                </p>
                {contact.link ? (
                  <a href={contact.link} target="_blank" rel="noopener noreferrer" className="text-sm text-text-secondary hover:text-navy transition-colors">
                    {contact.value}
                  </a>
                ) : (
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {contact.value}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}