import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  weight: ["700"],
  subsets: ['latin'],
  variable: "--font-playfair",
  display: "swap",
});

const lato = Lato({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lato',
});

export const metadata: Metadata = {
  title: "Mirae",
  description: "Beauty Ecommerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${lato.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
