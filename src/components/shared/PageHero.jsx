import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';

export default function PageHero({ title, intro, eyebrow, ctaLabel, ctaLink, breadcrumb }) {
  return (
    <section className="relative overflow-hidden bg-white border-b border-gray-200 py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(248,184,88,0.16),transparent_34%),linear-gradient(135deg,rgba(0,16,120,0.06),transparent_52%)]" />
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="absolute right-[-6rem] top-[-6rem] h-72 w-72 rounded-full border border-gold/30"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        {breadcrumb && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-1.5 mb-6"
          >
            <Link to="/" className="text-xs font-medium text-text-secondary hover:text-navy transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-gray-300" />
            <span className="text-xs font-medium text-text-secondary">{breadcrumb}</span>
          </motion.div>
        )}

        {eyebrow && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}><SectionEyebrow label={eyebrow} /></motion.div>}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-4xl md:text-6xl font-extrabold mb-5 leading-tight tracking-tight max-w-3xl"
          style={{ color: '#001078' }}
        >
          {title}
        </motion.h1>

        {intro && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-text-secondary max-w-3xl mb-8 leading-relaxed"
          >
            {intro}
          </motion.p>
        )}

        {ctaLabel && ctaLink && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <Link
              to={ctaLink}
              className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-md transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#001078' }}
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

function SectionEyebrow({ label }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <span className="w-1 h-1 rounded-full" style={{ backgroundColor: '#F8B858' }} />
      <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#001078' }}>
        {label}
      </span>
    </div>
  );
}