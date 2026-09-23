"use client";
import { useState } from "react";
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
  { name: "Jigar Daryanani",   role: "Healing & Relationships Coach",   image: "/guests/Jigar Daryani.webp" },
  { name: "Malti Sharma",      role: "Visual Artist & Painter",         image: "/guests/Malti Sharma.webp" },
  { name: "Niharika & Meshwa", role: "Founders: Rhythm Rumble",         image: "/guests/Niharika & Meshwa Patel.webp" },
  { name: "Priyanka Dalal",    role: "Founder: High5 Performance",      image: "/guests/Priyanka Dalal.webp" },
  { name: "Thangvel Nadar",    role: "Founder: Idli Point",             image: "/guests/Thangvel Nadar.webp" },
  { name: "Vatsal Kamdar",     role: "Real Estate Developer",           image: "/guests/Vatsal Kamdar.webp" },
];

const categories = [
  { emoji: "🏥", label: "Healthcare & Wellness" },
  { emoji: "🚀", label: "Startups & Founders" },
  { emoji: "💰", label: "Finance & Investment" },
  { emoji: "🏠", label: "Real Estate" },
  { emoji: "🍔", label: "F&B" },
  { emoji: "🎓", label: "Coaching & Education" },
  { emoji: "🎬", label: "Entertainment & Media" },
  { emoji: "💗", label: "Medical Specialists" },
];

const steps = [
  { n: "01", title: "Pre-Interview Preparation",   desc: "We discuss your story, key messages, and create a comfortable recording plan tailored to you." },
  { n: "02", title: "Content & Story Planning",    desc: "Our content team connects with you to craft compelling talking points and narratives that resonate." },
  { n: "03", title: "Professional Recording",      desc: "Record in our premium studio with top-tier equipment and expert guidance throughout." },
  { n: "04", title: "Premium Editing",             desc: "Our editors polish every frame to create a cinematic final product you'll be proud of." },
  { n: "05", title: "Strategic Promotion",         desc: "Amplify your message across our 52k+ community on Instagram, YouTube, and LinkedIn and beyond." },
];

const faqs = [
  { q: "Do I need to be famous or already successful to apply?", a: "Not at all. We look for authentic stories — whether you're just starting out or have decades of experience. What matters is that your journey can inspire and inform our audience." },
  { q: "Is the podcast recorded in studio or can it be done remotely?", a: "We primarily record in our premium Ahmedabad studio. Remote options may be available in special cases — we'll discuss this during your discovery call." },
  { q: "What if I want changes after reviewing the draft?", a: "We provide one round of revisions as part of our process. We want you to be proud of the final episode before it goes live." },
  { q: "What will I personally gain from being on the podcast?", a: "Beyond the exposure, you get a professionally edited video asset, clipped highlights for your social media, and access to our engaged community of 52k+ followers." },
  { q: "What kind of reach can my episode get?", a: "Our episodes regularly reach thousands of views across YouTube and social platforms. Our top episodes have crossed 500k+ views." },
  { q: "Can I use the podcast in my marketing, ads, or investor decks?", a: "Absolutely. Once your episode airs, you're free to use the content for your own marketing, ads, investor pitches, or any professional purpose." },
  { q: "Do I get any help preparing for the interview?", a: "Yes! Our team works with you beforehand to prepare tailored trigger questions and talking points that bring out your best story." },
  { q: "Can small businesses afford your services?", a: "We work with a range of budgets. Reach out during the discovery call and we'll find an arrangement that works for you." },
  { q: "Can I see examples of past episodes or guests?", a: "Of course — browse our YouTube channel or scroll through the guest section on this page to see the quality and variety of our conversations." },
];

