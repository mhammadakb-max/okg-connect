import React from 'react';
import PageHero from '@/components/shared/PageHero';
import CTABand from '@/components/shared/CTABand';
import SectionEyebrow from '@/components/shared/SectionEyebrow';
import { motion } from 'framer-motion';

const services = [
  { num: '01', title: 'Building Contracting Works', text: 'Full structural and finishing support for construction projects.' },
  { num: '02', title: 'Blockwork & Masonry', text: 'Professional blockwork, brickwork and masonry execution.' },
  { num: '03', title: 'Plastering Works', text: 'Interior and exterior plastering and finish coat application.' },
  { num: '04', title: 'Concrete Works', text: 'Concrete casting, finishing and curing support.' },
  { num: '05', title: 'Steel Fixing & Shuttering', text: 'Rebar fixing, formwork setup and concrete support systems.' },
  { num: '06', title: 'Fit-Out & Finishing', text: 'Doors, windows, ceilings, flooring and final fit-out works.' },
  { num: '07', title: 'Subcontracting Support', text: 'Subcontractor coordination, supervision and control.' },
  { num: '08', title: 'Manpower Mobilisation', text: 'Worker coordination, scheduling and site presence management.' },
  { num: '09', title: 'Renovation & Maintenance', text: 'Repair, maintenance and renovation project support.' },
];

export default function Services() {
  return (
    <>
      <PageHero
        title="Construction Services"
        intro="OKG delivers structured support across building works, masonry, concrete, steel, finishing and subcontractor coordination for projects across the UAE."
        eyebrow="Services"
        breadcrumb="Services"
      />

      {/* Services Grid */}
      <section className="bg-white border-t border-gray-200 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-12"
          >
            <SectionEyebrow label="Full Service Offering" />
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#001078' }}>
              Services designed for construction projects.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-3xl font-bold mb-4" style={{ color: '#F8B858' }}>
                  {service.num}
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#001078' }}>
                  {service.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {service.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scope Control */}
      <section className="bg-gray-50 border-t border-gray-200 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-12"
          >
            <SectionEyebrow label="Service Requirements" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#001078' }}>
              Clear scope parameters for every project.
            </h2>
            <p className="text-lg text-text-secondary">
              OKG coordinates work scope across the following parameters to ensure clear delivery expectations.
            </p>
          </motion.div>

          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr style={{ borderBottom: '1px solid #E5E7EB' }}>
                    <th className="px-6 py-4 text-left text-sm font-bold" style={{ color: '#001078' }}>Parameter</th>
                    <th className="px-6 py-4 text-left text-sm font-bold" style={{ color: '#001078' }}>Details Covered</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { param: 'Scope & BOQ', details: 'Work list, quantities, specifications and deliverables.' },
                    { param: 'Documentation', details: 'Quotations, contracts, approvals and change management.' },
                    { param: 'Materials & Logistics', details: 'Material supply, storage, handling and delivery coordination.' },
                    { param: 'Site Access', details: 'Site entry, working hours, access restrictions and safety requirements.' },
                    { param: 'Approvals', details: 'Inspection schedules, sign-off authority and handover process.' },
                  ].map((row, idx) => (
                    <tr key={idx} style={{ borderBottom: idx < 4 ? '1px solid #E5E7EB' : 'none' }}>
                      <td className="px-6 py-4 text-sm font-semibold" style={{ color: '#001078' }}>{row.param}</td>
                      <td className="px-6 py-4 text-sm text-text-secondary">{row.details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}