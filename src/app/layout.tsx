import { Analytics } from "@vercel/analytics/react";
import { Lato } from "next/font/google";
const lato = Lato({ subsets: ["latin"], weight: "400" });
import "./globals.css";
import type { Metadata } from "next";
import { MenuItems } from "@/components/menu-items";
import { TopTools } from "@/components/top-tools";

export const metadata: Metadata = {
  metadataBase: new URL("https://berkerkelesoglu.dev"),
  title: {
    default: "Berker Keleşoğlu",
    template: "%s | Berker Kelesoglu",
  },
  description: "Software Developer and Musician based in Istanbul",
  verification: {
    google: "google-site-verification",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4  "],
    shortcut: ["/apple-touch-icon.png"],
  },
  openGraph: {
    title: "Berker Keleşoğlu",
    description: "Software Developer",
    images: ["/berkerkelesogludev.png"],
    siteName: "Berker Keleşoğlu",
    type: "website",
  },
  twitter: {
    title: "Berker Keleşoğlu",
    description: "Software Developer",
    images: {
      url: "/berkerkelesogludev.png",
      width: 1200,
      height: 630,
      alt: "Berker Keleşoğlu",
      type: "image/png",
    },
    card: "summary_large_image",
    creator: "@berkerkls",
  },
  manifest: `https://berkerkelesoglu.dev/manifest.ts`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={lato.className} suppressHydrationWarning>
      <body className="dark:bg-darkPrimary light:bg-lightPrimary">
        <main className="min-h-screen w-screen">
          <TopTools />
          <div className="lg:flex transition-colors">
            <div className="flex w-screen py-12">{children}</div>
          </div>
        </main>
        <Analytics />
      </body>
    </html>
  );
}
