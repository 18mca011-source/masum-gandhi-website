export default function About() {
  return (
    <section style={{ background: "#111", borderTop: "1px solid #222", overflow: "hidden", padding: "60px 48px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "stretch", maxWidth: 1200, margin: "0 auto", gap: 60 }}
        className="grid-cols-1 md:!grid-cols-[1fr_1fr]">
        {/* Left: photo */}
        <div style={{ position: "relative", overflow: "hidden", minHeight: 580, borderRadius: 4 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://res.cloudinary.com/dx9zlffut/image/upload/v1779680173/IMG_2062_1_li8tou.jpg"
            alt="Masum Gandhi"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, transparent 50%, #111 95%)" }} />
        </div>

        {/* Right: text */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "80px 60px 80px 40px" }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#E8151B", marginBottom: 12 }}>Meet Your Host</div>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(52px, 6vw, 88px)", lineHeight: 0.88, letterSpacing: "0.02em", color: "#fff", marginBottom: 24 }}>Masum<br />Gandhi</div>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: "#888", marginBottom: 14 }}>
            Masum Gandhi is the creator of India&apos;s first trigger-question based podcast — a format designed to go beyond surface-level interviews and uncover the real stories behind people&apos;s journeys.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: "#888", marginBottom: 14 }}>
            With 90+ conversations across healthcare, startups, finance, real estate, and entertainment, Masum has built a platform where industry leaders speak candidly about their wins, failures, and the lessons in between.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20, marginTop: 32, borderTop: "1px solid #222", paddingTop: 24 }}>
            {[["90+","Episodes"],["10M+","Total Views"],["52K+","Community"],["Every Sat","New Episode"]].map(([val,label])=>(
              <div key={label}>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 26, color: "#E8151B", lineHeight: 1.1 }}>{val}</div>
                <div style={{ fontSize: 10, color: "#555", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
