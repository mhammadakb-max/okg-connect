import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function ChecklistItem({ text, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="flex items-start gap-3"
    >
      <div className="w-5 h-5 rounded-full bg-gold/15 flex items-center justify-center mt-0.5 shrink-0">
        <Check className="w-3 h-3 text-gold" />
      </div>
      <span className="text-charcoal text-sm md:text-base leading-relaxed">{text}</span>
    </motion.div>
  );
}