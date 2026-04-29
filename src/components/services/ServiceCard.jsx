import React from 'react';
import { motion } from 'framer-motion';

export default function ServiceCard({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04, duration: 0.4 }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-2xl"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold via-gold to-navy opacity-80" />
      <div className="mb-6 flex items-start justify-between gap-4">
        <span className="text-4xl font-extrabold tracking-tight text-gold">{service.num}</span>
        <span className="h-10 w-10 rounded-full border border-gray-200 bg-gray-50 transition-colors duration-300 group-hover:bg-navy" />
      </div>
      <h3 className="mb-3 text-xl font-extrabold leading-snug text-navy">{service.title}</h3>
      <p className="text-sm leading-relaxed text-text-secondary">{service.text}</p>
    </motion.div>
  );
}