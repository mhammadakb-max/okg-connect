import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, MapPin, ClipboardCheck, Check } from 'lucide-react';
import SectionEyebrow from '../components/shared/SectionEyebrow';
import CTABand from '../components/shared/CTABand';

const heroChecklist = [
  'Clear scope before mobilisation',
  'Daily progress control',
  'Quality and safety built into work',
  'Growth through real delivery',
];

const trustBlocks = [
  { label: 'Brand-new', sub: 'Honest positioning', icon: Shield },
  { label: 'UAE', sub: 'Site-ready approach', icon: MapPin },
  { label: 'Disciplined', sub: 'Scope and supervision', icon: ClipboardCheck },
];

const valueCards = [
  {
    title: 'No false history',
    text: 'We do not claim decades of experience or hundreds of completed projects. We compete through discipline, honesty and strong execution control.',
  },
  {
    title: 'Site-first thinking',
    text: 'Construction is won through manpower, material coordination, supervision, safety, approvals and daily output.',
  },
  {
    title: 'Commitment before scale',
    text: 'We build trust project by project and grow through repeat clients instead of inflated claims.',
  },
];

const serviceCards = [
  {
    title: 'Building Contracting Works',
    text: 'Support for villas, commercial buildings, extensions, renovations and subcontract packages.',
  },
  {
    title: 'Blockwork & Masonry',
    text: 'Blockwork, masonry, partitions, walls and controlled progress tracking.',
  },
  {
    title: 'Plastering Works',
    text: 'Internal and external plastering with attention to surface preparation, line, level and finish.',
  },
];

