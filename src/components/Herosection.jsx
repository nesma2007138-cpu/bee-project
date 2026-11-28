import React from "react";
import student1 from "../assets/Students/student-1.jpg";
import student2 from "../assets/Students/student-2.jpg";
import student3 from "../assets/Students/student-3.jpg";
import student4 from "../assets/Students/student-4.jpg";
import student5 from "../assets/Students/student-5.jpg";
import student6 from "../assets/Students/student-6.jpg";
import student7 from "../assets/Students/student-7.jpg";

const photos = [
  { src: student1, x: -165, y: 35, rot: -10, fx: -420, fy: 120, delay: 0.05 },
  { src: student2, x: 165, y: -35, rot: 9, fx: 420, fy: -160, delay: 0.15 },
  { src: student3, x: -95, y: -85, rot: -5, fx: -360, fy: -240, delay: 0.25 },
  { src: student4, x: 105, y: 75, rot: 7, fx: 360, fy: 240, delay: 0.35 },
  { src: student5, x: -45, y: 95, rot: -7, fx: -80, fy: 380, delay: 0.45 },
  { src: student6, x: 55, y: -95, rot: 6, fx: 80, fy: -380, delay: 0.55 },
  { src: student7, x: 0, y: 0, rot: 0, fx: 0, fy: 60, delay: 0.65 },
];

