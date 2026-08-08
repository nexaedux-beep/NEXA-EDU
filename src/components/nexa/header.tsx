import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Moon, Sun, LayoutDashboard, Menu, X, ChevronDown } from "lucide-react";
import logoHorizontal from "@/assets/nexa-logo-mark.png.png";
import { useTheme } from "@/lib/use-theme";
import { useI18n } from "@/lib/i18n";
import { services } from "@/data/services";
import { LangSwitcher } from "./lang-switcher";

const links = [
  { to: "/", key: "nav.home" },
  { to: "/programs", key: "nav.programs" },
  { to: "/", hash: "universities", key: "nav.universities" },
  { to: "/", hash: "offers", key: "nav.offers" },
  { to: "/", hash: "reviews", key: "nav.reviews" },
  { to: "/", hash: "apply", key: "nav.apply" },
] as const;

const aboutLinks = [
  { to: "/about", ar: "نبذة عن نيكسا", en: "About NEXA" },
  { to: "/why-nexa", ar: "لماذا نيكسا", en: "Why NEXA" },
  { to: "/mission", ar: "رسالتنا", en: "Our mission" },
  { to: "/vision", ar: "رؤيتنا", en: "Our vision" },
  { to: "/values", ar: "قيمنا", en: "Our values" },
] as const;

