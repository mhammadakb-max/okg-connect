import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionEyebrow from '@/components/shared/SectionEyebrow';

const heroStats = [
  { value: 'UAE', label: 'Construction coverage' },
  { value: 'QHSE', label: 'Controlled delivery' },
  { value: '24/7', label: 'Site coordination mindset' },
];

export default function PremiumHomeHero({ image }) {
  return (
    <section className="relative overflow-hidden border-b border-gray-200 bg-white py-24 md:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,16,120,0.12),transparent_42%),radial-gradient(circle_at_top_left,rgba(248,184,88,0.24),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(0,16,120,0.08),transparent_34%)]" />
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-navy via-gold to-navy" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-14 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
            <SectionEyebrow label="UAE Construction Partner" />
            <h1 className="text-5xl md:text-7xl font-extrabold mb-7 leading-[0.98] tracking-tight" style={{ color: '#001078' }}>
              Premium contracting built on clarity and control.
            </h1>
            <p className="text-lg md:text-xl text-text-secondary mb-9 leading-relaxed max-w-2xl">
              OKG Building Contracting supports UAE projects with disciplined civil works, finishing, manpower coordination, daily supervision, documentation control and accountable site delivery.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 font-bold rounded-md transition-all hover:-translate-y-0.5 hover:shadow-xl" style={{ backgroundColor: '#001078', color: '#FFFFFF' }}>
                Request Quotation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 px-7 py-3.5 font-bold rounded-md border border-gray-200 bg-white/80 text-navy shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg">
                Explore Services
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15, duration: 0.7, ease: 'easeOut' }} className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-gold/25 via-white to-navy/10 blur-2xl" />
            <div className="relative h-[460px] overflow-hidden rounded-[2rem] border border-white/70 shadow-2xl ring-1 ring-black/5">
              <img src={image} alt="OKG construction site" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-white/92 p-5 shadow-xl backdrop-blur-md">
                <p className="text-xs font-bold uppercase tracking-widest text-text-secondary mb-2">Operating standard</p>
                <p className="text-xl font-extrabold leading-tight text-navy">Scope alignment. Site supervision. Documented handover.</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="mt-16 grid md:grid-cols-3 gap-5">
          {heroStats.map((item) => (
            <div key={item.label} className="premium-card rounded-2xl border border-gray-200 p-6 text-center">
              <div className="text-3xl font-extrabold text-gold mb-2">{item.value}</div>
              <p className="text-xs font-bold uppercase tracking-widest text-text-secondary">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}