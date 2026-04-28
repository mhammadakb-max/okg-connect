import React from 'react';
import { motion } from 'framer-motion';
import { Search, Ruler, FileText, Truck, BarChart3, ClipboardCheck } from 'lucide-react';
import PageHero from '../components/shared/PageHero';
import SectionEyebrow from '../components/shared/SectionEyebrow';
import ChecklistItem from '../components/shared/ChecklistItem';
import CTABand from '../components/shared/CTABand';

const checklist = [
  'UAE-based building contracting presence',
  'Controlled subcontractor mobilisation',
  'Clear scope, quotation and measurement discipline',
  'Site supervision and daily progress follow-up',
  'Worker and subcontractor documentation support',
  'Flexible manpower scaling based on project needs',
  'Transparent payment milestones and work approvals',
  'Direct communication with client, consultant and site team',
];

const steps = [
  { num: '01', title: 'Site Review', text: 'Review project location, workfront, drawings, BOQ, access and expected programme.', icon: Search },
  { num: '02', title: 'Scope Alignment', text: 'Clarify inclusions, exclusions, measurement method, manpower needs and material responsibility.', icon: Ruler },
  { num: '03', title: 'Quotation', text: 'Submit structured commercial proposal with clear price, terms and assumptions.', icon: FileText },
  { num: '04', title: 'Mobilisation', text: 'Arrange team, documents, tools, reporting line and site entry requirements.', icon: Truck },
  { num: '05', title: 'Daily Control', text: 'Monitor attendance, daily progress, site issues, materials and instructions.', icon: BarChart3 },
  { num: '06', title: 'Inspection & Closeout', text: 'Support approval, snagging, correction, final measurement and handover.', icon: ClipboardCheck },
];

const fu = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

export default function Capabilities() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="Operational strength built through control, coordination and site discipline."
        intro="OKG's operating model is designed around clear communication, realistic mobilisation, measurable work progress and accountable project coordination."
      />

      {/* ─── Checklist + image ───────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-navy/12">
                <img
                  src="https://media.base44.com/images/public/69f0f9c5f2486cca9280edd1/b43d44e48_generated_image.png"
                  alt="Construction engineer reviewing BOQ drawings and project documentation UAE"
                  className="w-full h-[420px] object-cover object-center"
                  loading="lazy"
                />
              </div>
              {/* Floating accent */}
              <div
                className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl hidden lg:block"
                style={{ background: '#F8B858', opacity: 0.12 }}
              />
            </motion.div>

            {/* Checklist */}
            <div>
              <SectionEyebrow label="Core Capabilities" />
              <motion.h2 {...fu} className="font-display text-3xl md:text-[36px] font-bold leading-[1.2] tracking-[-0.015em] mb-8" style={{ color: '#001078' }}>
                What OKG brings to every project.
              </motion.h2>
              <div className="space-y-4">
                {checklist.map((item, i) => (
                  <ChecklistItem key={i} text={item} index={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Execution Process ────────────────────────────────────────────── */}
      <section className="py-20 md:py-28" style={{ background: '#F2F4F8' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionEyebrow label="Execution Process" />
          <motion.h2 {...fu} className="font-display text-3xl md:text-[40px] font-bold leading-[1.18] tracking-[-0.015em] mb-4" style={{ color: '#001078' }}>
            A controlled process from enquiry to handover.
          </motion.h2>
          <motion.p {...fu} transition={{ delay: 0.1 }} className="text-[15px] leading-[1.8] mb-12 max-w-2xl" style={{ color: '#6B7280' }}>
          Clear scope, defined responsibilities, daily site control and documented approvals reduce delays, disputes and rework. OKG's process is built around practical execution control.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative bg-white rounded-2xl p-7 border border-gray-100 hover:border-gray-200 hover:shadow-xl hover:shadow-navy/6 transition-all overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: '#F8B858' }}
                />

                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300"
                    style={{ background: '#001078' }}
                  >
                    <step.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-[11px] font-mono font-bold" style={{ color: '#F8B858' }}>{step.num}</span>
                </div>

                <h3 className="text-[16px] font-bold mb-2 leading-snug" style={{ color: '#001078' }}>{step.title}</h3>
                <p className="text-[13.5px] leading-relaxed" style={{ color: '#6B7280' }}>{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}