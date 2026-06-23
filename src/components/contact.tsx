"use client";
export default function Contact() {
  return (
    <section id="contact" style={{
      background: "#0A0A0A",
      padding: "clamp(60px, 10vw, 120px) 10vw",
    }}>
      <div className="two-col-grid" style={{ maxWidth: 1200, margin: "0 auto", gap: "clamp(40px, 6vw, 80px)", alignItems: "start" }}>
        {/* Left */}
        <div>
          <div style={{ fontSize: 10, letterSpacing: "0.22em", color: "#FFFFFF", fontWeight: 600, marginBottom: 20, fontFamily: "system-ui, sans-serif" }}>
            GET IN TOUCH
          </div>
          <h2 style={{
            fontFamily: "var(--font-display), Georgia, serif",
            fontSize: "clamp(32px, 3.5vw, 52px)",
            fontWeight: 400,
            color: "#F8F8F8",
            margin: "0 0 48px 0",
            lineHeight: 1.15,
          }}>
            Ready to buy with<br />confidence?
          </h2>

          <form style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {["Full Name", "Email Address", "Phone Number"].map(field => (
              <div key={field}>
                <label style={{ display: "block", fontSize: 10, letterSpacing: "0.16em", color: "#FFFFFF", marginBottom: 8, fontFamily: "system-ui, sans-serif" }}>
                  {field.toUpperCase()}
                </label>
                <input
                  type="text"
                  placeholder={field}
                  style={{
                    width: "100%",
                    background: "rgba(250,250,248,0.05)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    borderRadius: 0,
                    padding: "14px 16px",
                    fontSize: 14,
                    color: "#F8F8F8",
                    outline: "none",
                    fontFamily: "system-ui, sans-serif",
                  }}
                />
              </div>
            ))}
            <div>
              <label style={{ display: "block", fontSize: 10, letterSpacing: "0.16em", color: "#FFFFFF", marginBottom: 8, fontFamily: "system-ui, sans-serif" }}>
                MESSAGE
              </label>
              <textarea
                rows={4}
                placeholder="Tell me about what you're looking for..."
                style={{
                  width: "100%",
                  background: "rgba(250,250,248,0.05)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: 0,
                  padding: "14px 16px",
                  fontSize: 14,
                  color: "#F8F8F8",
                  outline: "none",
                  resize: "vertical",
                  fontFamily: "system-ui, sans-serif",
                }}
              />
            </div>
            <button type="submit" style={{
              background: "#FFFFFF",
              color: "#0A0A0A",
              border: "none",
              padding: "16px 40px",
              fontSize: 11,
              letterSpacing: "0.16em",
              fontWeight: 700,
              cursor: "pointer",
              fontFamily: "system-ui, sans-serif",
              alignSelf: "flex-start",
            }}>
              SEND MESSAGE
            </button>
          </form>
        </div>

        {/* Right */}
        <div className="contact-right-pad">
          <div style={{ borderLeft: "1px solid rgba(255,255,255,0.2)", paddingLeft: 40 }}>
            <div style={{ marginBottom: 36 }}>
              <div style={{ fontSize: 10, letterSpacing: "0.18em", color: "#FFFFFF", fontWeight: 600, marginBottom: 10, fontFamily: "system-ui, sans-serif" }}>PHONE</div>
              <div style={{ fontSize: 18, color: "#F8F8F8", fontFamily: "var(--font-display), Georgia, serif" }}>(236) 707-8262</div>
            </div>
            <div style={{ marginBottom: 36 }}>
              <div style={{ fontSize: 10, letterSpacing: "0.18em", color: "#FFFFFF", fontWeight: 600, marginBottom: 10, fontFamily: "system-ui, sans-serif" }}>EMAIL</div>
              <div style={{ fontSize: 18, color: "#F8F8F8", fontFamily: "var(--font-display), Georgia, serif" }}>vic@vancity.realestate</div>
            </div>
            <div style={{ marginBottom: 48 }}>
              <div style={{ fontSize: 10, letterSpacing: "0.18em", color: "#FFFFFF", fontWeight: 600, marginBottom: 10, fontFamily: "system-ui, sans-serif" }}>OFFICE</div>
              <div style={{ fontSize: 15, color: "rgba(250,250,248,0.7)", lineHeight: 1.6, fontFamily: "system-ui, sans-serif" }}>
                #110-1020 Mainland Street<br />
                Vancouver, BC V6B 2T5
              </div>
            </div>
            <div>
              <div style={{ fontSize: 10, letterSpacing: "0.18em", color: "#FFFFFF", fontWeight: 600, marginBottom: 16, fontFamily: "system-ui, sans-serif" }}>FOLLOW</div>
              <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
                {["Instagram", "YouTube", "Facebook", "Twitter"].map(soc => (
                  <a key={soc} href="#" style={{
                    fontSize: 11,
                    letterSpacing: "0.1em",
                    color: "rgba(250,250,248,0.45)",
                    textDecoration: "none",
                    fontFamily: "system-ui, sans-serif",
                    transition: "color 0.2s",
                  }}
                  onMouseOver={e => e.currentTarget.style.color = "#FFFFFF"}
                  onMouseOut={e => e.currentTarget.style.color = "rgba(250,250,248,0.45)"}
                  >
                    {soc.toUpperCase()}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
