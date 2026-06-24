import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#101010",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 25% 25%, rgba(250,204,21,0.18), transparent 50%), radial-gradient(circle at 75% 75%, rgba(147,51,234,0.18), transparent 50%)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            marginBottom: 24,
          }}
        >
          <div
            style={{
              width: 90,
              height: 90,
              borderRadius: 999,
              background: "rgba(255,255,255,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 48,
            }}
          >
            🎙️
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 64, fontWeight: 700, color: "#facc15" }}>
              Masum Gandhi
            </div>
            <div style={{ fontSize: 32, color: "#ffffff", letterSpacing: 4 }}>
              PODCAST
            </div>
          </div>
        </div>
        <div
          style={{
            fontSize: 28,
            color: "rgba(255,255,255,0.7)",
            maxWidth: 900,
            textAlign: "center",
          }}
        >
          India&apos;s first trigger-question based podcast · 90+ conversations · 52k+ community
        </div>
      </div>
    ),
    { ...size }
  );
}