export default function BeAGuestPage() {
  const [f0, f1, f2, f3, f4] = featured;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero — left text, right stats */}
        <section className="bg-white py-20 md:py-28 border-b border-black/8">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-primary mb-5">Be a Guest</p>
                <h1 className="font-headline text-[80px] md:text-[110px] leading-[0.88] text-[#0A0A0A] mb-6">
                  SHARE<br />YOUR<br />STORY.
                </h1>
                <p className="text-[15px] leading-relaxed text-[#888] mb-8 max-w-sm">
                  Join 90+ industry leaders who&apos;ve sat across from Masum to share their real journey —
                  the wins, the failures, and everything in between.
                </p>
                <a
                  href="https://calendly.com/masumgandhi/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[13px] font-bold text-white bg-primary uppercase tracking-widest px-8 py-3.5 hover:bg-[#b50f14] transition-colors"
                >
                  Book a Discovery Call →
                </a>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { val: "90+", label: "Episodes" },
                  { val: "10M+", label: "Total Views" },
                  { val: "52K+", label: "Community" },
                  { val: "Every Sat", label: "New Episode" },
                ].map((s) => (
                  <div key={s.label} className="bg-[#F8F8F8] p-6 rounded">
                    <p className="font-headline text-[48px] md:text-[56px] text-primary leading-none">{s.val}</p>
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-[#888] mt-2">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Guest Categories */}
        <section className="bg-white py-16 md:py-20 border-b border-black/8">
          <div className="max-w-[1200px] mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#888] mb-3">Guest Categories</p>
            <h2 className="font-headline text-[56px] md:text-[80px] leading-none text-[#0A0A0A] mb-10">
              GUESTS <span className="text-primary">FROM</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-black/10 border border-black/10">
              {categories.map((c) => (
                <div key={c.label} className="bg-white p-6 hover:bg-[#F8F8F8] transition-colors">
                  <span className="text-3xl block mb-3">{c.emoji}</span>
                  <p className="text-[14px] font-medium text-[#0A0A0A]">{c.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Healthcare Section */}
        <section className="bg-[#F8F8F8] py-16 md:py-20 border-b border-black/8">
          <div className="max-w-[1200px] mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#888] mb-3">Featured Category</p>
            <h2 className="font-headline text-[56px] md:text-[80px] leading-none text-[#0A0A0A] mb-4">
              A PLATFORM TRUSTED BY<br />
              <span className="text-primary">HEALTHCARE EXPERTS</span>
            </h2>
            <p className="max-w-xl text-[14px] leading-relaxed text-[#888] mb-10">
              Featuring in-depth conversations with leading healthcare professionals including gynaecologists,
              psychiatrists, dentists, oncologists, and diabetes specialists offering credible insights on mental
              health, women&apos;s health, and lifestyle.
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
        <section className="bg-white py-16 md:py-20 border-b border-black/8">
          <div className="max-w-[1200px] mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#888] mb-3">Who&apos;s Been On</p>
            <h2 className="font-headline text-[56px] md:text-[80px] leading-none text-[#0A0A0A] mb-10">
              OUR FEATURED <span className="text-primary">GUESTS</span>
            </h2>

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

        {/* Journey — vertical timeline */}
        <section className="bg-[#F8F8F8] py-16 md:py-20 border-b border-black/8">
          <div className="max-w-[1200px] mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#888] mb-3">The Process</p>
            <h2 className="font-headline text-[56px] md:text-[80px] leading-none text-[#0A0A0A] mb-12">
              YOUR JOURNEY AS <span className="text-primary">OUR GUEST</span>
            </h2>
            <p className="text-[14px] text-[#888] mb-10 -mt-8">A seamless, professional experience from start to finish.</p>

            <div className="relative ml-4 md:ml-8">
              {/* Vertical red line */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary/30" />

              <div className="space-y-0">
                {steps.map((s, i) => (
                  <div key={s.n} className="relative flex gap-8 pb-10 last:pb-0">
                    {/* Red dot */}
                    <div className="flex-shrink-0 w-0 relative">
                      <div className="absolute -left-[5px] top-[6px] w-[10px] h-[10px] rounded-full bg-primary" />
                    </div>
                    <div className="pl-8">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-1">STEP {s.n}</p>
                      <div className="flex items-baseline gap-4 mb-2">
                        <span className="font-headline text-[56px] md:text-[72px] leading-none text-[#0A0A0A]/10">{String(i+1).padStart(2,"0")}</span>
                        <h3 className="font-semibold text-[18px] text-[#0A0A0A]">{s.title}</h3>
                      </div>
                      <p className="text-[13px] text-[#888] leading-relaxed max-w-lg">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-16 md:py-20 border-b border-black/8">
          <div className="max-w-[1200px] mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#888] mb-3">Got Questions?</p>
            <h2 className="font-headline text-[48px] md:text-[72px] leading-none text-[#0A0A0A] mb-3">
              EVERYTHING YOU NEED TO <span className="text-primary">KNOW</span>
            </h2>
            <p className="text-[14px] text-[#888] mb-10">Your questions about becoming a guest, answered.</p>

            <div className="divide-y divide-black/8">
              {faqs.map((faq, i) => (
                <div key={i}>
                  <button
                    className="w-full flex items-center justify-between py-5 text-left group"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="text-[15px] font-medium text-[#0A0A0A] pr-8">{faq.q}</span>
                    <span className={`flex-shrink-0 text-primary text-xl transition-transform duration-200 ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                  </button>
                  {openFaq === i && (
                    <div className="pb-5 text-[14px] text-[#666] leading-relaxed max-w-2xl">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Red CTA Banner */}
        <section className="bg-primary py-14 md:py-16">
          <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-headline text-[40px] md:text-[56px] leading-none text-white">
                READY TO SHARE YOUR STORY?
              </h2>
              <p className="text-[14px] text-white/70 mt-2">
                Book a discovery call with Masum and let&apos;s create something extraordinary together.
              </p>
            </div>
            <a
              href="https://calendly.com/masumgandhi/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 text-[13px] font-bold text-[#0A0A0A] bg-white uppercase tracking-widest px-8 py-4 hover:bg-white/90 transition-colors whitespace-nowrap"
            >
              Schedule Your Session →
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
