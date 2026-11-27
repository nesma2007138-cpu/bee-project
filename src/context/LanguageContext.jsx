import React, { createContext, useContext, useEffect, useState } from "react";

const TRANSLATIONS = {
  ar: {
    home: "الرئيسية",
    about: "عن الأكاديمية",
    courses: "الكورسات",
    contact: "تواصل معنا",
    login: "ابدأ الآن",
    testYourselfBadge: "تحديد المستوى الذكي التكيّفي",
    testYourselfTitle: "مش عارف تبدأ من أي مسار أو كورس؟ اختبر نفسك الآن!",
    testYourselfDesc:
      "اختبار تفاعلي متدرج عبر 3 مستويات يحدد نقطة البداية الأنسب للطالب في البرمجة، المنطق، والروبوتات والذكاء الاصطناعي.",
    testYourselfBtn: "ابدأ اختبار تحديد المستوى الآن",
    tier1Name: "المستوى الأول: الأساسيات والمنطق البصري",
    tier2Name: "المستوى الثاني: البرمجة النصية والمنطق المتقدم",
    tier3Name: "المستوى الثالث: الهارد وير، الروبوتات، والذكاء الاصطناعي",
    quizQuestion: "سؤال",
    quizOf: "من",
    quizPoints: "نقطة",
    quizCorrect: "إجابة صحيحة! أحسنت.",
    quizIncorrect: "إجابة غير صحيحة، هنكمل ونشوف نتيجتك.",
    quizExplanation: "التوضيح:",
    quizCurrentScore: "مجموع النقاط الحالي:",
    quizSubmitAnswer: "تأكيد الإجابة",
    quizNextQuestion: "السؤال التالي",
    scorecardTitle: "عرض النتيجة النهائية",
    footerDesc:
      "أكاديمية متخصصة في تعليم الأطفال والناشئة أساسيات البرمجة، التفكير المنطقي، الروبوتات، والذكاء الاصطناعي بأسلوب عملي ممتع.",
    quickLinks: "روابط سريعة",
    tracksTitle: "المسارات التعليمية",
    contactTitle: "تواصل معنا",
    allRightsReserved: "جميع الحقوق محفوظة لـ Bee Academy",
  },
  en: {
    home: "Home",
    about: "About",
    courses: "Courses",
    contact: "Contact",
    login: "Get Started",
    testYourselfBadge: "Adaptive Placement Quiz",
    testYourselfTitle: "Not sure which track or course to start with? Test yourself now!",
    testYourselfDesc:
      "A 3-tier interactive placement quiz that finds the right starting point in coding, logic, robotics, and AI.",
    testYourselfBtn: "Start Placement Quiz Now",
    tier1Name: "Level 1: Fundamentals & Visual Logic",
    tier2Name: "Level 2: Text Coding & Intermediate Logic",
    tier3Name: "Level 3: Hardware, Robotics & AI",
    quizQuestion: "Question",
    quizOf: "of",
    quizPoints: "pts",
    quizCorrect: "Correct answer! Great job.",
    quizIncorrect: "Not quite right, let's continue to your result.",
    quizExplanation: "Explanation:",
    quizCurrentScore: "Current score:",
    quizSubmitAnswer: "Confirm Answer",
    quizNextQuestion: "Next Question",
    scorecardTitle: "View Final Result",
    footerDesc:
      "An academy dedicated to teaching kids and youth programming, logical thinking, robotics, and AI through hands-on learning.",
    quickLinks: "Quick Links",
    tracksTitle: "Learning Tracks",
    contactTitle: "Contact Us",
    allRightsReserved: "All rights reserved © Bee Academy",
  },
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("ar");

  const isRtl = lang === "ar";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isRtl ? "rtl" : "ltr";
    document.body.style.fontFamily = isRtl
      ? "'Alexandria', sans-serif"
      : "'Sora', sans-serif";
  }, [lang, isRtl]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === "ar" ? "en" : "ar"));
  };

  const t = (key) => TRANSLATIONS[lang]?.[key] || TRANSLATIONS.ar[key] || key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, isRtl, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return ctx;
}