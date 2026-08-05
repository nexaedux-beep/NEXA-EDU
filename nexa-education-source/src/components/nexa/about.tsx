import { Link } from "@tanstack/react-router";
import { ArrowUpRight, BadgeCheck, HeartHandshake, Languages, Route as RouteIcon } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useInView } from "@/lib/use-reveal";

const pillars = [
  { icon: Languages, k: "p1" },
  { icon: BadgeCheck, k: "p2" },
  { icon: HeartHandshake, k: "p3" },
  { icon: RouteIcon, k: "p4" },
] as const;

export function About() {
  const { t } = useI18n();
  const { ref, inView } = useInView<HTMLDivElement>(0.15);

  return (
    <section id="about" className="relative overflow-hidden border-b border-border bg-background py-16">
      <div className="nx-grid-bg pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      <div className="pointer-events-none absolute -top-24 left-1/3 h-[380px] w-[380px] rounded-full bg-primary/10 blur-3xl nx-drift" aria-hidden />

      <div ref={ref} className="relative mx-auto grid max-w-[1280px] items-start gap-10 px-4 md:grid-cols-[0.95fr_1.05fr] md:px-8">
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
            to="/why-nexa"
            className="nx-shine inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-float)]"
          >
            {t("about.cta")}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
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
      </div>
    </section>
  );
}
