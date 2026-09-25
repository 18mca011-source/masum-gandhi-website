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
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          fontSize: 34,
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
