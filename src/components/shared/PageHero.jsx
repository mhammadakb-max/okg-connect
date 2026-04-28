import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function PageHero({ title, intro, eyebrow, ctaLabel, ctaLink }) {
  return (
    <section
      className="relative text-white overflow-hidden"
      style={{ background: '#001078' }}
    >
      {/* Construction grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Gold accent bar left */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1"
        style={{ background: 'linear-gradient(to bottom, #F8B858, transparent)' }}
      />

      {/* Glow blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.06] blur-3xl pointer-events-none"
        style={{ background: '#F8B858', transform: 'translate(30%, -30%)' }} />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full opacity-[0.04] blur-3xl pointer-events-none"
        style={{ background: '#ffffff' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-8 h-px" style={{ background: '#F8B858' }} />
            <span className="text-[11px] font-mono font-semibold tracking-[0.2em] uppercase" style={{ color: '#F8B858' }}>
              {eyebrow}
            </span>
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12 }}
          className="text-3xl md:text-[46px] font-bold leading-[1.15] max-w-3xl tracking-[-0.01em]"
        >
          {title}
        </motion.h1>

        {intro && (
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22 }}
            className="mt-6 text-base md:text-[17px] max-w-2xl leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.65)' }}
          >
            {intro}
          </motion.p>
        )}

        {ctaLabel && ctaLink && (
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32 }}
            className="mt-8"
          >
            <Link
              to={ctaLink}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-navy transition-all hover:scale-[1.02]"
              style={{ background: '#F8B858' }}
            >
              {ctaLabel}
            </Link>
          </motion.div>
        )}
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(0,16,120,0.3))' }} />
    </section>
  );
}