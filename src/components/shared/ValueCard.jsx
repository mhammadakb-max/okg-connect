import React from 'react';
import { motion } from 'framer-motion';

export default function ValueCard({ icon: Icon, title, text, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.4 }}
      className="relative rounded-2xl p-7 group overflow-hidden transition-all duration-300 hover:shadow-lg"
      style={{
        background: 'rgba(255,255,255,0.75)',
        backdropFilter: 'blur(12px)',
        border: '1px solid #E6EBF5',
        boxShadow: '0 2px 16px rgba(110,133,232,0.06)',
      }}
    >
      {/* Hover shimmer top line */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'linear-gradient(to right, transparent, #6E85E8, transparent)' }}
      />

      {Icon && (
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
          style={{ background: 'linear-gradient(135deg, #EAF0FF 0%, #F2F6FF 100%)', border: '1px solid #E6EBF5' }}
        >
          <Icon style={{ color: '#6E85E8', width: 18, height: 18 }} />
        </div>
      )}

      <h3 className="text-[15px] font-bold mb-2.5 leading-snug" style={{ color: '#5F6D9A' }}>{title}</h3>
      <p className="text-[13.5px] leading-[1.75]" style={{ color: '#97A0BC' }}>{text}</p>
    </motion.div>
  );
}