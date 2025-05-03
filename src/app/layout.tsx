import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ThemeProvider } from "../contexts/theme-context";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "HAN's Blog",
  description: "HAN's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={notoSansKR.className}>
        <ThemeProvider>
          <Header />
          <main className="mt-12">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
