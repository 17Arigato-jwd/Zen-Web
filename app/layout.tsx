import type { Metadata, Viewport } from 'next';
import { Fraunces, Manrope } from 'next/font/google';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { globalContent } from '@/content/zen-content';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  axes: ['opsz'],
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  title: {
    default: `${globalContent.siteName} — ${globalContent.taglines.main}`,
    template: `%s — ${globalContent.siteName}`,
  },
  description: globalContent.metaDescription,
};

export const viewport: Viewport = {
  themeColor: '#F6F1E4',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="min-h-screen font-sans antialiased">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        {/* "The living layer" — organic gradient + blurred blobs the glass
            surfaces refract (app/CLAUDE.md §3). Fixed so panels scroll over it. */}
        <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-accent-sage/20 via-bg-base to-accent-terracotta/15" />
          <div className="absolute -top-40 -left-40 h-[36rem] w-[36rem] rounded-full bg-accent-sage/25 blur-3xl" />
          <div className="absolute top-1/3 -right-44 h-[32rem] w-[32rem] rounded-full bg-accent-terracotta/20 blur-3xl" />
          <div className="absolute -bottom-40 left-1/4 h-[28rem] w-[28rem] rounded-full bg-accent-gold/15 blur-3xl" />
        </div>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
