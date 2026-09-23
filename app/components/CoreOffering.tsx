import { Zap, Users, Video, ClipboardList, Search, TrendingUp, Globe, Tag } from "lucide-react";

const usps = [
  { icon: Zap,          title: "Trigger Question-Based Format",  description: "Unlike traditional interviews, every conversation is curated around questions that trigger the audience, uncover real stories and lived experiences." },
  { icon: Users,        title: "Premium Guest Portfolio",        description: "With 90+ podcast guests across industries, the platform has built credibility among professionals, founders, doctors and business leaders." },
  { icon: Video,        title: "High-End Production Quality",    description: "We work exclusively with industry-standard studio spaces featuring premium audio and video equipment — no compromises on quality." },
  { icon: Search,       title: "Deep & Customised Research",     description: "Every guest's journey, achievements, business and industry is researched thoroughly before content is curated, creating meaningful conversations, not generic interviews." },
  { icon: TrendingUp,   title: "Long-Term Content Asset",        description: "We don't treat episodes as a one-time event. Our team thoughtfully repurposes content across multiple platforms to keep your visibility growing over time." },
  { icon: ClipboardList,title: "End-to-End Management",          description: "From research and content strategy to scheduling, production, post-production and delivery — our team handles everything." },
  { icon: Globe,        title: "Pan-India Audience",             description: "Guests from across India mean viewership isn't limited to one region — our audience spans the nation with a growing international base too." },
  { icon: Tag,          title: "Transparent Pricing",            description: "Guests are quoted only the final amount upfront — no hidden costs, no surprise add-ons. Straightforward and honest from day one." },
];

export default function CoreOffering() {
  return (
    <section className="bg-[#F8F8F8] py-16 md:py-24 border-t border-black/8">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-primary mb-3">Why Us</p>
        <h2 className="font-headline text-5xl md:text-7xl text-[#0A0A0A] leading-none mb-3">
          Why Guests Choose<br />Masum Gandhi Podcast
        </h2>
        <p className="max-w-2xl text-[14px] leading-relaxed text-[#888] mb-10">
          A platform built for real stories, real credibility and real results — here&apos;s what makes every guest&apos;s experience exceptional.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/8">
          {usps.map((usp, i) => {
            const Icon = usp.icon;
            return (
              <div key={usp.title} className="bg-[#F8F8F8] p-6 hover:bg-white transition-colors">
                <p className="text-[11px] font-semibold text-primary mb-3">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <Icon className="w-5 h-5 text-primary mb-4" />
                <h3 className="font-accent font-bold text-[#0A0A0A] text-[14px] mb-2 leading-snug">{usp.title}</h3>
                <p className="text-[13px] text-[#888] leading-relaxed">{usp.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
