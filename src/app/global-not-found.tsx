import type { Metadata } from "next";
import "./globals.css";
import { fontVariables } from "@/lib/fonts";
import SiteShell from "@/components/SiteShell";
import NotFound from "./(es)/not-found";

// Unmatched URLs bypass both root layouts, so this page renders its own <html>.
export const metadata: Metadata = {
  title: "Página no encontrada | Proyecto Disonante",
};

export default function GlobalNotFound() {
  return (
    <html lang="es" className={`${fontVariables} h-full`}>
      <body className="min-h-full flex flex-col">
        <SiteShell lang="es">
          <NotFound />
        </SiteShell>
      </body>
    </html>
  );
}
