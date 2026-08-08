import { useState } from "react";
import { MapPin, Phone, Clock, Building2, Navigation } from "lucide-react";
import { site, waLink } from "@/lib/site";
import { useI18n } from "@/lib/i18n";

const TURKEY_PATH =
  "M998.9,265.1 L973.3,274.1 L954.6,260.5 L892.5,253.7 L869.6,261.9 L809.0,270.2 L780.2,269.3 L718.9,289.3 L675.0,289.5 L646.6,279.5 L587.9,294.3 L570.4,283.9 L567.6,313.7 L553.3,325.4 L539.0,337.1 L519.4,312.9 L539.6,292.8 L507.1,297.4 L462.4,285.1 L425.8,315.8 L344.8,321.8 L301.7,293.2 L244.2,291.4 L231.9,313.5 L195.0,319.8 L143.4,291.4 L85.2,292.4 L53.6,239.4 L14.7,209.8 L40.6,168.3 L6.8,142.8 L66.0,91.8 L148.1,89.7 L170.5,49.1 L272.1,56.2 L336.2,21.6 L398.4,6.5 L486.6,5.4 L579.7,43.0 L656.2,63.6 L718.3,55.4 L764.2,60.1 L827.2,32.3 L884.0,29.8 L935.4,56.0 L944.5,74.7 L939.3,100.7 L979.0,113.9 L1000.0,129.5 L963.5,144.7 L980.1,205.9 L969.7,222.4 L998.9,265.1Z M3.9,16.8 L58.3,0.0 L104.2,7.2 L110.5,27.7 L157.1,44.9 L147.4,57.9 L84.0,60.9 L61.3,77.4 L16.8,106.1 L0.0,81.3 L0.7,70.3 L13.4,64.3 L29.9,30.9 L3.9,16.8Z";

const CYPRUS_PATH =
  "M356.7,373.4 L366.7,376.2 L381.2,371.6 L391.5,372.2 L395.3,375.5 L396.4,380.8 L399.0,378.8 L407.0,379.9 L417.2,375.9 L422.9,377.7 L424.6,382.0 L369.9,403.7 L343.8,396.8 L331.4,375.4 L356.7,373.4Z";

interface City {
  key: string;
  count: number;
  x: number;
  y: number;
  side: "start" | "end";
}

const cities: City[] = [
  { key: "istanbul", count: 39, x: 156.7, y: 60.3, side: "start" },
  { key: "ankara", count: 8, x: 363.6, y: 118.0, side: "start" },
  { key: "izmir", count: 3, x: 58.5, y: 198.6, side: "start" },
  { key: "antalya", count: 2, x: 248.9, y: 279.6, side: "start" },
  { key: "cyprus", count: 15, x: 390.3, y: 370.8, side: "end" },
];

