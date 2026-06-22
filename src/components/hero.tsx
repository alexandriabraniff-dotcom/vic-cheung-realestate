export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: "100vh",
      background: "#0B1628",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      padding: "0 10vw",
      position: "relative",
      overflow: "hidden",
      paddingTop: "109px",
    }}>
      {/* Subtle gold vertical line */}
      <div style={{
        position: "absolute",
        left: "8vw",
        top: "20%",
        bottom: "20%",
        width: 1,
        background: "linear-gradient(to bottom, transparent, #C9A96E, transparent)",
        opacity: 0.4,
      }} />

      {/* Background pattern overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "radial-gradient(circle at 70% 50%, rgba(201,169,110,0.05) 0%, transparent 60%)",
        pointerEvents: "none",
      }} />

      <div style={{ position: "relative", maxWidth: 780 }}>
        <div style={{
          fontSize: 11,
          letterSpacing: "0.22em",
          color: "#C9A96E",
          fontWeight: 600,
          marginBottom: 28,
          fontFamily: "var(--font-sans), system-ui, sans-serif",
        }}>
          TEAM UPHAUS | RENT IT FURNISHED REALTY
        </div>

        <h1 style={{
          fontFamily: "var(--font-display), Georgia, serif",
          fontSize: "clamp(42px, 6vw, 80px)",
          fontWeight: 300,
          color: "#FAFAF8",
          lineHeight: 1.12,
          margin: "0 0 24px 0",
          letterSpacing: "-0.01em",
        }}>
          Buy with a builder&apos;s mind.<br />
          <em style={{ color: "#C9A96E", fontStyle: "italic" }}>Invest with a designer&apos;s eye.</em>
        </h1>

        <p style={{
          fontSize: 16,
          color: "rgba(250,250,248,0.65)",
          lineHeight: 1.75,
          maxWidth: 520,
          margin: "0 0 48px 0",
          fontFamily: "var(--font-sans), system-ui, sans-serif",
        }}>
          17 years spanning design, construction, and development. A rare perspective that gives you an edge before you sign.
        </p>

        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <a href="#contact" style={{
            background: "#C9A96E",
            color: "#0B1628",
            padding: "14px 36px",
            fontSize: 12,
            letterSpacing: "0.14em",
            fontWeight: 700,
            textDecoration: "none",
            display: "inline-block",
            transition: "opacity 0.2s",
          }}>
            WORK WITH VIC
          </a>
          <a href="#about" style={{
            border: "1px solid rgba(201,169,110,0.4)",
            color: "#C9A96E",
            padding: "14px 36px",
            fontSize: 12,
            letterSpacing: "0.14em",
            fontWeight: 600,
            textDecoration: "none",
            display: "inline-block",
          }}>
            LEARN MORE
          </a>
        </div>
      </div>

      {/* Bottom stats bar */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        borderTop: "1px solid rgba(201,169,110,0.15)",
        display: "flex",
        justifyContent: "center",
        gap: 80,
        padding: "28px 40px",
        background: "rgba(11,22,40,0.8)",
      }}>
        {[
          { num: "17+", label: "Years Experience" },
          { num: "PMP", label: "Certified" },
          { num: "$5M", label: "Renovation Coverage" },
        ].map(stat => (
          <div key={stat.num} style={{ textAlign: "center" }}>
            <div style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: 28,
              fontWeight: 400,
              color: "#C9A96E",
              lineHeight: 1,
            }}>{stat.num}</div>
            <div style={{
              fontSize: 10,
              letterSpacing: "0.16em",
              color: "rgba(250,250,248,0.45)",
              marginTop: 6,
              fontFamily: "var(--font-sans), system-ui, sans-serif",
            }}>{stat.label.toUpperCase()}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
