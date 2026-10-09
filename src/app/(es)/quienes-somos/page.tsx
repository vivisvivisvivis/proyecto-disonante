import type { Metadata } from "next";
import TeamPage from "@/components/TeamPage";
import { esAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Quiénes somos",
  description: "Proyecto Disonante está liderado por Carolina Fernández Blanco y Hernán Charosky.",
  alternates: esAlternates("/quienes-somos"),
};

export default function QuienesSomosPage() {
  return <TeamPage lang="es" />;
}
