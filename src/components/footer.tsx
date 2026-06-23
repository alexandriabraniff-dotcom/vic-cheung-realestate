"use client";
export default function Footer() {
  return (
    <footer style={{
      background: "#050505",
      padding: "60px 10vw 40px",
      borderTop: "1px solid rgba(255,255,255,0.15)",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="footer-inner" style={{ marginBottom: 48 }}>
          <div>
            <div style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: 22, fontWeight: 500, color: "#F8F8F8", letterSpacing: "0.05em" }}>
              VIC CHEUNG
            </div>
            <div style={{ fontSize: 12, color: "#FFFFFF", letterSpacing: "0.18em", marginTop: 4, fontFamily: "system-ui, sans-serif", lineHeight: 1.6 }}>
              REALTOR® | TEAM UPHAUS | RENT IT FURNISHED REALTY
            </div>
            <p style={{ fontSize: 13, color: "rgba(250,250,248,0.4)", marginTop: 16, maxWidth: 300, lineHeight: 1.7, fontFamily: "system-ui, sans-serif" }}>
              Buy with a builder&apos;s mind. Invest with a designer&apos;s eye. Serving Vancouver and surrounding areas.
            </p>
          </div>

          <div className="footer-cols">
            {[
              { heading: "Navigate", links: ["About", "Services", "Testimonials", "Contact"] },
              { heading: "Services", links: ["Buyer Representation", "Investment Advisory", "Project Management"] },
              { heading: "Connect", links: ["Instagram", "YouTube", "Facebook", "Twitter"] },
            ].map(col => (
              <div key={col.heading}>
                <div style={{ fontSize: 12, letterSpacing: "0.18em", color: "#FFFFFF", fontWeight: 600, marginBottom: 16, fontFamily: "system-ui, sans-serif" }}>
                  {col.heading.toUpperCase()}
                </div>
                {col.links.map(link => (
                  <div key={link} style={{ marginBottom: 10 }}>
                    <a href="#" style={{ fontSize: 13, color: "rgba(250,250,248,0.45)", textDecoration: "none", fontFamily: "system-ui, sans-serif" }}>
                      {link}
                    </a>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div style={{
          borderTop: "1px solid rgba(250,250,248,0.08)",
          paddingTop: 28,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}>
          <div style={{ fontSize: 11, color: "rgba(250,250,248,0.25)", fontFamily: "system-ui, sans-serif" }}>
            © {new Date().getFullYear()} Vic Cheung. All rights reserved. REALTOR® is a trademark of CREA.
          </div>
          <div style={{ fontSize: 11, color: "rgba(250,250,248,0.25)", fontFamily: "system-ui, sans-serif" }}>
            Website designed by Alexandria Braniff
          </div>
        </div>
      </div>
    </footer>
  );
}
