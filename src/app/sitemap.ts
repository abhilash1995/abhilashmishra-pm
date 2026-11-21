import type { MetadataRoute } from 'next';
import { studies } from '@/data/content';
const site = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: site, changeFrequency: 'monthly', priority: 1 }, ...studies.map((study) => ({ url: `${site}/work/${study.slug}`, changeFrequency: 'monthly' as const, priority: 0.7 }))];
}
