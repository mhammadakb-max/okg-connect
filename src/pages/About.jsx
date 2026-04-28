import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Target, Eye, Compass } from 'lucide-react';
import PageHero from '../components/shared/PageHero';
import SectionEyebrow from '../components/shared/SectionEyebrow';
import ValueCard from '../components/shared/ValueCard';
import CTABand from '../components/shared/CTABand';

const values = [
  { icon: Heart, title: 'Honesty', text: 'Every proposal is based on actual capacity, realistic programme and clearly defined scope. Transparent pricing and honest communication are non-negotiable.' },
  { icon: Shield, title: 'Discipline', text: 'Construction progress depends on daily supervision, attendance control, material coordination and fast issue escalation.' },
  { icon: Target, title: 'Accountability', text: 'OKG expects work to be checked, corrected and handed over professionally instead of leaving defects or confusion behind.' },
  { icon: Eye, title: 'Vision', text: 'OKG operates as a UAE building contracting company known for reliable execution, disciplined site management and quality construction delivery.' },
  { icon: Compass, title: 'Mission', text: 'To deliver civil, structural, masonry, plastering and finishing works through professional supervision, safe practices, transparent coordination and accountable completion.' },
];

const fu = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About OKG"
        title="Built around disciplined execution and transparent delivery."
        intro="OKG Building Contracting serves the UAE construction market with a straightforward operating principle: understand the scope, mobilise responsibly, supervise the work and protect the client's quality, time and budget."
      />

      {/* ─── Visual band ─────────────────────────────────────────────────── */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
          alt="UAE construction site with active building works and cranes"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,16,120,0.05) 0%, rgba(0,8,51,0.55) 100%)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: 'linear-gradient(to right, transparent, #F8B858 35%, #F8B858 65%, transparent)' }} />
      </div>

      {/* ─── Company Profile ─────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <SectionEyebrow label="Company Profile" />
              <motion.h2 {...fu} className="font-display text-3xl md:text-[40px] font-bold leading-[1.18] tracking-[-0.015em] mb-7" style={{ color: '#001078' }}>
                A contractor built around execution discipline.
              </motion.h2>
              <motion.p {...fu} transition={{ delay: 0.1 }} className="text-[15px] leading-[1.8] mb-5" style={{ color: '#1E1E1E' }}>
                OKG supports clients requiring a clear, responsive and accountable contractor for civil works, masonry, plastering, structural support, fit-out and finishing packages across the UAE.
              </motion.p>
              <motion.p {...fu} transition={{ delay: 0.18 }} className="text-[14px] leading-[1.8]" style={{ color: '#6B7280' }}>
                OKG is positioned around site control, clear documentation, honest communication and professional commitment — through every stage of the project.
              </motion.p>
            </div>

            {/* About image */}
            <motion.div
              {...fu}
              transition={{ delay: 0.15 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl shadow-navy/12 mb-6"
            >
              <img
                src="https://images.unsplash.com/photo-1590736704728-f4730bb30770?w=1100&q=80"
                alt="Construction engineer reviewing project plans and documentation"
                className="w-full h-60 object-cover object-center"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 px-5 py-3 flex items-center gap-3" style={{ background: 'rgba(0,16,120,0.88)', backdropFilter: 'blur(8px)' }}>
                <span className="w-[3px] h-7 rounded-full shrink-0" style={{ background: '#F8B858' }} />
                <span className="text-[11.5px] font-bold tracking-[0.12em] uppercase text-white/90">Scope · Supervision · Delivery</span>
              </div>
            </motion.div>

            {/* Market position card */}
            <motion.div
              {...fu}
              transition={{ delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden border border-gray-100"
              style={{ background: '#F7F8FB' }}
            >
              <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: '#F8B858' }} />
              <div className="p-8 md:p-10 pl-10">
                <p className="text-[11px] font-mono font-semibold tracking-[0.18em] uppercase mb-4" style={{ color: '#F8B858' }}>
                  Our position
                </p>
                <h3 className="text-[20px] font-bold mb-4" style={{ color: '#001078' }}>
                  For clients who value transparency and accountability.
                </h3>
                <p className="text-[14px] leading-[1.8]" style={{ color: '#6B7280' }}>
                  OKG is suited for clients who want a contractor that is transparent about capacity, clear in pricing, disciplined in mobilisation and serious about performance on site.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Values ──────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28" style={{ background: '#F7F8FB' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionEyebrow label="Core Values" />
          <motion.h2 {...fu} className="font-display text-3xl md:text-[40px] font-bold leading-[1.18] tracking-[-0.015em] mb-12" style={{ color: '#001078' }}>
            What OKG commits to on every project.
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <ValueCard key={i} icon={v.icon} title={v.title} text={v.text} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}