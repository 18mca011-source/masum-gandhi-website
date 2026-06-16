import { Eye, ExternalLink } from "lucide-react";

const episodes = [
  {
    title: "How Idli Point Is Disrupting Indian QSR",
    guest: "Thangvel Nadar",
    guestRole: "Founder - Idli Point",
    views: "20k views",
    badge: "Most Viewed",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    link: "https://www.youtube.com/@MasumGandhi",
  },
  {
    title: "Veg Diet is a Scam! End of Veg vs Non-Veg Diet",
    guest: "Dr. Kishlay",
    guestRole: "Hypercarnivore Metabolic Doctor",
    views: "12k views",
    badge: "Recent Viral",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    link: "https://www.youtube.com/@MasumGandhi",
  },
  {
    title: "Salon ki Sacchai: Scams, Expired Products, Staff Betrayal & Fake Discounts",
    guest: "Sam's Salon",
    guestRole: "Founder - Vabez",
    views: "8k views",
    badge: "Industry Truths",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    link: "https://www.youtube.com/@MasumGandhi",
  },
];

export default function Episodes() {
  return (
    <section id="episodes" className="py-16 md:py-24 bg-[#101010] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-headline text-white font-bold">
            Top Performing Episodes
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-white/70 font-accent">
            Discover conversations that have inspired thousands and sparked meaningful change.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {episodes.map((ep) => (
            <a
              key={ep.title}
              href={ep.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border text-card-foreground shadow-sm bg-card/80 border-white/10 rounded-2xl overflow-hidden h-full transition-all duration-300 hover:border-yellow-400/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-400/10"
            >
              {/* Thumbnail */}
              <div className="border text-card-foreground shadow-sm overflow-hidden rounded-2xl bg-transparent border-none transition-all duration-300 group-hover:scale-105">
                <div className="relative aspect-video w-full bg-black">
                  <img
                    src={ep.thumbnail}
                    alt={ep.title}
                    className="aspect-video object-cover w-full"
                  />
                </div>
              </div>

              <div className="p-6">
                {/* Badge + views */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-black/50 text-white/90 backdrop-blur-sm border-transparent">
                    {ep.badge}
                  </span>
                  <span className="flex items-center gap-1 text-white/50 text-xs font-accent">
                    <Eye className="w-3.5 h-3.5" /> {ep.views}
                  </span>
                </div>

                <h3 className="font-bold text-white font-headline text-lg leading-snug group-hover:text-yellow-400 transition-colors">
                  {ep.title}
                </h3>
                <p className="text-white/60 font-accent text-sm mt-2">
                  {ep.guest} · {ep.guestRole}
                </p>

                <div className="mt-4 flex items-center text-yellow-400 hover:underline text-sm font-accent font-semibold gap-1">
                  Watch Episode <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://www.youtube.com/@MasumGandhi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 h-11 font-bold text-white bg-gradient-to-r from-yellow-400 to-purple-600 rounded-lg font-accent px-8 py-6 text-base sm:text-lg hover:scale-105 transition-transform"
          >
            View All Episodes
          </a>
        </div>
      </div>
    </section>
  );
}
