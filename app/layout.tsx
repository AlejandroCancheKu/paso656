import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/app/components/Header";
import FrontierInfo from "@/app/components/FrontierInfo";
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
    "Noticias, información y análisis desde Ciudad Juárez, Chihuahua.",

  openGraph: {
    siteName: "paso656",
    locale: "es_MX",
    type: "website",
    title: "paso656 — Ciudad Juárez",
    description:
      "Noticias, información y análisis desde Ciudad Juárez, Chihuahua.",
    url: "https://paso656.com",
  },

  twitter: {
    card: "summary_large_image",
    title: "paso656 — Ciudad Juárez",
    description:
      "Noticias, información y análisis desde Ciudad Juárez, Chihuahua.",
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
        <FrontierInfo />
        {children}
        <Footer />
      </body>
    </html>
  );
}