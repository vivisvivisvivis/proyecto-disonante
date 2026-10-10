import type { Metadata } from "next";
import ServicesPage, { servicesMeta } from "@/components/ServicesPage";
import { enAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  ...servicesMeta.en,
  alternates: enAlternates("/que-ofrecemos"),
};

export default function QueOfrecemosEnPage() {
  return <ServicesPage lang="en" />;
}
