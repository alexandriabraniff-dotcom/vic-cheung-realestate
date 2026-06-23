"use client";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "About", href: "/#about" },
    { label: "Listings", href: "/listings" },
    { label: "Neighbourhoods", href: "/#neighbourhoods" },
    { label: "Testimonials", href: "/#testimonials" },
  ];

  return (
    <nav style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: "transparent",
    }}>
      {/* DESIGNER CREDIT BANNER — remove after client payment */}
      <div className="designer-banner">
        Website designed by Alexandria Braniff — hello@alexandriabraniff.com
      </div>
      <div style={{
        maxWidth: 1280,
        margin: "0 auto",
        padding: "0 32px",
        height: 68,
        display: "flex",
        alignItems: "center",
        position: "relative",
      }}>
        {/* Logo — far left */}
        <a href="/" style={{ textDecoration: "none", flexShrink: 0 }}>
          <div style={{
            fontFamily: "var(--font-display), Georgia, serif",
            fontSize: 19,
            fontWeight: 500,
            color: "#FFFFFF",
            letterSpacing: "0.05em",
          }}>
            VIC CHEUNG
          </div>
          <div style={{ fontSize: 9, color: "rgba(255,255,255,0.45)", letterSpacing: "0.2em", fontWeight: 500, marginTop: 1 }}>
            REALTOR® | VANCOUVER
          </div>
        </a>

        {/* Links — centered in right half */}
        <div className="nav-desktop-links" style={{ position: "absolute", left: "calc(50% + clamp(28px, 5vw, 56px))", display: "flex", alignItems: "center", gap: 32 }}>
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              style={{
                fontSize: 11,
                letterSpacing: "0.14em",
                color: "rgba(255,255,255,0.8)",
                textDecoration: "none",
                fontWeight: 500,
                transition: "color 0.2s, border-color 0.2s",
                borderBottom: "1px solid transparent",
                paddingBottom: 2,
                whiteSpace: "nowrap",
              }}
              onMouseOver={e => { e.currentTarget.style.color = "#FFFFFF"; e.currentTarget.style.borderBottomColor = "#FFFFFF"; }}
              onMouseOut={e => { e.currentTarget.style.color = "rgba(255,255,255,0.8)"; e.currentTarget.style.borderBottomColor = "transparent"; }}
            >
              {l.label.toUpperCase()}
            </a>
          ))}
        </div>


        {/* Mobile hamburger */}
        <button
          className="nav-mobile-btn"
          onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 8, flexDirection: "column", gap: 5, marginLeft: "auto" }}
          aria-label="Toggle menu"
        >
          <span style={{ display: "block", width: 22, height: 1.5, background: "#FFFFFF", transition: "all 0.25s", transform: open ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
          <span style={{ display: "block", width: 22, height: 1.5, background: "#FFFFFF", transition: "all 0.25s", opacity: open ? 0 : 1 }} />
          <span style={{ display: "block", width: 22, height: 1.5, background: "#FFFFFF", transition: "all 0.25s", transform: open ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div style={{
          background: "#0A0A0A",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          padding: "20px 32px 28px",
          display: "flex",
          flexDirection: "column",
          gap: 18,
        }}>
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              style={{ fontSize: 12, letterSpacing: "0.14em", color: "rgba(255,255,255,0.8)", textDecoration: "none", fontWeight: 500 }}>
              {l.label.toUpperCase()}
            </a>
          ))}
          <a href="/#contact" onClick={() => setOpen(false)}
            style={{ background: "#FFFFFF", color: "#0A0A0A", padding: "12px 24px", fontSize: 11, letterSpacing: "0.14em", fontWeight: 600, textDecoration: "none", display: "inline-block", alignSelf: "flex-start", marginTop: 4 }}>
            GET IN TOUCH
          </a>
        </div>
      )}
    </nav>
  );
}
