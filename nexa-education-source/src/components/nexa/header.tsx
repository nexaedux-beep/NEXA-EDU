import { Link } from "@tanstack/react-router";
import { Moon, Sun, LayoutDashboard, MessageCircle } from "lucide-react";
import logoHorizontal from "@/assets/nexa-logo-mark.png";
import { site, waLink } from "@/lib/site";
import { useTheme } from "@/lib/use-theme";

export function Header() {
  const { theme, toggle } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/75 backdrop-blur-xl">
      <div className="mx-auto flex h-[74px] max-w-[1280px] items-center justify-between gap-3 px-4 md:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label="نيكسا التعليمية">
          <img
            src={logoHorizontal}
            alt="شعار نيكسا التعليمية"
            width={172}
            height={54}
            className="nx-logo nx-float h-9 w-auto object-contain sm:h-10"
          />
        </Link>


        <nav className="hidden items-center gap-1 text-[13px] font-semibold lg:flex">
          <a href="#universities" className="rounded-full px-3 py-2 transition-colors hover:bg-accent hover:text-accent-foreground">الجامعات</a>
          <a href="#reviews" className="rounded-full px-3 py-2 transition-colors hover:bg-accent hover:text-accent-foreground">آراء الطلاب</a>
          <a href="#map" className="rounded-full px-3 py-2 transition-colors hover:bg-accent hover:text-accent-foreground">مواقعنا</a>
          <a href="#contact" className="rounded-full px-3 py-2 transition-colors hover:bg-accent hover:text-accent-foreground">تواصل</a>
        </nav>

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
            to="/dashboard"
            aria-label="لوحة التحكم"
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-primary"
          >
            <LayoutDashboard className="h-4 w-4" />
          </Link>

          <a
            href={waLink("الدراسة في تركيا")}
            target="_blank"
            rel="noopener noreferrer"
            className="nx-glow hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.03] sm:flex"
          >
            <MessageCircle className="h-4 w-4" />
            تواصل واتساب
            <span dir="ltr" className="text-[11px] opacity-85">{site.phone}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
