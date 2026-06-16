import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import CoreOffering from "./components/CoreOffering";
import HealthcareGuests from "./components/HealthcareGuests";
import ProductionTeam from "./components/ProductionTeam";
import GuestCarousel from "./components/GuestCarousel";
import Episodes from "./components/Episodes";
import GuestJourney from "./components/GuestJourney";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow overflow-x-hidden">
        <Hero />
        <About />
        <CoreOffering />
        <HealthcareGuests />
        <ProductionTeam />
        <section id="guests" className="py-16 md:py-24 bg-[#101010]">
          <div className="container mx-auto px-4 md:px-6">
            <GuestCarousel title="Our Featured Guests" />
          </div>
        </section>
        <Episodes />
        <GuestJourney />
        <Testimonials />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
