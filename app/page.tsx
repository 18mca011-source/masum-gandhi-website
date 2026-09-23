import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import GuestsFrom from "./components/GuestsFrom";
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
      <main>
        <Hero />
        <About />
        <GuestsFrom />
        <CoreOffering />
        <HealthcareGuests />
        <ProductionTeam />
        <section id="guests" className="bg-white py-16 md:py-24 border-t border-black/8">
          <div className="max-w-[1200px] mx-auto px-6">
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
