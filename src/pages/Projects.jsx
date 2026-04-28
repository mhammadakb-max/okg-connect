import React from 'react';
import { motion } from 'framer-motion';
import { Building, Target, FileCheck, Check } from 'lucide-react';
import PageHero from '../components/shared/PageHero';
import SectionEyebrow from '../components/shared/SectionEyebrow';
import ChecklistItem from '../components/shared/ChecklistItem';
import CTABand from '../components/shared/CTABand';

const projectCards = [
  {
    icon: Building,
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

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

export default function Projects() {
  return (
    <>
      <PageHero
        title="A new portfolio must be earned honestly."
        intro="OKG will not display fake project counts or borrowed achievements. This section is designed to grow as real scopes are awarded, executed and documented."
      />

      {/* Project Cards */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {projectCards.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-offwhite rounded-xl p-6 md:p-8 border border-border hover:shadow-lg transition-all group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                    <c.icon className="w-5 h-5 text-navy" />
                  </div>
                  <span className="text-xs font-mono font-medium text-gold tracking-wider uppercase">{c.badge}</span>
                </div>
                <h3 className="text-lg font-semibold text-navy mb-3">{c.title}</h3>
                <p className="text-steel text-sm leading-relaxed">{c.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Format */}
      <section className="py-16 md:py-24 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <SectionEyebrow label="Future Project Format" />
            <motion.h2 {...fadeUp} className="text-2xl md:text-3xl font-bold text-navy mb-4">
              How completed works should be displayed.
            </motion.h2>
            <motion.p {...fadeUp} transition={{ delay: 0.1 }} className="text-steel mb-8 leading-relaxed">
              Once OKG completes real works, each project should be documented properly.
            </motion.p>
            <div className="space-y-4">
              {futureChecklist.map((item, i) => (
                <ChecklistItem key={i} text={item} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}