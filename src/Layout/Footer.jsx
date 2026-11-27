import React from "react";
import logo from "../assets/logo/Logo.png";

const quickLinks = [
  { label: "الرئيسية", href: "#home" },
  { label: "المسارات التعليمية", href: "#tracks" },
  { label: "أبطال الأكاديمية", href: "#champions" },
  { label: "المسابقات والبطولات", href: "#competitions" },
];

const tracksLinks = [
  "Software & Programming",
  "Artificial Intelligence (AI)",
  "Robotics & Smart Home",
  "ICT & Foundation Track",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      dir="rtl"
      className="w-full bg-gradient-to-b from-[##596683] to-[#596683] text-slate-200"
    >
      <div className="mx-auto max-w-6xl px-4 pt-14 pb-10 sm:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
    
          <div className="space-y-4">
            <div className="inline-flex items-center rounded-2xl  px-3.5 py-2 shadow-md">
              <img
                src={logo}
                alt="Bee Academy - small bees big dreams"
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="text-sm leading-relaxed text-slate-300">
              نُعدّ الطلاب في مجالات البرمجة، الذكاء الاصطناعي، والروبوتات
              بأسلوب تطبيقي يؤهلهم للمنافسة في البطولات المحلية والدولية مثل
              Codeavour وSpace Apps.
            </p>
          </div>

     
          <div>
            <h4 className="mb-4 text-base font-bold text-white">
              روابط سريعة
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-2 text-slate-300 transition hover:translate-x-1 hover:text-white"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

      
          <div>
            <h4 className="mb-4 text-base font-bold text-white">
              المسارات التدريبية
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {tracksLinks.map((track) => (
                <li key={track} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                  <span dir="ltr">{track}</span>
                </li>
              ))}
            </ul>
          </div>

       
          <div>
            <h4 className="mb-4 text-base font-bold text-white">تواصل معنا</h4>
            <div className="space-y-3 text-sm text-slate-300">
              <p className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-sky-300">
                  📍
                </span>
                <span>مصر — برامج حضورية وأونلاين</span>
              </p>
              <p className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-sky-300">
                  📞
                </span>
                <span dir="ltr">+20 1031903279</span>
              </p>
              <p className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-sky-300">
                  ✉️
                </span>
                <span dir="ltr">info@beeacademy.edu</span>
              </p>
            </div>

           
            <div className="mt-5 flex items-center gap-2.5">
              {[
                { name: "Facebook", label: "FB", href: "#" },
                { name: "Instagram", label: "IG", href: "#" },
                { name: "YouTube", label: "YT", href: "#" },
                { name: "WhatsApp", label: "WA", href: "#" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-xs font-bold text-white transition hover:-translate-y-0.5 hover:bg-sky-500"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/15 pt-6 text-xs text-slate-300 sm:flex-row">
          <p>© {currentYear} Bee Academy. جميع الحقوق محفوظة.</p>
          
        </div>
      </div>
    </footer>
  );
}
