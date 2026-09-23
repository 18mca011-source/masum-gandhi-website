import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-[#F8F8F8] py-16 md:py-24 border-t border-black/8">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16">
          {/* Image */}
          <div className="w-full md:w-1/2 flex-shrink-0">
            <div className="relative w-full aspect-[4/5] overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dx9zlffut/image/upload/v1779680173/IMG_2062_1_li8tou.jpg"
                alt="Masum Gandhi"
                fill
                className="object-cover object-[62%_center]"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-primary mb-4">Meet Your Host</p>
            <h2 className="font-headline text-5xl md:text-7xl text-[#0A0A0A] leading-none mb-6">
              Hi, I&apos;m<br />Masum Gandhi
            </h2>
            <div className="space-y-3 text-[14px] md:text-[15px] leading-relaxed text-[#555]">
              <p>
                A podcaster based in Ahmedabad and the host of Masum Gandhi Podcast, India&apos;s first
                trigger-question based podcast.
              </p>
              <p>
                I&apos;ve had the privilege of sitting down with some of India&apos;s most inspiring minds —
                from Shark Tank India founders and healthcare pioneers to D2C disruptors, serial entrepreneurs,
                and industry leaders shaping the future of business across India.
              </p>
              <p>
                Through <strong className="text-[#0A0A0A]">90+ conversations</strong> and counting, I&apos;ve built
                a platform focused on uncovering the real stories behind success; the struggles, pivots, lessons,
                and defining moments people rarely talk about.
              </p>
              <p>
                What makes these conversations different is my{" "}
                <strong className="text-primary">TRIGGER-QUESTION METHOD</strong>, designed to go beyond
                surface-level interviews and create authentic, unfiltered discussions.
              </p>
              <p className="font-semibold text-[#0A0A0A] pt-1">Welcome to the journey.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
