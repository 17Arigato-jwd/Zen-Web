import Image from 'next/image';
import Link from 'next/link';
import GlassCard from '@/components/GlassCard';
import SectionHeading from '@/components/SectionHeading';
import StatCounter from '@/components/StatCounter';
import { globalContent, homeContent } from '@/content/zen-content';

// Home inherits the layout's default title ("Zen Enterprises — From Home to
// Enterprise.") and meta description — both tailored to this page.

export default function HomePage() {
  const { hero, about, vision, mission, whatWeBuild, zenModel, goals2030 } =
    homeContent;
  const { siteName, taglines } = globalContent;

  return (
    <>
      {/* Hero — the page's one orchestrated staggered reveal */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-36 pb-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:pt-44 lg:pb-28">
        <div>
          <p className="reveal text-sm font-bold tracking-[0.25em] text-accent-sage-deep uppercase">
            {siteName}
          </p>
          <h1
            className="reveal mt-4 font-display text-5xl leading-[1.04] font-semibold text-balance sm:text-6xl lg:text-7xl"
            style={{ animationDelay: '90ms' }}
          >
            {taglines.main}
          </h1>
          <p
            className="reveal mt-6 max-w-prose text-lg text-text-soft sm:text-xl"
            style={{ animationDelay: '180ms' }}
          >
            {taglines.sub}
          </p>
          <div
            className="reveal mt-10 flex flex-wrap gap-4"
            style={{ animationDelay: '270ms' }}
          >
            <Link href="/products/" className="btn btn-primary">
              Explore opportunities
            </Link>
            <Link href="/contact/" className="btn btn-secondary">
              Join the Journey
            </Link>
          </div>
        </div>
        <div className="reveal" style={{ animationDelay: '360ms' }}>
          <GlassCard className="p-2 sm:p-3">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              width={hero.image.width}
              height={hero.image.height}
              priority
              className="h-auto w-full rounded-2xl"
            />
          </GlassCard>
        </div>
      </section>

      {/* About Us */}
      <section
        aria-labelledby="about-heading"
        className="scroll-reveal mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24"
      >
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <GlassCard className="p-2 sm:p-3">
            <Image
              src={about.image.src}
              alt={about.image.alt}
              width={about.image.width}
              height={about.image.height}
              className="h-auto w-full rounded-2xl"
            />
          </GlassCard>
          <div>
            <SectionHeading
              id="about-heading"
              eyebrow="Who we are"
              title={about.heading}
            />
            <p className="mt-6 max-w-prose text-base/7 sm:text-lg/8">
              {about.body}
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission — asymmetric two-card band */}
      <section
        aria-label="Our vision and mission"
        className="scroll-reveal mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24"
      >
        <div className="grid gap-6 lg:grid-cols-5 lg:gap-8">
          <GlassCard as="article" className="p-8 sm:p-10 lg:col-span-2">
            <h2 className="font-display text-3xl font-semibold">
              {vision.heading}
            </h2>
            <p className="mt-5 font-display text-xl/8 sm:text-2xl/9">
              {vision.body}
            </p>
          </GlassCard>
          <GlassCard as="article" className="p-8 sm:p-10 lg:col-span-3">
            <h2 className="font-display text-3xl font-semibold">
              {mission.heading}
            </h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {mission.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-accent-terracotta"
                  />
                  <span className="text-base/7">{item}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </section>

      {/* What We Build */}
      <section
        aria-labelledby="what-we-build-heading"
        className="scroll-reveal mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24"
      >
        <SectionHeading
          id="what-we-build-heading"
          eyebrow="Our focus"
          title={whatWeBuild.heading}
        />
        <ul className="mt-10 flex flex-wrap gap-3 sm:gap-4">
          {whatWeBuild.items.map((item) => (
            <li key={item}>
              <span className="glass glass-hover inline-flex min-h-11 items-center rounded-full px-6 py-3 font-semibold">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* The Zen Model */}
      <section
        aria-labelledby="zen-model-heading"
        className="scroll-reveal mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24"
      >
        <SectionHeading
          id="zen-model-heading"
          eyebrow="How it works"
          title={zenModel.heading}
        />
        <ol className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-4">
          {zenModel.steps.map((step, index) => (
            <li key={step} className="flex items-center gap-3">
              <span className="glass inline-flex min-h-11 items-center gap-3 rounded-full px-5 py-2.5">
                <span
                  aria-hidden="true"
                  className="font-display text-sm font-bold text-accent-terracotta"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="font-semibold">{step}</span>
              </span>
              {index < zenModel.steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="font-display text-2xl text-accent-terracotta"
                >
                  →
                </span>
              )}
            </li>
          ))}
        </ol>
        <blockquote className="mt-10 max-w-3xl font-display text-2xl/9 font-medium text-balance sm:text-3xl/10">
          “{zenModel.tagline}”
        </blockquote>
        <GlassCard className="mt-12 p-2 sm:p-3">
          <Image
            src={zenModel.image.src}
            alt={zenModel.image.alt}
            width={zenModel.image.width}
            height={zenModel.image.height}
            className="h-auto w-full rounded-2xl"
          />
        </GlassCard>
      </section>

      {/* Aims to Achieve by 2030 */}
      <section
        aria-labelledby="goals-heading"
        className="scroll-reveal mx-auto max-w-6xl px-4 py-16 pb-8 sm:px-6 lg:py-24 lg:pb-12"
      >
        <SectionHeading
          id="goals-heading"
          eyebrow="Our commitment"
          title={goals2030.heading}
          align="center"
        />
        <ul className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {goals2030.stats.map((stat, index) => (
            <li key={stat.label}>
              <GlassCard
                lift
                className={`h-full p-6 sm:p-8 ${index % 2 === 1 ? 'lg:mt-8' : ''}`.trim()}
              >
                <StatCounter
                  value={stat.value}
                  label={stat.label}
                  accent={index % 2 === 0 ? 'sage' : 'terracotta'}
                />
              </GlassCard>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
