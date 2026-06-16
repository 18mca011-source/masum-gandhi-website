import { Video, Headphones, Film, FileText } from "lucide-react";

const team = [
  {
    icon: <Video className="w-8 h-8 text-yellow-400" />,
    title: "Top Editors",
    description: "Professional video editing with cinematic quality.",
  },
  {
    icon: <FileText className="w-8 h-8 text-yellow-400" />,
    title: "Content Team",
    description: "Compelling narratives for audience engagement.",
  },
  {
    icon: <Film className="w-8 h-8 text-yellow-400" />,
    title: "Production Team",
    description: "State-of-the-art equipment and studio setup.",
  },
  {
    icon: <Headphones className="w-8 h-8 text-yellow-400" />,
    title: "Audio Engineers",
    description: "Crystal clear sound mixing and mastering.",
  },
];

export default function ProductionTeam() {
  return (
    <section className="py-16 md:py-24 bg-[#101010]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <p className="font-bold text-yellow-400 font-headline uppercase tracking-wide mb-2">
            Behind the Scenes
          </p>
          <h2 className="text-3xl md:text-5xl font-headline text-white font-bold">
            Premium Production Team
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-white/70 font-accent">
            With years of expertise in podcast production and content creation, Masum Gandhi and his
            team have mastered the art of storytelling.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {team.map((item) => (
            <div
              key={item.title}
              className="rounded-lg border text-card-foreground shadow-sm bg-white/5 border-white/10 p-6 flex items-center gap-4 transition-all duration-300 hover:border-yellow-400/50 hover:-translate-y-1 hover:bg-white/10"
            >
              <div className="inline-block p-3 md:p-4 bg-white/5 rounded-full ring-1 ring-white/10 backdrop-blur-sm">
                {item.icon}
              </div>
              <div>
                <h3 className="font-bold text-white font-headline text-lg">{item.title}</h3>
                <p className="text-white/60 font-accent text-sm mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
