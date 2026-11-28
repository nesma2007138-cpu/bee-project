import React from "react";
import heroBg from "../assets/hero-bg.jpg"; // عدّلي الاسم والامتداد حسب صورتك

const HERO_PILLS = [
  "Smart Home",
  "Software",
  "ICT",
  "AI",
  "Programming",
  "Foundation Track",
  "Robotics",
];

export default function HeroSection() {
  return (
    <section
      style={heroBg ? { backgroundImage: `url(${heroBg})` } : undefined}
      className="relative min-h-[650px] pt-28 sm:pt-32 pb-20 bg-[#596683] bg-cover bg-center bg-no-repeat text-white overflow-hidden flex items-start justify-center"
    >
      {/* طبقة شفافة خفيفة لضمان وضوح النص مع الحفاظ على وضوح الصورة */}
      <div className="absolute inset-0 bg-[#596683]/45 pointer-events-none" />
{/* الشريط المتحرك على الحافة السفلية */}
<div
  dir="ltr"
  className="absolute bottom-0 inset-x-0 z-20 border-t border-white/20 bg-white/15 backdrop-blur-md py-2.5 overflow-hidden"
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