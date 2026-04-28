import React from 'react';
import { motion } from 'framer-motion';
import PageHero from './PageHero';
import SectionEyebrow from './SectionEyebrow';
import ChecklistItem from './ChecklistItem';
import CTABand from './CTABand';

export default function PolicyPageLayout({ heroTitle, heroIntro, eyebrow, heading, statement, additionalText, checklist }) {
  return (
    <>
      <PageHero title={heroTitle} intro={heroIntro} eyebrow={eyebrow} breadcrumb={eyebrow} />

      <section className="py-20 md:py-28" style={{ background: '#FBF9F5' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Policy statement */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-xl p-8 md:p-10 mb-8 overflow-hidden"
            style={{ background: '#F1ECE4', border: '1px solid #DDD6CB' }}
          >
            <div className="absolute left-0 top-0 bottom-0 w-[2px] rounded-l-xl" style={{ background: '#B58A57' }} />
            <p className="text-[15px] leading-[1.9] pl-6" style={{ color: '#1F1F1B' }}>
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
              className="rounded-lg px-5 py-4 mb-14 flex items-start gap-3.5"
              style={{ background: 'rgba(181,138,87,0.06)', border: '1px solid rgba(181,138,87,0.15)' }}
            >
              <span className="w-1 h-1 rounded-full mt-[7px] shrink-0" style={{ background: '#B58A57' }} />
              <p className="text-[13px] leading-[1.8] italic" style={{ color: '#67635C' }}>{additionalText}</p>
            </motion.div>
          )}

          {/* Commitments */}
          <SectionEyebrow label="Key Commitments" />
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[22px] md:text-[28px] font-extrabold tracking-[-0.018em] leading-[1.2] mb-8"
            style={{ color: '#1F1F1B' }}
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