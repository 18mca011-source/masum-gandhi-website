const categories = [
  { emoji: "🏥", label: "Healthcare &\nWellness" },
  { emoji: "🚀", label: "Startups &\nFounders" },
  { emoji: "💰", label: "Finance &\nInvestment" },
  { emoji: "🏠", label: "Real Estate" },
  { emoji: "🍔", label: "F&B" },
  { emoji: "🎓", label: "Coaching &\nEducation" },
  { emoji: "🎬", label: "Entertainment &\nMedia" },
  { emoji: "🦷", label: "Medical Specialists" },
];

export default function GuestsFrom() {
  return (
    <section className="py-16 md:py-24 bg-[#101010]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-white">
            Guests <span className="text-yellow-400">From</span>
          </h2>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-yellow-400 to-purple-600 mx-auto mt-4" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {categories.map((cat) => (
            <div
              key={cat.label}
              className="flex items-center gap-4 px-5 py-6 rounded-2xl bg-white/5 border border-white/10 hover:border-yellow-400/20 transition-all duration-300"
            >
              <span className="text-3xl md:text-4xl flex-shrink-0">{cat.emoji}</span>
              <span className="font-headline font-bold text-white text-base md:text-lg leading-snug whitespace-pre-line">
                {cat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
