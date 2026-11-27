import React, { useState } from "react";
import {
  PLACEMENT_LEVELS,
  getRecommendedTrack,
} from "../data/placementTestData";

export default function PlacementTestModal({ isOpen, onClose, onEnrollRecommended }) {
  const [step, setStep] = useState("form"); // "form" | "quiz" | "result"
  const [studentInfo, setStudentInfo] = useState({
    name: "",
    age: "10",
    phone: "",
  });

  const [levelIdx, setLevelIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [levelScores, setLevelScores] = useState({
    easy: 0,
    medium: 0,
    hard: 0,
  });
  const [passedFlags, setPassedFlags] = useState({
    passedEasy: false,
    passedMedium: false,
    passedHard: false,
  });

  if (!isOpen) return null;

  const currentLevel = PLACEMENT_LEVELS[levelIdx];

  const resetAll = () => {
    setStep("form");
    setLevelIdx(0);
    setAnswers({});
    setLevelScores({ easy: 0, medium: 0, hard: 0 });
    setPassedFlags({
      passedEasy: false,
      passedMedium: false,
      passedHard: false,
    });
  };

  const handleClose = () => {
    resetAll();
    onClose();
  };

  const handleStartQuiz = (e) => {
    e.preventDefault();
    if (!studentInfo.name.trim() || !studentInfo.phone.trim()) return;
    setAnswers({});
    setLevelIdx(0);
    setStep("quiz");
  };

  const handleSelectOption = (questionId, optionIndex) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const handleSubmitLevel = (e) => {
    e.preventDefault();
    const score = currentLevel.questions.reduce((acc, q) => {
      return answers[q.id] === q.correctIndex ? acc + q.points : acc;
    }, 0);

    const passed = score >= currentLevel.passScore;

    const updatedScores = {
      ...levelScores,
      [currentLevel.id]: score,
    };
    setLevelScores(updatedScores);

    const updatedPassed = {
      ...passedFlags,
      ...(currentLevel.id === "easy" ? { passedEasy: passed } : {}),
      ...(currentLevel.id === "medium" ? { passedMedium: passed } : {}),
      ...(currentLevel.id === "hard" ? { passedHard: passed } : {}),
    };
    setPassedFlags(updatedPassed);

    if (passed && levelIdx < PLACEMENT_LEVELS.length - 1) {
      setAnswers({});
      setLevelIdx((prev) => prev + 1);
    } else {
      setStep("result");
    }
  };

  const recommendation = getRecommendedTrack(passedFlags);

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl border border-slate-100">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
          <div>
            <h3 className="text-xl font-extrabold text-[#1E293B]">
              اختبار تحديد المستوى (3 مستويات)
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              تدرج ذكي من السهل إلى المتوسط ثم الصعب لتحديد المسار الأنسب للطالب
            </p>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="text-slate-400 hover:text-slate-700 text-xl font-bold px-2 cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* المرحلة 1: إدخال بيانات الطالب */}
        {step === "form" && (
          <form onSubmit={handleStartQuiz} className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">
                اسم الطالب *
              </label>
              <input
                type="text"
                required
                value={studentInfo.name}
                onChange={(e) =>
                  setStudentInfo({ ...studentInfo, name: e.target.value })
                }
                placeholder="اكتب اسم الطالب الثلاثي"
                className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#F47B35]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">
                  عمر الطالب (8 – 13 سنة) *
                </label>
                <select
                  value={studentInfo.age}
                  onChange={(e) =>
                    setStudentInfo({ ...studentInfo, age: e.target.value })
                  }
                  className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#F47B35]"
                >
                  {[8, 9, 10, 11, 12, 13].map((ageNum) => (
                    <option key={ageNum} value={ageNum}>
                      {ageNum} سنوات
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">
                  رقم واتساب / هاتف ولي الأمر *
                </label>
                <input
                  type="tel"
                  required
                  value={studentInfo.phone}
                  onChange={(e) =>
                    setStudentInfo({ ...studentInfo, phone: e.target.value })
                  }
                  placeholder="01xxxxxxxxx"
                  className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#F47B35]"
                />
              </div>
            </div>

            <div className="bg-[#596683]/10 text-[#1E293B] rounded-xl p-3.5 text-xs leading-relaxed">
              يبدأ الطالب بالمستوى <strong>السهل</strong>؛ وإذا حقق درجة النجاح ينتقل تلقائياً إلى <strong>المتوسط</strong> ثم <strong>الصعب</strong>.
            </div>

            <button
              type="submit"
              className="w-full bg-[#F47B35] hover:bg-[#e06a26] text-white font-bold py-3 rounded-xl transition cursor-pointer"
            >
              بدء المستوى الأول (السهل) ←
            </button>
          </form>
        )}

        {/* المرحلة 2: أسئلة المستوى الحالي */}
        {step === "quiz" && currentLevel && (
          <form onSubmit={handleSubmitLevel} className="space-y-5">
            <div className="flex items-center justify-between bg-slate-50 p-3 rounded-xl border border-slate-200">
              <span className="text-xs font-bold text-[#F47B35]">
                المستوى {currentLevel.levelNumber} من 3
              </span>
              <span className="text-xs font-semibold text-slate-600">
                درجة الانتقال للمستوى التالي: {currentLevel.passScore} درجة
              </span>
            </div>

            <h4 className="font-bold text-base text-[#1E293B]">
              {currentLevel.title}
            </h4>

            <div className="space-y-4">
              {currentLevel.questions.map((q, index) => (
                <div
                  key={q.id}
                  className="p-4 rounded-xl border border-slate-200 bg-white"
                >
                  <p className="font-semibold text-sm text-slate-800 mb-3">
                    {index + 1}. {q.text}{" "}
                    <span className="text-xs text-[#F47B35]">
                      ({q.points} درجات)
                    </span>
                  </p>
                  <div className="space-y-2">
                    {q.options.map((opt, optIdx) => {
                      const checked = answers[q.id] === optIdx;
                      return (
                        <label
                          key={optIdx}
                          className={`flex items-center gap-2.5 p-2.5 rounded-lg border text-sm cursor-pointer transition ${
                            checked
                              ? "border-[#F47B35] bg-[#F47B35]/10 font-semibold"
                              : "border-slate-200 hover:bg-slate-50"
                          }`}
                        >
                          <input
                            type="radio"
                            name={q.id}
                            required
                            checked={checked}
                            onChange={() => handleSelectOption(q.id, optIdx)}
                            className="accent-[#F47B35]"
                          />
                          <span>{opt}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            <button
              type="submit"
              className="w-full bg-[#596683] hover:bg-[#49556e] text-white font-bold py-3 rounded-xl transition cursor-pointer"
            >
              {levelIdx < PLACEMENT_LEVELS.length - 1
                ? "تسليم والانتقال للمستوى التالي"
                : "إنهاء الاختبار وعرض النتيجة"}
            </button>
          </form>
        )}

        {/* المرحلة 3: النتيجة والترشيح */}
        {step === "result" && (
          <div className="space-y-5">
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4">
              <p className="text-xs font-bold text-emerald-700 mb-1">
                نتيجة الطالب: {studentInfo.name} ({studentInfo.age} سنوات)
              </p>
              <h4 className="text-lg font-extrabold text-[#1E293B]">
                المسار المرشح: {recommendation.trackName}
              </h4>
              <p className="text-sm text-slate-600 mt-1">
                {recommendation.reason}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="block text-xs text-slate-500">المستوى السهل</span>
                <strong className="text-base text-[#1E293B]">
                  {levelScores.easy} / 25
                </strong>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="block text-xs text-slate-500">المستوى المتوسط</span>
                <strong className="text-base text-[#1E293B]">
                  {levelScores.medium} / 25
                </strong>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="block text-xs text-slate-500">المستوى الصعب</span>
                <strong className="text-base text-[#1E293B]">
                  {levelScores.hard} / 30
                </strong>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => {
                  handleClose();
                  onEnrollRecommended(recommendation.trackName);
                }}
                className="flex-1 bg-[#F47B35] hover:bg-[#e06a26] text-white font-bold py-3 px-4 rounded-xl transition cursor-pointer"
              >
                اشترك في المسار المرشح الآن
              </button>
              <button
                type="button"
                onClick={resetAll}
                className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 px-4 rounded-xl transition cursor-pointer"
              >
                إعادة الاختبار
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}