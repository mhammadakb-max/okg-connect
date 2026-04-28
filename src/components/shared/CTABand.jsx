import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTABand({
  heading = "Ready to discuss a scope or request a quotation?",
  text = "Share the drawings, BOQ, location and expected start date. OKG will review the details and respond with a clear, structured proposal.",
  buttonText = "Request Quotation",
  buttonLink = "/contact",
  secondaryText = "View Services",
  secondaryLink = "/services",
}) {
  return (
    <section className="relative overflow-hidden" style={{ background: '#001078' }}>
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Gold glow */}
      <div className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-[0.07] pointer-events-none"
        style={{ background: '#F8B858' }} />
      <div className="absolute -bottom-20 left-1/3 w-80 h-80 rounded-full blur-3xl opacity-[0.04] pointer-events-none"
        style={{ background: '#F8B858' }} />

      {/* Gold border top */}
      <div className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: 'linear-gradient(to right, transparent, #F8B858 40%, #F8B858 60%, transparent)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <span className="w-8 h-px" style={{ background: '#F8B858', opacity: 0.6 }} />
            <span className="text-[11px] font-mono font-semibold tracking-[0.2em] uppercase" style={{ color: '#F8B858', opacity: 0.8 }}>
              OKG Building Contracting
            </span>
            <span className="w-8 h-px" style={{ background: '#F8B858', opacity: 0.6 }} />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-2xl md:text-[38px] font-bold text-white leading-[1.2] tracking-[-0.01em] mb-5"
          >
            {heading}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="text-[15px] leading-relaxed mb-10 max-w-xl mx-auto"
            style={{ color: 'rgba(255,255,255,0.55)' }}
          >
            {text}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.24 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <Link
              to={buttonLink}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-[14px] font-bold transition-all hover:scale-[1.02] shadow-lg"
              style={{ background: '#F8B858', color: '#001078' }}
            >
              <FileText className="w-4 h-4" />
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </Link>
            {secondaryText && secondaryLink && (
              <Link
                to={secondaryLink}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-[14px] font-semibold border transition-all hover:bg-white/5"
                style={{ border: '1.5px solid rgba(255,255,255,0.18)', color: 'rgba(255,255,255,0.8)' }}
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