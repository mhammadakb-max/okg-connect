import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Shield, MapPin, ClipboardCheck, ChevronRight } from 'lucide-react';
import SectionEyebrow from '../components/shared/SectionEyebrow';
import CTABand from '../components/shared/CTABand';

const heroChecklist = [
  'Clear scope before mobilisation',
  'Daily progress control on site',
  'Quality and safety built into every activity',
  'Growth through real, documented delivery',
];

const pillars = [
  { label: 'Honest', sub: 'No inflated claims' },
  { label: 'UAE-Based', sub: 'Site-ready approach' },
  { label: 'Disciplined', sub: 'Scope & supervision' },
];

const valueCards = [
  {
    num: '01',
    title: 'No false history',
    text: 'We do not claim decades of experience or hundreds of completed projects. We compete through discipline, honesty and strong execution control.',
  },
  {
    num: '02',
    title: 'Site-first thinking',
    text: 'Construction is won through manpower, material coordination, supervision, safety, approvals and controlled daily output.',
  },
  {
    num: '03',
    title: 'Commitment before scale',
    text: 'We build trust project by project and grow through repeat clients instead of inflated marketing claims.',
  },
];

const serviceCards = [
  {
    num: '01',
    title: 'Building Contracting Works',
    text: 'Support for villas, commercial buildings, extensions, renovations and subcontract packages.',
  },
  {
    num: '02',
    title: 'Blockwork & Masonry',
    text: 'Blockwork, masonry, partitions, walls and controlled progress tracking.',
  },
  {
    num: '03',
    title: 'Plastering Works',
    text: 'Internal and external plastering with attention to surface preparation, line, level and finish.',
  },
];

const capChecklist = [
  'Clear scope, quotation and measurement discipline',
  'Site supervision and daily progress follow-up',
  'Worker and subcontractor documentation support',
  'Transparent payment milestones and work approvals',
];

