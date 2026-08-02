import { useEffect, useState } from "react";
import { ArrowLeft, GraduationCap, Sparkles } from "lucide-react";
import campus1 from "@/assets/campus-1.jpg";
import campus2 from "@/assets/campus-2.jpg";
import campus3 from "@/assets/campus-3.jpg";
import logoStacked from "@/assets/nexa-logo-stacked.png.png";
import { site, waLink } from "@/lib/site";
import { universities } from "@/data/universities";
import { useCountUp, useInView } from "@/lib/use-reveal";

const slides = [
  { src: campus1, title: "Bahçeşehir University — حرم البوسفور" },
  { src: campus2, title: "Koç University — لقطة جوية" },
  { src: campus3, title: "Near East University — الساحة الكبرى" },
];

function Stat({ target, label, suffix, run }: { target: number; label: string; suffix?: string; run: boolean }) {
  const value = useCountUp(target, run);
  return (
    <div className="nx-card p-3 text-center">
      <div className="text-[20px] font-extrabold text-primary md:text-[24px]">
        {suffix}
        {value.toLocaleString("en-US")}
      </div>
      <div className="text-[11px] text-muted-foreground">{label}</div>
    </div>
  );
}

export function Hero() {
  const [active, setActive] = useState(0);
  const { ref, inView } = useInView<HTMLDivElement>(0.3);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % slides.length), 4200);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden border-b border-border bg-[image:var(--gradient-surface)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="nx-drift absolute -top-32 -right-24 h-[460px] w-[460px] rounded-full bg-primary/10 blur-3xl" />
        <div className="nx-drift absolute -bottom-40 -left-32 h-[520px] w-[520px] rounded-full bg-primary/5 blur-3xl" style={{ animationDelay: "-6s" }} />
      </div>

      <div className="relative mx-auto grid max-w-[1280px] items-center gap-10 px-4 py-12 md:grid-cols-[1.15fr_0.85fr] md:px-8 md:py-20">
        <div className="nx-rise space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-[12px] shadow-[var(--shadow-soft)]">
            <span className="relative flex h-2 w-2">
              <span className="nx-ping-ring absolute inline-flex h-2 w-2 rounded-full bg-[var(--success)]" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--success)]" />
            </span>
            التسجيل مفتوح الآن — خصومات حصرية
          </span>

          <h1 className="text-[34px] font-extrabold leading-[1.12] tracking-tight md:text-[54px]">
            ادرس في <span className="nx-gradient-text">أرقى الجامعات</span> الخاصة
            <br /> في تركيا وقبرص
          </h1>

          <p className="max-w-[580px] text-[15px] leading-8 text-muted-foreground md:text-[17px]">
            {universities.length} شراكات استراتيجية مع نخبة الجامعات الخاصة المعتمدة، توفر لك قبولًا موثوقًا، ومنحًا وخصومات حصرية، ودعمًا متكاملًا في كل خطوة من رحلتك الأكاديمية</p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#universities"
              className="nx-shine inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-float)]"
            >
              <GraduationCap className="h-4 w-4" />
              استعرض الجامعات الـ {universities.length}
            </a>
            <a
              href={waLink("المنح والخصومات")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-bold transition-all hover:-translate-y-1 hover:border-primary hover:shadow-[var(--shadow-soft)]"
            >
              احجز استشارتك
              <span dir="ltr" className="text-primary">{site.phone}</span>
            </a>
          </div>

          <div ref={ref} className="grid max-w-[520px] grid-cols-2 gap-3 pt-2 sm:grid-cols-4">
            <Stat target={8200} label="طالب مسجّل" suffix="+" run={inView} />
            <Stat target={universities.length} label="جامعة شريكة" suffix="+" run={inView} />
            <Stat target={20} label="دولة" suffix="+" run={inView} />
            <Stat target={2020} label="نعمل منذ" run={inView} />
          </div>
        </div>

        <div className="relative nx-rise" style={{ animationDelay: "0.15s" }}>
          <div className="relative overflow-hidden rounded-[28px] border border-border bg-card shadow-[var(--shadow-float)]">
            {slides.map((s, i) => (
              <img
                key={s.title}
                src={s.src}
                alt={s.title}
                width={1280}
                height={860}
                className={`h-[340px] w-full object-cover transition-all duration-1000 md:h-[440px] ${
                  i === active ? "opacity-100" : "absolute inset-0 opacity-0"
                }`}
              />
            ))}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-4">
              <div className="text-[13px] font-bold text-white">{slides[active]?.title}</div>
              <div className="text-[11px] text-white/75">صور من الأحرام الجامعية</div>
            </div>
            <div className="absolute left-3 top-3 flex gap-1.5">
              {slides.map((s, i) => (
                <button
                  key={s.title}
                  type="button"
                  aria-label={`الشريحة ${i + 1}`}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full bg-white/60 transition-all ${i === active ? "w-6 bg-white" : "w-2"}`}
                />
              ))}
            </div>
          </div>

          <div className="nx-float absolute -bottom-5 -right-4 flex items-center gap-3 rounded-2xl border border-border bg-card p-3 shadow-[var(--shadow-float)]">
            <img src={logoStacked} alt="شعار نيكسا" width={38} height={43} className="nx-logo h-11 w-auto object-contain" loading="lazy" />

            <div>
              <div className="text-[12px] font-bold">{site.name}</div>
              <div className="text-[10px] text-muted-foreground">{site.address}</div>
            </div>
            <Sparkles className="h-4 w-4 text-primary" />
          </div>
        </div>
      </div>

      <a
        href="#universities"
        className="relative mx-auto mb-8 flex w-fit items-center gap-2 text-[12px] text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="h-3.5 w-3.5 -rotate-90" />
        تابع للأسفل
      </a>
    </section>
  );
}
