// Dummy layout for route group (novigrup)
import React from "react";

export default function NovigrupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        border: "2px solid orange",
        padding: "2rem",
        background: "#fffbe6",
      }}
    >
      <header>
        <h2 style={{ color: "orange" }}>(novigrup) Route Group Layout</h2>
      </header>
      <section>{children}</section>
      <footer style={{ marginTop: "2rem", color: "#b36b00" }}>
        Dummy footer for novigrup
      </footer>
    </div>
  );
}
