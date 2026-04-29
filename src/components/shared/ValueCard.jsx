import React from 'react';
import { motion } from 'framer-motion';

export default function ValueCard({ icon: Icon, title, text, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-xl transition-shadow duration-300"
    >
      {Icon && (
        <div className="w-10 h-10 rounded-md flex items-center justify-center mb-4" style={{ backgroundColor: '#F8B858' }}>
          <Icon className="w-5 h-5" style={{ color: '#001078' }} />
        </div>
      )}

      <h3 className="text-lg font-bold mb-2" style={{ color: '#001078' }}>
        {title}
      </h3>
      <p className="text-sm text-text-secondary leading-relaxed">
        {text}
      </p>
    </motion.div>
  );
}