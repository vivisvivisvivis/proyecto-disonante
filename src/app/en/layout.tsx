import type { Metadata } from "next";
import "../globals.css";
import { fontVariables } from "@/lib/fonts";
import SiteShell from "@/components/SiteShell";

const description =
  "Strengthening public space through rational deliberation, the use of evidence, and pluralism.";

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
    url: "https://proyectodisonante.org/en",
    siteName: "Proyecto Disonante",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Proyecto Disonante",
    description,
  },
  alternates: {
    types: { "application/rss+xml": "https://proyectodisonante.org/en/feed.xml" },
  },
};

export default function EnglishRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fontVariables} h-full`}>
      <body className="min-h-full flex flex-col">
        <SiteShell lang="en">{children}</SiteShell>
      </body>
    </html>
  );
}
