"use client";
import { useState } from "react";

const VIDEOS = [
  { id: "h60IAc_n-eg", title: 'EP089 | Cancer Surgeon Warning: "Gutkha Is Secretly Killing You" | Dr Shivam Pandya | Masum Gandhi', url: "https://www.youtube.com/watch?v=h60IAc_n-eg", thumb: "https://i.ytimg.com/vi/h60IAc_n-eg/hqdefault.jpg", published: "9d ago" },
  { id: "87ghB-zQ1Co", title: "EP088 | Top Paediatrician Explains: What Your Baby Really Needs | Dr. Devendra | Masum Gandhi", url: "https://www.youtube.com/watch?v=87ghB-zQ1Co", thumb: "https://i.ytimg.com/vi/87ghB-zQ1Co/hqdefault.jpg", published: "2w ago" },
  { id: "LPTttRQO2cM", title: "EP087 | Autism Treatments Exposed: Ayurveda Can Reverse Autism Symptoms? | Partha M. | Masum Gandhi", url: "https://www.youtube.com/watch?v=LPTttRQO2cM", thumb: "https://i.ytimg.com/vi/LPTttRQO2cM/hqdefault.jpg", published: "3w ago" },
  { id: "xJUBslGT2RE", title: "EP086 | Celebrity Dermatologist's ADVICE: How Celebrities Actually Look So Young | Dr.Shuba D.", url: "https://www.youtube.com/watch?v=xJUBslGT2RE", thumb: "https://i.ytimg.com/vi/xJUBslGT2RE/hqdefault.jpg", published: "3mo ago" },
  { id: "8pU3rpeDJRw", title: "EP085 | Top Fertility Doctor: Why Are So Many Women Struggling To Get Pregnant? | Dr.Chaitra | Masum", url: "https://www.youtube.com/watch?v=8pU3rpeDJRw", thumb: "https://i.ytimg.com/vi/8pU3rpeDJRw/hqdefault.jpg", published: "3mo ago" },
  { id: "PjQVyCkkbDo", title: "EP084 | So Many Babies Are Dying Because of THIS (Watch to Save Yours) Ft.Dr. Disha | Masum Gandhi", url: "https://www.youtube.com/watch?v=PjQVyCkkbDo", thumb: "https://i.ytimg.com/vi/PjQVyCkkbDo/hqdefault.jpg", published: "3mo ago" },
  { id: "hC_0nZp8EUE", title: "EP083 | Startup Reality: Burned ₹4.5 Crores Without Any Investors | Foodism, Vyom Shah | Masum Gandhi", url: "https://www.youtube.com/watch?v=hC_0nZp8EUE", thumb: "https://i.ytimg.com/vi/hC_0nZp8EUE/hqdefault.jpg", published: "3mo ago" },
  { id: "HuYfmzzTdwU", title: "EP082 | Braces & Invisalign Expert: Why Are Your Teeth Getting Weaker Every Day? | Dr. Shayoni Patel", url: "https://www.youtube.com/watch?v=HuYfmzzTdwU", thumb: "https://i.ytimg.com/vi/HuYfmzzTdwU/hqdefault.jpg", published: "4mo ago" },
  { id: "vHACWlBlcfM", title: "EP081 | Pet Care Founders: Stop Feeding Your Dog Parle-G & Roti — The Hidden Poisons | Paawsh", url: "https://www.youtube.com/watch?v=vHACWlBlcfM", thumb: "https://i.ytimg.com/vi/vHACWlBlcfM/hqdefault.jpg", published: "4mo ago" },
  { id: "DFhA3l8wIFk", title: "EP080 | Veg Diet is a Scam! End of Veg vs Non-Veg Diet | Metabolic Dr.K | Masum Gandhi", url: "https://www.youtube.com/watch?v=DFhA3l8wIFk", thumb: "https://i.ytimg.com/vi/DFhA3l8wIFk/hqdefault.jpg", published: "4mo ago" },
  { id: "9SqB-jIIARI", title: "EP079 | PPF vs Ceramic Coating: Don't Let Car Studios Scam You! | FILMSHOPPEE | Masum Gandhi", url: "https://www.youtube.com/watch?v=9SqB-jIIARI", thumb: "https://i.ytimg.com/vi/9SqB-jIIARI/hqdefault.jpg", published: "4mo ago" },
  { id: "DGajGGBh8Gw", title: "EP078 | Best Part-Time Business Opportunity to Earn LAKHS in 2026 ft Thangvel Nadar | Masum Gandhi", url: "https://www.youtube.com/watch?v=DGajGGBh8Gw", thumb: "https://i.ytimg.com/vi/DGajGGBh8Gw/hqdefault.jpg", published: "5mo ago" },
  { id: "Csw-6V9nFME", title: "EP077 | Startup Mistakes Founders Make | Hiring, HR Penalties, HR Careers | Vrishali M. | Masum G.", url: "https://www.youtube.com/watch?v=Csw-6V9nFME", thumb: "https://i.ytimg.com/vi/Csw-6V9nFME/hqdefault.jpg", published: "5mo ago" },
  { id: "FRYZp3k4ohQ", title: "Husband DIVORCED Wife after she spent ₹4 LAKH on Zomato orders | Masum Gandhi", url: "https://www.youtube.com/watch?v=FRYZp3k4ohQ", thumb: "https://i.ytimg.com/vi/FRYZp3k4ohQ/hqdefault.jpg", published: "5mo ago" },
  { id: "Bl38J8YTa44", title: "The Future of Ahmedabad Real Estate in 2050 ft. Chitrak Shah, Shivalik Group | Masum Gandhi", url: "https://www.youtube.com/watch?v=Bl38J8YTa44", thumb: "https://i.ytimg.com/vi/Bl38J8YTa44/hqdefault.jpg", published: "6mo ago" },
  { id: "ud6UaD2PFBA", title: "The Dark Reality of Indian Salons: Expired Products, Scams & Fake Reviews Ft.Vabez | Masum Gandhi", url: "https://www.youtube.com/watch?v=ud6UaD2PFBA", thumb: "https://i.ytimg.com/vi/ud6UaD2PFBA/hqdefault.jpg", published: "7mo ago" },
  { id: "euc8F_AK7_U", title: "Why the Next 10 Years Belong to Ahmedabad | Billionaire's Mindset | Yash Shah | Masum Gandhi", url: "https://www.youtube.com/watch?v=euc8F_AK7_U", thumb: "https://i.ytimg.com/vi/euc8F_AK7_U/hqdefault.jpg", published: "7mo ago" },
  { id: "7qyXzQ4DeEY", title: "Build a Successful Baking Business: Desserts, Branding, Pricing & Growth | Anuja Kamdar | Masum Gandhi", url: "https://www.youtube.com/watch?v=7qyXzQ4DeEY", thumb: "https://i.ytimg.com/vi/7qyXzQ4DeEY/hqdefault.jpg", published: "9mo ago" },
  { id: "dcXY7jIfA4I", title: "How to Sell Paintings & Earn Crores | Art Industry Reality & Scams | Malti Sharma | Masum Gandhi", url: "https://www.youtube.com/watch?v=dcXY7jIfA4I", thumb: "https://i.ytimg.com/vi/dcXY7jIfA4I/hqdefault.jpg", published: "10mo ago" },
  { id: "MbqwiBA9NZc", title: "Say Goodbye to Anxiety & Depression, Tips for Better Mental Health | Dr. Jwalant Chag | Masum Gandhi", url: "https://www.youtube.com/watch?v=MbqwiBA9NZc", thumb: "https://i.ytimg.com/vi/MbqwiBA9NZc/hqdefault.jpg", published: "10mo ago" },
  { id: "Gl9q3scEj-Y", title: "Make Your Home Look Expensive on a Budget | Interior Secrets from Ashish Panchal | Masum Gandhi", url: "https://www.youtube.com/watch?v=Gl9q3scEj-Y", thumb: "https://i.ytimg.com/vi/Gl9q3scEj-Y/hqdefault.jpg", published: "11mo ago" },
  { id: "ONFZIlt3Mcc", title: "Parenting Tips For NEW MOMs | Stubborn & Hyperactive Child | Niharika & Meshwa | Masum Gandhi", url: "https://www.youtube.com/watch?v=ONFZIlt3Mcc", thumb: "https://i.ytimg.com/vi/ONFZIlt3Mcc/hqdefault.jpg", published: "11mo ago" },
  { id: "taLQcWPPAQQ", title: "EP072 | Idli Point: How One Idli Stall Became a ₹7 Crore Business | Thangvel Nadar | Masum Gandhi", url: "https://www.youtube.com/watch?v=taLQcWPPAQQ", thumb: "https://i.ytimg.com/vi/taLQcWPPAQQ/hqdefault.jpg", published: "1yr ago" },
];

