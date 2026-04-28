import React from 'react';
import PageHero from '@/components/shared/PageHero';
import CTABand from '@/components/shared/CTABand';
import ChecklistItem from '@/components/shared/ChecklistItem';
import { motion } from 'framer-motion';

export default function QualityPolicy() {
  return (
    <>
      <PageHero
        title="Quality Policy"
        intro="OKG is committed to delivering quality workmanship that meets specifications, passes inspection standards and achieves documented approval on every project."
        eyebrow="Quality Policy"
        breadcrumb="Quality Policy"
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
              Quality Commitment
            </h2>

            <div className="space-y-6 mb-12">
              <p className="text-lg text-text-secondary leading-relaxed">
                OKG's quality approach focuses on clear specification, proper execution, documentation and final verification. Every construction project requires quality management to protect the client's investment and ensure long-term reliability.
              </p>

              <p className="text-base text-text-secondary leading-relaxed">
                Quality is managed through:
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 mb-12">
              <div className="space-y-4">
                {[
                  'Specification review and material approval before mobilisation',
                  'Daily quality checks during work execution',
                  'Documented inspection records and sign-off',
                  'Corrective actions for non-conformance',
                  'Final inspection and handover verification',
                  'Subcontractor quality monitoring and compliance',
                  'Client communication on quality status',
                  'Continuous improvement on quality management',
                ].map((item, idx) => (
                  <ChecklistItem key={idx} text={item} index={idx} />
                ))}
              </div>
            </div>

            <p className="text-base text-text-secondary leading-relaxed">
              Quality is not an add-on activity — it is integrated into every stage of project planning, execution and handover.
            </p>
          </motion.div>
        </div>
      </section>

      <CTABand />
    </>
  );
}