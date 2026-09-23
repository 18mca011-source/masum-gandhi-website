import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Episodes from "./components/Episodes";
import About from "./components/About";
import GuestsFrom from "./components/GuestsFrom";
import HealthcareGuests from "./components/HealthcareGuests";
import GuestCarousel from "./components/GuestCarousel";
import GuestJourney from "./components/GuestJourney";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Episodes />
        <About />
        <GuestsFrom />
        <HealthcareGuests />
        <section id="guests" className="bg-white py-16 md:py-24 border-t border-black/8">
          <div className="max-w-[1200px] mx-auto px-6">
            <GuestCarousel title="Our Featured Guests" />
          </div>
        </section>
        <GuestJourney />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
