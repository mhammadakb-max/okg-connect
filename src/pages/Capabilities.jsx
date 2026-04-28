import React from 'react';
import { motion } from 'framer-motion';
import { Search, Ruler, FileText, Truck, BarChart3, ClipboardCheck } from 'lucide-react';
import PageHero from '../components/shared/PageHero';
import SectionEyebrow from '../components/shared/SectionEyebrow';
import ChecklistItem from '../components/shared/ChecklistItem';
import CTABand from '../components/shared/CTABand';

const checklist = [
  'Dubai-based building contracting presence',
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

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

export default function Capabilities() {
  return (
    <>
      <PageHero
        title="Operational strength built through control, not inflated claims."
        intro="OKG's capability model is designed around site supervision, documentation, subcontractor control, communication and realistic mobilisation."
      />

      {/* Checklist */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://media.base44.com/images/public/69f0f9c5f2486cca9280edd1/f18566c18_generated_68f4f5c5.png"
                alt="UAE urban construction development"
                className="w-full h-80 object-cover"
              />
            </div>
            <div>
              <SectionEyebrow label="Core Capabilities" />
              <div className="space-y-4">
                {checklist.map((item, i) => (
                  <ChecklistItem key={i} text={item} index={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Execution Process */}
      <section className="py-16 md:py-24 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionEyebrow label="Execution Process" />
          <motion.h2 {...fadeUp} className="text-2xl md:text-4xl font-bold text-navy mb-4 max-w-2xl">
            A controlled process from enquiry to handover.
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-xl p-6 border border-border hover:shadow-lg transition-all group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors">
                    <step.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs font-mono font-medium text-gold tracking-wider">{step.num}</span>
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">{step.title}</h3>
                <p className="text-steel text-sm leading-relaxed">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}