import React from 'react';
import { motion } from 'framer-motion';

export default function PageHero({ title, intro, eyebrow }) {
  return (
    <section className="bg-navy text-white py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-white blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gold text-sm font-mono font-medium tracking-wider uppercase mb-4"
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl"
        >
          {title}
        </motion.h1>
        {intro && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-lg text-white/70 max-w-2xl leading-relaxed"
          >
            {intro}
          </motion.p>
        )}
      </div>
    </section>
  );
}