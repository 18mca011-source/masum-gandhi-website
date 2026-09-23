const stats = [
  { sup: "COMPLETED",          value: "90+",      sub: "Podcasts" },
  { sup: "OVERALL SOCIAL",     value: "10M+",     sub: "Views" },
  { sup: "NEW EPISODE EVERY",  value: "Saturday", sub: "" },
  { sup: "COMMUNITY",          value: "52k+",     sub: "IG · YT · Linkedin" },
];

export default function Hero() {
  return (
    <section id="home" className="bg-white py-16 md:py-24 text-center">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Eyebrow */}
        <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-primary mb-5">
          Amongst Gujarat&apos;s Top 5 Podcasts
        </p>

        {/* Title */}
        <h1 className="font-headline text-[72px] md:text-[120px] leading-[0.9] text-[#0A0A0A] tracking-tight">
          Masum Gandhi
        </h1>
        <h2 className="font-headline text-[72px] md:text-[120px] leading-[0.9] text-[#0A0A0A] tracking-tight">
          Podcast
        </h2>

        {/* Tagline */}
        <p className="mt-6 max-w-xl mx-auto text-[15px] leading-relaxed text-[#888]">
          India&apos;s first trigger-question based podcast with 90+ conversations featuring founders,
          healthcare experts, creators, and industry leaders across India.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#be-a-guest"
            className="text-[13px] font-bold text-white bg-primary uppercase tracking-widest px-7 py-3 rounded hover:bg-primary-dim transition-colors"
          >
            Be a Guest
          </a>
          <a
            href="https://www.youtube.com/@masumngandhi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-bold text-[#0A0A0A] border border-black/20 uppercase tracking-widest px-7 py-3 rounded hover:border-primary transition-colors"
          >
            View Episodes
          </a>
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-black/10 border border-black/10 rounded-xl overflow-hidden">
          {stats.map((s) => (
            <div key={s.sup} className="bg-white py-6 px-4 text-left">
              <p className="text-[9px] font-semibold tracking-[0.18em] uppercase text-[#888] mb-2">{s.sup}</p>
              <p className="font-headline text-4xl md:text-5xl text-primary leading-none">{s.value}</p>
              {s.sub && <p className="text-[11px] text-[#888] mt-2">{s.sub}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
