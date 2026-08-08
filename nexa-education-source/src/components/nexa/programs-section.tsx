import { useCallback, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { GraduationCap, ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { programs } from "@/data/programs";
import { useI18n } from "@/lib/i18n";
import { ProgramCard } from "./program-card";

export function ProgramsSection() {
  const { t, dir } = useI18n();
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = useCallback((sign: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const step = 302 * 2;
    el.scrollBy({ left: sign * step, behavior: "smooth" });
  }, []);

  return (
    <section id="programs" className="border-b border-border bg-surface py-14">
      <div dir={dir} className="mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div className="min-w-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-[11px] font-bold text-primary">
              <GraduationCap className="h-3.5 w-3.5" />
              {t("prog.title")}
            </span>
            <h2 className="mt-3 text-[24px] font-extrabold md:text-[32px]">{t("prog.title")}</h2>
            <p className="mt-2 max-w-[640px] text-[13px] leading-7 text-muted-foreground">{t("prog.desc")}</p>
          </div>

          <div className="flex shrink-0 items-center gap-2 self-start md:self-end">
            <button
              type="button"
              aria-label={t("prog.prev")}
              onClick={() => scrollBy(dir === "rtl" ? 1 : -1)}
              className="nx-press grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label={t("prog.next")}
              onClick={() => scrollBy(dir === "rtl" ? -1 : 1)}
              className="nx-press grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <Link
              to="/programs"
              className="nx-btn inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-[13px] font-bold text-primary-foreground"
            >
              {t("prog.all")}
              <Arrow className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      <div dir={dir} className="nx-mask-x mt-9">
        <div
          ref={trackRef}
          className="nx-scroll-x flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-3 md:px-8"
        >
          {programs.map((p) => (
            <div key={p.slug} className="snap-start">
              <ProgramCard program={p} width={286} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
