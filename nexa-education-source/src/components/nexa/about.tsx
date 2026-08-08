import { Link } from "@tanstack/react-router";
import { ArrowUpRight, BadgeCheck, Eye, HeartHandshake, Languages, Route as RouteIcon, ShieldCheck, Sparkles, Target } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useInView } from "@/lib/use-reveal";
import aboutCampus from "@/assets/about/campus-students.jpg";
import aboutAdvisor from "@/assets/about/advisor.jpg";
import aboutIstanbul from "@/assets/about/istanbul.jpg";




const pillars = [
  { icon: Languages, k: "p1" },
  { icon: BadgeCheck, k: "p2" },
  { icon: HeartHandshake, k: "p3" },
  { icon: RouteIcon, k: "p4" },
] as const;

const vision = [
  { icon: Target, to: "/mission", ar: { t: "رسالتنا", d: "أن نجعل الوصول إلى تعليم جامعي معترف به في تركيا وقبرص الشمالية بسيطاً وآمناً لكل طالب عربي، بلا رسوم ولا وسطاء." }, en: { t: "Our mission", d: "To make recognised university education in Türkiye and Northern Cyprus simple and safe for every student — no fees, no middlemen." } },
  { icon: Eye, to: "/vision", ar: { t: "رؤيتنا", d: "أن نكون المرجع الأول للطلبة الدوليين في المنطقة، بمعايير شفافية ومهنية تُقاس بنجاح طلابنا لا بعدد الطلبات." }, en: { t: "Our vision", d: "To be the first reference for international students in the region, measured by our students' success rather than application counts." } },
  { icon: ShieldCheck, to: "/values", ar: { t: "قيمنا", d: "الصدق في الأرقام، الحياد في الترشيح، الاحترام في التعامل، والمسؤولية حتى بعد وصول الطالب." }, en: { t: "Our values", d: "Honest numbers, neutral recommendations, respectful service, and responsibility that continues after arrival." } },
] as const;

export function About() {
  const { t, lang } = useI18n();
  const { ref, inView } = useInView<HTMLDivElement>(0.15);

  return (
    <section id="about" className="relative overflow-hidden border-b border-border bg-background py-16">
      <div className="nx-grid-bg pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      <div className="pointer-events-none absolute -top-24 left-1/3 h-[380px] w-[380px] rounded-full bg-primary/10 blur-3xl nx-drift" aria-hidden />

      <div ref={ref} className="relative mx-auto grid max-w-[1280px] items-center gap-10 px-4 md:grid-cols-[1fr_1fr] md:px-8">
        <div className={inView ? "nx-fade-up space-y-4" : "opacity-0"}>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-[12px] font-bold shadow-[var(--shadow-soft)]">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {t("about.tag")}
          </span>
          <h2 className="text-[26px] font-extrabold leading-snug md:text-[36px]">
            <span className="nx-sheen-text">{t("about.title")}</span>
          </h2>
          <p className="max-w-[560px] text-[15px] leading-8 text-muted-foreground">{t("about.desc")}</p>




          <Link
            to="/about"
            className="nx-shine inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-float)]"
          >
            {t("about.cta")}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Animated image collage */}
        <div className={`relative ${inView ? "nx-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.12s" }}>
          <div className="relative overflow-hidden rounded-[26px] border border-border shadow-[var(--shadow-float)]">
            <img
              src={aboutCampus}
              alt={lang === "ar" ? "طلاب دوليون في حرم جامعي في تركيا" : "International students on a university campus in Türkiye"}
              loading="lazy"
              width={1280}
              height={960}
              className="h-[300px] w-full object-cover transition-transform duration-[1400ms] ease-out hover:scale-[1.06] md:h-[360px]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          </div>

          <div className="nx-float absolute -bottom-8 start-2 w-[42%] overflow-hidden rounded-[20px] border border-border shadow-[var(--shadow-float)]">
            <img
              src={aboutAdvisor}
              alt={lang === "ar" ? "استشارة تعليمية مجانية مع مرشد نيكسا" : "Free education consultation with a NEXA advisor"}
              loading="lazy"
              width={960}
              height={960}
              className="h-[120px] w-full object-cover md:h-[150px]"
            />
          </div>

          <div className="nx-float absolute -top-7 end-3 hidden w-[34%] overflow-hidden rounded-[18px] border border-border shadow-[var(--shadow-soft)] sm:block" style={{ animationDelay: "-3s" }}>
            <img
              src={aboutIstanbul}
              alt={lang === "ar" ? "إسطنبول وجهة الدراسة في تركيا" : "Istanbul, a top study destination in Türkiye"}
              loading="lazy"
              width={992}
              height={672}
              className="h-[92px] w-full object-cover md:h-[110px]"
            />
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-20 grid max-w-[1280px] gap-4 px-4 sm:grid-cols-2 md:grid-cols-4 md:px-8">
        {pillars.map((p, i) => (
          <article
            key={p.k}
            className={`nx-card nx-tilt p-5 ${inView ? "nx-fade-up" : "opacity-0"}`}
            style={{ animationDelay: `${0.1 + i * 0.09}s` }}
          >
            <div className="mb-3 grid h-11 w-11 place-items-center rounded-2xl bg-[image:var(--gradient-brand)] text-primary-foreground">
              <p.icon className="h-5 w-5" />
            </div>
            <h3 className="text-[15px] font-extrabold">{t(`about.${p.k}.t`)}</h3>
            <p className="mt-1.5 text-[12.5px] leading-6 text-muted-foreground">{t(`about.${p.k}.d`)}</p>
          </article>
        ))}
      </div>


      {/* Merged "Why NEXA" essence: mission, vision, values */}
      <div className="relative mx-auto mt-14 max-w-[1280px] px-4 md:px-8">
        <div className="flex items-center gap-2 text-[12px] font-extrabold text-primary">
          <Sparkles className="h-4 w-4" />
          {lang === "ar" ? "لماذا نيكسا" : "Why NEXA"}
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {vision.map((v, i) => {
            const c = v[lang];
            return (
              <Link
                key={c.t}
                to={v.to}
                className={`nx-card block p-5 transition-all hover:-translate-y-1 hover:border-primary ${inView ? "nx-fade-up" : "opacity-0"}`}
                style={{ animationDelay: `${0.15 + i * 0.08}s` }}
              >
                <div className="mb-3 grid h-11 w-11 place-items-center rounded-2xl bg-[image:var(--gradient-brand)] text-primary-foreground">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="flex items-center gap-1.5 text-[15px] font-extrabold">
                  {c.t}
                  <ArrowUpRight className="h-3.5 w-3.5 text-primary" />
                </h3>
                <p className="mt-1.5 text-[12.5px] leading-6 text-muted-foreground">{c.d}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
