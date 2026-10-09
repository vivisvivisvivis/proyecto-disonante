import { ImageResponse } from "next/og";

export const alt = "Proyecto Disonante";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1B3A5C",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: "80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Watermark */}
        <div
          style={{
            position: "absolute",
            top: -20,
            right: 40,
            fontSize: 280,
            fontWeight: 900,
            color: "white",
            opacity: 0.04,
            letterSpacing: "-0.05em",
            lineHeight: 1,
          }}
        >
          PD
        </div>

        {/* Terracotta accent line */}
        <div style={{ width: 72, height: 4, background: "#C0442C", marginBottom: 28 }} />

        {/* Label */}
        <div
          style={{
            color: "#C0442C",
            fontSize: 17,
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: 18,
          }}
        >
          Deliberación · Evidencia · Pluralismo
        </div>

        {/* Title */}
        <div
          style={{
            color: "#EBD7BE",
            fontSize: 76,
            fontWeight: 800,
            letterSpacing: "-0.025em",
            lineHeight: 1.05,
            marginBottom: 22,
          }}
        >
          Proyecto Disonante
        </div>

        {/* Tagline */}
        <div
          style={{
            color: "rgba(147, 197, 253, 0.75)",
            fontSize: 22,
            lineHeight: 1.55,
            maxWidth: 680,
          }}
        >
          Fortalecemos el espacio público a través de la deliberación racional, el uso de evidencia y el pluralismo.
        </div>
      </div>
    ),
    { ...size }
  );
}
