import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Globe } from "lucide-react";
import { languages, useI18n } from "@/lib/i18n";

export function LangSwitcher({ block = false }: { block?: boolean }) {
  const { lang, setLang, t } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = languages.find((l) => l.id === lang);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className={`relative ${block ? "w-full" : ""}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={t("lang.label")}
        className={`nx-press flex items-center gap-2 rounded-full border border-border bg-card px-3 py-2 text-[12px] font-bold transition-colors hover:border-primary hover:text-primary ${
          block ? "w-full justify-between" : ""
        }`}
      >
        <span className="flex items-center gap-2">
          <Globe className="h-4 w-4 text-muted-foreground" />
          {current?.label}
        </span>
        <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>

      <div
        role="listbox"
        className={`absolute z-50 mt-2 min-w-[160px] origin-top overflow-hidden rounded-2xl border border-border bg-card p-1 shadow-[var(--shadow-float)] transition-all duration-250 ltr:right-0 rtl:left-0 ${
          open ? "pointer-events-auto translate-y-0 scale-100 opacity-100" : "pointer-events-none -translate-y-1 scale-95 opacity-0"
        } ${block ? "w-full" : ""}`}
      >
        {languages.map((l) => (
          <button
            key={l.id}
            type="button"
            role="option"
            aria-selected={lang === l.id}
            onClick={() => {
              setLang(l.id);
              setOpen(false);
            }}
            className={`flex w-full items-center justify-between gap-2 rounded-xl px-3 py-2 text-[12.5px] font-bold transition-colors ${
              lang === l.id ? "bg-accent text-primary" : "text-muted-foreground hover:bg-surface hover:text-primary"
            }`}
          >
            {l.label}
            {lang === l.id && <Check className="h-3.5 w-3.5" />}
          </button>
        ))}
      </div>
    </div>
  );
}
