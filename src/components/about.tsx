export default function About() {
  return (
    <section id="about" style={{
      background: "#FAFAF8",
      padding: "120px 10vw",
    }}>
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "80px",
        alignItems: "center",
      }}>
        {/* Image placeholder */}
        <div style={{
          aspectRatio: "4/5",
          background: "#EAE8E4",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: 8,
            color: "#7A7A7A",
            fontSize: 12,
            letterSpacing: "0.1em",
          }}>
            <div style={{ width: 40, height: 40, border: "1px solid #C9A96E", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="20" height="20" fill="none" stroke="#C9A96E" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="1"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
            </div>
            AGENT PHOTO
          </div>
          {/* Gold corner accent */}
          <div style={{ position: "absolute", top: 20, left: 20, width: 60, height: 60, borderTop: "1px solid #C9A96E", borderLeft: "1px solid #C9A96E" }} />
          <div style={{ position: "absolute", bottom: 20, right: 20, width: 60, height: 60, borderBottom: "1px solid #C9A96E", borderRight: "1px solid #C9A96E" }} />
        </div>

        {/* Text */}
        <div>
          <div style={{ fontSize: 10, letterSpacing: "0.22em", color: "#C9A96E", fontWeight: 600, marginBottom: 20, fontFamily: "system-ui, sans-serif" }}>
            ABOUT VIC
          </div>
          <h2 style={{
            fontFamily: "var(--font-display), Georgia, serif",
            fontSize: "clamp(32px, 3.5vw, 52px)",
            fontWeight: 400,
            color: "#0B1628",
            lineHeight: 1.15,
            margin: "0 0 32px 0",
          }}>
            Three disciplines.<br />One perspective.
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "#4A4A4A", marginBottom: 20, fontFamily: "system-ui, sans-serif" }}>
            Vic Cheung brings a rare combination of expertise to every transaction: the structural eye of a builder, the spatial intelligence of an interior designer, and the financial rigour of a development manager.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "#4A4A4A", marginBottom: 20, fontFamily: "system-ui, sans-serif" }}>
            With a background as Senior Designer at Northland Properties (Sutton Place Hotels) and Development Manager at Pinnacle International, Vic has spent 17 years navigating complex projects — so your property purchase is in experienced hands.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "#4A4A4A", marginBottom: 40, fontFamily: "system-ui, sans-serif" }}>
            PMP-certified and backed by $5M in liability coverage through My Project Team Management Corp., Vic offers unmatched post-purchase support through every stage of renovation and delivery.
          </p>

          <div style={{ display: "flex", gap: 40 }}>
            {[
              { label: "Interior Design", icon: "◇" },
              { label: "Construction", icon: "◆" },
              { label: "Development", icon: "◈" },
            ].map(item => (
              <div key={item.label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 20, color: "#C9A96E", marginBottom: 6 }}>{item.icon}</div>
                <div style={{ fontSize: 10, letterSpacing: "0.12em", color: "#7A7A7A", fontFamily: "system-ui, sans-serif" }}>{item.label.toUpperCase()}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
