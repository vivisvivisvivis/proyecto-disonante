// Kept as a plain wrapper so existing pages keep their markup. Entrance motion is now
// reserved for a few deliberate moments (kinetic headings, the pinned stage, the manifesto)
// instead of fading in every section.
interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}

export default function Reveal({ children, className }: RevealProps) {
  return <div className={className}>{children}</div>;
}
