"use client";

import { allListings } from "@/lib/listings-data";
export { allListings };

export default function FeaturedListings() {
  const [featured, ...rest] = allListings;

  return (
    <section id="listings" style={{ background: "#F8F8F8", padding: "clamp(60px, 10vw, 120px) 10vw" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: 48,
          flexWrap: "wrap",
          gap: 20,
        }}>
          <div>
            <div style={{ fontSize: 12, letterSpacing: "0.22em", color: "#0A0A0A", fontWeight: 600, marginBottom: 16, fontFamily: "system-ui, sans-serif" }}>
              FEATURED PROPERTIES
            </div>
            <h2 style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(28px, 3.5vw, 52px)",
              fontWeight: 400,
              color: "#0A0A0A",
              margin: 0,
              lineHeight: 1.15,
            }}>
              Curated for the<br />discerning buyer.
            </h2>
          </div>
          <a href="/listings" style={{
            fontSize: 11,
            letterSpacing: "0.14em",
            color: "#0A0A0A",
            textDecoration: "none",
            fontWeight: 600,
            fontFamily: "system-ui, sans-serif",
            borderBottom: "1px solid #0A0A0A",
            paddingBottom: 3,
            whiteSpace: "nowrap",
          }}>
            ALL LISTINGS →
          </a>
        </div>

        {/* Editorial grid: large card left + 2 stacked right */}
        <div className="listings-grid" style={{ gap: 3, background: "#E0E0E0" }}>
          {/* Featured large card */}
          <div style={{ position: "relative", overflow: "hidden" }}>
            <img
              src={featured.image}
              alt={featured.label}
              referrerPolicy="no-referrer"
              style={{
                width: "100%",
                height: "100%",
                minHeight: "clamp(340px, 50vw, 580px)",
                objectFit: "cover",
                display: "block",
                filter: "brightness(0.72)",
              }}
            />
            <div style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)",
            }} />
            <div style={{ position: "absolute", top: 24, left: 24 }}>
              <span style={{
                background: "#0A0A0A",
                color: "#0A0A0A",
                fontSize: 11,
                letterSpacing: "0.18em",
                fontWeight: 700,
                padding: "5px 10px",
                fontFamily: "system-ui, sans-serif",
              }}>
                FEATURED
              </span>
            </div>
            <div style={{ position: "absolute", bottom: 32, left: 32, right: 32 }}>
              <div style={{ fontSize: 11, letterSpacing: "0.2em", color: "rgba(255,255,255,0.85)", marginBottom: 8, fontFamily: "system-ui, sans-serif" }}>
                {featured.label}
              </div>
              <div style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "clamp(26px, 3vw, 38px)",
                fontWeight: 300,
                color: "#F8F8F8",
                lineHeight: 1,
                marginBottom: 8,
              }}>
                {featured.price}
              </div>
              <div style={{ fontSize: 12, color: "rgba(250,250,248,0.55)", marginBottom: 18, fontFamily: "system-ui, sans-serif" }}>
                {featured.address}
              </div>
              <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
                {[
                  { val: featured.beds, label: "BED" },
                  { val: featured.baths, label: "BATH" },
                  { val: featured.sqft, label: "SQFT" },
                ].map(d => (
                  <div key={d.label} style={{ display: "flex", alignItems: "baseline", gap: 5 }}>
                    <span style={{ fontSize: 16, color: "#F8F8F8", fontFamily: "var(--font-display), Georgia, serif" }}>{d.val}</span>
                    <span style={{ fontSize: 11, letterSpacing: "0.1em", color: "rgba(250,250,248,0.4)", fontFamily: "system-ui, sans-serif" }}>{d.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Two stacked cards */}
          <div className="listings-stack" style={{ gap: 3 }}>
            {rest.slice(0, 2).map((listing, i) => (
              <div key={i} style={{ position: "relative", overflow: "hidden", flex: 1 }}>
                <img
                  src={listing.image}
                  alt={listing.label}
                  referrerPolicy="no-referrer"
                  style={{
                    width: "100%",
                    height: "100%",
                    minHeight: "clamp(180px, 25vw, 290px)",
                    objectFit: "cover",
                    display: "block",
                    filter: "brightness(0.65)",
                  }}
                />
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.05) 55%, transparent 100%)",
                }} />
                {listing.status === "Sold" && (
                  <div style={{ position: "absolute", top: 20, left: 20 }}>
                    <span style={{
                      background: "rgba(0,0,0,0.85)",
                      color: "rgba(250,250,248,0.55)",
                      fontSize: 11,
                      letterSpacing: "0.16em",
                      fontWeight: 700,
                      padding: "5px 10px",
                      fontFamily: "system-ui, sans-serif",
                      borderLeft: "2px solid rgba(255,255,255,0.4)",
                    }}>
                      SOLD
                    </span>
                  </div>
                )}
                <div style={{ position: "absolute", bottom: 24, left: 24, right: 24 }}>
                  <div style={{ fontSize: 11, letterSpacing: "0.18em", color: "rgba(255,255,255,0.75)", marginBottom: 6, fontFamily: "system-ui, sans-serif" }}>
                    {listing.label}
                  </div>
                  <div style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "clamp(18px, 2vw, 24px)",
                    fontWeight: 300,
                    color: "#F8F8F8",
                    lineHeight: 1,
                    marginBottom: 4,
                  }}>
                    {listing.price}
                  </div>
                  <div style={{ fontSize: 11, color: "rgba(250,250,248,0.45)", fontFamily: "system-ui, sans-serif" }}>
                    {listing.neighbourhood} · {listing.beds}bd / {listing.baths}ba
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{
          marginTop: 24,
          fontSize: 11,
          color: "#ABABAB",
          fontFamily: "system-ui, sans-serif",
          letterSpacing: "0.04em",
          textAlign: "center",
        }}>
          Placeholder listings shown for demonstration. Contact Vic for current inventory.
        </div>
      </div>
    </section>
  );
}
