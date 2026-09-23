import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Episodes from "./components/Episodes";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar logoRed={false} />
      <main>
        <Hero />
        <About />
        <Episodes />
        <CTA />
      </main>
      <Footer dark={false} />
    </>
  );
}
