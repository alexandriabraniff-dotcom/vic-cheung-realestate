const listings = [
  {
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80",
    price: "$1,850,000",
    address: "1201 - 1033 Marinaside Crescent",
    neighbourhood: "Coal Harbour",
    beds: 2,
    baths: 2,
    sqft: "1,240",
    status: "Active",
    label: "THE HARRISON",
    featured: true,
  },
  {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&q=80",
    price: "$2,100,000",
    address: "3205 - 939 Homer Street",
    neighbourhood: "Yaletown",
    beds: 3,
    baths: 2,
    sqft: "1,680",
    status: "Active",
    label: "SUSSEX HIGH-LINE",
  },
  {
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=700&q=80",
    price: "$975,000",
    address: "801 - 1480 Howe Street",
    neighbourhood: "Downtown",
    beds: 1,
    baths: 1,
    sqft: "680",
    status: "Sold",
    label: "THE PACIFIC",
  },
];

export default function FeaturedListings() {
  const [featured, ...rest] = listings;

  return (
    <section id="listings" style={{ background: "#FAFAF8", padding: "clamp(60px, 10vw, 120px) 10vw" }}>
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
            <div style={{ fontSize: 10, letterSpacing: "0.22em", color: "#C9A96E", fontWeight: 600, marginBottom: 16, fontFamily: "system-ui, sans-serif" }}>
              FEATURED PROPERTIES
            </div>
            <h2 style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(28px, 3.5vw, 52px)",
              fontWeight: 400,
              color: "#0B1628",
              margin: 0,
              lineHeight: 1.15,
            }}>
              Curated for the<br />discerning buyer.
            </h2>
          </div>
          <a href="#contact" style={{
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

        {/* Property grid */}
        <div className="listings-grid" style={{ gap: 3, background: "#E0DDD8" }}>
          {/* Featured large card */}
          <div style={{ position: "relative", overflow: "hidden" }}>
            <img
              src={featured.image}
              alt={featured.label}
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
                background: "#C9A96E",
                color: "#0B1628",
                fontSize: 9,
                letterSpacing: "0.18em",
                fontWeight: 700,
                padding: "5px 10px",
                fontFamily: "system-ui, sans-serif",
              }}>
                FEATURED
              </span>
            </div>
            <div style={{ position: "absolute", bottom: 32, left: 32, right: 32 }}>
              <div style={{ fontSize: 9, letterSpacing: "0.2em", color: "rgba(201,169,110,0.85)", marginBottom: 8, fontFamily: "system-ui, sans-serif" }}>
                {featured.label}
              </div>
              <div style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "clamp(26px, 3vw, 38px)",
                fontWeight: 300,
                color: "#FAFAF8",
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
                    <span style={{ fontSize: 16, color: "#FAFAF8", fontFamily: "var(--font-display), Georgia, serif" }}>{d.val}</span>
                    <span style={{ fontSize: 9, letterSpacing: "0.1em", color: "rgba(250,250,248,0.4)", fontFamily: "system-ui, sans-serif" }}>{d.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Two stacked side cards */}
          <div className="listings-stack" style={{ gap: 3 }}>
            {rest.map((listing, i) => (
              <div key={i} style={{ position: "relative", overflow: "hidden", flex: 1 }}>
                <img
                  src={listing.image}
                  alt={listing.label}
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
                      background: "rgba(11,22,40,0.85)",
                      color: "rgba(250,250,248,0.55)",
                      fontSize: 9,
                      letterSpacing: "0.16em",
                      fontWeight: 700,
                      padding: "5px 10px",
                      fontFamily: "system-ui, sans-serif",
                      borderLeft: "2px solid rgba(201,169,110,0.4)",
                    }}>
                      SOLD
                    </span>
                  </div>
                )}
                <div style={{ position: "absolute", bottom: 24, left: 24, right: 24 }}>
                  <div style={{ fontSize: 9, letterSpacing: "0.18em", color: "rgba(201,169,110,0.75)", marginBottom: 6, fontFamily: "system-ui, sans-serif" }}>
                    {listing.label}
                  </div>
                  <div style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "clamp(18px, 2vw, 24px)",
                    fontWeight: 300,
                    color: "#FAFAF8",
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