const capChecklist = [
  'Clear scope, quotation and measurement discipline',
  'Site supervision and daily progress follow-up',
  'Worker and subcontractor documentation support',
  'Transparent payment milestones and work approvals',
];

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            {/* Left */}
            <div className="lg:col-span-3">
              <motion.span {...fadeUp} className="inline-flex items-center gap-2 bg-offwhite border border-border rounded-full px-4 py-1.5 text-xs font-mono font-medium text-navy tracking-wider uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                UAE Building Contracting Company
              </motion.span>

              <motion.h1 {...fadeUp} transition={{ delay: 0.1 }} className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy leading-tight mb-6">
                Reliable construction execution for civil, masonry, plastering and finishing works.
              </motion.h1>

              <motion.p {...fadeUp} transition={{ delay: 0.2 }} className="text-steel text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                OKG Building Contracting is a new UAE-based contracting company built on disciplined site management, transparent scope control and honest project delivery. We do not sell inflated history. We commit to clear work, proper supervision and accountable execution.
              </motion.p>

              <motion.div {...fadeUp} transition={{ delay: 0.3 }} className="flex flex-wrap gap-3 mb-10">
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white font-semibold rounded-lg hover:bg-navy/90 transition-all shadow-lg hover:shadow-xl">
                  Request a Quotation
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/services" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-navy text-navy font-semibold rounded-lg hover:bg-navy hover:text-white transition-all">
                  View Services
                </Link>
              </motion.div>

              {/* Trust Blocks */}
              <motion.div {...fadeUp} transition={{ delay: 0.4 }} className="flex flex-wrap gap-4">
                {trustBlocks.map((b) => (
                  <div key={b.label} className="flex items-center gap-3 bg-offwhite rounded-lg px-4 py-3 border border-border">
                    <b.icon className="w-4 h-4 text-gold" />
                    <div>
                      <span className="text-sm font-semibold text-navy">{b.label}</span>
                      <span className="text-xs text-steel ml-1">— {b.sub}</span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right — Side Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl border border-border shadow-xl p-6 md:p-8 relative">
                <div className="absolute left-0 top-6 bottom-6 w-0.5 bg-gold rounded-full"></div>
                <div className="flex items-center gap-2 mb-5 pl-4">
                  <span className="text-2xl font-black text-navy">OKG</span>
                  <span className="w-2 h-2 rounded-full bg-gold -ml-1 mb-3"></span>
                </div>
                <p className="text-charcoal text-sm leading-relaxed mb-6 pl-4">
                  A sharp, modern contracting brand designed for clients who value straight communication, controlled site output and responsible delivery.
                </p>
                <div className="space-y-3 pl-4">
                  {heroChecklist.map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-gold/15 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-gold" />
                      </div>
                      <span className="text-sm text-charcoal">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hero image */}
              <div className="mt-6 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://media.base44.com/images/public/69f0f9c5f2486cca9280edd1/5d94c7bc4_generated_c93ba9ef.png"
                  alt="Modern construction structure under blue UAE sky"
                  className="w-full h-48 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
        <div className="section-line" />
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-16 md:py-24 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionEyebrow label="About OKG" />
              <motion.h2 {...fadeUp} className="text-2xl md:text-4xl font-bold text-navy mb-6">
                New company. Serious standard. No exaggerated claims.
              </motion.h2>
              <motion.p {...fadeUp} transition={{ delay: 0.1 }} className="text-charcoal leading-relaxed mb-4">
                OKG has been created to serve the UAE construction market with a straightforward promise: understand the scope, mobilise responsibly, supervise the work and protect the client's time, budget and site quality.
              </motion.p>
              <motion.p {...fadeUp} transition={{ delay: 0.15 }} className="text-steel leading-relaxed mb-8">
                Our advantage is not old marketing language. Our advantage is accountability and the ability to build proper systems from day one: documentation, clear quotations, worker control, subcontractor discipline and site communication.
              </motion.p>
              <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
                <Link to="/about" className="inline-flex items-center gap-2 text-navy font-semibold hover:text-gold transition-colors">
                  Read About OKG <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
            <div className="grid gap-4">
              {valueCards.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-xl p-6 border border-border hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-gold"></span>
                    <h3 className="font-semibold text-navy">{card.title}</h3>
                  </div>
                  <p className="text-steel text-sm leading-relaxed pl-4">{card.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionEyebrow label="What We Do" />
          <motion.h2 {...fadeUp} className="text-2xl md:text-4xl font-bold text-navy mb-4 max-w-2xl">
            Construction services built around practical site delivery.
          </motion.h2>
          <motion.p {...fadeUp} transition={{ delay: 0.1 }} className="text-steel max-w-2xl mb-10">
            OKG supports main contractors, developers, private clients and project owners through civil, masonry, plastering, structural and finishing work packages.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {serviceCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-offwhite rounded-xl p-6 border border-border hover:border-navy/20 hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors">
                  <span className="text-lg font-bold text-navy">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">{card.title}</h3>
                <p className="text-steel text-sm leading-relaxed">{card.text}</p>
              </motion.div>
            ))}
          </div>

          <Link to="/services" className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white font-semibold rounded-lg hover:bg-navy/90 transition-all">
            View Full Service Spectrum <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* CAPABILITIES PREVIEW */}
      <section className="py-16 md:py-24 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionEyebrow label="Capabilities" />
              <motion.h2 {...fadeUp} className="text-2xl md:text-4xl font-bold text-navy mb-4">
                Built to operate with clarity, control and accountability.
              </motion.h2>
              <motion.p {...fadeUp} transition={{ delay: 0.1 }} className="text-steel mb-8">
                A new contractor must win trust by being precise. OKG's operating model is designed around clear communication, realistic mobilisation and measurable progress.
              </motion.p>
              <div className="space-y-4">
                {capChecklist.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-gold/15 flex items-center justify-center mt-0.5 shrink-0">
                      <Check className="w-3 h-3 text-gold" />
                    </div>
                    <span className="text-charcoal text-sm md:text-base">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://media.base44.com/images/public/69f0f9c5f2486cca9280edd1/fa276dd29_generated_0616a86b.png"
                alt="Construction site supervision with digital tablet"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <CTABand />
    </>
  );
}