import React from "react";
import logo from "../assets/logo.png"; // عدّلي المسار حسب مكان logo.png داخل src

export default function Footer({ onNavigate }) {
  return (
    <footer
      id="main-footer"
      className="bg-[#596683] text-white pt-14 pb-8 mt-16 border-t border-white/10 overflow-visible"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
        {/* تعريف الأكاديمية + اللوجو متحرك شمال شوية */}
        <div className="space-y-4 overflow-visible">
          <button
            type="button"
            onClick={() => onNavigate("courses")}
            className="flex items-center gap-4 text-right cursor-pointer border-0 bg-transparent p-0 focus:outline-none overflow-visible -translate-x-3 md:-translate-x-4 transition-transform"
          >
            <img
              src={logo}
              alt="Bee Academy Logo"
              className="h-12 md:h-14 w-auto max-w-none object-contain border-0 shrink-0 scale-250 mx-2 origin-center transition-transform"
            />
          
          </button>

          <p className="text-white/80 leading-relaxed text-xs sm:text-sm">
            نُعد الطلاب من سن <strong>8 إلى 13 سنة</strong> في مجالات البرمجة، الذكاء الاصطناعي، والروبوتات بأسلوب تطبيقي شيق.
          </p>
          <p className="text-xs text-[#f5bd35] font-semibold">
            العنوان: مصر — الأقصر / قنا • متاح أونلاين
          </p>
        </div>

        {/* روابط سريعة */}
        <div>
          <h4 className="font-bold text-base mb-3 text-white">روابط سريعة</h4>
          <ul className="space-y-2 text-white/80">
            <li>
              <button
                type="button"
                onClick={() => onNavigate("home")}
                className="hover:text-[#F5BD35] cursor-pointer transition"
              >
                الرئيسية (Home)
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => onNavigate("about")}
                className="hover:text-[#F5BD35] cursor-pointer transition"
              >
                من نحن (About)
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => onNavigate("courses")}
                className="hover:text-[#F5BD35] cursor-pointer transition"
              >
                الكورسات والمسارات (Courses)
              </button>
            </li>
          </ul>
        </div>

        {/* المسارات التدريبية */}
        <div>
          <h4 className="font-bold text-base mb-3 text-white">
            المسارات التدريبية
          </h4>
          <ul className="space-y-2 text-white/80 text-xs sm:text-sm">
            <li>المسار التأسيسي (Foundation Path)</li>
            <li>مسار السوفت وير المتقدم (Software Path)</li>
            <li>مسار الهارد وير والروبوتات (Robotics)</li>
            <li>الكورسات والورش المتخصصة (8 – 13 سنة)</li>
          </ul>
        </div>

        {/* تواصل معنا */}
        <div className="space-y-2.5">
          <h4 className="font-bold text-base mb-3 text-white">تواصل معنا</h4>
          <p className="text-white/85 text-xs sm:text-sm">
            الاتصال: <span dir="ltr">+20 10 31903279</span>
          </p>
          <p className="text-white/85 text-xs sm:text-sm">
            واتساب / فودافون كاش / إنستا باي:{" "}
            <span className="font-bold text-[#F5BD35]">01031903279</span>
          </p>
          <p className="text-white/85 text-xs sm:text-sm break-all">
            البريد: bee.academy.edu.eg@gmail.com
          </p>

          <div className="flex flex-wrap items-center gap-2 pt-2">
            <a
              href="https://wa.me/201031903279"
              target="_blank"
              rel="noreferrer"
              className="bg-white/10 hover:bg-[#F5BD35] px-3 py-1.5 rounded-lg text-xs font-bold transition"
            >
              واتساب
            </a>
            <a
              href="https://www.facebook.com/share/1N5WnpPdXi/"
              target="_blank"
              rel="noreferrer"
              className="bg-white/10 hover:bg-[#F5BD35] px-3 py-1.5 rounded-lg text-xs font-bold transition"
            >
              فيسبوك
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-5 border-t border-white/10 text-center text-xs text-white/65">
        © {new Date().getFullYear()} Bee Academy — جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}