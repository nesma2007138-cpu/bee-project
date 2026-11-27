// src/components/CourseDetailsModal.jsx
import React from "react";

export default function CourseDetailsModal({ item, onClose, onSubscribe }) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl">
        <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-4 mb-4">
          <div>
            <span className="inline-block text-xs font-bold bg-[#F5BD35]/15 text-[#F5BD35] px-3 py-1 rounded-full mb-2">
              {item.badge}
            </span>
            <h3 className="text-xl font-extrabold text-[#1E293B]">
              {item.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 text-xl font-bold px-2 cursor-pointer"
          >
            ✕
          </button>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed mb-4">
          {item.fullDetails}
        </p>

        <div className="bg-slate-50 rounded-xl p-4 space-y-2 text-xs sm:text-sm text-slate-700 mb-5">
          <div>
            <strong>العمر المستهدف:</strong> {item.age}
          </div>
          <div>
            <strong>نظام الدراسة:</strong> {item.system}
          </div>
          <div>
            <strong>الرسوم:</strong>{" "}
            <span className="text-[#F5BD35] font-bold">{item.priceLabel}</span>{" "}
            {item.subPrice ? `(${item.subPrice})` : ""}
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-bold text-sm text-[#1E293B] mb-2">
            أبرز محاور البرنامج:
          </h4>
          <ul className="space-y-2 text-sm text-slate-700">
            {item.syllabus.map((point, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-[#F5BD35] font-bold">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => {
              onClose();
              onSubscribe(item);
            }}
            className="flex-1 bg-[#F5BD35] hover:bg-[#df6926] text-white font-bold py-3 rounded-xl transition cursor-pointer"
          >
            اشترك الآن
          </button>
          <button
            type="button"
            onClick={onClose}
            className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 px-5 rounded-xl transition cursor-pointer"
          >
            إغلاق
          </button>
        </div>
      </div>
    </div>
  );
}