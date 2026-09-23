const stats = [
  { value: "90+",       label: "Episodes" },
  { value: "10M+",      label: "Total Views" },
  { value: "52K+",      label: "Community" },
  { value: "Every Sat", label: "New Episode" },
];

export default function About() {
  return (
    <section className="bg-white border-b border-black/8">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2">
        {/* Left: placeholder / photo area */}
        <div className="bg-[#F0F0F0] min-h-[440px] md:min-h-[520px] flex items-end p-10">
          <div>
            <p className="font-headline text-[80px] md:text-[100px] leading-none text-[#0A0A0A]/10">MG</p>
          </div>
        </div>

        {/* Right: text */}
        <div className="flex flex-col justify-center px-8 py-14 md:px-12">
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-primary mb-4">
            Meet Your Host
          </p>
          <h2 className="font-headline text-[56px] md:text-[80px] leading-[0.9] text-[#0A0A0A] mb-6">
            MASUM<br />GANDHI
          </h2>
          <p className="text-[14px] leading-relaxed text-[#555] mb-4">
            Masum Gandhi is the creator of India&apos;s first trigger-question based podcast — a format designed to go beyond surface-level interviews and uncover the real stories behind people&apos;s journeys.
          </p>
          <p className="text-[14px] leading-relaxed text-[#555] mb-8">
            With 90+ conversations across healthcare, startups, finance, real estate, and entertainment, Masum has built a platform where industry leaders speak candidly about their wins, failures, and the lessons in between.
          </p>
          <div className="border-t border-black/10 pt-6 grid grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-headline text-[28px] text-primary leading-none">{s.value}</p>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-[#888] mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
