import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Target, FileCheck } from 'lucide-react';
import PageHero from '../components/shared/PageHero';
import SectionEyebrow from '../components/shared/SectionEyebrow';
import ChecklistItem from '../components/shared/ChecklistItem';
import CTABand from '../components/shared/CTABand';

const P = { white: '#FFFFFF', bg: '#F7F9FF', tint: '#EAF0FF', blue: '#6E85E8', blueL: '#8FA2F2', head: '#5F6D9A', head2: '#3D4A73', body: '#7C86A8', muted: '#97A0BC', border: '#E6EBF5' };

const projectCards = [
  { icon: Building2, badge: 'Current Focus', title: 'Civil & Finishing Packages', text: 'OKG is positioned to take blockwork, plastering, concrete, masonry, renovation and finishing packages for main contractors and private clients.' },
  { icon: Target, badge: 'Project Method', title: 'Controlled Execution', text: 'Work packages are approached through defined scope, realistic mobilisation, supervision, progress tracking and inspection support.' },
  { icon: FileCheck, badge: 'Client Promise', title: 'Transparent Execution', text: 'Every quotation should define scope, exclusions, payment milestones, manpower assumptions, timeline and approval process before work starts.' },
];

const docChecklist = [
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
        breadcrumb="Projects"
        title="Project approach built on clarity and accountability."
        intro="OKG presents project information through clear scope, location, quantity, timeline, approval status and documented handover details where available."
      />

      <section className="py-20 md:py-28" style={{ background: P.white }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionEyebrow label="Project Approach" />
          <motion.h2 {...fu} className="font-display text-[28px] md:text-[38px] font-extrabold leading-[1.12] tracking-[-0.018em] mb-12" style={{ color: P.head2 }}>
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
                className="group relative rounded-2xl p-7 transition-all hover:shadow-lg overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.85)', border: `1px solid ${P.border}`, backdropFilter: 'blur(8px)' }}
              >
                <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'linear-gradient(to right, transparent, #6E85E8, transparent)' }} />
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: P.tint, border: `1px solid ${P.border}` }}>
                    <c.icon style={{ color: P.blue, width: 18, height: 18 }} />
                  </div>
                  <span className="text-[10px] font-mono font-bold tracking-[0.18em] uppercase" style={{ color: P.blue }}>{c.badge}</span>
                </div>
                <h3 className="text-[15px] font-bold mb-3" style={{ color: P.head2 }}>{c.title}</h3>
                <p className="text-[13.5px] leading-relaxed" style={{ color: P.body }}>{c.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Standard */}
      <section className="py-20 md:py-28" style={{ background: P.bg, borderTop: `1px solid ${P.border}` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <SectionEyebrow label="Documentation Standard" />
              <motion.h2 {...fu} className="font-display text-[26px] md:text-[34px] font-extrabold leading-[1.15] tracking-[-0.018em] mb-4" style={{ color: P.head2 }}>
                Project documentation standard.
              </motion.h2>
              <motion.p {...fu} transition={{ delay: 0.1 }} className="text-[14px] leading-[1.85] mb-8" style={{ color: P.body }}>
                Each project package should be recorded with the details needed for transparent coordination and professional handover.
              </motion.p>
              <div className="space-y-4">
                {docChecklist.map((item, i) => <ChecklistItem key={i} text={item} index={i} />)}
              </div>
            </div>

            <motion.div {...fu} transition={{ delay: 0.2 }} className="space-y-3">
              {[
                { label: 'Civil Works Package', img: 'https://media.base44.com/images/public/69f0f9c5f2486cca9280edd1/b7de27fed_generated_image.png', alt: 'Active UAE construction site concrete frame workers PPE' },
                { label: 'Masonry & Plastering Package', img: 'https://media.base44.com/images/public/69f0f9c5f2486cca9280edd1/b42f1aeda_generated_image.png', alt: 'Construction workers blockwork masonry wall UAE site PPE' },
                { label: 'Fit-Out & Finishing Package', img: 'https://media.base44.com/images/public/69f0f9c5f2486cca9280edd1/2f06871a6_generated_image.png', alt: 'Interior fit-out finishing gypsum ceiling construction UAE' },
              ].map((card, i) => (
                <div key={i} className="relative rounded-xl overflow-hidden" style={{ height: 120 }}>
                  <img src={card.img} alt={card.alt} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(61,74,115,0.75) 0%, rgba(61,74,115,0.25) 100%)' }} />
                  <div className="absolute inset-0 px-6 flex flex-col justify-center">
                    <p className="text-[9.5px] font-mono font-bold tracking-[0.2em] uppercase mb-1" style={{ color: 'rgba(163,186,255,0.8)' }}>Work package scope</p>
                    <p className="text-[14px] font-bold text-white">{card.label}</p>
                  </div>
                </div>
              ))}
              <div className="rounded-xl px-5 py-3.5 flex items-center gap-3" style={{ background: 'rgba(110,133,232,0.05)', border: '1px solid rgba(110,133,232,0.12)' }}>
                <span className="w-1 h-1 rounded-full shrink-0" style={{ background: P.blue }} />
                <p className="text-[12px]" style={{ color: P.muted }}>Images are illustrative of typical work package categories handled by OKG.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTABand heading="Ready to discuss a project package?" text="OKG supports blockwork, plastering, concrete and finishing packages. Share your scope and we will respond with a structured proposal." />
    </>
  );
}