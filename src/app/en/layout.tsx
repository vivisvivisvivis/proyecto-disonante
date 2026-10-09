import type { Metadata } from "next";
import LangAttribute from "@/components/LangAttribute";

export const metadata: Metadata = {
  openGraph: {
    locale: "en_US",
    images: [
      {
        url: "/en/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Proyecto Disonante",
      },
    ],
  },
  twitter: {
    images: ["/en/opengraph-image"],
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LangAttribute lang="en" />
      {children}
    </>
  );
}
