export const dynamic = 'force-static';
import { siteUrl as site } from '@/lib/site';
import type { MetadataRoute } from 'next';
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: '*', allow: '/' }, sitemap: `${site}/sitemap.xml` };
}
