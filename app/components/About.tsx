import { Award, Sparkles } from "lucide-react";
import Image from "next/image";

const guestCategories = [
  { emoji: "🏥", label: "Healthcare & Wellness" },
  { emoji: "🚀", label: "Startups & Founders" },
  { emoji: "💰", label: "Finance & Investment" },
  { emoji: "🏠", label: "Real Estate" },
  { emoji: "🍔", label: "Food & Beverage" },
  { emoji: "🎓", label: "Coaching & Education" },
  { emoji: "🎬", label: "Entertainment & Media" },
  { emoji: "🦷", label: "Medical Specialists" },
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#101010] relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-yellow-400/5 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="flex justify-center items-center order-1 md:order-none">
            <div className="relative w-full aspect-[4/5] max-w-[320px] sm:max-w-[400px] md:max-w-full rounded-2xl overflow-hidden shadow-xl shadow-yellow-400/10 transition-all duration-500 hover:shadow-yellow-400/20">
              <Image
                src="https://res.cloudinary.com/dx9zlffut/image/upload/v1779680173/IMG_2062_1_li8tou.jpg"
                alt="Masum Gandhi"
                fill
                className="object-cover object-[62%_center]"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {/* Overlay badge */}
              <div className="absolute bottom-4 right-4">
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-black/80 border border-yellow-400/30 text-xs text-white backdrop-blur-sm">
                  <Award className="w-4 h-4 text-yellow-400" />
                  <span className="font-accent font-semibold">80+ Episodes</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-left flex flex-col justify-center">
            <div className="flex items-center gap-1 mb-4">
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs bg-yellow-400/10 border-yellow-400/50 text-yellow-300 backdrop-blur-sm font-semibold">
                <Sparkles className="w-3 h-3 mr-1" /> About the Host
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-headline text-white font-bold mb-4">
              Masum Gandhi
            </h2>
            <p className="text-white/60 font-accent mb-4 text-base">Based in Ahmedabad</p>

            <div className="space-y-4 md:space-y-6 text-white/80 font-accent text-sm sm:text-base md:text-lg leading-relaxed">
              <p>
                Through 80+ conversations and counting, I&apos;ve built a platform focused on uncovering the real
                stories behind success — the struggles, pivots, lessons, and defining moments people rarely talk about.
              </p>
              <p>
                My unique <strong className="text-yellow-400">Trigger-Question Method</strong> is designed to create
                authentic, unfiltered discussions that go beyond surface-level answers and reveal the true journey
                behind every success story.
              </p>
            </div>

            {/* Categories */}
            <div className="mt-6 md:mt-8">
              <p className="text-white/50 font-accent text-sm uppercase tracking-wider mb-4">
                Guest Categories
              </p>
              <div className="grid grid-cols-2 gap-2">
                {guestCategories.map((cat) => (
                  <div
                    key={cat.label}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white/80 hover:border-yellow-400/30 transition-colors"
                  >
                    <span>{cat.emoji}</span>
                    <span className="font-accent text-xs">{cat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
