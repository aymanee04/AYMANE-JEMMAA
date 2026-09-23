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
  title: "Aymane Jemmaa dev",
  description: "Aymane Jemmaa's personal website and portfolio, showcasing his work, projects, and skills as a full stack developer",
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
