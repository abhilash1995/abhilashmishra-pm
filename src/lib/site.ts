/** Shared URL helpers for local hosting and GitHub Pages' repository subpath. */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000').replace(/\/$/, '');

export function publicAsset(path: string): string {
  return `${basePath}${path.startsWith('/') ? path : `/${path}`}`;
}
