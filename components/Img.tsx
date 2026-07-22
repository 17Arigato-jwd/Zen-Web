import Image, { type ImageProps } from 'next/image';
import { asset } from '@/lib/asset';

/**
 * next/image wrapper that runs string `src` through asset() so local
 * `/images/*` paths pick up the GitHub Pages basePath. Use this instead of
 * next/image directly for any image whose src may be a site-root path.
 */
export default function Img({ src, alt, ...props }: ImageProps) {
  return (
    <Image alt={alt} src={typeof src === 'string' ? asset(src) : src} {...props} />
  );
}
