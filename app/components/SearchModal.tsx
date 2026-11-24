"use client";
import { useState, useEffect, useRef } from "react";
import { Search, X, ExternalLink } from "lucide-react";
import { VIDEOS } from "../data/episodes";

function cleanTitle(title: string) {
  return title.replace(/\s*\|\s*Masum Gandhi\s*$/i, "").replace(/\s*\|\s*Masum\s*$/i, "");
}

export default function SearchModal({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const results = query.trim().length > 0
    ? VIDEOS.filter(v => v.title.toLowerCase().includes(query.toLowerCase())).slice(0, 8)
    : [];

  useEffect(() => {
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      style={{ position: "fixed", inset: 0, zIndex: 999, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "80px 16px 16px" }}
      onClick={onClose}
    >
      <div
        style={{ width: "100%", maxWidth: 640, background: "#fff", borderRadius: 2, boxShadow: "0 24px 64px rgba(0,0,0,0.18)", overflow: "hidden" }}
        onClick={e => e.stopPropagation()}
      >
        {/* Search input */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "16px 20px", borderBottom: "1px solid #e5e5e5" }}>
          <Search style={{ width: 18, height: 18, color: "#E8151B", flexShrink: 0 }} />
          <input
            ref={inputRef}
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search episodes..."
            style={{ flex: 1, border: "none", outline: "none", fontSize: 16, fontFamily: "'Inter', sans-serif", color: "#0A0A0A", background: "transparent" }}
          />
          {query && (
            <button onClick={() => setQuery("")} style={{ background: "none", border: "none", cursor: "pointer", color: "#aaa", padding: 2 }}>
              <X style={{ width: 16, height: 16 }} />
            </button>
          )}
          <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", color: "#888", padding: "4px 8px", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em" }}>
            ESC
          </button>
        </div>

        {/* Results */}
        {query.trim().length === 0 ? (
          <div style={{ padding: "32px 20px", textAlign: "center", color: "#aaa", fontSize: 13 }}>
            Type to search all {VIDEOS.length} episodes
          </div>
        ) : results.length === 0 ? (
          <div style={{ padding: "32px 20px", textAlign: "center", color: "#aaa", fontSize: 13 }}>
            No episodes found for &ldquo;{query}&rdquo;
          </div>
        ) : (
          <div style={{ maxHeight: 480, overflowY: "auto" }}>
            {results.map(v => (
              <a
                key={v.id}
                href={v.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "flex", gap: 12, alignItems: "center", padding: "12px 20px", textDecoration: "none", borderBottom: "1px solid #f0f0f0", transition: "background 0.15s" }}
                className="hover:bg-[#f9f9f9]"
                onClick={onClose}
              >
                {/* Thumbnail */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={v.thumb}
                  alt={v.title}
                  style={{ width: 80, height: 45, objectFit: "cover", flexShrink: 0, borderRadius: 1 }}
                />
                {/* Text */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#0A0A0A", lineHeight: 1.4, overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" as const }}>
                    {cleanTitle(v.title)}
                  </div>
                  <div style={{ fontSize: 11, color: "#aaa", marginTop: 4 }}>{v.published}</div>
                </div>
                <ExternalLink style={{ width: 14, height: 14, color: "#ccc", flexShrink: 0 }} />
              </a>
            ))}
            {results.length === 8 && (
              <div style={{ padding: "12px 20px", fontSize: 12, color: "#aaa", textAlign: "center" }}>
                Showing top 8 results
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
