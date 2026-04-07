import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Shlok Chatterjee | Portfolio",
  description: "Senior Creative Developer bridging design and engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Preload the very first sequence frame so the hero appears instantly */}
        <link
          rel="preload"
          as="image"
          href="/sequence-webp/ezgif-frame-001.webp"
          type="image/webp"
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
