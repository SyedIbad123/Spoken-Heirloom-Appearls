import type { Metadata } from "next";
import { Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { Seaweed_Script } from "next/font/google";
import Navbar from "@/components/shared/Navbar";
import ConditionalFooter from "@/components/shared/ConditionalFooter";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const seaweed = Seaweed_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-seaweed",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Spoken Heirloom | Stories You Can Hear, Memories You Can Hold",
  description:
    "Transform your cherished family stories and voices into beautifully crafted keepsake books. Preserve memories that last forever.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${seaweed.variable}  antialiased bg-primary overflow-x-hidden max-w-[100vw]`}
      >
        <Navbar />
        <main>{children}</main>
        <ConditionalFooter />
      </body>
    </html>
  );
}
