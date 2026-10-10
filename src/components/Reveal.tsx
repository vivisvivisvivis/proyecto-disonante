// Plain wrapper: sections no longer fade in, so all text is visible as soon as the page loads.
// Kept so existing pages keep their markup.
interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}

export default function Reveal({ children, className }: RevealProps) {
  return <div className={className}>{children}</div>;
}
