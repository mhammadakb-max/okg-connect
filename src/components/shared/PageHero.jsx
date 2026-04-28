import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';

export default function PageHero({ title, intro, eyebrow, ctaLabel, ctaLink, breadcrumb }) {
  return (
    <section
      className="relative text-charcoal overflow-hidden"
      style={{ background: '#F1ECE4', borderBottom: '1px solid #DDD6CB' }}
    >
      {/* Left bronze accent */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[2px]"
        style={{ background: 'linear-gradient(to bottom, #B58A57 0%, rgba(181,138,87,0.1) 70%, transparent 100%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">

        {/* Breadcrumb */}
        {breadcrumb && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-1.5 mb-6"
          >
            <Link to="/" className="text-[11px] font-mono tracking-wide transition-colors hover:opacity-70" style={{ color: '#B58A57' }}>Home</Link>
            <ChevronRight className="w-3 h-3" style={{ color: '#DDD6CB' }} />
            <span className="text-[11px] font-mono tracking-wide" style={{ color: '#67635C' }}>{breadcrumb}</span>
          </motion.div>
        )}

        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.04 }}
            className="flex items-center gap-3 mb-5"
          >
            <span className="w-6 h-px" style={{ background: '#B58A57' }} />
            <span className="text-[10.5px] font-mono font-semibold tracking-[0.22em] uppercase" style={{ color: '#B58A57' }}>
              {eyebrow}
            </span>
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display text-[26px] md:text-[42px] font-extrabold leading-[1.12] max-w-3xl tracking-[-0.022em]"
          style={{ color: '#1F1F1B' }}
        >
          {title}
        </motion.h1>

        {intro && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-[15px] md:text-[15.5px] max-w-2xl leading-[1.8]"
            style={{ color: '#67635C' }}
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
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg text-[13px] font-semibold transition-all hover:opacity-85"
              style={{ background: '#2E2B27', color: '#FBF9F5' }}
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