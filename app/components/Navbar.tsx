"use client";
import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import dynamic from "next/dynamic";

const SearchModal = dynamic(() => import("./SearchModal"), { ssr: false });

export default function Navbar({ logoRed = false }: { logoRed?: boolean }) {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <header style={{ position: "sticky", top: 0, zIndex: 100, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 24px", height: 56, background: "rgba(255,255,255,0.95)", backdropFilter: "blur(12px)", borderBottom: "1px solid #e5e5e5" }}>
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 28, color: "#E8151B", letterSpacing: "0.04em", lineHeight: 1, flexShrink: 0 }}>MG</div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex" style={{ alignItems: "center", gap: 4 }}>
          <a href="/#episodes" style={{ textDecoration: "none", fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", padding: "7px 12px", borderRadius: 4 }} className="text-[#0A0A0A] hover:text-[#E8151B] transition-colors">Episodes</a>
          <a href="/be-a-guest" style={{ textDecoration: "none", fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", padding: "7px 12px", borderRadius: 4 }} className="text-[#0A0A0A] hover:text-[#E8151B] transition-colors">Guests</a>
          <a href="/team" style={{ textDecoration: "none", fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", padding: "7px 12px", borderRadius: 4 }} className="text-[#0A0A0A] hover:text-[#E8151B] transition-colors">Team</a>
          <a href="/work-with-me" style={{ textDecoration: "none", fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", padding: "7px 12px", borderRadius: 4 }} className="text-[#0A0A0A] hover:text-[#E8151B] transition-colors">Careers</a>

          {/* Search icon */}
          <button
            onClick={() => setSearchOpen(true)}
            aria-label="Search episodes"
            style={{ background: "none", border: "none", cursor: "pointer", padding: "7px 10px", color: "#555", display: "flex", alignItems: "center" }}
            className="hover:text-[#E8151B] transition-colors"
          >
            <Search style={{ width: 17, height: 17 }} />
          </button>

          <a href="/be-a-guest" style={{ textDecoration: "none", fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", background: "#E8151B", color: "#fff", padding: "7px 16px", borderRadius: 4, marginLeft: 4 }} className="hover:bg-[#b50f14] transition-colors">Be a Guest</a>
        </nav>

        {/* Mobile right: search + hamburger */}
        <div className="md:hidden" style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <button
            onClick={() => setSearchOpen(true)}
            aria-label="Search episodes"
            style={{ background: "none", border: "none", cursor: "pointer", padding: "8px", color: "#555" }}
            className="hover:text-[#E8151B] transition-colors"
          >
            <Search style={{ width: 18, height: 18 }} />
          </button>
          <button className="p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu" style={{ color: "#0A0A0A", background: "none", border: "none", cursor: "pointer" }}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden" style={{ position: "absolute", top: 56, left: 0, right: 0, background: "rgba(255,255,255,0.98)", borderBottom: "1px solid #e5e5e5", padding: "12px 32px 16px", display: "flex", flexDirection: "column", gap: 4 }}>
            <a href="/#episodes" onClick={() => setOpen(false)} style={{ padding: "12px 0", fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", borderBottom: "1px solid #e5e5e5" }} className="text-[#0A0A0A] hover:text-[#E8151B] transition-colors">Episodes</a>
            <a href="/be-a-guest" onClick={() => setOpen(false)} style={{ padding: "12px 0", fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", borderBottom: "1px solid #e5e5e5" }} className="text-[#0A0A0A] hover:text-[#E8151B] transition-colors">Guests</a>
            <a href="/team" onClick={() => setOpen(false)} style={{ padding: "12px 0", fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", borderBottom: "1px solid #e5e5e5" }} className="text-[#0A0A0A] hover:text-[#E8151B] transition-colors">Team</a>
            <a href="/work-with-me" onClick={() => setOpen(false)} style={{ padding: "12px 0", fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", borderBottom: "1px solid #e5e5e5" }} className="text-[#0A0A0A] hover:text-[#E8151B] transition-colors">Careers</a>
            <a href="/be-a-guest" onClick={() => setOpen(false)} style={{ marginTop: 8, textAlign: "center", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", background: "#E8151B", color: "#fff", padding: "12px", borderRadius: 4 }}>Be a Guest</a>
          </div>
        )}
      </header>

      {searchOpen && <SearchModal onClose={() => setSearchOpen(false)} />}
    </>
  );
}
