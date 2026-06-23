import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { allListings, extraListings } from "@/lib/listings-data";
import type { Listing } from "@/lib/listings-data";

export const metadata = {
  title: "All Listings | Vic Cheung Vancouver Real Estate",
  description: "Browse Vic Cheung's current and past property listings across Vancouver's most sought-after neighbourhoods.",
};

const combinedListings = [...allListings, ...extraListings];

export default function ListingsPage() {
  const active = combinedListings.filter(l => l.status === "Active");
  const sold = combinedListings.filter(l => l.status === "Sold");

  return (
    <main>
      {/* Designer credit banner */}
      <div style={{
        width: "100%",
        background: "#0B1628",
        color: "#C9A96E",
        textAlign: "center",
        padding: "10px 16px",
        fontSize: "12px",
        letterSpacing: "0.08em",
        fontFamily: "system-ui, sans-serif",
        position: "sticky",
        top: 0,
        zIndex: 9999,
      }}>
        Website designed by Alexandria Braniff — AlexandriaBraniff@gmail.com
      </div>
      <Nav />

      {/* Page header */}
      <div style={{
        background: "#0B1628",
        paddingTop: "clamp(100px, 14vw, 160px)",
        paddingBottom: "clamp(60px, 8vw, 100px)",
        paddingLeft: "10vw",
        paddingRight: "10vw",
      }}>
        <div style={{ fontSize: 10, letterSpacing: "0.22em", color: "#C9A96E", fontWeight: 600, marginBottom: 20, fontFamily: "system-ui, sans-serif" }}>
          VIC CHEUNG — REALTOR®
        </div>
        <h1 style={{
          fontFamily: "var(--font-display), Georgia, serif",
          fontSize: "clamp(36px, 5vw, 72px)",
          fontWeight: 300,
          color: "#FAFAF8",
          lineHeight: 1.1,
          margin: "0 0 20px 0",
        }}>
          Current &amp; Past<br /><em style={{ color: "#C9A96E", fontStyle: "italic" }}>Listings.</em>
        </h1>
        <p style={{ fontSize: 15, color: "rgba(250,250,248,0.5)", fontFamily: "system-ui, sans-serif", lineHeight: 1.7, maxWidth: 480, margin: 0 }}>
          Properties evaluated with a builder&apos;s eye and a designer&apos;s sensibility. Contact Vic for current availability and pricing.
        </p>
      </div>

      {/* Active listings */}
      <div style={{ background: "#FAFAF8", padding: "clamp(60px, 8vw, 100px) 10vw" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ fontSize: 10, letterSpacing: "0.22em", color: "#C9A96E", fontWeight: 600, marginBottom: 48, fontFamily: "system-ui, sans-serif" }}>
            ACTIVE LISTINGS ({active.length})
          </div>
          <div className="three-col-grid" style={{ gap: 24 }}>
            {active.map((listing, i) => (
              <ListingCard key={i} listing={listing} />
            ))}
          </div>
        </div>
      </div>

      {/* Sold listings */}
      <div style={{ background: "#F4F2EE", padding: "clamp(60px, 8vw, 100px) 10vw" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ fontSize: 10, letterSpacing: "0.22em", color: "#C9A96E", fontWeight: 600, marginBottom: 48, fontFamily: "system-ui, sans-serif" }}>
            SOLD ({sold.length})
          </div>
          <div className="three-col-grid" style={{ gap: 24 }}>
            {sold.map((listing, i) => (
              <ListingCard key={i} listing={listing} />
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{
        background: "#0B1628",
        padding: "clamp(60px, 8vw, 100px) 10vw",
        textAlign: "center",
      }}>
        <div style={{ fontSize: 10, letterSpacing: "0.22em", color: "#C9A96E", fontWeight: 600, marginBottom: 20, fontFamily: "system-ui, sans-serif" }}>
          WORK WITH VIC
        </div>
        <h2 style={{
          fontFamily: "var(--font-display), Georgia, serif",
          fontSize: "clamp(28px, 3.5vw, 52px)",
          fontWeight: 300,
          color: "#FAFAF8",
          margin: "0 0 32px 0",
          lineHeight: 1.2,
        }}>
          Ready to find your next property?
        </h2>
        <a href="/#contact" style={{
          background: "#C9A96E",
          color: "#0B1628",
          padding: "16px 40px",
          fontSize: 11,
          letterSpacing: "0.16em",
          fontWeight: 700,
          textDecoration: "none",
          display: "inline-block",
        }}>
          GET IN TOUCH
        </a>
      </div>

      <Footer />
    </main>
  );
}

function ListingCard({ listing }: { listing: Listing }) {
  return (
    <div style={{ background: "#FFFFFF", overflow: "hidden" }}>
      <div style={{ position: "relative", overflow: "hidden" }}>
        <img
          src={listing.image}
          alt={listing.label}
          style={{
            width: "100%",
            aspectRatio: "4/3",
            objectFit: "cover",
            display: "block",
            filter: "brightness(0.85)",
          }}
        />
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%)",
        }} />
        <div style={{ position: "absolute", top: 16, left: 16 }}>
          <span style={{
            background: listing.status === "Active" ? "#C9A96E" : "rgba(11,22,40,0.8)",
            color: listing.status === "Active" ? "#0B1628" : "rgba(250,250,248,0.6)",
            fontSize: 9,
            letterSpacing: "0.18em",
            fontWeight: 700,
            padding: "4px 10px",
            fontFamily: "system-ui, sans-serif",
          }}>
            {listing.status.toUpperCase()}
          </span>
        </div>
        <div style={{ position: "absolute", bottom: 16, left: 16 }}>
          <div style={{ fontSize: 9, letterSpacing: "0.18em", color: "rgba(201,169,110,0.9)", fontFamily: "system-ui, sans-serif", marginBottom: 4 }}>
            {listing.label}
          </div>
          <div style={{
            fontFamily: "var(--font-display), Georgia, serif",
            fontSize: "clamp(20px, 2vw, 26px)",
            fontWeight: 300,
            color: "#FAFAF8",
          }}>
            {listing.price}
          </div>
        </div>
      </div>
      <div style={{ padding: "20px 24px 24px" }}>
        <div style={{ fontSize: 13, color: "#0B1628", fontFamily: "system-ui, sans-serif", marginBottom: 4, fontWeight: 500 }}>
          {listing.address}
        </div>
        <div style={{ fontSize: 11, color: "#7A7A7A", fontFamily: "system-ui, sans-serif", marginBottom: 16, letterSpacing: "0.04em" }}>
          {listing.neighbourhood}
        </div>
        <div style={{ display: "flex", gap: 20, borderTop: "1px solid #E0DDD8", paddingTop: 14 }}>
          {[
            { val: listing.beds, label: "Beds" },
            { val: listing.baths, label: "Baths" },
            { val: listing.sqft, label: "Sq Ft" },
          ].map(d => (
            <div key={d.label}>
              <div style={{ fontSize: 16, color: "#0B1628", fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>{d.val}</div>
              <div style={{ fontSize: 9, letterSpacing: "0.12em", color: "#ABABAB", fontFamily: "system-ui, sans-serif" }}>{d.label.toUpperCase()}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
