const categories = [
  { emoji: "🏥", label: "Healthcare & Wellness" },
  { emoji: "🚀", label: "Startups & Founders" },
  { emoji: "💰", label: "Finance & Investment" },
  { emoji: "🏠", label: "Real Estate" },
  { emoji: "🍔", label: "F&B" },
  { emoji: "🎓", label: "Coaching & Education" },
  { emoji: "🎬", label: "Entertainment & Media" },
  { emoji: "🦷", label: "Medical Specialists" },
];

export default function GuestsFrom() {
  return (
    <section className="bg-white py-16 md:py-20 border-t border-black/8">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-primary mb-3">Industries</p>
        <h2 className="font-headline text-5xl md:text-7xl text-[#0A0A0A] leading-none mb-10">
          Guests From
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {categories.map((cat) => (
            <div
              key={cat.label}
              className="flex items-center gap-3 px-4 py-5 border border-black/10 hover:border-primary transition-colors"
            >
              <span className="text-2xl flex-shrink-0">{cat.emoji}</span>
              <span className="font-accent font-semibold text-[#0A0A0A] text-sm leading-snug">{cat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
