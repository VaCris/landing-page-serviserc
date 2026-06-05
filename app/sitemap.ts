import type { MetadataRoute } from 'next';
import { services } from '@/data/services';
import { absoluteUrl } from '@/lib/site';

export const dynamic = 'force-static';

const lastModified = new Date('2026-06-05');

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl('/'),
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: absoluteUrl('/servicios/'),
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: absoluteUrl('/convenio-uch/'),
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: absoluteUrl(`/servicios/${service.slug}/`),
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
