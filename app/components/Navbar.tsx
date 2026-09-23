"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar({ logoRed = false }: { logoRed?: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 100, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 32px", height: 56, background: "rgba(255,255,255,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid #D8D8D8" }}>
      <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
        <div style={{ width: 34, height: 34, background: logoRed ? "#E8151B" : "#0A0A0A", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Bebas Neue', sans-serif", fontSize: 18, color: "#fff", flexShrink: 0 }}>MG</div>
      </a>

      {/* Desktop */}
      <nav className="hidden md:flex" style={{ alignItems: "center", gap: 8 }}>
        <a href="/#episodes" style={{ textDecoration: "none", fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", padding: "7px 14px", borderRadius: 4 }} className="text-[#0A0A0A] hover:text-[#E8151B] transition-colors">Episodes</a>
        <a href="/be-a-guest" style={{ textDecoration: "none", fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", padding: "7px 14px", borderRadius: 4 }} className="text-[#0A0A0A] hover:text-[#E8151B] transition-colors">Guests</a>
        <a href="/be-a-guest" style={{ textDecoration: "none", fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", background: "#E8151B", color: "#fff", padding: "7px 16px", borderRadius: 4 }} className="hover:bg-[#b50f14] transition-colors">Be a Guest</a>
      </nav>

      {/* Mobile hamburger */}
      <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu" style={{ color: "#0A0A0A", background: "none", border: "none", cursor: "pointer" }}>
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {open && (
        <div className="md:hidden" style={{ position: "absolute", top: 56, left: 0, right: 0, background: "rgba(255,255,255,0.98)", borderBottom: "1px solid #D8D8D8", padding: "12px 32px 16px", display: "flex", flexDirection: "column", gap: 4 }}>
          <a href="/#episodes" onClick={() => setOpen(false)} style={{ padding: "12px 0", fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", borderBottom: "1px solid #f0f0f0" }} className="text-[#0A0A0A] hover:text-[#E8151B] transition-colors">Episodes</a>
          <a href="/be-a-guest" onClick={() => setOpen(false)} style={{ padding: "12px 0", fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", borderBottom: "1px solid #f0f0f0" }} className="text-[#0A0A0A] hover:text-[#E8151B] transition-colors">Guests</a>
          <a href="/be-a-guest" onClick={() => setOpen(false)} style={{ marginTop: 8, textAlign: "center", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", background: "#E8151B", color: "#fff", padding: "12px", borderRadius: 4 }}>Be a Guest</a>
        </div>
      )}
    </header>
  );
}
