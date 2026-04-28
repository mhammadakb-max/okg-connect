import React from 'react';
import { motion } from 'framer-motion';

export default function ValueCard({ icon: Icon, title, text, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-xl p-6 md:p-8 border border-border hover:shadow-lg transition-all duration-300 group"
    >
      {Icon && (
        <div className="w-11 h-11 rounded-lg bg-navy/5 flex items-center justify-center mb-5 group-hover:bg-gold/10 transition-colors">
          <Icon className="w-5 h-5 text-navy" />
        </div>
      )}
      <h3 className="text-lg font-semibold text-navy mb-3">{title}</h3>
      <p className="text-steel text-sm leading-relaxed">{text}</p>
    </motion.div>
  );
}