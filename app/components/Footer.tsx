export default function Footer({ dark = false }: { dark?: boolean }) {
  if (dark) {
    return (
      <footer style={{ background: "#080808", borderTop: "1px solid #EBEBEB" }}>
        <div className="max-w-[1200px] mx-auto px-12 py-14 grid grid-cols-1 md:grid-cols-3 gap-12 pb-10">
          <div>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 32, color: "#0A0A0A", letterSpacing: "0.04em", lineHeight: 1 }}>Masum<br />Gandhi</div>
            <div style={{ fontSize: 12, color: "#444", marginTop: 8, lineHeight: 1.5 }}>India&apos;s First Trigger-Question Podcast</div>
          </div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#E8151B", fontStyle: "italic" as const, marginBottom: 16 }}>Listen</div>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: 10 }}>
              {[["Spotify","https://open.spotify.com/show/20CTgx38209p042nwCRyS8"],["YouTube","https://www.youtube.com/@masumngandhi"],["Instagram","https://www.instagram.com/masumgandhi_/"]].map(([label,href])=>(
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" style={{ fontSize: 14, color: "#777" }}
                  className="hover:text-white transition-colors">{label}</a>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#E8151B", fontStyle: "italic" as const, marginBottom: 16 }}>Follow</div>
            <div style={{ display: "flex", gap: 12, marginBottom: 20 }}>
              {[["YT","https://www.youtube.com/@masumngandhi"],["IG","https://www.instagram.com/masumgandhi_/"],["in","https://www.linkedin.com/in/masumgandhi/"],["X","https://x.com/masumgandhi_"]].map(([label,href])=>(
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  style={{ width: 36, height: 36, borderRadius: "50%", border: "1px solid #2a2a2a", display: "flex", alignItems: "center", justifyContent: "center", color: "#888", fontSize: 13, textDecoration: "none" }}
                  className="hover:border-[#E8151B] hover:text-[#E8151B] transition-colors">{label}</a>
              ))}
            </div>
            <div style={{ fontSize: 12, color: "#555" }}>Partnerships: connect.masumgandhi@gmail.com</div>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto px-12" style={{ borderTop: "1px solid #1a1a1a", padding: "20px 48px", fontSize: 12, color: "#333", textAlign: "center" as const }}>
          © 2026 Masum Gandhi Podcast. All rights reserved.
        </div>
      </footer>
    );
  }

  return (
    <footer style={{ background: "#F8F8F8", borderTop: "1px solid #D8D8D8" }}>
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-12 py-14">
        <div>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(40px, 5vw, 72px)", lineHeight: 0.88, letterSpacing: "0.02em", color: "#0A0A0A" }}>Masum<br />Gandhi</div>
          <div style={{ marginTop: 10, fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#888" }}>India&apos;s First Trigger-Question Podcast</div>
        </div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, fontStyle: "italic" as const, letterSpacing: "0.08em", color: "#E8151B", marginBottom: 16, textTransform: "uppercase" as const }}>Listen</div>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 12 }}>
            {[["Spotify","https://open.spotify.com/show/20CTgx38209p042nwCRyS8"],["YouTube","https://www.youtube.com/@masumngandhi"],["Instagram","https://www.instagram.com/masumgandhi_/"]].map(([label,href])=>(
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" style={{ color: "#aaa", fontSize: 15 }}
                className="hover:text-[#0A0A0A] transition-colors">{label}</a>
            ))}
          </div>
        </div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, fontStyle: "italic" as const, letterSpacing: "0.08em", color: "#E8151B", marginBottom: 16, textTransform: "uppercase" as const }}>Follow</div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" as const, marginBottom: 24 }}>
            {[["YT","https://www.youtube.com/@masumngandhi"],["IG","https://www.instagram.com/masumgandhi_/"],["in","https://www.linkedin.com/in/masumgandhi/"],["X","https://x.com/masumgandhi_"]].map(([label,href])=>(
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                style={{ width: 42, height: 42, borderRadius: "50%", background: "#E5E5E5", display: "flex", alignItems: "center", justifyContent: "center", color: "#888", textDecoration: "none", fontSize: 13 }}
                className="hover:bg-[#E8151B] hover:text-black transition-colors">{label}</a>
            ))}
          </div>
          <div style={{ fontSize: 13, color: "#999" }}>Partnerships: <a href="mailto:connect.masumgandhi@gmail.com" style={{ color: "#E8151B" }}>connect.masumgandhi@gmail.com</a></div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto" style={{ borderTop: "1px solid #D8D8D8", margin: "0 auto", padding: "20px 48px", fontSize: 12, color: "#333", textAlign: "center" as const }}>
        © 2026 Masum Gandhi Podcast. All rights reserved.
      </div>
    </footer>
  );
}
