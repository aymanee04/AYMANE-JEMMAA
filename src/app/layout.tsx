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
  metadataBase: new URL("https://aymane-jemmaa.vercel.app"),

  title: {
    default: "Aymane Jemmaa | Full-Stack Web Developer",
    template: "%s | Aymane Jemmaa",
  },

  description:
      "Aymane Jemmaa is a Full-Stack Web Developer from Casablanca, Morocco, specializing in Java Spring Boot, Angular, React, and Next.js. Explore his projects, experience, and technical skills.",

  keywords: [
    "Aymane Jemmaa",
    "Aymane Jemmaa developer",
    "Aymane Jemmaa portfolio",
    "Full-Stack Developer Morocco",
    "Full-Stack Developer Casablanca",
    "Java Spring Boot Developer",
    "Angular Developer",
    "React Developer",
    "Next.js Developer",
  ],

  authors: [
    {
      name: "Aymane Jemmaa",
      url: "https://aymane-jemmaa.vercel.app",
    },
  ],

  creator: "Aymane Jemmaa",

  alternates: {
    canonical: "https://aymane-jemmaa.vercel.app",
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

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aymane-jemmaa.vercel.app",
    siteName: "Aymane Jemmaa",
    title: "Aymane Jemmaa | Full-Stack Web Developer",
    description:
        "Portfolio of Aymane Jemmaa, a Full-Stack Web Developer specializing in Java Spring Boot, Angular, React, and Next.js.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Aymane Jemmaa | Full-Stack Web Developer",
    description:
        "Portfolio of Aymane Jemmaa, Full-Stack Web Developer specializing in Java Spring Boot, Angular, React, and Next.js.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
      <html
          lang="en"
          className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
      <body className="bg-dark-900 text-gray-300 font-sans antialiased selection:bg-primary selection:text-white">
      {children}
      </body>
      </html>
  );
}