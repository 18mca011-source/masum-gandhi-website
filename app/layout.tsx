import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://masumgandhi.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Masum Gandhi Podcast",
    template: "%s | Masum Gandhi Podcast",
  },
  description:
    "India's first trigger-question based podcast with 90+ conversations featuring founders, healthcare experts, creators, and industry leaders across India.",
  keywords: [
    "Masum Gandhi",
    "Masum Gandhi Podcast",
    "trigger question podcast",
    "Indian podcast",
    "business podcast India",
    "founder interviews",
    "be a guest on podcast",
    "podcast Ahmedabad",
  ],
  authors: [{ name: "Masum Gandhi" }],
  creator: "Masum Gandhi",
  publisher: "Masum Gandhi Podcast",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Masum Gandhi Podcast",
    title: "Masum Gandhi Podcast",
    description:
      "India's first trigger-question based podcast with 90+ conversations featuring founders, healthcare experts, creators, and industry leaders across India.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Masum Gandhi Podcast",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Masum Gandhi Podcast",
    description:
      "India's first trigger-question based podcast with 90+ conversations featuring founders, healthcare experts, creators, and industry leaders across India.",
    images: ["/opengraph-image"],
    creator: "@masum_gandhi",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ scrollBehavior: "smooth" }}>
      <body className="font-body antialiased min-h-screen flex flex-col bg-[#101010] overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "PodcastSeries",
              name: "Masum Gandhi Podcast",
              url: siteUrl,
              description:
                "India's first trigger-question based podcast with 90+ conversations featuring founders, healthcare experts, creators, and industry leaders across India.",
              inLanguage: "en",
              webFeed: "https://www.youtube.com/@masumngandhi",
              sameAs: [
                "https://www.youtube.com/@masumngandhi",
                "https://www.instagram.com/masumgandhi_/",
                "https://in.linkedin.com/in/masumgandhi",
                "https://x.com/masum_gandhi",
                "https://open.spotify.com/show/20CTgx38209p042nwCRyS8",
              ],
              author: {
                "@type": "Person",
                name: "Masum Gandhi",
              },
              publisher: {
                "@type": "Organization",
                name: "Masum Gandhi Podcast",
                url: siteUrl,
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
