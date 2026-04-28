import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Lightbulb, Scale } from 'lucide-react';
import PageHero from '../components/shared/PageHero';
import SectionEyebrow from '../components/shared/SectionEyebrow';
import ValueCard from '../components/shared/ValueCard';
import CTABand from '../components/shared/CTABand';

const cards = [
  { icon: Heart, title: 'Worker Respect', text: 'OKG believes workers should be treated with dignity, clear instructions and safe working expectations.' },
  { icon: Lightbulb, title: 'Local Opportunity', text: 'As the company grows, OKG can create opportunities for supervisors, skilled workers, subcontractors and suppliers.' },
  { icon: Scale, title: 'Ethical Conduct', text: 'OKG aims to work through transparent communication, fair dealing and professional accountability.' },
];

const fu = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

export default function SocialCommitment() {
  return (
    <>
      <PageHero
        eyebrow="Social Commitment"
        title="Responsible growth with people and community in mind."
        intro="As OKG grows, the company intends to build a culture that respects workers, supports fair opportunity and contributes positively to the UAE construction environment."
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionEyebrow label="Our commitments" />
          <motion.h2 {...fu} className="text-3xl md:text-[40px] font-bold leading-[1.18] tracking-[-0.015em] mb-12" style={{ color: '#001078' }}>
            People over claims.
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-5">
            {cards.map((c, i) => (
              <ValueCard key={i} icon={c.icon} title={c.title} text={c.text} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}