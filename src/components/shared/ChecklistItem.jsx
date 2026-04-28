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
        style={{ background: 'rgba(110,133,232,0.1)', border: '1px solid rgba(110,133,232,0.22)' }}
      >
        <Check className="w-2.5 h-2.5" style={{ color: '#6E85E8' }} />
      </div>
      <span className="text-[14px] leading-relaxed" style={{ color: '#5F6D9A' }}>{text}</span>
    </motion.div>
  );
}