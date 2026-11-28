import React, { useEffect, useState } from "react";
import comp1 from "../assets/compition/comp1.jpg";
import comp2 from "../assets/compition/comp2.jpg";
import comp3 from "../assets/compition/comp3.jpg";
import comp4 from "../assets/compition/comp4.jpg";
import comp5 from "../assets/compition/comp5.jpg";
import comp6 from "../assets/compition/comp6.jpg";
import comp7 from "../assets/compition/comp7.jpeg";
import comp8 from "../assets/compition/comp8.jpeg";
import comp9 from "../assets/compition/comp9.jpeg";
import RevealOnScroll from "../components/RevealOnScroll";

const competitionCards = [
  {
    id: 1,
    image: comp1,
    title: "Competition Celebration",
    tag: "Group Photo",
    accent: "#0b466b",
  },
  {
    id: 2,
    image: comp2,
    title: "Galactic Team Members",
    tag: "Certificates & Awards",
    accent: "#5a3caa",
  },
  {
    id: 3,
    image: comp3,
    title: "Space Apps Bootcamp",
    tag: "Youth Teams",
    accent: "#0284c7",
  },
  {
    id: 4,
    image: comp4,
    title: "Space Apps Challenge",
    tag: "Team Showcase",
    accent: "#7c3aed",
  },
  {
    id: 5,
    image: comp5,
    title: "Bootcamp Highlights",
    tag: "Team Moments",
    accent: "#0d9488",
  },
  {
    id: 6,
    image: comp6,
    title: "Evening Gathering",
    tag: "Community",
    accent: "#2563eb",
  },
  {
    id: 7,
    image: comp7,
    title: "Codeavour 7.0 Egypt",
    tag: "Participants",
    accent: "#9333ea",
  },
  {
    id: 8,
    image: comp8,
    title: "Robotics Projects",
    tag: "Codeavour 7.0",
    accent: "#d97706",
  },
  {
    id: 9,
    image: comp9,
    title: "Trophies & Mentors",
    tag: "Championship",
    accent: "#059669",
  },
];

export default function Cards() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const selectedCard =
    selectedIndex !== null ? competitionCards[selectedIndex] : null;

  const handleNext = (e) => {
    e?.stopPropagation();
    setSelectedIndex((prev) =>
      prev === null ? 0 : (prev + 1) % competitionCards.length
    );
  };

  const handlePrev = (e) => {
    e?.stopPropagation();
    setSelectedIndex((prev) =>
      prev === null
        ? 0
        : (prev - 1 + competitionCards.length) % competitionCards.length
    );
  };

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedIndex(null);
      } else if (e.key === "ArrowRight") {
        setSelectedIndex((prev) =>
          prev === null ? 0 : (prev + 1) % competitionCards.length
        );
      } else if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) =>
          prev === null
            ? 0
            : (prev - 1 + competitionCards.length) % competitionCards.length
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  return (
    <section
      dir="rtl"
      className="w-full bg-gradient-to-b from-slate-50 to-indigo-50/70 px-4 py-16 sm:px-6"
    >
      <RevealOnScroll y={18} className="mx-auto mb-10 max-w-6xl text-center">
        <span className="mb-2.5 inline-block rounded-full bg-[#0b466b]/10 px-3.5 py-1 text-xs font-bold text-[#0b466b]">
          معرض البطولات
        </span>
        <h2 className="mb-2 text-2xl font-extrabold text-slate-900 sm:text-4xl">
          لحظات المسابقات والبطولات
        </h2>
      </RevealOnScroll>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {competitionCards.map((card, index) => (
          <RevealOnScroll
            key={card.id}
            delay={Math.min(index * 0.06, 0.36)}
            y={22}
          >
            <article
              style={{ "--card-accent": card.accent }}
              onClick={() => setSelectedIndex(index)}
              className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--card-accent)] hover:shadow-xl"
            >
              <div
                className="h-1 w-full"
                style={{ backgroundColor: "var(--card-accent)" }}
              />

              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-200">
                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <span
                  style={{ backgroundColor: "var(--card-accent)" }}
                  className="absolute top-3 right-3 rounded-full px-3 py-1 text-xs font-bold text-white shadow"
                >
                  {card.tag}
                </span>
              </div>

              <div className="flex items-center justify-between gap-3 bg-white p-4">
                <div>
                  <span
                    style={{ color: "var(--card-accent)" }}
                    className="block text-xs font-bold"
                  >
                    0{card.id}
                  </span>
                  <h3 className="text-base font-bold text-slate-900">
                    {card.title}
                  </h3>
                </div>

                <span
                  style={{
                    color: "var(--card-accent)",
                    backgroundColor:
                      "color-mix(in srgb, var(--card-accent) 12%, white)",
                  }}
                  className="shrink-0 rounded-lg px-3 py-1.5 text-xs font-bold transition-colors duration-200 group-hover:bg-[var(--card-accent)] group-hover:text-white"
                >
                  عرض ←
                </span>
              </div>
            </article>
          </RevealOnScroll>
        ))}
      </div>

      {selectedCard && (
        <div
          onClick={() => setSelectedIndex(null)}
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-5"
        >
          <button
            type="button"
            onClick={() => setSelectedIndex(null)}
            aria-label="إغلاق"
            className="fixed top-5 left-5 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white/15 text-lg text-white transition hover:bg-white/25"
          >
            ✕
          </button>

          <button
            type="button"
            onClick={handlePrev}
            aria-label="الصورة السابقة"
            className="fixed top-1/2 left-4 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/20 text-2xl leading-none text-white transition hover:bg-white/30"
          >
            ‹
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="flex w-full max-w-4xl flex-col items-center gap-3"
          >
            <img
              src={selectedCard.image}
              alt={selectedCard.title}
              className="max-h-[80vh] max-w-full rounded-xl object-contain shadow-2xl"
            />
            <div className="flex w-full items-center justify-between text-sm text-slate-100 sm:text-base">
              <strong className="font-bold">{selectedCard.title}</strong>
              <span className="text-slate-300">
                {selectedIndex + 1} / {competitionCards.length}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleNext}
            aria-label="الصورة التالية"
            className="fixed top-1/2 right-4 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/20 text-2xl leading-none text-white transition hover:bg-white/30"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}