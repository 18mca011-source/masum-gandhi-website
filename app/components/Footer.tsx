import { Mic, Mail, Phone } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Our Guests", href: "#guests" },
  { label: "Episodes", href: "#episodes" },
  { label: "Be a Guest", href: "#be-a-guest" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/masumgandhi_/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@masumngandhi",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://in.linkedin.com/in/masumgandhi",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/masum_gandhi",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4l16 16M4 20L20 4"/>
      </svg>
    ),
  },
  {
    label: "Spotify",
    href: "https://open.spotify.com/show/20CTgx38209p042nwCRyS8?si=YL_km4YZTBCGYu_UqHtXAA",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M8 11.973c2.5-1.473 5.5-.973 7.5.527M9 15c1.5-1 4-1.5 6 .5M7 9c3-1.5 6-1 9 1"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#101010]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="border-t border-white/10 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-5">
              <div className="flex flex-col items-center md:items-start text-center md:text-left mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-white/10 rounded-full">
                    <Mic className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-2xl font-bold font-headline text-yellow-400">
                    Masum Gandhi
                  </span>
                </div>
                <p className="text-white/60 font-accent text-sm leading-relaxed max-w-sm">
                  Where visionary conversations happen. Join our community of 52k+ listeners and be
                  part of inspiring discussions with CEOs, investors, and creators.
                </p>
              </div>
              {/* Social icons */}
              <div className="flex items-center gap-3 mt-6 justify-center md:justify-start">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="p-2 md:p-3 bg-white/10 rounded-full text-white/60 hover:text-yellow-400 hover:bg-white/20 transition-colors"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-4">
              <h3 className="text-lg font-semibold font-headline text-white mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-yellow-400 transition-colors font-accent text-sm text-white/60"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="md:col-span-3">
              <h3 className="text-lg font-semibold font-headline text-white mb-4">Contact</h3>
              <div className="space-y-3">
                <a
                  href="mailto:partnerships.masum@gmail.com"
                  className="flex items-center text-white/60 hover:text-yellow-400 transition-colors font-accent text-sm"
                >
                  <Mail className="h-5 w-5 text-yellow-400 mr-3" />
                  partnerships.masum@gmail.com
                </a>
                <a
                  href="tel:+919773402508"
                  className="flex items-center text-white/60 hover:text-yellow-400 transition-colors font-accent text-sm"
                >
                  <Phone className="h-5 w-5 text-yellow-400 mr-3" />
                  +91 97734 02508
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-6 text-center">
            <p className="text-white/40 font-accent text-sm">
              © 2026 Masum Gandhi Podcast. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
