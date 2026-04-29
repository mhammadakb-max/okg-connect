import React from 'react';
import PageHero from '@/components/shared/PageHero';
import CTABand from '@/components/shared/CTABand';
import SectionEyebrow from '@/components/shared/SectionEyebrow';
import ServiceCard from '@/components/services/ServiceCard';
import ScopeParameterTable from '@/components/services/ScopeParameterTable';
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

      {/* Premium Services Overview */}
      <section className="relative overflow-hidden bg-white border-t border-gray-200 py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(248,184,88,0.16),transparent_34%),linear-gradient(180deg,rgba(0,16,120,0.04),transparent_55%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-end mb-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <SectionEyebrow label="Full Service Offering" />
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6" style={{ color: '#001078' }}>
                Construction services structured for serious project delivery.
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                OKG combines practical site execution with commercial clarity, supervisor-led control and documented communication for clients who need reliable delivery across the UAE.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="grid sm:grid-cols-3 gap-4"
            >
              {[
                { value: '09', label: 'Core service lines' },
                { value: 'UAE', label: 'Project coverage' },
                { value: 'QHSE', label: 'Controlled execution' },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-gray-200 bg-white/90 p-6 shadow-sm backdrop-blur-sm">
                  <div className="text-3xl font-extrabold text-gold mb-2">{item.value}</div>
                  <p className="text-xs font-bold uppercase tracking-widest text-text-secondary">{item.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((service, idx) => (
              <ServiceCard key={service.num} service={service} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Scope Control */}
      <section className="bg-gray-50 border-t border-gray-200 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-28"
            >
              <SectionEyebrow label="Service Requirements" />
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6" style={{ color: '#001078' }}>
                Clear scope parameters for every project.
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                OKG coordinates every service through defined commercial, technical and site-control parameters so clients understand exactly what is covered before mobilisation.
              </p>
              <div className="rounded-2xl bg-navy p-6 text-white shadow-xl">
                <p className="text-sm font-semibold text-white/70 mb-2">Business standard</p>
                <p className="text-2xl font-extrabold leading-tight">Scope clarity before site activity.</p>
              </div>
            </motion.div>

            <ScopeParameterTable />
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}