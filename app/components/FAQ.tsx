"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { question: "Do I need to be famous or already successful to apply?",         answer: "Not at all! We welcome guests at all stages of their journey — from early-stage founders to seasoned industry leaders. What matters most is your unique story and the value you can provide to our audience." },
  { question: "Is the podcast recorded in studio or can it be done remotely?",   answer: "We primarily record in our premium studio in Ahmedabad. However, we can accommodate remote recordings for guests who are unable to visit in person." },
  { question: "What if I want changes after reviewing the draft?",               answer: "We offer one round of revisions after you review the draft. Our team will work with you to address any reasonable concerns while maintaining the authentic quality that makes the podcast impactful." },
  { question: "What will I personally gain from being on the podcast?",          answer: "You'll gain massive brand exposure, a professionally produced video you can use in your marketing, credibility as a thought leader, and access to our 52k+ community." },
  { question: "What kind of reach can my episode get?",                          answer: "Our top episodes have garnered 20k+ views individually. On average, episodes receive thousands of views across YouTube, Instagram, and LinkedIn, with our overall platform having 10M+ views." },
  { question: "Can I use the podcast in my marketing or investor decks?",        answer: "Absolutely! You receive full rights to use your episode across all your marketing channels — social media ads, investor decks, website, email campaigns, and more." },
  { question: "Do I get any help preparing for the interview?",                  answer: "Yes! We have a dedicated content team that works with you prior to recording to understand your story, craft compelling talking points, and ensure you feel confident." },
  { question: "Can small businesses afford your services?",                      answer: "We have packages designed for businesses of all sizes. Please reach out to us at connect.masumgandhi@gmail.com to discuss options that fit your budget and goals." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#F8F8F8] py-16 md:py-24 border-t border-black/8">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-primary mb-3">FAQ</p>
        <h2 className="font-headline text-5xl md:text-7xl text-[#0A0A0A] leading-none mb-10">
          Everything You<br />Need to Know
        </h2>

        <div className="space-y-px bg-black/8">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-[#F8F8F8]">
              <button
                className="flex items-center justify-between w-full px-6 py-5 text-left hover:bg-white transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span className="font-accent font-semibold text-[#0A0A0A] text-[14px] pr-8">{faq.question}</span>
                <ChevronDown className={`h-4 w-4 shrink-0 text-primary transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`} />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 bg-white">
                  <p className="text-[13px] text-[#666] leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
