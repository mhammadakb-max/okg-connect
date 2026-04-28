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

      <section className="py-20 md:py-28" style={{ background: '#FFFFFF' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Policy statement */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl p-8 md:p-10 mb-8 overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #EAF0FF 0%, #F2F6FF 100%)', border: '1px solid #E6EBF5' }}
          >
            <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl" style={{ background: 'linear-gradient(to bottom, #6E85E8, #8FA2F2)' }} />
            <p className="text-[15px] leading-[1.9] pl-6" style={{ color: '#5F6D9A' }}>
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
            style={{ color: '#3D4A73' }}
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