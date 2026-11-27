import { useState } from "react";
import about1 from "../assets/about/about-1.jpg";
import about2 from "../assets/about/about-2.jpg";

// ───────────── عدّل هذه البيانات فقط ─────────────
const WHATSAPP = "https://wa.me/20XXXXXXXXXX"; // ضع رقم الواتساب بصيغة دولية

const stats = [
  { n: "250+", l: "طالب تم تدريبهم" },
  { n: "30", l: "طالب نشط حالياً" },
  { n: "200+", l: "ولي أمر في مجتمعنا" },
  { n: "3", l: "الأقصر • قنا • أونلاين" },
];

const goals = [
  { t: "اكتشاف القدرات", d: "نساعد الطفل على اكتشاف اهتماماته وقدراته في التكنولوجيا." },
  { t: "تعلم بالتجربة", d: "البرمجة والروبوتات والإلكترونيات من خلال تطبيق عملي لا حفظ نظري." },
  { t: "مشروعات حقيقية", d: "نحوّل أفكار الأطفال إلى مشروعات يصنعونها بأيديهم." },
  { t: "ثقة أولياء الأمور", d: "نعرض النتائج والمشروعات الفعلية ليرى ولي الأمر أثر التعلم." },
  { t: "تحديات ومسابقات", d: "نؤهل المتميزين للمشاركة في مسابقات محلية ودولية." },
  { t: "في كل مكان", d: "تدريب أوفلاين في الأقصر وقنا، وأونلاين لأي طفل من أي مكان." },
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

// اكتب الآراء الحقيقية هنا (group: "trainers" أو "students")
const reviews = [
  { group: "trainers", name: "اسم المدرب", role: "مدرب", text: "اكتب هنا رأي المدرب في تجربة التدريس داخل الأكاديمية." },
  { group: "trainers", name: "اسم المدربة", role: "مدربة", text: "اكتب هنا رأي المدربة في تجربة التدريس داخل الأكاديمية." },
  { group: "students", name: "اسم الدارس", role: "طالب", text: "اكتب هنا رأي الدارس في تجربته مع الأكاديمية." },
  { group: "students", name: "اسم الدارسة", role: "طالبة", text: "اكتب هنا رأي الدارسة في تجربتها مع الأكاديمية." },
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

// ───────────── مكونات صغيرة ─────────────
function SectionHead({ tag, title, sub, tint = "#F1EBFA", color = "#7957C8" }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <span
        className="inline-block rounded-full px-4 py-1.5 text-sm font-bold"
        style={{ background: tint, color }}
      >
        {tag}
      </span>
      <h2 className="mt-4 font-['Sora','Alexandria'] text-3xl font-extrabold text-[#2b3447] md:text-4xl">
        {title}
      </h2>
      {sub && <p className="mt-3 leading-8 text-[#596683]">{sub}</p>}
    </div>
  );
}

function FaqItem({ q, a, open, onToggle }) {
  return (
    <div className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
      <button
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

// ───────────── الصفحة ─────────────
export default function About() {
  const [openFaq, setOpenFaq] = useState(0);
  const [tab, setTab] = useState("students");
  const shown = reviews.filter((r) => r.group === tab);

  return (
    <main dir="rtl" className="overflow-hidden bg-[#FBFAFF] font-['Alexandria',sans-serif] text-[#2b3447]">
      {/* ───── Hero ───── */}
      <section className="relative px-5 pb-20 pt-36 md:pt-44">
        <div className="pointer-events-none absolute -top-20 start-[-6rem] h-72 w-72 rounded-full bg-[#F5BD35]/25 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 end-[-5rem] h-72 w-72 rounded-full bg-[#7957C8]/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-[#FFF5D9] px-4 py-1.5 text-sm font-bold text-[#b98507]">
              من نحن
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.4] md:text-5xl">
              نحوّل الطفل من مستخدم للتكنولوجيا إلى{" "}
              <span className="text-[#7957C8]">صانع</span> لها
            </h1>
            <p className="mt-6 max-w-xl leading-9 text-[#596683]">
              Bee Academy أكاديمية لتعليم البرمجة والروبوتات والإلكترونيات والذكاء الاصطناعي
              للأطفال والناشئين. نؤمن بالتعلم بالتجربة، فكل طفل عندنا ينفذ مشروعه بنفسه
              ويخرج بشيء حقيقي صنعه بيده.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WHATSAPP}
                className="rounded-full bg-[#F47B35] px-7 py-3 font-bold text-white shadow-lg shadow-[#F47B35]/30 transition hover:-translate-y-0.5"
              >
                تواصل معنا على واتساب
              </a>
              <a
                href="#faq"
                className="rounded-full bg-white px-7 py-3 font-bold text-[#7957C8] ring-1 ring-[#7957C8]/20 transition hover:bg-[#F1EBFA]"
              >
                الأسئلة الشائعة
              </a>
            </div>
          </div>

          <div className="relative mx-auto flex max-w-md gap-4">
            <img
              src={about1}
              alt="طلاب Bee Academy مع شهادات المشاركة"
              className="mt-10 h-80 w-1/2 rotate-[-3deg] rounded-[2rem] object-cover shadow-xl ring-4 ring-white md:h-96"
            />
            <img
              src={about2}
              alt="طلاب Bee Academy في مسابقة تقنية"
              className="h-80 w-1/2 rotate-[3deg] rounded-[2rem] object-cover shadow-xl ring-4 ring-white md:h-96"
            />
            <span className="absolute -bottom-4 start-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#7957C8] px-5 py-2 text-sm font-bold text-white shadow-lg rtl:translate-x-1/2">
              🏆 طلابنا في المسابقات
            </span>
          </div>
        </div>

        {/* الأرقام */}
        <div className="relative mx-auto mt-20 grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l} className="rounded-3xl bg-white p-6 text-center shadow-sm ring-1 ring-black/5">
              <div className="font-['Sora'] text-4xl font-extrabold text-[#7957C8]">{s.n}</div>
              <div className="mt-2 text-sm text-[#596683]">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ───── القصة ───── */}
      <section className="bg-white px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <SectionHead tag="قصتنا" title="بدأت بفكرة وثقة أولياء أمور" tint="#FFF0E6" color="#F47B35" />
          <div className="space-y-5 leading-9 text-[#596683]">
            <p>
              بدأت الفكرة مع المهندس يوسف عبد الحميد، خريج هندسة اتصالات، بعد سنوات من العمل والتدريس
              داخل عدد من الأكاديميات. وحين طلب منه بعض أولياء الأمور أن يواصل تعليم أطفالهم لارتباطهم
              بطريقته في الشرح، قرر أن يبدأ مشروعه الخاص.
            </p>
            <p>
              ساعده أولياء الأمور في الترويج للخطوة الأولى، ومن هناك بدأت Bee Academy في الأقصر،
              وتوسعت بالتعاون مع مركز Knowlera في قنا، وبعض البرامج أونلاين.
            </p>
            <p className="rounded-2xl bg-[#F1EBFA] p-5 font-bold text-[#5b3fa3]">
              فلسفتنا: لا نقدم معلومات نظرية فقط، بل نتعلم بالتجربة والتطبيق وننفذ مشروعات حقيقية.
            </p>
          </div>
        </div>
      </section>

      {/* ───── الرؤية والرسالة ───── */}
      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] bg-[#EAF3FC] p-8">
            <div className="text-4xl">🔭</div>
            <h3 className="mt-4 text-2xl font-extrabold text-[#2f6cb0]">رؤيتنا</h3>
            <p className="mt-3 leading-9 text-[#3f5370]">
              أن يكبر كل طفل وهو يرى التكنولوجيا مجالاً يستطيع أن يبدع ويبتكر فيه، لا مجرد شاشة
              يستخدمها.
            </p>
          </div>
          <div className="rounded-[2rem] bg-[#FFF5D9] p-8">
            <div className="text-4xl">🎯</div>
            <h3 className="mt-4 text-2xl font-extrabold text-[#b98507]">رسالتنا</h3>
            <p className="mt-3 leading-9 text-[#6b5a2a]">
              توفير بيئة تعليمية تساعد الأطفال على اكتشاف قدراتهم، وتعلم مهارات عملية جديدة،
              وتحويل أفكارهم إلى مشروعات حقيقية.
            </p>
          </div>
        </div>
      </section>

      {/* ───── الأهداف ───── */}
      <section className="bg-white px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHead
            tag="أهدافنا"
            title="ماذا نريد أن نحققه مع كل طفل؟"
            tint="#E4F6F3"
            color="#16A6A0"
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {goals.map((g, i) => (
              <div
                key={g.t}
                className="group rounded-3xl border border-[#16A6A0]/15 bg-[#FBFFFE] p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#E4F6F3] font-['Sora'] font-extrabold text-[#16A6A0]">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-lg font-bold">{g.t}</h3>
                <p className="mt-2 text-sm leading-8 text-[#596683]">{g.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── القيم ───── */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHead tag="قيمنا" title="ما نؤمن به" tint="#ECEEFC" color="#5966C9" />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.t}
                className="rounded-3xl p-6 text-center transition hover:-translate-y-1"
                style={{ background: v.bg }}
              >
                <div className="text-4xl">{v.icon}</div>
                <h3 className="mt-3 font-bold" style={{ color: "#2b3447" }}>
                  {v.t}
                </h3>
                <div className="mx-auto mt-3 h-1 w-10 rounded-full" style={{ background: v.c }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── فريق التدريب ───── */}
      <section className="bg-white px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHead tag="فريقنا" title="المدربون" sub="فريق قريب من الأطفال ويحب التجربة." />
          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
            {team.map((m) => (
              <div key={m.name} className="rounded-3xl bg-[#FBFAFF] p-6 text-center ring-1 ring-black/5">
                <div
                  className="mx-auto grid h-20 w-20 place-items-center rounded-full text-3xl font-extrabold text-white"
                  style={{ background: m.c }}
                >
                  {m.name.replace("م. ", "").charAt(0)}
                </div>
                <h3 className="mt-4 font-bold">{m.name}</h3>
                <p className="mt-1 text-sm text-[#596683]">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── الآراء ───── */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHead tag="آراء" title="ماذا يقول المدربون والدارسون؟" tint="#FFF5D9" color="#b98507" />

          <div className="mx-auto mb-8 flex w-fit rounded-full bg-white p-1 shadow-sm ring-1 ring-black/5">
            {[
              ["students", "الدارسون"],
              ["trainers", "المدربون"],
            ].map(([key, label]) => (
              <button
                key={key}
                onClick={() => setTab(key)}
                className={`rounded-full px-6 py-2 text-sm font-bold transition ${
                  tab === key ? "bg-[#7957C8] text-white" : "text-[#596683]"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {shown.map((r) => (
              <figure key={r.name} className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-black/5">
                <div className="font-['Sora'] text-5xl leading-none text-[#F5BD35]">“</div>
                <blockquote className="mt-2 leading-9 text-[#3f4a61]">{r.text}</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[#F1EBFA] font-bold text-[#7957C8]">
                    {r.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-sm font-bold">{r.name}</span>
                    <span className="block text-xs text-[#596683]">{r.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ───── الأسئلة الشائعة ───── */}
      <section id="faq" className="bg-white px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <SectionHead tag="FAQ" title="الأسئلة الأكثر شيوعاً" />
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <FaqItem
                key={f.q}
                {...f}
                open={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ───── CTA ───── */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-gradient-to-br from-[#7957C8] to-[#5966C9] p-10 text-center text-white md:p-14">
          <h2 className="text-3xl font-extrabold md:text-4xl">جاهز لأول خطوة؟</h2>
          <p className="mx-auto mt-4 max-w-xl leading-9 text-white/85">
            ابدأ باختبار تحديد مستوى بسيط، ونحدد لطفلك المسار المناسب له.
          </p>
          <a
            href={WHATSAPP}
            className="mt-8 inline-block rounded-full bg-[#F5BD35] px-8 py-3.5 font-bold text-[#2b3447] shadow-lg transition hover:-translate-y-0.5"
          >
            احجز اختبار تحديد المستوى
          </a>
        </div>
      </section>
    </main>
  );
}
