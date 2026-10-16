import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TopNav } from "@/components/shared/TopNav";
import { FloatingControls } from "@/components/shared/FloatingControls";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shubham Kumar | Backend & Full-Stack Developer",
  description: "Portfolio of Shubham Kumar - Backend & Full-Stack developer, slayer of slow database queries, and 400+ LeetCode solver.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#050507] text-neutral-100 selection:bg-[#bef264]/30 selection:text-[#bef264]">
        <TopNav />
        <main className="flex-1 w-full flex flex-col">{children}</main>
        <FloatingControls />
      </body>
    </html>
  );
}
