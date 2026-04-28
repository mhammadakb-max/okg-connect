import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Target, Eye, Compass } from 'lucide-react';
import PageHero from '../components/shared/PageHero';
import SectionEyebrow from '../components/shared/SectionEyebrow';
import ValueCard from '../components/shared/ValueCard';
import CTABand from '../components/shared/CTABand';

const values = [
  { icon: Heart, title: 'Honesty', text: 'We do not claim what we have not done. Every proposal should be based on actual capacity, realistic programme and clear scope.' },
  { icon: Shield, title: 'Discipline', text: 'Construction progress depends on daily supervision, attendance control, material coordination and fast issue escalation.' },
  { icon: Target, title: 'Accountability', text: 'OKG expects work to be checked, corrected and handed over professionally instead of leaving defects or confusion behind.' },
  { icon: Eye, title: 'Vision', text: 'To become a trusted UAE building contracting company known for reliable execution, disciplined site management and quality construction delivery.' },
  { icon: Compass, title: 'Mission', text: 'To deliver civil, structural, masonry, plastering and finishing works through professional supervision, safe practices, transparent coordination and timely completion.' },
];

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

export default function About() {
  return (
    <>
      <PageHero
        title="New company. Serious standard. Honest positioning."
        intro="OKG Building Contracting is being built as a disciplined UAE contractor focused on practical delivery, transparent communication and controlled site execution."
      />

      {/* Company Profile */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionEyebrow label="Company Profile" />
              <motion.h2 {...fadeUp} className="text-2xl md:text-4xl font-bold text-navy mb-6">
                A contractor built around execution discipline.
              </motion.h2>
              <motion.p {...fadeUp} transition={{ delay: 0.1 }} className="text-charcoal leading-relaxed mb-4">
                OKG exists to serve clients who need a clear, responsive and accountable contractor for civil works, masonry, plastering, structural support, fit-out and finishing packages.
              </motion.p>
              <motion.p {...fadeUp} transition={{ delay: 0.15 }} className="text-steel leading-relaxed">
                Because OKG is new, the company does not rely on exaggerated claims. The brand is positioned around honesty, site control, clear documentation and professional commitment from the first enquiry to final handover.
              </motion.p>
            </div>

            <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="bg-offwhite rounded-2xl p-6 md:p-8 border border-border relative">
              <div className="absolute left-0 top-6 bottom-6 w-0.5 bg-gold rounded-full"></div>
              <div className="pl-5">
                <h3 className="text-lg font-bold text-navy mb-3">Our honest market position</h3>
                <p className="text-charcoal text-sm leading-relaxed">
                  OKG is suitable for clients who want a contractor that is transparent about capacity, clear in pricing, disciplined in mobilisation and serious about building a real project record through performance.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionEyebrow label="Core Values" />
          <motion.h2 {...fadeUp} className="text-2xl md:text-4xl font-bold text-navy mb-10">
            What OKG commits to from day one.
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <ValueCard key={i} icon={v.icon} title={v.title} text={v.text} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}