import type { Metadata } from "next";
import { esAlternates } from "@/lib/seo";
import HomePage from "@/components/HomePage";

export const metadata: Metadata = {
  title: { absolute: "Proyecto Disonante: deliberación, evidencia y pluralismo" },
  description:
    "Fortalecemos el espacio público a través de la deliberación racional, el uso de evidencia y el pluralismo.",
  alternates: esAlternates("/"),
};

export default function Page() {
  return <HomePage lang="es" />;
}
