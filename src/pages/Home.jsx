import React from "react";
import heroBg from "../assets/hero-bg.jpg"; // عدّلي الاسم والامتداد حسب صورتك
import RevealOnScroll from "../components/RevealOnScroll";

const HERO_PILLS = [
  "Smart Home",
  "Software",
  "ICT",
  "AI",
  "Programming",
  "Foundation Track",
  "Robotics",
];

export default function HeroSection({ children }) {
  return (
    <section className="relative min-h-[800px] pt-28 sm:pt-32 pb-20 bg-[#596683] text-white overflow-hidden flex items-start justify-center">
      {/* صورة الخلفية بوضوح ونقاء أعلى */}
      {heroBg && (
        <img
          src={heroBg}
          alt="Bee Academy Hero"
          className="absolute inset-0 h-full w-full object-cover object-center contrast-105 saturate-105 pointer-events-none select-none"
        />
      )}

      {/* طبقة خفيفة جداً للحفاظ على تباين النصوص دون طمس الصورة */}
      <div className="absolute inset-0 bg-[#596683]/15 pointer-events-none" />

      {/* محتوى القسم بظهور ناعم مرة واحدة */}
      {children && (
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll y={22}>{children}</RevealOnScroll>
        </div>
      )}

      {/* الشريط المتحرك على الحافة السفلية بعرض كامل */}
      <div
        dir="ltr"
        className="absolute bottom-0 inset-x-0 w-full z-20 border-t border-white/20 bg-white/15 backdrop-blur-md py-2.5 overflow-hidden"
      >
        <div className="flex w-max animate-marquee-rtl">
          {[0, 1].map((groupIdx) => (
            <div key={groupIdx} className="flex items-center gap-3 pr-3 shrink-0">
              {[...HERO_PILLS, ...HERO_PILLS].map((item, idx) => (
                <span
                  key={`${groupIdx}-${item}-${idx}`}
                  className="bg-white text-[#1E293B] text-xs sm:text-sm font-bold px-4 py-1 rounded-full shadow-sm whitespace-nowrap shrink-0"
                >
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}