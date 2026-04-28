import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check, ChevronRight, Shield, Zap, FileText } from 'lucide-react';
import SectionEyebrow from '../components/shared/SectionEyebrow';
import CTABand from '../components/shared/CTABand';

/* ─── Data ──────────────────────────────────────────────────────────── */

const heroChecklist = [
  'Defined scope and workfront review',
  'Controlled mobilisation',
  'Daily progress visibility',
  'Inspection and handover support',
];

const trustBlocks = [
  { label: 'Scope Clarity', sub: 'Defined before mobilisation' },
  { label: 'Site Supervision', sub: 'Daily control' },
  { label: 'QHSE', sub: 'Safety and quality focus' },
];

const valueCards = [
  {
    num: '01',
    title: 'Execution Discipline',
    text: 'Construction progress depends on coordinated manpower, material readiness, supervision, safety, approvals and daily output.',
  },
  {
    num: '02',
    title: 'Transparent Communication',
    text: 'Every scope should be clearly priced, documented and coordinated before mobilisation so both sides understand expectations.',
  },
  {
    num: '03',
    title: 'Responsible Delivery',
    text: 'OKG focuses on completing agreed work through practical planning, site control, inspection support and accountability.',
  },
];

const discoverBlocks = [
  {
    num: '01',
    title: 'Civil Works Support',
    text: 'Execution support for building works, concrete activities, steel fixing, shuttering and site-based civil packages.',
  },
  {
    num: '02',
    title: 'Masonry & Plastering',
    text: 'Blockwork, partitions, internal and external plastering, surface preparation and finishing coordination.',
  },
  {
    num: '03',
    title: 'Fit-Out & Finishing',
    text: 'Renovation, gypsum, painting, flooring, ceiling and finishing support with handover-focused coordination.',
  },
  {
    num: '04',
    title: 'Subcontracting & Manpower',
    text: 'Structured mobilisation of teams with worker details, attendance tracking, documentation and site supervision.',
  },
];

const services = [
  { num: '01', title: 'Building Contracting Works', text: 'Villas, commercial units, extensions, renovations and subcontract packages.' },
  { num: '02', title: 'Blockwork & Masonry', text: 'Blockwork, masonry, partitions, walls and controlled progress tracking.' },
  { num: '03', title: 'Plastering Works', text: 'Internal and external plastering with surface preparation, line, level and finish.' },
  { num: '04', title: 'Concrete Works', text: 'Concrete casting, pour preparation and labour-based concrete execution.' },
  { num: '05', title: 'Steel Fixing & Shuttering', text: 'Structural work under approved drawings, shuttering and steel fixing packages.' },
  { num: '06', title: 'Fit-Out & Finishing', text: 'Gypsum, painting, flooring, ceiling and handover-focused finishing support.' },
];

const pillars = [
  {
    icon: Zap,
    num: '01',
    title: 'Execution Discipline',
    text: 'Work is planned, supervised and tracked with attention to daily output and site conditions.',
  },
  {
    icon: Shield,
    num: '02',
    title: 'QHSE Awareness',
    text: 'Quality, safety, housekeeping and risk awareness are treated as part of project delivery.',
  },
  {
    icon: FileText,
    num: '03',
    title: 'Transparent Coordination',
    text: 'Clients, contractors and site teams benefit from clear communication, documented scope and approval control.',
  },
];

const commitments = [
  'Quality workmanship',
  'Safe working practices',
  'Clear documentation',
  'Responsible mobilisation',
  'Transparent pricing',
  'Professional handover',
];

const processSteps = [
  'Enquiry', 'Site Review', 'Scope Alignment', 'Quotation', 'Mobilisation', 'Execution', 'Inspection', 'Handover',
];

