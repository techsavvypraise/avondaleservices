import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import { Navbar } from "@/components/navigation/Navbar";

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
    default: "Avondale Services & Supplies Limited",
    template: "%s | Avondale Services & Supplies Limited",
  },
  description:
    "Avondale Services & Supplies Limited is a wholly indigenous Nigerian company delivering integrated solutions across infrastructure development, environmental remediation, construction and healthcare-supporting equipment supply.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-white">
        <Navbar />

        <main>{children}</main>
      </body>
    </html>
  );
}