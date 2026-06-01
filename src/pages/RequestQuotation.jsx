import React from 'react';
import SEO from '@/components/shared/SEO';
import PageHero from '@/components/shared/PageHero';
import QuotationForm from '@/components/contact/QuotationForm';
import { Mail, MessageCircle, Phone } from 'lucide-react';

export default function RequestQuotation() {
  return (
    <>
      <SEO title="Request a Quotation | OKG Building Contracting L.L.C" description="Send your BOQ, drawings or scope of work to OKG Building Contracting L.L.C for civil works, finishing works and skilled workforce deployment quotation review." path="/request-quotation" />
      <PageHero title="Request a Quotation" intro="Share your BOQ, drawings or scope of work with OKG Contracting. Our team will review your requirements and respond with the next steps." eyebrow="Quotation Enquiry" breadcrumb="Request a Quotation" />
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
          <QuotationForm />
          <aside className="rounded-2xl border border-border bg-secondary p-8">
            <h2 className="mb-4 text-2xl font-black text-primary">How we review your request</h2>
            <p className="mb-6 text-muted-foreground">Please include the project location, work type, expected start date, workforce needs and available BOQ or drawings. Clear details help us respond faster.</p>
            <div className="space-y-4 text-sm font-semibold text-foreground">
              <a href="tel:+971542171502" className="flex items-center gap-3 rounded-xl bg-white p-4"><Phone className="h-5 w-5 text-accent" />+971 54 217 1502</a>
              <a href="https://wa.me/971542171502" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl bg-white p-4"><MessageCircle className="h-5 w-5 text-accent" />WhatsApp OKG</a>
              <a href="mailto:info@okgbuild.com" className="flex items-center gap-3 rounded-xl bg-white p-4"><Mail className="h-5 w-5 text-accent" />info@okgbuild.com</a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}