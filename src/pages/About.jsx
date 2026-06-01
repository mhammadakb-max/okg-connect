import React from 'react';
import { Download, Mail, MapPin, Phone } from 'lucide-react';
import SEO from '@/components/shared/SEO';
import PageHero from '@/components/shared/PageHero';
import CTABand from '@/components/shared/CTABand';
import SectionEyebrow from '@/components/shared/SectionEyebrow';

const values = ['Safety', 'Quality', 'Accountability', 'Reliability', 'Transparency', 'Productivity', 'Professional communication'];

export default function About() {
  return (
    <>
      <SEO title="About OKG Building Contracting L.L.C | UAE Contractor" description="OKG Building Contracting L.L.C is a UAE-based contracting company focused on civil execution, finishing works, workforce mobilisation and structured site coordination." path="/about" />
      <PageHero title="About OKG Building Contracting L.L.C" intro="OKG Building Contracting L.L.C is a UAE-based contracting company focused on disciplined project delivery, civil execution, finishing works, skilled workforce mobilisation and structured site coordination." eyebrow="Company Profile" breadcrumb="About" />
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div><SectionEyebrow label="Company Overview" /><h2 className="mb-6 text-3xl font-black text-primary md:text-5xl">Reliable construction support with disciplined site control.</h2><p className="text-lg leading-relaxed text-muted-foreground">OKG Contracting works with developers, main contractors and project teams that need qualified manpower, clear supervision, QHSE awareness and documented progress control across civil works and finishing packages.</p></div>
          <div className="overflow-hidden rounded-3xl border border-border shadow-sm"><img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1000&q=85" alt="OKG construction supervision" className="h-full min-h-[380px] w-full object-cover" loading="lazy" /></div>
        </div>
      </section>
      <section className="border-y border-border bg-secondary py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <div className="rounded-2xl border border-border bg-white p-8"><h2 className="mb-3 text-2xl font-black text-primary">Mission</h2><p className="text-muted-foreground">To deliver reliable construction support through qualified manpower, disciplined supervision, documented progress control and clear communication.</p></div>
          <div className="rounded-2xl border border-border bg-white p-8"><h2 className="mb-3 text-2xl font-black text-primary">Vision</h2><p className="text-muted-foreground">To become a trusted contracting partner for developers, main contractors and project teams across the UAE.</p></div>
        </div>
      </section>
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionEyebrow label="Core Values" /><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{values.map((value) => <div key={value} className="rounded-2xl border border-border bg-white p-6 shadow-sm"><div className="mb-4 h-1 w-10 rounded-full bg-accent" /><h3 className="font-black text-primary">{value}</h3></div>)}</div>
        </div>
      </section>
      <section className="border-y border-border bg-secondary py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="lg:col-span-2"><SectionEyebrow label="Operational Approach" /><h2 className="mb-5 text-3xl font-black text-primary">Practical planning, site coordination and documented control.</h2><p className="text-muted-foreground">Our team aligns scope, plans mobilisation, supervises daily output, manages escalation and supports inspections and handover documentation.</p><button className="mt-7 inline-flex items-center gap-2 rounded-md border border-border bg-white px-6 py-3 text-sm font-bold text-primary"><Download className="h-4 w-4" />Download Company Profile</button></div>
          <div className="rounded-2xl border border-border bg-white p-7"><h3 className="mb-4 text-xl font-black text-primary">Contact Details</h3><p className="mb-3 flex gap-3 text-sm text-muted-foreground"><MapPin className="h-4 w-4 text-accent" />Warba Centre, Office 504, Al Muraqabat, Deira, Dubai, UAE</p><p className="mb-3 flex gap-3 text-sm text-muted-foreground"><Phone className="h-4 w-4 text-accent" />+971 54 217 1502</p><p className="flex gap-3 text-sm text-muted-foreground"><Mail className="h-4 w-4 text-accent" />info@okgbuild.com</p></div>
        </div>
      </section>
      <CTABand buttonLink="/request-quotation" />
    </>
  );
}