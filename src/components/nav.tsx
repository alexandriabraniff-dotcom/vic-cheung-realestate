"use client";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const links = ["About", "Services", "Testimonials", "Contact"];

  return (
    <nav style={{
      position: "fixed",
      top: "37px",
      left: 0,
      right: 0,
      zIndex: 1000,
      background: "rgba(250,250,248,0.95)",
      backdropFilter: "blur(8px)",
      borderBottom: "1px solid #E0DDD8",
    }}>
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "0 32px",
        height: 72,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        {/* Logo */}
        <div>
          <div style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: 20, fontWeight: 500, color: "#0B1628", letterSpacing: "0.05em" }}>
            VIC CHEUNG
          </div>
          <div style={{ fontSize: 10, color: "#C9A96E", letterSpacing: "0.18em", fontWeight: 500, marginTop: 1 }}>
            REALTOR® | VANCOUVER
          </div>
        </div>

        {/* Desktop links */}
        <div style={{ display: "flex", gap: 40, alignItems: "center" }}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{
              fontSize: 12,
              letterSpacing: "0.14em",
              color: "#0D1117",
              textDecoration: "none",
              fontWeight: 500,
              transition: "color 0.2s",
            }}
            onMouseOver={e => (e.currentTarget.style.color = "#C9A96E")}
            onMouseOut={e => (e.currentTarget.style.color = "#0D1117")}
            >
              {l.toUpperCase()}
            </a>
          ))}
          <a href="#contact" style={{
            background: "#0B1628",
            color: "#C9A96E",
            padding: "10px 24px",
            fontSize: 11,
            letterSpacing: "0.14em",
            fontWeight: 600,
            textDecoration: "none",
            transition: "background 0.2s",
            display: "inline-block",
          }}
          onMouseOver={e => (e.currentTarget.style.background = "#C9A96E") && (e.currentTarget.style.color = "#0B1628")}
          onMouseOut={e => { e.currentTarget.style.background = "#0B1628"; e.currentTarget.style.color = "#C9A96E"; }}
          >
            GET IN TOUCH
          </a>
        </div>
      </div>
    </nav>
  );
}
