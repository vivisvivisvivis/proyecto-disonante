import Link from "next/link";
import KineticText from "@/components/motion/KineticText";

interface Crumb {
  label: string;
  href: string;
}

interface PageHeroProps {
  label: string;
  title: string;
  description?: string;
  breadcrumbs?: Crumb[];
}

export default function PageHero({ label, title, description, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative bg-cream pt-12 pb-14 md:pt-20 md:pb-20 px-6 overflow-hidden border-b border-line">
      <div className="max-w-[72rem] mx-auto">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-5 flex items-center gap-1.5 flex-wrap">
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.href} className="flex items-center gap-1.5">
                {i > 0 && <span className="text-muted text-xs" aria-hidden>/</span>}
                <Link
                  href={crumb.href}
                  className="text-xs text-muted hover:text-rust transition-colors"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {crumb.label}
                </Link>
              </span>
            ))}
          </nav>
        )}
        <p className="font-ui text-sm font-semibold text-rust">{label}</p>
        <KineticText text={title} as="h1" spread={40} className="page-title mt-5" />
        {description && (
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-pretty" style={{ lineHeight: 1.6 }}>
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
