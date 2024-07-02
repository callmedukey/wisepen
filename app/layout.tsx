import type { Metadata } from "next";
import { Saira } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import localFont from "next/font/local";
const saira = Saira({ subsets: ["latin"], variable: "--font-saira" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const gmarketSans = localFont({
  src: [
    {
      path: "./fonts/GmarketSansTTFMedium.ttf",
      weight: "500",
    },
    {
      path: "./fonts/GmarketSansTTFBold.ttf",
      weight: "700",
    },
    {
      path: "./fonts/GmarketSansTTFLight.ttf",
      weight: "300",
    },
  ],
  variable: "--font-gmarket-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased relative",
          gmarketSans.variable,
          saira.variable
        )}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
