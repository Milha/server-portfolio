// Dummy layout for route group (novigrup)
import ResponsiveNav from "@/component/Home/Navbar/ResponsiveNav";
import React from "react";
import "../globals.css";
import Footer from "@/component/Home/Footer/Footer";
import FooterSh from "@/component/HomeSh/FooterSh/FooterSh";

import { Sora } from "next/font/google";
import ScrollToTop from "@/component/Helper/ScrollToTop";

const font = Sora({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function NovigrupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`custom-scrollbar ${font.className} antialiased`}>
      <ResponsiveNav />
      <section>{children}</section>
      <FooterSh />
      <ScrollToTop />
    </div>
  );
}
