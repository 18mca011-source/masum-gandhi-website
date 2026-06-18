"use client";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface Guest {
  name: string;
  role: string;
  image: string;
}

const guests: Guest[] = [
  { name: "Niharika & Meshwa Patel", role: "Founders: Rhythm Rumble", image: "/guests/Niharika & Meshwa Patel.webp" },
  { name: "Priyanka Dalal", role: "Sports Performance Coach, Founder: High5 Performance", image: "/guests/Priyanka Dalal.webp" },
  { name: "Ravi Shah", role: "Founder: Filmshoppee", image: "/guests/Ravi Shah.webp" },
  { name: "Vabez", role: "Founder & Owner: Sam's Salon", image: "/guests/Vabez.webp" },
  { name: "Anuja Kamdar", role: "Founder: Sinful Bites", image: "/guests/Anuja Kamdar.webp" },
  { name: "Aditi Kulkarni", role: "Founder: Yuvana Wellness", image: "/guests/Aditi Kulkarni.webp" },
  { name: "Chitrak Shah", role: "Co-Founder & MD, Shivalik Group", image: "/guests/Chitrak Shah.webp" },
  { name: "Thangvel Nadar", role: "Founder: Idli Point", image: "/guests/Thangvel Nadar.webp" },
  { name: "Vrishali Mulay", role: "Founder: Regatta HR Services", image: "/guests/Vrishali Mulay.webp" },
  { name: "Kkaran & Chahhat Soni", role: "Founders: Paawsh", image: "/guests/Kkaran & Chahhat Soni.webp" },
  { name: "Dr. Jwalant Chag", role: "Psychiatrist, Founder: Elegant Minds Hospital", image: "/guests/Jwalant Chag.webp" },
  { name: "Malti Sharma", role: "Environmental Artist and Entrepreneur", image: "/guests/Malti Sharma.webp" },
  { name: "Vatsal Kamdar", role: "Business Director, Kautilya Group", image: "/guests/Vatsal Kamdar.webp" },
];

export default function GuestCarousel({ title }: { title: string }) {
  const [current, setCurrent] = useState(0);
  const [perPage, setPerPage] = useState(3);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const update = () => setPerPage(window.innerWidth >= 768 ? 3 : 1);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const total = guests.length;
  const maxIndex = total - perPage;

  const next = () => setCurrent((c) => (c >= maxIndex ? 0 : c + 1));
  const prev = () => setCurrent((c) => (c <= 0 ? maxIndex : c - 1));

  useEffect(() => {
    timerRef.current = setInterval(next, 3000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [perPage, maxIndex]);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(next, 3000);
  };

  const handlePrev = () => { prev(); resetTimer(); };
  const handleNext = () => { next(); resetTimer(); };

  const visible = guests.slice(current, current + perPage);
  const displayGuests = visible.length < perPage
    ? [...visible, ...guests.slice(0, perPage - visible.length)]
    : visible;

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-3xl md:text-5xl font-headline text-white font-bold">{title}</h2>
        <div className="w-24 h-1 rounded-full bg-gradient-to-r from-yellow-400 to-purple-600 mx-auto mt-4" />
      </div>

      <div className="relative">
        {/* Prev button */}
        <button
          onClick={handlePrev}
          aria-label="Previous slide"
          className="absolute -left-5 md:-left-12 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center h-10 w-10 rounded-full border border-white/20 bg-[#101010] hover:bg-white/10 transition-colors"
        >
          <ChevronLeft className="h-5 w-5 text-white" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayGuests.map((guest, i) => (
            <div key={`${guest.name}-${i}`} className="group block">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 group-hover:border-yellow-400/50 group-hover:shadow-lg group-hover:shadow-yellow-400/20 group-hover:-translate-y-2">
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src={guest.image}
                    alt={guest.name}
                    fill
                    className="object-cover object-[center_20%] transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white font-headline group-hover:text-yellow-400 transition-colors">
                    {guest.name}
                  </h3>
                  <p className="text-white/60 font-accent text-sm mt-1">{guest.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={handleNext}
          aria-label="Next slide"
          className="absolute -right-5 md:-right-12 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center h-10 w-10 rounded-full border border-white/20 bg-[#101010] hover:bg-white/10 transition-colors"
        >
          <ChevronRight className="h-5 w-5 text-white" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => { setCurrent(i); resetTimer(); }}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "bg-yellow-400 w-6" : "bg-white/30 w-2"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
