import type { Metadata } from "next";
import "../globals.css";
import { fontVariables } from "@/lib/fonts";
import SiteShell from "@/components/SiteShell";

const description =
  "Fortalecemos el espacio público a través de la deliberación racional, el uso de evidencia y el pluralismo.";

export const metadata: Metadata = {
  metadataBase: new URL("https://proyectodisonante.org"),
  title: {
    default: "Proyecto Disonante",
    template: "%s | Proyecto Disonante",
  },
  description,
  // OG/Twitter images come from the opengraph-image.tsx file convention.
  openGraph: {
    title: "Proyecto Disonante",
    description,
    url: "https://proyectodisonante.org",
    siteName: "Proyecto Disonante",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Proyecto Disonante",
    description,
  },
  alternates: {
    types: { "application/rss+xml": "https://proyectodisonante.org/feed.xml" },
  },
};

export default function SpanishRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${fontVariables} h-full`}>
      <body className="min-h-full flex flex-col">
        <SiteShell lang="es">{children}</SiteShell>
      </body>
    </html>
  );
}
