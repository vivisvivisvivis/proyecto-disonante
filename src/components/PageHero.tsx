import Link from "next/link";
import Reveal from "@/components/Reveal";

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
    <section className="relative bg-[#EBD7BE] pt-24 pb-20 px-6 overflow-hidden border-b border-[#D8C9B3]">
      <div className="max-w-5xl mx-auto">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-5 flex items-center gap-1.5 flex-wrap">
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.href} className="flex items-center gap-1.5">
                {i > 0 && <span className="text-[#C8C0B4] text-xs" aria-hidden>/</span>}
                <Link
                  href={crumb.href}
                  className="text-xs text-[#9CA3AF] hover:text-[#C0442C] transition-colors"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {crumb.label}
                </Link>
              </span>
            ))}
          </nav>
        )}
        <Reveal>
          <span className="label text-[#C0442C]">{label}</span>
          <h1 className="mt-4 max-w-3xl">{title}</h1>
          {description && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed" style={{ color: "#5A6A7A", fontFamily: "var(--font-source)" }}>
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
