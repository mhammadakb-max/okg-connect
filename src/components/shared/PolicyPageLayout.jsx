import React from 'react';
import { motion } from 'framer-motion';
import PageHero from './PageHero';
import SectionEyebrow from './SectionEyebrow';
import ChecklistItem from './ChecklistItem';
import CTABand from './CTABand';

export default function PolicyPageLayout({ heroTitle, heroIntro, eyebrow, heading, statement, additionalText, checklist }) {
  return (
    <>
      <PageHero title={heroTitle} intro={heroIntro} eyebrow={eyebrow} />

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Policy statement */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-offwhite rounded-2xl p-8 md:p-10 border border-gray-100 mb-8 overflow-hidden"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl" style={{ background: '#F8B858' }} />
            <p className="text-[15px] md:text-base leading-[1.8] text-charcoal font-medium pl-4">{statement}</p>
          </motion.div>

          {/* Advisory note */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-xl px-5 py-4 mb-12 border border-gold/20 flex items-start gap-3"
            style={{ background: 'rgba(248,184,88,0.06)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: '#F8B858' }} />
            <p className="text-[13px] leading-relaxed italic" style={{ color: '#6B7280' }}>{additionalText}</p>
          </motion.div>

          {/* Commitments */}
          <SectionEyebrow label="Key Commitments" />
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-2xl md:text-3xl font-bold mb-8"
            style={{ color: '#001078' }}
          >
            {heading}
          </motion.h2>

          <div className="space-y-4">
            {checklist.map((item, i) => (
              <ChecklistItem key={i} text={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}