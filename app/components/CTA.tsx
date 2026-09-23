import { Mic, Film, Users } from "lucide-react";

const benefits = [
  { icon: Mic,   label: "Professional Studio" },
  { icon: Film,  label: "Expert Production" },
  { icon: Users, label: "52k+ Reach" },
];

export default function CTA() {
  return (
    <section id="be-a-guest" className="bg-[#0A0A0A] py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-primary mb-4">Ready?</p>
        <h2 className="font-headline text-5xl md:text-[80px] text-white leading-none mb-6">
          Share Your Story<br />with 52k+ People
        </h2>
        <p className="max-w-xl mx-auto text-[14px] text-[#888] leading-relaxed mb-8">
          Join 90+ industry leaders who&apos;ve sat across from Masum to share their real journey —
          the wins, the failures, and everything in between.
        </p>

        {/* Benefits */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div key={b.label} className="flex items-center gap-2 text-[12px] text-[#888] border border-white/10 px-4 py-2">
                <Icon className="w-4 h-4 text-primary" />
                {b.label}
              </div>
            );
          })}
        </div>

        <a
          href="https://calendly.com/masumgandhi/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-[13px] font-bold text-white bg-primary uppercase tracking-widest px-10 py-4 hover:bg-primary-dim transition-colors"
        >
          Book a Discovery Call →
        </a>
      </div>
    </section>
  );
}
