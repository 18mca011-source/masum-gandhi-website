import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Jinal Zaveri",
    role: "Mindset Coach, Founder: The Spiritual Ascend",
    quote:
      "I had a really meaningful conversation with Masum on his podcast and truly enjoyed the experience. The questions were well thought out, flowed naturally, and allowed us to explore some deep and important topics with ease.",
  },
  {
    name: "Aditi Kulkarni",
    role: "Patient Care, Mental Health Care, Visiting Faculty",
    quote:
      "Masum and his team are very cordial and professional in their dealings...I highly recommended them to all new age founders who want to amplify their reach.",
  },
  {
    name: "Maitri Joshi",
    role: "Entrepreneur",
    quote:
      "It was an amazing experience being on a podcast with Masum. He's doing fabulous work in his industry and has a great curiosity for learning.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-[#101010]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold text-white">
            What Our <span className="text-yellow-400">Guests Say</span>
          </h2>
          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-yellow-400 to-purple-600 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="text-card-foreground shadow-sm bg-card/80 p-8 rounded-2xl border border-white/10 text-left transition-all duration-300 hover:border-yellow-400/50 hover:-translate-y-2 hover:shadow-lg hover:shadow-yellow-400/20"
              style={{ background: "rgba(26,26,26,0.8)" }}
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-lg text-white/80 font-accent italic leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="font-bold text-white font-headline">{t.name}</p>
                <p className="text-white/50 font-accent text-sm mt-1">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
