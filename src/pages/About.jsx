import React from 'react';
import PageHero from '@/components/shared/PageHero';
import CTABand from '@/components/shared/CTABand';
import ValueCard from '@/components/shared/ValueCard';
import SectionEyebrow from '@/components/shared/SectionEyebrow';
import { motion } from 'framer-motion';

const values = [
  {
    title: 'Honesty',
    text: 'Clear communication about capacity, timeline, costs and realistic delivery.',
  },
  {
    title: 'Discipline',
    text: 'Structured approach to scope, mobilisation, supervision and documentation.',
  },
  {
    title: 'Accountability',
    text: 'Taking responsibility for agreed work and transparent reporting of progress.',
  },
  {
    title: 'Vision',
    text: 'Understanding each project\'s unique requirements and supporting practical solutions.',
  },
];

export default function About() {
  return (
    <>
      <PageHero
        title="About OKG Building Contracting"
        intro="OKG serves the UAE construction market as a disciplined contractor focused on clear scope alignment, responsible mobilisation, daily site supervision, QHSE coordination and transparent delivery."
        eyebrow="Company Profile"
        breadcrumb="About"
      />

      {/* Profile Section */}
      <section className="bg-gray-50 border-t border-gray-200 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <SectionEyebrow label="Who We Are" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#001078' }}>
                Straightforward contractor for UAE construction projects.
              </h2>

              <div className="space-y-6">
                <p className="text-lg text-text-secondary leading-relaxed">
                  OKG works with project teams, contractors and clients that need reliable on-site execution, clear scope definition, responsible manpower coordination and proper work documentation. We focus on civil works, masonry, plastering, concrete, steel fixing, shuttering, fit-out and finishing projects.
                </p>

                <p className="text-base text-text-secondary leading-relaxed">
                  Our operating model is built around practical site control, transparent communication and accountability for agreed deliverables.
                </p>

                <div>
                  <p className="text-sm font-bold mb-4" style={{ color: '#001078' }}>
                    Core operating areas:
                  </p>
                  <ul className="space-y-2">
                    {[
                      'Dubai, Abu Dhabi and Northern Emirates',
                      'Civil and structural works support',
                      'Finish and fit-out projects',
                      'Subcontractor coordination and control',
                      'Manpower mobilisation and supervision',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-text-secondary">
                        <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#F8B858' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative h-96 bg-white rounded-lg overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=600&fit=crop"
                alt="About OKG"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white border-t border-gray-200 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-12"
          >
            <SectionEyebrow label="Core Values" />
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#001078' }}>
              Values that guide our work.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, idx) => (
              <ValueCard
                key={idx}
                title={value.title}
                text={value.text}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}