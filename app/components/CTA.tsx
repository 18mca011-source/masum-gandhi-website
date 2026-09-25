export default function CTA() {
  return (
    <div style={{ background: "#E8151B", padding: "48px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap" as const }}>
      <div>
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(28px, 4vw, 48px)", color: "#fff", letterSpacing: "0.04em", lineHeight: 1 }}>Be a Guest on the Show</h2>
        <p style={{ marginTop: 6, fontSize: 14, color: "rgba(255,255,255,0.7)" }}>Join 90+ industry leaders who&apos;ve shared their story with 52k+ listeners across India.</p>
      </div>
      <a href="https://calendly.com/masumgandhi/30min" target="_blank" rel="noopener noreferrer"
        style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#000", color: "#fff", padding: "14px 28px", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, textDecoration: "none", whiteSpace: "nowrap" as const }}
        className="hover:opacity-85 transition-opacity">
        Book Your Session →
      </a>
    </div>
  );
}
