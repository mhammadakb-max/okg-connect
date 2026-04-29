import React from 'react';
import PageHero from '@/components/shared/PageHero';
import CTABand from '@/components/shared/CTABand';
import SectionEyebrow from '@/components/shared/SectionEyebrow';
import { motion } from 'framer-motion';

export default function SocialCommitment() {
  return (
    <>
      <PageHero
        title="Social Commitment"
        intro="OKG operates with commitment to fair practices, ethical business conduct and responsible engagement with communities and workers."
        eyebrow="Social Commitment"
        breadcrumb="Social Commitment"
      />

      {/* Commitments */}
      <section className="bg-white border-t border-gray-200 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-12"
          >
            <SectionEyebrow label="Our Values" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#001078' }}>
              Operating with responsibility and integrity.
            </h2>
            <p className="text-lg text-text-secondary">
              OKG's social commitment is based on fair treatment, honest communication and ethical business practice.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Fair Labour Practices',
                text: 'Workers receive fair compensation, clear working terms, safe conditions and respectful treatment. OKG does not engage in exploitative labour practices.',
              },
              {
                title: 'Community Respect',
                text: 'OKG operates with consideration for neighbouring communities, minimising disruption and managing environmental and noise impacts responsibly.',
              },
              {
                title: 'Ethical Business',
                text: 'OKG conducts business with honesty, transparency and integrity. We do not engage in corruption, bribery or unethical practices.',
              },
              {
                title: 'Subcontractor Standards',
                text: 'OKG works with subcontractors and vendors that share our commitment to fair practices, safety and environmental responsibility.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-1 h-6 rounded-full mb-4" style={{ backgroundColor: '#F8B858' }} />
                <h3 className="text-lg font-bold mb-3" style={{ color: '#001078' }}>
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}