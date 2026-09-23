import Image from "next/image";

const doctors = [
  { name: "Dr. Disha",           role: "Paediatrician & Neonatologist",                   image: "/doctors/dr3.webp" },
  { name: "Dr. Kunjan Joshi",    role: "Periodontist",                                    image: "/doctors/dr4.webp" },
  { name: "Dr. Shuba Dharmana", role: "Celebrity Dermatologist",                          image: "/doctors/dr7.webp" },
  { name: "Dr. Devendra Dangar", role: "Paediatrician & Neonatologist",                   image: "/doctors/dr8.webp" },
  { name: "Dr. Poonam Dholakia", role: "Gynaecologist",                                   image: "/doctors/dr9.webp" },
  { name: "Dr. Kishlay",         role: "Hypercarnivore Metabolic Doctor",                 image: "/doctors/dr2.jpg" },
];

export default function HealthcareGuests() {
  return (
    <section className="bg-[#F8F8F8] py-16 md:py-24 border-t border-black/8">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-primary mb-3">
          Healthcare & Wellness
        </p>
        <h2 className="font-headline text-5xl md:text-7xl text-[#0A0A0A] leading-none mb-4">
          A Platform Trusted by<br />Healthcare Experts
        </h2>
        <p className="max-w-2xl text-[14px] leading-relaxed text-[#888] mb-10">
          In-depth conversations with leading healthcare professionals including gynaecologists,
          psychiatrists, dentists, oncologists, and diabetes specialists.
        </p>

        {/* Bento 3-col grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[3px] bg-black/8">
          {doctors.map((doc) => (
            <div key={doc.name} className="relative overflow-hidden aspect-[4/5] group">
              <Image
                src={doc.image}
                alt={doc.name}
                fill
                className="object-cover object-[center_20%] transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="w-7 h-[2px] bg-primary mb-2.5" />
                <p className="font-headline text-2xl text-white leading-none">{doc.name}</p>
                <p className="text-[11px] text-[#aaa] mt-1.5">{doc.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
