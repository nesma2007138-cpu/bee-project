import React from "react";
import { Link } from "react-router-dom";
import bookIcon from "../assets/Icon/Book.jpg";
import ictIcon from "../assets/Icon/Ict.jpg";
import aiIcon from "../assets/Icon/Main.jpg";
import programmingIcon from "../assets/Icon/programming.jpg";
import puzzleIcon from "../assets/Icon/puzzel.jpg";
import roboticsIcon from "../assets/Icon/robtics.jpg";
import smartHomeIcon from "../assets/Icon/smartHome.jpg";
import HomeImg from "../assets/Home/Hero.jpeg";

const Skills = [
  { id: 1, title: "Software", icon: bookIcon, accentColor: "#2563eb" },
  { id: 2, title: "ICT", icon: ictIcon, accentColor: "#0891b2" },
  { id: 3, title: "AI", icon: aiIcon, accentColor: "#7c3aed" },
  { id: 4, title: "Programming", icon: programmingIcon, accentColor: "#16a34a" },
  { id: 5, title: "Foundation Track", icon: puzzleIcon, accentColor: "#ea580c" },
  { id: 6, title: "Robotics", icon: roboticsIcon, accentColor: "#dc2626" },
  { id: 7, title: "Smart Home", icon: smartHomeIcon, accentColor: "#ca8a04" },
];

export default function Home() {
  const loopedSkills = [...Skills, ...Skills];

  return (
    <div>
    
      <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
        <img
          src={HomeImg}
          alt="Bee Academy Hero"
          className="absolute inset-0 h-full w-full object-cover"
        />

       
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/45 to-slate-950/30" />

      
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
          <span className="inline-block rounded-full border border-white/25 bg-white/15 px-4 py-1.5 text-sm font-semibold text-[#F5BD35] backdrop-blur-md">
            Bee Academy
          </span>

          <h1 className="mt-5 font-['Sora','Alexandria',sans-serif] text-5xl font-extrabold tracking-tight drop-shadow-lg sm:text-6xl md:text-7xl">
            Small Bees,{" "}
            <span className="text-[#F5BD35]">Big Dreams</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl font-['Alexandria',sans-serif] text-base leading-8 text-white/90 sm:text-lg">
            نحوّل شغف الأطفال بالتكنولوجيا إلى مشروعات حقيقية في البرمجة، الروبوتات، والذكاء الاصطناعي.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/about"
              className="rounded-full bg-[#E47B25] px-7 py-3 text-sm font-bold text-white shadow-lg shadow-[#E47B25]/35 transition hover:-translate-y-0.5 hover:bg-[#f08935]"
            >
              اكتشف الأكاديمية
            </Link>
            <Link
              to="/courses"
              className="rounded-full border border-white/30 bg-white/10 px-7 py-3 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/20"
            >
              استعرض المسارات
            </Link>
          </div>
        </div>
      </section>

      
      <section className="skills-marquee-wrapper py-8" dir="ltr">
        <div className="skills-marquee-track gap-6">
          {loopedSkills.map((skill, index) => (
            <div
              key={`${skill.id}-${index}`}
              className="skill-pill gap-5 px-8 py-4 shadow-md"
              style={{ "--accent": skill.accentColor }}
            >
              <div className="skill-icon-box h-20 w-20 shrink-0 overflow-hidden rounded-full">
                <img
                  src={skill.icon}
                  alt={skill.title}
                  className="skill-pill-icon h-full w-full object-cover"
                />
              </div>
              <span className="skill-pill-title text-2xl font-bold">
                {skill.title}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}