export default function Testimonials() {
  const testimonials = [
    {
      name: "Ali Golriz",
      role: "Repeat Client",
      quote: "Professional and hard-working across multiple transactions. Vic's knowledge of construction gave us a real edge in evaluating properties — we avoided two bad deals and found exactly what we were looking for.",
      stars: 5,
    },
    {
      name: "Jillian Bice",
      role: "First-Time Buyer",
      quote: "Incredibly helpful and professional throughout the entire process. Vic was always responsive and made sure we understood every step. We couldn't have asked for a better guide.",
      stars: 5,
    },
    {
      name: "Vancouver Client",
      role: "Investment Property",
      quote: "Vic's financial modelling on the rental yield was what sold us. He ran full projections before we even put in an offer. That level of detail is rare to find in a realtor.",
      stars: 5,
    },
  ];

  return (
    <section id="testimonials" style={{
      background: "#FAFAF8",
      padding: "120px 10vw",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ fontSize: 10, letterSpacing: "0.22em", color: "#C9A96E", fontWeight: 600, marginBottom: 20, fontFamily: "system-ui, sans-serif" }}>
          TESTIMONIALS
        </div>
        <h2 style={{
          fontFamily: "var(--font-display), Georgia, serif",
          fontSize: "clamp(32px, 3.5vw, 52px)",
          fontWeight: 400,
          color: "#0B1628",
          margin: "0 0 64px 0",
          lineHeight: 1.15,
        }}>
          Words from clients<br />who know the difference.
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{
              background: "#FFFFFF",
              padding: "40px 36px",
              borderLeft: "1px solid #E0DDD8",
              position: "relative",
            }}>
              {/* Gold quote mark */}
              <div style={{
                fontFamily: "Georgia, serif",
                fontSize: 72,
                color: "#C9A96E",
                lineHeight: 0.8,
                opacity: 0.3,
                marginBottom: 16,
                userSelect: "none",
              }}>&ldquo;</div>
              <p style={{
                fontSize: 15,
                lineHeight: 1.8,
                color: "#333",
                margin: "0 0 28px 0",
                fontStyle: "italic",
                fontFamily: "var(--font-display), Georgia, serif",
              }}>
                {t.quote}
              </p>
              {/* Stars */}
              <div style={{ display: "flex", gap: 3, marginBottom: 14 }}>
                {Array.from({ length: t.stars }).map((_, s) => (
                  <span key={s} style={{ color: "#C9A96E", fontSize: 12 }}>★</span>
                ))}
              </div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#0B1628", letterSpacing: "0.06em", fontFamily: "system-ui, sans-serif" }}>
                {t.name}
              </div>
              <div style={{ fontSize: 11, color: "#7A7A7A", letterSpacing: "0.1em", marginTop: 3, fontFamily: "system-ui, sans-serif" }}>
                {t.role.toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
