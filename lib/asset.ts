/**
 * Prefix a site-root asset path with the deployment basePath.
 *
 * On GitHub Pages project sites the app is served under /<repo>/, but
 * `next/image` with `unoptimized: true` does not prepend basePath to a string
 * `src` — so local paths like `/images/logo.png` 404 in production. This helper
 * (fed NEXT_PUBLIC_BASE_PATH from next.config.ts) adds the prefix. Absolute URLs
 * (http/https), data URIs and relative paths pass through untouched.
 */
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export function asset(src: string): string {
  return src.startsWith('/') ? `${BASE_PATH}${src}` : src;
}
