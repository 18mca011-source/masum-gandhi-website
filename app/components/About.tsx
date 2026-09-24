export default function About() {
  return (
    <section style={{ background: "#111", borderTop: "1px solid #222", overflow: "hidden" }} className="px-6 py-10 md:px-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-stretch max-w-[1200px] mx-auto">
        {/* Left: photo */}
        <div style={{ position: "relative", overflow: "hidden", borderRadius: 4 }} className="h-72 md:h-auto md:min-h-[580px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://res.cloudinary.com/dx9zlffut/image/upload/v1779680173/IMG_2062_1_li8tou.jpg"
            alt="Masum Gandhi"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
          />
          <div style={{ position: "absolute", inset: 0 }} className="bg-gradient-to-b from-transparent to-[#111] md:bg-gradient-to-r md:from-transparent md:to-[#111]" />
        </div>

        {/* Right: text */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }} className="py-0 md:py-20 px-0 md:px-10">
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#E8151B", marginBottom: 12 }}>Meet Your Host</div>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(44px, 6vw, 88px)", lineHeight: 0.88, letterSpacing: "0.02em", color: "#fff", marginBottom: 24 }}>Masum<br />Gandhi</div>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: "#888", marginBottom: 14 }}>
            Masum Gandhi is the creator of India&apos;s first trigger-question based podcast — a format designed to go beyond surface-level interviews and uncover the real stories behind people&apos;s journeys.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: "#888", marginBottom: 14 }}>
            With 90+ conversations across healthcare, startups, finance, real estate, and entertainment, Masum has built a platform where industry leaders speak candidly about their wins, failures, and the lessons in between.
          </p>
          <div className="grid grid-cols-4 gap-4 mt-8 pt-6 border-t border-[#222]">
            {[["90+","Episodes"],["10M+","Total Views"],["52K+","Community"],["Every Sat","New Episode"]].map(([val,label])=>(
              <div key={label}>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(18px,4vw,26px)", color: "#E8151B", lineHeight: 1.1 }}>{val}</div>
                <div style={{ fontSize: 9, color: "#555", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
