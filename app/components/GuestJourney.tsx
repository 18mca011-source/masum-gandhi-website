import { Mic, FileText, Video, Headphones, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <FileText className="w-6 h-6 text-yellow-400" />,
    title: "Pre-Interview Preparation",
    description:
      "We discuss your story, key messages, and create a comfortable recording plan.",
  },
  {
    number: "02",
    icon: <Sparkles className="w-6 h-6 text-yellow-400" />,
    title: "Content & Story Planning",
    description:
      "Our content team connects with you to craft compelling talking points and narratives.",
  },
  {
    number: "03",
    icon: <Mic className="w-6 h-6 text-yellow-400" />,
    title: "Professional Recording",
    description:
      "Record in our premium studio with top-tier equipment and expert guidance.",
  },
  {
    number: "04",
    icon: <Video className="w-6 h-6 text-yellow-400" />,
    title: "Premium Editing",
    description:
      "Our editors polish every frame to create a cinematic final product.",
  },
  {
    number: "05",
    icon: <Headphones className="w-6 h-6 text-yellow-400" />,
    title: "Strategic Promotion",
    description:
      "Amplify your message across our 44k+ community and beyond.",
  },
];

export default function GuestJourney() {
  return (
    <section className="py-16 md:py-24 bg-[#101010] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400/20 blur-[150px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/20 blur-[180px] rounded-full -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-headline text-white font-bold">
            Your Journey as Our Guest
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-base md:text-lg text-white/70 font-accent px-4">
            A seamless, professional experience from start to finish.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto mt-12 md:mt-20">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 h-full w-0.5 bg-white/10 md:-translate-x-1/2" />

          <div className="space-y-6 md:space-y-8">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`relative pb-12 md:pb-24 last:pb-0 pl-16 md:pl-0 flex ${
                  i % 2 === 0 ? "flex w-full md:flex-row" : "flex w-full md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`${
                    i % 2 === 0
                      ? "md:text-right bg-white/5 md:bg-transparent p-5 md:p-0 rounded-xl border border-white/5 md:border-none"
                      : "md:text-left bg-white/5 md:bg-transparent p-5 md:p-0 rounded-xl border border-white/5 md:border-none"
                  } md:w-5/12`}
                >
                  <p className="font-bold text-yellow-400 font-headline uppercase tracking-wide text-sm mb-1">
                    Step {step.number}
                  </p>
                  <h3 className="text-lg md:text-xl font-bold font-headline text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/60 font-accent text-sm md:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Center icon */}
                <div className="absolute left-4 md:left-1/2 top-0 md:-translate-x-1/2 z-10">
                  <div className="relative flex items-center justify-center w-8 h-8 md:w-16 md:h-16 bg-[#101010] border border-white/10 rounded-full shadow-lg shadow-yellow-400/5">
                    {step.icon}
                    <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-4 h-4 md:w-6 md:h-6 rounded-full bg-yellow-400 text-black flex items-center justify-center text-[8px] md:text-xs font-bold">
                      {step.number}
                    </div>
                  </div>
                </div>

                {/* Empty spacer for opposite side */}
                <div className="hidden md:block md:w-5/12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
