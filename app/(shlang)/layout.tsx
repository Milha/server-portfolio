// Dummy layout for route group (novigrup)
import ResponsiveNav from "@/component/Home/Navbar/ResponsiveNav";
import React from "react";
import "../globals.css";


export default function NovigrupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <ResponsiveNav />
      <section>{children}</section>
    </div>
  );
}
