import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const doctors = [
  { name: "Dr. Disha",           role: "Paediatrician & Neonatologist",       image: "/doctors/dr3.webp" },
  { name: "Dr. Kunjan Joshi",    role: "Periodontist",                         image: "/doctors/dr4.webp" },
  { name: "Dr. Shuba Dharmana", role: "Celebrity Dermatologist",               image: "/doctors/dr7.webp" },
  { name: "Dr. Devendra Dangar", role: "Paediatrician & Neonatologist",        image: "/doctors/dr8.webp" },
  { name: "Dr. Poonam Dholakia", role: "Gynaecologist",                        image: "/doctors/dr9.webp" },
  { name: "Dr. Kishlay",         role: "Hypercarnivore Metabolic Doctor",      image: "/doctors/dr2.jpg" },
];

const featured = [
  { name: "Ravi Shah",       role: "Founder: Filmshoppee",           image: "/guests/Ravi Shah.webp",          wide: true  },
  { name: "Vabez",           role: "Founder: Sam's Salon",            image: "/guests/Vabez.webp",               wide: false },
  { name: "Anuja Kamdar",    role: "Founder: Sinful Bites",           image: "/guests/Anuja Kamdar.webp",        wide: false },
  { name: "Dr. Jwalant Chag",role: "Psychiatrist",                    image: "/guests/Jwalant Chag.webp",        wide: false },
  { name: "Vrishali Mulay",  role: "Founder: Regatta HR Services",    image: "/guests/Vrishali Mulay.webp",      wide: false },
];

const strip = [
  { name: "Kkaran & Chahhat",  role: "Founders: Paawsh",               image: "/guests/Kkaran & Chahhat Soni.webp" },
  { name: "Aditi Kulkarni",    role: "Founder: Yuvana Wellness",        image: "/guests/Aditi Kulkarni.webp" },
  { name: "Chitrak Shah",      role: "Co-Founder & MD: Shivalik Group", image: "/guests/Chitrak Shah.webp" },
  { name: "Jigar Daryanani",   role: "Healing & Relationships Coach",   image: "/guests/Jigar Daryanani.webp" },
  { name: "Malti Sharma",      role: "Visual Artist & Painter",         image: "/guests/Malti Sharma.webp" },
  { name: "Niharika & Meshwa", role: "Founders: Rhythm Rumble",         image: "/guests/Niharika & Meshwa Patel.webp" },
  { name: "Priyanka Dalal",    role: "Founder: High5 Performance",      image: "/guests/Priyanka Dalal.webp" },
  { name: "Thangvel Nadar",    role: "Founder: Idli Point",             image: "/guests/Thangvel Nadar.webp" },
  { name: "Vatsal Kamdar",     role: "Real Estate Developer",           image: "/guests/Vatsal Kamdar.webp" },
];

const steps = [
  { n: "01", title: "Discovery Call",        desc: "We discuss your story, key messages, and create a comfortable recording plan." },
  { n: "02", title: "Content Planning",      desc: "Our team crafts compelling talking points tailored to your journey." },
  { n: "03", title: "Studio Recording",      desc: "Record in our premium Ahmedabad studio with top-tier equipment." },
  { n: "04", title: "Premium Editing",       desc: "Our editors polish every frame to create a cinematic final product." },
  { n: "05", title: "Launch & Promotion",    desc: "We publish and promote across YouTube, Instagram, LinkedIn and more." },
];

