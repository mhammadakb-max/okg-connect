import React from 'react';
import PageHero from '@/components/shared/PageHero';
import CTABand from '@/components/shared/CTABand';
import SectionEyebrow from '@/components/shared/SectionEyebrow';
import ChecklistItem from '@/components/shared/ChecklistItem';
import { motion } from 'framer-motion';

export default function PeopleFocus() {
  return (
    <>
      <PageHero
        title="People Focus"
        intro="OKG operates with clear focus on worker safety, proper supervision, fair compensation and responsible site management."
        eyebrow="People Focus"
        breadcrumb="People Focus"
      />

      {/* Pillars */}
      <section className="bg-white border-t border-gray-200 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-12"
          >
            <SectionEyebrow label="People Management" />
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#001078' }}>
              Three pillars of people management.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Worker Supervision',
                text: 'Daily site supervision ensures workers understand their tasks, follow safety requirements, maintain output targets and receive proper support throughout their assignments.',
              },
              {
                title: 'Safety & Welfare',
                text: 'Worker health and safety is managed through toolbox talks, PPE compliance, incident reporting and welfare facilities. OKG prioritises a safe working environment.',
              },
              {
                title: 'Site Documentation',
                text: 'Work progress, attendance, safety incidents and quality records are documented daily. Clear documentation protects both workers and project management.',
              },
            ].map((pillar, idx) => (
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
                  {pillar.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {pillar.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards */}
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
              Workforce management standards.
            </h2>
            <p className="text-lg text-text-secondary">
              OKG's workforce approach covers supervision, documentation, safety and accountability on every project.
            </p>
          </motion.div>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="space-y-4">
              {[
                'Clear work assignments and daily instructions',
                'Tool box talks and safety briefings',
                'Daily attendance records and time tracking',
                'Work progress documentation and photos',
                'Incident reporting and near-miss management',
                'PPE compliance and safety equipment provision',
                'Welfare facilities and reasonable working hours',
                'Subcontractor qualification and monitoring',
              ].map((item, idx) => (
                <ChecklistItem key={idx} text={item} index={idx} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}