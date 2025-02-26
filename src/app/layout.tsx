import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import getServerTheme from "@/hooks/use-server-dark-mode";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | HAN Blog",
    default: "HAN Blog",
  },
  description: "HAN's Portfolio",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = await getServerTheme();
  return (
    <html lang="en" className={theme}>
      <body className={roboto.className}>
        <Header />
        <main className="mt-12">{children}</main>
      </body>
    </html>
  );
}