export default function ImgesAnimation({ onOpenPlacementQuiz }) {
  const scrollToCatalog = () => {
    const el = document.getElementById("courses-catalog");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollBy({ top: 550, behavior: "smooth" });
    }
  };

  return (
    <section
      dir="rtl"
      className="relative overflow-hidden bg-gradient-to-bl from-[#F5BD35] via-[#f7c548] to-[#eab024] pt-28 pb-20 md:pt-32 md:pb-24"
    >
      <style>{`
        .bee-stage {
          position: relative;
          height: 440px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .bee-photo-card {
          position: absolute;
          width: 195px;
          background: #ffffff;
          padding: 7px 7px 12px;
          border-radius: 18px;
          border: 1px solid rgba(255, 255, 255, 0.9);
          box-shadow: 0 18px 38px rgba(30, 41, 59, 0.2);
          opacity: 0;
          transform: translate(var(--fx), var(--fy)) rotate(var(--rot)) scale(0.85);
          animation: beeCardEnter 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease;
          cursor: pointer;
          will-change: transform, opacity;
        }
        .bee-photo-card:hover {
          z-index: 50 !important;
          transform: translate(var(--x), calc(var(--y) - 10px)) rotate(0deg) scale(1.12) !important;
          box-shadow: 0 25px 50px rgba(15, 23, 42, 0.32);
        }
        .bee-photo-card img {
          display: block;
          width: 100%;
          height: 185px;
          object-fit: cover;
          border-radius: 12px;
        }
        @keyframes beeCardEnter {
          0% {
            opacity: 0;
            transform: translate(var(--fx), var(--fy)) rotate(var(--rot)) scale(0.85);
          }
          100% {
            opacity: 1;
            transform: translate(var(--x), var(--y)) rotate(var(--rot)) scale(1);
          }
        }
        @media (max-width: 900px) {
          .bee-stage {
            height: 350px;
          }
          .bee-photo-card {
            width: 145px;
            padding: 5px 5px 10px;
            border-radius: 14px;
          }
          .bee-photo-card img {
            height: 135px;
            border-radius: 10px;
          }
        }
      `}</style>

      {/* عناصر ديكورية ناعمة في الخلفية */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-white/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 -left-20 h-96 w-96 rounded-full bg-[#1E293B]/10 blur-3xl" />
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(#1E293B 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 items-center gap-10">
        {/* الجانب النصي */}
        <div className="lg:col-span-6 text-center lg:text-right space-y-5">
          <div className="inline-flex items-center gap-2 bg-[#1E293B]/10 border border-[#1E293B]/15 backdrop-blur-xs text-[#1E293B] text-xs sm:text-sm font-extrabold px-4 py-1.5 rounded-full">
            <span className="h-2 w-2 rounded-full bg-[#1E293B] animate-pulse" />
            مسارات وبرامج Bee Academy المعتمدة
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.2] text-[#1E293B]">
            رحلة عملية تبدأ من{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-white drop-shadow-xs">
                الأساسيات
              </span>
              <span className="absolute bottom-1 inset-x-0 h-3 bg-[#1E293B]/85 rounded-md -z-0" />
            </span>{" "}
            وتصل للابتكار
          </h1>

          <p className="text-[#1E293B]/90 text-sm sm:text-base lg:text-lg font-semibold leading-relaxed max-w-xl mx-auto lg:mx-0">
            استكشف كورسات البرمجة، الذكاء الاصطناعي، والروبوتات المصممة للأطفال
            والمراهقين بأسلوب تطبيقي ومشروعات حقيقية تبني مهاراتهم خطوة بخطوة.
          </p>

          {/* أزرار الإجراء */}
          <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
            {onOpenPlacementQuiz && (
              <button
                type="button"
                onClick={onOpenPlacementQuiz}
                className="bg-[#1E293B] hover:bg-[#0f172a] text-white font-extrabold text-sm px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer active:scale-95"
              >
                ابدأ اختبار تحديد المستوى
              </button>
            )}

            <button
              type="button"
              onClick={scrollToCatalog}
              className="bg-white/90 hover:bg-white text-[#1E293B] font-extrabold text-sm px-6 py-3.5 rounded-full shadow-sm hover:shadow transition-all cursor-pointer"
            >
              تصفح المسارات ↓
            </button>
          </div>

          {/* شريط مميزات سريعة */}
          <div className="pt-4 grid grid-cols-3 gap-3 max-w-md mx-auto lg:mx-0">
            <div className="bg-white/45 backdrop-blur-xs border border-white/60 rounded-2xl p-3 text-center">
              <div className="text-lg sm:text-xl font-black text-[#1E293B]">100%</div>
              <div className="text-[11px] sm:text-xs font-bold text-[#1E293B]/80">
                تطبيق عملي ومشاريع
              </div>
            </div>
            <div className="bg-white/45 backdrop-blur-xs border border-white/60 rounded-2xl p-3 text-center">
              <div className="text-lg sm:text-xl font-black text-[#1E293B]">5 - 18</div>
              <div className="text-[11px] sm:text-xs font-bold text-[#1E293B]/80">
                مناسب لكل الأعمار
              </div>
            </div>
            <div className="bg-white/45 backdrop-blur-xs border border-white/60 rounded-2xl p-3 text-center">
              <div className="text-lg sm:text-xl font-black text-[#1E293B]">أونلاين / مقر</div>
              <div className="text-[11px] sm:text-xs font-bold text-[#1E293B]/80">
                الأقصر وقنا ومباشر
              </div>
            </div>
          </div>
        </div>

        {/* الجانب البصري (مجموعة صور الطلاب التفاعلية) */}
        <div className="lg:col-span-6">
          <div className="bee-stage">
            {/* هالة خلف الصور */}
            <div className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-white/35 blur-2xl pointer-events-none" />

            {photos.map((p, i) => (
              <div
                key={i}
                className="bee-photo-card"
                style={{
                  zIndex: i + 1,
                  animationDelay: `${p.delay}s`,
                  "--x": `${p.x}px`,
                  "--y": `${p.y}px`,
                  "--fx": `${p.fx}px`,
                  "--fy": `${p.fy}px`,
                  "--rot": `${p.rot}deg`,
                }}
              >
                <img src={p.src} alt={`طلاب Bee Academy ${i + 1}`} />
                <div className="mt-2 flex items-center justify-end px-1">
                  <span className="text-[10px] font-bold text-slate-400">
                    Bee Academy
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* فاصل موجي ناعم ينقل لقسم الكورسات */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 leading-none">
        <svg
          viewBox="0 0 1440 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-8 sm:h-12 preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M0 30C320 75 640 -15 960 30C1200 63 1360 45 1440 30V70H0V30Z"
            fill="#F8FAFC"
          />
        </svg>
      </div>
    </section>
  );
}