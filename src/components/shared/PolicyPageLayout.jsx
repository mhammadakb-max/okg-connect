import React from 'react';
import PageHero from './PageHero';
import SectionEyebrow from './SectionEyebrow';
import ChecklistItem from './ChecklistItem';
import CTABand from './CTABand';

export default function PolicyPageLayout({ heroTitle, heroIntro, eyebrow, heading, statement, additionalText, checklist }) {
  return (
    <>
      <PageHero title={heroTitle} intro={heroIntro} />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionEyebrow label={eyebrow} />
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6">{heading}</h2>

          <div className="bg-offwhite rounded-xl p-6 md:p-8 border border-border mb-8">
            <p className="text-charcoal leading-relaxed">{statement}</p>
          </div>

          <p className="text-steel text-sm italic mb-10 bg-gold/5 border-l-2 border-gold px-4 py-3 rounded-r-lg">
            {additionalText}
          </p>

          <h3 className="text-lg font-semibold text-navy mb-5">Key Commitments</h3>
          <div className="space-y-4">
            {checklist.map((item, i) => (
              <ChecklistItem key={i} text={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}