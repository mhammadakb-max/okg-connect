import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import SEO from '@/components/shared/SEO';
import PageHero from '@/components/shared/PageHero';
import CTABand from '@/components/shared/CTABand';
import { serviceData } from '@/lib/publicSite';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = serviceData.find((item) => item.slug === slug) || serviceData[0];
  const related = serviceData.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <>
      <SEO title={`${service.title} Contractor UAE | OKG Building Contracting L.L.C`} description={`${service.description} Request a quotation from OKG Contracting for ${service.title.toLowerCase()} across the UAE.`} path={`/services/${service.slug}`} />
      <PageHero title={service.title} intro={service.description} eyebrow="Service" breadcrumb={service.title} ctaLabel="Request a Quotation" ctaLink="/request-quotation" />
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-border shadow-sm"><img src={service.image} alt={`${service.title} by OKG Contracting`} className="h-full min-h-[420px] w-full object-cover" loading="lazy" /></div>
          <div className="grid gap-8">
            <InfoBlock title="Scope of Work" items={service.scope} />
            <InfoBlock title="Execution Process" items={service.process} />
            <InfoBlock title="Quality Controls" items={service.quality} />
            <InfoBlock title="Suitable Project Types" items={service.suitable} />
            <div className="flex flex-wrap gap-3">
              <Link to="/request-quotation" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-bold text-white">Request a Quotation <ArrowRight className="h-4 w-4" /></Link>
              <a href="https://wa.me/971542171502" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-bold text-primary"><MessageCircle className="h-4 w-4" /> WhatsApp OKG</a>
            </div>
          </div>
        </div>
      </section>
      <section className="border-y border-border bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-black text-primary">Related Services</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {related.map((item) => <Link key={item.slug} to={`/services/${item.slug}`} className="rounded-2xl border border-border bg-white p-6 font-bold text-primary shadow-sm hover:shadow-lg">{item.title}</Link>)}
          </div>
        </div>
      </section>
      <CTABand buttonLink="/request-quotation" />
    </>
  );
}

function InfoBlock({ title, items }) {
  return <div><h2 className="mb-4 text-xl font-black text-primary">{title}</h2><div className="grid gap-3 sm:grid-cols-2">{items.map((item) => <div key={item} className="flex items-start gap-3 rounded-xl border border-border bg-secondary/60 p-4 text-sm font-semibold text-foreground"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />{item}</div>)}</div></div>;
}