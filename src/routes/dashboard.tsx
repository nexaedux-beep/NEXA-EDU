import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  GraduationCap,
  Users,
  Star,
  Globe2,
  Moon,
  Sun,
  Search,
} from "lucide-react";
import { countByRegion, logoUrl, regionTabs, universities } from "@/data/universities";
import { testimonials } from "@/data/testimonials";
import { useTheme } from "@/lib/use-theme";
import { useCountUp, useInView } from "@/lib/use-reveal";

export const Route = createFileRoute("/dashboard")({
  component: Dashboard,
  head: () => ({
    meta: [
      { title: "لوحة تحكم نيكسا — إحصائيات الجامعات والطلاب" },
      {
        name: "description",
        content: "لوحة تحكم NEXA Education: متابعة الجامعات الشريكة، توزيع المدن، آراء الطلاب وأرقام التسجيل.",
      },
      { property: "og:title", content: "لوحة تحكم نيكسا التعليمية" },
      { property: "og:description", content: "إحصائيات الجامعات والطلاب وآراء الخريجين في مكان واحد." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/dashboard" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/dashboard" }],
  }),
});

function KpiCard({ icon: Icon, label, value, suffix }: { icon: typeof Users; label: string; value: number; suffix?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  const n = useCountUp(value, inView);
  return (
    <div ref={ref} className="nx-card flex items-center gap-4 p-5">
      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[image:var(--gradient-brand)] text-primary-foreground">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-[22px] font-extrabold text-primary">
          {suffix}
          {n.toLocaleString("en-US")}
        </div>
        <div className="text-[12px] text-muted-foreground">{label}</div>
      </div>
    </div>
  );
}

function Dashboard() {
  const { theme, toggle } = useTheme();
  const [region, setRegion] = useState<string>("All");
  const [query, setQuery] = useState("");

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    return universities.filter(
      (u) =>
        (region === "All" || u.region === region) &&
        (q === "" || u.name.toLowerCase().includes(q) || u.city.toLowerCase().includes(q)),
    );
  }, [region, query]);

  const maxCount = Math.max(...regionTabs.slice(1).map((t) => countByRegion(t.id)));

  return (
    <div dir="rtl" className="min-h-screen bg-surface text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-[70px] max-w-[1280px] items-center justify-between px-4 md:px-8">
          <div>
            <h1 className="text-[17px] font-extrabold">لوحة التحكم</h1>
            <p className="text-[11px] text-muted-foreground">NEXA Education · نظرة عامة</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggle}
              aria-label={theme === "dark" ? "الوضع النهاري" : "الوضع الليلي"}
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-primary"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-[12px] font-bold transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
            >
              العودة للموقع
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1280px] space-y-8 px-4 py-8 md:px-8">
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <KpiCard icon={Users} label="طالب مسجّل" value={5200} suffix="+" />
          <KpiCard icon={GraduationCap} label="جامعة شريكة" value={universities.length} suffix="+" />
          <KpiCard icon={Star} label="رأي طلابي" value={testimonials.length} suffix="+" />
          <KpiCard icon={Globe2} label="دولة" value={20} suffix="+" />
        </section>

        <section className="nx-card p-6">
          <h2 className="text-[16px] font-extrabold">توزيع الجامعات حسب المدينة</h2>
          <div className="mt-5 space-y-4">
            {regionTabs.slice(1).map((t) => {
              const c = countByRegion(t.id);
              return (
                <div key={t.id} className="space-y-1.5">
                  <div className="flex items-center justify-between text-[12px] font-semibold">
                    <span>{t.label}</span>
                    <span className="text-muted-foreground">{c} جامعة</span>
                  </div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-[image:var(--gradient-brand)] transition-[width] duration-1000"
                      style={{ width: `${(c / maxCount) * 100}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="nx-card overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border p-5">
            <h2 className="text-[16px] font-extrabold">سجل الجامعات ({rows.length})</h2>
            <div className="flex flex-wrap items-center gap-2">
              <label className="relative flex items-center">
                <Search className="pointer-events-none absolute right-3 h-4 w-4 text-muted-foreground" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="بحث…"
                  className="h-10 w-[200px] rounded-full border border-border bg-background pr-9 pl-3 text-[12px] outline-none focus:border-primary"
                />
              </label>
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="h-10 rounded-full border border-border bg-background px-3 text-[12px] outline-none focus:border-primary"
              >
                {regionTabs.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="max-h-[520px] overflow-auto">
            <table className="w-full text-right text-[12.5px]">
              <thead className="sticky top-0 bg-surface text-muted-foreground">
                <tr>
                  <th className="p-3 font-semibold">الشعار</th>
                  <th className="p-3 font-semibold">اسم الجامعة</th>
                  <th className="p-3 font-semibold">المدينة</th>
                  <th className="p-3 font-semibold">المنطقة</th>
                  <th className="p-3 font-semibold">الخصم</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((u) => (
                  <tr key={u.name} className="border-t border-border transition-colors hover:bg-accent/50">
                    <td className="p-3">
                      <img
                        src={logoUrl(u.domain)}
                        alt=""
                        aria-hidden
                        width={28}
                        height={28}
                        loading="lazy"
                        className="h-7 w-7 rounded-md object-contain"
                      />
                    </td>
                    <td dir="ltr" className="p-3 text-right font-semibold">{u.name}</td>
                    <td className="p-3 text-muted-foreground">{u.city}</td>
                    <td className="p-3 text-muted-foreground">{u.regionAr}</td>
                    <td className="p-3">
                      <span className="rounded-full bg-accent px-2.5 py-1 text-[11px] font-bold text-accent-foreground">
                        {u.discount}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="nx-card p-6">
          <h2 className="text-[16px] font-extrabold">أحدث آراء الطلاب</h2>
          <ul className="mt-4 grid gap-3 md:grid-cols-2">
            {testimonials.slice(0, 8).map((t) => (
              <li key={t.name} className="rounded-2xl border border-border bg-background p-4">
                <div className="flex items-center justify-between">
                  <span className="text-[13px] font-bold">{t.name}</span>
                  <span className="text-[11px] text-muted-foreground">{t.country}</span>
                </div>
                <p className="mt-1.5 text-[12px] leading-6 text-muted-foreground">{t.quote}</p>
                <div dir="ltr" className="mt-2 text-right text-[11px] font-semibold text-primary">{t.uni}</div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
