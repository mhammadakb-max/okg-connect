import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Shield, ClipboardCheck, Users } from 'lucide-react';
import SectionEyebrow from '../components/shared/SectionEyebrow';
import CTABand from '../components/shared/CTABand';

/* ─── Design tokens ─── */
const P = {
  white:    '#FFFFFF',
  soft:     '#FCFDFF',
  bg:       '#F7F9FF',
  bg2:      '#F2F6FF',
  tint:     '#EAF0FF',
  accent:   '#E3EBFF',
  gold:     '#FFF6E8',
  champ:    '#FDF3E2',
  goldM:    '#E8C48E',
  amber:    '#F2D7A6',
  blue:     '#6E85E8',
  blueL:    '#8FA2F2',
  head:     '#5F6D9A',
  head2:    '#3D4A73',
  body:     '#7C86A8',
  muted:    '#97A0BC',
  border:   '#E6EBF5',
};

const fu = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

const services = [
  { num: '01', title: 'Building Contracting Works', text: 'Villas, commercial units, extensions, renovations and subcontract packages.', img: 'https://media.base44.com/images/public/69f0f9c5f2486cca9280edd1/b7de27fed_generated_image.png', alt: 'Active building construction site UAE tower crane concrete structure' },
  { num: '02', title: 'Blockwork & Masonry', text: 'Blockwork, masonry, partitions, walls and controlled progress tracking.', img: 'https://media.base44.com/images/public/69f0f9c5f2486cca9280edd1/b42f1aeda_generated_image.png', alt: 'Workers PPE laying concrete blocks masonry wall construction' },
  { num: '03', title: 'Plastering Works', text: 'Internal and external plastering with surface preparation, line, level and finish.', img: 'https://media.base44.com/images/public/69f0f9c5f2486cca9280edd1/a65b1ec5c_generated_image.png', alt: 'Construction worker PPE applying plaster trowel wall' },
  { num: '04', title: 'Concrete Works', text: 'Concrete casting, pour preparation and labour-based concrete execution.', img: 'https://media.base44.com/images/public/69f0f9c5f2486cca9280edd1/916b3e206_generated_image.png', alt: 'Construction workers hard hats concrete pouring slab UAE' },
  { num: '05', title: 'Steel Fixing & Shuttering', text: 'Structural work under approved drawings, shuttering and steel fixing packages.', img: 'https://media.base44.com/images/public/69f0f9c5f2486cca9280edd1/8b5302156_generated_image.png', alt: 'Steel rebar fixing formwork shuttering construction structural frame' },
  { num: '06', title: 'Fit-Out & Finishing', text: 'Gypsum, painting, flooring, ceiling and handover-focused finishing support.', img: 'https://media.base44.com/images/public/69f0f9c5f2486cca9280edd1/2f06871a6_generated_image.png', alt: 'Construction interior fit-out gypsum ceiling finishing works' },
];

const pillars = [
  { num: '01', title: 'Execution Discipline', text: 'Work is planned, supervised and tracked with attention to daily output and site conditions.' },
  { num: '02', title: 'Transparent Communication', text: 'Every scope is clearly priced, documented and coordinated before mobilisation.' },
  { num: '03', title: 'Responsible Delivery', text: 'OKG completes agreed work through practical planning, site control and accountability.' },
];

const processSteps = ['Enquiry', 'Site Review', 'Scope Alignment', 'Quotation', 'Mobilisation', 'Execution', 'Inspection', 'Handover'];

const commitments = ['Quality workmanship', 'Safe working practices', 'Clear documentation', 'Responsible mobilisation', 'Transparent pricing', 'Professional handover'];

const trustItems = [
  { label: 'Scope Clarity', sub: 'Defined before mobilisation', icon: ClipboardCheck },
  { label: 'Supervision', sub: 'Daily site control', icon: Shield },
  { label: 'QHSE', sub: 'Safety & quality focus', icon: Check },
];

