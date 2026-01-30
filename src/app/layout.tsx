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
    absolute: "Wheel of Dharma",
    template: "%s | Wheel of Dharma",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased px-2`}
      >
        {/* Page layout to stick footer to the bottom of the page */}
        <div className="min-h-[100dvh] flex flex-col justify-between">
          {/* Up part */}
          <div>
            <header className="mx-auto mb-6 pt-1 flex justify-between items-center gap-2 max-w-[800px]">
              <Link href="/" className="flex items-center gap-2 no-underline!">
                <DharmaWheel />

                <span className="text-2xl">Wheel of Dharma</span>

                {/* TODO слоган? */}
                {/* <div>
                  <div className="text-2xl">Постижение Дхармы</div>
                  <div className="text-sm">
                    Cовременный взгляд на буддийскую практику и осознанность
                  </div>
                </div> */}
              </Link>
              <nav>
                {/* <Link href="/ru/glossary" className="flex items-center gap-2">
                  <ScrollText /> Глоссарий
                </Link> */}
              </nav>
            </header>
            <div className="mb-10 flex justify-center">
              <HorizontalLine />
            </div>

            <main className="mx-auto max-w-[800px]">{children}</main>
          </div>

          {/* Footer part */}
          <div>
            <div className="mt-10 flex justify-center">
              <HorizontalLine />
            </div>
            <footer className="mx-auto flex flex-col justify-center items-center gap-2 max-w-[800px] h-[100px]">
              <div className="flex items-center gap-20">
                <a
                  href={`https://github.com/alex-demchenko/dharma.github.io`}
                  rel={"nofollow"}
                  target="_blank"
                >
                  Edit on Github
                </a>
              </div>
              <div>
                Made by Oleksandr Demchenko. Copyright (C){" "}
                {new Date().getFullYear()}
              </div>
              {/* TODO link to github to propose changes, feedback, or suggestions, or even new articles ! */}
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}

