import { Target, Users, Award, Sparkles } from "lucide-react";

const offerings = [
  {
    icon: <Target className="w-8 h-8 text-yellow-400" />,
    title: "Trigger-Question Format",
    description: "Engineered to extract powerful insights and create a lasting impact on listeners.",
  },
  {
    icon: <Users className="w-8 h-8 text-yellow-400" />,
    title: "Engaged Audience",
    description: "Position your brand in front of top entrepreneurs, investors, and business minds.",
  },
  {
    icon: <Award className="w-8 h-8 text-yellow-400" />,
    title: "Build Authority",
    description: "Polished production and storytelling depth reflect the authority your brand deserves.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-yellow-400" />,
    title: "Trust & Credibility",
    description: "Showcase real lessons and turning points that build instant trust with your market.",
  },
];

export default function CoreOffering() {
  return (
    <section className="py-16 md:py-24 bg-[#101010]">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold text-white text-center leading-tight mb-4">
          How Masum Gandhi Podcast Turns Founders into{" "}
          <span className="text-yellow-400">Industry Authorities</span>
        </h2>

        {/* Gradient underline */}
        <div className="w-full h-[2px] bg-gradient-to-r from-yellow-400 to-purple-600 mb-12 md:mb-16" />

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left — description text */}
          <div className="space-y-6 text-white font-accent text-base md:text-lg font-bold leading-relaxed">
            <p>
              Masum Gandhi Podcast is more than a show, it&apos;s a platform that transforms founders
              into thought leaders. As India&apos;s first{" "}
              <span className="text-yellow-400">trigger-question based podcast</span>, it goes beyond
              surface-level interviews to showcase real journeys, real turning points, and real lessons
              that build instant credibility for every guest.
            </p>
            <p>
              Whether you are an expert, a business owner, or a professional looking to build your
              presence, Masum Gandhi Podcast gives you the platform, the audience, and the narrative to
              stand out. It helps you share your story, establish authority, and position yourself as a
              trusted voice in your industry.
            </p>
          </div>

          {/* Right — 2x2 grid of feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {offerings.map((item) => (
              <div
                key={item.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-yellow-400/30 transition-colors"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="font-headline font-bold text-white text-lg mb-2">{item.title}</h3>
                <p className="text-white/60 font-accent text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
