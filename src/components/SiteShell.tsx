import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import MotionProvider from "@/components/MotionProvider";
import BackToTop from "@/components/BackToTop";

export default function SiteShell({ lang, children }: { lang: "es" | "en"; children: React.ReactNode }) {
  return (
    <>
      <a href="#main" className="skip-link">
        {lang === "en" ? "Skip to content" : "Saltar al contenido"}
      </a>
      <MotionProvider>
        <SmoothScrollProvider>
          <div className="flex flex-col flex-1">{children}</div>
          <BackToTop lang={lang} />
        </SmoothScrollProvider>
      </MotionProvider>
    </>
  );
}
