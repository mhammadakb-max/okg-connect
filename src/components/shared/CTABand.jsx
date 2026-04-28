import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTABand({
  heading = "Need a clear quotation for your project?",
  text = "Send drawings, BOQ, location, scope details and expected start date. OKG can review the package and respond with a structured proposal.",
  buttonText = "Request Quotation",
  buttonLink = "/contact",
}) {
  return (
    <section className="bg-navy py-16 md:py-20 relative overflow-hidden">
      <div className="absolute top-0 right-20 w-64 h-64 rounded-full bg-gold/5 blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-bold text-white mb-4"
        >
          {heading}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/60 max-w-2xl mx-auto mb-8 text-base md:text-lg"
        >
          {text}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Link
            to={buttonLink}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-navy font-semibold rounded-lg hover:bg-gold/90 transition-all shadow-lg hover:shadow-xl"
          >
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}