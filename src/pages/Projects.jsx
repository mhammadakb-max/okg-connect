import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Target, FileCheck } from 'lucide-react';
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
    title: 'Controlled Execution',
    text: 'Work packages are approached through defined scope, realistic mobilisation, supervision, progress tracking and inspection support.',
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
  'Scope and quantity',
  'Workfront and timeline',
  'Progress photos where available',
  'Inspection and handover status',
];

const fu = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

export default function Projects() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Project approach built on clarity and accountability."
        intro="OKG presents project information through clear scope, location, quantity, timeline, approval status and documented handover details where available."
      />

      {/* ─── Approach cards ──────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionEyebrow label="Project Approach" />
          <motion.h2 {...fu} className="font-display text-3xl md:text-[40px] font-bold leading-[1.18] tracking-[-0.015em] mb-12" style={{ color: '#001078' }}>
            How OKG approaches every package.
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

      {/* ─── Documentation Standard ──────────────────────────────────────── */}
      <section className="py-20 md:py-28" style={{ background: '#F7F8FB' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Left — documentation standard */}
            <div>
              <SectionEyebrow label="Project Documentation Standard" />
              <motion.h2 {...fu} className="font-display text-3xl md:text-[36px] font-bold leading-[1.2] tracking-[-0.015em] mb-4" style={{ color: '#001078' }}>
                Project documentation standard.
              </motion.h2>
              <motion.p {...fu} transition={{ delay: 0.1 }} className="text-[14px] leading-[1.8] mb-8" style={{ color: '#6B7280' }}>
                Each project package should be recorded with the details needed for transparent coordination and professional handover.
              </motion.p>
              <div className="space-y-4">
                {futureChecklist.map((item, i) => (
                  <ChecklistItem key={i} text={item} index={i} />
                ))}
              </div>
            </div>

            {/* Right — image + enquiry card */}
            <motion.div {...fu} transition={{ delay: 0.2 }} className="space-y-4">
              {/* Construction image placeholder cards */}
              {[
                { label: 'Civil Works Package', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1000&q=75', alt: 'Civil works construction package site' },
                { label: 'Masonry & Plastering Package', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1000&q=75', alt: 'Masonry and plastering works package' },
                { label: 'Fit-Out & Finishing Package', img: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1000&q=75', alt: 'Fit-out and finishing interior package' },
              ].map((card, i) => (
                <div key={i} className="relative rounded-2xl overflow-hidden" style={{ height: 130 }}>
                  <img src={card.img} alt={card.alt} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(0,16,120,0.82) 0%, rgba(0,16,120,0.4) 100%)' }} />
                  <div className="absolute inset-0 px-6 flex flex-col justify-center">
                    <p className="text-[9.5px] font-mono font-bold tracking-[0.2em] uppercase mb-1" style={{ color: '#F8B858' }}>Project documentation format</p>
                    <p className="text-[15px] font-bold text-white">{card.label}</p>
                  </div>
                </div>
              ))}
              <div className="rounded-xl px-5 py-3.5 flex items-center gap-3" style={{ background: 'rgba(0,16,120,0.06)', border: '1px solid rgba(0,16,120,0.1)' }}>
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#F8B858' }} />
                <p className="text-[12.5px]" style={{ color: '#6B7280' }}>Images above are representative of package types. These are not completed OKG projects.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTABand heading="Ready to discuss a project package?" text="OKG supports blockwork, plastering, concrete and finishing packages. Share your scope and we will respond with a structured proposal." />
    </>
  );
}