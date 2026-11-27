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
  "Smart Home",
];

export default function HeroSection() {
  return (
    <section
      style={heroBg ? { backgroundImage: `url(${heroBg})` } : undefined}
      className="relative min-h-[540px] pt-28 sm:pt-32 pb-20 bg-[#596683] bg-cover bg-center bg-no-repeat text-white overflow-hidden flex items-start justify-center"
    >
      {/* طبقة شفافة خفيفة لضمان وضوح النص مع الحفاظ على وضوح الصورة */}
      <div className="absolute inset-0 bg-[#596683]/45 pointer-events-none" />

      {/* العنوان مرفوع للأعلى حتى لا يغطي وجوه الأشخاص */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-md">
          Welcome <span className="text-[#F5BD35]">Bee Academy</span>
        </h1>
      </div>

      {/* الشريط المتحرك على الحافة السفلية */}
      <div className="absolute bottom-0 inset-x-0 z-20 border-t border-white/20 bg-white/15 backdrop-blur-md py-2.5 overflow-hidden">
        <div className="animate-marquee-rtl gap-3 px-2">
          {[...HERO_PILLS, ...HERO_PILLS].map((item, idx) => (
            <span
              key={`${item}-${idx}`}
              className="bg-white text-[#1E293B] text-xs sm:text-sm font-bold px-4 py-1 rounded-full shadow-sm whitespace-nowrap"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}