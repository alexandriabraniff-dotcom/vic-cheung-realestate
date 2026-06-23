"use client";
import { useState } from "react";
import { allListings } from "@/lib/listings-data";

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="hero" style={{ minHeight: "100vh", display: "grid", gridTemplateColumns: "50% 50%" }}>
      {/* Left: Agent Portrait */}
      <div className="hero-portrait" style={{ position: "relative", overflow: "hidden" }}>
        {!imgError ? (
          <img
            src="/vic.jpg"
            alt="Vic Cheung"
            onError={() => setImgError(true)}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        ) : (
          <div style={{
            width: "100%",
            height: "100%",
            minHeight: "inherit",
            background: "#111111",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
          }}>
            <div style={{
              width: 80,
              height: 80,
              border: "1px solid rgba(255,255,255,0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <svg width="40" height="40" fill="none" stroke="#FFFFFF" strokeWidth="1" viewBox="0 0 24 24">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
              </svg>
            </div>
            <div style={{
              fontSize: 10,
              letterSpacing: "0.2em",
              color: "rgba(255,255,255,0.5)",
              fontFamily: "system-ui, sans-serif",
              textAlign: "center",
              lineHeight: 1.8,
            }}>
              PLACE VIC&apos;S PORTRAIT<br />AT /public/vic.jpg
            </div>
          </div>
        )}

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
        padding: "clamp(80px, 10vw, 120px) clamp(32px, 8vw, 80px) clamp(60px, 8vw, 100px) clamp(28px, 6vw, 64px)",
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
          fontSize: 10,
          letterSpacing: "0.25em",
          color: "#FFFFFF",
          fontWeight: 600,
          marginBottom: 32,
          fontFamily: "system-ui, sans-serif",
        }}>
          VANCOUVER REALTOR®
        </div>

        <div style={{
          fontFamily: "var(--font-display), Georgia, serif",
          fontSize: "clamp(48px, 5.5vw, 80px)",
          fontWeight: 300,
          color: "#F8F8F8",
          lineHeight: 1.05,
          marginBottom: 32,
          letterSpacing: "-0.01em",
        }}>
          Vic<br />
          <em style={{ fontStyle: "italic", color: "#FFFFFF" }}>Cheung</em>
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

        {/* Search bar */}
        <div style={{
          border: "1px solid rgba(255,255,255,0.2)",
          display: "flex",
          alignItems: "center",
          marginBottom: 28,
          background: "rgba(255,255,255,0.03)",
        }}>
          <input
            type="text"
            placeholder="Search neighbourhoods, areas..."
            style={{
              flex: 1,
              background: "transparent",
              border: "none",
              outline: "none",
              padding: "14px 20px",
              fontSize: 13,
              color: "#F8F8F8",
              fontFamily: "system-ui, sans-serif",
              letterSpacing: "0.04em",
              minWidth: 0,
            }}
          />
          <button style={{
            background: "#FFFFFF",
            border: "none",
            padding: "14px 20px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}>
            <svg width="15" height="15" fill="none" stroke="#0A0A0A" strokeWidth="2.2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </button>
        </div>

        {/* CTAs */}
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a href="#contact" style={{
            background: "#FFFFFF",
            color: "#0A0A0A",
            padding: "14px 28px",
            fontSize: 11,
            letterSpacing: "0.14em",
            fontWeight: 700,
            textDecoration: "none",
            display: "inline-block",
            whiteSpace: "nowrap",
          }}>
            WORK WITH VIC
          </a>
          <a href="#listings" style={{
            border: "1px solid rgba(255,255,255,0.35)",
            color: "#FFFFFF",
            padding: "14px 28px",
            fontSize: 11,
            letterSpacing: "0.14em",
            fontWeight: 600,
            textDecoration: "none",
            display: "inline-block",
            whiteSpace: "nowrap",
          }}>
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
                  flex: "0 0 180px",
                  scrollSnapAlign: "start",
                  display: "flex",
                  gap: 10,
                  alignItems: "center",
                  textDecoration: "none",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  padding: "8px 10px",
                  transition: "border-color 0.2s",
                }}
                onMouseOver={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)")}
                onMouseOut={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
              >
                <img
                  src={listing.image}
                  alt={listing.label}
                  style={{
                    width: 44,
                    height: 44,
                    objectFit: "cover",
                    flexShrink: 0,
                    filter: "brightness(0.8)",
                  }}
                />
                <div style={{ minWidth: 0 }}>
                  <div style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: 14,
                    fontWeight: 400,
                    color: "#F8F8F8",
                    lineHeight: 1.1,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}>
                    {listing.price}
                  </div>
                  <div style={{
                    fontSize: 9,
                    letterSpacing: "0.1em",
                    color: "rgba(250,250,248,0.4)",
                    marginTop: 3,
                    fontFamily: "system-ui, sans-serif",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}>
                    {listing.neighbourhood.toUpperCase()}
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
