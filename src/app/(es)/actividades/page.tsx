import type { Metadata } from "next";
import ActivitiesPage, { activitiesMeta } from "@/components/ActivitiesPage";
import { esAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  ...activitiesMeta.es,
  alternates: esAlternates("/actividades"),
};

export default function ActividadesPage() {
  return <ActivitiesPage lang="es" />;
}
