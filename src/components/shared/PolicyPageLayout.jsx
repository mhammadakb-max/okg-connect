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
            className="relative rounded-2xl p-8 md:p-10 border border-border-grey/60 mb-8 overflow-hidden"
            style={{ background: '#EEF1F6' }}
          >
            <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl" style={{ background: '#F8B858' }} />
            <p className="text-[15px] md:text-[15.5px] leading-[1.85] font-medium pl-5" style={{ color: '#1E1E1E' }}>
              {statement}
            </p>
          </motion.div>

          {/* Advisory note */}
          {additionalText && (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-xl px-5 py-4 mb-14 flex items-start gap-3.5"
              style={{ background: 'rgba(248,184,88,0.07)', border: '1px solid rgba(248,184,88,0.18)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full mt-[5px] shrink-0" style={{ background: '#F8B858' }} />
              <p className="text-[13px] leading-[1.8] italic" style={{ color: '#6B7280' }}>{additionalText}</p>
            </motion.div>
          )}

          {/* Commitments */}
          <SectionEyebrow label="Key Commitments" />
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-[24px] md:text-[30px] font-black tracking-[-0.018em] leading-[1.15] mb-8"
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