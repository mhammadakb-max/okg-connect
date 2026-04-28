import React from 'react';
import { motion } from 'framer-motion';

export default function ValueCard({ icon: Icon, title, text, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.4 }}
      className="relative bg-white rounded-2xl p-7 border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 group overflow-hidden"
      style={{ boxShadow: '0 1px 4px rgba(0,16,120,0.04)' }}
    >
      {/* Top accent on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: '#F8B858' }}
      />

      {Icon && (
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
          style={{ background: 'rgba(0,16,120,0.06)' }}
        >
          <Icon className="w-5 h-5" style={{ color: '#001078' }} />
        </div>
      )}

      <h3 className="text-[15px] font-bold mb-2.5 leading-snug" style={{ color: '#001078' }}>{title}</h3>
      <p className="text-[13.5px] leading-[1.75]" style={{ color: '#6B7280' }}>{text}</p>
    </motion.div>
  );
}