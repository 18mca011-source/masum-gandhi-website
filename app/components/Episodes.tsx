const episodes = [
  { id: "EP089", title: 'Cancer Surgeon Warning: "Gutkha Is Secretly Killing You"', guest: "Dr Shivam Pandya", thumb: "https://i.ytimg.com/vi/8pU3rpeDJRw/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=8pU3rpeDJRw", age: "9d ago", featured: true },
  { id: "EP088", title: "Top Paediatrician Explains: What Your Baby Really Needs", guest: "Dr. Devendra", thumb: "https://i.ytimg.com/vi/2mGsVHCktZM/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=2mGsVHCktZM", age: "2w ago", featured: true },
  { id: "EP087", title: "Autism Treatments Exposed: Ayurveda Can Reverse Autism Symptoms?", guest: "Partha M.", thumb: "https://i.ytimg.com/vi/7kzL8mMvLog/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=7kzL8mMvLog", age: "3w ago", featured: false },
  { id: "EP086", title: "Celebrity Dermatologist's ADVICE: How Celebrities Actually Look So Young", guest: "Dr.Shuba D.", thumb: "https://i.ytimg.com/vi/Yz4vKJT3mYU/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=Yz4vKJT3mYU", age: "3mo ago", featured: false },
  { id: "EP085", title: "Top Fertility Doctor: Why Are So Many Women Struggling To Get Pregnant?", guest: "Dr.Chaitra", thumb: "https://i.ytimg.com/vi/xM3A5VHkPHI/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=xM3A5VHkPHI", age: "3mo ago", featured: false },
];

function EpisodeCard({ ep, large }: { ep: typeof episodes[0]; large?: boolean }) {
  return (
    <a
      href={ep.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative overflow-hidden block bg-black"
    >
      {/* Thumbnail */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={ep.thumb}
        alt={ep.title}
        className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${large ? "aspect-[16/9]" : "aspect-[16/9]"}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

      {/* Badge */}
      {ep.id === "EP089" || ep.id === "EP088" ? (
        <div className="absolute top-3 left-3 bg-primary text-white text-[9px] font-bold uppercase tracking-widest px-2 py-1">
          NEW
        </div>
      ) : null}

      {/* Text */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="text-[11px] font-semibold text-[#aaa] mb-1">{ep.id}</p>
        <p className={`font-semibold text-white leading-tight ${large ? "text-[16px] md:text-[18px]" : "text-[13px]"}`}>
          {ep.title}
        </p>
        <p className="text-[10px] text-[#777] mt-1.5">{ep.age}</p>
      </div>
    </a>
  );
}

export default function Episodes() {
  const [f0, f1, ...rest] = episodes;

  return (
    <section id="episodes" className="bg-white py-16 md:py-20 border-b border-black/8">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="font-headline text-[56px] md:text-[80px] leading-none text-[#0A0A0A]">
            EPISODES<span className="text-primary">.</span>
          </h2>
          <p className="hidden md:block text-[11px] font-semibold tracking-[0.18em] uppercase text-[#888]">
            Tap an episode to listen
          </p>
        </div>

        {/* Featured 2-col */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[3px] bg-black/8 mb-[3px]">
          <EpisodeCard ep={f0} large />
          <EpisodeCard ep={f1} large />
        </div>

        {/* 3-col grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-[3px] bg-black/8">
          {rest.map((ep) => (
            <EpisodeCard key={ep.id} ep={ep} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://www.youtube.com/@masumngandhi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-[12px] font-bold uppercase tracking-widest border border-black/20 px-8 py-3 hover:border-primary hover:text-primary transition-colors"
          >
            Show More Episodes
          </a>
        </div>
      </div>
    </section>
  );
}
