import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Masum Gandhi Podcast",
  description:
    "India's first trigger-question based podcast with 90+ conversations featuring founders, healthcare experts, creators, and industry leaders across India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ scrollBehavior: "smooth" }}>
      <body className="font-body antialiased min-h-screen flex flex-col bg-[#101010] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
