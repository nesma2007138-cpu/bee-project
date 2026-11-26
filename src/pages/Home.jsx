import React from "react";
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
      <img className="w-full h-screen object-cover" src={HomeImg} alt="Hero" />

      <section className="skills-marquee-wrapper" dir="ltr">
        <div className="skills-marquee-track">
          {loopedSkills.map((skill, index) => (
            <div
              key={`${skill.id}-${index}`}
              className="skill-pill"
              style={{ "--accent": skill.accentColor }}
            >
              <div className="skill-icon-box">
                <img
                  src={skill.icon}
                  alt={skill.title}
                  className="skill-pill-icon"
                />
              </div>
              <span className="skill-pill-title">{skill.title}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}