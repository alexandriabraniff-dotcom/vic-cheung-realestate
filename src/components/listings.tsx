"use client";

import { allListings } from "@/lib/listings-data";
export { allListings };

export default function FeaturedListings() {
  return (
    <section id="listings" style={{ background: "#FAFAF8", padding: "clamp(60px, 10vw, 120px) 0" }}>
      {/* Header */}
      <div style={{
        padding: "0 10vw",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        marginBottom: 40,
        flexWrap: "wrap",
        gap: 20,
      }}>
        <div>
          <div style={{ fontSize: 10, letterSpacing: "0.22em", color: "#C9A96E", fontWeight: 600, marginBottom: 16, fontFamily: "system-ui, sans-serif" }}>
            FEATURED PROPERTIES
          </div>
          <h2 style={{
            fontFamily: "var(--font-display), Georgia, serif",
            fontSize: "clamp(28px, 3.5vw, 48px)",
            fontWeight: 400,
            color: "#0B1628",
            margin: 0,
            lineHeight: 1.15,
          }}>
            Curated for the<br />discerning buyer.
          </h2>
        </div>
        <a href="/listings" style={{
          fontSize: 11,
          letterSpacing: "0.14em",
          color: "#0B1628",
          textDecoration: "none",
          fontWeight: 600,
          fontFamily: "system-ui, sans-serif",
          borderBottom: "1px solid #C9A96E",
          paddingBottom: 3,
          whiteSpace: "nowrap",
        }}>
          ALL LISTINGS →
        </a>
      </div>

      {/* Horizontal scroll carousel */}
      <div style={{
        overflowX: "auto",
        paddingLeft: "10vw",
        paddingRight: "10vw",
        paddingBottom: 16,
        scrollSnapType: "x mandatory",
        WebkitOverflowScrolling: "touch",
        display: "flex",
        gap: 20,
        msOverflowStyle: "none",
        scrollbarWidth: "thin",
        scrollbarColor: "#C9A96E transparent",
      }}>
        {allListings.map((listing, i) => (
          <div
            key={i}
            style={{
              flex: "0 0 clamp(260px, 28vw, 360px)",
              scrollSnapAlign: "start",
              position: "relative",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            <img
              src={listing.image}
              alt={listing.label}
              style={{
                width: "100%",
                aspectRatio: "3/4",
                objectFit: "cover",
                display: "block",
                filter: "brightness(0.68)",
                transition: "filter 0.3s",
              }}
              onMouseOver={e => ((e.currentTarget as HTMLImageElement).style.filter = "brightness(0.82)")}
              onMouseOut={e => ((e.currentTarget as HTMLImageElement).style.filter = "brightness(0.68)")}
            />
            <div style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.05) 55%, transparent 100%)",
              pointerEvents: "none",
            }} />

            {/* Status badge */}
            <div style={{ position: "absolute", top: 20, left: 20 }}>
              <span style={{
                background: listing.status === "Active" ? "#C9A96E" : "rgba(11,22,40,0.8)",
                color: listing.status === "Active" ? "#0B1628" : "rgba(250,250,248,0.6)",
                fontSize: 9,
                letterSpacing: "0.18em",
                fontWeight: 700,
                padding: "4px 10px",
                fontFamily: "system-ui, sans-serif",
              }}>
                {listing.status.toUpperCase()}
              </span>
            </div>

            {/* Card info */}
            <div style={{ position: "absolute", bottom: 28, left: 24, right: 24, pointerEvents: "none" }}>
              <div style={{ fontSize: 9, letterSpacing: "0.2em", color: "rgba(201,169,110,0.8)", marginBottom: 6, fontFamily: "system-ui, sans-serif" }}>
                {listing.label}
              </div>
              <div style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "clamp(20px, 2.2vw, 26px)",
                fontWeight: 300,
                color: "#FAFAF8",
                lineHeight: 1,
                marginBottom: 6,
              }}>
                {listing.price}
              </div>
              <div style={{ fontSize: 11, color: "rgba(250,250,248,0.5)", marginBottom: 14, fontFamily: "system-ui, sans-serif" }}>
                {listing.address}
              </div>
              <div style={{ display: "flex", gap: 16 }}>
                {[
                  { val: listing.beds, label: "BED" },
                  { val: listing.baths, label: "BATH" },
                  { val: listing.sqft, label: "SQFT" },
                ].map(d => (
                  <div key={d.label} style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                    <span style={{ fontSize: 14, color: "#FAFAF8", fontFamily: "var(--font-display), Georgia, serif" }}>{d.val}</span>
                    <span style={{ fontSize: 8, letterSpacing: "0.1em", color: "rgba(250,250,248,0.4)", fontFamily: "system-ui, sans-serif" }}>{d.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{
        padding: "20px 10vw 0",
        fontSize: 11,
        color: "#ABABAB",
        fontFamily: "system-ui, sans-serif",
        letterSpacing: "0.04em",
      }}>
        Placeholder listings shown for demonstration. Contact Vic for current inventory.
      </div>
    </section>
  );
}
