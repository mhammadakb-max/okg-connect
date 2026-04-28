import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function ChecklistItem({ text, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.35 }}
      className="flex items-start gap-3.5"
    >
      <div
        className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 shrink-0"
        style={{ background: 'rgba(248,184,88,0.15)' }}
      >
        <Check className="w-3 h-3" style={{ color: '#F8B858' }} />
      </div>
      <span className="text-[14px] leading-relaxed" style={{ color: '#1E1E1E' }}>{text}</span>
    </motion.div>
  );
}