export function Header() {
  const { theme, toggle } = useTheme();
  const { t, lang, dir } = useI18n();
  const [open, setOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);
  const svcRef = useRef<HTMLDivElement>(null);
  const [aboutOpen, setAboutOpen] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? Math.min(100, (window.scrollY / h) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (svcRef.current && !svcRef.current.contains(e.target as Node)) setSvcOpen(false);
      if (aboutRef.current && !aboutRef.current.contains(e.target as Node)) setAboutOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <header dir={dir} className="sticky top-0 z-50 border-b border-border bg-background/75 backdrop-blur-xl">
      <div className="mx-auto flex h-[62px] max-w-[1280px] items-center justify-between gap-2 px-4 sm:h-[74px] sm:gap-3 md:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label="NEXA Education">
          <img
            src={logoHorizontal}
            alt="NEXA Education"
            width={172}
            height={54}
            className="nx-logo h-9 w-auto object-contain sm:h-10"
          />
        </Link>

        <nav className="hidden items-center gap-1 text-[13px] font-semibold lg:flex">
          {links.slice(0, 1).map((l) => (
            <Link
              key={l.key}
              to={l.to}
              {...("hash" in l ? { hash: l.hash } : {})}
              className="nx-underline nx-press rounded-full px-3 py-2 hover:text-primary"
            >
              {t(l.key)}
            </Link>
          ))}

          {/* About us dropdown */}
          <div ref={aboutRef} className="relative">
            <button
              type="button"
              onClick={() => setAboutOpen((v) => !v)}
              aria-expanded={aboutOpen}
              className="nx-press inline-flex items-center gap-1 rounded-full px-3 py-2 hover:text-primary"
            >
              {t("nav.about")}
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${aboutOpen ? "rotate-180" : ""}`} />
            </button>

            <div
              className={`absolute top-[calc(100%+10px)] z-50 w-[260px] origin-top overflow-hidden rounded-2xl border border-border bg-card p-2 shadow-[var(--shadow-float)] transition-all duration-300 ${
                dir === "rtl" ? "right-0" : "left-0"
              } ${aboutOpen ? "visible translate-y-0 scale-100 opacity-100" : "invisible -translate-y-2 scale-95 opacity-0"}`}
            >
              {aboutLinks.map((a) => (
                <Link
                  key={a.to}
                  to={a.to}
                  onClick={() => setAboutOpen(false)}
                  className="block rounded-xl px-3 py-2.5 text-[12.5px] font-semibold transition-colors hover:bg-surface hover:text-primary"
                >
                  {a[lang]}
                </Link>
              ))}
            </div>
          </div>

          {links.slice(1, 3).map((l) => (
            <Link
              key={l.key}
              to={l.to}
              {...("hash" in l ? { hash: l.hash } : {})}
              className="nx-underline nx-press rounded-full px-3 py-2 hover:text-primary"
            >
              {t(l.key)}
            </Link>
          ))}

          {/* Services dropdown */}
          <div ref={svcRef} className="relative">
            <button
              type="button"
              onClick={() => setSvcOpen((v) => !v)}
              aria-expanded={svcOpen}
              className="nx-press inline-flex items-center gap-1 rounded-full px-3 py-2 hover:text-primary"
            >
              {t("nav.services")}
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${svcOpen ? "rotate-180" : ""}`} />
            </button>

            <div
              className={`absolute top-[calc(100%+10px)] z-50 w-[320px] origin-top overflow-hidden rounded-2xl border border-border bg-card p-2 shadow-[var(--shadow-float)] transition-all duration-300 ${
                dir === "rtl" ? "right-0" : "left-0"
              } ${svcOpen ? "visible translate-y-0 scale-100 opacity-100" : "invisible -translate-y-2 scale-95 opacity-0"}`}
            >
              {services.map((s) => (
                <Link
                  key={s.slug}
                  to="/services"
                  hash={s.slug}
                  onClick={() => setSvcOpen(false)}
                  className="block rounded-xl px-3 py-2.5 text-[12.5px] font-semibold transition-colors hover:bg-surface hover:text-primary"
                >
                  {s.name[lang]}
                </Link>
              ))}
              <Link
                to="/services"
                onClick={() => setSvcOpen(false)}
                className="mt-1 block rounded-xl bg-primary px-3 py-2.5 text-center text-[12.5px] font-bold text-primary-foreground"
              >
                {t("svc.all")}
              </Link>
            </div>
          </div>

          {links.slice(3).map((l) => (
            <Link
              key={l.key}
              to={l.to}
              {...("hash" in l ? { hash: l.hash } : {})}
              className="nx-underline nx-press rounded-full px-3 py-2 hover:text-primary"
            >
              {t(l.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LangSwitcher />

          <button
            type="button"
            onClick={toggle}
            aria-label={theme === "dark" ? t("theme.light") : t("theme.dark")}
            className="nx-press grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-muted-foreground hover:border-primary hover:text-primary"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <Link
            to="/dashboard"
            aria-label={t("nav.dashboard")}
            className="nx-press hidden h-10 w-10 place-items-center rounded-full border border-border bg-card text-muted-foreground hover:border-primary hover:text-primary sm:grid"
          >
            <LayoutDashboard className="h-4 w-4" />
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? t("nav.close") : t("nav.menu")}
            className="nx-press grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-muted-foreground hover:border-primary hover:text-primary lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Scroll progress */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-full bg-transparent">
        <div
          className="h-full bg-[image:var(--gradient-brand)] transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Mobile drawer */}
      <div
        className={`overflow-y-auto border-t border-border bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-400 lg:hidden ${
          open ? "max-h-[calc(100vh-62px)] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-[1280px] flex-col gap-1 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-4 text-[14px] font-semibold">
          {links.map((l, i) => (
            <Link
              key={l.key}
              to={l.to}
              {...("hash" in l ? { hash: l.hash } : {})}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: `${i * 25}ms` }}
              className="nx-press rounded-2xl px-4 py-3 transition-colors hover:bg-surface hover:text-primary"
            >
              {t(l.key)}
            </Link>
          ))}

          <div className="mt-1 rounded-2xl border border-border bg-surface/60 p-2">
            <div className="px-2 py-1 text-[12px] font-extrabold text-primary">{t("nav.about")}</div>
            {aboutLinks.map((a) => (
              <Link
                key={a.to}
                to={a.to}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-2.5 text-[13px] transition-colors hover:bg-card hover:text-primary"
              >
                {a[lang]}
              </Link>
            ))}
          </div>

          <div className="mt-1 rounded-2xl border border-border bg-surface/60 p-2">
            <div className="px-2 py-1 text-[12px] font-extrabold text-primary">{t("nav.services")}</div>
            {services.map((s) => (
              <Link
                key={s.slug}
                to="/services"
                hash={s.slug}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-2.5 text-[13px] transition-colors hover:bg-card hover:text-primary"
              >
                {s.name[lang]}
              </Link>
            ))}
          </div>

          <Link
            to="/dashboard"
            onClick={() => setOpen(false)}
            className="nx-press rounded-2xl px-4 py-3 text-muted-foreground transition-colors hover:bg-surface hover:text-primary"
          >
            {t("nav.dashboard")}
          </Link>
        </nav>
      </div>
    </header>
  );
}
