"use client";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "About", href: "#about" },
    { label: "Listings", href: "#listings" },
    { label: "Neighbourhoods", href: "#neighbourhoods" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className={open ? "nav-mobile-open" : ""} style={{
      position: "fixed",
      top: "37px",
      left: 0,
      right: 0,
      zIndex: 1000,
      background: "rgba(250,250,248,0.96)",
      backdropFilter: "blur(10px)",
      borderBottom: "1px solid #E0DDD8",
    }}>
      <div style={{
        maxWidth: 1280,
        margin: "0 auto",
        padding: "0 32px",
        height: 68,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "relative",
      }}>
        {/* Logo */}
        <a href="#hero" style={{ textDecoration: "none" }}>
          <div style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: 19, fontWeight: 500, color: "#0B1628", letterSpacing: "0.05em" }}>
            VIC CHEUNG
          </div>
          <div style={{ fontSize: 9, color: "#C9A96E", letterSpacing: "0.2em", fontWeight: 500, marginTop: 1 }}>
            REALTOR® | VANCOUVER
          </div>
        </a>

        {/* Desktop links */}
        <div className="nav-desktop-links">
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              style={{
                fontSize: 11,
                letterSpacing: "0.14em",
                color: "#0D1117",
                textDecoration: "none",
                fontWeight: 500,
                transition: "color 0.2s",
              }}
              onMouseOver={e => (e.currentTarget.style.color = "#C9A96E")}
              onMouseOut={e => (e.currentTarget.style.color = "#0D1117")}
            >
              {l.label.toUpperCase()}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              background: "#0B1628",
              color: "#C9A96E",
              padding: "10px 22px",
              fontSize: 11,
              letterSpacing: "0.14em",
              fontWeight: 600,
              textDecoration: "none",
              transition: "background 0.2s",
              display: "inline-block",
              whiteSpace: "nowrap",
            }}
            onMouseOver={e => { e.currentTarget.style.background = "#C9A96E"; e.currentTarget.style.color = "#0B1628"; }}
            onMouseOut={e => { e.currentTarget.style.background = "#0B1628"; e.currentTarget.style.color = "#C9A96E"; }}
          >
            GET IN TOUCH
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="nav-mobile-btn"
          onClick={() => setOpen(!open)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
            flexDirection: "column",
            gap: 5,
          }}
          aria-label="Toggle menu"
        >
          <span style={{
            display: "block", width: 22, height: 1.5,
            background: "#0B1628",
            transition: "all 0.2s",
            transform: open ? "rotate(45deg) translate(5px, 5px)" : "none",
          }} />
          <span style={{
            display: "block", width: 22, height: 1.5,
            background: "#0B1628",
            transition: "all 0.2s",
            opacity: open ? 0 : 1,
          }} />
          <span style={{
            display: "block", width: 22, height: 1.5,
            background: "#0B1628",
            transition: "all 0.2s",
            transform: open ? "rotate(-45deg) translate(5px, -5px)" : "none",
          }} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div style={{
          background: "rgba(250,250,248,0.98)",
          borderTop: "1px solid #E0DDD8",
          padding: "20px 32px 28px",
          display: "flex",
          flexDirection: "column",
          gap: 18,
        }}>
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                fontSize: 12,
                letterSpacing: "0.14em",
                color: "#0D1117",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              {l.label.toUpperCase()}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            style={{
              background: "#0B1628",
              color: "#C9A96E",
              padding: "12px 24px",
              fontSize: 11,
              letterSpacing: "0.14em",
              fontWeight: 600,
              textDecoration: "none",
              display: "inline-block",
              alignSelf: "flex-start",
              marginTop: 4,
            }}
          >
            GET IN TOUCH
          </a>
        </div>
      )}
    </nav>
  );
}
