const hoods = [
  { name: "Coal Harbour", desc: "Waterfront luxury with marina views" },
  { name: "Yaletown", desc: "Urban chic warehouse conversions" },
  { name: "Kitsilano", desc: "Beach lifestyle meets boutique living" },
  { name: "West Vancouver", desc: "Prestige estates, ocean panoramas" },
  { name: "North Vancouver", desc: "Mountain setting, city access" },
  { name: "Burnaby", desc: "High-rise investment opportunities" },
];

export default function Neighborhoods() {
  return (
    <section id="neighbourhoods" className="two-col-grid" style={{ minHeight: 560 }}>
      {/* Left: dark text panel */}
      <div style={{
        background: "#0B1628",
        padding: "clamp(60px, 10vw, 100px) clamp(32px, 8vw, 80px) clamp(60px, 8vw, 100px) clamp(32px, 10vw, 10vw)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}>
        <div style={{ fontSize: 10, letterSpacing: "0.22em", color: "#C9A96E", fontWeight: 600, marginBottom: 20, fontFamily: "system-ui, sans-serif" }}>
          MARKET COVERAGE
        </div>
        <h2 style={{
          fontFamily: "var(--font-display), Georgia, serif",
          fontSize: "clamp(28px, 3vw, 48px)",
          fontWeight: 400,
          color: "#FAFAF8",
          lineHeight: 1.15,
          margin: "0 0 44px 0",
        }}>
          The<br /><em style={{ color: "#C9A96E", fontStyle: "italic" }}>Neighbourhoods.</em>
        </h2>

        <div>
          {hoods.map((hood, i) => (
            <div key={i} style={{
              borderBottom: "1px solid rgba(201,169,110,0.1)",
              padding: "16px 0",
              display: "flex",
              alignItems: "baseline",
              gap: 20,
              flexWrap: "wrap",
            }}>
              <div style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "clamp(15px, 1.5vw, 18px)",
                fontWeight: 400,
                color: "#FAFAF8",
                minWidth: 160,
              }}>
                {hood.name}
              </div>
              <div style={{
                fontSize: 11,
                color: "rgba(250,250,248,0.32)",
                fontFamily: "system-ui, sans-serif",
                letterSpacing: "0.02em",
              }}>
                {hood.desc}
              </div>
            </div>
          ))}
        </div>

        <a href="#contact" style={{
          marginTop: 40,
          fontSize: 11,
          letterSpacing: "0.14em",
          color: "#C9A96E",
          textDecoration: "none",
          fontWeight: 600,
          fontFamily: "system-ui, sans-serif",
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          border: "1px solid rgba(201,169,110,0.3)",
          padding: "13px 28px",
          alignSelf: "flex-start",
        }}>
          EXPLORE WITH VIC →
        </a>
      </div>

      {/* Right: architecture photo */}
      <div style={{ position: "relative", overflow: "hidden", minHeight: 400 }}>
        <img
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1000&q=80"
          alt="Vancouver neighbourhoods"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            filter: "brightness(0.52) saturate(0.75)",
          }}
        />
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, rgba(11,22,40,0.5), transparent 60%)",
        }} />
        <div style={{
          position: "absolute",
          bottom: 40,
          right: 36,
          textAlign: "right",
          maxWidth: 280,
        }}>
          <div style={{
            fontFamily: "var(--font-display), Georgia, serif",
            fontSize: "clamp(13px, 1.4vw, 16px)",
            fontWeight: 300,
            color: "rgba(250,250,248,0.65)",
            fontStyle: "italic",
            lineHeight: 1.65,
            marginBottom: 12,
          }}>
            &ldquo;Vancouver&apos;s market rewards those who understand it from the inside.&rdquo;
          </div>
          <div style={{ fontSize: 9, letterSpacing: "0.16em", color: "#C9A96E", fontFamily: "system-ui, sans-serif" }}>
            VIC CHEUNG — REALTOR®
          </div>
        </div>
      </div>
    </section>
  );
}
