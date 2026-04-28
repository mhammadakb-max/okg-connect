import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import SectionEyebrow from '../components/shared/SectionEyebrow';
import CTABand from '../components/shared/CTABand';

/* ─── palette shortcuts ─── */
const C = {
  ivory: '#F7F4EE',
  stone: '#F1ECE4',
  warmWhite: '#FBF9F5',
  charcoal: '#1F1F1B',
  charcoalDk: '#2E2B27',
  taupe: '#67635C',
  border: '#DDD6CB',
  bronze: '#B58A57',
  tan: '#C8A97E',
};

const fu = { initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

const services = [
  {
    num: '01', title: 'Building Contracting Works',
    text: 'Villas, commercial units, extensions, renovations and subcontract packages.',
    img: 'https://media.base44.com/images/public/69f0f9c5f2486cca9280edd1/b7de27fed_generated_image.png',
    alt: 'Active building construction site UAE tower crane concrete structure',
  },
  {
    num: '02', title: 'Blockwork & Masonry',
    text: 'Blockwork, masonry, partitions, walls and controlled progress tracking.',
    img: 'https://media.base44.com/images/public/69f0f9c5f2486cca9280edd1/b42f1aeda_generated_image.png',
    alt: 'Workers PPE laying concrete blocks masonry wall construction',
  },
  {
    num: '03', title: 'Plastering Works',
    text: 'Internal and external plastering with surface preparation, line, level and finish.',
    img: 'https://media.base44.com/images/public/69f0f9c5f2486cca9280edd1/a65b1ec5c_generated_image.png',
    alt: 'Construction worker PPE applying plaster trowel wall',
  },
  {
    num: '04', title: 'Concrete Works',
    text: 'Concrete casting, pour preparation and labour-based concrete execution.',
    img: 'https://media.base44.com/images/public/69f0f9c5f2486cca9280edd1/916b3e206_generated_image.png',
    alt: 'Construction workers hard hats concrete pouring slab UAE',
  },
  {
    num: '05', title: 'Steel Fixing & Shuttering',
    text: 'Structural work under approved drawings, shuttering and steel fixing packages.',
    img: 'https://media.base44.com/images/public/69f0f9c5f2486cca9280edd1/8b5302156_generated_image.png',
    alt: 'Steel rebar fixing formwork shuttering construction structural frame',
  },
  {
    num: '06', title: 'Fit-Out & Finishing',
    text: 'Gypsum, painting, flooring, ceiling and handover-focused finishing support.',
    img: 'https://media.base44.com/images/public/69f0f9c5f2486cca9280edd1/2f06871a6_generated_image.png',
    alt: 'Construction interior fit-out gypsum ceiling finishing works',
  },
];

const pillars = [
  { num: '01', title: 'Execution Discipline', text: 'Work is planned, supervised and tracked with attention to daily output and site conditions.' },
  { num: '02', title: 'Transparent Communication', text: 'Every scope is clearly priced, documented and coordinated before mobilisation.' },
  { num: '03', title: 'Responsible Delivery', text: 'OKG completes agreed work through practical planning, site control and accountability.' },
];

const processSteps = ['Enquiry', 'Site Review', 'Scope Alignment', 'Quotation', 'Mobilisation', 'Execution', 'Inspection', 'Handover'];

const commitments = ['Quality workmanship', 'Safe working practices', 'Clear documentation', 'Responsible mobilisation', 'Transparent pricing', 'Professional handover'];

export default function Home() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════
          HERO — split layout, warm tone, full bleed image right
      ══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ background: C.stone, minHeight: '92vh' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-0 min-h-[92vh] items-stretch">

            {/* LEFT — text */}
            <div className="flex flex-col justify-center py-16 md:py-20 lg:py-24 pr-0 lg:pr-16">

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 mb-8"
              >
                <span className="w-6 h-px" style={{ background: C.bronze }} />
                <span className="text-[10.5px] font-mono font-semibold tracking-[0.22em] uppercase" style={{ color: C.bronze }}>
                  UAE Building Contracting
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 }}
                className="font-display text-[36px] md:text-[52px] lg:text-[60px] font-extrabold leading-[1.05] tracking-[-0.028em] mb-7"
                style={{ color: C.charcoal }}
              >
                Constructing with<br />
                <span style={{ color: C.bronze }}>discipline</span>,<br />
                clarity and control.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.16 }}
                className="text-[15px] md:text-[16px] leading-[1.85] mb-4 max-w-lg"
                style={{ color: C.taupe }}
              >
                OKG Building Contracting delivers civil, masonry, plastering, concrete, steel fixing, shuttering, fit-out and finishing support for projects across the UAE.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.22 }}
                className="text-[14px] leading-[1.85] mb-10 max-w-md"
                style={{ color: C.taupe, opacity: 0.8 }}
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
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg text-[13.5px] font-semibold transition-all hover:opacity-85"
                  style={{ background: C.charcoalDk, color: C.warmWhite }}
                >
                  Request Quotation <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/capabilities"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-[13.5px] font-medium transition-all hover:opacity-80"
                  style={{ border: `1px solid ${C.border}`, color: C.taupe }}
                >
                  Explore Capabilities
                </Link>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.36 }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6"
                style={{ borderTop: `1px solid ${C.border}`, paddingTop: 24 }}
              >
                {[
                  { label: 'Scope Clarity', sub: 'Defined before mobilisation' },
                  { label: 'Supervision', sub: 'Daily site control' },
                  { label: 'QHSE', sub: 'Safety & quality focus' },
                ].map((b, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <span className="w-1 h-1 rounded-full shrink-0" style={{ background: C.bronze }} />
                    <span className="text-[13px] font-semibold" style={{ color: C.charcoal }}>{b.label}</span>
                    <span className="text-[12px]" style={{ color: C.taupe }}>— {b.sub}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — full bleed construction image */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.18, duration: 0.7 }}
              className="relative hidden lg:block"
            >
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src="https://media.base44.com/images/public/69f0f9c5f2486cca9280edd1/23fd35dff_generated_image.png"
                  alt="UAE construction site team PPE active building site"
                  className="w-full h-full object-cover object-center"
                />
                {/* Subtle warm overlay */}
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(241,236,228,0.65) 0%, rgba(241,236,228,0) 40%)' }} />
                {/* Bottom caption */}
                <div className="absolute bottom-0 left-0 right-0 px-8 py-6" style={{ background: 'linear-gradient(to top, rgba(30,27,23,0.72) 0%, transparent 100%)' }}>
                  <div className="flex items-center gap-3">
                    <span className="w-[2px] h-8 rounded-full shrink-0" style={{ background: C.bronze }} />
                    <div>
                      <p className="text-[10px] font-mono tracking-[0.2em] uppercase mb-0.5" style={{ color: C.tan }}>OKG Building Contracting</p>
                      <p className="text-[14px] font-semibold text-white">Scope · Supervision · Delivery</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Mobile hero image */}
        <div className="lg:hidden relative h-64 mt-0 overflow-hidden">
          <img
            src="https://media.base44.com/images/public/69f0f9c5f2486cca9280edd1/23fd35dff_generated_image.png"
            alt="UAE construction site team PPE"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(241,236,228,0.5) 0%, rgba(241,236,228,0) 30%)' }} />
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════
          ABOUT PREVIEW — editorial split, text left, image right
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32" style={{ background: C.warmWhite }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div>
              <SectionEyebrow label="About OKG" />
              <motion.h2 {...fu} className="font-display text-[28px] md:text-[40px] font-extrabold leading-[1.12] tracking-[-0.02em] mb-6" style={{ color: C.charcoal }}>
                Built around disciplined execution and transparent delivery.
              </motion.h2>
              <motion.p {...fu} transition={{ delay: 0.1 }} className="text-[15px] leading-[1.9] mb-4" style={{ color: C.charcoal }}>
                OKG serves the UAE construction market with a straightforward operating principle: understand the scope, mobilise responsibly, supervise the work and protect the client's time, budget and site quality.
              </motion.p>
              <motion.p {...fu} transition={{ delay: 0.16 }} className="text-[14px] leading-[1.9] mb-10" style={{ color: C.taupe }}>
                Our approach is based on accountability, proper documentation, clear quotations, worker control, subcontractor discipline and practical communication with site teams.
              </motion.p>

              {/* Position callout */}
              <motion.div {...fu} transition={{ delay: 0.2 }} className="relative rounded-lg p-6 mb-10 overflow-hidden" style={{ background: C.stone, border: `1px solid ${C.border}` }}>
                <div className="absolute left-0 top-0 bottom-0 w-[2px]" style={{ background: C.bronze }} />
                <p className="text-[13.5px] leading-[1.8] pl-5" style={{ color: C.charcoal }}>
                  OKG is suited for clients who want a contractor that is transparent about capacity, clear in pricing, disciplined in mobilisation and serious about performance on site.
                </p>
              </motion.div>

              <motion.div {...fu} transition={{ delay: 0.26 }}>
                <Link to="/about" className="inline-flex items-center gap-2 text-[13.5px] font-semibold group" style={{ color: C.charcoal }}>
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
              <div className="rounded-xl overflow-hidden" style={{ boxShadow: '0 16px 48px rgba(31,31,27,0.12)' }}>
                <img
                  src="https://media.base44.com/images/public/69f0f9c5f2486cca9280edd1/b43d44e48_generated_image.png"
                  alt="Construction engineer reviewing project drawings documentation UAE"
                  className="w-full h-[440px] object-cover object-center"
                  loading="lazy"
                />
              </div>
              {/* Bronze corner accent */}
              <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-xl hidden lg:block" style={{ background: C.stone, border: `1px solid ${C.border}`, zIndex: -1 }} />
            </motion.div>

          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════
          SERVICES — image-led, generous tiles
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32" style={{ background: C.ivory }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <SectionEyebrow label="What We Do" />
              <motion.h2 {...fu} className="font-display text-[28px] md:text-[40px] font-extrabold leading-[1.1] tracking-[-0.02em]" style={{ color: C.charcoal }}>
                Services we deliver.
              </motion.h2>
              <motion.p {...fu} transition={{ delay: 0.1 }} className="text-[15px] mt-3 max-w-xl" style={{ color: C.taupe }}>
                Integrated construction support for civil, structural, masonry and finishing work packages.
              </motion.p>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 text-[13px] font-semibold whitespace-nowrap group shrink-0" style={{ color: C.charcoal }}>
              Full service spectrum <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="group relative rounded-xl overflow-hidden bg-white border hover:shadow-lg transition-all duration-300"
                style={{ borderColor: C.border }}
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={s.img} alt={s.alt}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'rgba(46,43,39,0.3)' }} />
                  <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: C.bronze }} />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded" style={{ background: 'rgba(30,27,23,0.7)' }}>
                    <span className="text-[10px] font-mono font-bold" style={{ color: C.tan }}>{s.num}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-[14.5px] font-bold mb-2 leading-snug" style={{ color: C.charcoal }}>{s.title}</h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: C.taupe }}>{s.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════
          CORE PILLARS — horizontal editorial strip
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-28" style={{ background: C.warmWhite, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-12 items-start">

            {/* Left heading */}
            <div className="lg:col-span-1">
              <SectionEyebrow label="Core Pillars" />
              <motion.h2 {...fu} className="font-display text-[24px] md:text-[32px] font-extrabold leading-[1.15] tracking-[-0.018em]" style={{ color: C.charcoal }}>
                The principles behind OKG delivery.
              </motion.h2>
            </div>

            {/* Pillars */}
            <div className="lg:col-span-3 grid md:grid-cols-3 gap-6">
              {pillars.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="text-[11px] font-mono font-bold mb-3" style={{ color: C.bronze }}>{p.num}</div>
                  <div className="w-8 h-px mb-4" style={{ background: C.border }} />
                  <h3 className="text-[16px] font-bold mb-3 leading-snug" style={{ color: C.charcoal }}>{p.title}</h3>
                  <p className="text-[13.5px] leading-[1.75]" style={{ color: C.taupe }}>{p.text}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════
          QHSE PREVIEW — full bleed image left, text right
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-28" style={{ background: C.ivory }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-xl overflow-hidden order-2 lg:order-1"
              style={{ boxShadow: '0 12px 40px rgba(31,31,27,0.1)' }}
            >
              <img
                src="https://media.base44.com/images/public/69f0f9c5f2486cca9280edd1/6af65c67b_generated_image.png"
                alt="Construction worker PPE safety helmet conducting site inspection UAE"
                className="w-full h-[400px] object-cover object-center"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 px-6 py-4" style={{ background: 'linear-gradient(to top, rgba(30,27,23,0.65) 0%, transparent 100%)' }}>
                <div className="flex items-center gap-3">
                  <span className="w-[2px] h-7 rounded-full shrink-0" style={{ background: C.bronze }} />
                  <span className="text-[12px] font-semibold text-white tracking-[0.08em] uppercase">Safety · Quality · Housekeeping</span>
                </div>
              </div>
            </motion.div>

            <div className="order-1 lg:order-2">
              <SectionEyebrow label="QHSE" />
              <motion.h2 {...fu} className="font-display text-[28px] md:text-[38px] font-extrabold leading-[1.12] tracking-[-0.018em] mb-5" style={{ color: C.charcoal }}>
                Quality, safety and control built into the work.
              </motion.h2>
              <motion.p {...fu} transition={{ delay: 0.1 }} className="text-[15px] leading-[1.9] mb-5" style={{ color: C.charcoal }}>
                Every project should be handled with safety awareness, clean documentation, quality checking, responsible housekeeping and clear reporting.
              </motion.p>
              <motion.p {...fu} transition={{ delay: 0.16 }} className="text-[14px] leading-[1.9] mb-8" style={{ color: C.taupe }}>
                OKG's QHSE approach is practical and documented. Safety and quality are treated as core elements of disciplined project delivery, not optional additions.
              </motion.p>
              <motion.div {...fu} transition={{ delay: 0.22 }}>
                <Link to="/qhse" className="inline-flex items-center gap-2 text-[13.5px] font-semibold group" style={{ color: C.charcoal }}>
                  View QHSE Policies <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════
          PROJECT CONTROL — dark section, horizontal steps
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-28" style={{ background: C.charcoalDk }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-1">
              <SectionEyebrow label="Project Control" light />
              <motion.h2 {...fu} className="font-display text-[24px] md:text-[34px] font-extrabold leading-[1.15] tracking-[-0.018em]" style={{ color: C.warmWhite }}>
                From enquiry to handover, every package needs control.
              </motion.h2>
            </div>
            <motion.p {...fu} transition={{ delay: 0.1 }} className="lg:col-span-2 text-[15px] leading-[1.85] self-end" style={{ color: 'rgba(251,249,245,0.45)' }}>
              OKG's process is built around practical execution control at each stage of a project package. Clear scope, daily supervision, documented approvals and transparent reporting from start to finish.
            </motion.p>
          </div>

          {/* Desktop steps */}
          <div className="hidden md:grid grid-cols-8 gap-2 relative">
            <div className="absolute top-[18px] left-0 right-0 h-px" style={{ background: 'rgba(221,214,203,0.12)' }} />
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
                    background: i === 0 ? C.bronze : 'rgba(221,214,203,0.08)',
                    border: `1px solid ${i === 0 ? C.bronze : 'rgba(221,214,203,0.2)'}`,
                  }}
                >
                  <span className="text-[9px] font-mono font-bold" style={{ color: i === 0 ? C.warmWhite : 'rgba(221,214,203,0.5)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <p className="text-[11px] font-medium leading-tight" style={{ color: i === 0 ? C.tan : 'rgba(251,249,245,0.4)' }}>{step}</p>
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
                className="flex items-center gap-3 px-4 py-3 rounded-lg"
                style={{ background: 'rgba(221,214,203,0.06)', border: '1px solid rgba(221,214,203,0.1)' }}
              >
                <span className="text-[10px] font-mono font-bold shrink-0" style={{ color: C.tan }}>{String(i + 1).padStart(2, '0')}</span>
                <span className="text-[13px] font-medium" style={{ color: 'rgba(251,249,245,0.65)' }}>{step}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════
          WHO OKG SUPPORTS
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-28" style={{ background: C.warmWhite }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div>
              <SectionEyebrow label="Who We Support" />
              <motion.h2 {...fu} className="font-display text-[28px] md:text-[38px] font-extrabold leading-[1.12] tracking-[-0.018em] mb-6" style={{ color: C.charcoal }}>
                Built for UAE project teams, contractors and clients.
              </motion.h2>
              <motion.p {...fu} transition={{ delay: 0.1 }} className="text-[15px] leading-[1.85] mb-10" style={{ color: C.taupe }}>
                OKG serves main contractors, project managers, consultants and private clients requiring disciplined execution and transparent communication.
              </motion.p>

              <div className="space-y-5">
                {[
                  { title: 'Main Contractors', text: 'Subcontract packages for civil, masonry, plastering and finishing scopes requiring responsible mobilisation.' },
                  { title: 'Project Managers & Consultants', text: 'Accountable labour coordination, QHSE compliance and documented progress reporting.' },
                  { title: 'Private Clients & Developers', text: 'Transparent pricing, quality finishing and site accountability for villa owners and developers.' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <span className="w-1 h-1 rounded-full mt-2.5 shrink-0" style={{ background: C.bronze }} />
                    <div>
                      <h4 className="text-[14.5px] font-bold mb-1" style={{ color: C.charcoal }}>{item.title}</h4>
                      <p className="text-[13.5px] leading-relaxed" style={{ color: C.taupe }}>{item.text}</p>
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
              className="relative rounded-xl overflow-hidden"
              style={{ boxShadow: '0 12px 40px rgba(31,31,27,0.1)' }}
            >
              <img
                src="https://media.base44.com/images/public/69f0f9c5f2486cca9280edd1/2f6870904_generated_image.png"
                alt="Construction workers team PPE UAE site mobilisation"
                className="w-full h-[400px] object-cover object-center"
                loading="lazy"
              />
            </motion.div>

          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════
          COMMITMENTS — warm stone background
      ══════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-24" style={{ background: C.stone, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionEyebrow label="Our Commitments" />
              <motion.h2 {...fu} className="font-display text-[26px] md:text-[36px] font-extrabold leading-[1.12] tracking-[-0.018em] mb-5" style={{ color: C.charcoal }}>
                Committed to practical construction standards.
              </motion.h2>
              <motion.p {...fu} transition={{ delay: 0.1 }} className="text-[14px] leading-[1.9]" style={{ color: C.taupe }}>
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
                  className="flex items-center gap-3 rounded-lg p-4 bg-white border hover:shadow-sm transition-all"
                  style={{ borderColor: C.border }}
                >
                  <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0" style={{ background: 'rgba(181,138,87,0.12)' }}>
                    <Check className="w-2.5 h-2.5" style={{ color: C.bronze }} />
                  </div>
                  <span className="text-[12.5px] font-semibold leading-tight" style={{ color: C.charcoal }}>{c}</span>
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