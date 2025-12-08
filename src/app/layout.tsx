// src/app/layout.tsx
import "@/styles/globals.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import ThemeRegistry from "@/components/layout/themeRegistry";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "ctrl/shift 2026 | Southern Italy's Gateway To The Future",
  description: "ctrl/shift 2026 - Southern Italy's Gateway To The Future",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

// Variable font from Fontshare
const switzer = localFont({
  src: "../fonts/Switzer-Variable.ttf",
  // range depends on the font, 100–900 is typical
  weight: "100 900",
  style: "normal",
  display: "swap",
  variable: "--font-switzer",
});

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={switzer.variable}>
      <body>
        <ThemeRegistry>
          <Header theme="dark" />
          {children}
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
