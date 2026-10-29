import type { MetadataRoute } from 'next';
import { packages, serviceAreas, site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(site.lastUpdated);
  const entry = (path: string, priority: number, changeFrequency: 'monthly' | 'yearly' = 'monthly') => ({
    url: new URL(path, site.url).toString(),
    lastModified,
    changeFrequency,
    priority,
  });

  return [
    entry('/', 1),
    entry('/packages', 0.9),
    ...packages.map((p) => entry(`/packages/${p.slug}`, 0.8)),
    entry('/service-areas', 0.8),
    ...serviceAreas.map((a) => entry(`/service-areas/${a.slug}`, a.homeBase ? 0.8 : 0.7)),
    entry('/contact', 0.7, 'yearly'),
    entry('/terms', 0.2, 'yearly'),
    entry('/privacy', 0.2, 'yearly'),
  ];
}
