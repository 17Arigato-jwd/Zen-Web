import Image from 'next/image';
import GlassCard from '@/components/GlassCard';
import type { MarketplacePlatform, ProductListing } from '@/content/zen-content';

interface ProductEmbedCardProps {
  listing: ProductListing;
}

const PLATFORM_CTA: Record<MarketplacePlatform, string> = {
  'Amazon.in': 'View on Amazon',
  Meesho: 'View on Meesho',
};

/**
 * Rich link card that reads like a marketplace embed. Amazon.in and Meesho
 * block real iframe embedding (X-Frame-Options), so this opens the live
 * listing on the retailer's site in a new tab instead.
 */
export default function ProductEmbedCard({ listing }: ProductEmbedCardProps) {
  const { title, platform, url, image } = listing;
  return (
    <GlassCard as="article" lift className="flex h-full flex-col overflow-hidden">
      <div className="zoom-frame overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="zoom-media aspect-square w-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span className="badge w-fit">{platform}</span>
        <h4 className="mt-3 font-display text-lg font-semibold">{title}</h4>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary mt-4 self-start text-sm"
        >
          {PLATFORM_CTA[platform]}
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="none"
            className="h-4 w-4"
          >
            <path
              d="M8 4h8v8M16 4l-9 9M13 12v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="sr-only"> — opens {platform} in a new tab</span>
        </a>
      </div>
    </GlassCard>
  );
}
