import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import SEO from '@/components/shared/SEO';
import PageHero from '@/components/shared/PageHero';
import QuotationForm from '@/components/contact/QuotationForm';

export default function Contact() {
  return (
    <>
      <SEO title="Contact OKG Building Contracting L.L.C | UAE" description="Contact OKG Contracting for civil works, finishing works, skilled workforce deployment, site supervision and construction quotation enquiries in the UAE." path="/contact" />
      <PageHero title="Contact OKG Contracting" intro="Speak with OKG Building Contracting L.L.C about project enquiries, quotation follow-ups, subcontractor coordination or company information." eyebrow="Contact" breadcrumb="Contact" />
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {[{ Icon: Phone, label: 'Phone', value: '+971 54 217 1502', href: 'tel:+971542171502' }, { Icon: MessageCircle, label: 'WhatsApp', value: '+971 54 217 1502', href: 'https://wa.me/971542171502' }, { Icon: Mail, label: 'Email', value: 'info@okgbuild.com', href: 'mailto:info@okgbuild.com' }, { Icon: MapPin, label: 'Office', value: 'Warba Centre, Office 504, Al Muraqabat, Deira, Dubai, UAE' }].map(({ Icon, label, value, href }) => <div key={label} className="rounded-2xl border border-border bg-white p-6 shadow-sm"><Icon className="mb-4 h-7 w-7 text-accent" /><p className="mb-2 text-xs font-black uppercase tracking-widest text-primary">{label}</p>{href ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="text-sm font-semibold text-muted-foreground hover:text-primary">{value}</a> : <p className="text-sm font-semibold text-muted-foreground">{value}</p>}</div>)}
        </div>
      </section>
      <section className="border-y border-border bg-secondary py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <QuotationForm mode="contact" />
          <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm"><iframe title="OKG office location map" src="https://www.google.com/maps?q=Warba%20Centre%20Al%20Muraqabat%20Deira%20Dubai%20UAE&output=embed" className="h-full min-h-[480px] w-full" loading="lazy" /></div>
        </div>
      </section>
      <section className="bg-white px-4 py-12 text-center"><Link to="/request-quotation" className="inline-flex rounded-md bg-primary px-6 py-3 text-sm font-bold text-white">Request a Quotation</Link></section>
    </>
  );
}