import Image from 'next/image';
import GlassCard from '@/components/GlassCard';
import ProductEmbedCard from '@/components/ProductEmbedCard';
import SectionHeading from '@/components/SectionHeading';
import { shopContent } from '@/content/zen-content';

export default function BrandShowcase() {
  const { eyebrow, heading, intro, disclosure, brands, catalogue } =
    shopContent;

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
              {/* Supplied logos have baked-in backgrounds — a white plate keeps them intentional over glass. */}
              <span className="inline-flex shrink-0 items-center rounded-2xl bg-white p-2 shadow-[0_4px_16px_rgba(36,28,18,0.08)]">
                <Image
                  src={brand.logo.src}
                  alt={brand.logo.alt}
                  width={brand.logo.width}
                  height={brand.logo.height}
                  className="h-12 w-auto max-w-40 rounded-lg object-contain sm:h-14 sm:max-w-48"
                />
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-2xl font-semibold sm:text-3xl">
                  {brand.name}
                </h3>
                <p className="mt-1 text-text-soft">{brand.blurb}</p>
                {brand.platforms.length > 0 && (
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {brand.platforms.map((platform) => (
                      <li key={platform} className="badge">
                        {platform}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {brand.listings.length > 0 ? (
              <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {brand.listings.map((listing) => (
                  <li key={`${listing.platform}-${listing.url}`}>
                    <ProductEmbedCard listing={listing} />
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-6 text-sm font-medium text-text-soft">
                Product links coming soon.
              </p>
            )}
          </GlassCard>
        ))}
      </div>

      {/* Product catalogue — client-supplied photography */}
      <div className="scroll-reveal mt-20">
        <h3
          id="catalogue-heading"
          className="font-display text-3xl font-semibold sm:text-4xl"
        >
          {catalogue.heading}
        </h3>
        <p className="mt-3 max-w-prose text-text-soft">{catalogue.intro}</p>
        <ul className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {catalogue.items.map((item, index) => (
            <li
              key={item.name}
              className={index % 4 === 1 || index % 4 === 3 ? 'lg:mt-8' : ''}
            >
              <GlassCard as="figure" lift className="h-full overflow-hidden">
                <div className="zoom-frame overflow-hidden">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    width={item.image.width}
                    height={item.image.height}
                    className="zoom-media h-40 w-full object-cover sm:h-48"
                  />
                </div>
                <figcaption className="p-4 text-sm font-semibold">
                  {item.name}
                </figcaption>
              </GlassCard>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
