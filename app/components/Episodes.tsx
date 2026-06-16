import { Eye, ExternalLink } from "lucide-react";

const episodes = [
  {
    title: "How Idli Point Is Disrupting Indian QSR",
    guest: "Thangvel Nadar",
    guestRole: "Founder - Idli Point",
    views: "20k",
    badge: "Most Viewed",
    thumbnail: "/episodes/ep3-thumbnail.webp",
    link: "https://www.youtube.com/watch?v=yXKNMne4Y0g",
  },
  {
    title: "Veg Diet is a Scam! End of Veg vs Non-Veg Diet | Dr. Kishlay | Masum Gandhi",
    guest: "Dr. Kishlay",
    guestRole: "Hypercarnivore Metabolic Doctor",
    views: "12k",
    badge: "Recent Viral",
    thumbnail: "/episodes/ep1-thumbnail.jpg",
    link: "https://www.youtube.com/watch?v=m8H3HoZHFGc",
  },
  {
    title: "Salon ki Sacchai: Scams, Expired Products, Staff Betrayal & Fake Discounts",
    guest: "Vabez",
    guestRole: "Founder - Sam's Salon",
    views: "8k",
    badge: "Industry Truths",
    thumbnail: "/episodes/ep2-thumbnail.webp",
    link: "https://www.youtube.com/watch?v=RkQTqCBBMKU",
  },
];

export default function Episodes() {
  return (
    <section id="episodes" className="py-10 md:py-16 bg-[#101010] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold">
            <span className="text-yellow-400">Top Performing</span>{" "}
            <span className="text-white">Episodes</span>
          </h2>
          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-yellow-400 to-purple-600 mx-auto mt-4 mb-4" />
          <p className="max-w-2xl mx-auto text-white/60 font-accent text-base leading-relaxed">
            Discover conversations that have inspired thousands and sparked meaningful change
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {episodes.map((ep) => (
            <a
              key={ep.title}
              href={ep.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-yellow-400/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-400/10"
            >
              {/* Thumbnail */}
              <div className="relative w-full overflow-hidden rounded-t-2xl">
                <img
                  src={ep.thumbnail}
                  alt={ep.title}
                  className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Badge top-left */}
                <span className="absolute top-3 left-3 bg-yellow-400 text-black text-xs font-bold font-headline px-3 py-1 rounded-full">
                  {ep.badge}
                </span>
                {/* Views bottom-right */}
                <span className="absolute bottom-3 right-3 flex items-center gap-1 bg-black/70 text-white text-xs font-accent px-2 py-1 rounded-full backdrop-blur-sm">
                  <Eye className="w-3.5 h-3.5" /> {ep.views}
                </span>
              </div>

              <div className="p-5">
                <h3 className="font-bold text-white font-headline text-base leading-snug group-hover:text-yellow-400 transition-colors mb-2">
                  {ep.title}
                </h3>
                <p className="text-white/50 font-accent text-sm">
                  {ep.guest} · {ep.guestRole}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://www.youtube.com/@masumngandhi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-purple-600 text-black font-bold font-headline px-8 py-3 rounded-xl hover:scale-105 transition-transform text-base"
          >
            View All Episodes <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
