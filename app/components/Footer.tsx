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
              {[["YouTube","https://www.youtube.com/@masumngandhi"],["Instagram","https://www.instagram.com/masumgandhi_/"]].map(([label,href])=>(
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
            <div style={{ fontSize: 12, color: "#555" }}>Partnerships / Sponsorships: connect.masumgandhi@gmail.com</div>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto px-12" style={{ borderTop: "1px solid #1a1a1a", padding: "20px 48px", fontSize: 12, color: "#333", textAlign: "center" as const }}>
          © 2026 Masum Gandhi Podcast. All rights reserved.
        </div>
      </footer>
    );
  }

  return (
    <footer style={{ background: "#111", borderTop: "1px solid #222" }}>
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-12 py-10 md:py-14">
        <div>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(40px, 5vw, 72px)", lineHeight: 0.88, letterSpacing: "0.02em", color: "#fff" }}>Masum<br />Gandhi</div>
          <div style={{ marginTop: 10, fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#555" }}>India&apos;s First Trigger-Question Podcast</div>
        </div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, fontStyle: "italic" as const, letterSpacing: "0.08em", color: "#E8151B", marginBottom: 16, textTransform: "uppercase" as const }}>Listen</div>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 12 }}>
            {[["YouTube","https://www.youtube.com/@masumngandhi"],["Instagram","https://www.instagram.com/masumgandhi_/"]].map(([label,href])=>(
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="footer-listen-link">{label}</a>
            ))}
          </div>
        </div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, fontStyle: "italic" as const, letterSpacing: "0.08em", color: "#E8151B", marginBottom: 16, textTransform: "uppercase" as const }}>Follow</div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" as const, marginBottom: 24 }}>
            {[
              { href: "https://www.youtube.com/@masumngandhi", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg> },
              { href: "https://www.instagram.com/masumgandhi_/", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg> },
              { href: "https://www.linkedin.com/in/masumgandhi/", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
              { href: "https://x.com/masumgandhi_", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
            ].map(({ href, icon }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="footer-social-btn">{icon}</a>
            ))}
          </div>
          <div style={{ fontSize: 13, color: "#999" }}>Partnerships / Sponsorships: <a href="mailto:connect.masumgandhi@gmail.com" style={{ color: "#E8151B" }}>connect.masumgandhi@gmail.com</a></div>
          <div style={{ fontSize: 13, color: "#999", marginTop: 6 }}>WhatsApp: <a href="https://wa.me/919773402508" target="_blank" rel="noopener noreferrer" style={{ color: "#E8151B" }}>+91 97734 02508</a></div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12" style={{ borderTop: "1px solid #222", padding: "20px 0", fontSize: 12, color: "#444", textAlign: "center" as const }}>
        © 2026 Masum Gandhi Podcast. All rights reserved.
      </div>
    </footer>
  );
}
