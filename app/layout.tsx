import type { Metadata } from "next";
import { Saira, Gowun_Batang } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import localFont from "next/font/local";
import Footer from "@/components/Footer";
const saira = Saira({ subsets: ["latin"], variable: "--font-saira" });

const gowunBatang = Gowun_Batang({
  subsets: ["latin"],
  variable: "--font-gowun-batang",
  weight: "400",
});

export const metadata: Metadata = {
  title: "와이스펜 어학원",
  description:
    "Wisepen는 비판적 읽기, 문법 기술, 창의적 에세이 작문을 마스터하는 따뜻하고 효과적인 학습 환경을 제공합니다. 각 학생의 요구에 맞춘 맞춤형 심층 교육으로 영어 실력을 향상시키세요.",
  keywords: [
    "Wisepen",
    "영어 학습",
    "비판적 읽기",
    "문법 기술",
    "에세이 작성",
    "맞춤형 교육",
    "효과적인 학습",
    "영어 교육 과정",
    "언어 교육",
    "체계적인 학습",
    "학생 성공",
    "글로벌 교육",
    "영어 학원",
    "영어 교육",
    "영어 교육 과정",
    "영어 교육 서비스",
    "영어 교육 전문기관",
  ],
  authors: [{ name: "Arnold Chin" }],
  openGraph: {
    images: "https://wisepenenglish.com/handsup.webp",
    type: "website",
    url: `https://wisepenenglish.com`,
    title: `와이스펜 어학원`,
    description: `Wisepen는 비판적 읽기, 문법 기술, 창의적 에세이 작문을 마스터하는 따뜻하고 효과적인 학습 환경을 제공합니다. 각 학생의 요구에 맞춘 맞춤형 심층 교육으로 영어 실력을 향상시키세요.`,
  },
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    "naver-site-verification": "651f06aa7eafc86cc5a82989a6dda3df74b12295",
  },
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
          "min-h-screen bg-background font-sans antialiased relative !break-keep",
          gmarketSans.variable,
          saira.variable,
          gowunBatang.variable
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
