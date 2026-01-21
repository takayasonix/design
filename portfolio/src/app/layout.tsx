import type { Metadata } from "next";
import { Noto_Sans_JP, Lato } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const ogImage = "/takayaso_visual_rectangle.jpg";

export const metadata: Metadata = {
  title: "Takaya Onishi - takayaso",
  description: "背が小さくて服が大きいプロダクトマネージャー見習いです。 好きな言葉は「サバイブ」。ネプチューンの名倉潤が11親等の親戚。",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Takaya Onishi - takayaso",
    description:
      "背が小さくて服が大きいプロダクトマネージャー見習いです。 好きな言葉は「サバイブ」。ネプチューンの名倉潤が11親等の親戚。",
    url: "/",
    siteName: "Takaya Onishi - takayaso",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Takaya Onishi - takayaso",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Takaya Onishi - takayaso",
    description:
      "背が小さくて服が大きいプロダクトマネージャー見習いです。 好きな言葉は「サバイブ」。ネプチューンの名倉潤が11親等の親戚。",
    images: [ogImage],
  },
  icons: { 
    icon: [
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" }
    ]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} ${lato.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
