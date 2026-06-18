import React from "react";

// ── Wireframe Helper Components ──────────────────────────────────────────────

function SectionLabel({ name, color }: { name: string; color: string }) {
  return (
    <span style={{ background: color, color: "#fff", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, padding: "3px 8px", borderRadius: 4, display: "inline-block", marginBottom: 10 }}>
      {name}
    </span>
  )
}

function ImgBox({ w = "100%", h = "180px", label = "IMAGE" }: { w?: string; h?: string; label?: string }) {
  return (
    <div style={{ width: w, height: h, position: "relative", background: "#d1d5db", border: "2px dashed #9ca3af", borderRadius: 6, overflow: "hidden", flexShrink: 0 }}>
      <svg width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
        <line x1="0" y1="0" x2="100%" y2="100%" stroke="#9ca3af" strokeWidth="1.5" />
        <line x1="100%" y1="0" x2="0" y2="100%" stroke="#9ca3af" strokeWidth="1.5" />
      </svg>
      <span style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "#6b7280", fontWeight: 700, letterSpacing: "0.1em", background: "rgba(255,255,255,0.5)" }}>{label}</span>
    </div>
  )
}

function TextLine({ w = "100%", h = 12, mt = 8 }: { w?: string; h?: number; mt?: number }) {
  return <div style={{ width: w, height: h, background: "#d1d5db", borderRadius: 4, marginTop: mt }} />
}

function HeadingLine({ w = "60%" }: { w?: string }) {
  return <div style={{ width: w, height: 28, background: "#9ca3af", borderRadius: 4, marginBottom: 10 }} />
}

function SubheadingLine({ w = "45%" }: { w?: string }) {
  return <div style={{ width: w, height: 18, background: "#b0b8c5", borderRadius: 4, marginBottom: 8 }} />
}

function Btn({ label, outline }: { label: string; outline?: boolean }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "9px 20px", borderRadius: 6, fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", color: outline ? "#374151" : "#fff", background: outline ? "transparent" : "#6b7280", border: "2px solid #6b7280", marginRight: 8, marginTop: 12 }}>
      {label}
    </div>
  )
}

function FormField({ label }: { label: string }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ fontSize: 11, color: "#6b7280", fontWeight: 600, marginBottom: 4 }}>{label}</div>
      <div style={{ height: 38, background: "#e5e7eb", borderRadius: 5, border: "1.5px dashed #9ca3af" }} />
    </div>
  )
}

const ss = (bg: string): React.CSSProperties => ({
  background: bg + "18", border: `2px dashed ${bg}55`, borderRadius: 10,
  padding: "28px 32px", marginBottom: 16, position: "relative",
})

