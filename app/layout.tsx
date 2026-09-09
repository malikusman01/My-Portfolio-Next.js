import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/layout/Footer";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://usmanaliawan.dev"),
  title: "Usman Ali Awan — Software Engineer | Full-Stack & Systems",
  description:
    "Software Engineer building full-stack applications, APIs, business systems, and technology solutions across software and IT infrastructure.",
  openGraph: {
    title: "Usman Ali Awan — Software Engineer | Full-Stack & Systems",
    description:
      "Software Engineer building full-stack applications, APIs, business systems, and technology solutions across software and IT infrastructure.",
    url: "https://usmanaliawan.dev",
    siteName: "Usman Ali Awan",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Usman Ali Awan — Software Engineer | Full-Stack & Systems",
    description:
      "Software Engineer building full-stack applications, APIs, business systems, and technology solutions across software and IT infrastructure.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-accent focus:text-bg focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to content
        </a>
        <Navigation />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
