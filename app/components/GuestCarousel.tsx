"use client";
import Image from "next/image";

const featured = [
  { name: "Ravi Shah",    role: "Founder: Filmshoppee",         image: "/guests/Ravi Shah.webp",          wide: true  },
  { name: "Vabez",        role: "Founder: Sam's Salon",          image: "/guests/Vabez.webp",               wide: false },
  { name: "Anuja Kamdar", role: "Founder: Sinful Bites",         image: "/guests/Anuja Kamdar.webp",        wide: false },
  { name: "Dr. Jwalant Chag", role: "Psychiatrist",              image: "/guests/Jwalant Chag.webp",        wide: false },
  { name: "Vrishali Mulay",   role: "Founder: Regatta HR Services", image: "/guests/Vrishali Mulay.webp",  wide: false },
];

const strip = [
  { name: "Kkaran & Chahhat",  role: "Founders: Paawsh",                 image: "/guests/Kkaran & Chahhat Soni.webp" },
  { name: "Aditi Kulkarni",    role: "Founder: Yuvana Wellness",          image: "/guests/Aditi Kulkarni.webp" },
  { name: "Chitrak Shah",      role: "Co-Founder & MD: Shivalik Group",   image: "/guests/Chitrak Shah.webp" },
  { name: "Jigar Daryanani",   role: "Healing & Relationships Coach",     image: "/guests/Jigar Daryanani.webp" },
  { name: "Malti Sharma",      role: "Visual Artist & Painter",           image: "/guests/Malti Sharma.webp" },
  { name: "Niharika & Meshwa", role: "Founders: Rhythm Rumble",           image: "/guests/Niharika & Meshwa Patel.webp" },
  { name: "Priyanka Dalal",    role: "Founder: High5 Performance",        image: "/guests/Priyanka Dalal.webp" },
  { name: "Thangvel Nadar",    role: "Founder: Idli Point",               image: "/guests/Thangvel Nadar.webp" },
  { name: "Vatsal Kamdar",     role: "Real Estate Developer",             image: "/guests/Vatsal Kamdar.webp" },
];

function GuestCard({ guest, className = "" }: { guest: typeof featured[0] | typeof strip[0]; className?: string }) {
  return (
    <div className={`relative overflow-hidden group ${className}`}>
      <Image
        src={guest.image}
        alt={guest.name}
        fill
        className="object-cover object-[center_10%] transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/5 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <div className="w-7 h-[2px] bg-primary mb-2.5" />
        <p className="font-headline text-[22px] text-white leading-none">{guest.name}</p>
        <p className="text-[11px] text-[#aaa] mt-1.5">{guest.role}</p>
      </div>
    </div>
  );
}

export default function GuestCarousel({ title }: { title: string }) {
  const [f0, f1, f2, f3, f4] = featured;

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-baseline justify-between mb-8">
        <h2 className="font-headline text-5xl md:text-7xl text-[#0A0A0A] leading-none">{title}</h2>
      </div>

      {/* Row 1: wide left + right */}
      <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-[3px] bg-black/8">
        <GuestCard guest={f0} className="aspect-[4/3]" />
        <GuestCard guest={f1} className="aspect-[4/3]" />
      </div>

      {/* Row 2: 3-col */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-[3px] bg-black/8 mt-[3px]">
        <GuestCard guest={f2} className="aspect-[4/3]" />
        <GuestCard guest={f3} className="aspect-[4/3]" />
        <GuestCard guest={f4} className="aspect-[4/3]" />
      </div>

      {/* Filmstrip */}
      <div className="relative mt-[3px]">
        <div
          className="flex gap-[3px] overflow-x-auto scrollbar-hide"
          style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
        >
          {strip.map((g) => (
            <div
              key={g.name}
              className="relative flex-shrink-0 overflow-hidden group"
              style={{ width: 280, aspectRatio: "3/4", scrollSnapAlign: "start" }}
            >
              <Image
                src={g.image}
                alt={g.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ objectPosition: "50% 0%" }}
                sizes="280px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/5 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="w-7 h-[2px] bg-primary mb-2" />
                <p className="font-headline text-[20px] text-white leading-none">{g.name}</p>
                <p className="text-[11px] text-[#aaa] mt-1.5">{g.role}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Right fade */}
        <div className="pointer-events-none absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-l from-white/90 to-transparent" />
      </div>
    </div>
  );
}
