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

      <section className="relative overflow-hidden border-t border-gray-200 py-20 md:py-28" style={{ background: '#FFFFFF' }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(248,184,88,0.12),transparent_34%),linear-gradient(180deg,rgba(0,16,120,0.04),transparent_48%)]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Policy statement */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="premium-card relative rounded-3xl p-8 md:p-12 mb-8 overflow-hidden border border-gray-200"
          >
            <div className="absolute left-0 top-0 bottom-0 w-[4px] rounded-l-2xl" style={{ background: 'linear-gradient(to bottom, #F8B858, #001078)' }} />
            <p className="text-base leading-[1.9] pl-6 text-text-secondary">
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
              style={{ background: 'rgba(110,133,232,0.05)', border: '1px solid rgba(110,133,232,0.12)' }}
            >
              <span className="w-1 h-1 rounded-full mt-[7px] shrink-0" style={{ background: '#6E85E8' }} />
              <p className="text-[13px] leading-[1.8] italic" style={{ color: '#97A0BC' }}>{additionalText}</p>
            </motion.div>
          )}

          {/* Commitments */}
          <SectionEyebrow label="Key Commitments" />
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[22px] md:text-[28px] font-extrabold tracking-[-0.018em] leading-[1.2] mb-8"
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