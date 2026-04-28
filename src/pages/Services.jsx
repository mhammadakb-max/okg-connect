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

const fu = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Spectrum of construction activities."
        intro="OKG provides practical contracting support across civil, masonry, plastering, concrete, steel fixing, shuttering, fit-out, finishing and subcontract packages."
      />

      {/* ─── Service grid ────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionEyebrow label="Work packages" />
          <motion.h2 {...fu} className="text-3xl md:text-[40px] font-bold leading-[1.18] tracking-[-0.015em] mb-12" style={{ color: '#001078' }}>
            What OKG can deliver on site.
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group relative rounded-2xl p-7 border border-gray-100 hover:border-gray-200 hover:shadow-xl hover:shadow-navy/6 transition-all overflow-hidden"
                style={{ background: '#F7F8FB' }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: '#F8B858' }}
                />
                <span className="text-[11px] font-mono font-bold block mb-3" style={{ color: '#F8B858' }}>{s.num}</span>
                <h3 className="text-[16px] font-bold mb-3 leading-snug" style={{ color: '#001078' }}>{s.title}</h3>
                <p className="text-[13.5px] leading-relaxed" style={{ color: '#6B7280' }}>{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Scope Control ───────────────────────────────────────────────── */}
      <section className="py-20 md:py-28" style={{ background: '#F7F8FB' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionEyebrow label="Scope Control" />
          <motion.h2 {...fu} className="text-3xl md:text-[40px] font-bold leading-[1.18] tracking-[-0.015em] mb-4" style={{ color: '#001078' }}>
            How OKG defines work before pricing.
          </motion.h2>
          <motion.p {...fu} transition={{ delay: 0.1 }} className="text-[15px] leading-[1.8] mb-12 max-w-2xl" style={{ color: '#6B7280' }}>
            Good construction starts before mobilisation. A clear scope reduces disputes, delay and cost leakage.
          </motion.p>

          <motion.div {...fu} transition={{ delay: 0.15 }} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            {/* Desktop */}
            <div className="hidden md:block">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: '#001078' }}>
                    <th className="text-left px-7 py-5 text-[12px] font-semibold tracking-wide text-white/80 uppercase w-40">Item</th>
                    <th className="text-left px-7 py-5 text-[12px] font-semibold tracking-wide text-white/80 uppercase">What OKG Clarifies</th>
                    <th className="text-left px-7 py-5 text-[12px] font-semibold tracking-wide text-white/80 uppercase">Why It Matters</th>
                  </tr>
                </thead>
                <tbody>
                  {scopeRows.map((row, i) => (
                    <tr key={i} className="border-t border-gray-100 hover:bg-offwhite transition-colors">
                      <td className="px-7 py-5 font-bold text-[13px] whitespace-nowrap" style={{ color: '#001078' }}>
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#F8B858' }} />
                          {row.item}
                        </div>
                      </td>
                      <td className="px-7 py-5 text-[13.5px] leading-relaxed" style={{ color: '#1E1E1E' }}>{row.clarifies}</td>
                      <td className="px-7 py-5 text-[13px] leading-relaxed" style={{ color: '#6B7280' }}>{row.matters}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Mobile */}
            <div className="md:hidden divide-y divide-gray-100">
              {scopeRows.map((row, i) => (
                <div key={i} className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#F8B858' }} />
                    <h4 className="font-bold text-[14px]" style={{ color: '#001078' }}>{row.item}</h4>
                  </div>
                  <p className="text-[13px] leading-relaxed mb-2" style={{ color: '#1E1E1E' }}><span className="font-semibold">Clarifies:</span> {row.clarifies}</p>
                  <p className="text-[13px] leading-relaxed" style={{ color: '#6B7280' }}><span className="font-semibold">Why:</span> {row.matters}</p>
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