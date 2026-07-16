import type { Metadata } from 'next';
import Link from 'next/link';
import CategoryCard from '@/components/CategoryCard';
import GlassCard from '@/components/GlassCard';
import SectionHeading from '@/components/SectionHeading';
import { productsContent } from '@/content/zen-content';

export const metadata: Metadata = {
  title: 'Product Showcase',
  description: productsContent.intro.body,
};

/**
 * Asymmetric, hand-arranged category layout (app/CLAUDE.md §5) — spans and
 * offsets vary per card instead of a predictable symmetrical 3-column grid.
 */
const CATEGORY_LAYOUT: string[] = [
  'lg:col-span-7',
  'lg:col-span-5 lg:mt-16',
  'lg:col-span-5',
  'lg:col-span-7 lg:mt-10',
  'lg:col-span-6 lg:mt-4',
  'lg:col-span-6 lg:mt-14',
];

export default function ProductsPage() {
  const { intro, categories, zenSolutions, whyChooseZen } = productsContent;

  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pt-36 sm:px-6 lg:pt-44">
        <SectionHeading
          as="h1"
          eyebrow={intro.eyebrow}
          title={intro.heading}
          intro={intro.body}
          className="reveal"
        />
      </section>

      {/* Six business-opportunity categories */}
      <section
        aria-label="Business opportunity categories"
        className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20"
      >
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {categories.map((category, index) => (
            <li
              key={category.id}
              className={CATEGORY_LAYOUT[index] ?? 'lg:col-span-6'}
            >
              <CategoryCard category={category} className="h-full" />
            </li>
          ))}
        </ul>
      </section>

      {/* Zen Solutions */}
      <section
        aria-labelledby="zen-solutions-heading"
        className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24"
      >
        <SectionHeading
          id="zen-solutions-heading"
          eyebrow="Complete support"
          title={zenSolutions.heading}
          intro={zenSolutions.intro}
        />
        <ol className="mt-10 flex flex-wrap gap-3">
          {zenSolutions.items.map((item, index) => (
            <li
              key={item}
              className="glass glass-hover inline-flex min-h-11 items-center gap-3 rounded-full px-5 py-2.5"
            >
              <span
                aria-hidden="true"
                className="font-display text-sm font-bold text-accent-terracotta"
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="font-medium">{item}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* Why to Choose Zen? */}
      <section
        aria-labelledby="why-zen-heading"
        className="mx-auto max-w-6xl px-4 py-16 pb-8 sm:px-6 lg:py-24 lg:pb-12"
      >
        <GlassCard className="p-8 sm:p-12">
          <SectionHeading id="why-zen-heading" title={whyChooseZen.heading} />
          <ul className="mt-8 grid gap-x-10 gap-y-4 sm:grid-cols-2">
            {whyChooseZen.items.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="h-5 w-5 shrink-0 text-accent-sage-deep"
                >
                  <path
                    d="M4 10.5 8.5 15 16 6"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Link href="/contact/" className="btn btn-primary">
              Join the Journey
            </Link>
          </div>
        </GlassCard>
      </section>
    </>
  );
}
