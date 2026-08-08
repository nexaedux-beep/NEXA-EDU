import { useI18n } from "@/lib/i18n";
import { waLink } from "@/lib/site";

export function WhatsAppFab() {
  const { t } = useI18n();

  return (
    <a
      href={waLink("الدراسة في تركيا")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("wa.float")}
      className="group fixed bottom-5 z-[60] inline-flex items-center gap-2 rounded-full bg-[var(--success)] px-4 py-3 text-sm font-bold text-primary-foreground shadow-[var(--shadow-float)] transition-transform duration-300 hover:scale-105 ltr:right-5 rtl:left-5"
    >
      <span className="pointer-events-none absolute inset-0 rounded-full nx-glow" aria-hidden />
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden>
        <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15s-.77.96-.94 1.16c-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35z" />
        <path d="M12.04 2C6.6 2 2.18 6.42 2.18 11.86c0 1.74.46 3.44 1.32 4.94L2 22l5.35-1.4a9.86 9.86 0 0 0 4.69 1.19h.01c5.43 0 9.85-4.42 9.85-9.86 0-2.63-1.02-5.11-2.88-6.97A9.79 9.79 0 0 0 12.04 2zm0 17.98h-.01a8.2 8.2 0 0 1-4.17-1.14l-.3-.18-3.17.83.85-3.09-.2-.32a8.16 8.16 0 0 1-1.25-4.36c0-4.52 3.68-8.2 8.2-8.2 2.19 0 4.25.86 5.8 2.41a8.15 8.15 0 0 1 2.4 5.8c0 4.52-3.68 8.25-8.15 8.25z" />
      </svg>
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap transition-all duration-500 group-hover:max-w-[220px] sm:inline">
        {t("wa.float")}
      </span>
    </a>
  );
}
