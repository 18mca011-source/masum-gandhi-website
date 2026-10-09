import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const FORM_LINK = "https://forms.gle/wHJheDPKEmdMhB837";

const roles = [
  {
    emoji: "🎬",
    title: "Reel Video Editor",
    desc: "Edit short-form vertical reels from long-form podcast footage. Strong sense of pacing, hooks, and viral content formats required.",
    skills: ["Adobe Premiere / CapCut", "Short-form storytelling", "Subtitles & captions"],
  },
  {
    emoji: "🖼️",
    title: "Thumbnail Designer",
    desc: "Design high-CTR YouTube thumbnails that stop the scroll. Eye-catching, bold, and on-brand with the Masum Gandhi aesthetic.",
    skills: ["Photoshop / Canva", "Typography & contrast", "A/B testing thumbnails"],
  },
  {
    emoji: "📣",
    title: "Content Strategist",
    desc: "Plan and execute content calendars across YouTube, Instagram, and LinkedIn. Turn podcast episodes into multi-platform content.",
    skills: ["Content planning", "Platform analytics", "Repurposing strategy"],
  },
  {
    emoji: "📈",
    title: "YouTube Growth Strategist",
    desc: "Drive channel growth through SEO, titles, descriptions, tags, and data-driven optimization strategies.",
    skills: ["YouTube SEO", "Analytics & data", "Title & hook writing"],
  },
  {
    emoji: "🎙️",
    title: "Podcast Video Editor",
    desc: "Edit full-length podcast episodes — multi-cam cuts, colour grading, audio mastering, and chapter markers.",
    skills: ["DaVinci Resolve / Premiere", "Multi-cam editing", "Audio correction"],
  },
  {
    emoji: "📬",
    title: "Guest Outreach Executive",
    desc: "Identify, research, and reach out to potential podcast guests — founders, doctors, and industry leaders across India.",
    skills: ["Research & prospecting", "Cold email / DMs", "CRM management"],
  },
];

export default function WorkWithMe() {
  return (
    <>
      <Navbar logoRed={false} />
      <main>
        {/* HERO */}
        <section style={{ padding: "120px 24px 64px", textAlign: "center", background: "#0A0A0A" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.18em", color: "#E8151B", textTransform: "uppercase", marginBottom: 16, fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
            Join the Team
          </div>
          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(52px, 10vw, 120px)", lineHeight: 0.92, letterSpacing: "0.02em", color: "#fff", margin: 0 }}>
            Work With <span style={{ color: "#E8151B" }}>Me</span>
          </h1>
          <p style={{ marginTop: 24, maxWidth: 560, margin: "24px auto 0", fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.75, color: "#666" }}>
            We&apos;re building India&apos;s most impactful podcast team. If you&apos;re passionate about content, storytelling, and growth — we want to hear from you.
          </p>
        </section>

        {/* ROLES */}
        <section style={{ background: "#0A0A0A", padding: "0 24px 60px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3" style={{ gap: 3 }}>
              {roles.map((role) => (
                <div key={role.title} style={{ background: "#111", border: "1px solid #1e1e1e", padding: "28px 22px 24px", display: "flex", flexDirection: "column", gap: 12 }}>
                  <div style={{ fontSize: 28 }}>{role.emoji}</div>
                  <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 24, letterSpacing: "0.04em", color: "#fff", margin: 0, lineHeight: 1 }}>
                    {role.title}
                  </h2>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, lineHeight: 1.7, color: "#777", margin: 0 }}>
                    {role.desc}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: "auto" }}>
                    {role.skills.map((s) => (
                      <span key={s} style={{ fontSize: 10, fontFamily: "'Inter', sans-serif", fontWeight: 600, letterSpacing: "0.06em", padding: "3px 8px", border: "1px solid #2a2a2a", color: "#555", textTransform: "uppercase" }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Common Apply Button */}
            <div style={{ textAlign: "center", marginTop: 40 }}>
              <a
                href={FORM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-block", padding: "16px 48px", background: "#E8151B", color: "#fff", fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none" }}
                className="hover:opacity-80 transition-opacity"
              >
                Apply Now →
              </a>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <div style={{ background: "#E8151B", padding: "48px 32px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(28px, 4vw, 48px)", color: "#fff", letterSpacing: "0.04em", margin: 0 }}>
            Don&apos;t See Your Role? Apply Anyway.
          </h2>
          <p style={{ marginTop: 10, fontFamily: "'Inter', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.75)", marginBottom: 28 }}>
            If you&apos;re talented and driven, we&apos;ll find a place for you.
          </p>
          <a
            href={FORM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-block", padding: "14px 32px", background: "#000", color: "#fff", fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}
            className="hover:opacity-80 transition-opacity"
          >
            Submit Your Application →
          </a>
        </div>
      </main>
      <Footer dark={false} />
    </>
  );
}