export default function Home() {
  return (
    <>
      {/* ══════════════════════════════════════════
          1. HERO — light split layout
      ══════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{
          background: 'linear-gradient(165deg, #FFFFFF 0%, #F7F9FF 40%, #EAF0FF 100%)',
          minHeight: '92vh',
        }}
      >
        {/* Radial glow top-right */}
        <div
          className="absolute -top-40 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(110,133,232,0.08) 0%, transparent 65%)' }}
        />
        {/* Soft ambient bottom-left */}
        <div
          className="absolute bottom-0 -left-32 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(232,196,142,0.07) 0%, transparent 70%)' }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-0 min-h-[92vh] items-stretch">

            {/* LEFT — text */}
            <div className="flex flex-col justify-center py-16 md:py-20 lg:py-24 pr-0 lg:pr-16">

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 mb-8"
              >
                <span className="w-5 h-px rounded-full" style={{ background: P.blue }} />
                <span className="text-[10.5px] font-mono font-semibold tracking-[0.22em] uppercase" style={{ color: P.blue }}>
                  UAE Building Contracting
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 }}
                className="font-display text-[34px] md:text-[50px] lg:text-[58px] font-extrabold leading-[1.06] tracking-[-0.028em] mb-7"
                style={{ color: P.head2 }}
              >
                Constructing with<br />
                <span style={{ color: P.blue }}>discipline</span>,<br />
                clarity and control.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.16 }}
                className="text-[15px] md:text-[15.5px] leading-[1.85] mb-4 max-w-lg"
                style={{ color: P.body }}
              >
                OKG Building Contracting delivers civil, masonry, plastering, concrete, steel fixing, shuttering, fit-out and finishing support for projects across the UAE.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.22 }}
                className="text-[14px] leading-[1.9] mb-10 max-w-md"
                style={{ color: P.muted }}
              >
                We work with clients, contractors and project teams that require clear scope alignment, responsible mobilisation, daily site supervision, documentation control and transparent delivery.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28 }}
                className="flex flex-wrap gap-3 mb-12"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-[13.5px] font-semibold transition-all hover:opacity-88"
                  style={{
                    background: 'linear-gradient(135deg, #6E85E8 0%, #8FA2F2 100%)',
                    color: '#fff',
                    boxShadow: '0 6px 24px rgba(110,133,232,0.28)',
                  }}
                >
                  Request Quotation <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/capabilities"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-[13.5px] font-medium transition-all hover:opacity-80"
                  style={{
                    border: `1px solid ${P.border}`,
                    color: P.head,
                    background: 'rgba(255,255,255,0.7)',
                  }}
                >
                  Explore Capabilities
                </Link>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.36 }}
                className="flex flex-col sm:flex-row gap-5 sm:gap-6 pt-6"
                style={{ borderTop: `1px solid ${P.border}` }}
              >
                {trustItems.map((b, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: P.tint, border: `1px solid ${P.border}` }}
                    >
                      <b.icon className="w-3.5 h-3.5" style={{ color: P.blue }} />
                    </div>
                    <div>
                      <span className="text-[13px] font-semibold block" style={{ color: P.head }}>{b.label}</span>
                      <span className="text-[11.5px]" style={{ color: P.muted }}>{b.sub}</span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — construction image with glass overlay */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.18, duration: 0.7 }}
              className="relative hidden lg:flex items-center py-8"
            >
              <div className="relative w-full h-full max-h-[80vh] rounded-2xl overflow-hidden" style={{ boxShadow: '0 24px 64px rgba(110,133,232,0.14)' }}>
                <img
                  src="https://media.base44.com/images/public/69f0f9c5f2486cca9280edd1/23fd35dff_generated_image.png"
                  alt="UAE construction site team PPE active building site"
                  className="w-full h-full object-cover object-center"
                />
                {/* Light soft overlay from left */}
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(247,249,255,0.45) 0%, rgba(247,249,255,0) 35%)' }} />
                {/* Glass caption badge */}
                <div
                  className="absolute bottom-6 left-6 right-6 px-5 py-4 rounded-xl"
                  style={{
                    background: 'rgba(255,255,255,0.72)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: '1px solid rgba(230,235,245,0.85)',
                    boxShadow: '0 4px 20px rgba(110,133,232,0.1)',
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-[2px] h-8 rounded-full shrink-0" style={{ background: P.blue }} />
                    <div>
                      <p className="text-[10px] font-mono tracking-[0.2em] uppercase mb-0.5" style={{ color: P.blueL }}>OKG Building Contracting</p>
                      <p className="text-[13.5px] font-semibold" style={{ color: P.head2 }}>Scope · Supervision · Delivery</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Mobile hero image */}
        <div className="lg:hidden relative mx-4 mb-8 rounded-2xl overflow-hidden" style={{ height: 240, boxShadow: '0 12px 40px rgba(110,133,232,0.12)' }}>
          <img
            src="https://media.base44.com/images/public/69f0f9c5f2486cca9280edd1/23fd35dff_generated_image.png"
            alt="UAE construction site team PPE"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(247,249,255,0.3) 0%, rgba(247,249,255,0) 40%)' }} />
        </div>
      </section>


      {/* ══════════════════════════════════════════
          2. DISCOVER OKG — editorial split
      ══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 section-divider" style={{ background: P.white }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div>
              <SectionEyebrow label="About OKG" />
              <motion.h2 {...fu} className="font-display text-[28px] md:text-[40px] font-extrabold leading-[1.12] tracking-[-0.02em] mb-6" style={{ color: P.head2 }}>
                Built around disciplined execution and transparent delivery.
              </motion.h2>
              <motion.p {...fu} transition={{ delay: 0.1 }} className="text-[15px] leading-[1.9] mb-4" style={{ color: P.body }}>
                OKG serves the UAE construction market with a straightforward operating principle: understand the scope, mobilise responsibly, supervise the work and protect the client's time, budget and site quality.
              </motion.p>
              <motion.p {...fu} transition={{ delay: 0.16 }} className="text-[14px] leading-[1.9] mb-10" style={{ color: P.muted }}>
                Our approach is based on accountability, proper documentation, clear quotations, worker control, subcontractor discipline and practical communication with site teams.
              </motion.p>

              {/* Callout */}
              <motion.div
                {...fu}
                transition={{ delay: 0.2 }}
                className="relative rounded-2xl p-6 mb-10 overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #EAF0FF 0%, #F2F6FF 100%)',
                  border: '1px solid #E6EBF5',
                }}
              >
                <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-full" style={{ background: 'linear-gradient(to bottom, #6E85E8, #8FA2F2)' }} />
                <p className="text-[13.5px] leading-[1.8] pl-5" style={{ color: P.head }}>
                  OKG is suited for clients who want a contractor that is transparent about capacity, clear in pricing, disciplined in mobilisation and serious about performance on site.
                </p>
              </motion.div>

              <motion.div {...fu} transition={{ delay: 0.26 }}>
                <Link to="/about" className="inline-flex items-center gap-2 text-[13.5px] font-semibold group" style={{ color: P.blue }}>
                  Discover OKG <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden" style={{ boxShadow: '0 24px 60px rgba(110,133,232,0.12)' }}>
                <img
                  src="https://media.base44.com/images/public/69f0f9c5f2486cca9280edd1/b43d44e48_generated_image.png"
                  alt="Construction engineer reviewing project drawings documentation UAE"
                  className="w-full h-[440px] object-cover object-center"
                  loading="lazy"
                />
              </div>
              {/* Decorative corner */}
              <div
                className="absolute -bottom-4 -left-4 w-20 h-20 rounded-2xl hidden lg:block"
                style={{ background: P.tint, border: `1px solid ${P.border}`, zIndex: -1 }}
              />
            </motion.div>

          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          3. WHAT WE DO — image-led service tiles
      ══════════════════════════════════════════ */}
      <section className="py-24 md:py-32" style={{ background: P.bg }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <SectionEyebrow label="What We Do" />
              <motion.h2 {...fu} className="font-display text-[28px] md:text-[40px] font-extrabold leading-[1.1] tracking-[-0.02em]" style={{ color: P.head2 }}>
                Services we deliver.
              </motion.h2>
              <motion.p {...fu} transition={{ delay: 0.1 }} className="text-[15px] mt-3 max-w-xl" style={{ color: P.body }}>
                Integrated construction support for civil, structural, masonry and finishing work packages.
              </motion.p>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 text-[13px] font-semibold whitespace-nowrap group shrink-0" style={{ color: P.blue }}>
              Full service spectrum <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl"
                style={{
                  background: 'rgba(255,255,255,0.8)',
                  border: `1px solid ${P.border}`,
                  backdropFilter: 'blur(8px)',
                  boxShadow: '0 2px 12px rgba(110,133,232,0.06)',
                }}
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={s.img} alt={s.alt}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Light overlay on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'rgba(110,133,232,0.12)' }} />
                  {/* Shimmer top line on hover */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'linear-gradient(to right, transparent, #6E85E8, transparent)' }} />
                  {/* Number badge */}
                  <div
                    className="absolute top-3 left-3 px-2.5 py-1 rounded-lg"
                    style={{
                      background: 'rgba(255,255,255,0.8)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(230,235,245,0.9)',
                    }}
                  >
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


      {/* ══════════════════════════════════════════
          4. CORE PILLARS — horizontal editorial
      ══════════════════════════════════════════ */}
      <section
        className="py-24 md:py-28"
        style={{
          background: 'linear-gradient(160deg, #FFFFFF 0%, #F2F6FF 100%)',
          borderTop: `1px solid ${P.border}`,
          borderBottom: `1px solid ${P.border}`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-12 items-start">

            <div className="lg:col-span-1">
              <SectionEyebrow label="Core Pillars" />
              <motion.h2 {...fu} className="font-display text-[24px] md:text-[32px] font-extrabold leading-[1.15] tracking-[-0.018em]" style={{ color: P.head2 }}>
                The principles behind OKG delivery.
              </motion.h2>
            </div>

            <div className="lg:col-span-3 grid md:grid-cols-3 gap-6">
              {pillars.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative rounded-2xl p-6 transition-all duration-300 hover:shadow-md group"
                  style={{
                    background: 'rgba(255,255,255,0.7)',
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${P.border}`,
                  }}
                >
                  <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'linear-gradient(to right, transparent, #6E85E8, transparent)' }} />
                  <div className="text-[11px] font-mono font-bold mb-3" style={{ color: P.blue }}>{p.num}</div>
                  <div className="w-8 h-px mb-4" style={{ background: P.border }} />
                  <h3 className="text-[15px] font-bold mb-3 leading-snug" style={{ color: P.head2 }}>{p.title}</h3>
                  <p className="text-[13.5px] leading-[1.75]" style={{ color: P.body }}>{p.text}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          5. CAPABILITIES / PROJECT CONTROL — light
      ══════════════════════════════════════════ */}
      <section className="py-24 md:py-28" style={{ background: P.bg }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-3 gap-10 mb-16 items-start">
            <div className="lg:col-span-1">
              <SectionEyebrow label="Project Control" />
              <motion.h2 {...fu} className="font-display text-[24px] md:text-[34px] font-extrabold leading-[1.15] tracking-[-0.018em]" style={{ color: P.head2 }}>
                From enquiry to handover, every package needs control.
              </motion.h2>
            </div>
            <motion.p {...fu} transition={{ delay: 0.1 }} className="lg:col-span-2 text-[15px] leading-[1.85] self-end" style={{ color: P.body }}>
              OKG's process is built around practical execution control at each stage of a project package. Clear scope, daily supervision, documented approvals and transparent reporting from start to finish.
            </motion.p>
          </div>

          {/* Desktop steps */}
          <div className="hidden md:grid grid-cols-8 gap-2 relative mb-4">
            <div className="absolute top-[18px] left-0 right-0 h-px" style={{ background: P.border }} />
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.07 }}
                className="relative flex flex-col items-center text-center"
              >
                <div
                  className="relative z-10 w-9 h-9 rounded-full flex items-center justify-center mb-3"
                  style={{
                    background: i === 0 ? P.blue : 'rgba(255,255,255,0.9)',
                    border: `1px solid ${i === 0 ? P.blue : P.border}`,
                    boxShadow: i === 0 ? '0 4px 12px rgba(110,133,232,0.25)' : 'none',
                  }}
                >
                  <span className="text-[9px] font-mono font-bold" style={{ color: i === 0 ? '#fff' : P.muted }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <p className="text-[11px] font-medium leading-tight" style={{ color: i === 0 ? P.blue : P.muted }}>{step}</p>
              </motion.div>
            ))}
          </div>

          {/* Mobile steps */}
          <div className="md:hidden grid grid-cols-2 gap-3">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex items-center gap-3 px-4 py-3 rounded-xl"
                style={{
                  background: i === 0 ? P.tint : 'rgba(255,255,255,0.7)',
                  border: `1px solid ${P.border}`,
                }}
              >
                <span className="text-[10px] font-mono font-bold shrink-0" style={{ color: P.blue }}>{String(i + 1).padStart(2, '0')}</span>
                <span className="text-[13px] font-medium" style={{ color: P.head }}>{step}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          6. QHSE PREVIEW
      ══════════════════════════════════════════ */}
      <section
        className="py-24 md:py-28"
        style={{
          background: 'linear-gradient(160deg, #FFFFFF 0%, #F7F9FF 100%)',
          borderTop: `1px solid ${P.border}`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden order-2 lg:order-1"
              style={{ boxShadow: '0 20px 56px rgba(110,133,232,0.1)' }}
            >
              <img
                src="https://media.base44.com/images/public/69f0f9c5f2486cca9280edd1/6af65c67b_generated_image.png"
                alt="Construction worker PPE safety helmet conducting site inspection UAE"
                className="w-full h-[400px] object-cover object-center"
                loading="lazy"
              />
              {/* Glass badge bottom */}
              <div
                className="absolute bottom-5 left-5 right-5 px-5 py-3.5 rounded-xl"
                style={{
                  background: 'rgba(255,255,255,0.75)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(230,235,245,0.9)',
                }}
              >
                <div className="flex items-center gap-3">
                  <span className="w-[2px] h-6 rounded-full shrink-0" style={{ background: P.blue }} />
                  <span className="text-[12px] font-semibold" style={{ color: P.head2 }}>Safety · Quality · Housekeeping</span>
                </div>
              </div>
            </motion.div>

            <div className="order-1 lg:order-2">
              <SectionEyebrow label="QHSE" />
              <motion.h2 {...fu} className="font-display text-[28px] md:text-[38px] font-extrabold leading-[1.12] tracking-[-0.018em] mb-5" style={{ color: P.head2 }}>
                Quality, safety and control built into the work.
              </motion.h2>
              <motion.p {...fu} transition={{ delay: 0.1 }} className="text-[15px] leading-[1.9] mb-5" style={{ color: P.body }}>
                Every project should be handled with safety awareness, clean documentation, quality checking, responsible housekeeping and clear reporting.
              </motion.p>
              <motion.p {...fu} transition={{ delay: 0.16 }} className="text-[14px] leading-[1.9] mb-8" style={{ color: P.muted }}>
                OKG's QHSE approach is practical and documented. Safety and quality are treated as core elements of disciplined project delivery, not optional additions.
              </motion.p>
              <motion.div {...fu} transition={{ delay: 0.22 }}>
                <Link to="/qhse" className="inline-flex items-center gap-2 text-[13.5px] font-semibold group" style={{ color: P.blue }}>
                  View QHSE Policies <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          7. WHO OKG SUPPORTS
      ══════════════════════════════════════════ */}
      <section
        className="py-24 md:py-28"
        style={{ background: P.bg2, borderTop: `1px solid ${P.border}` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div>
              <SectionEyebrow label="Who We Support" />
              <motion.h2 {...fu} className="font-display text-[28px] md:text-[38px] font-extrabold leading-[1.12] tracking-[-0.018em] mb-6" style={{ color: P.head2 }}>
                Built for UAE project teams, contractors and clients.
              </motion.h2>
              <motion.p {...fu} transition={{ delay: 0.1 }} className="text-[15px] leading-[1.85] mb-10" style={{ color: P.body }}>
                OKG serves main contractors, project managers, consultants and private clients requiring disciplined execution and transparent communication.
              </motion.p>

              <div className="space-y-6">
                {[
                  { title: 'Main Contractors', text: 'Subcontract packages for civil, masonry, plastering and finishing scopes requiring responsible mobilisation.', icon: Users },
                  { title: 'Project Managers & Consultants', text: 'Accountable labour coordination, QHSE compliance and documented progress reporting.', icon: ClipboardCheck },
                  { title: 'Private Clients & Developers', text: 'Transparent pricing, quality finishing and site accountability for villa owners and developers.', icon: Shield },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 rounded-2xl p-5"
                    style={{
                      background: 'rgba(255,255,255,0.7)',
                      border: `1px solid ${P.border}`,
                    }}
                  >
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5" style={{ background: P.tint, border: `1px solid ${P.border}` }}>
                      <item.icon className="w-4 h-4" style={{ color: P.blue }} />
                    </div>
                    <div>
                      <h4 className="text-[14.5px] font-bold mb-1" style={{ color: P.head2 }}>{item.title}</h4>
                      <p className="text-[13.5px] leading-relaxed" style={{ color: P.body }}>{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="relative rounded-2xl overflow-hidden"
              style={{ boxShadow: '0 20px 56px rgba(110,133,232,0.1)' }}
            >
              <img
                src="https://media.base44.com/images/public/69f0f9c5f2486cca9280edd1/2f6870904_generated_image.png"
                alt="Construction workers team PPE UAE site mobilisation"
                className="w-full h-[420px] object-cover object-center"
                loading="lazy"
              />
            </motion.div>

          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          8. COMMITMENTS
      ══════════════════════════════════════════ */}
      <section
        className="py-20 md:py-24"
        style={{
          background: 'linear-gradient(160deg, #FFFFFF 0%, #EAF0FF 100%)',
          borderTop: `1px solid ${P.border}`,
          borderBottom: `1px solid ${P.border}`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionEyebrow label="Our Commitments" />
              <motion.h2 {...fu} className="font-display text-[26px] md:text-[36px] font-extrabold leading-[1.12] tracking-[-0.018em] mb-5" style={{ color: P.head2 }}>
                Committed to practical construction standards.
              </motion.h2>
              <motion.p {...fu} transition={{ delay: 0.1 }} className="text-[14px] leading-[1.9]" style={{ color: P.body }}>
                Every OKG project is approached with the same level of discipline, transparency and care — regardless of scope size or package type.
              </motion.p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {commitments.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-center gap-3 rounded-xl p-4 transition-all hover:shadow-md group"
                  style={{
                    background: 'rgba(255,255,255,0.75)',
                    backdropFilter: 'blur(8px)',
                    border: `1px solid ${P.border}`,
                    boxShadow: '0 2px 8px rgba(110,133,232,0.05)',
                  }}
                >
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(110,133,232,0.1)', border: '1px solid rgba(110,133,232,0.2)' }}
                  >
                    <Check className="w-2.5 h-2.5" style={{ color: P.blue }} />
                  </div>
                  <span className="text-[12.5px] font-semibold leading-tight" style={{ color: P.head }}>{c}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}