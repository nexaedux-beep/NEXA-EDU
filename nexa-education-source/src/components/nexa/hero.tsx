import { useEffect, useState } from "react";
import { ArrowLeft, GraduationCap, Sparkles } from "lucide-react";
import campus1 from "@/assets/campus-1.jpg";
import campus2 from "@/assets/campus-2.jpg";
import campus3 from "@/assets/campus-3.jpg";
import logoStacked from "@/assets/nexa-logo-stacked.png.png";
import { site, waLink } from "@/lib/site";
import { universities } from "@/data/universities";
import { useCountUp, useInView } from "@/lib/use-reveal";
import { useI18n } from "@/lib/i18n";

const slides = [
  { src: campus1, title: "Bahçeşehir University" },
  { src: campus2, title: "Koç University" },
  { src: campus3, title: "Near East University" },
];

function Stat({ target, label, suffix, run }: { target: number; label: string; suffix?: string; run: boolean }) {
  const value = useCountUp(target, run);
  return (
    <div className="rounded-2xl border border-white/20 bg-white/10 p-4 text-center backdrop-blur-md transition-transform duration-500 hover:-translate-y-1 hover:border-white/40">
      <div dir="ltr" className="text-[30px] font-extrabold leading-none text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.5)] md:text-[42px]">
        {suffix}
        {value.toLocaleString("en-US")}
      </div>
      <div className="mt-2 text-[12px] font-semibold text-white/75 md:text-[13px]">{label}</div>
    </div>
  );
}

export function Hero() {
  const { t, dir } = useI18n();
  const [active, setActive] = useState(0);
  const { ref, inView } = useInView<HTMLDivElement>(0.3);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % slides.length), 4200);
    return () => clearInterval(id);
  }, []);

  return (
    <section dir={dir} className="relative overflow-hidden border-b border-border">
      {/* Background slideshow */}
      <div className="absolute inset-0">
        {slides.map((s, i) => (
          <img
            key={s.title}
            src={s.src}
            alt={s.title}
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1400ms] ease-out ${
              i === active ? "scale-105 opacity-100" : "scale-100 opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/80" />
        <div className="nx-drift absolute -top-32 -right-24 h-[460px] w-[460px] rounded-full bg-primary/25 blur-3xl" />
        <div
          className="nx-drift absolute -bottom-40 -left-32 h-[520px] w-[520px] rounded-full bg-primary/15 blur-3xl"
          style={{ animationDelay: "-6s" }}
        />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-4 py-16 md:px-8 md:py-28">
        <div className="nx-rise mx-auto max-w-[900px] space-y-6 text-center">
          <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[12px] text-white backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="nx-ping-ring absolute inline-flex h-2 w-2 rounded-full bg-[var(--success)]" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--success)]" />
            </span>
            {t("hero.badge")}
          </span>

          <h1 className="text-[36px] font-extrabold leading-[1.12] tracking-tight text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.55)] md:text-[60px]">
            {t("hero.title1")} <span className="nx-gradient-text">{t("hero.title2")}</span>
            <br /> {t("hero.title3")}
          </h1>

          <p className="mx-auto max-w-[680px] text-[15px] leading-8 text-white/85 md:text-[17px]">{t("hero.desc")}</p>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="#universities"
              className="nx-btn inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-[var(--shadow-float)]"
            >
              <GraduationCap className="h-4 w-4" />
              {t("hero.cta1")} · {universities.length}
            </a>
            <a
              href={waLink(t("hero.cta2"))}
              target="_blank"
              rel="noopener noreferrer"
              className="nx-btn inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-md hover:border-white"
            >
              {t("hero.cta2")}
              <span dir="ltr" className="text-white/80">{site.phone}</span>
            </a>
          </div>

          <div ref={ref} className="mx-auto grid max-w-[880px] grid-cols-2 gap-3 pt-4 sm:grid-cols-4 md:gap-4">
            <Stat target={8750} label={t("stat.students")} suffix="+" run={inView} />
            <Stat target={universities.length} label={t("stat.universities")} suffix="+" run={inView} />
            <Stat target={20} label={t("stat.countries")} suffix="+" run={inView} />
            <Stat target={2020} label={t("stat.since")} run={inView} />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <div className="flex gap-1.5">
              {slides.map((s, i) => (
                <button
                  key={s.title}
                  type="button"
                  aria-label={`${t("hero.slide")} ${i + 1}`}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full bg-white/50 transition-all ${i === active ? "w-7 bg-white" : "w-2"}`}
                />
              ))}
            </div>
            <div className="text-[11px] text-white/70">
              {slides[active]?.title} · {t("hero.captions")}
            </div>
          </div>
        </div>


        <div className="nx-float mt-10 flex w-fit items-center gap-3 rounded-2xl border border-white/20 bg-white/10 p-3 backdrop-blur-md md:absolute md:bottom-10 md:right-8 md:mt-0">
          <img src={logoStacked} alt={site.name} width={38} height={43} className="h-11 w-auto object-contain" loading="lazy" />
          <div>
            <div className="text-[12px] font-bold text-white">{site.name}</div>
            <div className="text-[10px] text-white/70">{site.address}</div>
          </div>
          <Sparkles className="h-4 w-4 text-primary" />
        </div>
      </div>

      <a
        href="#universities"
        className="relative mx-auto mb-8 flex w-fit items-center gap-2 text-[12px] text-white/75 transition-colors hover:text-white"
      >
        <ArrowLeft className="h-3.5 w-3.5 -rotate-90" />
        {t("hero.scroll")}
      </a>
    </section>
  );
}
