export default function Services() {
  const services = [
    {
      number: "01",
      title: "Buyer Representation",
      description: "Technical property evaluation beyond the surface. Vic assesses structural conditions, permitting history, and renovation scope before you make an offer.",
      tags: ["Due Diligence", "Negotiation", "Construction Review"],
    },
    {
      number: "02",
      title: "Investment Advisory",
      description: "Developer-grade financial analysis for every purchase. Rental yield modeling, renovation cost projections, and long-term return scenarios.",
      tags: ["ROI Modelling", "Furnished Rentals", "Market Analysis"],
    },
    {
      number: "03",
      title: "Project Management",
      description: "Post-purchase support through My Project Team Management Corp. From permits to delivery, Vic and his team manage your renovation end-to-end.",
      tags: ["PMP Certified", "$5M Coverage", "Full Delivery"],
    },
  ];

  return (
    <section id="services" style={{
      background: "#0B1628",
      padding: "120px 10vw",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ fontSize: 10, letterSpacing: "0.22em", color: "#C9A96E", fontWeight: 600, marginBottom: 20, fontFamily: "system-ui, sans-serif" }}>
          SERVICES
        </div>
        <h2 style={{
          fontFamily: "var(--font-display), Georgia, serif",
          fontSize: "clamp(32px, 3.5vw, 52px)",
          fontWeight: 400,
          color: "#FAFAF8",
          margin: "0 0 64px 0",
          lineHeight: 1.15,
        }}>
          What Vic brings<br />to the table.
        </h2>

        <div className="three-col-grid" style={{ gap: 1, background: "rgba(201,169,110,0.15)" }}>
          {services.map((s, i) => (
            <div key={i} style={{
              background: "#0B1628",
              padding: "48px 40px",
              position: "relative",
            }}>
              <div style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: 64,
                fontWeight: 300,
                color: "rgba(201,169,110,0.15)",
                lineHeight: 1,
                marginBottom: 24,
              }}>
                {s.number}
              </div>
              <h3 style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: 24,
                fontWeight: 400,
                color: "#FAFAF8",
                margin: "0 0 16px 0",
                lineHeight: 1.3,
              }}>
                {s.title}
              </h3>
              <p style={{
                fontSize: 14,
                lineHeight: 1.75,
                color: "rgba(250,250,248,0.6)",
                margin: "0 0 28px 0",
                fontFamily: "system-ui, sans-serif",
              }}>
                {s.description}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {s.tags.map(tag => (
                  <span key={tag} style={{
                    fontSize: 10,
                    letterSpacing: "0.1em",
                    color: "#C9A96E",
                    border: "1px solid rgba(201,169,110,0.3)",
                    padding: "4px 10px",
                    fontFamily: "system-ui, sans-serif",
                  }}>
                    {tag.toUpperCase()}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
