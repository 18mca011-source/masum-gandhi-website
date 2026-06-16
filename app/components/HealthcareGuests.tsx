"use client";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const doctors = [
  { name: "Dr. Kunjan Joshi", role: "Periodontist", image: "https://res.cloudinary.com/dx9zlffut/image/upload/v1779680173/IMG_2062_1_li8tou.jpg" },
  { name: "Dr. Shayoni Patel", role: "Orthodontist", image: "https://res.cloudinary.com/dx9zlffut/image/upload/v1779680173/IMG_2062_1_li8tou.jpg" },
  { name: "Dr. Disha", role: "Paediatrician & Neonatologist", image: "https://res.cloudinary.com/dx9zlffut/image/upload/v1779680173/IMG_2062_1_li8tou.jpg" },
  { name: "Dr. Kishlay", role: "Hypercarnivore Metabolic Doctor", image: "https://res.cloudinary.com/dx9zlffut/image/upload/v1779680173/IMG_2062_1_li8tou.jpg" },
  { name: "Dr. Shuba Dharmana", role: "Cosmetic Dermatologist", image: "https://res.cloudinary.com/dx9zlffut/image/upload/v1779680173/IMG_2062_1_li8tou.jpg" },
  { name: "Dr. Devendra Dangar", role: "Pediatrician & Neonatologist", image: "https://res.cloudinary.com/dx9zlffut/image/upload/v1779680173/IMG_2062_1_li8tou.jpg" },
  { name: "Dr. Poonam Dholakia", role: "Periodontist", image: "https://res.cloudinary.com/dx9zlffut/image/upload/v1779680173/IMG_2062_1_li8tou.jpg" },
  { name: "Dr. Janki Bavishi", role: "IVF Specialist", image: "https://res.cloudinary.com/dx9zlffut/image/upload/v1779680173/IMG_2062_1_li8tou.jpg" },
  { name: "Dr. Mitali Srivastava", role: "Sexologist", image: "https://res.cloudinary.com/dx9zlffut/image/upload/v1779680173/IMG_2062_1_li8tou.jpg" },
];

export default function HealthcareGuests() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // On desktop show 3, on mobile show 1
  const [perPage, setPerPage] = useState(3);

  useEffect(() => {
    const update = () => setPerPage(window.innerWidth >= 768 ? 3 : 1);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const total = doctors.length;
  const maxIndex = total - perPage;

  const next = () => setCurrent((c) => (c >= maxIndex ? 0 : c + 1));
  const prev = () => setCurrent((c) => (c <= 0 ? maxIndex : c - 1));

  // Auto-slide every 3 seconds
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

  const visible = doctors.slice(current, current + perPage);
  // Handle wrap-around
  const displayDocs = visible.length < perPage
    ? [...visible, ...doctors.slice(0, perPage - visible.length)]
    : visible;

  return (
    <section className="py-16 md:py-24 bg-[#101010]">
      <div className="container mx-auto px-4 md:px-6">

        {/* Title */}
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold text-white">
            A Platform <span className="text-yellow-400">Trusted by Healthcare Experts</span>
          </h2>
          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-yellow-400 to-purple-600 mx-auto mt-4 mb-6" />
          <p className="max-w-2xl mx-auto text-white/60 font-accent text-base leading-relaxed">
            Featuring in-depth conversations with leading healthcare professionals including
            gynecologists, psychiatrists, dentists, oncologists, and diabetes specialists offering
            credible insights on mental health, women&apos;s health, and lifestyle.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative mt-12">
          {/* Prev button */}
          <button
            onClick={handlePrev}
            aria-label="Previous"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>

          {/* Slides */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {displayDocs.map((doc, i) => (
              <div key={`${doc.name}-${i}`} className="flex flex-col items-center">
                <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src={doc.image}
                    alt={doc.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="mt-5 text-lg md:text-xl font-bold text-white font-headline text-center">
                  {doc.name}
                </h3>
                <p className="text-white/50 font-accent text-sm mt-1 text-center">{doc.role}</p>
              </div>
            ))}
          </div>

          {/* Next button */}
          <button
            onClick={handleNext}
            aria-label="Next"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => { setCurrent(i); resetTimer(); }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-yellow-400 w-6" : "bg-white/30"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
