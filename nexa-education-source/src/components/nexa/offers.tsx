import { BadgePercent, MessageCircle, Sparkles } from "lucide-react";
import { waLink } from "@/lib/site";
import { useI18n } from "@/lib/i18n";
import { useInView } from "@/lib/use-reveal";

/**
 * Offers section.
 * Add new offers to this array — each item can carry an image (`image`)
 * plus a title/description. Empty array renders the "coming soon" state.
 */
export interface Offer {
  image?: string;
  titleAr: string;
  titleEn: string;
  descAr?: string;
  descEn?: string;
  badge?: string;
}

export const offers: Offer[] = [];

export function Offers() {
  const { t, lang, dir } = useI18n();
  const { ref, inView } = useInView<HTMLDivElement>(0.12);

  return (
    <section id="offers" className="relative overflow-hidden border-b border-border bg-surface py-16">
      <div className="nx-grid-bg pointer-events-none absolute inset-0 opacity-50" aria-hidden />
      <div className="nx-drift pointer-events-none absolute -bottom-32 ltr:-right-24 rtl:-left-24 h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl" aria-hidden />

      <div ref={ref} dir={dir} className="relative mx-auto max-w-[1280px] px-4 md:px-8">
        <div className={inView ? "nx-fade-up max-w-[640px] space-y-4" : "opacity-0"}>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-[12px] font-bold shadow-[var(--shadow-soft)]">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            {t("offers.tag")}
          </span>
          <h2 className="text-[26px] font-extrabold leading-snug md:text-[36px]">
            <span className="nx-sheen-text">{t("offers.title")}</span>
          </h2>
          <p className="text-[15px] leading-8 text-muted-foreground">{t("offers.desc")}</p>
        </div>

        {offers.length > 0 ? (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {offers.map((o, i) => (
              <article
                key={o.titleEn}
                className={`nx-card nx-tilt group overflow-hidden ${inView ? "nx-fade-up" : "opacity-0"}`}
                style={{ animationDelay: `${0.08 * i}s` }}
              >
                {o.image && (
                  <div className="overflow-hidden">
                    <img
                      src={o.image}
                      alt={lang === "ar" ? o.titleAr : o.titleEn}
                      loading="lazy"
                      className="h-[200px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="space-y-2 p-5">
                  {o.badge && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-[11px] font-bold text-accent-foreground">
                      <BadgePercent className="h-3.5 w-3.5" />
                      {o.badge}
                    </span>
                  )}
                  <h3 className="text-[16px] font-extrabold">{lang === "ar" ? o.titleAr : o.titleEn}</h3>
                  <p className="text-[13px] leading-7 text-muted-foreground">
                    {lang === "ar" ? o.descAr : o.descEn}
                  </p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className={`nx-card mt-10 grid place-items-center gap-3 p-12 text-center ${inView ? "nx-fade-up" : "opacity-0"}`}>
            <div className="nx-float grid h-16 w-16 place-items-center rounded-3xl bg-[image:var(--gradient-brand)] text-primary-foreground">
              <BadgePercent className="h-7 w-7" />
            </div>
            <h3 className="text-[17px] font-extrabold">{t("offers.empty.title")}</h3>
            <p className="max-w-[420px] text-[13px] leading-7 text-muted-foreground">{t("offers.empty.desc")}</p>
          </div>
        )}

        <div className="mt-8 flex justify-center">
          <a
            href={waLink(lang === "ar" ? "العروض والخصومات" : "Current offers")}
            target="_blank"
            rel="noopener noreferrer"
            className="nx-btn inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-bold text-primary-foreground shadow-[var(--shadow-soft)]"
          >
            <MessageCircle className="h-4 w-4" />
            {t("offers.cta")}
          </a>
        </div>
      </div>
    </section>
  );
}
