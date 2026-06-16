"use client";
import { useState } from "react";
import { ChevronDown, CircleHelp } from "lucide-react";

const faqs = [
  {
    question: "Do I need to be famous or already successful to apply?",
    answer:
      "Not at all! We welcome guests at all stages of their journey — from early-stage founders to seasoned industry leaders. What matters most is your unique story and the value you can provide to our audience.",
  },
  {
    question: "Is the podcast recorded in studio or can it be done remotely?",
    answer:
      "We primarily record in our premium studio in Ahmedabad. However, we can accommodate remote recordings for guests who are unable to visit in person. We ensure the same high production quality regardless of format.",
  },
  {
    question: "What if I want changes after reviewing the draft?",
    answer:
      "We offer one round of revisions after you review the draft. Our team will work with you to address any reasonable concerns while maintaining the authentic, unfiltered quality that makes the podcast impactful.",
  },
  {
    question: "What will I personally gain from being on the podcast?",
    answer:
      "You'll gain massive brand exposure, a professionally produced video you can use in your marketing, credibility as a thought leader, and access to our 44k+ community of entrepreneurs, investors, and business professionals.",
  },
  {
    question: "What kind of reach can my episode get?",
    answer:
      "Our top episodes have garnered 20k+ views individually. On average, episodes receive thousands of views across YouTube, Instagram, and LinkedIn, with our overall platform having 10M+ views.",
  },
  {
    question: "Can I use the podcast in my marketing, ads, or investor decks?",
    answer:
      "Absolutely! You receive full rights to use your episode across all your marketing channels — social media ads, investor decks, website, email campaigns, and more. The professional production quality makes it immediately usable.",
  },
  {
    question: "Do I get any help preparing for the interview?",
    answer:
      "Yes! We have a dedicated content team that works with you prior to recording to understand your story, craft compelling talking points, and ensure you feel confident and prepared for the conversation.",
  },
  {
    question: "Can small businesses afford your services?",
    answer:
      "We have packages designed for businesses of all sizes. Please reach out to us at partnerships.masum@gmail.com to discuss options that fit your budget and goals.",
  },
  {
    question: "Can I see examples of past episodes or guests?",
    answer:
      "Absolutely! Visit our YouTube channel to browse all 80+ episodes and see the quality and variety of conversations we've hosted. You can also check out our featured guests section on this page.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-[#101010]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="inline-block p-4 bg-white/5 rounded-2xl ring-1 ring-white/10 backdrop-blur-sm mb-6">
            <CircleHelp className="h-10 w-10 text-yellow-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-headline text-white font-bold">
            Everything you need to know
          </h2>
          <p className="mt-2 max-w-xl mx-auto text-lg text-white/70 font-accent">
            Your questions about becoming a guest, answered.
          </p>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b glassmorphic rounded-lg mb-4 px-6"
              style={{ borderColor: "rgba(255,255,255,0.1)" }}
            >
              <button
                className="flex flex-1 items-center justify-between py-4 font-medium transition-all text-lg font-headline text-yellow-400 text-left hover:no-underline w-full"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span className="text-white hover:text-yellow-400 transition-colors text-left">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 transition-transform duration-200 text-yellow-400 ml-4 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="overflow-hidden text-sm transition-all pb-4">
                  <p className="text-white/70 font-accent leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
