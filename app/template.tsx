'use client';

/**
 * A template re-mounts its children on every navigation (unlike layout, which
 * persists), so this wrapper replays a short fade/rise on each route change —
 * the site's page-transition animation. Reduced-motion users get no animation
 * (handled in globals.css).
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-transition">{children}</div>;
}
