import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

import ResponsiveNav from "@/component/Home/Navbar/ResponsiveNav";

const font = Sora({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Miki Ivanović Portfolio Website",
  description: "Portfolio website of Miki Ivanović, a software developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <ResponsiveNav />
        {children}
      </body>
    </html>
  );
}
