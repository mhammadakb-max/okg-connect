import React from 'react';
import { motion } from 'framer-motion';

export default function ValueCard({ icon: Icon, title, text, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.4 }}
      className="relative bg-white rounded-xl p-7 border hover:shadow-md transition-all duration-300 group overflow-hidden"
      style={{ borderColor: '#DDD6CB' }}
    >
      {/* Bronze accent bar on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: '#B58A57' }}
      />

      {Icon && (
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center mb-5"
          style={{ background: '#F1ECE4' }}
        >
          <Icon className="w-4.5 h-4.5" style={{ color: '#2E2B27', width: 18, height: 18 }} />
        </div>
      )}

      <h3 className="text-[15px] font-bold mb-2.5 leading-snug" style={{ color: '#1F1F1B' }}>{title}</h3>
      <p className="text-[13.5px] leading-[1.75]" style={{ color: '#67635C' }}>{text}</p>
    </motion.div>
  );
}