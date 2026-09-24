import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Jinal Zaveri",
    role: "Mindset Coach, Founder: The Spiritual Ascend",
    quote: "I had a really meaningful conversation with Masum on his podcast and truly enjoyed the experience. The questions were well thought out, flowed naturally, and allowed us to explore some deep and important topics with ease. It was a smooth, engaging conversation, and I appreciate the intention and curiosity he brings as a host. I'd highly recommend his podcast to anyone who enjoys thoughtful discussions and real insights.",
  },
  {
    name: "Aditi Kulkarni",
    role: "Patient Care | Mental Health Care | Visiting Faculty",
    quote: "Masum and his team are very cordial and professional in their dealings. Due to some unforeseen circumstances, the dates for shooting had to be moved but it was all managed quite efficiently. I highly recommended them to all new age founders or individuals who would want to make their voiced heard.",
  },
  {
    name: "Maitri Joshi",
    role: "",
    quote: "It was an amazing experience being on a podcast with Masum. He's doing fabulous work in his industry and has a great curiosity for learning. With many Shark Tank founders joining his podcast, he's truly making a mark. I highly recommend him!",
  },
];

export default function Testimonials() {
  return (
    <section style={{ background: "#0A0A0A", borderTop: "1px solid #222" }} className="py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-[1200px] mx-auto">
        <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#E8151B", marginBottom: 12 }}>Testimonials</p>
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(40px, 6vw, 72px)", color: "#fff", lineHeight: 1, marginBottom: 40 }}>
          What Guests Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 3 }}>
          {testimonials.map((t) => (
            <div key={t.name} style={{ background: "#111", padding: 28, transition: "background 0.2s" }} className="hover:bg-[#161616]">
              <div style={{ display: "flex", gap: 4, marginBottom: 20 }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} style={{ width: 14, height: 14, fill: "#E8151B", color: "#E8151B" }} />
                ))}
              </div>
              <p style={{ fontSize: 14, color: "#888", lineHeight: 1.7, marginBottom: 24 }}>&ldquo;{t.quote}&rdquo;</p>
              <div style={{ borderTop: "1px solid #222", paddingTop: 20 }}>
                <p style={{ fontWeight: 700, color: "#fff", fontSize: 13 }}>{t.name}</p>
                {t.role && <p style={{ fontSize: 12, color: "#555", marginTop: 4 }}>{t.role}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
