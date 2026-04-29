import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function ChecklistItem({ text, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04, duration: 0.35 }}
      className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white/80 p-4 shadow-sm"
    >
      <motion.div whileHover={{ scale: 1.12 }} className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm" style={{ backgroundColor: '#F8B858' }}>
        <Check className="w-3 h-3" style={{ color: '#001078' }} />
      </motion.div>
      <span className="text-sm font-medium text-text-primary leading-relaxed">
        {text}
      </span>
    </motion.div>
  );
}