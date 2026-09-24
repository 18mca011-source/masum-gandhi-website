import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 64,
          height: 64,
          background: "#0A0A0A",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          fontSize: 32,
          fontWeight: 900,
          color: "#E8151B",
          letterSpacing: 3,
        }}
      >
        MG
      </div>
    ),
    { ...size }
  );
}
