export default function CTA() {
  return (
    <section className="bg-primary py-14 md:py-16">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="font-headline text-[40px] md:text-[56px] leading-none text-white">
            BE A GUEST ON THE SHOW
          </h2>
          <p className="text-[14px] text-white/70 mt-2">
            Join 90+ industry leaders who&apos;ve shared their story with 52k+ listeners across India.
          </p>
        </div>
        <a
          href="/be-a-guest"
          className="flex-shrink-0 text-[13px] font-bold text-[#0A0A0A] bg-white uppercase tracking-widest px-8 py-4 hover:bg-white/90 transition-colors whitespace-nowrap"
        >
          Book Your Session →
        </a>
      </div>
    </section>
  );
}
