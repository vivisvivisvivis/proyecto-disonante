// A continuous row that loops horizontally. Pure CSS: pauses on hover,
// and wraps into a static list when the OS asks to reduce motion.
export default function Marquee({ items, label }: { items: string[]; label: string }) {
  const row = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} className="marquee-row">
      {items.map((p) => (
        <li key={p} className="marquee-item">
          {p}
          <span aria-hidden className="marquee-dot" />
        </li>
      ))}
    </ul>
  );

  return (
    <div className="marquee" aria-label={label} role="region">
      <div className="marquee-track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
