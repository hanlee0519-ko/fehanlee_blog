import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import getServerTheme from "@/hooks/use-server-dark-mode";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "HAN's Blog",
  description: "HAN's Portfolio",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = await getServerTheme();
  return (
    <html lang="ko" className={theme}>
      <link rel="icon" href="./icon/ico" sizes="any" />
      <body className={notoSansKR.className}>
        <Header />
        <main className="mt-12">{children}</main>
      </body>
    </html>
  );
}
