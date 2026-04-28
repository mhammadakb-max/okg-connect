import React, { useState } from 'react';
import PageHero from '@/components/shared/PageHero';
import SectionEyebrow from '@/components/shared/SectionEyebrow';
import { motion } from 'framer-motion';

const jobCategories = [
  { title: 'Site Supervisors', desc: 'Experienced site supervisors and foremen for project coordination.' },
  { title: 'Skilled Trades', desc: 'Masons, plasterers, carpenters and concrete finishers.' },
  { title: 'Unskilled Labour', desc: 'General labour and support workers for construction projects.' },
  { title: 'Admin Support', desc: 'Office staff, documentation and site administration roles.' },
];

export default function Careers() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', position: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Connect to omerkhalfangc@gmail.com before publishing
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <PageHero
        title="Careers at OKG"
        intro="Join the OKG team. We're looking for experienced professionals in construction, site supervision and project support."
        eyebrow="Careers"
        breadcrumb="Careers"
      />

      {/* Job Categories */}
      <section className="bg-white border-t border-gray-200 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-12"
          >
            <SectionEyebrow label="Open Positions" />
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#001078' }}>
              Join the OKG team.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {jobCategories.map((job, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-gray-50 border border-gray-200 rounded-lg p-8"
              >
                <div className="w-1 h-4 rounded-full mb-4" style={{ backgroundColor: '#F8B858' }} />
                <h3 className="text-lg font-bold mb-3" style={{ color: '#001078' }}>
                  {job.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {job.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="bg-gray-50 border-t border-gray-200 py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto mb-12"
          >
            <SectionEyebrow label="Apply Now" />
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#001078' }}>
              Submit your application.
            </h2>
            <p className="text-lg text-text-secondary">
              Tell us about your experience and the role you're interested in.
            </p>
          </motion.div>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
              <p className="text-lg font-semibold mb-2" style={{ color: '#001078' }}>
                Thank you for applying!
              </p>
              <p className="text-text-secondary">
                OKG will review your application and contact you if there's a match.
              </p>
            </div>
          ) : (
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#001078' }}>
                      Full Name
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

                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#001078' }}>
                      Position
                    </label>
                    <input
                      type="text"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      placeholder="e.g. Site Supervisor"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-md text-text-primary focus:outline-none focus:ring-2"
                      style={{ '--tw-ring-color': '#F8B858' }}
                    />
                  </div>
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
                      required
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-md text-text-primary focus:outline-none focus:ring-2"
                      style={{ '--tw-ring-color': '#F8B858' }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#001078' }}>
                    About You
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your experience, skills and why you're interested in joining OKG."
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-md text-text-primary focus:outline-none focus:ring-2 resize-none"
                    style={{ '--tw-ring-color': '#F8B858' }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 text-white font-semibold rounded-md transition-opacity hover:opacity-90"
                  style={{ backgroundColor: '#001078' }}
                >
                  Submit Application
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
    </>
  );
}