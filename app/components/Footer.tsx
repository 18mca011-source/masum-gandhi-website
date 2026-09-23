import { Mail, Phone } from "lucide-react";

const links = [
  { label: "Episodes",   href: "#episodes" },
  { label: "Guests",     href: "#guests" },
  { label: "Be a Guest", href: "#be-a-guest" },
];

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/masumgandhi_/",   icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg> },
  { label: "YouTube",   href: "https://www.youtube.com/@masumngandhi",    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg> },
  { label: "LinkedIn",  href: "https://in.linkedin.com/in/masumgandhi",   icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg> },
  { label: "Spotify",   href: "https://open.spotify.com/show/20CTgx38209p042nwCRyS8?si=YL_km4YZTBCGYu_UqHtXAA", icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 11.973c2.5-1.473 5.5-.973 7.5.527M9 15c1.5-1 4-1.5 6 .5M7 9c3-1.5 6-1 9 1"/></svg> },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0A0A0A] border-t border-white/8">
      <div className="max-w-[1200px] mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-white rounded-[6px] flex items-center justify-center">
                <span className="font-headline text-[#0A0A0A] text-[15px] leading-none">MG</span>
              </div>
              <span className="font-headline text-white text-xl">Masum Gandhi Podcast</span>
            </div>
            <p className="text-[13px] text-[#666] leading-relaxed max-w-xs mb-6">
              India&apos;s first trigger-question based podcast with 90+ conversations featuring
              founders, healthcare experts, and industry leaders.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 border border-white/15 flex items-center justify-center text-[#666] hover:text-white hover:border-white/40 transition-colors">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#555] mb-5">Navigation</h3>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-[13px] text-[#666] hover:text-white transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#555] mb-5">Contact</h3>
            <div className="space-y-3">
              <a href="mailto:connect.masumgandhi@gmail.com"
                className="flex items-center gap-2 text-[13px] text-[#666] hover:text-white transition-colors">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                connect.masumgandhi@gmail.com
              </a>
              <a href="tel:+919773402508"
                className="flex items-center gap-2 text-[13px] text-[#666] hover:text-white transition-colors">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                +91 97734 02508
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/8 pt-6">
          <p className="text-[12px] text-[#444]">© 2026 Masum Gandhi Podcast. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
