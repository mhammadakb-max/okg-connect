import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check, ChevronRight } from 'lucide-react';
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
  { label: 'Supervision', sub: 'Daily site control' },
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
  { num: '01', title: 'Execution Discipline', text: 'Work is planned, supervised and tracked with attention to daily output and site conditions.' },
  { num: '02', title: 'QHSE Awareness', text: 'Quality, safety, housekeeping and risk awareness are treated as part of project delivery.' },
  { num: '03', title: 'Transparent Coordination', text: 'Clients, contractors and site teams benefit from clear communication, documented scope and approval control.' },
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
          HERO — Full-width cinematic with navy overlay
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ background: '#001078', minHeight: '92vh' }}>
        {/* Background image with navy overlay */}
        <div className="absolute inset-0">
          <img
            src="https://media.base44.com/images/public/69f0f9c5f2486cca9280edd1/fa276dd29_generated_0616a86b.png"
            alt=""
            className="w-full h-full object-cover object-center"
            style={{ opacity: 0.18 }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(0,16,120,0.97) 0%, rgba(0,16,120,0.88) 60%, rgba(0,8,60,0.96) 100%)' }} />
        </div>

        {/* Construction grid */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{ backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`, backgroundSize: '56px 56px' }} />

        {/* Left gold bar */}
        <div className="absolute left-0 top-0 bottom-0 w-[3px]" style={{ background: 'linear-gradient(to bottom, #F8B858 0%, rgba(248,184,88,0.3) 60%, transparent 100%)' }} />

        {/* Gold glow top-right */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full blur-3xl pointer-events-none" style={{ background: '#F8B858', opacity: 0.04, transform: 'translate(30%,-30%)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">

            {/* Left content */}
            <div className="lg:col-span-7">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-3 mb-8"
              >
                <span className="w-10 h-px" style={{ background: '#F8B858' }} />
                <span className="text-[10.5px] font-mono font-bold tracking-[0.24em] uppercase" style={{ color: '#F8B858' }}>
                  UAE Building Contracting
                </span>
              </motion.div>

              {/* H1 */}
              <motion.h1
                initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                className="font-display text-[40px] md:text-[58px] lg:text-[68px] font-black leading-[1.04] tracking-[-0.025em] text-white mb-6"
              >
                Constructing with<br />
                <span style={{ color: '#F8B858' }}>discipline</span>,<br />
                clarity and control.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="text-[16px] md:text-[17px] leading-[1.75] mb-4 max-w-xl"
                style={{ color: 'rgba(255,255,255,0.7)' }}
              >
                OKG Building Contracting delivers civil, masonry, plastering, concrete, steel fixing, shuttering, fit-out and finishing support for projects across the UAE.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.26 }}
                className="text-[14px] leading-[1.75] mb-10 max-w-lg"
                style={{ color: 'rgba(255,255,255,0.45)' }}
              >
                We work with clients, contractors and project teams that require clear scope alignment, responsible mobilisation, daily site supervision, documentation control and transparent delivery.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.32 }}
                className="flex flex-wrap gap-3 mb-12"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl text-[14px] font-bold transition-all hover:scale-[1.02]"
                  style={{ background: '#F8B858', color: '#001078' }}
                >
                  Request Quotation <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/capabilities"
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl text-[14px] font-semibold border transition-all hover:bg-white/10"
                  style={{ border: '1.5px solid rgba(255,255,255,0.25)', color: 'rgba(255,255,255,0.85)' }}
                >
                  Explore Capabilities
                </Link>
              </motion.div>

              {/* Trust blocks */}
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.42 }}
                className="flex flex-wrap gap-3"
              >
                {trustBlocks.map((b) => (
                  <div key={b.label} className="flex items-center gap-3 rounded-xl px-4 py-3 border"
                    style={{ borderColor: 'rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.05)' }}>
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#F8B858' }} />
                    <div>
                      <span className="text-[13px] font-bold text-white">{b.label}</span>
                      <span className="text-[12px] ml-1.5" style={{ color: 'rgba(255,255,255,0.45)' }}>— {b.sub}</span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right — premium control card */}
            <motion.div
              initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.28, duration: 0.55 }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                {/* Top gold bar */}
                <div className="h-[3px] w-full" style={{ background: 'linear-gradient(to right, #F8B858, rgba(248,184,88,0.3))' }} />

                {/* Card body */}
                <div className="p-7 md:p-8" style={{ background: 'rgba(0,5,40,0.7)', backdropFilter: 'blur(20px)' }}>
                  <p className="text-[10.5px] font-mono font-bold tracking-[0.2em] uppercase mb-6" style={{ color: '#F8B858' }}>
                    Enquiry to Handover — Controlled
                  </p>
                  <div className="space-y-4">
                    {heroChecklist.map((item, i) => (
                      <div key={i} className="flex items-center gap-3.5">
                        <div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 border border-white/10"
                          style={{ background: 'rgba(248,184,88,0.1)' }}>
                          <Check className="w-3.5 h-3.5" style={{ color: '#F8B858' }} />
                        </div>
                        <span className="text-[14px] font-medium" style={{ color: 'rgba(255,255,255,0.85)' }}>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <p className="text-[11px] font-mono tracking-widest uppercase mb-1" style={{ color: 'rgba(255,255,255,0.3)' }}>Built around</p>
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

              {/* Floating stat strip below card */}
              <div className="mt-4 grid grid-cols-3 gap-3">
                {[
                  { label: 'Civil Works', val: 'Contracting' },
                  { label: 'UAE', val: 'Operations' },
                  { label: 'QHSE', val: 'Focused' },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl px-4 py-3 text-center border"
                    style={{ borderColor: 'rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.04)' }}>
                    <p className="text-[13px] font-bold text-white leading-none mb-1">{s.val}</p>
                    <p className="text-[11px]" style={{ color: 'rgba(255,255,255,0.4)' }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>

        {/* Bottom diagonal cut */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 20%, 100% 100%)' }} />
      </section>


      {/* ═══════════════════════════════════════════════════════════════════
          ABOUT PREVIEW
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            <div>
              <SectionEyebrow label="About OKG" />
              <motion.h2 {...fu} className="font-display text-3xl md:text-[42px] font-bold leading-[1.15] tracking-[-0.018em] mb-6" style={{ color: '#001078' }}>
                Built around disciplined execution and transparent delivery.
              </motion.h2>
              <motion.p {...fu} transition={{ delay: 0.1 }} className="text-[15px] leading-[1.85] mb-4" style={{ color: '#1E1E1E' }}>
                OKG Building Contracting serves the UAE construction market with a straightforward operating principle: understand the scope, mobilise responsibly, supervise the work and protect the client's time, budget and site quality.
              </motion.p>
              <motion.p {...fu} transition={{ delay: 0.16 }} className="text-[14px] leading-[1.85] mb-8" style={{ color: '#6B7280' }}>
                Our approach is based on accountability, proper documentation, clear quotations, worker control, subcontractor discipline and practical communication with site teams.
              </motion.p>
              <motion.div {...fu} transition={{ delay: 0.22 }}>
                <Link to="/about"
                  className="inline-flex items-center gap-2 text-[14px] font-bold group"
                  style={{ color: '#001078' }}>
                  Discover OKG <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            <div className="space-y-4">
              {/* Position statement */}
              <motion.div {...fu} transition={{ delay: 0.1 }}
                className="relative rounded-2xl overflow-hidden border border-gray-100 p-7"
                style={{ background: '#F7F8FB' }}>
                <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-full" style={{ background: '#F8B858' }} />
                <p className="text-[13px] font-mono font-semibold tracking-[0.15em] uppercase mb-3 pl-4" style={{ color: '#F8B858' }}>
                  Our position
                </p>
                <p className="text-[14px] leading-[1.8] pl-4" style={{ color: '#1E1E1E' }}>
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
          DISCOVER OKG — Editorial section
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 relative overflow-hidden" style={{ background: '#001078' }}>
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`, backgroundSize: '48px 48px' }} />
        <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: 'linear-gradient(to right, transparent, #F8B858 40%, #F8B858 60%, transparent)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16">
            <div>
              <SectionEyebrow label="Discover OKG" />
              <motion.h2 {...fu} className="font-display text-3xl md:text-[42px] font-bold leading-[1.15] tracking-[-0.018em] text-white">
                A practical contracting partner for UAE project teams.
              </motion.h2>
            </div>
            <motion.p {...fu} transition={{ delay: 0.1 }}
              className="text-[15px] leading-[1.85] lg:mt-12" style={{ color: 'rgba(255,255,255,0.6)' }}>
              OKG supports clients and contractors through disciplined execution, controlled subcontracting, manpower coordination and QHSE-conscious project delivery.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {discoverBlocks.map((b, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative rounded-2xl p-6 border transition-all hover:border-gold/30"
                style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.04)' }}>
                <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl" style={{ background: '#F8B858' }} />
                <span className="block text-[11px] font-mono font-bold mb-4" style={{ color: '#F8B858' }}>{b.num}</span>
                <h3 className="text-[16px] font-bold mb-3 text-white">{b.title}</h3>
                <p className="text-[13px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>{b.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════════
          WHAT WE DO — Large service tiles
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <SectionEyebrow label="What We Do" />
              <motion.h2 {...fu} className="font-display text-3xl md:text-[42px] font-bold leading-[1.15] tracking-[-0.018em]" style={{ color: '#001078' }}>
                What we do.
              </motion.h2>
              <motion.p {...fu} transition={{ delay: 0.1 }} className="text-[15px] mt-3 max-w-xl" style={{ color: '#6B7280' }}>
                Integrated construction support for civil, structural, masonry and finishing work packages.
              </motion.p>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 text-[13px] font-bold whitespace-nowrap group" style={{ color: '#001078' }}>
              Full service spectrum <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="group relative rounded-2xl p-8 border border-gray-100 cursor-default overflow-hidden transition-all hover:shadow-2xl hover:shadow-navy/10"
                style={{ background: '#F7F8FB', minHeight: 180 }}>
                {/* Navy overlay on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: '#001078' }} />
                <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: '#F8B858' }} />

                <div className="relative z-10">
                  <span className="text-[11px] font-mono font-bold block mb-4 transition-colors" style={{ color: '#F8B858' }}>{s.num}</span>
                  <h3 className="text-[17px] font-bold mb-3 leading-snug transition-colors group-hover:text-white" style={{ color: '#001078' }}>{s.title}</h3>
                  <p className="text-[13px] leading-relaxed transition-colors group-hover:text-white/60" style={{ color: '#6B7280' }}>{s.text}</p>
                  <div className="mt-6 flex items-center gap-1.5 text-[12px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: '#F8B858' }}>
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
      <section className="py-20 md:py-28" style={{ background: '#F7F8FB' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <SectionEyebrow label="Core Pillars" />
            <motion.h2 {...fu} className="font-display text-3xl md:text-[42px] font-bold leading-[1.15] tracking-[-0.018em]" style={{ color: '#001078' }}>
              The principles behind OKG delivery.
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:shadow-navy/6 transition-all overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: '#F8B858' }} />
                <span className="block text-[36px] font-black leading-none mb-4" style={{ color: 'rgba(0,16,120,0.07)' }}>{p.num}</span>
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
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionEyebrow label="Commitments" />
              <motion.h2 {...fu} className="font-display text-3xl md:text-[42px] font-bold leading-[1.15] tracking-[-0.018em] mb-6" style={{ color: '#001078' }}>
                Committed to practical construction standards.
              </motion.h2>
              <motion.p {...fu} transition={{ delay: 0.1 }} className="text-[14px] leading-[1.85]" style={{ color: '#6B7280' }}>
                Every OKG project should be approached with the same level of discipline, transparency and care — regardless of scope size or package type.
              </motion.p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {commitments.map((c, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-center gap-3 rounded-xl p-4 border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all"
                  style={{ background: '#F7F8FB' }}>
                  <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(248,184,88,0.15)' }}>
                    <Check className="w-3.5 h-3.5" style={{ color: '#F8B858' }} />
                  </div>
                  <span className="text-[13px] font-semibold leading-tight" style={{ color: '#001078' }}>{c}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════════
          PROJECT CONTROL TIMELINE
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-24 relative overflow-hidden" style={{ background: '#001078' }}>
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`, backgroundSize: '48px 48px' }} />
        <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: 'linear-gradient(to right, transparent, #F8B858 40%, #F8B858 60%, transparent)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionEyebrow label="Project Control" />
          <motion.h2 {...fu} className="font-display text-3xl md:text-[42px] font-bold leading-[1.15] tracking-[-0.018em] text-white mb-4">
            From BOQ to handover, every package needs control.
          </motion.h2>
          <motion.p {...fu} transition={{ delay: 0.1 }} className="text-[15px] leading-[1.8] mb-14 max-w-xl" style={{ color: 'rgba(255,255,255,0.55)' }}>
            OKG's process is built around practical execution control at each stage of a project package.
          </motion.p>

          {/* Horizontal timeline */}
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-6 left-0 right-0 h-px" style={{ background: 'rgba(248,184,88,0.2)' }} />
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {processSteps.map((step, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="relative flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 border border-white/10 relative z-10"
                    style={{ background: i === 0 ? '#F8B858' : 'rgba(255,255,255,0.06)' }}>
                    <span className="text-[11px] font-mono font-bold" style={{ color: i === 0 ? '#001078' : '#F8B858' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <p className="text-[12px] font-semibold text-white">{step}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════════
          CTA BAND
      ═══════════════════════════════════════════════════════════════════ */}
      <CTABand />
    </>
  );
}