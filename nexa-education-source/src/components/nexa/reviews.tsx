import { Quote, Star } from "lucide-react";
import { testimonials, type Testimonial } from "@/data/testimonials";
import { useI18n } from "@/lib/i18n";

function ReviewCard({ t, dir }: { t: Testimonial; dir: "rtl" | "ltr" }) {
  return (
    <figure
      dir={dir}
      className="nx-card flex w-[320px] shrink-0 flex-col gap-3 p-4"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="grid h-9 w-9 place-items-center rounded-full bg-[image:var(--gradient-brand)] text-[13px] font-bold text-primary-foreground">
            {t.name.charAt(0)}
          </div>
          <div>
            <div className="text-[13px] font-bold leading-tight">{t.name}</div>
            <div className="text-[11px] text-muted-foreground">{t.country}</div>
          </div>
        </div>
        <div className="flex gap-0.5 text-primary">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-3 w-3 fill-current" />
          ))}
        </div>
      </div>
      <blockquote className="relative text-[12.5px] leading-6 text-muted-foreground">
        <Quote className="mb-1 h-3.5 w-3.5 text-primary/50" />
        {t.quote}
      </blockquote>
      <figcaption dir="ltr" className="mt-auto truncate text-[11px] font-semibold text-primary ltr:text-left rtl:text-right">
        {t.uni}
      </figcaption>
    </figure>
  );
}

export function Reviews() {
  const { t, dir } = useI18n();
  const half = Math.ceil(testimonials.length / 2);
  const rowA = testimonials.slice(0, half);
  const rowB = testimonials.slice(half);

  return (
    <section id="reviews" className="border-b border-border bg-surface py-14">
      <div dir={dir} className="mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-[24px] font-extrabold md:text-[32px]">{t("rev.title")}</h2>
            <p className="mt-1 text-[13px] text-muted-foreground">
              {t("rev.more")} {testimonials.length} — {t("rev.desc")}
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-[12px] font-bold">
            <Star className="h-4 w-4 fill-primary text-primary" />
            {t("rev.rating")}
          </div>
        </div>
      </div>

      <div className="nx-marquee-wrap nx-mask-x mt-8 space-y-4 overflow-hidden">
        <div className="nx-marquee-track" style={{ ["--nx-speed" as string]: "140s" }}>
          {[0, 1].map((g) => (
            <div key={g} className="nx-marquee-group" aria-hidden={g === 1}>
              {rowA.map((item, i) => (
                <ReviewCard key={`a-${g}-${item.name}-${i}`} t={item} dir={dir} />
              ))}
            </div>
          ))}
        </div>
        <div className="nx-marquee-track-rev" style={{ ["--nx-speed" as string]: "165s" }}>
          {[0, 1].map((g) => (
            <div key={g} className="nx-marquee-group" aria-hidden={g === 1}>
              {rowB.map((item, i) => (
                <ReviewCard key={`b-${g}-${item.name}-${i}`} t={item} dir={dir} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