export function MapSection() {
  const { t, dir } = useI18n();
  const [activeCity, setActiveCity] = useState<string>("istanbul");
  const active = cities.find((c) => c.key === activeCity) ?? cities[0]!;

  return (
    <section id="map" dir={dir} className="border-b border-border bg-background py-14">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="grid items-start gap-8 lg:grid-cols-[1fr_1.15fr]">
          <div className="space-y-5">
            <h2 className="text-[24px] font-extrabold md:text-[32px]">{t("map.title")}</h2>
            <p className="text-[14px] leading-8 text-muted-foreground">{t("map.desc")}</p>

            <ul className="grid gap-3 sm:grid-cols-2">
              {cities.map((c) => (
                <li key={c.key}>
                  <button
                    type="button"
                    onMouseEnter={() => setActiveCity(c.key)}
                    onFocus={() => setActiveCity(c.key)}
                    onClick={() => setActiveCity(c.key)}
                    className={`nx-card flex w-full items-center justify-between p-3 text-[13px] ${
                      activeCity === c.key ? "border-primary/60 shadow-[var(--shadow-float)]" : ""
                    }`}
                  >
                    <span className="flex items-center gap-2 font-bold">
                      <MapPin className="h-4 w-4 text-primary" />
                      {t(`city.${c.key}`)}
                    </span>
                    <span className="rounded-full bg-accent px-2.5 py-1 text-[11px] font-bold text-accent-foreground">
                      {c.count} {t("uni.count")}
                    </span>
                  </button>
                </li>
              ))}
            </ul>

            <div className="nx-card space-y-2 p-4 text-[13px]">
              <div className="flex items-center gap-2 font-bold">
                <Building2 className="h-4 w-4 text-primary" /> {t("map.office")}
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" /> {site.address}
              </div>
              <a href={`tel:${site.phone}`} className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary">
                <Phone className="h-4 w-4" /> <span dir="ltr">{site.phone}</span>
              </a>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4" /> {t("map.hours")}
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                <a
                  href={waLink(t("map.office"))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full bg-primary px-4 py-2 text-[12px] font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  {t("map.book")}
                </a>
                <a
                  href={site.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-[12px] font-bold transition-colors hover:border-primary hover:text-primary"
                >
                  <Navigation className="h-3.5 w-3.5" />
                  {t("map.directions")}
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-[28px] border border-border bg-surface p-4 shadow-[var(--shadow-soft)]">
              <div className="relative w-full overflow-hidden rounded-2xl bg-[image:var(--gradient-surface)] p-2">
                <div className="pointer-events-none absolute inset-0 opacity-[0.45] [background-image:linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [background-size:36px_36px]" />
                <svg viewBox="0 0 1000 420" className="relative w-full" role="img" aria-label="خريطة تركيا وقبرص الشمالية">
                  <defs>
                    <linearGradient id="nx-land" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.22" />
                      <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.06" />
                    </linearGradient>
                  </defs>

                  <path d={TURKEY_PATH} fill="url(#nx-land)" stroke="var(--primary)" strokeWidth="2" strokeLinejoin="round" className="nx-map-draw" />
                  <path d={CYPRUS_PATH} fill="url(#nx-land)" stroke="var(--primary)" strokeWidth="1.5" strokeLinejoin="round" />

                  {cities.map((c) => {
                    const on = c.key === activeCity;
                    return (
                      <g
                        key={c.key}
                        className="cursor-pointer"
                        onMouseEnter={() => setActiveCity(c.key)}
                        onClick={() => setActiveCity(c.key)}
                      >
                        {on && (
                          <circle cx={c.x} cy={c.y} r="10" fill="var(--primary)" opacity="0.25">
                            <animate attributeName="r" values="10;26;10" dur="2.2s" repeatCount="indefinite" />
                            <animate attributeName="opacity" values="0.3;0;0.3" dur="2.2s" repeatCount="indefinite" />
                          </circle>
                        )}
                        <circle cx={c.x} cy={c.y} r={on ? 9 : 6} fill="var(--primary)" stroke="var(--background)" strokeWidth="2.5" />
                        <text
                          x={c.side === "end" ? c.x + 16 : c.x - 16}
                          y={c.y + 5}
                          textAnchor={c.side === "end" ? "start" : "end"}
                          fontSize={on ? 18 : 15}
                          fontWeight="700"
                          fill="var(--foreground)"
                        >
                          {t(`city.${c.key}`)} · {c.count}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>

              <div className="mt-3 flex items-center justify-between gap-3 rounded-2xl border border-border bg-card px-4 py-3">
                <div>
                  <div className="text-[13px] font-extrabold">{t(`city.${active.key}`)}</div>
                  <div className="text-[11px] text-muted-foreground">{t(`city.${active.key}.note`)}</div>
                </div>
                <span className="rounded-full bg-[image:var(--gradient-brand)] px-3 py-1.5 text-[11px] font-bold text-primary-foreground">
                  {active.count} {t("uni.count")}
                </span>
              </div>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-border bg-card shadow-[var(--shadow-soft)]">
              <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3">
                <div className="flex items-center gap-2 text-[13px] font-bold">
                  <Building2 className="h-4 w-4 text-primary" /> {t("map.officeLoc")}
                </div>
                <a
                  href={site.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold text-primary hover:underline"
                >
                  {t("map.openMaps")}
                </a>
              </div>
              <iframe
                title={t("map.officeLoc")}
                src="https://www.google.com/maps?q=Concepta%20Plaza%20Esenyurt%20Istanbul&output=embed&hl=ar"
                className="h-[300px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
