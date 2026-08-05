import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Clock, Languages } from "lucide-react";
import type { Program } from "@/data/programs";
import { useI18n } from "@/lib/i18n";

export function ProgramCard({ program, width }: { program: Program; width?: number }) {
  const { lang, t } = useI18n();

  return (
    <Link
      to="/programs/$slug"
      params={{ slug: program.slug }}
      className="nx-card group relative flex flex-col overflow-hidden text-start"
      style={width ? { width } : undefined}
    >
      <div className="relative h-[150px] w-full overflow-hidden">
        <img
          src={program.image}
          alt={program.name[lang]}
          width={1200}
          height={800}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/25 to-transparent" />
        <span className="absolute top-3 rounded-full bg-primary px-3 py-1 text-[10px] font-bold text-primary-foreground ltr:left-3 rtl:right-3">
          {program.field[lang]}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="text-[15px] font-extrabold leading-snug">{program.name[lang]}</h3>
        <p className="line-clamp-2 text-[12px] leading-6 text-muted-foreground">{program.short[lang]}</p>

        <div className="mt-1 flex flex-wrap items-center gap-3 text-[11px] text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {program.years} {t("prog.year")}
          </span>
          <span className="inline-flex items-center gap-1">
            <Languages className="h-3.5 w-3.5" />
            {program.langs[lang]}
          </span>
        </div>

        <span className="mt-auto inline-flex items-center gap-1 pt-3 text-[12px] font-bold text-primary">
          {t("prog.details")}
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
