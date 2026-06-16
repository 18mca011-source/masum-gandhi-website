import { CalendarDays, Mic, Film, Users } from "lucide-react";

const benefits = [
  { icon: <Mic className="w-5 h-5 text-yellow-400" />, label: "Professional Studio" },
  { icon: <Film className="w-5 h-5 text-yellow-400" />, label: "Expert Production" },
  { icon: <Users className="w-5 h-5 text-yellow-400" />, label: "52k+ Reach" },
];

export default function CTA() {
  return (
    <section id="be-a-guest" className="bg-[#101010] py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="text-card-foreground shadow-sm max-w-4xl mx-auto border border-white/10 rounded-2xl p-6 md:p-12 text-center"
          style={{ background: "rgba(26,26,26,0.8)" }}
        >
          <div className="inline-block p-4 bg-white/5 rounded-2xl ring-1 ring-white/10 backdrop-blur-sm mb-6">
            <CalendarDays className="h-10 w-10 text-yellow-400" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline text-white font-bold leading-tight">
            Ready to Share Your Story?
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-base md:text-lg text-white/70 font-accent px-4">
            Book a discovery call with Masum and let&apos;s create something extraordinary together.
          </p>

          {/* Benefits */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            {benefits.map((b) => (
              <div
                key={b.label}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white/80"
              >
                {b.icon}
                <span className="font-accent font-semibold">{b.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <a
              href="https://calendly.com/masumgandhi/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-11 font-bold text-white bg-gradient-to-r from-yellow-400 to-purple-600 rounded-lg font-accent px-6 py-6 text-base sm:text-lg hover:scale-105 transition-transform flex items-center text-center"
            >
              <CalendarDays className="mr-2 h-5 w-5" />
              Schedule Your Session
            </a>
          </div>

          <p className="mt-6 text-white/40 font-accent text-sm">
            Join 80+ industry leaders who&apos;ve shared their journey · 52k+ community
          </p>
        </div>
      </div>
    </section>
  );
}
