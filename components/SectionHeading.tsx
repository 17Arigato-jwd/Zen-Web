interface SectionHeadingProps {
  title: string;
  /** Small caps label above the title. */
  eyebrow?: string;
  /** Lead paragraph under the title. */
  intro?: string;
  /** Heading id, for aria-labelledby on the parent section. */
  id?: string;
  as?: 'h1' | 'h2';
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  title,
  eyebrow,
  intro,
  id,
  as: Tag = 'h2',
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const isCentered = align === 'center';
  return (
    <div
      className={`max-w-3xl ${isCentered ? 'mx-auto text-center' : ''} ${className}`.trim()}
    >
      {eyebrow && (
        <p className="text-sm font-bold tracking-[0.2em] text-accent-sage-deep uppercase">
          {eyebrow}
        </p>
      )}
      <Tag
        id={id}
        className={`mt-3 font-display font-semibold text-balance ${
          Tag === 'h1' ? 'text-5xl sm:text-6xl' : 'text-4xl sm:text-5xl'
        }`}
      >
        {title}
      </Tag>
      {intro && (
        <p
          className={`mt-5 max-w-prose text-base/7 text-text-soft sm:text-lg/8 ${
            isCentered ? 'mx-auto' : ''
          }`.trim()}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
