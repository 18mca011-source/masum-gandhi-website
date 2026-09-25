import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default async function Icon() {
  const fontData = await fetch(
    "https://fonts.gstatic.com/s/bebasneuepro/v6/CNz9x_HfkLp0Zm8r3FWH-RbcS2OqMFCRVBQKTQ.woff2"
  ).then((res) => res.arrayBuffer()).catch(() => null);

  return new ImageResponse(
    (
      <div
        style={{
          width: 64,
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: fontData ? "Bebas Neue" : "sans-serif",
          fontSize: 36,
          fontWeight: 900,
          color: "#E8151B",
          letterSpacing: 2,
        }}
      >
        MG
      </div>
    ),
    {
      ...size,
      ...(fontData ? {
        fonts: [{ name: "Bebas Neue", data: fontData, style: "normal" }],
      } : {}),
    }
  );
}
