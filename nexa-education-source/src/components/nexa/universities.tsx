import { useMemo, useState } from "react";
import { MapPin, Search, BadgePercent } from "lucide-react";
import { countByRegion, logoUrl, regionTabs, universities, type University } from "@/data/universities";
import { waLink } from "@/lib/site";

function Logo({ uni }: { uni: University }) {
  const [failed, setFailed] = useState(false);
  const initials = uni.name
    .replace(/University|of|and/gi, "")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  if (failed) {
    return (
      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[image:var(--gradient-brand)] text-[15px] font-extrabold text-primary-foreground">
        {initials}
      </div>
    );
  }

  return (
    <img
      src={logoUrl(uni.domain)}
      alt={`شعار ${uni.name}`}
      width={48}
      height={48}
      loading="lazy"
      onError={() => setFailed(true)}
      className="h-12 w-12 shrink-0 rounded-xl border border-border bg-background object-contain p-1.5"
    />
  );
}

function Card({ uni, index }: { uni: University; index: number }) {
  return (
    <article
      className="nx-card nx-rise group flex flex-col gap-3 p-4"
      style={{ animationDelay: `${Math.min(index, 12) * 0.035}s` }}
    >
      <div className="flex items-start gap-3">
        <Logo uni={uni} />
        <div className="min-w-0 flex-1">
          <h3 dir="ltr" className="text-right text-[14px] font-bold leading-snug">
            {uni.name}
          </h3>
          <div className="mt-1 flex items-center gap-1 text-[11px] text-muted-foreground">
            <MapPin className="h-3 w-3" />
            {uni.city} • {uni.regionAr}
          </div>
        </div>
      </div>

      <div className="mt-auto flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-[11px] font-bold text-accent-foreground">
          <BadgePercent className="h-3.5 w-3.5" />
          خصم حتى {uni.discount}
        </span>
        <a
          href={waLink(uni.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-primary px-3.5 py-1.5 text-[11px] font-bold text-primary-foreground opacity-90 transition-all group-hover:opacity-100 hover:-translate-y-0.5"
        >
          استفسر الآن
        </a>
      </div>
    </article>
  );
}

export function Universities() {
  const [region, setRegion] = useState<string>("All");
  const [query, setQuery] = useState("");

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    return universities.filter(
      (u) =>
        (region === "All" || u.region === region) &&
        (q === "" || u.name.toLowerCase().includes(q) || u.city.toLowerCase().includes(q)),
    );
  }, [region, query]);

  const strip = [...universities, ...universities];

  return (
    <section id="universities" className="border-b border-border bg-background py-14">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-[24px] font-extrabold md:text-[32px]">الجامعات الخاصة المعتمدة</h2>
            <p className="mt-1 text-[13px] text-muted-foreground">
              {universities.length} جامعة بأسمائها الكاملة وشعاراتها الرسمية — مرتبة حسب المدينة.
            </p>
          </div>

          <label className="relative flex w-full max-w-[300px] items-center">
            <Search className="pointer-events-none absolute right-3 h-4 w-4 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="ابحث عن جامعة أو مدينة…"
              className="h-11 w-full rounded-full border border-border bg-card pr-10 pl-4 text-[13px] outline-none transition-shadow placeholder:text-muted-foreground focus:border-primary focus:shadow-[var(--shadow-soft)]"
            />
          </label>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {regionTabs.map((t) => {
            const activeTab = region === t.id;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setRegion(t.id)}
                className={`rounded-full border px-4 py-2 text-[13px] font-bold transition-all duration-300 ${
                  activeTab
                    ? "-translate-y-0.5 border-primary bg-primary text-primary-foreground shadow-[var(--shadow-soft)]"
                    : "border-border bg-card text-muted-foreground hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                }`}
              >
                {t.label}
                <span className="mr-1.5 text-[11px] opacity-75">{countByRegion(t.id)}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {list.map((u, i) => (
            <Card key={u.name} uni={u} index={i} />
          ))}
        </div>

        {list.length === 0 && (
          <p className="py-12 text-center text-sm text-muted-foreground">لا توجد نتائج مطابقة للبحث.</p>
        )}
      </div>

      {/* Continuous logo marquee */}
      <div className="nx-marquee-wrap nx-mask-x mt-14 overflow-hidden border-y border-border bg-surface py-6">
        <div className="nx-marquee-track gap-4" style={{ ["--nx-speed" as string]: "80s" }}>
          {strip.map((u, i) => (
            <div
              key={`${u.name}-${i}`}
              className="flex h-14 w-[220px] shrink-0 items-center gap-3 rounded-2xl border border-border bg-card px-3"
            >
              <img
                src={logoUrl(u.domain)}
                alt=""
                aria-hidden
                width={32}
                height={32}
                loading="lazy"
                className="h-8 w-8 rounded-lg object-contain"
              />
              <span dir="ltr" className="truncate text-[11px] font-semibold">{u.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
