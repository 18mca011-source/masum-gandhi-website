"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Episodes", href: "#episodes" },
  { label: "Guests",   href: "#guests" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-black/8">
      <div className="max-w-[1200px] mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <div className="w-9 h-9 bg-[#0A0A0A] rounded-[6px] flex items-center justify-center">
            <span className="font-headline text-white text-[15px] leading-none">MG</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] font-semibold text-[#0A0A0A] uppercase tracking-widest hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/be-a-guest"
            className="text-[13px] font-bold text-white bg-primary uppercase tracking-widest px-5 py-2.5 rounded hover:bg-primary-dim transition-colors"
          >
            Be a Guest
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 text-[#0A0A0A]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-black/8 px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 text-[13px] font-semibold text-[#0A0A0A] uppercase tracking-widest border-b border-black/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/be-a-guest"
            onClick={() => setOpen(false)}
            className="mt-3 text-center text-[13px] font-bold text-white bg-primary uppercase tracking-widest px-5 py-3 rounded"
          >
            Be a Guest
          </a>
        </div>
      )}
    </header>
  );
}
