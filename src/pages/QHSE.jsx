import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, HardHat, Leaf, Heart } from 'lucide-react';
import PageHero from '../components/shared/PageHero';
import SectionEyebrow from '../components/shared/SectionEyebrow';
import ChecklistItem from '../components/shared/ChecklistItem';
import CTABand from '../components/shared/CTABand';

const cards = [
  {
    icon: ShieldCheck,
    title: 'Quality Commitment',
    text: 'OKG aims to complete works in line with approved drawings, agreed scope, site instructions and client expectations. Measurement, inspection and correction are part of the work.',
    link: '/quality-policy',
    btn: 'Read Quality Policy',
  },
  {
    icon: HardHat,
    title: 'Health & Safety Commitment',
    text: 'Workers must follow site safety rules, PPE requirements, induction processes and supervisor instructions. Unsafe shortcuts are not accepted.',
    link: '/health-safety-policy',
    btn: 'Read H&S Policy',
  },
  {
    icon: Leaf,
    title: 'Environmental Responsibility',
    text: 'OKG supports proper housekeeping, responsible material use, reduced wastage and clean work areas so teams add value instead of disruption.',
    link: '/environmental-policy',
    btn: 'Read Environmental Policy',
  },
  {
    icon: Heart,
    title: 'Social Commitment',
    text: 'OKG supports fair work practices, worker respect, local opportunity and responsible community engagement as part of its operating standard.',
    link: '/social-commitment',
    btn: 'Read Social Commitment',
  },
];

const checklist = [
  'Site induction and PPE compliance',
  'Daily housekeeping and work area discipline',
  'Quality checking before inspection request',
  'Clear reporting of unsafe conditions, delay causes and workfront issues',
];

const fu = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

export default function QHSE() {
  return (
    <>
      <PageHero
        eyebrow="QHSE"
        title="Quality, Health, Safety and Environmental responsibility."
        intro="OKG's QHSE approach is simple: safe work, clean documentation, practical supervision, quality checking and responsible housekeeping."
      />

      {/* Cards */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionEyebrow label="Policy Areas" />
          <motion.h2 {...fu} className="font-display text-3xl md:text-[40px] font-bold leading-[1.18] tracking-[-0.015em] mb-12" style={{ color: '#001078' }}>
            Four areas of commitment.
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-5">
            {cards.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-2xl p-7 md:p-8 border border-gray-100 hover:border-gray-200 hover:shadow-xl hover:shadow-navy/6 transition-all overflow-hidden"
                style={{ background: '#F7F8FB' }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: '#F8B858' }}
                />

                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300"
                  style={{ background: 'rgba(0,16,120,0.07)' }}
                >
                  <c.icon className="w-5 h-5" style={{ color: '#001078' }} />
                </div>

                <h3 className="text-[17px] font-bold mb-3" style={{ color: '#001078' }}>{c.title}</h3>
                <p className="text-[13.5px] leading-relaxed mb-6" style={{ color: '#6B7280' }}>{c.text}</p>

                <Link
                  to={c.link}
                  className="inline-flex items-center gap-2 text-[13px] font-bold transition-colors"
                  style={{ color: '#001078' }}
                >
                  {c.btn} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* QHSE Standard */}
      <section className="py-20 md:py-28" style={{ background: '#F7F8FB' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionEyebrow label="QHSE Standard" />
              <motion.h2 {...fu} className="font-display text-3xl md:text-[36px] font-bold leading-[1.2] tracking-[-0.015em] mb-5" style={{ color: '#001078' }}>
                Practical QHSE standards applied on site.
              </motion.h2>
              <motion.p {...fu} transition={{ delay: 0.1 }} className="text-[14px] leading-[1.8] mb-8" style={{ color: '#6B7280' }}>
                 OKG's QHSE system is practical, documented and enforceable. Safety, quality and housekeeping are treated as part of disciplined project delivery.
              </motion.p>
              <div className="space-y-4">
                {checklist.map((item, i) => (
                  <ChecklistItem key={i} text={item} index={i} />
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-navy/12">
              <img
                src="https://images.unsplash.com/photo-1622021142947-da7dedc7c39a?w=900&q=80"
                alt="Construction worker wearing safety helmet and PPE on site"
                className="w-full h-[380px] object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}