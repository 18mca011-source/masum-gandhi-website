import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Jinal Zaveri",
    role: "Mindset Coach, Founder: The Spiritual Ascend",
    quote: "I had a really meaningful conversation with Masum on his podcast and truly enjoyed the experience. The questions were well thought out, flowed naturally, and allowed us to explore some deep and important topics with ease.",
  },
  {
    name: "Aditi Kulkarni",
    role: "Founder: Yuvana Wellness",
    quote: "Masum and his team are very cordial and professional in their dealings. I highly recommend them to all new age founders who want to amplify their reach.",
  },
  {
    name: "Niharika & Meshwa Patel",
    role: "Founders: Rhythm Rumble",
    quote: "An incredible experience! The team made us feel so comfortable and the questions brought out perspectives we hadn't even thought to share publicly before.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-16 md:py-24 border-t border-black/8">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-primary mb-3">Testimonials</p>
        <h2 className="font-headline text-5xl md:text-7xl text-[#0A0A0A] leading-none mb-10">
          What Guests Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[3px] bg-black/8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white p-7 hover:bg-[#F8F8F8] transition-colors">
              <div className="flex gap-0.5 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-[14px] text-[#555] leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
              <div className="border-t border-black/8 pt-5">
                <p className="font-accent font-bold text-[#0A0A0A] text-[13px]">{t.name}</p>
                <p className="text-[12px] text-[#888] mt-0.5">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
