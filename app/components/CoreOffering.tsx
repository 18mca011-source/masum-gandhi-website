import { Mic, Users, Award, Sparkles } from "lucide-react";

const offerings = [
  {
    icon: <Mic className="w-6 h-6 md:w-8 md:h-8 text-yellow-400 mb-4" />,
    title: "Trigger-Question Format",
    description:
      "Engineered to extract powerful insights and create a lasting impact on listeners.",
  },
  {
    icon: <Users className="w-6 h-6 md:w-8 md:h-8 text-yellow-400 mb-4" />,
    title: "Engaged Audience",
    description:
      "Position your brand in front of top entrepreneurs, investors, and business minds.",
  },
  {
    icon: <Award className="w-6 h-6 md:w-8 md:h-8 text-yellow-400 mb-4" />,
    title: "Build Authority",
    description:
      "Polished production and storytelling depth reflect the authority your brand deserves.",
  },
  {
    icon: <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-yellow-400 mb-4" />,
    title: "Trust & Credibility",
    description:
      "Showcase real lessons and turning points that build instant trust with your market.",
  },
];

export default function CoreOffering() {
  return (
    <section className="py-16 md:py-24 bg-[#101010]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-block p-4 bg-white/5 rounded-2xl ring-1 ring-white/10 backdrop-blur-sm mb-6">
            <Sparkles className="w-5 h-5 text-yellow-400" />
          </div>
          <h2 className="text-3xl md:text-5xl font-headline text-white font-bold">
            How Masum Gandhi Podcast
          </h2>
          <h2 className="text-3xl md:text-5xl font-headline text-yellow-400 font-bold mt-1">
            Turns Founders into Industry Authorities
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-base md:text-lg text-white/70 font-accent px-4">
            Four pillars that make every conversation a career-defining moment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {offerings.map((item) => (
            <div
              key={item.title}
              className="border text-card-foreground shadow-sm bg-white/5 border-white/10 p-5 md:p-6 rounded-2xl flex flex-col items-center md:items-start text-center md:text-left hover:border-yellow-400/30 transition-colors"
            >
              <div className="inline-block p-4 bg-white/5 rounded-2xl ring-1 ring-white/10 backdrop-blur-sm mb-4">
                {item.icon}
              </div>
              <h3 className="text-base md:text-lg font-bold text-white mb-2 font-headline">
                {item.title}
              </h3>
              <p className="text-white/60 font-accent text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
