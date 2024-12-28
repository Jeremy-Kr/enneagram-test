import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "에니어그램 테스트",
    template: "%s | 에니어그램 테스트",
  },
  description: "15개의 질문으로 알아보는 나의 에니어그램 성격 유형 테스트",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
    other: {
      rel: "mask-icon",
      url: "/safari-pinned-tab.svg",
      color: "#6366F1",
    },
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "에니어그램 테스트",
    description: "15개의 질문으로 알아보는 나의 에니어그램 성격 유형 테스트",
    url: "https://your-domain.com",
    siteName: "에니어그램 테스트",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "에니어그램 테스트 미리보기",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "에니어그램 테스트",
    description: "15개의 질문으로 알아보는 나의 에니어그램 성격 유형 테스트",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6389820476496669"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
