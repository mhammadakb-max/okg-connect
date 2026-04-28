import React from 'react';
import { motion } from 'framer-motion';
import { Users, Eye, FileText } from 'lucide-react';
import PageHero from '../components/shared/PageHero';
import SectionEyebrow from '../components/shared/SectionEyebrow';
import ValueCard from '../components/shared/ValueCard';
import ChecklistItem from '../components/shared/ChecklistItem';
import CTABand from '../components/shared/CTABand';

const cards = [
  { icon: Users, title: 'Site Teams', text: 'Workers must understand the scope, follow instructions, maintain attendance discipline and respect safety requirements on every site.' },
  { icon: Eye, title: 'Supervision', text: 'Site supervisors should monitor output, record progress, report issues early and coordinate with the client or main contractor.' },
  { icon: FileText, title: 'Documentation', text: 'Worker details, approvals, attendance sheets, inductions, NOCs where applicable and subcontractor documents should be managed properly.' },
];

const checklist = [
  'Clear worker details before mobilisation',
  'Attendance and daily progress tracking',
  'PPE and safety instruction compliance',
  'Escalation of delays, access issues or material shortages',
];

const fu = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

export default function PeopleFocus() {
  return (
    <>
      <PageHero
        eyebrow="People Focus"
        title="People, supervision and communication are the engine of delivery."
        intro="OKG's people focus is about selecting responsible teams, controlling attendance, respecting site rules and building a culture of accountability."
      />

      {/* Cards */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionEyebrow label="Three pillars" />
          <motion.h2 {...fu} className="font-display text-3xl md:text-[40px] font-bold leading-[1.18] tracking-[-0.015em] mb-12" style={{ color: '#001078' }}>
            How OKG manages its people.
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-5 mb-20">
            {cards.map((c, i) => (
              <ValueCard key={i} icon={c.icon} title={c.title} text={c.text} index={i} />
            ))}
          </div>

          {/* Workforce Standard */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-navy/12">
              <img
                src="https://media.base44.com/images/public/69f0f9c5f2486cca9280edd1/fa276dd29_generated_0616a86b.png"
                alt="Site supervisor managing construction progress"
                className="w-full h-[380px] object-cover"
              />
            </div>
            <div>
              <SectionEyebrow label="Workforce Standard" />
              <motion.h2 {...fu} className="text-3xl md:text-[36px] font-bold leading-[1.2] tracking-[-0.015em] mb-5" style={{ color: '#001078' }}>
                Strong manpower is not only numbers. It is control.
              </motion.h2>
              <motion.p {...fu} transition={{ delay: 0.1 }} className="text-[14px] leading-[1.8] mb-8" style={{ color: '#6B7280' }}>
                A large team without discipline creates problems. OKG focuses on responsible mobilisation, clear roles, site rules, reporting and realistic output expectations.
              </motion.p>
              <div className="space-y-4">
                {checklist.map((item, i) => (
                  <ChecklistItem key={i} text={item} index={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}