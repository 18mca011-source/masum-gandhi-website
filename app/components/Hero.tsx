export default function Hero() {
  return (
    <section style={{ padding: "64px 24px 56px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(72px, 14vw, 180px)", lineHeight: 0.9, letterSpacing: "0.02em", color: "#0A0A0A" }}>
        Masum Gandhi
      </div>
      <div style={{ marginTop: 20, fontSize: 13, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: "#555" }}>
        India&apos;s First Trigger-Question Podcast
      </div>
      <p style={{ marginTop: 14, maxWidth: 480, fontSize: 15, lineHeight: 1.6, color: "#888" }}>
        Conversations with founders, healthcare experts, creators, and industry leaders that uncover real stories.
      </p>
      <div style={{ marginTop: 32, display: "flex", flexWrap: "wrap" as const, gap: 10, justifyContent: "center" }}>
        <a href="https://open.spotify.com/show/20CTgx38209p042nwCRyS8" target="_blank" rel="noopener noreferrer"
          style={{ display: "flex", alignItems: "center", gap: 8, padding: "9px 18px", borderRadius: 100, border: "1px solid #D8D8D8", background: "#F4F4F4", color: "#0A0A0A", textDecoration: "none", fontSize: 13, fontWeight: 500 }}
          className="hover:border-black transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#1DB954"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
          Spotify
        </a>
        <a href="https://www.youtube.com/@masumngandhi" target="_blank" rel="noopener noreferrer"
          style={{ display: "flex", alignItems: "center", gap: 8, padding: "9px 18px", borderRadius: 100, border: "1px solid #D8D8D8", background: "#F4F4F4", color: "#0A0A0A", textDecoration: "none", fontSize: 13, fontWeight: 500 }}
          className="hover:border-black transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#FF0000"><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>
          YouTube
        </a>
        <a href="https://www.instagram.com/masumgandhi_/" target="_blank" rel="noopener noreferrer"
          style={{ display: "flex", alignItems: "center", gap: 8, padding: "9px 18px", borderRadius: 100, border: "1px solid #D8D8D8", background: "#F4F4F4", color: "#0A0A0A", textDecoration: "none", fontSize: 13, fontWeight: 500 }}
          className="hover:border-black transition-colors">
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
