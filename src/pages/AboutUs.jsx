import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import img from "../assets/About/BeeAczdemy.jpg";
import about1 from "../assets/files/about-1.jpg";
import about2 from "../assets/files/about-2.jpg";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Whatsapp = "https://wa.me/201234567890";

// Animation
const ANIM = {
  duration: 0.75,
  stagger: 0.12,
  ease: "power3.out",
  triggerStart: "top 85%",
};

const num = [
  { n: "250+", disc: "طالب تم تدريبهم" },
  { n: "30", disc: "طالب نشط" },
  { n: "200+", disc: "ولى امر فى مجتمعنا" },
];

const goals = [
  {
    icon: "🔍",
    title: "اكتشاف القدرات",
    disc: "نساعد الطفل على اكتشاف اهتماماته وقدراته في التكنولوجيا.",
  },
  {
    icon: "🧪",
    title: "تعلم بالتجربة",
    disc: "البرمجة والروبوتات والإلكترونيات من خلال تطبيق عملي لا حفظ نظري.",
  },
  {
    icon: "🚀",
    title: "مشروعات حقيقية",
    disc: "نحوّل أفكار الأطفال إلى مشروعات يصنعونها بأيديهم.",
  },
  {
    icon: "🤝",
    title: "ثقة أولياء الأمور",
    disc: "نعرض النتائج والمشروعات الفعلية ليرى ولي الأمر أثر التعلم.",
  },
  {
    icon: "🏆",
    title: "تحديات ومسابقات",
    disc: "نؤهل المتميزين للمشاركة في مسابقات محلية ودولية.",
  },
  {
    icon: "🌍",
    title: "في كل مكان",
    disc: "تدريب أوفلاين في الأقصر وقنا، وأونلاين لأي طفل من أي مكان.",
  },
];

const values = [
  { icon: "💡", t: "الإبداع", bg: "#FFF5D9", c: "#F5BD35" },
  { icon: "🔬", t: "التجربة والاستكشاف", bg: "#EAF3FC", c: "#4389D8" },
  { icon: "🤝", t: "التعاون والعمل الجماعي", bg: "#F1EBFA", c: "#7957C8" },
  { icon: "🛠️", t: "التعلم بالتطبيق", bg: "#E4F6F3", c: "#16A6A0" },
  { icon: "🚀", t: "الابتكار", bg: "#FFF0E6", c: "#F47B35" },
  { icon: "🌱", t: "تطوير مهارات الأطفال", bg: "#E9F5ED", c: "#39966B" },
];

const team = [
  { name: "م. يوسف عبد الحميد", role: "المؤسس والمدرب", c: "#7957C8" },
  { name: "سلمى", role: "مدربة أونلاين", c: "#4389D8" },
  { name: "فاطمة", role: "مدربة أوفلاين – الأقصر", c: "#16A6A0" },
  { name: "أروى", role: "مدربة أوفلاين – قنا", c: "#F47B35" },
];

const faqs = [
  {
    q: "ما هو السن المناسب للبدء في الأكاديمية؟",
    a: "نبدأ من سن أقل من 8 سنوات (كورس ما قبل البرمجة) وحتى 16 سنة، بالإضافة إلى مسارات مخصصة لطلاب الثانوية (نظام البكالوريا) ومدارس النيل والإنترناشونال.",
  },
  {
    q: "هل يحتاج الطفل لخلفية سابقة في البرمجة؟",
    a: "لا، يبدأ كل طالب باختبار تحديد مستوى بسيط، ثم يلتحق بالمسار التأسيسي (3 أشهر) لتعلم المبادئ من الصفر بطريقة عملية.",
  },
  {
    q: "ما هو نظام الحصص والمتابعة؟",
    a: "الدراسة بمعدل حصة واحدة أسبوعياً (مدتها ساعتان)، ويحصل كل طالب على ملف ومجلد سحابي خاص لمتابعة مشاريعه وتقييمه الدوري مع ولي الأمر.",
  },
  {
    q: "هل يشارك الطلاب في مسابقات؟",
    a: "نعم، يتم تأهيل الطلاب المتميزين للمشاركة في مسابقات محلية ودولية مثل Codeavour و FIRST LEGO League.",
  },
];

