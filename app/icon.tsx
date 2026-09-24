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
          background: "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "serif",
          fontSize: 38,
          fontWeight: 900,
          color: "#E8151B",
          letterSpacing: 2,
        }}
      >
        MG
      </div>
    ),
    { ...size }
  );
}
