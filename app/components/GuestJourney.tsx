import { Mic, FileText, Video, Headphones, Sparkles } from "lucide-react";

const steps = [
  { number: "01", icon: FileText,   title: "Pre-Interview Preparation",  description: "We discuss your story, key messages, and create a comfortable recording plan." },
  { number: "02", icon: Sparkles,   title: "Content & Story Planning",   description: "Our content team connects with you to craft compelling talking points and narratives." },
  { number: "03", icon: Mic,        title: "Professional Recording",     description: "Record in our premium studio with top-tier equipment and expert guidance." },
  { number: "04", icon: Video,      title: "Premium Editing",            description: "Our editors polish every frame to create a cinematic final product." },
  { number: "05", icon: Headphones, title: "Strategic Promotion",        description: "Amplify your message across our 52k+ community and beyond." },
];

export default function GuestJourney() {
  return (
    <section className="bg-[#F8F8F8] py-16 md:py-24 border-t border-black/8">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-primary mb-3">Process</p>
        <h2 className="font-headline text-5xl md:text-7xl text-[#0A0A0A] leading-none mb-10">
          Your Journey<br />as Our Guest
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-black/8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="bg-[#F8F8F8] p-6 hover:bg-white transition-colors">
                <p className="text-[11px] font-semibold text-primary mb-4">STEP {step.number}</p>
                <Icon className="w-5 h-5 text-[#0A0A0A] mb-4" />
                <h3 className="font-accent font-bold text-[#0A0A0A] text-[14px] mb-2 leading-snug">{step.title}</h3>
                <p className="text-[13px] text-[#888] leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