function SectionHead({ tag, title, tint, color }) {
  return (
    <div data-reveal="head" className="mx-auto mb-12 max-w-2xl text-center">
      {tag && (
        <span
          className="inline-block rounded-full px-4 py-1.5 text-sm font-bold"
          style={{ background: tint, color }}
        >
          {tag}
        </span>
      )}
      <h2 className="mt-4 font-['Sora','Alexandria'] text-3xl font-extrabold text-[#2b3447] md:text-4xl">
        {title}
      </h2>
    </div>
  );
}

function FaqItem({ q, a, open, onToggle }) {
  return (
    <div className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 p-5 text-start font-bold text-[#2b3447]"
      >
        <span>{q}</span>
        <span
          className={`grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#F1EBFA] text-xl text-[#7957C8] transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 leading-8 text-[#596683]">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function AboutUs({ onOpenPlacementQuiz }) {
  const [openFaq, setOpenFaq] = useState(0);
  const pageRef = useRef(null);

  useGSAP(
    () => {
      // Animation HeroSeaction
      gsap.from("[data-hero-text]", {
        y: 30,
        opacity: 0,
        duration: ANIM.duration,
        stagger: 0.12,
        ease: ANIM.ease,
      });

      gsap.from("[data-hero-img]", {
        y: 36,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: ANIM.ease,
      });

      //  title Animation
      gsap.utils.toArray('[data-reveal="head"]').forEach((el) => {
        gsap.fromTo(
          el,
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: ANIM.duration,
            ease: ANIM.ease,
            scrollTrigger: {
              trigger: el,
              start: ANIM.triggerStart,
              once: true,
            },
          },
        );
      });
      // Title
      gsap.fromTo(
        "[data-stat]",
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: ANIM.duration,
          stagger: ANIM.stagger,
          ease: ANIM.ease,
          scrollTrigger: {
            trigger: "[data-stats-grid]",
            start: ANIM.triggerStart,
            once: true,
          },
        },
      );

      // Story
      gsap.fromTo(
        "[data-story-text]",
        { x: 35, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: ANIM.ease,
          scrollTrigger: {
            trigger: "[data-story-section]",
            start: ANIM.triggerStart,
            once: true,
          },
        },
      );

      gsap.fromTo(
        "[data-story-img]",
        { x: -35, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: ANIM.ease,
          scrollTrigger: {
            trigger: "[data-story-section]",
            start: ANIM.triggerStart,
            once: true,
          },
        },
      );

      //  Goals
      gsap.fromTo(
        "[data-vision-card]",
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: ANIM.duration,
          stagger: 0.16,
          ease: ANIM.ease,
          scrollTrigger: {
            trigger: "[data-vision-grid]",
            start: ANIM.triggerStart,
            once: true,
          },
        },
      );

      gsap.fromTo(
        "[data-goal-card]",
        { y: 26, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: ANIM.duration,
          stagger: 0.1,
          ease: ANIM.ease,
          scrollTrigger: {
            trigger: "[data-goals-grid]",
            start: "top 88%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        "[data-value-card]",
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.08,
          ease: ANIM.ease,
          scrollTrigger: {
            trigger: "[data-values-grid]",
            start: "top 88%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        "[data-team-card]",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: ANIM.duration,
          stagger: ANIM.stagger,
          ease: ANIM.ease,
          scrollTrigger: {
            trigger: "[data-team-grid]",
            start: ANIM.triggerStart,
            once: true,
          },
        },
      );

      gsap.fromTo(
        "[data-faq-item]",
        { y: 22, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: ANIM.ease,
          scrollTrigger: {
            trigger: "#faq",
            start: ANIM.triggerStart,
            once: true,
          },
        },
      );

      gsap.fromTo(
        "[data-cta]",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: ANIM.ease,
          scrollTrigger: {
            trigger: "[data-cta]",
            start: ANIM.triggerStart,
            once: true,
          },
        },
      );

      const refresh = () => ScrollTrigger.refresh();
      window.addEventListener("load", refresh);

      const imgs = pageRef.current?.querySelectorAll("img") || [];
      imgs.forEach((im) => {
        if (!im.complete) {
          im.addEventListener("load", refresh, { once: true });
        }
      });

      return () => {
        window.removeEventListener("load", refresh);
      };
    },
    { scope: pageRef },
  );

  return (
    <div ref={pageRef}>
      <main
        dir="rtl"
        className="overflow-hidden bg-[#F5BD35] font-['Alexandria',sans-serif] text-[#596683]"
      >
        <section className="relative px-5 pb-20 pt-36 md:pt-44">
          <div className="pointer-events-none absolute -top-20 start-[-6rem] h-72 w-72 rounded-full bg-[#F47B35] blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 end-[-5rem] h-72 w-72 rounded-full bg-[#7957C8]/20 blur-3xl" />

          <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
            <div>
              <span
                data-hero-text
                className="inline-block rounded-full bg-[#FFF5D9] px-4 py-1.5 text-sm font-bold text-[#b98507]"
              >
                Bee Academy
              </span>
              <h1
                data-hero-text
                className="mt-5 text-4xl font-extrabold md:text-5xl"
              >
                نحوّل الطفل من مستخدم للتكنولوجيا إلى{" "}
                <span className="text-[#5966C9]">صانع</span> لها
              </h1>
              <p
                data-hero-text
                className="mt-6 max-w-xl leading-9 text-[#596683]"
              >
                أكاديمية لتعليم البرمجة والروبوتات والإلكترونيات والذكاء
                الاصطناعي للأطفال والناشئين. نؤمن بالتعلم بالتجربة، فكل طفل
                عندنا ينفذ مشروعه بنفسه ويخرج بشيء حقيقي صنعه بيده.
              </p>
              <div data-hero-text className="mt-8 flex flex-wrap gap-3">
                <a
                  href={Whatsapp}
                  className="rounded-full bg-[#596683] px-7 py-3 font-bold text-orange-500 shadow-lg shadow-[#F47B35]/30 transition hover:-translate-y-0.5 hover:bg-[#F1EBFA]"
                >
                  تواصل معنا على واتساب
                </a>
                <a
                  href="#faq"
                  className="rounded-full bg-[#596683] px-7 py-3 font-bold text-orange-500 ring-1 ring-[#596683]/20 transition hover:bg-[#F1EBFA]"
                >
                  الأسئلة الشائعة
                </a>
              </div>
            </div>

            <div className="relative mx-auto flex max-w-md gap-4">
              <img
                data-hero-img
                src={about1}
                alt="طلاب Bee Academy مع شهادات المشاركة"
                className="mt-10 h-80 w-1/2 rotate-[-3deg] rounded-[2rem] object-cover shadow-xl ring-4 ring-white md:h-96"
              />
              <img
                data-hero-img
                src={about2}
                alt="طلاب Bee Academy في مسابقة تقنية"
                className="h-80 w-1/2 rotate-[3deg] rounded-[2rem] object-cover shadow-xl ring-4 ring-white md:h-96"
              />
            </div>
          </div>

          {/* Number */}
          <div
            data-stats-grid
            className="relative mx-auto mt-20 grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-3"
          >
            {num.map((s) => (
              <div
                key={s.disc}
                data-stat
                className="rounded-3xl bg-white p-6 text-center shadow-sm ring-1 ring-black/5"
              >
                <div className="font-['Sora'] text-4xl font-extrabold text-[#596683]">
                  {s.n}
                </div>
                <div className="mt-2 text-sm text-[#596683]">{s.disc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* story*/}
        <section data-story-section className="bg-white px-5 py-20">
          <div className="mx-auto max-w-6xl">
            <SectionHead title="بدأت بفكرة وثقة أولياء أمور" />

            <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-16">
              <div
                data-story-text
                className="space-y-5 leading-9 text-[#596683]"
              >
                <p>
                  بدأت الفكرة مع المهندس يوسف عبد الحميد، خريج هندسة اتصالات،
                  بعد سنوات من العمل والتدريس داخل عدد من الأكاديميات. وحين طلب
                  منه بعض أولياء الأمور أن يواصل تعليم أطفالهم لارتباطهم بطريقته
                  في الشرح، قرر أن يبدأ مشروعه الخاص.
                </p>
                <p>
                  ساعده أولياء الأمور في الترويج للخطوة الأولى، ومن هناك بدأت
                  Bee Academy في الأقصر، وتوسعت بالتعاون مع مركز Knowlera في
                  قنا، وبعض البرامج أونلاين.
                </p>
              </div>

              <img
                data-story-img
                src={img}
                alt="مؤسس Bee Academy"
                className="h-auto w-full max-w-md justify-self-center rounded-[2rem] object-cover shadow-xl ring-4 ring-white"
              />
            </div>
          </div>
        </section>

        <section className="px-5 py-20">
          <div
            data-vision-grid
            className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2"
          >
            <div data-vision-card className="rounded-[2rem] bg-[#EAF3FC] p-8">
              <div className="text-4xl">🔭</div>
              <h3 className="mt-4 text-2xl font-extrabold text-[#596683]">
                رؤيتنا
              </h3>
              <p className="mt-3 leading-9 text-[#3f5370]">
                أن يكبر كل طفل وهو يرى التكنولوجيا مجالاً يستطيع أن يبدع ويبتكر
                فيه، لا مجرد شاشة يستخدمها.
              </p>
            </div>
            <div data-vision-card className="rounded-[2rem] bg-[#FFF5D9] p-8">
              <div className="text-4xl">🎯</div>
              <h3 className="mt-4 text-2xl font-extrabold text-[#b98507]">
                رسالتنا
              </h3>
              <p className="mt-3 leading-9 text-[#6b5a2a]">
                توفير بيئة تعليمية تساعد الأطفال على اكتشاف قدراتهم، وتعلم
                مهارات عملية جديدة، وتحويل أفكارهم إلى مشروعات حقيقية.
              </p>
            </div>
          </div>
        </section>

        {/* goals */}
        <section className="bg-white px-4 py-24 md:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHead tag="أهدافنا" title="ماذا نريد أن نحققه مع كل طفل؟" />

            <div
              data-goals-grid
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
            >
              {goals.map((goal) => (
                <div
                  data-goal-card
                  key={goal.title}
                  className="group rounded-3xl border border-[#16A6A0]/15 bg-[#FBFFFE] p-8 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#E4F6F3] text-2xl transition-transform duration-200 group-hover:scale-110">
                    {goal.icon}
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-[#596683]">
                    {goal.title}
                  </h3>
                  <p className="mt-3 text-base leading-8 text-[#596683]">
                    {goal.disc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───── القيم ───── */}
        <section className="px-5 py-20">
          <div className="mx-auto max-w-6xl">
            <SectionHead title="ما نؤمن به" />
            <div
              data-values-grid
              className="grid grid-cols-2 gap-4 md:grid-cols-3"
            >
              {values.map((value) => (
                <div
                  key={value.t}
                  data-value-card
                  className="rounded-3xl p-6 text-center transition-transform duration-200 hover:-translate-y-1"
                  style={{ background: value.bg }}
                >
                  <div className="text-4xl">{value.icon}</div>
                  <h3 className="mt-3 font-bold text-[#596683]">{value.t}</h3>
                  <div
                    className="mx-auto mt-3 h-1 w-10 rounded-full"
                    style={{ background: value.c }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───── فريق التدريب ───── */}
        <section className="bg-[#596683] px-5 py-20 text-white">
          <div className="mx-auto max-w-6xl">
            <SectionHead title="المدربون" />
            <div
              data-team-grid
              className="grid grid-cols-2 gap-5 md:grid-cols-4"
            >
              {team.map((m) => (
                <div
                  key={m.name}
                  data-team-card
                  className="rounded-3xl bg-[#FBFAFF] p-6 text-center ring-1 ring-black/5"
                >
                  <div
                    className="mx-auto grid h-20 w-20 place-items-center rounded-full text-3xl font-extrabold text-white"
                    style={{ background: m.c }}
                  />
                  <h3 className="mt-4 font-bold text-[#596683]">{m.name}</h3>
                  <p className="mt-1 text-sm text-[#596683]">{m.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Question */}
        <section id="faq" className="bg-white px-5 py-20">
          <div className="mx-auto max-w-3xl">
            <SectionHead tag="FAQ" title="الأسئلة الأكثر شيوعاً" />
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <div key={f.q} data-faq-item>
                  <FaqItem
                    {...f}
                    open={openFaq === i}
                    onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-20">
          <div
            data-cta
            className="mx-auto max-w-5xl rounded-[2.5rem] bg-gradient-to-br from-[#596683] to-[#596683] p-10 text-center text-white md:p-14"
          >
            <h2 className="text-3xl font-extrabold md:text-4xl">
              جاهز لأول خطوة؟
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-9 text-white/85">
              ابدأ باختبار تحديد مستوى بسيط، ونحدد لطفلك المسار المناسب له.
            </p>
            <button
              type="button"
              onClick={onOpenPlacementQuiz}
              className="mt-8 inline-block cursor-pointer rounded-full bg-[#F5BD35] px-8 py-3.5 font-bold text-[#596683] shadow-lg transition hover:-translate-y-0.5"
            >
              ابدأ اختبار تحديد المستوى
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}