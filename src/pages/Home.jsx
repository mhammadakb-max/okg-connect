import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import CTABand from '@/components/shared/CTABand';
import ValueCard from '@/components/shared/ValueCard';
import ChecklistItem from '@/components/shared/ChecklistItem';
import SectionEyebrow from '@/components/shared/SectionEyebrow';

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
  { num: '01', title: 'Site Review', desc: 'Understand the scope, location and requirements.' },
  { num: '02', title: 'Scope Alignment', desc: 'Define clear scope, quantities and commercial terms.' },
  { num: '03', title: 'Commercial Proposal', desc: 'Present detailed costing and mobilisation plan.' },
  { num: '04', title: 'Mobilisation Planning', desc: 'Coordinate manpower, materials and schedule.' },
  { num: '05', title: 'Daily Site Control', desc: 'Supervise work, track progress and manage approvals.' },
  { num: '06', title: 'Inspection & Handover', desc: 'Complete final inspections and formal handover.' },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2 mb-4"
              >
                <span className="w-1 h-1 rounded-full" style={{ backgroundColor: '#F8B858' }} />
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#001078' }}>
                  UAE Construction Partner
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                style={{ color: '#001078' }}
              >
                Constructing with discipline, clarity and control.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-lg text-text-secondary mb-8 leading-relaxed max-w-xl"
              >
                OKG Building Contracting delivers civil, masonry, plastering, concrete, steel fixing, shuttering, fit-out and finishing support for projects across the UAE. We work with clients, contractors and project teams that require clear scope alignment, responsible mobilisation, daily site supervision, documentation control and transparent delivery.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex flex-wrap gap-3"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-md transition-opacity hover:opacity-90"
                  style={{ backgroundColor: '#001078' }}
                >
                  Request Quotation
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-md transition-colors border border-gray-200 hover:bg-gray-50"
                  style={{ color: '#001078' }}
                >
                  Explore Services
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative h-96 rounded-xl overflow-hidden shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                alt="Construction site UAE"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
            </motion.div>
          </div>

          {/* Trust Strip */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-20 grid md:grid-cols-3 gap-8"
          >
            {[
              { title: 'Scope Clarity', text: 'Defined before mobilisation' },
              { title: 'Supervision', text: 'Daily site control' },
              { title: 'QHSE', text: 'Safety and quality focus' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-sm font-bold mb-2" style={{ color: '#001078' }}>
                  {item.title}
                </div>
                <p className="text-sm text-text-secondary">
                  {item.text}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="bg-gray-50 border-t border-gray-200 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-96 rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80"
                alt="Construction workers on site"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <SectionEyebrow label="About OKG" />

              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#001078' }}>
                Built around disciplined execution and transparent delivery.
              </h2>

              <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                OKG serves the UAE construction market with a straightforward operating principle: understand the scope, mobilise responsibly, supervise the work and protect the client's time, budget and site quality.
              </p>

              <p className="text-base text-text-secondary leading-relaxed mb-8">
                Our approach is based on accountability, proper documentation, clear quotations, worker control, subcontractor discipline and practical communication with site teams.
              </p>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold hover:opacity-80 transition-opacity"
                style={{ color: '#001078' }}
              >
                Learn more about OKG <ArrowRight className="w-4 h-4" />
              </Link>
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
            className="max-w-2xl mx-auto text-center mb-12"
          >
            <SectionEyebrow label="OKG Operating Model" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#001078' }}>
              Three pillars of disciplined construction.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <ValueCard
              icon={null}
              title="Execution Discipline"
              text="Construction progress depends on coordinated manpower, material readiness, supervision, safety, approvals and daily output."
              index={0}
            />
            <ValueCard
              icon={null}
              title="Transparent Communication"
              text="Every scope should be clearly priced, documented and coordinated before mobilisation so both sides understand expectations."
              index={1}
            />
            <ValueCard
              icon={null}
              title="Responsible Delivery"
              text="OKG focuses on completing agreed work through practical planning, site control, inspection support and accountability."
              index={2}
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 border-t border-gray-200 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-12"
          >
            <SectionEyebrow label="Services" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#001078' }}>
              Construction services that support projects.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white border border-gray-200 rounded-lg p-6"
              >
                <div className="text-2xl font-bold mb-3" style={{ color: '#F8B858' }}>
                  {service.num}
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#001078' }}>
                  {service.title}
                </h3>
                <p className="text-sm text-text-secondary">
                  {service.text}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold hover:opacity-80 transition-opacity"
              style={{ color: '#001078' }}
            >
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-white border-t border-gray-200 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-12"
          >
            <SectionEyebrow label="Capabilities" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#001078' }}>
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

      {/* How We Work */}
      <section className="bg-gray-50 border-t border-gray-200 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-12"
          >
            <SectionEyebrow label="Process" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#001078' }}>
              Controlled delivery from enquiry to handover.
            </h2>
            <p className="text-lg text-text-secondary">
              Clear scope, defined responsibilities, daily site control and documented approvals reduce delays, disputes and rework. OKG's process is built around practical execution control.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white border border-gray-200 rounded-lg p-6"
              >
                <div className="text-2xl font-bold mb-3" style={{ color: '#F8B858' }}>
                  {step.num}
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#001078' }}>
                  {step.title}
                </h3>
                <p className="text-sm text-text-secondary">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Management */}
      <section className="bg-white border-t border-gray-200 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-12"
          >
            <SectionEyebrow label="Management" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#001078' }}>
              Project management that protects your investment.
            </h2>
            <p className="text-lg text-text-secondary">
              Effective project management requires clear coordination, daily monitoring and documented decision-making. OKG handles the operational details so you can focus on project outcomes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Scope Management',
                items: [
                  'Clear scope definition and BOQ alignment',
                  'Change request and variation control',
                  'Documented approvals and sign-off',
                  'Budget and timeline tracking',
                ]
              },
              {
                title: 'Resource Coordination',
                items: [
                  'Manpower scheduling and mobilisation',
                  'Material procurement and logistics',
                  'Subcontractor coordination and control',
                  'Equipment and tool management',
                ]
              },
              {
                title: 'Daily Operations',
                items: [
                  'Site supervision and work control',
                  'Progress tracking and reporting',
                  'Quality inspections and sign-off',
                  'Safety monitoring and incident management',
                ]
              },
              {
                title: 'Documentation',
                items: [
                  'Daily activity reports and photos',
                  'Inspection and approval records',
                  'Worker attendance and timesheets',
                  'Final handover documentation',
                ]
              },
            ].map((mgmt, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-gray-50 border border-gray-200 rounded-lg p-8"
              >
                <div className="w-1 h-6 rounded-full mb-4" style={{ backgroundColor: '#F8B858' }} />
                <h3 className="text-lg font-bold mb-4" style={{ color: '#001078' }}>
                  {mgmt.title}
                </h3>
                <ul className="space-y-3">
                  {mgmt.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#F8B858' }} />
                      <span className="text-sm text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* QHSE */}
      <section className="bg-white border-t border-gray-200 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-12"
          >
            <SectionEyebrow label="QHSE" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#001078' }}>
              Quality, safety and control built into the work.
            </h2>
            <p className="text-lg text-text-secondary">
              Every project should be handled with safety awareness, clean documentation, quality checking, responsible housekeeping and clear reporting.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Quality Commitment', desc: 'Work execution that meets specification, inspection standards and documented approval.' },
              { title: 'Health & Safety Discipline', desc: 'Daily safety awareness, hazard management, worker training and incident reporting.' },
              { title: 'Environmental Responsibility', desc: 'Waste management, pollution control, site housekeeping and resource efficiency.' },
              { title: 'Subcontractor Control', desc: 'Vendor qualification, QHSE compliance verification and performance monitoring.' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-gray-50 border border-gray-200 rounded-lg p-6"
              >
                <div className="w-1 h-4 rounded-full mb-4" style={{ backgroundColor: '#F8B858' }} />
                <h3 className="text-lg font-bold mb-2" style={{ color: '#001078' }}>
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              to="/qhse"
              className="inline-flex items-center gap-2 text-sm font-semibold hover:opacity-80 transition-opacity"
              style={{ color: '#001078' }}
            >
              View QHSE Policy <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-gray-50 border-t border-gray-200 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-12"
          >
            <SectionEyebrow label="Projects" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#001078' }}>
              Project approach built on clarity and accountability.
            </h2>
            <p className="text-lg text-text-secondary mb-6">
              OKG presents project information through clear scope, location, quantity, timeline, approval status and documented handover details where available.
            </p>
            <p className="text-base text-text-secondary font-semibold mb-6">
              Project documentation standard
            </p>
            <p className="text-base text-text-secondary mb-8">
              Each project package should be recorded with the details needed for transparent coordination and professional handover.
            </p>
          </motion.div>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="space-y-4">
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

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold hover:opacity-80 transition-opacity"
              style={{ color: '#001078' }}
            >
              View projects <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#001078' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { stat: '10+', label: 'Years of Experience' },
              { stat: '200+', label: 'Projects Completed' },
              { stat: '500+', label: 'Skilled Workers Deployed' },
              { stat: '100%', label: 'Commitment to Quality' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#F8B858' }}>
                  {item.stat}
                </div>
                <p className="text-sm font-medium text-white/80">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="bg-white border-t border-gray-200 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-12"
          >
            <SectionEyebrow label="On-Site Work" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#001078' }}>
              Construction executed with precision.
            </h2>
            <p className="text-lg text-text-secondary">
              From structural works to finishing, every phase is managed, supervised and documented to meet client expectations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80', alt: 'Construction site overview' },
              { src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80', alt: 'Construction workers on site' },
              { src: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80', alt: 'Steel structure construction' },
              { src: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&q=80', alt: 'Construction site cranes' },
              { src: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80', alt: 'Construction workers on scaffold' },
              { src: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=800&q=80', alt: 'Concrete foundation works' },
            ].map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.07 }}
                className="relative h-56 rounded-xl overflow-hidden group"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why OKG */}
      <section className="bg-gray-50 border-t border-gray-200 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <SectionEyebrow label="Why OKG" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#001078' }}>
                A contractor that works the way you need it to.
              </h2>
              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                OKG was built to address a gap in the UAE market — the need for a contracting partner that is structured, communicative and accountable. We don't overpromise. We define the scope, price it clearly, mobilise responsibly and manage the site daily.
              </p>
              <div className="space-y-4">
                {[
                  'Clear proposals with itemised scope and pricing',
                  'Dedicated site supervisor on every project',
                  'Real-time progress updates and photo documentation',
                  'Strict QHSE compliance from day one',
                  'Transparent variation and change management',
                  'Professional handover documentation',
                ].map((point, idx) => (
                  <ChecklistItem key={idx} text={point} index={idx} />
                ))}
              </div>
              <div className="mt-10">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-md transition-opacity hover:opacity-90"
                  style={{ backgroundColor: '#001078' }}
                >
                  Get in touch <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[480px] rounded-xl overflow-hidden shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80"
                alt="Construction site management"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-5 shadow-lg">
                  <p className="text-sm font-semibold mb-1" style={{ color: '#001078' }}>
                    "Structure. Supervision. Accountability."
                  </p>
                  <p className="text-xs text-text-secondary">
                    OKG's core operating standard on every project.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sectors We Serve */}
      <section className="bg-white border-t border-gray-200 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center mb-14"
          >
            <SectionEyebrow label="Sectors" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#001078' }}>
              Active across key UAE construction sectors.
            </h2>
            <p className="text-lg text-text-secondary">
              OKG supports projects across residential, commercial, industrial and infrastructure sectors throughout the UAE.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Residential', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80' },
              { label: 'Commercial', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80' },
              { label: 'Industrial', img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80' },
              { label: 'Infrastructure', img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80' },
            ].map((sector, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="relative h-48 rounded-xl overflow-hidden group"
              >
                <img
                  src={sector.img}
                  alt={sector.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,16,120,0.75), rgba(0,16,120,0.1))' }} />
                <div className="absolute bottom-4 left-4">
                  <span className="text-white font-bold text-sm">{sector.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABand />
    </main>
  );
}