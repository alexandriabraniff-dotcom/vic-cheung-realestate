const testimonials = [
  {
    name: "Ali Golriz",
    role: "Repeat Client",
    quote: "Vic's knowledge of construction gave us a real edge in evaluating properties. We avoided two bad deals and found exactly what we were looking for.",
    stars: 5,
  },
  {
    name: "Jillian Bice",
    role: "First-Time Buyer",
    quote: "Incredibly helpful and professional throughout the entire process. Vic was always responsive and made sure we understood every step.",
    stars: 5,
  },
  {
    name: "Vancouver Client",
    role: "Investment Property",
    quote: "Vic's financial modelling on the rental yield was what sold us. He ran full projections before we even put in an offer. That level of detail is rare to find in a realtor.",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" style={{
      background: "#0B1628",
      padding: "clamp(60px, 10vw, 120px) 10vw",
    }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        {/* Source label + vertical line */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{
            fontSize: 9,
            letterSpacing: "0.24em",
            color: "rgba(250,250,248,0.25)",
            fontFamily: "system-ui, sans-serif",
            marginBottom: 20,
          }}>
            VIA GOOGLE REVIEWS
          </div>
          <div style={{ width: 1, height: 52, background: "linear-gradient(to bottom, rgba(201,169,110,0.4), transparent)", margin: "0 auto" }} />
        </div>

        {/* Pull quotes stacked */}
        <div style={{ display: "flex", flexDirection: "column", gap: 72 }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <p style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "clamp(18px, 2.2vw, 26px)",
                fontWeight: 300,
                color: "#FAFAF8",
                lineHeight: 1.7,
                fontStyle: "italic",
                margin: "0 0 28px 0",
              }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div style={{ display: "flex", justifyContent: "center", gap: 4, marginBottom: 14 }}>
                {Array.from({ length: t.stars }).map((_, s) => (
                  <span key={s} style={{ color: "#C9A96E", fontSize: 11 }}>★</span>
                ))}
              </div>
              <div style={{
                fontSize: 12,
                fontWeight: 600,
                color: "#FAFAF8",
                letterSpacing: "0.1em",
                fontFamily: "system-ui, sans-serif",
              }}>
                {t.name}
              </div>
              <div style={{
                fontSize: 10,
                letterSpacing: "0.14em",
                color: "rgba(250,250,248,0.3)",
                marginTop: 5,
                fontFamily: "system-ui, sans-serif",
              }}>
                {t.role.toUpperCase()}
              </div>
              {i < testimonials.length - 1 && (
                <div style={{
                  width: 40,
                  height: 1,
                  background: "rgba(201,169,110,0.2)",
                  margin: "52px auto 0",
                }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
