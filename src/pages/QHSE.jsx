import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, HardHat, Leaf, Heart } from 'lucide-react';
import PageHero from '../components/shared/PageHero';
import SectionEyebrow from '../components/shared/SectionEyebrow';
import ChecklistItem from '../components/shared/ChecklistItem';
import CTABand from '../components/shared/CTABand';

const C = { ivory: '#F7F4EE', stone: '#F1ECE4', warmWhite: '#FBF9F5', charcoal: '#1F1F1B', charcoalDk: '#2E2B27', taupe: '#67635C', border: '#DDD6CB', bronze: '#B58A57' };

const cards = [
  { icon: ShieldCheck, title: 'Quality Commitment', text: 'OKG aims to complete works in line with approved drawings, agreed scope, site instructions and client expectations. Measurement, inspection and correction are part of the work.', link: '/quality-policy', btn: 'Read Quality Policy' },
  { icon: HardHat, title: 'Health & Safety Commitment', text: 'Workers must follow site safety rules, PPE requirements, induction processes and supervisor instructions. Unsafe shortcuts are not accepted.', link: '/health-safety-policy', btn: 'Read H&S Policy' },
  { icon: Leaf, title: 'Environmental Responsibility', text: 'OKG supports proper housekeeping, responsible material use, reduced wastage and clean work areas so teams add value instead of disruption.', link: '/environmental-policy', btn: 'Read Environmental Policy' },
  { icon: Heart, title: 'Social Commitment', text: 'OKG supports fair work practices, worker respect, local opportunity and responsible community engagement as part of its operating standard.', link: '/social-commitment', btn: 'Read Social Commitment' },
];

const checklist = [
  'Site induction and PPE compliance',
  'Daily housekeeping and work area discipline',
  'Quality checking before inspection request',
  'Clear reporting of unsafe conditions, delay causes and workfront issues',
];

const fu = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

export default function QHSE() {
  return (
    <>
      <PageHero
        eyebrow="QHSE"
        breadcrumb="QHSE"
        title="Quality, safety and control built into the work."
        intro="Every project should be handled with safety awareness, clean documentation, quality checking, responsible housekeeping and clear reporting."
      />

      {/* Policy areas */}
      <section className="py-20 md:py-28" style={{ background: C.warmWhite }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionEyebrow label="Policy Areas" />
          <motion.h2 {...fu} className="font-display text-[28px] md:text-[38px] font-extrabold leading-[1.12] tracking-[-0.018em] mb-12" style={{ color: C.charcoal }}>
            Four commitments. One standard.
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-4">
            {cards.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-xl p-7 border hover:shadow-md transition-all overflow-hidden bg-white"
                style={{ borderColor: C.border }}
              >
                <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: C.bronze }} />
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-5" style={{ background: C.stone }}>
                  <c.icon className="w-4.5 h-4.5" style={{ color: C.charcoalDk, width: 18, height: 18 }} />
                </div>
                <h3 className="text-[16px] font-bold mb-3" style={{ color: C.charcoal }}>{c.title}</h3>
                <p className="text-[13.5px] leading-relaxed mb-6" style={{ color: C.taupe }}>{c.text}</p>
                <Link to={c.link} className="inline-flex items-center gap-2 text-[13px] font-semibold transition-opacity hover:opacity-70" style={{ color: C.charcoal }}>
                  {c.btn} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* QHSE Standard */}
      <section className="py-20 md:py-28" style={{ background: C.stone, borderTop: `1px solid ${C.border}` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionEyebrow label="QHSE Standard" />
              <motion.h2 {...fu} className="font-display text-[26px] md:text-[34px] font-extrabold leading-[1.15] tracking-[-0.018em] mb-5" style={{ color: C.charcoal }}>
                Applied consistently on site.
              </motion.h2>
              <motion.p {...fu} transition={{ delay: 0.1 }} className="text-[14px] leading-[1.85] mb-8" style={{ color: C.taupe }}>
                OKG's QHSE approach is practical and documented. Safety, quality and housekeeping are treated as core elements of disciplined project delivery, not optional additions.
              </motion.p>
              <div className="space-y-4">
                {checklist.map((item, i) => <ChecklistItem key={i} text={item} index={i} />)}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden"
              style={{ boxShadow: '0 12px 40px rgba(31,31,27,0.1)' }}
            >
              <img
                src="https://media.base44.com/images/public/69f0f9c5f2486cca9280edd1/6af65c67b_generated_image.png"
                alt="Construction worker PPE safety helmet conducting QHSE inspection on site"
                className="w-full h-[380px] object-cover object-center"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}