// src/pages/CoursesPage.jsx
import React, { useState } from "react";
import HeroSection from "../components/Herosection"; // أو "../components/HeroSection" إذا عدّلتِ اسم الملف
import { CATALOG_ITEMS } from "../data/CatalogeData"; // أو "../data/catalogData"

function SectionCards({ title, subtitle, items, onMoreDetails, onSubscribe }) {
  return (
    <div className="mb-14">
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E293B]">
          {title}
        </h2>
        {subtitle && (
          <p className="text-sm text-slate-600 mt-1">{subtitle}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition p-5 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full ${item.accentBg} ${item.accentText}`}
                >
                  {item.badge}
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  {item.age}
                </span>
              </div>

              <h3 className="text-lg font-extrabold text-[#1E293B] mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                {item.shortDesc}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <div className="mb-4">
                <div className="text-base font-extrabold text-[#F5BD35]">
                  {item.priceLabel}
                </div>
                {item.subPrice && (
                  <div className="text-xs text-slate-500 mt-0.5">
                    {item.subPrice}
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => onMoreDetails(item)}
                  className="flex-1 border border-[#596683] text-[#596683] hover:bg-[#596683] hover:text-white font-bold text-xs sm:text-sm py-2.5 px-3 rounded-xl transition cursor-pointer"
                >
                  اعرف المزيد
                </button>
                <button
                  type="button"
                  onClick={() => onSubscribe(item)}
                  className="flex-1 bg-[#F5BD35] hover:bg-[#df6926] text-white font-bold text-xs sm:text-sm py-2.5 px-3 rounded-xl transition cursor-pointer"
                >
                  اشترك الآن
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CoursesPage({
  onOpenPlacementQuiz,
  onSelectItemDetails,
  onSelectItemSubscribe,
}) {
  const tracks = CATALOG_ITEMS.filter((i) => i.section === "tracks");
  const courses = CATALOG_ITEMS.filter((i) => i.section === "courses");
  const workshops = CATALOG_ITEMS.filter((i) => i.section === "workshops");

  return (
    <div>
      <HeroSection onStartQuiz={onOpenPlacementQuiz} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        {/* قسم اختبر نفسك */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm mb-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-right">
            <span className="text-xs font-bold text-[#F5BD35] uppercase">
              تقييم ذكي من 3 مستويات
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#1E293B]">
              مش متأكد تبدأ من فين؟ اختبر نفسك وحدد مستواك
            </h2>
            <p className="text-sm text-slate-600">
              املأ بيانات الطالب وابدأ الاختبار المتدرج (سهل • متوسط • صعب) لترشيح المسار المناسب.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenPlacementQuiz}
            className="w-full md:w-auto bg-[#F5BD35] hover:bg-[#df6926] text-white font-extrabold text-base px-8 py-4 rounded-2xl shadow-md transition cursor-pointer shrink-0"
          >
            اختبر نفسك
          </button>
        </div>

        {/* المسارات */}
        <section id="tracks-section">
          <SectionCards
            title="المسارات"
            subtitle="برامج تدريبية متدرجة لبناء المهارات التقنية والبرمجية للطلاب من 8 إلى 13 سنة"
            items={tracks}
            onMoreDetails={onSelectItemDetails}
            onSubscribe={onSelectItemSubscribe}
          />
        </section>

        {/* الكورسات */}
        <section id="courses-section">
          <SectionCards
            title="الكورسات"
            subtitle="كورسات متخصصة لتأسيس ما قبل البرمجة، دعم ICT، والذكاء الاصطناعي"
            items={courses}
            onMoreDetails={onSelectItemDetails}
            onSubscribe={onSelectItemSubscribe}
          />
        </section>

        {/* الورش */}
        <section id="workshops-section">
          <SectionCards
            title="الورش"
            subtitle="ورش تطبيقية ومعسكرات عملية ممتعة لتنفيذ مشاريع حقيقية"
            items={workshops}
            onMoreDetails={onSelectItemDetails}
            onSubscribe={onSelectItemSubscribe}
          />
        </section>
      </main>
    </div>
  );
}