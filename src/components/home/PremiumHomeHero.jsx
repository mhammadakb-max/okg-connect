import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, ClipboardCheck, HardHat } from 'lucide-react';
import SectionEyebrow from '@/components/shared/SectionEyebrow';

const heroStats = [
  { value: 'UAE', label: 'Construction coverage', icon: HardHat },
  { value: 'QHSE', label: 'Controlled delivery', icon: ShieldCheck },
  { value: 'BOQ', label: 'Scope-led execution', icon: ClipboardCheck },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function PremiumHomeHero({ image }) {
  return (
    <section className="relative overflow-hidden border-b border-gray-200 bg-white py-24 md:py-36">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,16,120,0.14),transparent_40%),radial-gradient(circle_at_top_left,rgba(248,184,88,0.30),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(0,16,120,0.12),transparent_36%)]" />
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-navy via-gold to-navy" />
      <motion.div animate={{ y: [0, -18, 0], opacity: [0.55, 0.85, 0.55] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} className="absolute left-[8%] top-24 h-40 w-40 rounded-full bg-gold/20 blur-3xl" />
      <motion.div animate={{ y: [0, 22, 0], scale: [1, 1.08, 1] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }} className="absolute right-[6%] bottom-16 h-56 w-56 rounded-full bg-navy/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-14 items-center">
          <motion.div initial="hidden" animate="visible" transition={{ staggerChildren: 0.12 }}>
            <motion.div variants={fadeUp} transition={{ duration: 0.65, ease: 'easeOut' }}><SectionEyebrow label="UAE Construction Partner" /></motion.div>
            <motion.h1 variants={fadeUp} transition={{ duration: 0.75, ease: 'easeOut' }} className="text-5xl md:text-7xl font-extrabold mb-7 leading-[0.94] tracking-tight" style={{ color: '#001078' }}>
              Premium contracting built on clarity and control.
            </motion.h1>
            <motion.p variants={fadeUp} transition={{ duration: 0.75, ease: 'easeOut' }} className="text-lg md:text-xl text-text-secondary mb-9 leading-relaxed max-w-2xl">
              OKG Building Contracting supports UAE projects with disciplined civil works, finishing, manpower coordination, daily supervision, documentation control and accountable site delivery.
            </motion.p>
            <motion.div variants={fadeUp} transition={{ duration: 0.75, ease: 'easeOut' }} className="flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 font-bold rounded-md transition-all hover:-translate-y-0.5 hover:shadow-xl" style={{ backgroundColor: '#001078', color: '#FFFFFF' }}>
                Request Quotation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 px-7 py-3.5 font-bold rounded-md border border-gray-200 bg-white/80 text-navy shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg">
                Explore Services
              </Link>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.94, rotate: -1 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ delay: 0.18, duration: 0.9, ease: 'easeOut' }} whileHover={{ y: -8 }} className="relative">
            <motion.div animate={{ rotate: [0, 4, 0], scale: [1, 1.04, 1] }} transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }} className="absolute -inset-5 rounded-[2.4rem] bg-gradient-to-br from-gold/35 via-white to-navy/15 blur-2xl" />
            <div className="premium-image relative h-[500px] overflow-hidden rounded-[2rem] border border-white/70 shadow-2xl ring-1 ring-black/5">
              <img src={image} alt="OKG construction site" className="h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-white/92 p-5 shadow-xl backdrop-blur-md">
                <p className="text-xs font-bold uppercase tracking-widest text-text-secondary mb-2">Operating standard</p>
                <p className="text-xl font-extrabold leading-tight text-navy">Scope alignment. Site supervision. Documented handover.</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.75, ease: 'easeOut' }} className="mt-16 grid md:grid-cols-3 gap-5">
          {heroStats.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.label} whileHover={{ y: -8, scale: 1.02 }} transition={{ type: 'spring', stiffness: 260, damping: 18 }} className="premium-card rounded-2xl border border-gray-200 p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-navy">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="text-3xl font-extrabold text-gold mb-2">{item.value}</div>
                <p className="text-xs font-bold uppercase tracking-widest text-text-secondary">{item.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}