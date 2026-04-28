import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/shared/PageHero';
import SectionEyebrow from '../components/shared/SectionEyebrow';
import CTABand from '../components/shared/CTABand';

const services = [
  { num: '01', title: 'Building Contracting Works', text: 'Support for villas, commercial units, small developments, extensions, renovations and subcontract packages across the UAE.' },
  { num: '02', title: 'Blockwork & Masonry', text: 'Blockwork, masonry, internal partitions, external walls and coordinated site delivery with clear measurement and progress tracking.' },
  { num: '03', title: 'Plastering Works', text: 'Internal and external plastering works with focus on surface preparation, line, level, finishing quality and supervision.' },
  { num: '04', title: 'Concrete Works', text: 'Execution support for concrete casting, site coordination, pour preparation and labour-based concrete activities.' },
  { num: '05', title: 'Steel Fixing & Shuttering', text: 'Labour and execution support for structural work packages under approved drawings and site supervision.' },
  { num: '06', title: 'Fit-Out & Finishing', text: 'Finishing coordination, renovation works, gypsum, painting, flooring, ceiling and handover-focused support.' },
  { num: '07', title: 'Subcontracting Support', text: 'Structured subcontract package delivery with documentation, attendance tracking and approval control.' },
  { num: '08', title: 'Manpower Mobilisation', text: 'Responsible mobilisation of workers and teams based on scope, schedule and site access conditions.' },
  { num: '09', title: 'Renovation & Maintenance', text: 'Repair, improvement, alteration and finishing works for private, commercial and project-based clients.' },
];

const scopeRows = [
  { item: 'Drawings / BOQ', clarifies: 'Latest drawing revision, quantity, measurement method and specification.', matters: 'Prevents pricing wrong quantities or disputed measurement.' },
  { item: 'Materials', clarifies: 'Whether materials are supplied by OKG, client or main contractor.', matters: 'Prevents back-charge and procurement confusion.' },
  { item: 'Access', clarifies: 'Site access, workfront availability, scaffolding, power, water and storage.', matters: 'Prevents delays caused by unavailable work areas.' },
  { item: 'Approvals', clarifies: 'Inspection process, consultant/client approval and rework responsibility.', matters: 'Ensures handover is controlled and documented.' },
];

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

export default function Services() {
  return (
    <>
      <PageHero
        title="Spectrum of construction activities."
        intro="OKG provides practical contracting support across civil, masonry, plastering, concrete, steel fixing, shuttering, fit-out, finishing and subcontract packages."
      />

      {/* Service Cards */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group bg-offwhite rounded-xl p-6 border border-border hover:border-navy/20 hover:shadow-lg transition-all"
              >
                <span className="text-xs font-mono font-medium text-gold tracking-wider">{s.num}</span>
                <h3 className="text-lg font-semibold text-navy mt-2 mb-3">{s.title}</h3>
                <p className="text-steel text-sm leading-relaxed">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scope Control Table */}
      <section className="py-16 md:py-24 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionEyebrow label="Scope Control" />
          <motion.h2 {...fadeUp} className="text-2xl md:text-4xl font-bold text-navy mb-4 max-w-2xl">
            How OKG defines work before pricing.
          </motion.h2>
          <motion.p {...fadeUp} transition={{ delay: 0.1 }} className="text-steel mb-10 max-w-2xl">
            Good construction starts before mobilisation. A clear scope reduces disputes, delay and cost leakage.
          </motion.p>

          <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="bg-white rounded-xl border border-border overflow-hidden shadow-sm">
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="text-left px-6 py-4 font-semibold">Item</th>
                    <th className="text-left px-6 py-4 font-semibold">What OKG Clarifies</th>
                    <th className="text-left px-6 py-4 font-semibold">Why It Matters</th>
                  </tr>
                </thead>
                <tbody>
                  {scopeRows.map((row, i) => (
                    <tr key={i} className="border-t border-border hover:bg-offwhite transition-colors">
                      <td className="px-6 py-4 font-medium text-navy whitespace-nowrap">{row.item}</td>
                      <td className="px-6 py-4 text-charcoal">{row.clarifies}</td>
                      <td className="px-6 py-4 text-steel">{row.matters}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Mobile Cards */}
            <div className="md:hidden divide-y divide-border">
              {scopeRows.map((row, i) => (
                <div key={i} className="p-5">
                  <h4 className="font-semibold text-navy mb-2">{row.item}</h4>
                  <p className="text-charcoal text-sm mb-1"><span className="font-medium">Clarifies:</span> {row.clarifies}</p>
                  <p className="text-steel text-sm"><span className="font-medium">Why:</span> {row.matters}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <CTABand />
    </>
  );
}