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
        intro="Discuss your project scope, request a quotation or learn more about our construction services."
        eyebrow="Contact"
        breadcrumb="Contact"
      />

      {/* Contact Section */}
      <section className="bg-white border-t border-gray-200 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="space-y-12">
                <div>
                  <SectionEyebrow label="Get In Touch" />
                  <h2 className="text-3xl font-bold mb-6" style={{ color: '#001078' }}>
                    Ready to discuss your project?
                  </h2>
                  <p className="text-lg text-text-secondary leading-relaxed">
                    Share your project scope, drawings, BOQ, location and timeline. OKG will review and respond with a clear, structured proposal.
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    { Icon: Phone, label: 'Phone', value: '+971 54 217 1502' },
                    { Icon: Mail, label: 'Email', value: 'omerkhalfangc@gmail.com' },
                    { Icon: MessageCircle, label: 'WhatsApp', value: '+971 54 217 1502', link: 'https://wa.me/971542171502' },
                    { Icon: MapPin, label: 'Location', value: 'Warba Centre, Office 504, Al Muraqabat, Deira, Dubai, UAE' },
                  ].map((contact, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#F8B858' }}>
                        <contact.Icon className="w-5 h-5" style={{ color: '#001078' }} />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest" style={{ color: '#001078' }}>
                          {contact.label}
                        </p>
                        {contact.link ? (
                          <a href={contact.link} target="_blank" rel="noopener noreferrer" className="text-base text-text-secondary mt-1 hover:text-navy transition-colors">
                            {contact.value}
                          </a>
                        ) : (
                          <p className="text-base text-text-secondary mt-1">
                            {contact.value}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Quotation Form */}
            <QuotationForm />
          </div>
        </div>
      </section>
    </>
  );
}