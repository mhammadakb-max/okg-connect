import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Target, Eye, Compass } from 'lucide-react';
import PageHero from '../components/shared/PageHero';
import SectionEyebrow from '../components/shared/SectionEyebrow';
import ValueCard from '../components/shared/ValueCard';
import CTABand from '../components/shared/CTABand';

const P = { white: '#FFFFFF', bg: '#F7F9FF', bg2: '#F2F6FF', tint: '#EAF0FF', blue: '#6E85E8', head: '#5F6D9A', head2: '#3D4A73', body: '#7C86A8', muted: '#97A0BC', border: '#E6EBF5' };

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
        breadcrumb="About"
        title="Built around disciplined execution and transparent delivery."
        intro="OKG Building Contracting serves the UAE construction market with a straightforward operating principle: understand the scope, mobilise responsibly, supervise the work and protect the client's quality, time and budget."
      />

      {/* Visual band */}
      <div className="relative h-52 sm:h-64 md:h-80 overflow-hidden" style={{ borderBottom: `1px solid ${P.border}` }}>
        <img
          src="https://media.base44.com/images/public/69f0f9c5f2486cca9280edd1/23fd35dff_generated_image.png"
          alt="UAE construction site workers team PPE high-visibility vests active building site"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(247,249,255,0) 0%, rgba(61,74,115,0.35) 100%)' }} />
      </div>

      {/* Company Profile */}
      <section className="py-20 md:py-28" style={{ background: P.white }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <SectionEyebrow label="Company Profile" />
              <motion.h2 {...fu} className="font-display text-[28px] md:text-[38px] font-extrabold leading-[1.12] tracking-[-0.02em] mb-6" style={{ color: P.head2 }}>
                A contractor built around execution discipline.
              </motion.h2>
              <motion.p {...fu} transition={{ delay: 0.1 }} className="text-[15px] leading-[1.85] mb-5" style={{ color: P.body }}>
                OKG supports clients requiring a clear, responsive and accountable contractor for civil works, masonry, plastering, structural support, fit-out and finishing packages across the UAE.
              </motion.p>
              <motion.p {...fu} transition={{ delay: 0.18 }} className="text-[14px] leading-[1.85]" style={{ color: P.muted }}>
                OKG is positioned around site control, clear documentation, honest communication and professional commitment — through every stage of the project.
              </motion.p>
            </div>

            <div className="space-y-6">
              <motion.div {...fu} transition={{ delay: 0.15 }} className="relative rounded-2xl overflow-hidden" style={{ boxShadow: '0 12px 40px rgba(110,133,232,0.1)' }}>
                <img
                  src="https://media.base44.com/images/public/69f0f9c5f2486cca9280edd1/b43d44e48_generated_image.png"
                  alt="Construction engineer reviewing project drawings documentation UAE"
                  className="w-full h-60 object-cover object-center"
                  loading="lazy"
                />
              </motion.div>

              <motion.div
                {...fu} transition={{ delay: 0.2 }}
                className="relative rounded-2xl p-7 overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #EAF0FF 0%, #F2F6FF 100%)', border: `1px solid ${P.border}` }}
              >
                <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-full" style={{ background: 'linear-gradient(to bottom, #6E85E8, #8FA2F2)' }} />
                <p className="text-[10px] font-mono font-semibold tracking-[0.2em] uppercase mb-3 pl-5" style={{ color: P.blue }}>Our position</p>
                <p className="text-[14px] leading-[1.85] pl-5" style={{ color: P.head }}>
                  OKG is suited for clients who want a contractor that is transparent about capacity, clear in pricing, disciplined in mobilisation and serious about performance on site.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28" style={{ background: P.bg, borderTop: `1px solid ${P.border}` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionEyebrow label="Core Values" />
          <motion.h2 {...fu} className="font-display text-[28px] md:text-[38px] font-extrabold leading-[1.12] tracking-[-0.018em] mb-12" style={{ color: P.head2 }}>
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