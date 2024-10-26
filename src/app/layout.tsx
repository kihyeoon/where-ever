import type { Metadata } from "next";
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
  description: "Wherever의 홈페이지에 오신 것을 환영합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
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
