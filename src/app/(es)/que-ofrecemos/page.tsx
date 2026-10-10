import type { Metadata } from "next";
import ServicesPage, { servicesMeta } from "@/components/ServicesPage";
import { esAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  ...servicesMeta.es,
  alternates: esAlternates("/que-ofrecemos"),
};

export default function QueOfrecemosPage() {
  return <ServicesPage lang="es" />;
}
