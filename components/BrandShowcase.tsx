import Image from 'next/image';
import GlassCard from '@/components/GlassCard';
import ProductEmbedCard from '@/components/ProductEmbedCard';
import SectionHeading from '@/components/SectionHeading';
import { shopContent } from '@/content/zen-content';

export default function BrandShowcase() {
  const { eyebrow, heading, intro, disclosure, brands } = shopContent;

  return (
    <section
      aria-labelledby="shop-heading"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24"
    >
      <div className="scroll-reveal">
        <SectionHeading
          id="shop-heading"
          eyebrow={eyebrow}
          title={heading}
          intro={intro}
        />
        <p className="mt-4 max-w-prose text-sm text-text-soft">{disclosure}</p>
      </div>

      <div className="mt-12 space-y-10">
        {brands.map((brand) => (
          <GlassCard
            as="article"
            key={brand.id}
            className="scroll-reveal p-6 sm:p-10"
          >
            <div className="flex flex-wrap items-center gap-5">
              <Image
                src={brand.logo.src}
                alt={brand.logo.alt}
                width={brand.logo.width}
                height={brand.logo.height}
                className="h-16 w-16 rounded-2xl object-cover sm:h-20 sm:w-20"
              />
              <div className="min-w-0">
                <h3 className="font-display text-2xl font-semibold sm:text-3xl">
                  {brand.name}
                </h3>
                <p className="mt-1 text-text-soft">{brand.blurb}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {brand.platforms.map((platform) => (
                    <li key={platform} className="badge">
                      {platform}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {brand.listings.map((listing) => (
                <li key={`${listing.platform}-${listing.url}`}>
                  <ProductEmbedCard listing={listing} />
                </li>
              ))}
            </ul>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
