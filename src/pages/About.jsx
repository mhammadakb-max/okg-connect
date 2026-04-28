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
  { icon: Eye, title: 'Vision', text: 'To become a trusted UAE building contracting company known for reliable execution, disciplined site management and quality construction delivery.' },
  { icon: Compass, title: 'Mission', text: 'To deliver civil, structural, masonry, plastering and finishing works through professional supervision, safe practices, transparent coordination and timely completion.' },
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

      {/* ─── Company Profile ─────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <SectionEyebrow label="Company Profile" />
              <motion.h2 {...fu} className="text-3xl md:text-[40px] font-bold leading-[1.18] tracking-[-0.015em] mb-7" style={{ color: '#001078' }}>
                A contractor built around execution discipline.
              </motion.h2>
              <motion.p {...fu} transition={{ delay: 0.1 }} className="text-[15px] leading-[1.8] mb-5" style={{ color: '#1E1E1E' }}>
                OKG supports clients requiring a clear, responsive and accountable contractor for civil works, masonry, plastering, structural support, fit-out and finishing packages across the UAE.
              </motion.p>
              <motion.p {...fu} transition={{ delay: 0.18 }} className="text-[14px] leading-[1.8]" style={{ color: '#6B7280' }}>
                OKG is positioned around site control, clear documentation, honest communication and professional commitment — through every stage of the project.
              </motion.p>
            </div>

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
          <motion.h2 {...fu} className="text-3xl md:text-[40px] font-bold leading-[1.18] tracking-[-0.015em] mb-12" style={{ color: '#001078' }}>
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