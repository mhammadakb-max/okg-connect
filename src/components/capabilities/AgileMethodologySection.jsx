import React from 'react';
import { motion } from 'framer-motion';
import SectionEyebrow from '@/components/shared/SectionEyebrow';
import ChecklistItem from '@/components/shared/ChecklistItem';

const agileStages = [
  {
    title: 'Backlog & Scope Breakdown',
    text: 'Project scope, BOQ items, approvals, risks and site constraints are broken into manageable work packages with clear ownership.',
  },
  {
    title: 'Sprint-Based Planning',
    text: 'Short delivery cycles are planned around priority areas, available workfronts, manpower readiness and inspection milestones.',
  },
  {
    title: 'Daily Coordination',
    text: 'Site teams align daily on progress, blockers, safety issues, material requirements and next-step priorities.',
  },
  {
    title: 'Review & Adaptation',
    text: 'Progress is reviewed frequently, changes are documented, and plans are adjusted quickly to reduce delay and rework.',
  },
];

const agileControls = [
  'Prioritised project backlog for scope items, approvals and workfronts',
  'Weekly sprint planning linked to manpower, materials and access readiness',
  'Daily stand-up coordination between site supervisors, subcontractors and client representatives',
  'Visual progress tracking using photos, checklists, reports and milestone updates',
  'Issue and risk log for blockers, variations, safety observations and quality concerns',
  'Sprint review meetings to confirm completed work, pending inspections and next priorities',
  'Change control process for scope revisions, additional works and commercial impact',
  'Retrospective learning after each phase to improve productivity and coordination',
];

export default function AgileMethodologySection() {
  return (
    <section className="bg-white border-t border-gray-200 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-12"
        >
          <SectionEyebrow label="Agile Project Management" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#001078' }}>
            Agile methodology adapted for construction delivery.
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            OKG applies Agile project management principles in a practical construction format: breaking work into clear packages, planning in short delivery cycles, reviewing progress frequently and adapting quickly when site conditions change.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {agileStages.map((stage, idx) => (
            <motion.div
              key={stage.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-2xl font-bold mb-3" style={{ color: '#F8B858' }}>{String(idx + 1).padStart(2, '0')}</div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#001078' }}>{stage.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{stage.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-xl p-8 text-white"
            style={{ backgroundColor: '#001078' }}
          >
            <h3 className="text-2xl font-bold mb-4">How this benefits clients</h3>
            <p className="text-white/75 leading-relaxed mb-6">
              Agile control helps clients see progress clearly, respond to changes faster and reduce uncertainty during execution. Instead of waiting until the end of a project phase, OKG reviews performance continuously and keeps priorities visible.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {['Faster decisions', 'Clearer priorities', 'Reduced rework', 'Better reporting'].map((item) => (
                <div key={item} className="bg-white/10 border border-white/10 rounded-lg p-4 text-sm font-semibold">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 border border-gray-200 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#001078' }}>Agile controls used by OKG</h3>
            <div className="space-y-4">
              {agileControls.map((item, idx) => (
                <ChecklistItem key={item} text={item} index={idx} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}