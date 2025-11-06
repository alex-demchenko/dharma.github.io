import { DharmaWheel } from "@/components/DharmaWheel";
import { HorizontalLine } from "@/components/HorizontalLine";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.scss";

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
    absolute: "Insight Dharma",
    template: "%s | Insight Dharma",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Page layout to stick footer to the bottom of the page */}
        <div className="min-h-[100dvh] flex flex-col justify-between">
          {/* Up part */}
          <div>
            <header className="mx-auto mb-6 px-1 pt-1 flex items-center gap-2 max-w-[800px]">
              <DharmaWheel />

              <Link href="/" className="text-2xl no-underline!">
                {/* Путь Пробуждающегося Ума */}
                {/* Пробуждающийся Ум */}
                Постижение Дхармы
              </Link>
            </header>
            <div className="mb-10 flex justify-center">
              <HorizontalLine />
            </div>

            <main className="mx-auto px-1 max-w-[800px]">{children}</main>
          </div>

          {/* Footer part */}
          <div>
            <div className="mt-20 flex justify-center">
              <HorizontalLine />
            </div>
            <footer className="mx-auto flex justify-center items-center max-w-[800px] h-[100px]">
              Made by Oleksandr Demchenko. Copyright (C) 2025
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}

