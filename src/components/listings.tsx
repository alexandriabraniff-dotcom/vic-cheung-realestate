export const allListings = [
  {
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    price: "$1,850,000",
    address: "1201 - 1033 Marinaside Cres",
    neighbourhood: "Coal Harbour",
    beds: 2, baths: 2, sqft: "1,240",
    status: "Active",
    label: "THE HARRISON",
  },
  {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    price: "$2,100,000",
    address: "3205 - 939 Homer Street",
    neighbourhood: "Yaletown",
    beds: 3, baths: 2, sqft: "1,680",
    status: "Active",
    label: "SUSSEX HIGH-LINE",
  },
  {
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    price: "$975,000",
    address: "801 - 1480 Howe Street",
    neighbourhood: "Downtown",
    beds: 1, baths: 1, sqft: "680",
    status: "Sold",
    label: "THE PACIFIC",
  },
  {
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
    price: "$3,200,000",
    address: "2402 - 1499 W Pender Street",
    neighbourhood: "Coal Harbour",
    beds: 3, baths: 3, sqft: "2,150",
    status: "Active",
    label: "HARBOUR CENTRE",
  },
  {
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80",
    price: "$1,450,000",
    address: "1108 - 1238 Burrard Street",
    neighbourhood: "West End",
    beds: 2, baths: 2, sqft: "1,020",
    status: "Active",
    label: "BURRARD LANDING",
  },
  {
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
    price: "$1,750,000",
    address: "301 - 2118 W 1st Avenue",
    neighbourhood: "Kitsilano",
    beds: 2, baths: 2, sqft: "1,380",
    status: "Sold",
    label: "KITS BEACH RESIDENCES",
  },
];

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
