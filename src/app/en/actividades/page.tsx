import type { Metadata } from "next";
import ActivitiesPage, { activitiesMeta } from "@/components/ActivitiesPage";
import { enAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  ...activitiesMeta.en,
  alternates: enAlternates("/actividades"),
};

export default function ActividadesEnPage() {
  return <ActivitiesPage lang="en" />;
}
