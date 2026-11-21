import { siteUrl as site } from '@/lib/site';
import type { MetadataRoute } from 'next';
import { studies } from '@/data/content';
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: site, changeFrequency: 'monthly', priority: 1 }, ...studies.map((study) => ({ url: `${site}/work/${study.slug}`, changeFrequency: 'monthly' as const, priority: 0.7 }))];
}
