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
    <section className="bg-white border-t border-gray-200 py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
          style={{ color: '#001078' }}
        >
          {heading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto leading-relaxed"
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
            className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-md transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#001078' }}
          >
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </Link>
          {secondaryText && secondaryLink && (
            <Link
              to={secondaryLink}
              className="inline-flex items-center gap-2 px-6 py-3 font-medium rounded-md transition-colors border border-gray-200 hover:bg-gray-50"
              style={{ color: '#001078' }}
            >
              {secondaryText}
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
}