import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title: "Iftekharul Alam - Full-Stack Developer",
  description: "Passionate Full-Stack Developer specializing in building scalable, high-performance web applications using modern technologies like React, Next.js, Node.js, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} ${oswald.variable} antialiased`}>
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
