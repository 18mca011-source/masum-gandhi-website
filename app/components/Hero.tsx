import { Mic, Sparkles, TrendingUp, View } from "lucide-react";

const stats = [
  { icon: <Mic className="w-4 h-4 md:w-5 md:h-5 text-white/40" />, sup: "COMPLETED", value: "90+", sub: "Podcasts" },
  { icon: <View className="w-4 h-4 md:w-5 md:h-5 text-white/40" />, sup: "OVERALL SOCIAL MEDIA", value: "10M+", sub: "Views" },
  { icon: <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-white/40" />, sup: "NEW EPISODE EVERY", value: "Saturday", sub: "" },
  { icon: <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-white/40" />, sup: "COMMUNITY", value: "52k+", sub: "IG · YT · Linkedin" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex flex-col items-center justify-center text-center overflow-hidden py-12 lg:py-16"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#101010] -z-20" />
      <div className="absolute inset-0 bg-[#101010] bg-center -z-10 [mask-image:linear-gradient(to_bottom,white_10%,transparent_70%)]" />

      {/* Glow orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-48 md:w-72 h-48 md:h-72 bg-yellow-400/10 blur-[100px] md:blur-[150px] rounded-full -z-10 animate-float-1" />
      <div className="absolute bottom-[-10%] right-[-10%] w-64 md:w-96 h-64 md:h-96 bg-purple-600/10 blur-[120px] md:blur-[180px] rounded-full -z-10 animate-float-2" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Badge */}
        <div className="flex items-center justify-center gap-2 text-sm font-medium text-white/60 font-accent mb-6">
          <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs transition-colors bg-yellow-400/10 border-yellow-400/50 text-yellow-300 backdrop-blur-sm font-semibold">
            <Sparkles className="w-3 h-3 mr-1" /> India&apos;s #1 Trigger-Question Podcast
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-headline font-bold text-white tracking-tight">
          Masum Gandhi
        </h1>
        <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-headline font-bold text-yellow-400 mt-1 md:mt-2 tracking-tight">
          Podcast
        </h2>

        {/* Tagline */}
        <p className="mt-4 md:mt-6 max-w-2xl mx-auto text-base md:text-xl text-white/70 font-accent px-4 md:px-0">
          India&apos;s first trigger-question based podcast with 80+ conversations featuring founders,
          healthcare experts, creators, and industry leaders across India.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://calendly.com/masumgandhi/30min" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap h-11 font-bold text-white bg-gradient-to-r from-yellow-400 to-purple-600 rounded-lg font-accent px-8 py-6 text-lg hover:scale-105 transition-transform"
          >
            Be a Guest
          </a>
          <a
            href="https://www.youtube.com/@masumngandhi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap h-11 font-bold border border-white/20 text-white bg-white/5 rounded-lg font-accent px-8 py-6 text-lg hover:scale-105 transition-transform hover:border-yellow-400/50"
          >
            View Episodes
          </a>
        </div>

        {/* Stats */}
        <div className="mt-12 md:mt-20 text-center max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat) => (
              <div
                key={stat.sup}
                className="flex flex-col px-5 py-5 rounded-2xl bg-white/5 border border-white/10 text-left transition-all duration-300 hover:border-yellow-400/20 hover:-translate-y-1"
              >
                <div className="flex items-center gap-2 text-white/40 text-[10px] uppercase tracking-widest font-accent mb-3">
                  {stat.icon} {stat.sup}
                </div>
                <div className="text-yellow-400 font-headline font-bold text-3xl md:text-4xl leading-none">{stat.value}</div>
                {stat.sub && <div className="text-white/50 font-accent text-sm mt-2">{stat.sub}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
