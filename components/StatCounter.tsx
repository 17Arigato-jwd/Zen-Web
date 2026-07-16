interface StatCounterProps {
  /** Display value, e.g. "10,000+". */
  value: string;
  /** What the value counts, e.g. "women entrepreneurs". */
  label: string;
  accent?: 'sage' | 'terracotta';
}

export default function StatCounter({
  value,
  label,
  accent = 'sage',
}: StatCounterProps) {
  return (
    <div className="text-center">
      <p
        className={`font-display text-5xl font-bold sm:text-6xl ${
          accent === 'sage' ? 'text-accent-sage-deep' : 'text-accent-terracotta'
        }`}
      >
        {value}
      </p>
      <p className="mt-3 text-sm font-semibold tracking-wide text-text-soft uppercase">
        {label}
      </p>
    </div>
  );
}
