"use client";

const reviews = [
  {
    name: "Ali Golriz",
    date: "a month ago",
    quote: "Vic's knowledge of construction gave us a real edge in evaluating properties. We avoided two bad deals and found exactly what we were looking for.",
    stars: 5,
  },
  {
    name: "Jillian Bice",
    date: "2 months ago",
    quote: "Incredibly helpful and professional throughout the entire process. Vic was always responsive and made sure we understood every step.",
    stars: 5,
  },
  {
    name: "Vancouver Client",
    date: "3 months ago",
    quote: "Vic's financial modelling on the rental yield was what sold us. He ran full projections before we even put in an offer. That level of detail is rare.",
    stars: 5,
  },
];

const googleUrl = "https://www.google.com/search?q=Vic+Cheung+Realtor+Vancouver+reviews";

const GoogleLogo = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

export default function Testimonials() {
  return (
    <section id="testimonials" style={{
      background: "#0A0A0A",
      padding: "clamp(40px, 6vw, 72px) 10vw",
      borderTop: "1px solid rgba(255,255,255,0.06)",
    }}>
      {/* Header row */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 32,
        flexWrap: "wrap",
        gap: 12,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <GoogleLogo />
          <span style={{ fontSize: 10, letterSpacing: "0.2em", color: "rgba(250,250,248,0.4)", fontFamily: "system-ui, sans-serif" }}>
            GOOGLE REVIEWS
          </span>
        </div>
        <a
          href={googleUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: 10,
            letterSpacing: "0.14em",
            color: "rgba(250,250,248,0.4)",
            textDecoration: "none",
            fontFamily: "system-ui, sans-serif",
            borderBottom: "1px solid rgba(255,255,255,0.15)",
            paddingBottom: 2,
          }}
        >
          VIEW ALL ON GOOGLE →
        </a>
      </div>

      {/* Cards row */}
      <div style={{
        display: "flex",
        gap: 16,
        overflowX: "auto",
        scrollSnapType: "x mandatory",
        WebkitOverflowScrolling: "touch",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        paddingBottom: 4,
      }}>
        {reviews.map((r, i) => (
          <a
            key={i}
            href={googleUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: "0 0 clamp(260px, 30vw, 340px)",
              scrollSnapAlign: "start",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              padding: "24px 28px",
              textDecoration: "none",
              display: "block",
              transition: "border-color 0.2s",
            }}
            onMouseOver={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)")}
            onMouseOut={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
          >
            {/* Stars */}
            <div style={{ display: "flex", gap: 3, marginBottom: 14 }}>
              {Array.from({ length: r.stars }).map((_, s) => (
                <span key={s} style={{ color: "#FBBC05", fontSize: 13 }}>★</span>
              ))}
            </div>
            {/* Quote */}
            <p style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: 13,
              color: "rgba(250,250,248,0.7)",
              lineHeight: 1.75,
              margin: "0 0 20px 0",
            }}>
              &ldquo;{r.quote}&rdquo;
            </p>
            {/* Name + date */}
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{
                width: 32,
                height: 32,
                background: "rgba(255,255,255,0.1)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 12,
                color: "#F8F8F8",
                fontWeight: 600,
                fontFamily: "system-ui, sans-serif",
                flexShrink: 0,
              }}>
                {r.name[0]}
              </div>
              <div>
                <div style={{ fontSize: 12, color: "#F8F8F8", fontFamily: "system-ui, sans-serif", fontWeight: 500 }}>{r.name}</div>
                <div style={{ fontSize: 10, color: "rgba(250,250,248,0.3)", fontFamily: "system-ui, sans-serif", marginTop: 2 }}>{r.date}</div>
              </div>
              <div style={{ marginLeft: "auto" }}>
                <GoogleLogo />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
