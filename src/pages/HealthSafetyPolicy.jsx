import React from 'react';
import PageHero from '@/components/shared/PageHero';
import CTABand from '@/components/shared/CTABand';
import ChecklistItem from '@/components/shared/ChecklistItem';
import { motion } from 'framer-motion';

export default function HealthSafetyPolicy() {
  return (
    <>
      <PageHero
        title="Health & Safety Policy"
        intro="OKG prioritises worker health and safety through clear protocols, training, hazard management and incident reporting on every project."
        eyebrow="Health & Safety Policy"
        breadcrumb="Health & Safety Policy"
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
              Safety Commitment
            </h2>

            <div className="space-y-6 mb-12">
              <p className="text-lg text-text-secondary leading-relaxed">
                OKG believes that no project is more important than worker safety. Every site activity carries risks that can be managed through proper planning, clear communication and discipline. Safety responsibility is shared across management, supervisors, workers and subcontractors.
              </p>

              <p className="text-base text-text-secondary leading-relaxed">
                Safety is managed through:
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 mb-12">
              <div className="space-y-4">
                {[
                  'Hazard identification and risk assessment',
                  'Daily toolbox talks and safety briefings',
                  'Personal Protective Equipment (PPE) compliance',
                  'Site safety signage and barriers',
                  'First aid and emergency response procedures',
                  'Incident reporting and near-miss management',
                  'Worker training and competence verification',
                  'Regular site safety inspections',
                  'Subcontractor safety compliance monitoring',
                  'Worker health and welfare support',
                ].map((item, idx) => (
                  <ChecklistItem key={idx} text={item} index={idx} />
                ))}
              </div>
            </div>

            <p className="text-base text-text-secondary leading-relaxed">
              Zero tolerance for safety shortcuts. Safety is non-negotiable on every OKG project.
            </p>
          </motion.div>
        </div>
      </section>

      <CTABand />
    </>
  );
}