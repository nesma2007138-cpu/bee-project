// src/components/CheckoutModal.jsx
import React, { useState } from "react";

const PAYMENT_NUMBER = "01031903279";

export default function CheckoutModal({ selectedItem, onClose }) {
  const [formData, setFormData] = useState({
    studentName: "",
    age: "10",
    phone: "",
    mode: "أونلاين (Online)",
    method: "فودافون كاش (Vodafone Cash)",
    referenceNote: "",
  });
  const [submitted, setSubmitted] = useState(false);

  if (!selectedItem) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setFormData({
      studentName: "",
      age: "10",
      phone: "",
      mode: "أونلاين (Online)",
      method: "فودافون كاش (Vodafone Cash)",
      referenceNote: "",
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
          <div>
            <h3 className="text-lg font-extrabold text-[#1E293B]">
              الاشتراك والدفع — {selectedItem.title}
            </h3>
            <p className="text-xs text-[#F5BD35] font-bold mt-0.5">
              {selectedItem.priceLabel}
            </p>
          </div>
          <button
            type="button"
            onClick={resetAndClose}
            className="text-slate-400 hover:text-slate-700 text-xl font-bold px-2 cursor-pointer"
          >
            ✕
          </button>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                اسم الطالب *
              </label>
              <input
                type="text"
                required
                value={formData.studentName}
                onChange={(e) =>
                  setFormData({ ...formData, studentName: e.target.value })
                }
                placeholder="أدخل اسم الطالب"
                className="w-full border border-slate-300 rounded-xl px-3.5 py-2 text-sm"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  العمر (8 – 13) *
                </label>
                <select
                  value={formData.age}
                  onChange={(e) =>
                    setFormData({ ...formData, age: e.target.value })
                  }
                  className="w-full border border-slate-300 rounded-xl px-3.5 py-2 text-sm"
                >
                  {[8, 9, 10, 11, 12, 13].map((a) => (
                    <option key={a} value={a}>
                      {a} سنوات
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  رقم للتواصل / واتساب *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="010xxxxxxxx"
                  className="w-full border border-slate-300 rounded-xl px-3.5 py-2 text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                نظام الحضور المفضل
              </label>
              <select
                value={formData.mode}
                onChange={(e) =>
                  setFormData({ ...formData, mode: e.target.value })
                }
                className="w-full border border-slate-300 rounded-xl px-3.5 py-2 text-sm"
              >
                <option value="أونلاين (Online)">أونلاين (Online)</option>
                <option value="حضوري — الأقصر">حضوري — الأقصر</option>
                <option value="حضوري — قنا">حضوري — قنا</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2">
                اختر طريقة الدفع *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  "فودافون كاش (Vodafone Cash)",
                  "إنستا باي (InstaPay)",
                ].map((payMethod) => (
                  <button
                    key={payMethod}
                    type="button"
                    onClick={() =>
                      setFormData({ ...formData, method: payMethod })
                    }
                    className={`p-3 rounded-xl border text-xs font-bold text-right cursor-pointer transition ${
                      formData.method === payMethod
                        ? "border-[#F5BD35] bg-[#F5BD35]/10 text-[#1E293B]"
                        : "border-slate-200 text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {payMethod}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-[#596683]/10 border border-[#596683]/25 rounded-xl p-3.5 text-xs text-slate-800 space-y-1">
              <div>
                <strong>طريقة التحويل ({formData.method}):</strong> حوّل قيمة الاشتراك على الرقم{" "}
                <span className="font-extrabold text-[#F5BD35] select-all">
                  {PAYMENT_NUMBER}
                </span>
              </div>
              <div className="text-slate-600">
                بعد التحويل، أدخل الرقم المحول منه أو ملاحظة التأكيد ثم اضغط إتمام الاشتراك.
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                الرقم المحول منه / مرجع التحويل
              </label>
              <input
                type="text"
                value={formData.referenceNote}
                onChange={(e) =>
                  setFormData({ ...formData, referenceNote: e.target.value })
                }
                placeholder="مثال: تم التحويل من 010xxxxxxxx"
                className="w-full border border-slate-300 rounded-xl px-3.5 py-2 text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#F5BD35] hover:bg-[#df6926] text-white font-bold py-3 rounded-xl transition cursor-pointer"
            >
              تأكيد وإتمام الدفع
            </button>
          </form>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 font-extrabold text-2xl flex items-center justify-center mx-auto">
              ✓
            </div>
            <h4 className="text-lg font-extrabold text-[#1E293B]">
              تم تسجيل طلب الاشتراك بنجاح!
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              شكراً لك يا <strong>{formData.studentName}</strong>. تم تسجيل طلب الاشتراك في{" "}
              <strong>{selectedItem.title}</strong> عبر{" "}
              <strong>{formData.method}</strong>، وسيتواصل معك فريق{" "}
              <strong>Bee Academy</strong> على الرقم <strong>{formData.phone}</strong>.
            </p>
            <button
              type="button"
              onClick={resetAndClose}
              className="bg-[#596683] hover:bg-[#49556e] text-white font-bold px-6 py-2.5 rounded-xl cursor-pointer"
            >
              العودة لصفحة الكورسات
            </button>
          </div>
        )}
      </div>
    </div>
  );
}