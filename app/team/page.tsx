import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const teamRoles = [
  "Content Strategist",
  "Senior Podcast Video Editor",
  "Reel Video Editor",
  "Guest Outreach Executive",
  "Podcast Cuts Editor",
  "Backend Operation Executive",
  "Website Designer",
];

export default function Team() {
  return (
    <>
      <Navbar logoRed={false} />
      <main style={{ background: "#0A0A0A", minHeight: "100vh" }}>

        {/* HERO */}
        <section style={{ padding: "120px 24px 56px", textAlign: "center" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.18em", color: "#E8151B", textTransform: "uppercase", marginBottom: 16, fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
            Behind the Show
          </div>
          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(52px, 10vw, 110px)", lineHeight: 0.92, letterSpacing: "0.02em", color: "#fff", margin: 0 }}>
            Meet the <span style={{ color: "#E8151B" }}>Team</span>
          </h1>
          <p style={{ marginTop: 24, maxWidth: 480, margin: "24px auto 0", fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.75, color: "#555" }}>
            The people working behind the scenes to bring every episode to life.
          </p>
        </section>

        {/* ORG CHART */}
        <section style={{ padding: "0 24px 80px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>

            {/* MASUM */}
            <div style={{ background: "#E8151B", padding: "24px 40px", textAlign: "center", minWidth: 220 }}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 28, letterSpacing: "0.06em", color: "#fff", lineHeight: 1 }}>
                Masum Gandhi
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.75)", marginTop: 6 }}>
                Host &amp; Founder
              </div>
            </div>

            {/* Connector line */}
            <div style={{ width: 1, height: 36, background: "#333" }} />

            {/* MAZAM */}
            <div style={{ background: "#1a1a1a", border: "1px solid #E8151B", padding: "20px 36px", textAlign: "center", minWidth: 220 }}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 24, letterSpacing: "0.06em", color: "#fff", lineHeight: 1 }}>
                Mazam Majmudar
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#E8151B", marginTop: 6 }}>
                Senior Manager
              </div>
            </div>

            {/* Connector line down */}
            <div style={{ width: 1, height: 36, background: "#333" }} />

            {/* Horizontal spanning line */}
            <div style={{ width: "100%", position: "relative", display: "flex", justifyContent: "center" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "#2a2a2a" }} />

              {/* Vertical drops + cards */}
              <div style={{ width: "100%", display: "flex", gap: 3, alignItems: "flex-start" }}>
                {teamRoles.map((role) => (
                  <div key={role} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
                    {/* Drop line + dot */}
                    <div style={{ width: 1, height: 24, background: "#2a2a2a" }} />
                    <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#E8151B", marginBottom: 8 }} />
                    {/* Card */}
                    <div style={{ width: "100%", background: "#111", border: "1px solid #1e1e1e", padding: "16px 8px", textAlign: "center" }}>
                      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "#aaa", lineHeight: 1.5 }}>
                        {role}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer dark={false} />
    </>
  );
}
