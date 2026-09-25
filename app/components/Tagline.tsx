export default function Tagline() {
  return (
    <section style={{ background: "#e8e8e8", padding: "64px 24px", textAlign: "center" }}>
      <p style={{ fontFamily: "'Young Serif', Georgia, serif", fontSize: "clamp(22px, 3.5vw, 36px)", fontWeight: 700, color: "#111", lineHeight: 1.4, maxWidth: 760, margin: "0 auto", textWrap: "balance" as const }}>
        Conversations about business, healthcare, and startups with the people who built them.
      </p>
      <p style={{ marginTop: 20, fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "italic", letterSpacing: "0.12em", color: "#E8151B" }}>
        BUSINESS. HEALTHCARE. STARTUPS.
      </p>
    </section>
  );
}
