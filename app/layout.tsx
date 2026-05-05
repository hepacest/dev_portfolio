import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  metadataBase: new URL("https://hepac.dev"),
  title: {
    default: "Helen Patricia Acero Castro | Backend Developer",
    template: "%s | HEPAC",
  },
  description:
    "Portafolio profesional de Helen Patricia Acero Castro, desarrolladora enfocada en Java, Spring, frontend moderno e integracion de IA aplicada al desarrollo.",
  keywords: [
    "Helen Patricia Acero Castro",
    "HEPAC",
    "Backend Developer",
    "Java",
    "Spring",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Portafolio",
    "Ingeniera de Sistemas",
  ],
  authors: [{ name: "Helen Patricia Acero Castro" }],
  creator: "Helen Patricia Acero Castro",
  publisher: "Helen Patricia Acero Castro",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "HEPAC Portfolio",
    title: "Helen Patricia Acero Castro | Backend Developer",
    description:
      "Portafolio profesional con proyectos de backend, frontend e integracion de IA aplicada al desarrollo.",
    locale: "es_CO",
  },
  twitter: {
    card: "summary_large_image",
    title: "Helen Patricia Acero Castro | Backend Developer",
    description:
      "Portafolio profesional con proyectos de backend, frontend e integracion de IA aplicada al desarrollo.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
