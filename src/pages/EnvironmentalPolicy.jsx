import React from 'react';
import PageHero from '@/components/shared/PageHero';
import CTABand from '@/components/shared/CTABand';
import ChecklistItem from '@/components/shared/ChecklistItem';
import { motion } from 'framer-motion';

export default function EnvironmentalPolicy() {
  return (
    <>
      <PageHero
        title="Environmental Policy"
        intro="OKG is committed to responsible environmental management including waste control, pollution prevention and sustainable resource use."
        eyebrow="Environmental Policy"
        breadcrumb="Environmental Policy"
      />

      {/* Policy Statement */}
      <section className="bg-white border-t border-gray-200 py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#001078' }}>
              Environmental Responsibility
            </h2>

            <div className="space-y-6 mb-12">
              <p className="text-lg text-text-secondary leading-relaxed">
                Construction activities impact the environment through material use, waste generation, dust, noise and site disturbance. OKG manages environmental impacts through responsible planning, waste segregation, dust control and site housekeeping.
              </p>

              <p className="text-base text-text-secondary leading-relaxed">
                Environmental management includes:
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 mb-12">
              <div className="space-y-4">
                {[
                  'Waste segregation and responsible disposal',
                  'Dust and pollution control measures',
                  'Water management and pollution prevention',
                  'Site housekeeping and cleanliness standards',
                  'Material storage and handling protocols',
                  'Noise management during operations',
                  'Environmental compliance monitoring',
                  'Worker environmental awareness training',
                ].map((item, idx) => (
                  <ChecklistItem key={idx} text={item} index={idx} />
                ))}
              </div>
            </div>

            <p className="text-base text-text-secondary leading-relaxed">
              Environmental responsibility is part of OKG's commitment to operating as a responsible contractor in the UAE.
            </p>
          </motion.div>
        </div>
      </section>

      <CTABand />
    </>
  );
}