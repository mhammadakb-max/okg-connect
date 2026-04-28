import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/shared/PageHero';
import SectionEyebrow from '../components/shared/SectionEyebrow';
import CTABand from '../components/shared/CTABand';

const P = { white: '#FFFFFF', bg: '#F7F9FF', bg2: '#F2F6FF', tint: '#EAF0FF', blue: '#6E85E8', blueL: '#8FA2F2', head: '#5F6D9A', head2: '#3D4A73', body: '#7C86A8', muted: '#97A0BC', border: '#E6EBF5' };

const services = [
  { num: '01', title: 'Building Contracting Works', text: 'Support for villas, commercial units, small developments, extensions, renovations and subcontract packages across the UAE.', img: 'https://media.base44.com/images/public/69f0f9c5f2486cca9280edd1/b7de27fed_generated_image.png', alt: 'Active building construction site UAE' },
  { num: '02', title: 'Blockwork & Masonry', text: 'Blockwork, masonry, internal partitions, external walls and coordinated site delivery with clear measurement and progress tracking.', img: 'https://media.base44.com/images/public/69f0f9c5f2486cca9280edd1/b42f1aeda_generated_image.png', alt: 'Workers PPE laying concrete blocks masonry wall construction site' },
  { num: '03', title: 'Plastering Works', text: 'Internal and external plastering with focus on surface preparation, line, level, finishing quality and supervision.', img: 'https://media.base44.com/images/public/69f0f9c5f2486cca9280edd1/a65b1ec5c_generated_image.png', alt: 'Construction worker PPE applying plaster trowel interior wall' },
  { num: '04', title: 'Concrete Works', text: 'Execution support for concrete casting, site coordination, pour preparation and labour-based concrete activities.', img: 'https://media.base44.com/images/public/69f0f9c5f2486cca9280edd1/916b3e206_generated_image.png', alt: 'Construction workers hard hats pouring concrete slab UAE' },
  { num: '05', title: 'Steel Fixing & Shuttering', text: 'Labour and execution support for structural work packages under approved drawings and site supervision.', img: 'https://media.base44.com/images/public/69f0f9c5f2486cca9280edd1/8b5302156_generated_image.png', alt: 'Steel rebar fixing formwork shuttering construction structural works' },
  { num: '06', title: 'Fit-Out & Finishing', text: 'Finishing coordination, renovation works, gypsum, painting, flooring, ceiling and handover-focused support.', img: 'https://media.base44.com/images/public/69f0f9c5f2486cca9280edd1/2f06871a6_generated_image.png', alt: 'Construction interior fit-out gypsum ceiling finishing works' },
  { num: '07', title: 'Subcontracting Support', text: 'Structured subcontract package delivery with documentation, attendance tracking and approval control.', img: 'https://media.base44.com/images/public/69f0f9c5f2486cca9280edd1/77b0ae2ef_generated_image.png', alt: 'Construction supervisor reviewing subcontract documentation BOQ on site' },
  { num: '08', title: 'Manpower Mobilisation', text: 'Responsible mobilisation of workers and teams based on scope, schedule and site access conditions.', img: 'https://media.base44.com/images/public/69f0f9c5f2486cca9280edd1/6580cd8a3_generated_image.png', alt: 'Construction workers mobilisation team PPE UAE construction site' },
  { num: '09', title: 'Renovation & Maintenance', text: 'Repair, improvement, alteration and finishing works for private, commercial and project-based clients.', img: 'https://media.base44.com/images/public/69f0f9c5f2486cca9280edd1/28a91b909_generated_image.png', alt: 'Construction renovation maintenance works worker finishing wall repair' },
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
        breadcrumb="Services"
        title="Spectrum of construction activities."
        intro="OKG provides practical contracting support across civil, masonry, plastering, concrete, steel fixing, shuttering, fit-out, finishing and subcontract packages."
      />

      {/* Service grid */}
      <section className="py-20 md:py-28" style={{ background: P.white }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionEyebrow label="Work packages" />
          <motion.h2 {...fu} className="font-display text-[28px] md:text-[38px] font-extrabold leading-[1.12] tracking-[-0.018em] mb-12" style={{ color: P.head2 }}>
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
                className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl"
                style={{ background: 'rgba(255,255,255,0.85)', border: `1px solid ${P.border}`, boxShadow: '0 2px 12px rgba(110,133,232,0.06)' }}
              >
                <div className="relative h-44 overflow-hidden">
                  <img src={s.img} alt={s.alt} className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'rgba(110,133,232,0.1)' }} />
                  <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'linear-gradient(to right, transparent, #6E85E8, transparent)' }} />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg" style={{ background: 'rgba(255,255,255,0.82)', backdropFilter: 'blur(8px)', border: '1px solid rgba(230,235,245,0.9)' }}>
                    <span className="text-[10px] font-mono font-bold" style={{ color: P.blue }}>{s.num}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-[14.5px] font-bold mb-2 leading-snug" style={{ color: P.head2 }}>{s.title}</h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: P.body }}>{s.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scope Control table */}
      <section className="py-20 md:py-28" style={{ background: P.bg, borderTop: `1px solid ${P.border}` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionEyebrow label="Scope Control" />
          <motion.h2 {...fu} className="font-display text-[28px] md:text-[38px] font-extrabold leading-[1.12] tracking-[-0.018em] mb-4" style={{ color: P.head2 }}>
            How OKG defines work before pricing.
          </motion.h2>
          <motion.p {...fu} transition={{ delay: 0.1 }} className="text-[15px] leading-[1.8] mb-12 max-w-2xl" style={{ color: P.body }}>
            Good construction starts before mobilisation. A clear scope reduces disputes, delay and cost leakage.
          </motion.p>

          <motion.div {...fu} transition={{ delay: 0.15 }} className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${P.border}`, boxShadow: '0 4px 20px rgba(110,133,232,0.07)' }}>
            {/* Desktop */}
            <div className="hidden md:block">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: 'linear-gradient(135deg, #EAF0FF 0%, #E3EBFF 100%)' }}>
                    <th className="text-left px-7 py-5 text-[11px] font-mono font-semibold tracking-widest uppercase w-40" style={{ color: P.head }}>Item</th>
                    <th className="text-left px-7 py-5 text-[11px] font-mono font-semibold tracking-widest uppercase" style={{ color: P.head }}>What OKG Clarifies</th>
                    <th className="text-left px-7 py-5 text-[11px] font-mono font-semibold tracking-widest uppercase" style={{ color: P.head }}>Why It Matters</th>
                  </tr>
                </thead>
                <tbody style={{ background: P.white }}>
                  {scopeRows.map((row, i) => (
                    <tr key={i} className="hover:bg-ok-tint transition-colors" style={{ borderTop: `1px solid ${P.border}` }}>
                      <td className="px-7 py-5 font-bold text-[13px] whitespace-nowrap" style={{ color: P.head2 }}>
                        <div className="flex items-center gap-2.5">
                          <span className="w-1 h-1 rounded-full shrink-0" style={{ background: P.blue }} />
                          {row.item}
                        </div>
                      </td>
                      <td className="px-7 py-5 text-[13.5px] leading-relaxed" style={{ color: P.body }}>{row.clarifies}</td>
                      <td className="px-7 py-5 text-[13px] leading-relaxed" style={{ color: P.muted }}>{row.matters}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Mobile */}
            <div className="md:hidden divide-y" style={{ background: P.white, borderColor: P.border }}>
              {scopeRows.map((row, i) => (
                <div key={i} className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-1 h-1 rounded-full" style={{ background: P.blue }} />
                    <h4 className="font-bold text-[14px]" style={{ color: P.head2 }}>{row.item}</h4>
                  </div>
                  <p className="text-[13px] leading-relaxed mb-2" style={{ color: P.body }}><span className="font-semibold">Clarifies:</span> {row.clarifies}</p>
                  <p className="text-[13px] leading-relaxed" style={{ color: P.muted }}><span className="font-semibold">Why:</span> {row.matters}</p>
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