export default function BeAGuestPage() {
  const [f0, f1, f2, f3, f4] = featured;

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-white py-20 md:py-28">
          <div className="max-w-[1200px] mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-primary mb-4">Be a Guest</p>
            <h1 className="font-headline text-[64px] md:text-[110px] leading-[0.9] text-[#0A0A0A] mb-6">
              Share Your<br />Story.
            </h1>
            <p className="max-w-lg text-[15px] leading-relaxed text-[#888] mb-8">
              Join 90+ industry leaders who&apos;ve sat across from Masum to share their real journey —
              the wins, the failures, and everything in between.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-black/10 border border-black/10 rounded-xl overflow-hidden max-w-2xl mb-10">
              {[
                { sup: "COMPLETED", val: "90+" }, { sup: "TOTAL VIEWS", val: "10M+" },
                { sup: "COMMUNITY", val: "52k+" }, { sup: "NEW EPISODE", val: "Every Sat" },
              ].map((s) => (
                <div key={s.sup} className="bg-white py-5 px-4 text-left">
                  <p className="text-[9px] font-semibold tracking-[0.18em] uppercase text-[#888] mb-1">{s.sup}</p>
                  <p className="font-headline text-3xl text-primary leading-none">{s.val}</p>
                </div>
              ))}
            </div>
            <a
              href="https://calendly.com/masumgandhi/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[13px] font-bold text-white bg-primary uppercase tracking-widest px-8 py-3.5 hover:bg-primary-dim transition-colors"
            >
              Book a Discovery Call →
            </a>
          </div>
        </section>

        {/* Healthcare Section */}
        <section className="bg-[#F8F8F8] py-16 md:py-24 border-t border-black/8">
          <div className="max-w-[1200px] mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-primary mb-3">Healthcare & Wellness</p>
            <h2 className="font-headline text-5xl md:text-7xl text-[#0A0A0A] leading-none mb-4">
              Trusted by<br />Healthcare Experts
            </h2>
            <p className="max-w-xl text-[14px] leading-relaxed text-[#888] mb-10">
              In-depth conversations with leading healthcare professionals including gynaecologists,
              psychiatrists, dermatologists, and metabolic doctors.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[3px] bg-black/8">
              {doctors.map((doc) => (
                <div key={doc.name} className="relative overflow-hidden aspect-[4/5] group">
                  <Image src={doc.image} alt={doc.name} fill
                    className="object-cover object-[center_20%] transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="w-7 h-[2px] bg-primary mb-2.5" />
                    <p className="font-headline text-2xl text-white leading-none">{doc.name}</p>
                    <p className="text-[11px] text-[#aaa] mt-1.5">{doc.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Guests */}
        <section className="bg-white py-16 md:py-24 border-t border-black/8">
          <div className="max-w-[1200px] mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-primary mb-3">Guests</p>
            <h2 className="font-headline text-5xl md:text-7xl text-[#0A0A0A] leading-none mb-10">
              Our Featured Guests
            </h2>

            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-[3px] bg-black/8">
              {[f0, f1].map((g) => (
                <div key={g.name} className="relative overflow-hidden aspect-[4/3] group">
                  <Image src={g.image} alt={g.name} fill
                    className="object-cover object-[center_10%] transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 60vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/5 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="w-7 h-[2px] bg-primary mb-2.5" />
                    <p className="font-headline text-[22px] text-white leading-none">{g.name}</p>
                    <p className="text-[11px] text-[#aaa] mt-1.5">{g.role}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-[3px] bg-black/8 mt-[3px]">
              {[f2, f3, f4].map((g) => (
                <div key={g.name} className="relative overflow-hidden aspect-[4/3] group">
                  <Image src={g.image} alt={g.name} fill
                    className="object-cover object-[center_10%] transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/5 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="w-7 h-[2px] bg-primary mb-2.5" />
                    <p className="font-headline text-[22px] text-white leading-none">{g.name}</p>
                    <p className="text-[11px] text-[#aaa] mt-1.5">{g.role}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Filmstrip */}
            <div className="relative mt-[3px]">
              <div className="flex gap-[3px] overflow-x-auto scrollbar-hide"
                style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}>
                {strip.map((g) => (
                  <div key={g.name} className="relative flex-shrink-0 overflow-hidden group"
                    style={{ width: 280, aspectRatio: "3/4", scrollSnapAlign: "start" }}>
                    <Image src={g.image} alt={g.name} fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ objectPosition: "50% 0%" }}
                      sizes="280px" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/5 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="w-7 h-[2px] bg-primary mb-2" />
                      <p className="font-headline text-[20px] text-white leading-none">{g.name}</p>
                      <p className="text-[11px] text-[#aaa] mt-1.5">{g.role}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pointer-events-none absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-l from-white/90 to-transparent" />
            </div>
          </div>
        </section>

        {/* Journey Steps */}
        <section className="bg-[#F8F8F8] py-16 md:py-24 border-t border-black/8">
          <div className="max-w-[1200px] mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-primary mb-3">Process</p>
            <h2 className="font-headline text-5xl md:text-7xl text-[#0A0A0A] leading-none mb-10">
              Your Journey<br />as Our Guest
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-black/8">
              {steps.map((s) => (
                <div key={s.n} className="bg-[#F8F8F8] p-6 hover:bg-white transition-colors">
                  <p className="text-[11px] font-semibold text-primary mb-4">STEP {s.n}</p>
                  <h3 className="font-accent font-bold text-[#0A0A0A] text-[14px] mb-2">{s.title}</h3>
                  <p className="text-[13px] text-[#888] leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0A0A0A] py-16 md:py-24">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-primary mb-4">Ready?</p>
            <h2 className="font-headline text-5xl md:text-[80px] text-white leading-none mb-6">
              Book Your<br />Discovery Call
            </h2>
            <p className="max-w-md mx-auto text-[14px] text-[#888] leading-relaxed mb-8">
              A 30-minute no-obligation call to understand your story and see if we&apos;re a good fit.
            </p>
            <a
              href="https://calendly.com/masumgandhi/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[13px] font-bold text-white bg-primary uppercase tracking-widest px-10 py-4 hover:bg-primary-dim transition-colors"
            >
              Book a Discovery Call →
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
