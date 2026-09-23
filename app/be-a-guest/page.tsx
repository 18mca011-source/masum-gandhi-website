"use client";
import { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const doctors = [
  { name: "Dr. Disha",           role: "Paediatrician & Neonatologist",       image: "/doctors/dr3.webp" },
  { name: "Dr. Kunjan Joshi",    role: "Periodontist",                         image: "/doctors/dr4.webp" },
  { name: "Dr. Shuba Dharmana", role: "Celebrity Dermatologist",               image: "/doctors/dr7.webp" },
  { name: "Dr. Devendra Dangar", role: "Paediatrician",                        image: "/doctors/dr8.webp" },
  { name: "Dr. Poonam Dholakia", role: "Gynaecologist",                        image: "/doctors/dr9.webp" },
  { name: "Dr. Kishlay",         role: "Hypercarnivore Metabolic Doctor",      image: "/doctors/dr2.jpg" },
];

const featured = [
  { name: "Ravi Shah",       role: "Founder: Filmshoppee",           image: "/guests/Ravi Shah.webp" },
  { name: "Vabez",           role: "Founder: Sam's Salon",            image: "/guests/Vabez.webp" },
  { name: "Anuja Kamdar",    role: "Founder: Sinful Bites",           image: "/guests/Anuja Kamdar.webp" },
  { name: "Dr. Jwalant Chag",role: "Psychiatrist",                    image: "/guests/Jwalant Chag.webp" },
  { name: "Vrishali Mulay",  role: "Founder: Regatta HR Services",    image: "/guests/Vrishali Mulay.webp" },
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
  { emoji: "🩷", label: "Medical Specialists" },
];

const steps = [
  { n: "01", title: "Pre-Interview Preparation",   desc: "We discuss your story, key messages, and create a comfortable recording plan tailored to you." },
  { n: "02", title: "Content & Story Planning",    desc: "Our content team connects with you to craft compelling talking points and narratives that resonate." },
  { n: "03", title: "Professional Recording",      desc: "Record in our premium studio with top-tier equipment and expert guidance throughout." },
  { n: "04", title: "Premium Editing",             desc: "Our editors polish every frame to create a cinematic final product you'll be proud of." },
  { n: "05", title: "Strategic Promotion",         desc: "Amplify your message across our 52k+ community on Instagram, YouTube, and LinkedIn and beyond." },
];

const faqs = [
  { q: "Do I need to be famous or already successful to apply?", a: "Not at all. We look for guests with real stories, genuine insights, and a willingness to share their journey — regardless of fame or follower count." },
  { q: "Is the podcast recorded in studio or can it be done remotely?", a: "We record in our premium studio in Ahmedabad for the best quality. Remote options are available for guests outside the city." },
  { q: "What if I want changes after reviewing the draft?", a: "We offer revision rounds before final delivery. Your comfort with the final output matters to us." },
  { q: "What will I personally gain from being on the podcast?", a: "You get a long-form content asset, increased visibility, credibility building, and access to our 52k+ community across Instagram, YouTube, and LinkedIn." },
  { q: "What kind of reach can my episode get?", a: "Episodes have reached 12k–33k+ views organically. With strategic promotion, your episode gets amplified across all our platforms." },
  { q: "Can I use the podcast in my marketing, ads, or investor decks?", a: "Absolutely. Once published, the episode is yours to use across your marketing, social media, and presentations." },
  { q: "Do I get any help preparing for the interview?", a: "Yes — our team does deep research on your background and curates personalised questions so you feel fully prepared before we record." },
  { q: "Can small businesses afford your services?", a: "We have flexible packages designed for different budgets. Reach out and we'll find the right fit for you." },
  { q: "Can I see examples of past episodes or guests?", a: "Yes! Browse our episodes page or our YouTube channel to see full conversations with past guests." },
];

const s = {
  section: (bg: string, extra = {}) => ({ padding: "80px 48px", background: bg, borderTop: "1px solid #EBEBEB", ...extra } as React.CSSProperties),
  eyebrow: { fontSize: 11, fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase" as const, color: "#E8151B", marginBottom: 12 } as React.CSSProperties,
  title: { fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(40px, 5vw, 64px)", color: "#0A0A0A", letterSpacing: "0.03em", marginBottom: 8 } as React.CSSProperties,
  yellow: { color: "#E8151B" } as React.CSSProperties,
  sub: { fontSize: 15, color: "#666", marginBottom: 48, lineHeight: 1.6 } as React.CSSProperties,
};

export default function BeAGuestPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Navbar logoRed={true} />
      <main>

        {/* HERO */}
        <div style={{ padding: "140px 48px 80px", maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}
          className="!grid-cols-1 md:!grid-cols-[1fr_1fr]">
          <div>
            <div style={s.eyebrow}>Be a Guest</div>
            <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(64px, 8vw, 112px)", lineHeight: 0.88, letterSpacing: "0.02em", color: "#0A0A0A", marginBottom: 24 }}>Share<br />Your<br />Story.</h1>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: "#888", marginBottom: 36 }}>Join 90+ industry leaders who&apos;ve sat across from Masum to share their real journey — the wins, the failures, and everything in between.</p>
            <a href="https://calendly.com/masumgandhi/30min" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#E8151B", color: "#fff", fontWeight: 700, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", padding: "14px 28px", borderRadius: 2, textDecoration: "none" }}
              className="hover:opacity-85 transition-opacity">
              Book a Discovery Call →
            </a>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }}>
            {[["90+","Episodes"],["10M+","Total Views"],["52K+","Community"],["Every Sat","New Episode"]].map(([val,label])=>(
              <div key={label} style={{ background: "#EFEFEF", border: "1px solid #D8D8D8", padding: "24px 20px" }}>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 42, color: "#E8151B", lineHeight: 1 }}>{val}</div>
                <div style={{ fontSize: 11, color: "#555", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* GUESTS FROM */}
        <section style={s.section("#fff")}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={s.eyebrow}>Guest Categories</div>
            <h2 style={s.title}>Guests <span style={s.yellow}>From</span></h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 2, marginTop: 40 }}>
              {categories.map((c) => (
                <div key={c.label} style={{ background: "#F4F4F4", border: "1px solid #D8D8D8", padding: "28px 20px", display: "flex", flexDirection: "column", gap: 12 }}
                  className="hover:bg-[#E5E5E5] transition-colors">
                  <span style={{ fontSize: 28, lineHeight: 1 }}>{c.emoji}</span>
                  <span style={{ fontSize: 13, fontWeight: 500, color: "#333", lineHeight: 1.4 }}>{c.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HEALTHCARE */}
        <section style={s.section("#F8F8F8")}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ maxWidth: 680, marginBottom: 48 }}>
              <div style={s.eyebrow}>Featured Category</div>
              <h2 style={s.title}>A Platform Trusted by<br /><span style={s.yellow}>Healthcare Experts</span></h2>
              <p style={{ fontSize: 15, color: "#777", lineHeight: 1.7, marginTop: 16 }}>
                Featuring in-depth conversations with leading healthcare professionals including gynecologists, psychiatrists, dentists, oncologists, and diabetes specialists offering credible insights on mental health, women&apos;s health, and lifestyle.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 3 }}>
              {doctors.map((doc) => (
                <div key={doc.name} style={{ position: "relative", overflow: "hidden", aspectRatio: "4/5" }} className="group">
                  <Image src={doc.image} alt={doc.name} fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                    style={{ objectPosition: "center 20%" }}
                    sizes="(max-width: 768px) 50vw, 33vw" />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: 24 }}>
                    <div style={{ width: 28, height: 2, background: "#E8151B", marginBottom: 10 }} />
                    <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 24, color: "#fff", letterSpacing: "0.04em", lineHeight: 1 }}>{doc.name}</div>
                    <div style={{ fontSize: 12, color: "#aaa", marginTop: 5 }}>{doc.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURED GUESTS */}
        <section style={s.section("#fff")} id="featured">
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={s.eyebrow}>Who&apos;s Been On</div>
            <h2 style={s.title}>Our Featured <span style={s.yellow}>Guests</span></h2>

            {/* Row 1: 3fr 2fr */}
            <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: 3 }}>
              {[featured[0], featured[1]].map((g) => (
                <div key={g.name} style={{ position: "relative", overflow: "hidden", aspectRatio: "4/3" }} className="group">
                  <Image src={g.image} alt={g.name} fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                    style={{ objectPosition: "center 10%" }}
                    sizes="(max-width: 768px) 100vw, 60vw" />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.05) 55%, transparent 100%)", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: 22 }}>
                    <div style={{ width: 28, height: 2, background: "#E8151B", marginBottom: 10 }} />
                    <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 22, color: "#fff", letterSpacing: "0.04em", lineHeight: 1 }}>{g.name}</div>
                    <div style={{ fontSize: 12, color: "#aaa", marginTop: 5 }}>{g.role}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 2: 3 equal */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 3, marginTop: 3 }}>
              {[featured[2], featured[3], featured[4]].map((g) => (
                <div key={g.name} style={{ position: "relative", overflow: "hidden", aspectRatio: "4/3" }} className="group">
                  <Image src={g.image} alt={g.name} fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                    style={{ objectPosition: "center 10%" }}
                    sizes="(max-width: 768px) 100vw, 33vw" />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.05) 55%, transparent 100%)", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: 22 }}>
                    <div style={{ width: 28, height: 2, background: "#E8151B", marginBottom: 10 }} />
                    <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 22, color: "#fff", letterSpacing: "0.04em", lineHeight: 1 }}>{g.name}</div>
                    <div style={{ fontSize: 12, color: "#aaa", marginTop: 5 }}>{g.role}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Filmstrip */}
            <div style={{ position: "relative", marginTop: 3 }}>
              <div style={{ display: "flex", gap: 3, overflowX: "auto", overflowY: "hidden", scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch", scrollbarWidth: "none" }}
                className="[&::-webkit-scrollbar]:hidden">
                {strip.map((g) => (
                  <div key={g.name} style={{ width: 280, aspectRatio: "3/4", flexShrink: 0, position: "relative", overflow: "hidden", scrollSnapAlign: "start" }} className="group">
                    <Image src={g.image} alt={g.name} fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                      style={{ objectPosition: "50% 0%" }}
                      sizes="280px" />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.05) 55%, transparent 100%)", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: 22 }}>
                      <div style={{ width: 28, height: 2, background: "#E8151B", marginBottom: 10 }} />
                      <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 20, color: "#fff", letterSpacing: "0.04em", lineHeight: 1 }}>{g.name}</div>
                      <div style={{ fontSize: 11, color: "#aaa", marginTop: 5 }}>{g.role}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ pointerEvents: "none", position: "absolute", top: 0, right: 0, bottom: 0, width: 80, background: "linear-gradient(to left, rgba(255,255,255,0.9), transparent)" }} />
            </div>
          </div>
        </section>

        {/* JOURNEY */}
        <section style={s.section("#F8F8F8")} id="journey">
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <div style={s.eyebrow}>The Process</div>
            <h2 style={s.title}>Your Journey as <span style={s.yellow}>Our Guest</span></h2>
            <p style={{ fontSize: 15, color: "#666", marginBottom: 56, lineHeight: 1.6 }}>A seamless, professional experience from start to finish.</p>
            <div style={{ borderLeft: "1px solid #222", paddingLeft: 40 }}>
              {steps.map((step, i) => (
                <div key={step.n} style={{ display: "grid", gridTemplateColumns: "56px 1fr", gap: 20, alignItems: "flex-start", paddingBottom: i < steps.length - 1 ? 48 : 0, position: "relative" }}>
                  <div style={{ content: '""', position: "absolute", left: -44, top: 8, width: 8, height: 8, borderRadius: "50%", background: "#E8151B", boxShadow: "0 0 0 4px rgba(232,21,27,0.15)" }} />
                  <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 48, color: "#1e1e1e", lineHeight: 1, paddingTop: 4 }}>{step.n}</div>
                  <div>
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", color: "#E8151B", textTransform: "uppercase", marginBottom: 6 }}>Step {step.n}</div>
                    <div style={{ fontSize: 18, fontWeight: 700, color: "#0A0A0A", marginBottom: 8 }}>{step.title}</div>
                    <div style={{ fontSize: 14, lineHeight: 1.7, color: "#666" }}>{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={s.section("#fff")} id="faq">
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <div style={s.eyebrow}>Got Questions?</div>
            <h2 style={s.title}>Everything you need to <span style={s.yellow}>know</span></h2>
            <p style={{ fontSize: 15, color: "#666", marginBottom: 48, lineHeight: 1.6 }}>Your questions about becoming a guest, answered.</p>
            <div>
              {faqs.map((faq, i) => (
                <div key={i} style={{ borderBottom: "1px solid #1a1a1a" }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, background: "none", border: "none", padding: "22px 0", fontSize: 15, fontWeight: 600, color: "#0A0A0A", cursor: "pointer", textAlign: "left", fontFamily: "inherit" }}
                    className="hover:text-[#E8151B] transition-colors">
                    <span>{faq.q}</span>
                    <span style={{ fontSize: 22, color: "#E8151B", flexShrink: 0, fontWeight: 300, transition: "transform .2s", transform: openFaq === i ? "rotate(45deg)" : "none" }}>+</span>
                  </button>
                  {openFaq === i && (
                    <div style={{ fontSize: 14, lineHeight: 1.8, color: "#777", paddingBottom: 22 }}>{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <div style={{ background: "#E8151B", padding: "56px 48px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32, flexWrap: "wrap" as const }}>
          <div>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(28px, 3.5vw, 48px)", color: "#fff", letterSpacing: "0.04em" }}>Ready to Share Your Story?</h2>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", marginTop: 6 }}>Book a discovery call with Masum and let&apos;s create something extraordinary together.</p>
          </div>
          <a href="https://calendly.com/masumgandhi/30min" target="_blank" rel="noopener noreferrer"
            style={{ flexShrink: 0, background: "#fff", color: "#000", fontWeight: 700, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", padding: "14px 28px", borderRadius: 2, textDecoration: "none", whiteSpace: "nowrap" }}
            className="hover:opacity-85 transition-opacity">
            Schedule Your Session →
          </a>
        </div>

      </main>
      <Footer dark={true} />
    </>
  );
}
