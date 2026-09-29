export default function GeometricAccent({
  color = "#1B3A5C",
  opacity = 0.04,
  size = 400,
  className = "",
}: {
  color?: string;
  opacity?: number;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size * 0.85}
      viewBox="0 0 120 102"
      fill="none"
      className={`pointer-events-none select-none ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      {/* Primary bubble */}
      <rect x="0" y="0" width="80" height="60" rx="12" fill={color} />
      {/* Tail */}
      <path d="M14 60 L6 76 L28 64" fill={color} />
      {/* Dots */}
      <circle cx="22" cy="30" r="5" fill="white" />
      <circle cx="40" cy="30" r="5" fill="white" />
      <circle cx="58" cy="30" r="5" fill="white" />
      {/* Secondary bubble (offset, smaller) */}
      <rect x="38" y="30" width="82" height="56" rx="12" fill={color} />
      <path d="M104 86 L116 100 L98 88" fill={color} />
    </svg>
  );
}
