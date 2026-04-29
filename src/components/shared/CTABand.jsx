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
    <section className="relative overflow-hidden border-t border-gray-200 py-20 md:py-28" style={{ backgroundColor: '#001078' }}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(248,184,88,0.28),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_48%)]" />
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold via-white/50 to-gold" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight tracking-tight text-white"
        >
          {heading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-white/75 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          {text}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            to={buttonLink}
            className="inline-flex items-center gap-2 px-7 py-3.5 font-bold rounded-md transition-all hover:-translate-y-0.5 hover:shadow-xl"
            style={{ backgroundColor: '#F8B858', color: '#001078' }}
          >
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </Link>
          {secondaryText && secondaryLink && (
            <Link
              to={secondaryLink}
              className="inline-flex items-center gap-2 px-7 py-3.5 font-semibold rounded-md transition-colors border border-white/20 text-white hover:bg-white/10"
            >
              {secondaryText}
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
}