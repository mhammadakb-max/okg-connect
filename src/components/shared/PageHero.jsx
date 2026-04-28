import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function PageHero({ title, intro, eyebrow, ctaLabel, ctaLink }) {
  return (
    <section
      className="relative text-white overflow-hidden"
      style={{ background: '#001078', minHeight: 340 }}
    >
      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          opacity: 0.03,
        }}
      />

      {/* Gold bar left */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px]"
        style={{ background: 'linear-gradient(to bottom, #F8B858 0%, rgba(248,184,88,0.2) 70%, transparent 100%)' }}
      />

      {/* Glow */}
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{ width: 500, height: 500, background: '#F8B858', opacity: 0.05, borderRadius: '50%', filter: 'blur(80px)', transform: 'translate(25%, -25%)' }}
      />

      {/* Bottom diagonal */}
      <div
        className="absolute bottom-0 left-0 right-0 h-12 bg-white pointer-events-none"
        style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.04 }}
            className="flex items-center gap-3 mb-5"
          >
            <span className="w-8 h-px" style={{ background: '#F8B858' }} />
            <span className="text-[11px] font-mono font-semibold tracking-[0.22em] uppercase" style={{ color: '#F8B858' }}>
              {eyebrow}
            </span>
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display text-[28px] md:text-[46px] font-black leading-[1.1] max-w-3xl tracking-[-0.022em] text-white"
        >
          {title}
        </motion.h1>

        {intro && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-[15px] md:text-[16px] max-w-2xl leading-[1.8]"
            style={{ color: 'rgba(255,255,255,0.6)' }}
          >
            {intro}
          </motion.p>
        )}

        {ctaLabel && ctaLink && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8"
          >
            <Link
              to={ctaLink}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-[13.5px] font-bold transition-all hover:scale-[1.02]"
              style={{ background: '#F8B858', color: '#001078' }}
            >
              {ctaLabel}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}