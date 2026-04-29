import React, { useState } from 'react';
import PageHero from '@/components/shared/PageHero';
import SectionEyebrow from '@/components/shared/SectionEyebrow';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { base44 } from '@/api/base44Client';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await base44.functions.invoke('sendContactForm', formData);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Failed to send enquiry. Please try again.');
    }
  };

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
                    { Icon: Mail, label: 'Email', value: 'info@okgcontracting.com' },
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

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <p className="text-lg font-semibold mb-2" style={{ color: '#001078' }}>
                    Thank you for your enquiry!
                  </p>
                  <p className="text-text-secondary">
                    OKG will review your details and respond shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#001078' }}>
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-md text-text-primary focus:outline-none focus:ring-2"
                      style={{ '--tw-ring-color': '#F8B858' }}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: '#001078' }}>
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-md text-text-primary focus:outline-none focus:ring-2"
                        style={{ '--tw-ring-color': '#F8B858' }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: '#001078' }}>
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-md text-text-primary focus:outline-none focus:ring-2"
                        style={{ '--tw-ring-color': '#F8B858' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#001078' }}>
                      Project Details
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Describe your project scope, location, timeline and any specific requirements."
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-md text-text-primary focus:outline-none focus:ring-2 resize-none"
                      style={{ '--tw-ring-color': '#F8B858' }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 text-white font-semibold rounded-md transition-opacity hover:opacity-90"
                    style={{ backgroundColor: '#001078' }}
                  >
                    Send Enquiry
                  </button>

                  <p className="text-xs text-text-secondary text-center">
                    We respect your privacy. Form submissions are handled securely.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}