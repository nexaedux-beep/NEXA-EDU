import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Moon, Sun, LayoutDashboard, Menu, X } from "lucide-react";
import logoHorizontal from "@/assets/nexa-logo-mark.png.asset.json";
import { useTheme } from "@/lib/use-theme";
import { useI18n } from "@/lib/i18n";
import { LangSwitcher } from "./lang-switcher";

const links = [
  { to: "/", hash: "about", key: "nav.about" },
  { to: "/why-nexa", key: "nav.why" },
  { to: "/programs", key: "nav.programs" },
  { to: "/", hash: "universities", key: "nav.universities" },
  { to: "/", hash: "offers", key: "nav.offers" },
  { to: "/", hash: "reviews", key: "nav.reviews" },
  { to: "/", hash: "map", key: "nav.map" },
  { to: "/", hash: "apply", key: "nav.apply" },
] as const;

export function Header() {
  const { theme, toggle } = useTheme();
  const { t, dir } = useI18n();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header dir={dir} className="sticky top-0 z-50 border-b border-border bg-background/75 backdrop-blur-xl">
      <div className="mx-auto flex h-[74px] max-w-[1280px] items-center justify-between gap-3 px-4 md:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label="NEXA Education">
          <img
            src={logoHorizontal.url}
            alt="NEXA Education"
            width={172}
            height={54}
            className="nx-logo nx-bob h-9 w-auto object-contain sm:h-10"
          />
        </Link>

        <nav className="hidden items-center gap-1 text-[13px] font-semibold lg:flex">
          {links.map((l) => (
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

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-400 lg:hidden ${
          open ? "max-h-[560px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-[1280px] flex-col gap-1 px-4 py-4 text-[14px] font-semibold">
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
