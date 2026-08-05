import { Link } from "@tanstack/react-router";
import { GraduationCap, ArrowLeft, ArrowRight } from "lucide-react";
import { programs } from "@/data/programs";
import { useI18n } from "@/lib/i18n";
import { ProgramCard } from "./program-card";

export function ProgramsSection() {
  const { t, dir } = useI18n();
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;

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

          <Link
            to="/programs"
            className="nx-btn inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-primary px-6 py-3 text-[13px] font-bold text-primary-foreground md:self-end"
          >
            {t("prog.all")}
            <Arrow className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="nx-marquee-wrap nx-mask-x mt-9 overflow-hidden">
        <div className="nx-marquee-track" style={{ ["--nx-speed" as string]: "95s", ["--nx-gap" as string]: "1rem" }}>
          {[0, 1].map((g) => (
            <div key={g} className="nx-marquee-group" aria-hidden={g === 1}>
              {programs.map((p) => (
                <ProgramCard key={`${g}-${p.slug}`} program={p} width={286} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
