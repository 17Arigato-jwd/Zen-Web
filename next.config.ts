import type { NextConfig } from 'next';

// GitHub Pages serves static files only — no Node server, no API routes,
// no Image Optimization API. See CLAUDE.md → "Deployment & Static Export".
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isCI = process.env.GITHUB_ACTIONS === 'true';

const basePath = isCI ? `/${repo}` : ''; // project pages are served at /<repo-name>/

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // no Image Optimization API on static hosting
    // placehold.co serves the on-brand placeholder images (CLAUDE.md → "Image & Asset Handling")
    remotePatterns: [{ protocol: 'https', hostname: 'placehold.co' }],
  },
  basePath,
  assetPrefix: isCI ? `/${repo}/` : '',
  trailingSlash: true,
  // next/image with `unoptimized` does NOT prepend basePath to local src, so
  // expose it for the asset() helper (lib/asset.ts) to prefix /images/* paths.
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
