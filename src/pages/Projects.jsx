import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Target, FileCheck, Clock } from 'lucide-react';
import PageHero from '../components/shared/PageHero';
import SectionEyebrow from '../components/shared/SectionEyebrow';
import ChecklistItem from '../components/shared/ChecklistItem';
import CTABand from '../components/shared/CTABand';

const projectCards = [
  {
    icon: Building2,
    badge: 'Current Focus',
    title: 'Civil & Finishing Packages',
    text: 'OKG is positioned to take blockwork, plastering, concrete, masonry, renovation and finishing packages for main contractors and private clients.',
  },
  {
    icon: Target,
    badge: 'Project Method',
    title: 'Start Small, Deliver Properly',
    text: 'Instead of claiming large past portfolios, OKG focuses on winning manageable scopes, delivering them cleanly and building a verified record through performance.',
  },
  {
    icon: FileCheck,
    badge: 'Client Promise',
    title: 'Transparent Execution',
    text: 'Every quotation should define scope, exclusions, payment milestones, manpower assumptions, timeline and approval process before work starts.',
  },
];

const futureChecklist = [
  'Project name and location',
  'Client or main contractor, where permitted',
  'Scope of work and quantities',
  'Before, during and after photos',
  'Timeline, mobilisation and handover status',
  'Approval notes or completion confirmation',
];

const fu = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

export default function Projects() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="A new portfolio must be earned honestly."
        intro="OKG will not display fake project counts or borrowed achievements. This section is designed to grow as real scopes are awarded, executed and documented."
      />

      {/* ─── Approach cards ──────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionEyebrow label="Project Approach" />
          <motion.h2 {...fu} className="text-3xl md:text-[40px] font-bold leading-[1.18] tracking-[-0.015em] mb-12" style={{ color: '#001078' }}>
            How OKG builds its track record.
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-5">
            {projectCards.map((c, i) => (
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
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: '#F8B858' }}
                />

                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(0,16,120,0.07)' }}
                  >
                    <c.icon className="w-5 h-5" style={{ color: '#001078' }} />
                  </div>
                  <span className="text-[10px] font-mono font-bold tracking-[0.18em] uppercase" style={{ color: '#F8B858' }}>{c.badge}</span>
                </div>

                <h3 className="text-[16px] font-bold mb-3 leading-snug" style={{ color: '#001078' }}>{c.title}</h3>
                <p className="text-[13.5px] leading-relaxed" style={{ color: '#6B7280' }}>{c.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Placeholder section ─────────────────────────────────────────── */}
      <section className="py-20 md:py-28" style={{ background: '#F7F8FB' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Left — future format */}
            <div>
              <SectionEyebrow label="Future Project Format" />
              <motion.h2 {...fu} className="text-3xl md:text-[36px] font-bold leading-[1.2] tracking-[-0.015em] mb-4" style={{ color: '#001078' }}>
                How completed works will be displayed.
              </motion.h2>
              <motion.p {...fu} transition={{ delay: 0.1 }} className="text-[14px] leading-[1.8] mb-8" style={{ color: '#6B7280' }}>
                Once OKG completes real works, each project will be documented and published properly. No invented numbers or borrowed photographs.
              </motion.p>
              <div className="space-y-4">
                {futureChecklist.map((item, i) => (
                  <ChecklistItem key={i} text={item} index={i} />
                ))}
              </div>
            </div>

            {/* Right — placeholder card */}
            <motion.div
              {...fu}
              transition={{ delay: 0.2 }}
              className="relative rounded-2xl border-2 border-dashed overflow-hidden"
              style={{ borderColor: 'rgba(0,16,120,0.15)', background: '#F7F8FB' }}
            >
              {/* Grid pattern */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,16,120,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,16,120,1) 1px, transparent 1px)`,
                  backgroundSize: '32px 32px',
                }}
              />
              <div className="relative z-10 p-10 flex flex-col items-center justify-center text-center min-h-[320px]">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: 'rgba(0,16,120,0.08)' }}
                >
                  <Clock className="w-7 h-7" style={{ color: '#001078', opacity: 0.5 }} />
                </div>
                <h3 className="text-[18px] font-bold mb-3" style={{ color: '#001078' }}>
                  Project portfolio pending
                </h3>
                <p className="text-[13.5px] leading-relaxed max-w-xs" style={{ color: '#6B7280' }}>
                  This section will be populated as OKG wins, executes and documents real project scopes. Honesty from day one.
                </p>
                <div
                  className="mt-8 inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-[13px] font-semibold"
                  style={{ background: 'rgba(0,16,120,0.08)', color: '#001078' }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#F8B858' }} />
                  Actively seeking first packages
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTABand heading="Ready to be OKG's first documented client?" text="OKG is actively seeking blockwork, plastering, concrete and finishing packages. Share your scope and let us respond with a structured proposal." />
    </>
  );
}