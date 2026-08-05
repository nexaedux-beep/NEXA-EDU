import { useMemo, useState } from "react";
import { MapPin, Search, BadgePercent, ArrowUpRight, ChevronDown } from "lucide-react";
import { countByRegion, logoSources, regionTabs, universities, type University } from "@/data/universities";
import { waLink } from "@/lib/site";
import { useI18n } from "@/lib/i18n";

const regionKey: Record<string, string> = {
  All: "uni.all",
  Istanbul: "city.istanbul",
  Ankara: "city.ankara",
  Izmir: "city.izmir",
  Antalya: "city.antalya",
  "Northern Cyprus": "city.cyprus",
};

function Logo({ uni, size = 56 }: { uni: University; size?: number }) {
  const sources = logoSources(uni.domain);
  const [index, setIndex] = useState(0);
  const initials = uni.name
    .replace(/University|of|and/gi, "")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  const exhausted = index >= sources.length;

  return (
    <div className="nx-logo-tile shrink-0" style={{ height: size, width: size }}>
      {exhausted ? (
        <span
          className="grid h-full w-full place-items-center rounded-2xl bg-accent text-center font-extrabold leading-none nx-gradient-text"
          style={{ fontSize: Math.max(12, size * 0.32) }}
          aria-label={uni.name}
        >
          {initials}
        </span>
      ) : (
        <img
          src={sources[index]}
          alt={uni.name}
          width={size}
          height={size}
          loading="lazy"
          onError={() => setIndex((i) => i + 1)}
          className="relative z-10 h-full w-full object-contain p-2"
        />
      )}
    </div>
  );
}


function Card({ uni, index, t }: { uni: University; index: number; t: (k: string) => string }) {
  return (
    <article
      className="nx-card nx-tilt group relative flex flex-col gap-3 overflow-hidden p-4"
      style={{ animationDelay: `${Math.min(index, 12) * 0.035}s` }}
    >
      <div className="pointer-events-none absolute -top-16 ltr:-right-16 rtl:-left-16 h-32 w-32 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="flex items-start gap-3">
        <Logo uni={uni} />
        <div className="min-w-0 flex-1">
          <h3 dir="ltr" className="text-[14px] font-bold leading-snug ltr:text-left rtl:text-right">
            {uni.name}
          </h3>
          <div className="mt-1 flex items-center gap-1 text-[11px] text-muted-foreground">
            <MapPin className="h-3 w-3" />
            {uni.city}
          </div>
        </div>
      </div>

      <div className="mt-auto flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-[11px] font-bold text-accent-foreground">
          <BadgePercent className="h-3.5 w-3.5" />
          {t("uni.discount")} {uni.discount}
        </span>
        <a
          href={waLink(uni.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="nx-btn inline-flex items-center gap-1 rounded-full bg-primary px-3.5 py-1.5 text-[11px] font-bold text-primary-foreground opacity-90 group-hover:opacity-100"
        >
          {t("uni.inquire")}
          <ArrowUpRight className="h-3 w-3" />
        </a>
      </div>
    </article>
  );
}

const STEP = 12;

export function Universities() {
  const { t, dir } = useI18n();
  const [region, setRegion] = useState<string>("All");
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState(false);

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    return universities.filter(
      (u) =>
        (region === "All" || u.region === region) &&
        (q === "" || u.name.toLowerCase().includes(q) || u.city.toLowerCase().includes(q)),
    );
  }, [region, query]);

  const visible = expanded ? list : list.slice(0, STEP);

  return (
    <section id="universities" className="border-b border-border bg-background py-14">
      <div dir={dir} className="mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-[24px] font-extrabold md:text-[32px]">{t("uni.title")}</h2>
            <p className="mt-1 text-[13px] text-muted-foreground">
              {universities.length} {t("uni.desc")}
            </p>
          </div>

          <label className="relative flex w-full max-w-[300px] items-center">
            <Search className="pointer-events-none absolute h-4 w-4 text-muted-foreground ltr:left-3 rtl:right-3" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("uni.search")}
              className="h-11 w-full rounded-full border border-border bg-card px-4 text-[13px] outline-none transition-shadow placeholder:text-muted-foreground focus:border-primary focus:shadow-[var(--shadow-soft)] ltr:pl-10 rtl:pr-10"
            />
          </label>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {regionTabs.map((tab) => {
            const activeTab = region === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setRegion(tab.id)}
                className={`nx-press rounded-full border px-4 py-2 text-[13px] font-bold ${
                  activeTab
                    ? "-translate-y-0.5 border-primary bg-primary text-primary-foreground shadow-[var(--shadow-soft)]"
                    : "border-border bg-card text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {t(regionKey[tab.id] ?? "uni.all")}
                <span className="mx-1.5 text-[11px] opacity-75">{countByRegion(tab.id)}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visible.map((u, i) => (
            <Card key={u.name} uni={u} index={i} t={t} />
          ))}
        </div>

        {list.length > STEP && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="nx-btn inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-[13px] font-bold hover:border-primary hover:text-primary"
            >
              {expanded ? t("uni.less") : `${t("uni.more")} (${list.length - STEP})`}
              <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
            </button>
          </div>
        )}

        {list.length === 0 && (
          <p className="py-12 text-center text-sm text-muted-foreground">{t("uni.empty")}</p>
        )}
      </div>

      {/* Continuous logo marquee */}
      <div className="nx-marquee-wrap nx-mask-x mt-14 overflow-hidden border-y border-border bg-surface py-6">
        <div className="nx-marquee-track" style={{ ["--nx-speed" as string]: "80s" }}>
          {[0, 1].map((g) => (
            <div key={g} className="nx-marquee-group" aria-hidden={g === 1}>
              {universities.map((u, i) => (
                <div
                  key={`${u.name}-${i}`}
                  className="group flex h-16 w-[230px] shrink-0 items-center gap-3 rounded-2xl border border-border bg-card px-3 transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[var(--shadow-soft)]"
                >
                  <Logo uni={u} size={40} />
                  <span dir="ltr" className="truncate text-[11px] font-semibold">{u.name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
