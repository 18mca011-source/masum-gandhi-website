import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-10 md:py-16 bg-[#101010]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 max-w-6xl mx-auto">

          {/* Image — fixed aspect ratio, never grows taller than the text */}
          <div className="w-full md:w-1/2 flex-shrink-0">
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
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

          {/* Text — sits beside the image, no overflow */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold text-white mb-3">
              Meet Your <span className="text-yellow-400">Host</span>
            </h2>
            <div className="w-16 h-1 rounded-full bg-gradient-to-r from-yellow-400 to-purple-600 mb-6" />

            <div className="space-y-3 text-white/80 font-accent text-sm md:text-[15px] leading-relaxed">
              <p>
                Hi, I&apos;m <strong className="text-white">Masum Gandhi</strong> a podcaster based in
                Ahmedabad and the host of Masum Gandhi Podcast, India&apos;s first trigger-question based podcast.
              </p>
              <p>
                I&apos;ve had the privilege of sitting down with some of India&apos;s most inspiring minds,
                from Shark Tank India founders and healthcare pioneers such as gynecologists, IVF specialists,
                psychiatrists, and oncologists, to D2C disruptors, serial entrepreneurs, and industry leaders
                shaping the future of business across India.
              </p>
              <p>
                Through <strong className="text-white">80+ conversations</strong> and counting, I&apos;ve built
                a platform focused on uncovering the real stories behind success; the struggles, pivots, lessons,
                and defining moments people rarely talk about.
              </p>
              <p>
                What makes these conversations different is my{" "}
                <strong className="text-yellow-400">TRIGGER-QUESTION METHOD</strong>, designed to go beyond
                surface-level interviews and create authentic, unfiltered discussions.
              </p>
              <p>Since I&apos;m a founder myself, guests don&apos;t feel interviewed they feel understood.</p>
              <p>
                My mission is simple: to bring meaningful stories and perspectives that inspire the next
                generation of dreamers, builders, and leaders.
              </p>
              <p className="font-bold text-white pt-1">Welcome to the journey.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
