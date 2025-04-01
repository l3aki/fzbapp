import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FZB Emlak - İstanbul'un En İyi Konut Projeleri",
  description: "İstanbul'un en prestijli konut projelerini keşfedin. Modern yaşam alanları ve yatırım fırsatları için FZB Emlak.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}