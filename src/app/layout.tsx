import type { Metadata, Viewport } from "next";
import { Alata } from "next/font/google";
import localFont from "next/font/local";
import Footer from "@/components/common/footer/footer";
import Header from "@/components/common/header";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  variable: "--font-pretendard",
  weight: "45 920",
});

const alata = Alata({
  subsets: ["latin"],
  variable: "--font-alata",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Wherever",
  description: "어디서나, 어디든지, 웨어에버",
  keywords: [
    "Wherever",
    "웨어에버",
    "마케팅",
    "브랜딩",
    "플레이스마케팅",
    "SNS마케팅",
    "바이럴마케팅",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "WcKj1fhe2hjyG2-rgRTSwPusI7gUiM7GccCe5aJpoU0",
    other: {
      "naver-site-verification": "3e8bfceb82ff06620af4fd3eebb807189a54f772",
    },
  },
  // openGraph
  openGraph: {
    title: "Wherever",
    description: "어디서나, 어디든지, 웨어에버",
    siteName: "Wherever",
    locale: "ko-KR",
    type: "website",
    url: process.env.SITE_URL,
    images: [
      {
        url: `${process.env.SITE_URL}/og.png`,
        width: 1200,
        height: 630,
        alt: "Wherever",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko-KR" className="dark">
      <body
        className={`${pretendard.variable} ${alata.variable} font-[family-name:var(--font-pretendard),var(--font-alata)] antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
