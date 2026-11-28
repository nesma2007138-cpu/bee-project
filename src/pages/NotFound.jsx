import React from "react";
import logo from "../assets/logo.png";

export default function NotFound({ onNavigate }) {
  const goHome = () => {
    if (onNavigate) {
      onNavigate("home");
    } else {
      window.location.href = "/";
    }
  };

  const goCourses = () => {
    if (onNavigate) {
      onNavigate("courses");
    } else {
      window.location.href = "/";
    }
  };

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center px-4 text-center relative overflow-hidden"
    >
      {/* دوائر خلفية خفيفة متناسقة مع ألوان الموقع */}
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#F5BD35]/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#596683]/15 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-lg w-full bg-white rounded-3xl shadow-xl border border-slate-100 p-8 sm:p-12">
        <img
          src={logo}
          alt="Bee Academy"
          className="h-16 w-auto mx-auto mb-4 object-contain"
        />

        <h1 className="text-7xl sm:text-8xl font-black text-[#F5BD35] tracking-tight drop-shadow-sm">
          404
        </h1>

        <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-[#1E293B]">
          عذراً، الصفحة غير موجودة!
        </h2>

        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
          يبدو أن الرابط الذي تحاول الوصول إليه غير صحيح أو تم نقل الصفحة.
          يمكنك العودة للصفحة الرئيسية أو استكشاف مساراتنا التعليمية.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={goHome}
            className="w-full sm:w-auto bg-[#F5BD35] hover:bg-[#df6926] text-white font-bold px-6 py-3 rounded-full shadow transition cursor-pointer"
          >
            العودة للرئيسية
          </button>

          <button
            type="button"
            onClick={goCourses}
            className="w-full sm:w-auto bg-[#596683] hover:bg-[#465169] text-white font-bold px-6 py-3 rounded-full shadow transition cursor-pointer"
          >
            تصفح الكورسات
          </button>
        </div>
      </div>
    </div>
  );
}