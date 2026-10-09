import type { Metadata } from "next";
import { enAlternates } from "@/lib/seo";
import HomePage from "@/components/HomePage";

export const metadata: Metadata = {
  title: { absolute: "Proyecto Disonante: deliberation, evidence and pluralism" },
  description:
    "Strengthening public space through rational deliberation, the use of evidence and pluralism.",
  alternates: enAlternates("/"),
};

export default function Page() {
  return <HomePage lang="en" />;
}
