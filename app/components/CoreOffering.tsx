import {
  Zap,
  Users,
  Video,
  ClipboardList,
  Search,
  TrendingUp,
  Globe,
  Shield,
  Star,
  Network,
  Tag,
} from "lucide-react";

const usps = [
  {
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    title: "Trigger Question-Based Format",
    description:
      "Unlike traditional interviews, every conversation is curated around questions that trigger the audience, uncover real stories and lived experiences.",
  },
  {
    icon: <Users className="w-6 h-6 text-yellow-400" />,
    title: "Premium Guest Portfolio",
    description:
      "With 90+ podcast guests across industries, the platform has built credibility among professionals, founders, doctors and business leaders.",
  },
  {
    icon: <Video className="w-6 h-6 text-yellow-400" />,
    title: "High-End Production Quality",
    description:
      "We work exclusively with industry-standard studio spaces featuring premium audio and video equipment — no compromises on quality.",
  },
  {
    icon: <ClipboardList className="w-6 h-6 text-yellow-400" />,
    title: "End-to-End Management",
    description:
      "From research and content strategy to scheduling, production, post-production and delivery — our team handles everything so you focus only on the conversation.",
  },
  {
    icon: <Search className="w-6 h-6 text-yellow-400" />,
    title: "Deep & Customised Research",
    description:
      "Every guest's journey, achievements, business and industry is researched thoroughly before content is curated — creating meaningful conversations, not generic interviews.",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-yellow-400" />,
    title: "Long-Term Content Asset",
    description:
      "We don't treat episodes as a one-time event. Our team thoughtfully repurposes content across multiple platforms to keep your visibility growing over time.",
  },
  {
    icon: <Globe className="w-6 h-6 text-yellow-400" />,
    title: "Pan-India Audience",
    description:
      "Guests from across India mean viewership isn't limited to one region — our audience spans the nation with a growing international base too.",
  },
  {
    icon: <Shield className="w-6 h-6 text-yellow-400" />,
    title: "Quality Over Quantity",
    description:
      "We don't publish for the sake of numbers. Every episode is planned, researched and produced with the single objective of creating long-term value for the guest.",
  },
  {
    icon: <Star className="w-6 h-6 text-yellow-400" />,
    title: "Premium Guest Experience",
    description:
      "From the first conversation to final delivery, guests receive a structured, professional experience with dedicated coordination at every stage.",
  },
  {
    icon: <Network className="w-6 h-6 text-yellow-400" />,
    title: "Long-Term Professional Network",
    description:
      "Beyond the podcast, guests become part of a growing network of founders, doctors and industry leaders — creating opportunities for meaningful connections and collaborations.",
  },
  {
    icon: <Tag className="w-6 h-6 text-yellow-400" />,
    title: "Transparent Pricing",
    description:
      "Guests are quoted only the final amount upfront — no hidden costs, no surprise add-ons. Straightforward and honest from day one.",
  },
];

export default function CoreOffering() {
  return (
    <section className="py-10 md:py-16 bg-[#101010]">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold leading-tight">
            <span className="text-white">Why Guests Choose </span>
            <span className="text-yellow-400">Masum Gandhi Podcast</span>
          </h2>
          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-yellow-400 to-purple-600 mx-auto mt-4 mb-4" />
          <p className="max-w-2xl mx-auto text-white/60 font-accent text-base leading-relaxed">
            A platform built for real stories, real credibility and real results — here's what makes every guest's experience exceptional.
          </p>
        </div>

        {/* USP Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {usps.map((usp, i) => (
            <div
              key={usp.title}
              className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-yellow-400/40 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Number badge */}
              <span className="absolute top-4 right-4 text-white/10 font-headline font-bold text-4xl select-none leading-none">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:border-yellow-400/30 transition-colors">
                {usp.icon}
              </div>

              <h3 className="font-headline font-bold text-white text-base md:text-lg mb-2 leading-snug">
                {usp.title}
              </h3>
              <p className="text-white/55 font-accent text-sm leading-relaxed">
                {usp.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
