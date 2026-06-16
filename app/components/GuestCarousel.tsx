"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface Guest {
  name: string;
  role: string;
  image: string;
}

const guests: Guest[] = [
  {
    name: "Jigar Daryanani",
    role: "Relationship Coach",
    image: "https://res.cloudinary.com/dx9zlffut/image/upload/v1779680173/IMG_2062_1_li8tou.jpg",
  },
  {
    name: "Priyanka Dalal",
    role: "Sports Performance Coach, Founder: High5 Performance",
    image: "https://res.cloudinary.com/dx9zlffut/image/upload/v1779680173/IMG_2062_1_li8tou.jpg",
  },
  {
    name: "Vatsal Kamdar",
    role: "Business Director, Kautilya Group",
    image: "https://res.cloudinary.com/dx9zlffut/image/upload/v1779680173/IMG_2062_1_li8tou.jpg",
  },
  {
    name: "Dr. Jwalant Chag",
    role: "Psychiatrist, Founder: Elegant Minds Hospital",
    image: "https://res.cloudinary.com/dx9zlffut/image/upload/v1779680173/IMG_2062_1_li8tou.jpg",
  },
  {
    name: "Chitrak Shah",
    role: "Co-Founder & MD, Shivalik Group",
    image: "https://res.cloudinary.com/dx9zlffut/image/upload/v1779680173/IMG_2062_1_li8tou.jpg",
  },
  {
    name: "Aditi Kulkarni",
    role: "Founder: Yuvana Wellness",
    image: "https://res.cloudinary.com/dx9zlffut/image/upload/v1779680173/IMG_2062_1_li8tou.jpg",
  },
  {
    name: "Thangvel Nadar",
    role: "Founder: Idli Point",
    image: "https://res.cloudinary.com/dx9zlffut/image/upload/v1779680173/IMG_2062_1_li8tou.jpg",
  },
  {
    name: "Vrishali Mulay",
    role: "Founder: Regatta HR Services",
    image: "https://res.cloudinary.com/dx9zlffut/image/upload/v1779680173/IMG_2062_1_li8tou.jpg",
  },
];

export default function GuestCarousel({ title }: { title: string }) {
  const [index, setIndex] = useState(0);
  const perPage = 3;
  const maxIndex = Math.max(0, guests.length - perPage);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));

  const visible = guests.slice(index, index + perPage);

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-3xl md:text-5xl font-headline text-white font-bold">{title}</h2>
      </div>

      <div className="relative">
        {/* Prev button */}
        <button
          onClick={prev}
          disabled={index === 0}
          aria-label="Previous slide"
          className="absolute -left-12 top-1/2 -translate-y-1/2 hidden xl:flex items-center justify-center h-8 w-8 rounded-full border border-white/20 bg-[#101010] hover:bg-white/10 transition-colors disabled:opacity-30"
        >
          <ChevronLeft className="h-4 w-4 text-white" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visible.map((guest) => (
            <div key={guest.name} className="group block">
              <div className="border text-card-foreground shadow-sm overflow-hidden rounded-2xl border-white/10 bg-white/5 transition-all duration-300 group-hover:border-yellow-400/50 group-hover:shadow-lg group-hover:shadow-yellow-400/20 group-hover:-translate-y-1">
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src={guest.image}
                    alt={guest.name}
                    fill
                    className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="mt-4 text-lg font-bold text-white font-headline group-hover:text-yellow-400 transition-colors">
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
        <button
          onClick={prev}
          disabled={index === 0}
          aria-label="Previous"
          className="flex items-center justify-center h-10 w-10 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition-colors disabled:opacity-30"
        >
          <ChevronLeft className="h-4 w-4 text-white" />
        </button>
        <span className="text-white/40 font-accent text-sm">
          {index + 1} / {maxIndex + 1}
        </span>
        <button
          onClick={next}
          disabled={index >= maxIndex}
          aria-label="Next"
          className="flex items-center justify-center h-10 w-10 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition-colors disabled:opacity-30"
        >
          <ChevronRight className="h-4 w-4 text-white" />
        </button>
      </div>
    </div>
  );
}
