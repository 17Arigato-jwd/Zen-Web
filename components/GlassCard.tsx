import type { ReactNode } from 'react';

type GlassTag = 'div' | 'section' | 'article' | 'aside' | 'figure';

interface GlassCardProps {
  children: ReactNode;
  /** Semantic element to render — prefer article/section/aside over div where it fits. */
  as?: GlassTag;
  /** Subtle hover lift + surface brightening for interactive cards. */
  lift?: boolean;
  className?: string;
}

export default function GlassCard({
  children,
  as: Tag = 'div',
  lift = false,
  className = '',
}: GlassCardProps) {
  const liftClasses = lift ? ' glass-hover hover:-translate-y-1' : '';
  return (
    <Tag className={`glass rounded-3xl${liftClasses} ${className}`.trim()}>
      {children}
    </Tag>
  );
}
