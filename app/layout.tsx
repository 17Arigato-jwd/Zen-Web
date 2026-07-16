import type { Metadata } from 'next';
import './globals.css';

// Baseline metadata only — per-page <title>/description and the
// Fraunces/Manrope fonts (app/CLAUDE.md) are wired up when the UI is built.
export const metadata: Metadata = {
  title: 'Zen Enterprises',
  description:
    'Zen Enterprises — a social enterprise promoting inclusive, low-investment entrepreneurship for women and rural households.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
