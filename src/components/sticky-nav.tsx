"use client";
import { useState, useEffect } from "react";

export default function StickyNav({ alwaysVisible = false }: { alwaysVisible?: boolean }) {
  const [visible, setVisible] = useState(alwaysVisible);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (alwaysVisible) return;
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.85);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [alwaysVisible]);

  const links = [
    { label: "About", href: "/#about" },
    { label: "Listings", href: "/listings" },
    { label: "Neighbourhoods", href: "/#neighbourhoods" },
    { label: "Testimonials", href: "/#testimonials" },
  ];

  return (
    <nav style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 2000,
      background: "#0A0A0A",
      borderBottom: "1px solid rgba(255,255,255,0.08)",
      transform: visible ? "translateY(0)" : "translateY(-110%)",
      transition: "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
    }}>
      <div style={{
        maxWidth: 1280,
        margin: "0 auto",
        padding: "0 32px",
        height: 64,
        display: "flex",
        alignItems: "center",
      }}>
        {/* Logo */}
        <a href="/" style={{ textDecoration: "none", flexShrink: 0 }}>
          <div style={{
            fontFamily: "var(--font-display), Georgia, serif",
            fontSize: 17,
            fontWeight: 500,
            color: "#FFFFFF",
            letterSpacing: "0.05em",
          }}>
            VIC CHEUNG
          </div>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", letterSpacing: "0.2em", fontWeight: 500, marginTop: 1 }}>
            REALTOR® | VANCOUVER
          </div>
        </a>

        {/* Links + button — right side */}
        <div className="nav-desktop-links" style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 32 }}>
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              style={{
                fontSize: 11,
                letterSpacing: "0.14em",
                color: "rgba(255,255,255,0.75)",
                textDecoration: "none",
                fontWeight: 500,
                borderBottom: "1px solid transparent",
                paddingBottom: 2,
                transition: "color 0.2s, border-color 0.2s",
                whiteSpace: "nowrap",
              }}
              onMouseOver={e => { e.currentTarget.style.color = "#FFFFFF"; e.currentTarget.style.borderBottomColor = "#FFFFFF"; }}
              onMouseOut={e => { e.currentTarget.style.color = "rgba(255,255,255,0.75)"; e.currentTarget.style.borderBottomColor = "transparent"; }}
            >
              {l.label.toUpperCase()}
            </a>
          ))}
          <a
            href="/#contact"
            style={{
              background: "#FFFFFF",
              color: "#0A0A0A",
              padding: "9px 22px",
              fontSize: 11,
              letterSpacing: "0.14em",
              fontWeight: 700,
              textDecoration: "none",
              display: "inline-block",
              whiteSpace: "nowrap",
              transition: "all 0.2s",
            }}
            onMouseOver={e => { e.currentTarget.style.background = "rgba(255,255,255,0.85)"; }}
            onMouseOut={e => { e.currentTarget.style.background = "#FFFFFF"; }}
          >
            GET IN TOUCH
          </a>
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