const fu = { initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

/* ─── Component ─────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>

      {/* ═══════════════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ background: '#001078', minHeight: '94vh' }}>

        {/* Background image — slow zoom */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
            alt="UAE construction site with tower crane and concrete structure"
            className="w-full h-full object-cover object-center"
            style={{ opacity: 0.32 }}
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 12, ease: 'easeOut' }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(140deg, rgba(0,16,120,0.92) 0%, rgba(0,24,140,0.78) 55%, rgba(0,16,120,0.90) 100%)' }} />
        </div>

        {/* Subtle grid */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`, backgroundSize: '60px 60px', opacity: 0.03 }} />

        {/* Left gold rule — animated in */}
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-[3px]"
          style={{ background: 'linear-gradient(to bottom, #F8B858 0%, rgba(248,184,88,0.2) 65%, transparent 100%)' }}
          initial={{ scaleY: 0, originY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.3 }}
        />

        {/* Subtle vignette — no glow blobs */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 80% 50%, rgba(255,255,255,0.03) 0%, transparent 70%)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-36 md:pt-28 md:pb-44 lg:pt-32 lg:pb-48">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">

            {/* Left */}
            <div className="lg:col-span-7">

              {/* Eyebrow */}
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-3 mb-8 rounded-full px-4 py-2"
                style={{ border: '1px solid rgba(248,184,88,0.2)', background: 'rgba(248,184,88,0.06)' }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#F8B858' }} />
                <span className="text-[10.5px] font-mono font-bold tracking-[0.24em] uppercase" style={{ color: '#F8B858' }}>
                  UAE Building Contracting
                </span>
              </motion.div>

              {/* H1 */}
              <motion.h1
                initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                className="font-display text-[42px] md:text-[60px] lg:text-[72px] font-black leading-[1.02] tracking-[-0.028em] text-white mb-7"
              >
                Constructing with<br />
                <span style={{ color: '#F8B858' }}>discipline</span>,<br />
                clarity and control.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="text-[16px] md:text-[17px] leading-[1.8] mb-4 max-w-xl font-light"
                style={{ color: 'rgba(255,255,255,0.72)' }}
              >
                OKG Building Contracting delivers civil, masonry, plastering, concrete, steel fixing, shuttering, fit-out and finishing support for projects across the UAE.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.26 }}
                className="text-[14px] leading-[1.8] mb-11 max-w-lg"
                style={{ color: 'rgba(255,255,255,0.65)' }}
              >
                We work with clients, contractors and project teams that require clear scope alignment, responsible mobilisation, daily site supervision, documentation control and transparent delivery.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.32 }}
                className="flex flex-wrap gap-3 mb-12"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-[14px] font-bold transition-all hover:scale-[1.02] shadow-lg shadow-gold/10"
                  style={{ background: '#F8B858', color: '#001078' }}
                >
                  Request Quotation <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/capabilities"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl text-[14px] font-semibold transition-all hover:bg-white/8"
                  style={{ border: '1.5px solid rgba(255,255,255,0.18)', color: 'rgba(255,255,255,0.8)' }}
                >
                  Explore Capabilities
                </Link>
              </motion.div>

              {/* Trust chips — staggered */}
              <div className="flex flex-wrap gap-2.5">
                {trustBlocks.map((b, i) => (
                  <motion.div
                    key={b.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.44 + i * 0.1, duration: 0.5, ease: 'easeOut' }}
                    className="flex items-center gap-2.5 rounded-xl px-4 py-2.5"
                    style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.04)' }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#F8B858' }} />
                    <span className="text-[12.5px] font-semibold text-white">{b.label}</span>
                    <span className="text-[11.5px]" style={{ color: 'rgba(255,255,255,0.38)' }}>— {b.sub}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right — control card */}
            <motion.div
              initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.55 }}
              className="lg:col-span-5"
            >
              <div className="rounded-2xl overflow-hidden relative" style={{ border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 32px 80px rgba(0,0,0,0.4)' }}>
                {/* Background site image */}
                <div className="absolute inset-0">
                  <img
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80"
                    alt="Site supervisor reviewing construction drawings on site"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                    style={{ opacity: 0.28 }}
                  />
                  <div className="absolute inset-0" style={{ background: 'rgba(0,16,120,0.78)' }} />
                </div>
                {/* Top gold strip */}
                <div className="h-[3px] relative z-10" style={{ background: 'linear-gradient(to right, #F8B858, rgba(248,184,88,0.2))' }} />
                {/* Left gold rule */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] z-10" style={{ background: 'linear-gradient(to bottom, #F8B858, rgba(248,184,88,0.1))' }} />

                <div className="p-8 relative z-10" style={{ backdropFilter: 'blur(4px)' }}>
                  <p className="text-[10px] font-mono font-bold tracking-[0.22em] uppercase mb-6" style={{ color: 'rgba(248,184,88,0.7)' }}>
                    Enquiry to Handover — Controlled
                  </p>
                  <div className="space-y-4">
                    {heroChecklist.map((item, i) => (
                      <div key={i} className="flex items-center gap-3.5">
                        <div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0"
                          style={{ background: 'rgba(248,184,88,0.1)', border: '1px solid rgba(248,184,88,0.2)' }}>
                          <Check className="w-3.5 h-3.5" style={{ color: '#F8B858' }} />
                        </div>
                        <span className="text-[14px] font-medium" style={{ color: 'rgba(255,255,255,0.82)' }}>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 flex items-center justify-between" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                    <div>
                      <p className="text-[10px] font-mono tracking-widest uppercase mb-1" style={{ color: 'rgba(255,255,255,0.28)' }}>Built around</p>
                      <p className="text-[13px] font-semibold text-white">Discipline · Clarity · Accountability</p>
                    </div>
                    <Link to="/capabilities"
                      className="flex items-center gap-1.5 text-[12px] font-bold transition-opacity hover:opacity-70"
                      style={{ color: '#F8B858' }}>
                      Explore <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Sub-chips */}
              <div className="mt-3.5 grid grid-cols-3 gap-3">
              {[
                { label: 'Civil Works', val: 'Contracting' },
                { label: 'UAE', val: 'Operations' },
                { label: 'QHSE', val: 'Focused' },
              ].map((s) => (
                <div key={s.label} className="rounded-xl px-3 py-3 text-center"
                  style={{ border: '1px solid rgba(255,255,255,0.14)', background: 'rgba(255,255,255,0.07)' }}>
                  <p className="text-[13px] font-bold text-white leading-none mb-1">{s.val}</p>
                  <p className="text-[10.5px]" style={{ color: 'rgba(255,255,255,0.55)' }}>{s.label}</p>
                </div>
              ))}
              </div>
            </motion.div>

          </div>
        </div>

        {/* Diagonal white cut */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-white pointer-events-none" style={{ clipPath: 'polygon(0 100%, 100% 25%, 100% 100%)' }} />
      </section>


      {/* ═══════════════════════════════════════════════════════════════════
          ABOUT PREVIEW
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">

            <div>
              <SectionEyebrow label="About OKG" />
              <motion.h2 {...fu} className="font-display text-[32px] md:text-[44px] font-black leading-[1.12] tracking-[-0.02em] mb-7" style={{ color: '#001078' }}>
                Built around disciplined execution and transparent delivery.
              </motion.h2>
              <motion.p {...fu} transition={{ delay: 0.1 }} className="text-[15px] leading-[1.9] mb-4" style={{ color: '#1E1E1E' }}>
                OKG serves the UAE construction market with a straightforward operating principle: understand the scope, mobilise responsibly, supervise the work and protect the client's time, budget and site quality.
              </motion.p>
              <motion.p {...fu} transition={{ delay: 0.16 }} className="text-[14px] leading-[1.9] mb-8" style={{ color: '#6B7280' }}>
                Our approach is based on accountability, proper documentation, clear quotations, worker control, subcontractor discipline and practical communication with site teams.
              </motion.p>
              <motion.div {...fu} transition={{ delay: 0.22 }}>
                <Link to="/about"
                  className="inline-flex items-center gap-2.5 text-[14px] font-bold group"
                  style={{ color: '#001078' }}>
                  Discover OKG <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            <div className="space-y-4">
              {/* About image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="relative rounded-2xl overflow-hidden shadow-xl shadow-navy/10 mb-2"
              >
                <img
                  src="https://images.unsplash.com/photo-1590736704728-f4730bb30770?w=1100&q=80"
                  alt="Construction engineer coordinating plans at active UAE project site"
                  className="w-full h-56 object-cover object-center"
                  loading="lazy"
                />
                {/* Caption card */}
                <div className="absolute bottom-0 left-0 right-0 px-5 py-3 flex items-center gap-3" style={{ background: 'rgba(0,16,120,0.88)', backdropFilter: 'blur(8px)' }}>
                  <span className="w-[3px] h-8 rounded-full shrink-0" style={{ background: '#F8B858' }} />
                  <span className="text-[12px] font-bold tracking-[0.12em] uppercase text-white/90">Scope · Supervision · Delivery</span>
                </div>
              </motion.div>

              {/* Position card */}
              <motion.div {...fu} transition={{ delay: 0.1 }}
                className="relative rounded-2xl p-7 overflow-hidden border border-gray-100"
                style={{ background: '#EEF1FF' }}>
                <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-full" style={{ background: '#F8B858' }} />
                <p className="text-[10.5px] font-mono font-bold tracking-[0.2em] uppercase mb-3 pl-4" style={{ color: '#F8B858' }}>
                  Our position
                </p>
                <p className="text-[14px] leading-[1.85] pl-4" style={{ color: '#1E1E1E' }}>
                  OKG is suited for clients who want a contractor that is transparent about capacity, clear in pricing, disciplined in mobilisation and serious about performance on site.
                </p>
              </motion.div>

              {valueCards.map((card, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:shadow-navy/5 hover:border-gray-200 transition-all group">
                  <div className="flex items-start gap-4">
                    <span className="text-[11px] font-mono font-bold shrink-0 mt-0.5" style={{ color: '#F8B858' }}>{card.num}</span>
                    <div>
                      <h3 className="text-[15px] font-bold mb-1.5" style={{ color: '#001078' }}>{card.title}</h3>
                      <p className="text-[13.5px] leading-relaxed" style={{ color: '#6B7280' }}>{card.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════════
          DISCOVER OKG — Light premium section
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 relative overflow-hidden" style={{ background: '#EEF1FF' }}>
        <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: 'linear-gradient(to right, transparent, #F8B858 35%, #F8B858 65%, transparent)', opacity: 0.6 }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: `linear-gradient(rgba(0,16,120,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,16,120,0.06) 1px, transparent 1px)`, backgroundSize: '52px 52px' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-end mb-14">
            <div>
              <SectionEyebrow label="Discover OKG" />
            <motion.h2 {...fu} className="font-display text-[32px] md:text-[44px] font-black leading-[1.1] tracking-[-0.02em]" style={{ color: '#001078' }}>
                A practical contracting partner for UAE project teams.
              </motion.h2>
            </div>
            <motion.p {...fu} transition={{ delay: 0.1 }}
              className="text-[15px] leading-[1.9] lg:pb-2" style={{ color: '#6B7280' }}>
              OKG supports clients and contractors through disciplined execution, controlled subcontracting, manpower coordination and QHSE-conscious project delivery.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {discoverBlocks.map((b, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative rounded-2xl p-6 bg-white border border-gray-100 hover:border-gray-200 hover:shadow-xl hover:shadow-navy/8 transition-all duration-300">
                <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl" style={{ background: '#F8B858' }} />
                <span className="block text-[11px] font-mono font-bold mb-5" style={{ color: '#F8B858' }}>{b.num}</span>
                <h3 className="text-[15.5px] font-bold mb-3 leading-snug" style={{ color: '#001078' }}>{b.title}</h3>
                <p className="text-[13px] leading-relaxed" style={{ color: '#6B7280' }}>{b.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════════
          WHAT WE DO
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <SectionEyebrow label="What We Do" />
              <motion.h2 {...fu} className="font-display text-[32px] md:text-[44px] font-black leading-[1.1] tracking-[-0.02em]" style={{ color: '#001078' }}>
                Services we deliver.
              </motion.h2>
              <motion.p {...fu} transition={{ delay: 0.1 }} className="text-[15px] mt-3 max-w-xl" style={{ color: '#6B7280' }}>
                Integrated construction support for civil, structural, masonry and finishing work packages.
              </motion.p>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 text-[13px] font-bold whitespace-nowrap group" style={{ color: '#001078' }}>
              Full service spectrum <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.55, ease: 'easeOut' }}
                whileHover={{ y: -4, transition: { duration: 0.2, ease: 'easeOut' } }}
                className="group relative rounded-2xl p-8 border border-gray-100/80 cursor-default overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-navy/12 bg-white"
                style={{ minHeight: 175 }}>
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: '#001078' }} />
                <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: '#F8B858' }} />
                <div className="relative z-10">
                  <span className="text-[11px] font-mono font-bold block mb-4 transition-colors" style={{ color: '#F8B858' }}>{s.num}</span>
                  <h3 className="text-[16.5px] font-bold mb-3 leading-snug transition-colors duration-300 group-hover:text-white" style={{ color: '#001078' }}>{s.title}</h3>
                  <p className="text-[13px] leading-relaxed transition-colors duration-300 group-hover:text-white/55" style={{ color: '#6B7280' }}>{s.text}</p>
                  <div className="mt-5 flex items-center gap-1.5 text-[12px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: '#F8B858' }}>
                    View capability <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════════
          CORE PILLARS
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14 max-w-2xl">
            <SectionEyebrow label="Core Pillars" />
            <motion.h2 {...fu} className="font-display text-[32px] md:text-[44px] font-black leading-[1.1] tracking-[-0.02em]" style={{ color: '#001078' }}>
              The principles behind OKG delivery.
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {pillars.map((p, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: 'easeOut' }}
                whileHover={{ y: -3, transition: { duration: 0.2, ease: 'easeOut' } }}
                className="relative rounded-2xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-2xl hover:shadow-navy/8 transition-all duration-300 overflow-hidden group"
                style={{ background: '#F7F8FB' }}>
                <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: '#F8B858' }} />

                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: '#001078' }}>
                    <p.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-[11px] font-mono font-bold" style={{ color: '#F8B858' }}>{p.num}</span>
                </div>

                <h3 className="text-[18px] font-bold mb-3" style={{ color: '#001078' }}>{p.title}</h3>
                <p className="text-[13.5px] leading-relaxed" style={{ color: '#6B7280' }}>{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════════
          COMMITMENTS
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-28" style={{ background: '#F2F4F8' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
              <SectionEyebrow label="Our Commitments" />
              <motion.h2 {...fu} className="font-display text-[32px] md:text-[44px] font-black leading-[1.1] tracking-[-0.02em] mb-6" style={{ color: '#001078' }}>
                Committed to practical construction standards.
              </motion.h2>
              <motion.p {...fu} transition={{ delay: 0.1 }} className="text-[14px] leading-[1.9]" style={{ color: '#6B7280' }}>
                Every OKG project should be approached with the same level of discipline, transparency and care — regardless of scope size or package type.
              </motion.p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {commitments.map((c, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-center gap-3 rounded-xl p-4 bg-white border border-gray-100 hover:shadow-md transition-all">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(248,184,88,0.12)' }}>
                    <Check className="w-3 h-3" style={{ color: '#F8B858' }} />
                  </div>
                  <span className="text-[12.5px] font-semibold leading-tight" style={{ color: '#001078' }}>{c}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════════
          QHSE PREVIEW
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-navy/10">
              <img
                src="https://images.unsplash.com/photo-1622021142947-da7dedc7c39a?w=1100&q=80"
                alt="Construction worker in full PPE at UAE project site"
                className="w-full h-[380px] object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,16,120,0.5) 0%, transparent 60%)' }} />
              <div className="absolute bottom-0 left-0 right-0 px-6 py-4 flex items-center gap-3">
                <span className="w-[3px] h-8 rounded-full shrink-0" style={{ background: '#F8B858' }} />
                <span className="text-[12px] font-bold tracking-[0.12em] uppercase text-white/90">Safety · Quality · Housekeeping</span>
              </div>
            </div>
            <div>
              <SectionEyebrow label="QHSE" />
              <motion.h2 {...fu} className="font-display text-[32px] md:text-[40px] font-black leading-[1.1] tracking-[-0.02em] mb-5" style={{ color: '#001078' }}>
                Quality, safety and control built into the work.
              </motion.h2>
              <motion.p {...fu} transition={{ delay: 0.1 }} className="text-[15px] leading-[1.9] mb-5" style={{ color: '#1E1E1E' }}>
                Every project should be handled with safety awareness, clean documentation, quality checking, responsible housekeeping and clear reporting.
              </motion.p>
              <motion.p {...fu} transition={{ delay: 0.16 }} className="text-[14px] leading-[1.9] mb-8" style={{ color: '#6B7280' }}>
                OKG's QHSE approach is practical and documented. Safety and quality are treated as core elements of disciplined project delivery, not optional additions.
              </motion.p>
              <motion.div {...fu} transition={{ delay: 0.22 }}>
                <Link to="/qhse"
                  className="inline-flex items-center gap-2.5 text-[14px] font-bold group"
                  style={{ color: '#001078' }}>
                  View QHSE Policies <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          PROJECT CONTROL TIMELINE
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-28 relative overflow-hidden" style={{ background: '#1833A3' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`, backgroundSize: '52px 52px', opacity: 0.04 }} />
        <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: 'linear-gradient(to right, transparent, rgba(248,184,88,0.5) 40%, rgba(248,184,88,0.5) 60%, transparent)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionEyebrow label="Project Control" light={true} />
          <motion.h2 {...fu} className="font-display text-[32px] md:text-[44px] font-black leading-[1.1] tracking-[-0.02em] text-white mb-4">
            From BOQ to handover, every package needs control.
          </motion.h2>
          <motion.p {...fu} transition={{ delay: 0.1 }} className="text-[15px] leading-[1.8] mb-16 max-w-xl" style={{ color: 'rgba(255,255,255,0.48)' }}>
            OKG's process is built around practical execution control at each stage of a project package.
          </motion.p>

          {/* ── Desktop horizontal timeline ── */}
          <div className="hidden md:block relative">
            {/* Horizontal navy line */}
            <motion.div
              className="absolute top-[22px] left-[22px] right-[22px] h-[2px]"
              style={{ background: 'rgba(255,255,255,0.1)' }}
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            />
            {/* Gold progress line */}
            <motion.div
              className="absolute top-[22px] left-[22px] h-[2px]"
              style={{ background: 'linear-gradient(to right, #F8B858, rgba(248,184,88,0.3))', width: 'calc(100% - 44px)' }}
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: 'easeOut', delay: 0.5 }}
            />
            <div className="grid grid-cols-8 gap-2">
              {processSteps.map((step, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08, duration: 0.55, ease: 'easeOut' }}
                  className="relative flex flex-col items-center text-center group"
                >
                  {/* Gold dot */}
                  <div className="relative z-10 w-11 h-11 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: i === 0 ? '#F8B858' : 'rgba(255,255,255,0.12)',
                      border: `2px solid ${i === 0 ? '#F8B858' : 'rgba(248,184,88,0.45)'}`,
                      boxShadow: i === 0 ? '0 0 0 6px rgba(248,184,88,0.15)' : 'none',
                    }}>
                    <span className="text-[9px] font-mono font-bold leading-none" style={{ color: i === 0 ? '#001078' : '#F8B858' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <p className="text-[11px] font-semibold leading-tight transition-colors duration-200 group-hover:text-white" style={{ color: i === 0 ? '#F8B858' : 'rgba(255,255,255,0.6)' }}>{step}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Mobile vertical timeline ── */}
          <div className="md:hidden relative pl-8">
            {/* Vertical line */}
            <div className="absolute left-[18px] top-0 bottom-0 w-[2px]" style={{ background: 'rgba(255,255,255,0.1)' }} />
            <div className="space-y-6">
              {processSteps.map((step, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.5, ease: 'easeOut' }}
                  className="relative flex items-center gap-4"
                >
                  {/* Gold dot */}
                  <div className="absolute -left-8 w-9 h-9 rounded-full flex items-center justify-center shrink-0 z-10"
                    style={{
                      background: i === 0 ? '#F8B858' : 'rgba(255,255,255,0.12)',
                      border: `2px solid ${i === 0 ? '#F8B858' : 'rgba(248,184,88,0.45)'}`,
                    }}>
                    <span className="text-[9px] font-mono font-bold" style={{ color: i === 0 ? '#001078' : '#F8B858' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <p className="text-[13.5px] font-semibold" style={{ color: i === 0 ? '#F8B858' : 'rgba(255,255,255,0.7)' }}>{step}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* CTA */}
      <CTABand />
    </>
  );
}