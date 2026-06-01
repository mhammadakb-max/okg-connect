import { useEffect } from 'react';

const DEFAULT_TITLE = 'OKG Building Contracting L.L.C | Civil Works & Finishing Contractor UAE';
const DEFAULT_DESCRIPTION = 'OKG Building Contracting L.L.C delivers civil works, finishing, masonry, plastering, skilled workforce coordination and disciplined project execution across the UAE.';

export default function SEO({ title = DEFAULT_TITLE, description = DEFAULT_DESCRIPTION, path = '/', noindex = false, schema }) {
  useEffect(() => {
    document.title = title;

    const setMeta = (selector, attrs) => {
      let el = document.head.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        Object.entries(attrs.identity || {}).forEach(([key, value]) => el.setAttribute(key, value));
        document.head.appendChild(el);
      }
      Object.entries(attrs.values || {}).forEach(([key, value]) => el.setAttribute(key, value));
    };

    setMeta('meta[name="description"]', { identity: { name: 'description' }, values: { content: description } });
    setMeta('meta[property="og:title"]', { identity: { property: 'og:title' }, values: { content: title } });
    setMeta('meta[property="og:description"]', { identity: { property: 'og:description' }, values: { content: description } });
    setMeta('meta[name="twitter:title"]', { identity: { name: 'twitter:title' }, values: { content: title } });
    setMeta('meta[name="twitter:description"]', { identity: { name: 'twitter:description' }, values: { content: description } });
    setMeta('meta[name="robots"]', { identity: { name: 'robots' }, values: { content: noindex ? 'noindex, nofollow' : 'index, follow' } });

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://www.okgbuild.com${path}`);

    let schemaTag = document.head.querySelector('script[data-okg-schema]');
    if (schemaTag) schemaTag.remove();
    if (schema) {
      schemaTag = document.createElement('script');
      schemaTag.type = 'application/ld+json';
      schemaTag.dataset.okgSchema = 'true';
      schemaTag.textContent = JSON.stringify(schema);
      document.head.appendChild(schemaTag);
    }
  }, [title, description, path, noindex, schema]);

  return null;
}