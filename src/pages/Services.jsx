import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2 } from 'lucide-react';
import SEO from '@/components/shared/SEO';
import PageHero from '@/components/shared/PageHero';
import CTABand from '@/components/shared/CTABand';
import { serviceData } from '@/lib/publicSite';

export default function Services() {
  return (
    <>
      <SEO title="Construction Services | OKG Building Contracting L.L.C UAE" description="Civil works, plastering, masonry, concrete works, steel and shuttering, skilled workforce deployment, site supervision and documentation control across the UAE." path="/services" />
      <PageHero title="Construction Services" intro="OKG Contracting delivers structured civil works, finishing works, skilled workforce deployment, site supervision and documentation control for UAE project teams." eyebrow="Services" breadcrumb="Services" />
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {serviceData.map((service) => (
            <Link key={service.slug} to={`/services/${service.slug}`} className="group rounded-2xl border border-border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
              <Building2 className="mb-5 h-8 w-8 text-primary" />
              <h2 className="mb-3 text-xl font-black text-primary">{service.title}</h2>
              <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{service.short}</p>
              <span className="inline-flex items-center gap-2 text-sm font-bold text-primary">Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
            </Link>
          ))}
        </div>
      </section>
      <CTABand buttonLink="/request-quotation" />
    </>
  );
}