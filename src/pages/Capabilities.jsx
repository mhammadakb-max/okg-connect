import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import SEO from '@/components/shared/SEO';
import PageHero from '@/components/shared/PageHero';
import CTABand from '@/components/shared/CTABand';
import SectionEyebrow from '@/components/shared/SectionEyebrow';
import { capabilityItems } from '@/lib/publicSite';

export default function Capabilities() {
  return (
    <>
      <SEO title="Construction Capabilities | OKG Building Contracting L.L.C" description="OKG Contracting capabilities include workforce mobilisation, civil works execution, finishing works, site supervision, productivity tracking and documentation control." path="/capabilities" />
      <PageHero title="Construction Capabilities" intro="OKG Contracting operates with disciplined manpower coordination, site supervision, reporting, inspection tracking and QHSE monitoring for UAE projects." eyebrow="Capabilities" breadcrumb="Capabilities" />
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl"><SectionEyebrow label="Operating Strengths" /><h2 className="text-3xl font-black text-primary md:text-5xl">Structured support for construction project teams.</h2></div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {capabilityItems.map((item) => <div key={item} className="rounded-2xl border border-border bg-white p-6 shadow-sm"><CheckCircle2 className="mb-4 h-6 w-6 text-accent" /><h3 className="font-black text-primary">{item}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Clear procedures, responsible coordination and documented control for {item.toLowerCase()}.</p></div>)}
          </div>
        </div>
      </section>
      <CTABand buttonLink="/request-quotation" />
    </>
  );
}