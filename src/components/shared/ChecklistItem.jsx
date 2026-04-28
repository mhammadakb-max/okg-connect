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
        style={{ background: 'rgba(181,138,87,0.12)', border: '1px solid rgba(181,138,87,0.25)' }}
      >
        <Check className="w-2.5 h-2.5" style={{ color: '#B58A57' }} />
      </div>
      <span className="text-[14px] leading-relaxed" style={{ color: '#1F1F1B' }}>{text}</span>
    </motion.div>
  );
}