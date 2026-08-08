import type { LucideIcon } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Header } from "@/components/nexa/header";
import { Footer } from "@/components/nexa/footer";
import { WhatsAppFab } from "@/components/nexa/whatsapp-fab";
import { useI18n } from "@/lib/i18n";
import { waLink } from "@/lib/site";

export type StoryBlock = { icon: LucideIcon; t: string; d: string };
export type StoryStat = { v: string; k: string };

export type StoryPageProps = {
  eyebrow: string;
  title: string;
  lead: string;
  quote?: string;
  quoteBy?: string;
  blocks: StoryBlock[];
  stats?: StoryStat[];
  listTitle?: string;
  list?: string[];
};

/** Premium, consistent editorial layout shared by the About / Mission / Vision / Values pages. */
export function StoryPage({ eyebrow, title, lead, quote, quoteBy, blocks, stats, listTitle, list }: StoryPageProps) {
  const { lang, dir } = useI18n();

  return (
    <div dir={dir} className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border bg-[image:var(--gradient-surface)] py-14 md:py-24">
          <div className="nx-grid-bg pointer-events-none absolute inset-0 opacity-70" aria-hidden />
          <div className="nx-drift pointer-events-none absolute -top-28 right-1/4 h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl" aria-hidden />

          <div className="relative mx-auto max-w-[900px] px-4 text-center md:px-8">
            <span className="nx-pop inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-[12px] font-bold shadow-[var(--shadow-soft)]">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              {eyebrow}
            </span>
            <h1 className="nx-fade-up mt-4 text-[30px] font-extrabold leading-tight md:text-[54px]">
              <span className="nx-gradient-text">{title}</span>
            </h1>
            <p
              className="nx-fade-up mx-auto mt-4 max-w-[640px] text-[14.5px] leading-8 text-muted-foreground md:text-[17px]"
              style={{ animationDelay: "0.12s" }}
            >
              {lead}
            </p>

            <div className="nx-fade-up mt-7 flex flex-wrap justify-center gap-3" style={{ animationDelay: "0.2s" }}>
              <a
                href={waLink(title)}
                target="_blank"
                rel="noopener noreferrer"
                className="nx-shine inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1"
              >
                {lang === "ar" ? "تحدّث مع مستشار" : "Talk to an advisor"}
              </a>
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-bold transition-all hover:-translate-y-1 hover:border-primary"
              >
                <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
                {lang === "ar" ? "الصفحة الرئيسية" : "Home"}
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        {stats && stats.length > 0 && (
          <section className="border-b border-border bg-background py-10">
            <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-3 px-4 md:grid-cols-4 md:gap-4 md:px-8">
              {stats.map((s, i) => (
                <div key={s.k} className="nx-card nx-fade-up p-5 text-center" style={{ animationDelay: `${i * 0.06}s` }}>
                  <div className="nx-gradient-text text-[24px] font-extrabold md:text-[32px]">{s.v}</div>
                  <div className="mt-1 text-[12px] font-semibold text-muted-foreground">{s.k}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Quote */}
        {quote && (
          <section className="border-b border-border bg-surface py-14">
            <div className="mx-auto max-w-[900px] px-4 text-center md:px-8">
              <p className="text-[18px] font-extrabold leading-9 md:text-[26px] md:leading-[46px]">“{quote}”</p>
              {quoteBy && <p className="mt-4 text-[12.5px] font-semibold text-muted-foreground">— {quoteBy}</p>}
            </div>
          </section>
        )}

        {/* Blocks */}
        <section className="border-b border-border bg-background py-14 md:py-16">
          <div className="mx-auto grid max-w-[1280px] gap-4 px-4 md:grid-cols-2 md:px-8 lg:grid-cols-3">
            {blocks.map((b, i) => (
              <article key={b.t} className="nx-card nx-tilt nx-fade-up p-6" style={{ animationDelay: `${Math.min(i, 9) * 0.06}s` }}>
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-[image:var(--gradient-brand)] text-primary-foreground">
                  <b.icon className="h-5 w-5" />
                </div>
                <h2 className="text-[16px] font-extrabold">{b.t}</h2>
                <p className="mt-2 text-[13px] leading-7 text-muted-foreground">{b.d}</p>
              </article>
            ))}
          </div>
        </section>

        {/* List */}
        {list && list.length > 0 && (
          <section className="border-b border-border bg-surface py-14 md:py-16">
            <div className="mx-auto max-w-[900px] px-4 md:px-8">
              {listTitle && <h2 className="text-center text-[22px] font-extrabold md:text-[32px]">{listTitle}</h2>}
              <ol className="relative mt-9 space-y-5 border-border ltr:border-l ltr:pl-8 rtl:border-r rtl:pr-8">
                {list.map((s, i) => (
                  <li key={s} className="nx-fade-up relative" style={{ animationDelay: `${i * 0.07}s` }}>
                    <span className="absolute top-1 grid h-8 w-8 place-items-center rounded-full bg-[image:var(--gradient-brand)] text-[13px] font-extrabold text-primary-foreground shadow-[var(--shadow-soft)] ltr:-left-12 rtl:-right-12">
                      {i + 1}
                    </span>
                    <div className="nx-card p-4 text-[14px] font-semibold">{s}</div>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        )}

        {/* Cross links */}
        <section className="bg-background py-14">
          <div className="mx-auto grid max-w-[1280px] gap-3 px-4 sm:grid-cols-2 md:grid-cols-4 md:px-8">
            {[
              { to: "/about", ar: "نبذة عن نيكسا", en: "About NEXA" },
              { to: "/why-nexa", ar: "لماذا نيكسا", en: "Why NEXA" },
              { to: "/mission", ar: "رسالتنا", en: "Our mission" },
              { to: "/vision", ar: "رؤيتنا", en: "Our vision" },
              { to: "/values", ar: "قيمنا", en: "Our values" },
            ]
              .filter((l) => l[lang] !== title)
              .slice(0, 4)
              .map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="nx-card flex items-center justify-between gap-3 p-4 text-[13.5px] font-extrabold transition-all hover:-translate-y-1 hover:border-primary"
                >
                  {l[lang]}
                  <ArrowLeft className="h-4 w-4 text-primary ltr:rotate-180" />
                </Link>
              ))}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
