import Nav from "@/components/nav";
import Hero from "@/components/hero";
import About from "@/components/about";
import FeaturedListings from "@/components/listings";
import Services from "@/components/services";
import Neighborhoods from "@/components/neighborhoods";
import Credentials from "@/components/credentials";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      {/* DESIGNER CREDIT BANNER - remove only after client payment */}
      <div style={{
        width: "100%",
        background: "#0A0A0A",
        color: "#FFFFFF",
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
      <Hero />
      <About />
      <FeaturedListings />
      <Services />
      <Neighborhoods />
      <Credentials />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
