import React from 'react';
import PageHero from '@/components/shared/PageHero';
import CTABand from '@/components/shared/CTABand';
import SectionEyebrow from '@/components/shared/SectionEyebrow';
import ChecklistItem from '@/components/shared/ChecklistItem';
import { motion } from 'framer-motion';

const capabilities = [
  'Scope & BOQ Alignment',
  'Mobilisation Planning',
  'Site Supervision',
  'Subcontractor Control',
  'Documentation Management',
  'Progress Reporting',
  'QHSE Coordination',
  'Handover Support',
];

const steps = [
  { step: 'Step 1', title: 'Scope Review', desc: 'Understand location, quantities, client requirements and project timeline.' },
  { step: 'Step 2', title: 'Commercial Alignment', desc: 'Define clear pricing, payment terms, mobilisation plan and resource needs.' },
  { step: 'Step 3', title: 'Mobilisation', desc: 'Coordinate manpower, materials, site setup and approval schedules.' },
  { step: 'Step 4', title: 'Execution Control', desc: 'Daily supervision, progress tracking, quality checking and documentation.' },
  { step: 'Step 5', title: 'Handover', desc: 'Final inspections, punch list clearance and formal project completion.' },
];

export default function Capabilities() {
  return (
    <>
      <PageHero
        title="OKG Capabilities"
        intro="OKG operates with a structured approach to project coordination, site control and transparent communication built on practical construction experience."
        eyebrow="Capabilities"
        breadcrumb="Capabilities"
      />

      {/* Core Capabilities */}
      <section className="bg-white border-t border-gray-200 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-12"
          >
            <SectionEyebrow label="Operating Capabilities" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#001078' }}>
              Built to operate with clarity, control and accountability.
            </h2>
            <p className="text-lg text-text-secondary">
              OKG's operating model is designed around clear communication, realistic mobilisation, measurable work progress and accountable project coordination.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center"
              >
                <p className="font-semibold text-sm" style={{ color: '#001078' }}>
                  {cap}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Execution Process */}
      <section className="bg-gray-50 border-t border-gray-200 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-12"
          >
            <SectionEyebrow label="Project Execution" />
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#001078' }}>
              Five-step delivery model.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {steps.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white border border-gray-200 rounded-lg p-6"
              >
                <div className="text-sm font-bold mb-3" style={{ color: '#F8B858' }}>
                  {item.step}
                </div>
                <h3 className="text-base font-bold mb-2" style={{ color: '#001078' }}>
                  {item.title}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section className="bg-white border-t border-gray-200 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-12"
          >
            <SectionEyebrow label="Documentation" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#001078' }}>
              Standard documentation approach.
            </h2>
            <p className="text-lg text-text-secondary">
              OKG maintains clear project documentation to support transparent communication and professional handover.
            </p>
          </motion.div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
            <div className="space-y-4">
              {[
                'Scope & BOQ documentation',
                'Commercial quotations and agreements',
                'Mobilisation plans and schedules',
                'Daily progress reports and photos',
                'Inspection and approval records',
                'Handover documentation and sign-off',
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