import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Proyecto Disonante",
  description: "Fortalecemos el espacio público a través de la deliberación racional, el uso de evidencia y el pluralismo.",
  openGraph: {
    title: "Proyecto Disonante",
    description: "Fortalecemos el espacio público a través de la deliberación racional, el uso de evidencia y el pluralismo.",
    url: "https://proyectodisonante.org",
    siteName: "Proyecto Disonante",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
