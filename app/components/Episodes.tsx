import { Eye, ExternalLink } from "lucide-react";

const episodes = [
  {
    title: "How Idli Point Is Disrupting Indian QSR",
    guest: "Thangvel Nadar",
    guestRole: "Founder - Idli Point",
    views: "33k",
    badge: "Most Viewed",
    thumbnail: "/episodes/ep3-thumbnail.webp",
    link: "https://www.youtube.com/watch?v=taLQcWPPAQQ",
  },
  {
    title: "Veg Diet is a Scam! End of Veg vs Non-Veg Diet | Dr. Kishlay | Masum Gandhi",
    guest: "Dr. Kishlay",
    guestRole: "Hypercarnivore Metabolic Doctor",
    views: "28k",
    badge: "Recent Viral",
    thumbnail: "/episodes/ep1-thumbnail.jpg",
    link: "https://www.youtube.com/watch?v=DFhA3l8wIFk",
  },
  {
    title: "Salon ki Sacchai: Scams, Expired Products, Staff Betrayal & Fake Discounts",
    guest: "Vabez",
    guestRole: "Founder - Sam's Salon",
    views: "12k",
    badge: "Industry Truths",
    thumbnail: "/episodes/ep2-thumbnail.webp",
    link: "https://www.youtube.com/watch?v=ud6UaD2PFBA",
  },
];

export default function Episodes() {
  return (
    <section id="episodes" className="bg-white py-16 md:py-24 border-t border-black/8">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="flex items-baseline justify-between mb-8">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-primary mb-2">Episodes</p>
            <h2 className="font-headline text-5xl md:text-7xl text-[#0A0A0A] leading-none">
              Top Performing<br />Episodes
            </h2>
          </div>
          <a
            href="https://www.youtube.com/@masumngandhi"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 text-[12px] font-semibold text-[#0A0A0A] uppercase tracking-widest border-b border-black/30 pb-0.5 hover:border-primary hover:text-primary transition-colors"
          >
            View All <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[3px] bg-black/8">
          {episodes.map((ep) => (
            <a
              key={ep.title}
              href={ep.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white overflow-hidden hover:bg-[#F8F8F8] transition-colors"
            >
              <div className="relative w-full overflow-hidden">
                <img
                  src={ep.thumbnail}
                  alt={ep.title}
                  className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1">
                  {ep.badge}
                </span>
                <span className="absolute bottom-3 right-3 flex items-center gap-1 bg-black/70 text-white text-[11px] px-2 py-1 backdrop-blur-sm">
                  <Eye className="w-3 h-3" /> {ep.views}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-accent font-bold text-[#0A0A0A] text-[14px] leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {ep.title}
                </h3>
                <p className="text-[12px] text-[#888]">{ep.guest} · {ep.guestRole}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Mobile view all */}
        <div className="mt-6 md:hidden">
          <a
            href="https://www.youtube.com/@masumngandhi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[12px] font-semibold text-[#0A0A0A] uppercase tracking-widest border-b border-black/30 pb-0.5"
          >
            View All Episodes <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