// ── COLORS ───────────────────────────────────────────────────────────────────
const COLORS = {
  navbar: "#64748b",
  hero: "#4f46e5",
  about: "#16a34a",
  classes: "#d97706",
  pricing: "#7c3aed",
  testimonials: "#0891b2",
  contact: "#db2777",
  footer: "#1f2937",
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#f3f4f6" }}>

      {/* WIREFRAME KEY */}
      <div style={{ background: "#1e293b", color: "#94a3b8", padding: "14px 32px", display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", fontFamily: "system-ui, sans-serif" }}>
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", color: "#fff", marginRight: 8 }}>WIREFRAME KEY</span>
        {Object.entries(COLORS).map(([k, c]) => (
          <span key={k} style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11 }}>
            <span style={{ width: 10, height: 10, borderRadius: 2, background: c, display: "inline-block" }} />
            {k.toUpperCase()}
          </span>
        ))}
      </div>

      {/* NAVBAR */}
      <div style={ss(COLORS.navbar)}>
        <SectionLabel name="Navbar" color={COLORS.navbar} />
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ width: 160, height: 26, background: "#9ca3af", borderRadius: 4 }} />
          <div style={{ display: "flex", gap: 24 }}>
            {["About", "Classes", "Pricing", "Contact"].map(l => (
              <div key={l} style={{ width: 58, height: 14, background: "#d1d5db", borderRadius: 3 }} />
            ))}
          </div>
          <Btn label="Join Us" />
        </div>
      </div>

      {/* HERO */}
      <div style={ss(COLORS.hero)}>
        <SectionLabel name="Hero" color={COLORS.hero} />
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
          <ImgBox h="440px" label="HERO FULL-WIDTH IMAGE" />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", background: "rgba(0,0,0,0.3)", borderRadius: 6, textAlign: "center", padding: "0 40px" }}>
            <div style={{ width: "50%", height: 42, background: "rgba(255,255,255,0.75)", borderRadius: 4, marginBottom: 14 }} />
            <div style={{ width: "38%", height: 22, background: "rgba(255,255,255,0.55)", borderRadius: 4, marginBottom: 10 }} />
            <div>
              <Btn label="Join Us" />
              <Btn label="View Classes" outline />
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <div style={ss(COLORS.about)}>
        <SectionLabel name="About — Instructor Story" color={COLORS.about} />
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", gap: 44, alignItems: "flex-start" }}>
          <ImgBox w="42%" h="320px" label="INSTRUCTOR IMAGE" />
          <div style={{ flex: 1 }}>
            <HeadingLine w="65%" />
            <TextLine w="100%" />
            <TextLine w="95%" />
            <TextLine w="88%" />
            <TextLine w="75%" />
            <Btn label="Learn More" outline />
          </div>
        </div>
      </div>

      {/* CLASSES */}
      <div style={ss(COLORS.classes)}>
        <SectionLabel name="Classes" color={COLORS.classes} />
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <HeadingLine w="30%" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginTop: 16 }}>
            {["Hatha Flow", "Yin & Restore", "Vinyasa Power"].map((cls, i) => (
              <div key={i} style={{ background: "#e5e7eb", borderRadius: 10, overflow: "hidden", border: "1.5px dashed #9ca3af" }}>
                <ImgBox h="160px" label={`CLASS IMAGE ${i + 1}`} />
                <div style={{ padding: "18px 18px 20px" }}>
                  <SubheadingLine w="60%" />
                  <div style={{ display: "inline-block", padding: "3px 10px", background: "#d1d5db", borderRadius: 20, marginBottom: 10 }}>
                    <span style={{ fontSize: 10, color: "#6b7280", fontWeight: 700 }}>STYLE TAG</span>
                  </div>
                  <TextLine w="100%" />
                  <TextLine w="85%" />
                  <div style={{ display: "flex", gap: 16, marginTop: 10 }}>
                    <TextLine w="80px" h={11} mt={0} />
                    <TextLine w="70px" h={11} mt={0} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PRICING */}
      <div style={ss(COLORS.pricing)}>
        <SectionLabel name="Pricing" color={COLORS.pricing} />
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <HeadingLine w="25%" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginTop: 16 }}>
            {["Drop-In", "Monthly", "Annual"].map((tier, i) => (
              <div key={i} style={{ background: "#e5e7eb", borderRadius: 10, padding: "28px 22px", border: "1.5px dashed #9ca3af" }}>
                <SubheadingLine w="50%" />
                <div style={{ width: 80, height: 44, background: "#9ca3af", borderRadius: 6, margin: "14px 0 4px" }} />
                <TextLine w="65%" h={12} mt={4} />
                <div style={{ marginTop: 16 }}>
                  {[1, 2, 3, 4].map(j => (
                    <div key={j} style={{ display: "flex", gap: 8, alignItems: "center", marginTop: 8 }}>
                      <div style={{ width: 14, height: 14, background: "#9ca3af", borderRadius: 3, flexShrink: 0 }} />
                      <TextLine w="80%" h={11} mt={0} />
                    </div>
                  ))}
                </div>
                <Btn label="Get Started" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div style={ss(COLORS.testimonials)}>
        <SectionLabel name="Testimonials" color={COLORS.testimonials} />
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <HeadingLine w="30%" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginTop: 16 }}>
            {[1, 2, 3].map(i => (
              <div key={i} style={{ background: "#e5e7eb", borderRadius: 10, padding: "24px 20px", border: "1.5px dashed #9ca3af" }}>
                <div style={{ width: 52, height: 52, background: "#9ca3af", borderRadius: "50%", marginBottom: 14 }} />
                <TextLine w="100%" h={13} mt={0} />
                <TextLine w="95%" h={13} />
                <TextLine w="75%" h={13} />
                <TextLine w="45%" h={13} mt={12} />
                <div style={{ display: "flex", gap: 4, marginTop: 10 }}>
                  {[1, 2, 3, 4, 5].map(s => (
                    <div key={s} style={{ width: 14, height: 14, background: "#9ca3af", borderRadius: 2 }} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CONTACT */}
      <div style={ss(COLORS.contact)}>
        <SectionLabel name="Contact" color={COLORS.contact} />
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", gap: 48 }}>
          <div style={{ flex: 1 }}>
            <HeadingLine w="40%" />
            <FormField label="Name" />
            <FormField label="Email" />
            <FormField label="Message" />
            <Btn label="Send Message" />
          </div>
          <div style={{ width: 280 }}>
            <SubheadingLine w="60%" />
            {["Address", "Phone", "Instagram", "Facebook", "YouTube"].map(item => (
              <div key={item} style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
                <div style={{ width: 18, height: 18, background: "#9ca3af", borderRadius: 3, flexShrink: 0 }} />
                <TextLine w="75%" h={13} mt={0} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div style={{ ...ss(COLORS.footer), background: COLORS.footer + "22" }}>
        <SectionLabel name="Footer" color={COLORS.footer} />
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", gap: 48, alignItems: "flex-start" }}>
          <div style={{ flex: 1 }}>
            <div style={{ width: 150, height: 24, background: "#9ca3af", borderRadius: 4, marginBottom: 10 }} />
            <TextLine w="85%" />
            <TextLine w="70%" />
          </div>
          <div style={{ flex: 1, display: "flex", gap: 40 }}>
            {["Navigate", "Classes", "Connect"].map(col => (
              <div key={col}>
                <div style={{ width: 70, height: 14, background: "#9ca3af", borderRadius: 3, marginBottom: 10 }} />
                {[1, 2, 3, 4].map(i => <TextLine key={i} w="80px" h={11} />)}
              </div>
            ))}
          </div>
        </div>
        <div style={{ maxWidth: 1100, margin: "16px auto 0", borderTop: "1px dashed #d1d5db", paddingTop: 12 }}>
          <TextLine w="220px" h={11} mt={0} />
        </div>
      </div>

    </div>
  )
}
