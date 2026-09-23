import { Film, FileText, Video, Headphones } from "lucide-react";

const team = [
  { icon: Film,       title: "Top Editors",      description: "Professional video editing with cinematic quality" },
  { icon: FileText,   title: "Content Team",     description: "Compelling narratives that engage your audience" },
  { icon: Video,      title: "Production Team",  description: "State-of-the-art equipment and studio setup" },
  { icon: Headphones, title: "Audio Engineers",  description: "Crystal clear sound mixing and mastering" },
];

export default function ProductionTeam() {
  return (
    <section className="bg-[#0A0A0A] py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-primary mb-3">Production</p>
        <h2 className="font-headline text-5xl md:text-7xl text-white leading-none mb-3">
          Premium Production Team
        </h2>
        <p className="max-w-2xl text-[14px] leading-relaxed text-[#888] mb-10">
          Every episode is crafted by an elite team dedicated to delivering world-class content that resonates
          with your audience and amplifies your message.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/8">
          {team.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="bg-[#0A0A0A] p-6 hover:bg-white/5 transition-colors">
                <Icon className="w-6 h-6 text-primary mb-4" />
                <h3 className="font-accent font-bold text-white text-[14px] mb-2">{item.title}</h3>
                <p className="text-[13px] text-[#888] leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-px bg-white/8 p-px">
          <div className="bg-[#0A0A0A] p-7">
            <h3 className="font-headline text-3xl text-primary mb-2">Experience Matters</h3>
            <p className="text-[14px] text-[#888] leading-relaxed max-w-3xl">
              With years of expertise in podcast production and content creation, Masum Gandhi and his team have mastered
              the art of storytelling. From pre-production planning to post-launch promotion, every detail is handled
              with precision and care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
