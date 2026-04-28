import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTABand({
  heading = "Ready to discuss a scope or request a quotation?",
  text = "Share drawings, BOQ, location and expected start date. OKG will review and respond with a clear, structured proposal.",
  buttonText = "Request Quotation",
  buttonLink = "/contact",
  secondaryText = "View Services",
  secondaryLink = "/services",
}) {
  return (
    <section className="relative overflow-hidden" style={{ background: '#2E2B27' }}>
      {/* Subtle top accent */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'rgba(181,138,87,0.3)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="max-w-3xl mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <span className="w-6 h-px" style={{ background: 'rgba(181,138,87,0.4)' }} />
            <span className="text-[10px] font-mono font-semibold tracking-[0.22em] uppercase" style={{ color: 'rgba(181,138,87,0.65)' }}>
              OKG Building Contracting
            </span>
            <span className="w-6 h-px" style={{ background: 'rgba(181,138,87,0.4)' }} />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-[24px] md:text-[36px] font-extrabold leading-[1.2] tracking-[-0.015em] mb-5"
            style={{ color: '#FBF9F5' }}
          >
            {heading}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-[14px] leading-[1.8] mb-10 max-w-xl mx-auto"
            style={{ color: 'rgba(251,249,245,0.45)' }}
          >
            {text}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.22 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <Link
              to={buttonLink}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg text-[13.5px] font-semibold transition-all hover:opacity-85"
              style={{ background: '#B58A57', color: '#FBF9F5' }}
            >
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </Link>
            {secondaryText && secondaryLink && (
              <Link
                to={secondaryLink}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-[13.5px] font-medium transition-all hover:opacity-80"
                style={{ border: '1px solid rgba(221,214,203,0.2)', color: 'rgba(251,249,245,0.65)' }}
              >
                {secondaryText}
              </Link>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}