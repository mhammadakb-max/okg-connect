import React from 'react';
import { motion } from 'framer-motion';
import { Users, Eye, FileText } from 'lucide-react';
import PageHero from '../components/shared/PageHero';
import SectionEyebrow from '../components/shared/SectionEyebrow';
import ValueCard from '../components/shared/ValueCard';
import ChecklistItem from '../components/shared/ChecklistItem';
import CTABand from '../components/shared/CTABand';

const P = { white: '#FFFFFF', bg: '#F7F9FF', tint: '#EAF0FF', blue: '#6E85E8', head: '#5F6D9A', head2: '#3D4A73', body: '#7C86A8', muted: '#97A0BC', border: '#E6EBF5' };

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
        breadcrumb="People Focus"
        title="People, supervision and communication are the engine of delivery."
        intro="OKG's people focus is about selecting responsible teams, controlling attendance, respecting site rules and building a culture of accountability."
      />

      <section className="py-20 md:py-28" style={{ background: P.white }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionEyebrow label="Three Pillars" />
          <motion.h2 {...fu} className="font-display text-[28px] md:text-[38px] font-extrabold leading-[1.12] tracking-[-0.018em] mb-12" style={{ color: P.head2 }}>
            How OKG manages its people.
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-5 mb-20">
            {cards.map((c, i) => <ValueCard key={i} icon={c.icon} title={c.title} text={c.text} index={i} />)}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden"
              style={{ boxShadow: '0 20px 56px rgba(110,133,232,0.1)' }}
            >
              <img
                src="https://media.base44.com/images/public/69f0f9c5f2486cca9280edd1/2f6870904_generated_image.png"
                alt="Construction site supervisor coordinating with workers team PPE UAE"
                className="w-full h-[380px] object-cover object-center"
                loading="lazy"
              />
            </motion.div>
            <div>
              <SectionEyebrow label="Workforce Standard" />
              <motion.h2 {...fu} className="font-display text-[26px] md:text-[34px] font-extrabold leading-[1.15] tracking-[-0.018em] mb-5" style={{ color: P.head2 }}>
                Strong manpower is not only numbers. It is control.
              </motion.h2>
              <motion.p {...fu} transition={{ delay: 0.1 }} className="text-[14px] leading-[1.85] mb-8" style={{ color: P.body }}>
                A large team without discipline creates problems. OKG focuses on responsible mobilisation, clear roles, site rules, reporting and realistic output expectations.
              </motion.p>
              <div className="space-y-4">
                {checklist.map((item, i) => <ChecklistItem key={i} text={item} index={i} />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}