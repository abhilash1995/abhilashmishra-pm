import type { NextConfig } from 'next';

// GitHub Pages hosts the project at /abhilashmishra-pm, not at the domain root.
// PAGES_BASE_PATH is unset for local development.
const basePath = process.env.PAGES_BASE_PATH ?? '';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  ...(basePath ? { basePath } : {}),
};

export default nextConfig;
