import React, { useEffect, useMemo, useState } from 'react';
import { base44 } from '@/api/base44Client';
import { MapPin } from 'lucide-react';
import SEO from '@/components/shared/SEO';
import PageHero from '@/components/shared/PageHero';
import CTABand from '@/components/shared/CTABand';

const filters = ['All Projects', 'Active Projects', 'Completed Projects', 'Civil Works', 'Finishing Works', 'Plastering', 'Masonry', 'Concrete', 'Workforce Deployment'];

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All Projects');

  useEffect(() => {
    base44.functions.invoke('listPublicProjects', {}).then((res) => setProjects(res.data.projects || [])).catch(() => setProjects([]));
  }, []);

  const visibleProjects = useMemo(() => {
    if (!projects.length) return [];
    if (activeFilter === 'All Projects') return projects;
    if (activeFilter === 'Active Projects') return projects.filter((p) => ['in_progress', 'mobilised', 'mobilising', 'awarded'].includes(p.status));
    if (activeFilter === 'Completed Projects') return projects.filter((p) => ['completed', 'closed'].includes(p.status));
    return projects.filter((p) => `${p.scope || ''} ${p.project_type || ''}`.toLowerCase().includes(activeFilter.toLowerCase().replace(' works', '').replace(' deployment', '')));
  }, [projects, activeFilter]);

  const placeholders = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <SEO title="Projects | OKG Building Contracting L.L.C" description="Public project information from OKG Contracting. Only projects marked public by administrators are displayed on the website." path="/projects" />
      <PageHero title="Projects" intro="Public project information will appear here when OKG administrators upload verified details and mark projects as public." eyebrow="Projects" breadcrumb="Projects" />
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-wrap gap-2">{filters.map((filter) => <button key={filter} onClick={() => setActiveFilter(filter)} className={`rounded-full border px-4 py-2 text-sm font-bold ${activeFilter === filter ? 'border-primary bg-primary text-white' : 'border-border bg-white text-primary'}`}>{filter}</button>)}</div>
          {visibleProjects.length ? <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{visibleProjects.map((project) => <ProjectCard key={project.id} project={project} />)}</div> : <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{placeholders.map((item) => <ProjectCard key={item} project={{ project_name: 'Project Details Coming Soon', status: 'coming_soon', emirate: 'UAE', location: 'To be published', scope: 'No fake project data is published. Verified project details will appear here once uploaded through the private portal.', progress: 0 }} />)}</div>}
        </div>
      </section>
      <CTABand buttonLink="/request-quotation" />
    </>
  );
}

function ProjectCard({ project }) {
  return <article className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm"><div className="h-56 bg-secondary"><img src={project.site_photos_url || project.cover_image_url || 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=85'} alt={project.project_name} className="h-full w-full object-cover" loading="lazy" /></div><div className="p-6"><p className="mb-2 text-xs font-black uppercase tracking-widest text-accent">{project.status?.replaceAll('_', ' ')}</p><h2 className="mb-3 text-xl font-black text-primary">{project.project_name}</h2><p className="mb-4 flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4" />{project.emirate || project.location || 'UAE'}</p><p className="text-sm leading-relaxed text-muted-foreground">{project.scope || project.summary}</p><div className="mt-5 h-2 overflow-hidden rounded-full bg-secondary"><div className="h-full bg-primary" style={{ width: `${Number(project.progress || 0)}%` }} /></div></div></article>;
}