const PAGE_SIZE = 8;

function cleanTitle(title: string) {
  return title.replace(/\s*\|\s*Masum Gandhi\s*$/i, "").replace(/\s*\|\s*Masum\s*$/i, "");
}

export default function Episodes() {
  const [shown, setShown] = useState(PAGE_SIZE);
  const visible = VIDEOS.slice(0, shown);
  const allLoaded = shown >= VIDEOS.length;

  return (
    <section id="episodes" className="px-4 md:px-6 pb-16" style={{ maxWidth: 1200, margin: "0 auto" }}>
      <div className="flex flex-wrap items-baseline justify-between gap-2" style={{ marginBottom: 24 }}>
        <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 42, letterSpacing: "0.04em", color: "#fff" }}>
          Episodes<span style={{ color: "#E8151B" }}>.</span>
        </div>
        <div style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "#555" }}
          className="hover:text-[#E8151B] transition-colors cursor-default">
          Tap an episode to listen
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3" style={{ gap: 3 }}>
        {visible.map((v, i) => {
          const title = cleanTitle(v.title);
          return (
            <a key={v.id} href={v.url} target="_blank" rel="noopener noreferrer"
              style={{ display: "flex", flexDirection: "column", textDecoration: "none", background: "#111", cursor: "pointer" }}
              className="group"
            >
              {/* Thumbnail */}
              <div style={{ position: "relative", overflow: "hidden", aspectRatio: "16/9", flexShrink: 0 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={v.thumb} alt={title} loading="lazy"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block", transition: "transform .4s" }}
                  className="group-hover:scale-[1.04]" />
              </div>
              {/* Text below image */}
              <div style={{ padding: "12px 14px 14px" }}>
                <div style={{ fontSize: 13, fontWeight: 600, lineHeight: 1.4, color: "#fff", marginBottom: 6, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" as const, overflow: "hidden" }}
                  className="group-hover:text-[#E8151B] transition-colors">{title}</div>
                <div style={{ fontSize: 11, color: "#555" }}>{v.published}</div>
              </div>
            </a>
          );
        })}
      </div>

      <button
        onClick={() => {
          if (allLoaded) window.open("https://www.youtube.com/@masumngandhi/videos", "_blank");
          else setShown(s => Math.min(s + PAGE_SIZE, VIDEOS.length));
        }}
        style={{ display: "block", margin: "20px auto 0", padding: "12px 32px", background: "transparent", border: "1px solid #333", color: "#fff", fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" as const, cursor: "pointer", fontFamily: "inherit" }}
        className="hover:border-white hover:text-[#E8151B] transition-colors"
      >
        {allLoaded ? "View All on YouTube →" : "Show More Episodes"}
      </button>
    </section>
  );
}
