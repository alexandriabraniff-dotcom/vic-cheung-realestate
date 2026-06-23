"use client";

const services = [
  {
    number: "01",
    title: "Buyer Representation",
    subtitle: "Buying with a builder's eye",
    description: "Vic evaluates every property the way a developer would — structural integrity, permitting history, hidden costs, and true market value. You'll never overpay or miss a problem.",
    detail: "With 17+ years in design and construction, he identifies issues other agents miss and negotiates from a position of real knowledge.",
    tags: ["Due Diligence", "Negotiation", "Construction Review"],
    icon: "◇",
  },
  {
    number: "02",
    title: "Investment Advisory",
    subtitle: "Developer-grade financial analysis",
    description: "Full ROI modelling, furnished rental yield projections, and renovation cost estimates — before you put in an offer. Investment decisions backed by real numbers.",
    detail: "As Development Manager at Pinnacle International, Vic ran financial analysis on multi-million dollar projects.",
    tags: ["ROI Modelling", "Furnished Rentals", "Market Analysis"],
    icon: "◆",
  },
  {
    number: "03",
    title: "Project Management",
    subtitle: "Renovation and delivery, end-to-end",
    description: "Through My Project Team Management Corp., Vic manages your renovation from permit to final walkthrough — on time and on budget. PMP-certified, $5M covered.",
    detail: "Delivered complex renovation and fit-out projects across Vancouver's most demanding residential and commercial spaces.",
    tags: ["PMP Certified", "$5M Coverage", "Full Delivery"],
    icon: "◈",
  },
];

export default function Services() {
  return (
    <section id="services" style={{
      background: "#0A0A0A",
      padding: "clamp(40px, 6vw, 72px) 10vw",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "clamp(28px, 4vw, 44px)",
          flexWrap: "wrap",
          gap: 16,
        }}>
          <div>
            <div style={{ fontSize: 10, letterSpacing: "0.22em", color: "rgba(255,255,255,0.35)", fontWeight: 600, marginBottom: 10, fontFamily: "system-ui, sans-serif" }}>
              SERVICES
            </div>
            <h2 style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(24px, 2.5vw, 38px)",
              fontWeight: 400,
              color: "#F8F8F8",
              margin: 0,
              lineHeight: 1.15,
            }}>
              Three disciplines. <em style={{ fontStyle: "italic" }}>One advantage.</em>
            </h2>
          </div>
          <a href="/#contact" style={{
            fontSize: 10,
            letterSpacing: "0.14em",
            color: "rgba(255,255,255,0.5)",
            textDecoration: "none",
            fontFamily: "system-ui, sans-serif",
            borderBottom: "1px solid rgba(255,255,255,0.2)",
            paddingBottom: 2,
            whiteSpace: "nowrap",
            transition: "color 0.2s, border-color 0.2s",
          }}
          onMouseOver={e => { e.currentTarget.style.color = "#FFFFFF"; e.currentTarget.style.borderBottomColor = "#FFFFFF"; }}
          onMouseOut={e => { e.currentTarget.style.color = "rgba(255,255,255,0.5)"; e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.2)"; }}
          >
            ENQUIRE ABOUT ANY SERVICE →
          </a>
        </div>

        {/* Three columns */}
        <div className="three-col-grid" style={{ gap: 1, background: "rgba(255,255,255,0.08)" }}>
          {services.map((s, i) => (
            <div key={i} style={{
              background: "#0A0A0A",
              padding: "clamp(20px, 3vw, 32px) clamp(18px, 2.5vw, 28px)",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}>
              {/* Top row: number + icon */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div style={{
                  fontFamily: "var(--font-display), Georgia, serif",
                  fontSize: "clamp(28px, 3vw, 42px)",
                  fontWeight: 300,
                  color: "rgba(255,255,255,0.12)",
                  lineHeight: 1,
                }}>
                  {s.number}
                </div>
                <span style={{ fontSize: 16, color: "rgba(255,255,255,0.2)" }}>{s.icon}</span>
              </div>

              {/* Title */}
              <div>
                <div style={{ fontSize: 9, letterSpacing: "0.16em", color: "rgba(250,250,248,0.3)", fontFamily: "system-ui, sans-serif", marginBottom: 6 }}>
                  {s.subtitle.toUpperCase()}
                </div>
                <h3 style={{
                  fontFamily: "var(--font-display), Georgia, serif",
                  fontSize: "clamp(16px, 1.6vw, 21px)",
                  fontWeight: 400,
                  color: "#F8F8F8",
                  margin: 0,
                  lineHeight: 1.25,
                }}>
                  {s.title}
                </h3>
              </div>

              {/* Description */}
              <p style={{
                fontSize: 12,
                lineHeight: 1.75,
                color: "rgba(250,250,248,0.5)",
                margin: 0,
                fontFamily: "system-ui, sans-serif",
                flexGrow: 1,
              }}>
                {s.description}
              </p>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: "auto" }}>
                {s.tags.map(tag => (
                  <span key={tag} style={{
                    fontSize: 8,
                    letterSpacing: "0.1em",
                    color: "rgba(250,250,248,0.4)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    padding: "3px 8px",
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
