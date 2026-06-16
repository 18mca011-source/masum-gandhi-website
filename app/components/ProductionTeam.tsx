import { Film, FileText, Video, Headphones } from "lucide-react";

const team = [
  {
    icon: <Film className="w-7 h-7 text-yellow-400" />,
    title: "Top Editors",
    description: "Professional video editing with cinematic quality",
  },
  {
    icon: <FileText className="w-7 h-7 text-yellow-400" />,
    title: "Content Team",
    description: "Compelling narratives that engage your audience",
  },
  {
    icon: <Video className="w-7 h-7 text-yellow-400" />,
    title: "Production Team",
    description: "State-of-the-art equipment and studio setup",
  },
  {
    icon: <Headphones className="w-7 h-7 text-yellow-400" />,
    title: "Audio Engineers",
    description: "Crystal clear sound mixing and mastering",
  },
];

export default function ProductionTeam() {
  return (
    <section
      className="py-16 md:py-24 bg-[#111] relative overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold text-white leading-tight">
            Behind the Scenes:{" "}
            <span className="block text-yellow-400">Premium Production Team</span>
          </h2>
          <div className="w-16 h-1 rounded-full bg-purple-600 mx-auto mt-4 mb-6" />
          <p className="max-w-2xl mx-auto text-white/60 font-accent text-base leading-relaxed">
            Every episode is crafted by an elite team of professionals dedicated to delivering
            world-class content that resonates with your audience and amplifies your message.
          </p>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {team.map((item) => (
            <div
              key={item.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-10 hover:border-yellow-400/30 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <h3 className="font-headline font-bold text-white text-lg mb-2">{item.title}</h3>
                <p className="text-white/50 font-accent text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Matters wide card */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h3 className="font-headline font-bold text-yellow-400 text-xl mb-3">Experience Matters</h3>
          <p className="text-white/70 font-accent text-base leading-relaxed">
            With years of expertise in podcast production and content creation, Masum Gandhi and his
            team have mastered the art of storytelling. From pre-production planning to post-launch
            promotion, every detail is handled with precision and care.
          </p>
        </div>

      </div>
    </section>
  );
}
