import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Source_Sans_3, Bebas_Neue } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import PageTransition from "@/components/PageTransition";
import CookieBanner from "@/components/CookieBanner";
import BackToTop from "@/components/BackToTop";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://proyectodisonante.org"),
  title: {
    default: "Proyecto Disonante",
    template: "%s | Proyecto Disonante",
  },
  description:
    "Fortalecemos el espacio público a través de la deliberación racional, el uso de evidencia y el pluralismo.",
  openGraph: {
    title: "Proyecto Disonante",
    description:
      "Fortalecemos el espacio público a través de la deliberación racional, el uso de evidencia y el pluralismo.",
    url: "https://proyectodisonante.org",
    siteName: "Proyecto Disonante",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Proyecto Disonante",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Proyecto Disonante",
    description:
      "Fortalecemos el espacio público a través de la deliberación racional, el uso de evidencia y el pluralismo.",
    images: ["/opengraph-image"],
  },
  alternates: {
    types: {
      "application/rss+xml": "https://proyectodisonante.org/feed.xml",
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${jakarta.variable} ${sourceSans.variable} ${bebasNeue.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        <SmoothScrollProvider>
          <PageTransition>{children}</PageTransition>
          <BackToTop />
          <CookieBanner />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
