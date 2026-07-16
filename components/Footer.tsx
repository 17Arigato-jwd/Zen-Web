import Image from 'next/image';
import Link from 'next/link';
import { globalContent } from '@/content/zen-content';

export default function Footer() {
  const { siteName, taglines, joinTheJourney, contact, logo } = globalContent;
  return (
    <footer className="px-3 pt-24 pb-6 sm:px-6">
      <div className="glass mx-auto max-w-6xl rounded-3xl px-6 py-12 sm:px-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1.1fr_0.9fr]">
          <div>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={140}
              height={42}
              className="h-10 w-auto rounded-lg"
            />
            <p className="mt-5 font-display text-2xl font-semibold">
              {taglines.main}
            </p>
            <p className="mt-2 text-text-soft">{taglines.sub}</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold">
              {joinTheJourney.heading}
            </h2>
            <p className="mt-3 max-w-prose text-sm/6 text-text-soft">
              {joinTheJourney.body}
            </p>
            <Link href="/contact/" className="btn btn-primary mt-6 text-sm">
              Get in touch
            </Link>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold">
              {contact.heading}
            </h2>
            <ul className="mt-3 space-y-2 text-sm/6">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="font-semibold underline-offset-4 hover:underline"
                >
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={contact.phoneHref}
                  className="font-semibold underline-offset-4 hover:underline"
                >
                  {contact.phone}
                </a>
              </li>
            </ul>
            <nav aria-label="Footer" className="mt-6">
              <ul className="space-y-2 text-sm/6">
                <li>
                  <Link href="/" className="underline-offset-4 hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/"
                    className="underline-offset-4 hover:underline"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact/"
                    className="underline-offset-4 hover:underline"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <p className="mt-10 border-t border-[var(--glass-border)] pt-6 text-xs text-text-soft">
          © {new Date().getFullYear()} {siteName}. {taglines.main}
        </p>
      </div>
    </footer>
  );
}
