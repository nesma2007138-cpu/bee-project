import { useEffect, useRef, useState } from "react";

const modules = import.meta.glob("../assets/Students/*.jpg", {
  eager: true,
  import: "default",
});

const photos = Object.entries(modules)
  .sort(
    ([a], [b]) =>
      parseInt(a.match(/(\d+)\.jpg$/)[1]) - parseInt(b.match(/(\d+)\.jpg$/)[1]),
  )
  .map(([, src]) => src);

const students = [
  { name: "Bee الطالبة", role: "student-1.jpg" },
  { name: " Bee Academy الطالب", role: "student-2.jpg" },
  { name: "فريق Bee Academy", role: "student-3.jpg" },
  { name: "فريق Bee Academy", role: "student-4.jpg" },
  { name: "فريق Bee Academy", role: "student-5.jpg" },
  { name: "  فريقBee Academy", role: "student-6.jpg" },
  { name: "فريق Bee Academy", role: "student-7.jpg" },
  { name: "  فريقBee Academy", role: "student-8.jpg" },
  { name: "  فريقBee Academy", role: "student-9.jpg" },
  { name: "فريق Bee Academy", role: "student-10.jpg" },
  { name: "فريق Bee Academy", role: "student-11.jpg" },
];

export default function StudentsCarousel() {
  const total = photos.length;
  const [current, setCurrent] = useState(0);
  const [shown, setShown] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStart = useRef(0);

  const go = (i) => setCurrent(((i % total) + total) % total);

  // موضع كل كارت (نفس منطق الكود الأصلي)
  const getPosition = (i) => {
    const offset = (i - current + total) % total;
    if (offset === 0) return "pos-center";
    if (offset === 1) return "pos-r1";
    if (offset === 2) return "pos-r2";
    if (offset === total - 1) return "pos-l1";
    if (offset === total - 2) return "pos-l2";
    return "pos-hidden";
  };

  useEffect(() => {
    const t = setTimeout(() => setShown(current), 300);
    return () => clearTimeout(t);
  }, [current]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") setCurrent((c) => (c - 1 + total) % total);
      if (e.key === "ArrowRight") setCurrent((c) => (c + 1) % total);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [total]);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setCurrent((c) => (c + 1) % total), 4000);
    return () => clearInterval(id);
  }, [paused, total]);

  if (!total) return null;
  const info = students[shown] ?? { name: "", role: "" };

  return (
    <section
      className="sc-section"
      dir="rtl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => (touchStart.current = e.changedTouches[0].screenX)}
      onTouchEnd={(e) => {
        const diff = touchStart.current - e.changedTouches[0].screenX;
        if (Math.abs(diff) > 50) go(current + (diff > 0 ? 1 : -1));
      }}
    >
      <h2 className="sc-title">أبطالنا</h2>

      <div className="sc-container" dir="ltr">
        <button
          className="sc-arrow left"
          aria-label="السابق"
          onClick={() => go(current - 1)}
        >
          ‹
        </button>

        <div className="sc-track">
          {photos.map((src, i) => (
            <div
              key={src}
              className={`sc-card ${getPosition(i)}`}
              onClick={() => go(i)}
            >
              <img
                src={src}
                alt={`طالب من Bee Academy ${i + 1}`}
                draggable={false}
              />
            </div>
          ))}
        </div>

        <button
          className="sc-arrow right"
          aria-label="التالي"
          onClick={() => go(current + 1)}
        >
          ›
        </button>
      </div>

      <div className="sc-info" style={{ opacity: shown === current ? 1 : 0 }}>
        <h3 className="sc-name">{info.name}</h3>
        <p className="sc-role">{info.role}</p>
      </div>

      <div className="sc-dots" dir="ltr">
        {photos.map((_, i) => (
          <div
            key={i}
            className={`sc-dot ${i === current ? "active" : ""}`}
            onClick={() => go(i)}
          />
        ))}
      </div>
    </section>
  );
}
