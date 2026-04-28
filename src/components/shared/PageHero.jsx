import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';

export default function PageHero({ title, intro, eyebrow, ctaLabel, ctaLink, breadcrumb }) {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #F7F9FF 0%, #EAF0FF 60%, #F2F6FF 100%)',
        borderBottom: '1px solid #E6EBF5',
      }}
    >
      {/* Soft radial glow top-left */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(110,133,232,0.07) 0%, transparent 70%)' }}
      />
      {/* Left blue accent */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[2px]"
        style={{ background: 'linear-gradient(to bottom, #6E85E8 0%, rgba(110,133,232,0.1) 70%, transparent 100%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Breadcrumb */}
        {breadcrumb && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-1.5 mb-6"
          >
            <Link to="/" className="text-[11px] font-mono tracking-wide transition-opacity hover:opacity-70" style={{ color: '#6E85E8' }}>Home</Link>
            <ChevronRight className="w-3 h-3" style={{ color: '#97A0BC' }} />
            <span className="text-[11px] font-mono tracking-wide" style={{ color: '#97A0BC' }}>{breadcrumb}</span>
          </motion.div>
        )}

        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.04 }}
            className="flex items-center gap-3 mb-5"
          >
            <span className="w-5 h-px" style={{ background: '#6E85E8' }} />
            <span className="text-[10.5px] font-mono font-semibold tracking-[0.22em] uppercase" style={{ color: '#6E85E8' }}>
              {eyebrow}
            </span>
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display text-[26px] md:text-[42px] font-extrabold leading-[1.12] max-w-3xl tracking-[-0.022em]"
          style={{ color: '#3D4A73' }}
        >
          {title}
        </motion.h1>

        {intro && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-[15px] md:text-[15.5px] max-w-2xl leading-[1.8]"
            style={{ color: '#7C86A8' }}
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
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-[13px] font-semibold transition-all hover:opacity-85"
              style={{ background: '#6E85E8', color: '#fff', boxShadow: '0 4px 16px rgba(110,133,232,0.25)' }}
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