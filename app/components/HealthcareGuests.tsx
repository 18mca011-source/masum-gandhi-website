"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const doctors = [
  { name: "Dr. Shayoni Patel", role: "Orthodontist", image: "https://res.cloudinary.com/dx9zlffut/image/upload/v1779680173/IMG_2062_1_li8tou.jpg" },
  { name: "Dr. Disha", role: "Paediatrician & Neonatologist", image: "https://res.cloudinary.com/dx9zlffut/image/upload/v1779680173/IMG_2062_1_li8tou.jpg" },
  { name: "Dr. Kishlay", role: "Hypercarnivore Metabolic Doctor", image: "https://res.cloudinary.com/dx9zlffut/image/upload/v1779680173/IMG_2062_1_li8tou.jpg" },
  { name: "Dr. Shuba Dharmana", role: "Cosmetic Dermatologist & Hair Transplant Surgeon", image: "https://res.cloudinary.com/dx9zlffut/image/upload/v1779680173/IMG_2062_1_li8tou.jpg" },
  { name: "Dr. Devendra Dangar", role: "Pediatrician & Neonatologist", image: "https://res.cloudinary.com/dx9zlffut/image/upload/v1779680173/IMG_2062_1_li8tou.jpg" },
  { name: "Dr. Poonam Dholakia", role: "Periodontist", image: "https://res.cloudinary.com/dx9zlffut/image/upload/v1779680173/IMG_2062_1_li8tou.jpg" },
  { name: "Dr. Janki Bavishi", role: "IVF Specialist", image: "https://res.cloudinary.com/dx9zlffut/image/upload/v1779680173/IMG_2062_1_li8tou.jpg" },
  { name: "Dr. Mitali Srivastava", role: "Sexologist", image: "https://res.cloudinary.com/dx9zlffut/image/upload/v1779680173/IMG_2062_1_li8tou.jpg" },
  { name: "Dr. Kunjan Joshi", role: "Periodontist", image: "https://res.cloudinary.com/dx9zlffut/image/upload/v1779680173/IMG_2062_1_li8tou.jpg" },
];

export default function HealthcareGuests() {
  const [index, setIndex] = useState(0);
  const perPage = 3;
  const maxIndex = Math.max(0, doctors.length - perPage);
  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));
  const visible = doctors.slice(index, index + perPage);

  return (
    <section className="py-16 md:py-24 bg-[#101010]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <p className="font-bold text-yellow-400 font-headline uppercase tracking-wide mb-2">
            Healthcare & Wellness
          </p>
          <h2 className="text-3xl md:text-5xl font-headline text-white font-bold">
            Healthcare Professionals Featured
          </h2>
        </div>

        <div className="relative w-full max-w-6xl mx-auto">
          {/* Prev */}
          <button
            onClick={prev}
            disabled={index === 0}
            aria-label="Previous slide"
            className="absolute -left-12 top-1/2 -translate-y-1/2 hidden xl:flex items-center justify-center h-8 w-8 rounded-full border border-white/20 bg-[#101010] hover:bg-white/10 transition-colors disabled:opacity-30"
          >
            <ChevronLeft className="h-4 w-4 text-white" />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {visible.map((doc) => (
              <div
                key={doc.name}
                className="p-1 text-center group"
              >
                <div className="border text-card-foreground shadow-sm overflow-hidden rounded-2xl border-white/10 bg-white/5 transition-all duration-300 group-hover:border-yellow-400/50 group-hover:shadow-lg group-hover:shadow-yellow-400/20 group-hover:-translate-y-1">
                  <div className="relative aspect-square w-full overflow-hidden">
                    <Image
                      src={doc.image}
                      alt={doc.name}
                      fill
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-white font-headline text-lg group-hover:text-yellow-400 transition-colors">
                      {doc.name}
                    </h3>
                    <p className="text-white/60 font-accent text-sm mt-1">{doc.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Next */}
          <button
            onClick={next}
            disabled={index >= maxIndex}
            aria-label="Next slide"
            className="absolute -right-12 top-1/2 -translate-y-1/2 hidden xl:flex items-center justify-center h-8 w-8 rounded-full border border-white/20 bg-[#101010] hover:bg-white/10 transition-colors disabled:opacity-30"
          >
            <ChevronRight className="h-4 w-4 text-white" />
          </button>
        </div>

        {/* Mobile nav */}
        <div className="flex items-center justify-center gap-4 mt-8 xl:hidden">
          <button onClick={prev} disabled={index === 0} aria-label="Previous"
            className="flex items-center justify-center h-10 w-10 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition-colors disabled:opacity-30"
          >
            <ChevronLeft className="h-4 w-4 text-white" />
          </button>
          <span className="text-white/40 font-accent text-sm">{index + 1} / {maxIndex + 1}</span>
          <button onClick={next} disabled={index >= maxIndex} aria-label="Next"
            className="flex items-center justify-center h-10 w-10 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition-colors disabled:opacity-30"
          >
            <ChevronRight className="h-4 w-4 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
