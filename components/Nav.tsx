'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { globalContent } from '@/content/zen-content';

interface NavLink {
  href: string;
  label: string;
}

const NAV_LINKS: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/products/', label: 'Products' },
  { href: '/contact/', label: 'Contact' },
];

/** Normalize trailing slashes so active-link detection works with trailingSlash export. */
function normalizePath(path: string): string {
  const trimmed = path.replace(/\/+$/, '');
  return trimmed === '' ? '/' : trimmed;
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { logo, siteName } = globalContent;

  const isActive = (href: string): boolean =>
    normalizePath(pathname) === normalizePath(href);

  const linkClasses = (href: string): string =>
    isActive(href)
      ? 'underline decoration-accent-sage decoration-[3px] underline-offset-8'
      : 'hover:bg-[var(--glass-surface-strong)]';

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-6 sm:pt-4">
      <nav
        aria-label="Primary"
        className="glass mx-auto max-w-6xl rounded-3xl px-4 sm:px-6"
      >
        <div className="flex min-h-16 items-center justify-between gap-4 py-2">
          <Link
            href="/"
            className="inline-flex shrink-0 items-center rounded-xl"
            onClick={() => setOpen(false)}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={140}
              height={42}
              priority
              className="h-10 w-auto rounded-lg"
            />
            <span className="sr-only">{siteName} — home</span>
          </Link>

          <ul className="hidden items-center gap-1 sm:flex">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={isActive(href) ? 'page' : undefined}
                  className={`inline-flex min-h-11 items-center rounded-full px-4 py-2 text-sm font-semibold transition-colors ${linkClasses(href)}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:bg-[var(--glass-surface-strong)] sm:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((current) => !current)}
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="h-6 w-6"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        <ul
          id="mobile-nav"
          hidden={!open}
          className="border-t border-[var(--glass-border)] py-3 sm:hidden"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                aria-current={isActive(href) ? 'page' : undefined}
                onClick={() => setOpen(false)}
                className={`flex min-h-11 items-center rounded-2xl px-4 py-2 font-semibold ${linkClasses(href)}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
