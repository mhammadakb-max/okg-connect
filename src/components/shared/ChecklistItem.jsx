import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function ChecklistItem({ text, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="flex items-start gap-3"
    >
      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: '#F8B858' }}>
        <Check className="w-3 h-3" style={{ color: '#001078' }} />
      </div>
      <span className="text-sm text-text-primary leading-relaxed">
        {text}
      </span>
    </motion.div>
  );
}