import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { base44 } from '@/api/base44Client';
import { ArrowRight, Building2, CheckCircle2, ClipboardList, FileText, Hammer, HardHat, MapPin, ShieldCheck, Users, Wrench } from 'lucide-react';
import SEO from '@/components/shared/SEO';
import SectionEyebrow from '@/components/shared/SectionEyebrow';
import CTABand from '@/components/shared/CTABand';
import { qhseItems, serviceData } from '@/lib/publicSite';

const iconMap = [Building2, Wrench, Hammer, HardHat, ShieldCheck, Users, ClipboardList, FileText];
const trustItems = ['UAE-Based Contracting Company', 'Daily Site Supervision', 'QHSE-Led Execution', 'Documented Progress Reporting', 'Scalable Workforce Mobilisation'];
const whyItems = ['Structured site mobilisation', 'Qualified workforce deployment', 'Daily operational oversight', 'Clear escalation procedures', 'Inspection and documentation tracking', 'Productivity monitoring', 'QHSE compliance', 'Reliable communication with project teams'];

export default function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    base44.functions.invoke('listPublicProjects', {}).then((res) => setProjects(res.data.projects || [])).catch(() => setProjects([]));
  }, []);

  const displayProjects = projects.filter((project) => project.status !== 'coming_soon').slice(0, 3);

  return (
    <>
      <SEO
        title="OKG Building Contracting L.L.C | Civil Works & Finishing Contractor UAE"
        description="OKG Building Contracting L.L.C delivers civil works, finishing, masonry, plastering, skilled workforce coordination and disciplined project execution across the UAE."
        path="/"
      />
      <main className="bg-white text-foreground">
        <section className="relative overflow-hidden bg-primary text-white">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=85" alt="Civil construction site in progress" className="h-full w-full object-cover opacity-35" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/45" />
          </div>
          <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 md:py-32 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-widest text-accent">OKG Building Contracting L.L.C</div>
              <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl">Reliable Civil Works, Finishing and Workforce Delivery Across the UAE</h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80 md:text-xl">OKG Building Contracting L.L.C supports developers, main contractors and project teams with disciplined site execution, qualified manpower, daily supervision and documented progress control.</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link to="/request-quotation" className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3.5 text-sm font-black text-primary shadow-lg transition-all hover:-translate-y-0.5">Request a Quotation <ArrowRight className="h-4 w-4" /></Link>
                <Link to="/capabilities" className="inline-flex items-center gap-2 rounded-md border border-white/25 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10">View Our Capabilities</Link>
              </div>
            </div>
            <div className="hidden rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-md lg:block">
              <div className="grid gap-4">
                {['Site mobilisation', 'Supervision', 'QHSE control', 'Progress records'].map((item) => <div key={item} className="rounded-2xl border border-white/15 bg-white/10 p-5"><div className="mb-3 h-1 w-10 rounded-full bg-accent" /><p className="font-bold">{item}</p></div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-secondary py-5">
          <div className="mx-auto grid max-w-7xl gap-3 px-4 sm:px-6 md:grid-cols-5 lg:px-8">
            {trustItems.map((item) => <div key={item} className="flex items-center gap-2 text-sm font-bold text-primary"><CheckCircle2 className="h-4 w-4 text-accent" />{item}</div>)}
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 max-w-3xl"><SectionEyebrow label="Services" /><h2 className="text-3xl font-black text-primary md:text-5xl">Construction services for serious project delivery.</h2></div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {serviceData.map((service, idx) => {
                const Icon = iconMap[idx] || Building2;
                return <Link key={service.slug} to={`/services/${service.slug}`} className="group rounded-2xl border border-border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"><Icon className="mb-5 h-8 w-8 text-primary" /><h3 className="mb-3 text-lg font-black text-primary">{service.title}</h3><p className="mb-5 text-sm leading-relaxed text-muted-foreground">{service.short}</p><span className="inline-flex items-center gap-2 text-sm font-bold text-primary">Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></Link>;
              })}
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-secondary py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <div><SectionEyebrow label="Why Choose OKG" /><h2 className="text-3xl font-black text-primary md:text-5xl">Disciplined construction support from mobilisation to handover.</h2></div>
            <div className="grid gap-4 sm:grid-cols-2">
              {whyItems.map((item) => <div key={item} className="flex items-start gap-3 rounded-xl border border-border bg-white p-4"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" /><span className="text-sm font-bold text-foreground">{item}</span></div>)}
            </div>
          </div>
        </section>

        {displayProjects.length > 0 && (
          <section className="py-20 md:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><SectionEyebrow label="Projects" /><h2 className="text-3xl font-black text-primary md:text-5xl">Featured project information.</h2><p className="mt-4 max-w-2xl text-muted-foreground">Only verified public projects are shown here.</p></div><Link to="/projects" className="font-bold text-primary">View all projects</Link></div>
              <div className="grid gap-6 md:grid-cols-3">
                {displayProjects.map((project) => <article key={project.id} className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm"><div className="h-52 bg-secondary"><img src={project.site_photos_url || project.cover_image_url || 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=85'} alt={project.project_name} className="h-full w-full object-cover" loading="lazy" /></div><div className="p-6">{project.status && <p className="mb-2 text-xs font-black uppercase tracking-widest text-accent">{project.status.replaceAll('_', ' ')}</p>}<h3 className="mb-3 text-xl font-black text-primary">{project.project_name}</h3><p className="mb-4 flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4" />{project.emirate || project.location || 'UAE'}</p><p className="text-sm leading-relaxed text-muted-foreground">{project.scope || project.summary}</p></div></article>)}
              </div>
            </div>
          </section>
        )}

        <section className="border-y border-border bg-secondary py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div><SectionEyebrow label="QHSE" /><h2 className="text-3xl font-black text-primary md:text-5xl">Quality, safety and control built into daily execution.</h2><p className="mt-5 text-muted-foreground">OKG works with practical QHSE discipline: safe work practices, supervisor checks, documented inspections and responsible environmental behaviour.</p><Link to="/qhse" className="mt-7 inline-flex rounded-md bg-primary px-6 py-3 text-sm font-bold text-white">View Our QHSE Policies</Link></div>
            <div className="grid gap-4 sm:grid-cols-2">
              {qhseItems.map((item) => <div key={item} className="rounded-xl border border-border bg-white p-5"><ShieldCheck className="mb-3 h-5 w-5 text-accent" /><p className="font-bold text-primary">{item}</p></div>)}
            </div>
          </div>
        </section>

        <CTABand heading="Need a Reliable Construction Partner for Your Next Project?" text="Share your BOQ, drawings or scope of work with our team. We will review your requirements and respond with the next steps." buttonText="Request a Quotation" buttonLink="/request-quotation" secondaryText="Contact Our Team" secondaryLink="/contact" />
      </main>
    </>
  );
}