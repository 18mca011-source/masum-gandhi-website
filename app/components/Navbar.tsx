"use client";
import { useState } from "react";
import { Menu, X, Mic } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Our Guests", href: "#guests" },
  { label: "Episodes", href: "#episodes" },
  { label: "Be a Guest", href: "#be-a-guest" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300 bg-[#101010]/80 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto flex h-24 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 md:gap-4">
          <div className="p-2 md:p-3 bg-white/10 rounded-full">
            <Mic className="h-6 w-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold font-headline text-yellow-400 leading-tight">
              Masum Gandhi
            </span>
            <span className="text-[10px] md:text-sm font-medium text-white/50 font-accent uppercase tracking-wider">
              Podcast
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 underline-offset-4 h-10 px-4 py-2 text-base font-bold text-white/80 hover:text-yellow-400 hover:no-underline transition-colors font-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6 text-white" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#101010]/95 backdrop-blur-md border-t border-white/10 px-4 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 px-4 text-white/80 hover:text-yellow-400 font-accent font-bold text-base transition-colors border-b border-white/5"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
