import React from 'react';
import PageHero from '@/components/shared/PageHero';
import CTABand from '@/components/shared/CTABand';
import SectionEyebrow from '@/components/shared/SectionEyebrow';
import ChecklistItem from '@/components/shared/ChecklistItem';
import { motion } from 'framer-motion';

export default function QHSE() {
  return (
    <>
      <PageHero
        title="Quality, Health, Safety & Environment"
        intro="OKG's QHSE approach integrates quality control, safety discipline, environmental responsibility and documented accountability into every project."
        eyebrow="QHSE"
        breadcrumb="QHSE"
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
            <SectionEyebrow label="Our Commitment" />
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#001078' }}>
              QHSE built into project delivery.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Quality Commitment',
                text: 'Work execution that meets specification, passes inspection standards and receives documented approval. Quality is managed through clear standards, daily supervision and final handover verification.',
              },
              {
                title: 'Health & Safety Discipline',
                text: 'Daily safety awareness, hazard management, worker training and incident reporting. All site operations follow safety protocols, PPE requirements and emergency procedures.',
              },
              {
                title: 'Environmental Responsibility',
                text: 'Waste management, pollution control, site housekeeping and resource efficiency. Environmental impacts are minimized through responsible material handling and site cleanup.',
              },
              {
                title: 'Subcontractor Control',
                text: 'Vendor qualification, QHSE compliance verification and performance monitoring. Subcontractors are selected based on QHSE capacity and monitored throughout project execution.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-gray-50 border border-gray-200 rounded-lg p-8"
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

      {/* Site Standards */}
      <section className="bg-gray-50 border-t border-gray-200 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-12"
          >
            <SectionEyebrow label="On-Site Standards" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#001078' }}>
              QHSE expectations on every project.
            </h2>
            <p className="text-lg text-text-secondary">
              OKG's site operations follow clear QHSE standards to protect workers, clients, and project quality.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="space-y-4">
                {[
                  'Daily toolbox talks and safety briefings',
                  'Personal Protective Equipment (PPE) compliance',
                  'Incident reporting and near-miss tracking',
                  'Site safety signage and barriers',
                  'First aid and emergency response readiness',
                  'Worker health and welfare monitoring',
                ].map((item, idx) => (
                  <ChecklistItem key={idx} text={item} index={idx} />
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="space-y-4">
                {[
                  'Quality inspection schedules and sign-off',
                  'Material testing and specification compliance',
                  'Work documentation and photo records',
                  'Waste segregation and disposal management',
                  'Site housekeeping and cleanliness standards',
                  'Subcontractor performance monitoring',
                ].map((item, idx) => (
                  <ChecklistItem key={idx} text={item} index={idx + 6} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}