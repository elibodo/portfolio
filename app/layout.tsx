import type { Metadata } from "next";
import "./globals.css";
import { Oxygen } from "next/font/google";
import NavBar from "./components/NavBar";
import BottomNav from "./components/BottomNav";
import { Analytics } from "@vercel/analytics/next";

const oxygen = Oxygen({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Eli's Portfolio",
  description: "Eli's personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body
        className={`${oxygen.className} bg-gradient-to-br from-slate-950 to-slate-800 text-white`}
      >
        <main className="flex min-h-screen flex-col">
          <NavBar />
          <div className="flex-1">{children}</div>
          <BottomNav />
        </main>
        <Analytics />
      </body>
    </html>
  );
}
