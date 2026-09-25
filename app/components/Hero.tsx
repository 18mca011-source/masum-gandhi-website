export default function Hero() {
  return (
    <section style={{ padding: "64px 24px 56px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(72px, 14vw, 180px)", lineHeight: 0.9, letterSpacing: "0.02em", color: "#E8151B" }}>
        Masum Gandhi
      </div>
      <div style={{ marginTop: 20, fontSize: 13, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: "#aaa" }}>
        The Founder&apos;s Truth.
      </div>
      <p style={{ marginTop: 14, maxWidth: 520, fontSize: 15, lineHeight: 1.6, color: "#666" }}>
        Welcome to the Masum Gandhi Podcast, where I discuss business, healthcare, and the unfiltered reality of success with India&apos;s most fascinating minds.
      </p>
      <div style={{ marginTop: 32, display: "flex", flexWrap: "wrap" as const, gap: 10, justifyContent: "center" }}>
        <a href="https://www.youtube.com/@masumngandhi" target="_blank" rel="noopener noreferrer"
          style={{ display: "flex", alignItems: "center", gap: 8, padding: "9px 18px", borderRadius: 100, border: "1px solid #333", background: "#1a1a1a", color: "#fff", textDecoration: "none", fontSize: 13, fontWeight: 500 }}
          className="hover:border-white transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#FF0000"><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>
          YouTube
        </a>
        <a href="https://www.instagram.com/masumgandhi_/" target="_blank" rel="noopener noreferrer"
          style={{ display: "flex", alignItems: "center", gap: 8, padding: "9px 18px", borderRadius: 100, border: "1px solid #333", background: "#1a1a1a", color: "#fff", textDecoration: "none", fontSize: 13, fontWeight: 500 }}
          className="hover:border-white transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="url(#ig-g)" strokeWidth="2">
            <defs>
              <linearGradient id="ig-g" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f09433"/>
                <stop offset="50%" stopColor="#dc2743"/>
                <stop offset="100%" stopColor="#bc1888"/>
              </linearGradient>
            </defs>
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" strokeLinecap="round" strokeWidth="2.5"/>
          </svg>
          Instagram
        </a>
      </div>
    </section>
  );
}
