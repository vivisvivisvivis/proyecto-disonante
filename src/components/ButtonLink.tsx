import Link from "next/link";

const variants = {
  primary: "bg-terracotta text-white hover:bg-terracotta-dark",
  outline: "border-2 border-navy text-navy hover:bg-navy hover:text-white",
  light: "bg-cream text-navy hover:bg-white",
  navy: "bg-navy text-white hover:bg-navy-dark",
};

/** Button-styled link. On hover the label rolls up and is replaced by a copy of itself. */
export default function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: string;
  variant?: keyof typeof variants;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`btn-roll group inline-flex justify-center items-center px-8 py-3.5 rounded font-ui font-semibold text-sm tracking-wide transition-colors duration-300 ${variants[variant]} ${className}`}
    >
      <span className="btn-roll-clip" data-text={children}>
        <span className="btn-roll-label">{children}</span>
      </span>
    </Link>
  );
}
