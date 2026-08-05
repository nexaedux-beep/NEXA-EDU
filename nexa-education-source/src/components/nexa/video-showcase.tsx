import { useEffect, useState } from "react";
import { Play } from "lucide-react";
import campus1 from "@/assets/campus-1.jpg";
import campus2 from "@/assets/campus-2.jpg";
import campus3 from "@/assets/campus-3.jpg";
import istanbul1 from "@/assets/istanbul-1.jpg";
import istanbul2 from "@/assets/istanbul-2.jpg";
import logoStacked from "@/assets/nexa-logo-stacked.png.png";
import { useI18n } from "@/lib/i18n";

const frames = [istanbul1, campus1, istanbul2, campus2, campus3];

export function VideoShowcase() {
  const { t, dir } = useI18n();
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % frames.length), 3600);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="showcase" dir={dir} className="border-b border-border bg-background py-14">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-[11px] font-bold text-primary">
            <Play className="h-3.5 w-3.5" />
            {t("video.badge")}
          </span>
          <h2 className="mt-3 text-[24px] font-extrabold md:text-[32px]">{t("video.title")}</h2>
          <p className="mx-auto mt-2 max-w-[640px] text-[13px] leading-7 text-muted-foreground">{t("video.desc")}</p>
        </div>

        <div className="nx-card relative mt-9 aspect-[16/8] w-full overflow-hidden rounded-[28px]">
          {frames.map((src, i) => (
            <img
              key={src}
              src={src}
              alt=""
              width={1600}
              height={912}
              loading="lazy"
              className={`absolute inset-0 h-full w-full object-cover transition-all duration-[2200ms] ease-out ${
                i === active ? "scale-110 opacity-100" : "scale-100 opacity-0"
              }`}
            />
          ))}

          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/25" />
          <div className="nx-drift absolute -top-24 -right-16 h-[360px] w-[360px] rounded-full bg-primary/25 blur-3xl" />

          <div className="absolute inset-0 grid place-items-center">
            <div className="nx-float flex flex-col items-center gap-3 rounded-3xl border border-white/20 bg-white/10 px-8 py-6 text-center backdrop-blur-md">
              <img src={logoStacked} alt="NEXA Education" width={64} height={72} className="nx-logo h-16 w-auto object-contain" loading="lazy" />
              <div className="text-[13px] font-extrabold tracking-wide text-white">NEXA EDUCATION</div>
              <div className="text-[11px] text-white/75">{t("video.caption")}</div>
            </div>
          </div>

          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
            {frames.map((src, i) => (
              <span
                key={src}
                className={`h-1.5 rounded-full transition-all duration-500 ${i === active ? "w-8 bg-white" : "w-2 bg-white/50"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
