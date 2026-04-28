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
    text: 'As the company grows, OKG intends to support fair work practices, worker respect, local opportunity and responsible community engagement.',
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

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

export default function QHSE() {
  return (
    <>
      <PageHero
        title="Quality, Health, Safety and Environmental responsibility."
        intro="OKG's QHSE approach is simple: safe work, clean documentation, practical supervision, quality checking and responsible housekeeping."
      />

      {/* Cards */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {cards.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-offwhite rounded-xl p-6 md:p-8 border border-border hover:shadow-lg transition-all group"
              >
                <div className="w-11 h-11 rounded-lg bg-navy/5 flex items-center justify-center mb-5 group-hover:bg-gold/10 transition-colors">
                  <c.icon className="w-5 h-5 text-navy" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-3">{c.title}</h3>
                <p className="text-steel text-sm leading-relaxed mb-5">{c.text}</p>
                <Link to={c.link} className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold transition-colors">
                  {c.btn} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* QHSE Standard */}
      <section className="py-16 md:py-24 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionEyebrow label="QHSE Standard" />
              <motion.h2 {...fadeUp} className="text-2xl md:text-3xl font-bold text-navy mb-4">
                Professional standards from day one.
              </motion.h2>
              <motion.p {...fadeUp} transition={{ delay: 0.1 }} className="text-steel mb-8 leading-relaxed">
                A new contractor cannot afford casual habits. OKG's QHSE system should be practical, documented and enforceable on site.
              </motion.p>
              <div className="space-y-4">
                {checklist.map((item, i) => (
                  <ChecklistItem key={i} text={item} index={i} />
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://media.base44.com/images/public/69f0f9c5f2486cca9280edd1/837e82396_generated_b8f62262.png"
                alt="Construction safety equipment"
                className="w-full h-72 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}