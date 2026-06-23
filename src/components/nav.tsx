"use client";
import { useState, useEffect } from "react";

export default function Nav() {
  const [pastHero, setPastHero] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const heroHeight = window.innerHeight;
      setPastHero(window.scrollY > heroHeight * 0.85);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "About", href: "#about" },
    { label: "Listings", href: "/listings" },
    { label: "Neighbourhoods", href: "#neighbourhoods" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav style={{
      position: "fixed",
      top: "37px",
      left: 0,
      right: 0,
      zIndex: 1000,
      background: pastHero ? "#0A0A0A" : "transparent",
      borderBottom: pastHero ? "1px solid rgba(255,255,255,0.08)" : "none",
      transition: "background 0.35s ease, border-color 0.35s ease",
    }}>
      <div style={{
        maxWidth: 1280,
        margin: "0 auto",
        padding: "0 32px",
        height: 68,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        {/* Logo */}
        <a href="/" style={{ textDecoration: "none" }}>
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

        {/* Desktop links */}
        <div className="nav-desktop-links">
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
                transition: "color 0.2s",
              }}
              onMouseOver={e => (e.currentTarget.style.color = "#FFFFFF")}
              onMouseOut={e => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
            >
              {l.label.toUpperCase()}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              background: "rgba(255,255,255,0.1)",
              color: "#FFFFFF",
              border: "1px solid rgba(255,255,255,0.3)",
              padding: "10px 22px",
              fontSize: 11,
              letterSpacing: "0.14em",
              fontWeight: 600,
              textDecoration: "none",
              transition: "all 0.2s",
              display: "inline-block",
              whiteSpace: "nowrap",
            }}
            onMouseOver={e => { e.currentTarget.style.background = "#FFFFFF"; e.currentTarget.style.color = "#0A0A0A"; }}
            onMouseOut={e => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "#FFFFFF"; }}
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
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ fontSize: 12, letterSpacing: "0.14em", color: "rgba(255,255,255,0.8)", textDecoration: "none", fontWeight: 500 }}
            >
              {l.label.toUpperCase()}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            style={{
              background: "#FFFFFF",
              color: "#0A0A0A",
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
