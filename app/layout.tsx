import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://paso656.com"),

  title: {
    default: "paso656 — Ciudad Juárez",
    template: "%s | paso656",
  },

  description:
    "Opinión, ciudad y política desde Ciudad Juárez.",

  openGraph: {
    siteName: "paso656",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
