import Image from 'next/image';
import GlassCard from '@/components/GlassCard';
import type { ProductCategory } from '@/content/zen-content';

interface CategoryCardProps {
  category: ProductCategory;
  className?: string;
}

export default function CategoryCard({
  category,
  className = '',
}: CategoryCardProps) {
  const { name, tagline, items, image } = category;
  return (
    <GlassCard as="article" lift className={`overflow-hidden ${className}`.trim()}>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className="h-56 w-full object-cover sm:h-64"
      />
      <div className="p-6 sm:p-8">
        <h3 className="font-display text-2xl font-semibold">{name}</h3>
        <p className="mt-2 text-sm font-semibold text-accent-sage-deep italic">
          {tagline}
        </p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {items.map((item) => (
            <li
              key={item}
              className="rounded-full border border-[var(--glass-border)] bg-[var(--glass-surface-strong)] px-3 py-1.5 text-sm"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </GlassCard>
  );
}
