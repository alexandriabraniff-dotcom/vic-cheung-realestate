"use client";
import { useState } from "react";
import { allListings } from "@/lib/listings-data";

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="hero" className="hero-grid" style={{ minHeight: "100vh" }}>
      {/* Left: Agent Portrait — replace src with /vic.jpg when available */}
      <div className="hero-portrait" style={{ position: "relative", overflow: "hidden" }}>
        <img
          src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1000&q=85"
          alt="Vic Cheung"
          referrerPolicy="no-referrer"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, transparent 55%, rgba(10,10,10,0.5) 100%)",
          pointerEvents: "none",
        }} />

        {/* Corner accent */}
        <div style={{
          position: "absolute",
          bottom: 40,
          left: 40,
          width: 60,
          height: 60,
          borderBottom: "1px solid rgba(255,255,255,0.5)",
          borderLeft: "1px solid rgba(255,255,255,0.5)",
          pointerEvents: "none",
        }} />

        {/* Team badge */}
        <div style={{
          position: "absolute",
          bottom: 40,
          right: 0,
          background: "#0A0A0A",
          padding: "12px 20px",
          borderLeft: "2px solid #FFFFFF",
        }}>
          <div style={{ fontSize: 9, letterSpacing: "0.2em", color: "#FFFFFF", fontFamily: "system-ui, sans-serif" }}>
            TEAM UPHAUS
          </div>
          <div style={{ fontSize: 9, letterSpacing: "0.15em", color: "rgba(250,250,248,0.45)", marginTop: 3, fontFamily: "system-ui, sans-serif" }}>
            RENT IT FURNISHED REALTY
          </div>
        </div>
      </div>

      {/* Right: Content Panel */}
      <div style={{
        background: "#0A0A0A",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "clamp(40px, 8vw, 120px) clamp(28px, 6vw, 64px) clamp(40px, 8vw, 100px)",
        position: "relative",
      }}>
        {/* Left edge line */}
        <div style={{
          position: "absolute",
          left: 0,
          top: "15%",
          bottom: "15%",
          width: 1,
          background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.3), transparent)",
        }} />

        <div style={{
          fontFamily: "var(--font-display), Georgia, serif",
          fontSize: "clamp(48px, 5.5vw, 80px)",
          fontWeight: 300,
          color: "#F8F8F8",
          lineHeight: 1.05,
          marginTop: 64,
          marginBottom: 32,
          letterSpacing: "-0.01em",
        }}>
          Vic Cheung
        </div>

        <p style={{
          fontSize: 15,
          color: "rgba(250,250,248,0.6)",
          lineHeight: 1.85,
          maxWidth: 420,
          margin: "0 0 40px 0",
          fontFamily: "system-ui, sans-serif",
        }}>
          Buy with a builder&apos;s mind. Invest with a designer&apos;s eye. 17 years spanning design, construction, and Vancouver&apos;s most prestigious developments.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a href="/#contact"
            style={{ background: "#FFFFFF", color: "#0A0A0A", padding: "14px 28px", fontSize: 11, letterSpacing: "0.14em", fontWeight: 700, textDecoration: "none", display: "inline-block", whiteSpace: "nowrap", transition: "all 0.2s" }}
            onMouseOver={e => { e.currentTarget.style.background = "rgba(255,255,255,0.85)"; }}
            onMouseOut={e => { e.currentTarget.style.background = "#FFFFFF"; }}
          >
            GET IN TOUCH
          </a>
          <a href="/#listings"
            style={{ border: "1px solid rgba(255,255,255,0.35)", color: "#FFFFFF", padding: "14px 28px", fontSize: 11, letterSpacing: "0.14em", fontWeight: 600, textDecoration: "none", display: "inline-block", whiteSpace: "nowrap", transition: "all 0.2s" }}
            onMouseOver={e => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.7)"; }}
            onMouseOut={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)"; }}
          >
            VIEW LISTINGS
          </a>
        </div>

        {/* Mini listings scroll */}
        <div style={{
          marginTop: 52,
          paddingTop: 32,
          borderTop: "1px solid rgba(255,255,255,0.12)",
        }}>
          <div style={{
            fontSize: 9,
            letterSpacing: "0.2em",
            color: "rgba(255,255,255,0.6)",
            fontFamily: "system-ui, sans-serif",
            marginBottom: 16,
          }}>
            POPULAR LISTINGS
          </div>
          <div style={{
            display: "flex",
            gap: 12,
            overflowX: "auto",
            paddingBottom: 8,
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}>
            {allListings.filter(l => l.status === "Active").map((listing, i) => (
              <a
                key={i}
                href="/listings"
                style={{
                  flex: "0 0 200px",
                  scrollSnapAlign: "start",
                  display: "flex",
                  flexDirection: "column",
                  textDecoration: "none",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  overflow: "hidden",
                  transition: "border-color 0.2s",
                }}
                onMouseOver={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)")}
                onMouseOut={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
              >
                {/* Image with overlaid price */}
                <div style={{ position: "relative", overflow: "hidden" }}>
                  <img
                    src={listing.image}
                    alt={listing.label}
                    referrerPolicy="no-referrer"
                    style={{
                      width: "100%",
                      height: 130,
                      objectFit: "cover",
                      display: "block",
                      filter: "brightness(0.75)",
                    }}
                  />
                  <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 55%)",
                  }} />
                  <div style={{ position: "absolute", bottom: 10, left: 12 }}>
                    <div style={{ fontSize: 8, letterSpacing: "0.14em", color: "rgba(255,255,255,0.75)", fontFamily: "system-ui, sans-serif", marginBottom: 3 }}>
                      {listing.label}
                    </div>
                    <div style={{
                      fontFamily: "var(--font-display), Georgia, serif",
                      fontSize: 15,
                      fontWeight: 400,
                      color: "#F8F8F8",
                      lineHeight: 1,
                    }}>
                      {listing.price}
                    </div>
                  </div>
                </div>
                {/* Details */}
                <div style={{ padding: "12px 12px 14px" }}>
                  <div style={{
                    fontSize: 10,
                    color: "rgba(250,250,248,0.55)",
                    fontFamily: "system-ui, sans-serif",
                    marginBottom: 8,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}>
                    {listing.address}
                  </div>
                  <div style={{ display: "flex", gap: 12, borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 8 }}>
                    {[
                      { val: listing.beds, label: "BD" },
                      { val: listing.baths, label: "BA" },
                      { val: listing.sqft, label: "SF" },
                    ].map(d => (
                      <div key={d.label}>
                        <div style={{ fontSize: 12, color: "#F8F8F8", fontFamily: "var(--font-display), Georgia, serif" }}>{d.val}</div>
                        <div style={{ fontSize: 8, letterSpacing: "0.1em", color: "rgba(250,250,248,0.3)", fontFamily: "system-ui, sans-serif" }}>{d.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
