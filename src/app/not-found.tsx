import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar lang="es" />
      <main className="min-h-[80vh] relative flex flex-col items-center justify-center px-6 overflow-hidden bg-[#EBD7BE]">
        {/* Watermark 404 */}
        <span
          aria-hidden
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center select-none pointer-events-none font-extrabold text-[#1B3A5C] leading-none"
          style={{
            fontSize: "clamp(8rem, 32vw, 22rem)",
            opacity: 0.04,
            letterSpacing: "-0.05em",
            fontFamily: "var(--font-jakarta)",
          }}
        >
          404
        </span>

        <div className="relative z-10 text-center flex flex-col items-center gap-6 max-w-md">
          <span className="label text-[#C0442C]">Página no encontrada</span>
          <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}>
            Esta página no existe
          </h1>
          <p style={{ color: "#5A6A7A", fontFamily: "var(--font-source)" }}>
            Puede que el enlace esté roto o que la página haya sido movida.
          </p>
          <div className="flex gap-4 mt-2 flex-wrap justify-center">
            <Link
              href="/"
              className="bg-[#1B3A5C] text-white px-9 py-3.5 rounded font-semibold hover:bg-[#152d47] transition-colors text-sm tracking-wide"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Volver al inicio
            </Link>
            <Link
              href="/contacto"
              className="border-2 border-[#1B3A5C] text-[#1B3A5C] px-9 py-3.5 rounded font-semibold hover:bg-[#1B3A5C] hover:text-white transition-all text-sm tracking-wide"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Contacto
            </Link>
          </div>
        </div>
      </main>
      <Footer lang="es" />
    </>
  );
}
