import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Lora } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import CustomCursor from "@/components/CustomCursor";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
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
    <html lang="es" className={`${jakarta.variable} ${lora.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        <SmoothScrollProvider>
          <CustomCursor />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
