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
    <section
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #F2F6FF 0%, #EAF0FF 50%, #F7F9FF 100%)',
        borderTop: '1px solid #E6EBF5',
      }}
    >
      {/* Soft glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-48 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(110,133,232,0.08) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <span className="w-5 h-px" style={{ background: 'rgba(110,133,232,0.4)' }} />
            <span className="text-[10px] font-mono font-semibold tracking-[0.22em] uppercase" style={{ color: '#6E85E8' }}>
              OKG Building Contracting
            </span>
            <span className="w-5 h-px" style={{ background: 'rgba(110,133,232,0.4)' }} />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-[24px] md:text-[36px] font-extrabold leading-[1.2] tracking-[-0.015em] mb-5"
            style={{ color: '#3D4A73' }}
          >
            {heading}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-[14.5px] leading-[1.8] mb-10 max-w-xl mx-auto"
            style={{ color: '#7C86A8' }}
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
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-[13.5px] font-semibold transition-all hover:opacity-88"
              style={{ background: '#6E85E8', color: '#fff', boxShadow: '0 4px 20px rgba(110,133,232,0.28)' }}
            >
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </Link>
            {secondaryText && secondaryLink && (
              <Link
                to={secondaryLink}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-[13.5px] font-medium transition-all hover:opacity-80"
                style={{
                  border: '1px solid #E6EBF5',
                  color: '#7C86A8',
                  background: 'rgba(255,255,255,0.7)',
                }}
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