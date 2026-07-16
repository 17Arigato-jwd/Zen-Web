'use client';

import { useEffect, useRef, useState } from 'react';

interface StatCounterProps {
  /** Display value, e.g. "10,000+". The leading number is counted up. */
  value: string;
  /** What the value counts, e.g. "women entrepreneurs". */
  label: string;
  accent?: 'sage' | 'terracotta';
}

const numberFormatter = new Intl.NumberFormat('en-US');

/** Split "10,000+" → { prefix: "", target: 10000, suffix: "+" }. */
function parseValue(value: string): {
  prefix: string;
  target: number;
  suffix: string;
} {
  const match = value.match(/^(\D*)([\d,]+)(.*)$/);
  if (!match) return { prefix: value, target: NaN, suffix: '' };
  return {
    prefix: match[1],
    target: Number.parseInt(match[2].replace(/,/g, ''), 10),
    suffix: match[3],
  };
}

export default function StatCounter({
  value,
  label,
  accent = 'sage',
}: StatCounterProps) {
  const { prefix, target, suffix } = parseValue(value);
  const [display, setDisplay] = useState(value);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || Number.isNaN(target)) return;

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    if (prefersReduced) {
      setDisplay(value);
      return;
    }

    let raf = 0;
    let started = false;
    const duration = 1400;

    const run = (start: number) => (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      // easeOutCubic for a decelerating count.
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);
      setDisplay(`${prefix}${numberFormatter.format(current)}${suffix}`);
      if (progress < 1) raf = window.requestAnimationFrame(run(start));
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !started) {
            started = true;
            setDisplay(`${prefix}0${suffix}`);
            raf = window.requestAnimationFrame(run(performance.now()));
            observer.disconnect();
          }
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [prefix, suffix, target, value]);

  return (
    <div className="text-center">
      <p
        ref={ref}
        aria-hidden="true"
        className={`font-display text-5xl font-bold tabular-nums sm:text-6xl ${
          accent === 'sage' ? 'text-accent-sage-deep' : 'text-accent-terracotta'
        }`}
      >
        {display}
      </p>
      <p
        aria-hidden="true"
        className="mt-3 text-sm font-semibold tracking-wide text-text-soft uppercase"
      >
        {label}
      </p>
      <span className="sr-only">
        {value} {label}
      </span>
    </div>
  );
}
