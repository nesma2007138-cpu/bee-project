import { useRef, useState } from "react";


// يقرأ كل صور student-*.jpg تلقائيًا (بدون 11 import)
const photos = import.meta.glob(
  "/src/assets/students-photos/students/student-*.jpg",
  { eager: true, import: "default" }
);

const num = (path) => parseInt(path.match(/student-(\d+)/)[1], 10);

const images = Object.entries(photos)
  .sort(([a], [b]) => num(a) - num(b))
  .map(([, src]) => src);

// عدّل الأسماء والأوصاف هنا بنفس ترتيب الصور (الأول = student-1).
// أي صورة ليس لها عنصر هنا تأخذ القيمة الافتراضية.
const info = [
  // { name: "اسم الطالب", role: "وصف قصير لإنجازه" },
];

const defaultInfo = { name: "طالب متميز", role: "مسابقة Codeavour 7.0 الدولية" };

const students = images.map((photo, i) => ({
  photo,
  ...defaultInfo,
  ...(info[i] || {}),
}));

function getPosition(offset, total) {
  if (offset === 0) return "sc-center";
  if (offset === 1) return "sc-right-1";
  if (offset === 2) return "sc-right-2";
  if (offset === total - 1) return "sc-left-1";
  if (offset === total - 2) return "sc-left-2";
  return "sc-hidden";
}

export default function StudentsCarousel() {
  const [current, setCurrent] = useState(0);
  const locked = useRef(false);
  const touchStartX = useRef(0);
  const total = students.length;

  if (!total) return null;

  const goTo = (index) => {
    if (locked.current) return;
    locked.current = true;
    setCurrent((index + total) % total);
    setTimeout(() => (locked.current = false), 800);
  };

  const onTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].screenX;
    if (Math.abs(diff) > 50) goTo(diff > 0 ? current + 1 : current - 1);
  };

  return (
    <section className="sc-section">
      <h2 className="sc-title" aria-hidden="true">
        أبطالنا
      </h2>

      <div
        className="sc-carousel"
        onTouchStart={(e) => (touchStartX.current = e.changedTouches[0].screenX)}
        onTouchEnd={onTouchEnd}
      >
        <button
          className="sc-arrow sc-left"
          onClick={() => goTo(current - 1)}
          aria-label="السابق"
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </button>

        <div className="sc-track">
          {students.map((s, i) => (
            <div
              key={i}
              className={`sc-card ${getPosition((i - current + total) % total, total)}`}
              onClick={() => goTo(i)}
            >
              <img src={s.photo} alt={s.name} draggable={false} />
            </div>
          ))}
        </div>

        <button
          className="sc-arrow sc-right"
          onClick={() => goTo(current + 1)}
          aria-label="التالي"
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="sc-info" key={current}>
        <h3 className="sc-name">{students[current].name}</h3>
        <p className="sc-role">{students[current].role}</p>
      </div>

      <div className="sc-dots">
        {students.map((_, i) => (
          <button
            key={i}
            className={`sc-dot ${i === current ? "active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`الصورة ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}