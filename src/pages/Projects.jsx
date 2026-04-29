import React from 'react';
import PageHero from '@/components/shared/PageHero';
import CTABand from '@/components/shared/CTABand';
import SectionEyebrow from '@/components/shared/SectionEyebrow';
import ChecklistItem from '@/components/shared/ChecklistItem';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <>
      <PageHero
        title="Project Approach"
        intro="OKG documents projects with clear scope, location, timeline, approvals and handover status to ensure transparent coordination."
        eyebrow="Projects"
        breadcrumb="Projects"
      />

      {/* Project Methodology */}
      <section className="bg-white border-t border-gray-200 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-12"
          >
            <SectionEyebrow label="Our Approach" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#001078' }}>
              Project approach built on clarity and accountability.
            </h2>
            <p className="text-lg text-text-secondary">
              OKG presents project information through clear scope, location, quantity, timeline, approval status and documented handover details where available.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="relative h-96 bg-gray-100 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5"
            >
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=85"
                alt="Project execution"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold mb-3" style={{ color: '#001078' }}>
                    Project documentation standard
                  </h3>
                  <p className="text-base text-text-secondary mb-6 leading-relaxed">
                    Each project package should be recorded with the details needed for transparent coordination and professional handover.
                  </p>
                </div>

                <div className="space-y-3">
                  {[
                    'Project name and location',
                    'Client or main contractor, where permitted',
                    'Scope and quantity',
                    'Workfront and timeline',
                    'Progress photos where available',
                    'Inspection and handover status',
                  ].map((item, idx) => (
                    <ChecklistItem key={idx} text={item} index={idx} />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="bg-gray-50 border-t border-gray-200 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-12"
          >
            <SectionEyebrow label="Work Packages" />
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#001078' }}>
              OKG project categories.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Civil Works', desc: 'Structural, foundation and civil execution support.' },
              { title: 'Masonry & Blockwork', desc: 'Brick, block and stone masonry work packages.' },
              { title: 'Concrete Works', desc: 'Concrete casting, finishing and curing support.' },
              { title: 'Steel & Shuttering', desc: 'Rebar, formwork and steel fixing coordination.' },
              { title: 'Finishing Works', desc: 'Plastering, doors, windows and final finishes.' },
              { title: 'Fit-Out Projects', desc: 'Interior fit-out and complete project finishing.' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="text-base font-bold mb-2" style={{ color: '#001078' }}>
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary">
                  {item.desc}
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