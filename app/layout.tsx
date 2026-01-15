import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ImagePreloader } from "@/app/components/ImagePreloader";
import { PUBLIC_IMAGES } from "@/app/lib/publicImages";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hola :)",
  description: "Hecho en 3 noches de insomnio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical images */}
        {PUBLIC_IMAGES.slice(0, 2).map((imageSrc) => (
          <link
            key={imageSrc}
            rel="preload"
            as="image"
            href={imageSrc}
            type="image/jpeg"
          />
        ))}
        {/* Prefetch remaining images */}
        {PUBLIC_IMAGES.slice(2).map((imageSrc) => (
          <link
            key={imageSrc}
            rel="prefetch"
            as="image"
            href={imageSrc}
            type="image/jpeg"
          />
        ))}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ImagePreloader />
        {children}
      </body>
    </html>
  );
}
