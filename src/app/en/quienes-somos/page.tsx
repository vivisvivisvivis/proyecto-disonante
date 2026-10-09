import type { Metadata } from "next";
import TeamPage from "@/components/TeamPage";
import { enAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About us",
  description: "Proyecto Disonante is led by Carolina Fernández Blanco and Hernán Charosky.",
  alternates: enAlternates("/quienes-somos"),
};

export default function QuienesSomosEnPage() {
  return <TeamPage lang="en" />;
}