const fu = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function Home() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-white overflow-hidden">
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(0,16,120,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,16,120,1) 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">

            {/* ── Left ── */}
            <div className="lg:col-span-7">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2.5 rounded-full border border-gray-200 px-4 py-2 mb-8"
                style={{ background: '#F7F8FB' }}
              >
                <span className="w-2 h-2 rounded-full" style={{ background: '#F8B858' }} />
                <span className="text-[11px] font-mono font-semibold tracking-[0.18em] uppercase" style={{ color: '#001078' }}>
                  UAE Building Contracting Company
                </span>
              </motion.div>

              {/* H1 */}
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-[34px] md:text-[48px] lg:text-[54px] font-bold leading-[1.12] tracking-[-0.02em] mb-6"
                style={{ color: '#001078' }}
              >
                Reliable construction<br />
                <span style={{ color: '#001078' }}>execution for the UAE</span><span className="text-gold">.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18 }}
                className="text-[16px] md:text-[17px] leading-[1.75] mb-8 max-w-xl"
                style={{ color: '#6B7280' }}
              >
                OKG Building Contracting is a new UAE contractor built on disciplined site management, transparent scope control and honest project delivery. Civil, masonry, plastering, concrete, steel fixing, shuttering, fit-out and finishing.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.26 }}
                className="flex flex-wrap gap-3 mb-10"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-[14px] font-bold text-white shadow-lg transition-all hover:scale-[1.02]"
                  style={{ background: '#001078' }}
                >
                  Request a Quotation
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-[14px] font-semibold border-2 transition-all hover:bg-navy hover:text-white"
                  style={{ borderColor: '#001078', color: '#001078' }}
                >
                  View Services
                </Link>
              </motion.div>

              {/* Pillars */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.36 }}
                className="flex flex-wrap gap-3"
              >
                {pillars.map((p) => (
                  <div
                    key={p.label}
                    className="flex items-center gap-2.5 rounded-xl border border-gray-200 px-4 py-3"
                    style={{ background: '#F7F8FB' }}
                  >
                    <span className="w-2 h-2 rounded-full shrink-0" style={{ background: '#F8B858' }} />
                    <div>
                      <span className="text-[13px] font-bold" style={{ color: '#001078' }}>{p.label}</span>
                      <span className="text-[12px] ml-1.5" style={{ color: '#6B7280' }}>— {p.sub}</span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* ── Right card ── */}
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.22, duration: 0.5 }}
              className="lg:col-span-5"
            >
              {/* Main card */}
              <div
                className="relative rounded-2xl p-7 md:p-8 border border-gray-100 shadow-2xl shadow-navy/10 overflow-hidden"
                style={{ background: '#001078' }}
              >
                {/* Grid */}
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
                    backgroundSize: '32px 32px',
                  }}
                />
                <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: '#F8B858' }} />

                <div className="relative z-10">
                  <div className="flex items-center gap-0 mb-6">
                    <span className="text-[24px] font-black tracking-tight text-white">OKG</span>
                    <span className="w-2 h-2 rounded-full ml-0.5 mb-3" style={{ background: '#F8B858' }} />
                  </div>

                  <p className="text-[13.5px] leading-relaxed mb-7" style={{ color: 'rgba(255,255,255,0.65)' }}>
                    A disciplined contracting brand for clients who value straight communication, controlled site output and accountable delivery.
                  </p>

                  <div className="space-y-3.5">
                    {heroChecklist.map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                          style={{ background: 'rgba(248,184,88,0.18)' }}
                        >
                          <Check className="w-3 h-3" style={{ color: '#F8B858' }} />
                        </div>
                        <span className="text-[13px] text-white/80">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10">
                    <Link
                      to="/capabilities"
                      className="inline-flex items-center gap-2 text-[13px] font-semibold transition-colors hover:opacity-80"
                      style={{ color: '#F8B858' }}
                    >
                      View Capabilities <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-100" />
      </section>

      {/* ─── ABOUT PREVIEW ────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28" style={{ background: '#F7F8FB' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text */}
            <div>
              <SectionEyebrow label="About OKG" />
              <motion.h2 {...fu} className="text-3xl md:text-[40px] font-bold leading-[1.18] tracking-[-0.015em] mb-6" style={{ color: '#001078' }}>
                New company.<br />Serious standard.<br />No exaggerated claims.
              </motion.h2>
              <motion.p {...fu} transition={{ delay: 0.1 }} className="text-[15px] leading-[1.8] mb-4" style={{ color: '#1E1E1E' }}>
                OKG has been created to serve the UAE construction market with a straightforward promise: understand the scope, mobilise responsibly, supervise the work and protect the client's time, budget and site quality.
              </motion.p>
              <motion.p {...fu} transition={{ delay: 0.16 }} className="text-[14px] leading-[1.8] mb-8" style={{ color: '#6B7280' }}>
                Our advantage is accountability and the ability to build proper systems from day one: documentation, clear quotations, worker control, subcontractor discipline and direct site communication.
              </motion.p>
              <motion.div {...fu} transition={{ delay: 0.22 }}>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-[14px] font-bold transition-colors"
                  style={{ color: '#001078' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#F8B858'}
                  onMouseLeave={e => e.currentTarget.style.color = '#001078'}
                >
                  Read About OKG <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>

            {/* Cards */}
            <div className="space-y-4">
              {valueCards.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 hover:shadow-lg hover:shadow-navy/5 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <span
                      className="text-[11px] font-mono font-bold shrink-0 mt-0.5"
                      style={{ color: '#F8B858' }}
                    >
                      {card.num}
                    </span>
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

      {/* ─── SERVICES PREVIEW ─────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <SectionEyebrow label="What We Do" />
              <motion.h2 {...fu} className="text-3xl md:text-[40px] font-bold leading-[1.18] tracking-[-0.015em]" style={{ color: '#001078' }}>
                Construction services built<br />around practical site delivery.
              </motion.h2>
            </div>
            <motion.div {...fu} transition={{ delay: 0.1 }}>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-[13px] font-semibold whitespace-nowrap"
                style={{ color: '#001078' }}
              >
                Full spectrum <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {serviceCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-2xl p-7 border border-gray-100 hover:border-gray-200 hover:shadow-xl hover:shadow-navy/6 transition-all overflow-hidden"
                style={{ background: '#F7F8FB' }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: '#F8B858' }}
                />
                <span className="text-[11px] font-mono font-bold block mb-3" style={{ color: '#F8B858' }}>{card.num}</span>
                <h3 className="text-[16px] font-bold mb-3 leading-snug" style={{ color: '#001078' }}>{card.title}</h3>
                <p className="text-[13.5px] leading-relaxed" style={{ color: '#6B7280' }}>{card.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fu} transition={{ delay: 0.15 }}>
            <Link
              to="/services"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-[14px] font-bold text-white transition-all hover:scale-[1.01] shadow-md"
              style={{ background: '#001078' }}
            >
              View Full Service Spectrum <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── CAPABILITIES PREVIEW ─────────────────────────────────────────── */}
      <section className="py-20 md:py-28" style={{ background: '#F7F8FB' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text */}
            <div className="order-2 lg:order-1">
              <SectionEyebrow label="Capabilities" />
              <motion.h2 {...fu} className="text-3xl md:text-[40px] font-bold leading-[1.18] tracking-[-0.015em] mb-5" style={{ color: '#001078' }}>
                Built to operate with clarity, control and accountability.
              </motion.h2>
              <motion.p {...fu} transition={{ delay: 0.1 }} className="text-[14px] leading-[1.8] mb-8" style={{ color: '#6B7280' }}>
                A new contractor must win trust by being precise. OKG's operating model is designed around clear communication, realistic mobilisation and measurable progress.
              </motion.p>
              <div className="space-y-4">
                {capChecklist.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-3.5"
                  >
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 shrink-0"
                      style={{ background: 'rgba(248,184,88,0.15)' }}
                    >
                      <Check className="w-3 h-3" style={{ color: '#F8B858' }} />
                    </div>
                    <span className="text-[14px] leading-relaxed" style={{ color: '#1E1E1E' }}>{item}</span>
                  </motion.div>
                ))}
              </div>
              <motion.div {...fu} transition={{ delay: 0.35 }} className="mt-8">
                <Link
                  to="/capabilities"
                  className="inline-flex items-center gap-2 text-[14px] font-bold"
                  style={{ color: '#001078' }}
                >
                  View Execution Process <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>

            {/* Image panel */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="order-1 lg:order-2"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-navy/12">
                <img
                  src="https://media.base44.com/images/public/69f0f9c5f2486cca9280edd1/fa276dd29_generated_0616a86b.png"
                  alt="Construction site supervision with digital tablet"
                  className="w-full h-[380px] object-cover"
                />
                {/* Overlay badge */}
                <div
                  className="absolute bottom-5 left-5 right-5 rounded-xl p-4 border border-white/20"
                  style={{ background: 'rgba(0,16,120,0.85)', backdropFilter: 'blur(12px)' }}
                >
                  <p className="text-[12px] font-semibold text-white/90">OKG Execution Standard</p>
                  <p className="text-[11px] mt-0.5" style={{ color: 'rgba(255,255,255,0.55)' }}>
                    Site review → Scope alignment → Quotation → Mobilisation → Daily control → Handover
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────────────── */}
      <CTABand />
    </>
  );
}