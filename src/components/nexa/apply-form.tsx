import { useMemo, useRef, useState, useEffect } from "react";
import { z } from "zod";
import { CheckCircle2, MessageCircle, Send, User, GraduationCap } from "lucide-react";
import { site, waLink } from "@/lib/site";
import { universities } from "@/data/universities";
import { useI18n } from "@/lib/i18n";

const schema = z.object({
  fullName: z.string().trim().min(3).max(100),
  phone: z.string().trim().min(8).max(20),
  email: z.string().trim().email().max(255),
  nationality: z.string().trim().min(2).max(60),
  level: z.string().trim().min(1),
  language: z.string().trim().min(1),
  university: z.string().trim().max(120).optional(),
  major: z.string().trim().min(2).max(120),
  notes: z.string().trim().max(1000).optional(),
});

type FormValues = z.infer<typeof schema>;

const initial: FormValues = {
  fullName: "",
  phone: "",
  email: "",
  nationality: "",
  level: "",
  language: "",
  university: "",
  major: "",
  notes: "",
};

const levels = {
  ar: ["بكالوريوس", "ماجستير", "دكتوراه", "سنة تحضيرية / لغة"],
  en: ["Bachelor's", "Master's", "PhD", "Foundation / Language year"],
};
const studyLanguages = {
  ar: ["الإنجليزية", "التركية", "العربية"],
  en: ["English", "Turkish", "Arabic"],
};

const errorMsg = {
  ar: {
    fullName: "الرجاء إدخال الاسم الكامل",
    phone: "رقم هاتف غير صالح",
    email: "بريد إلكتروني غير صالح",
    nationality: "الرجاء إدخال الجنسية",
    level: "اختر المرحلة الدراسية",
    language: "اختر لغة الدراسة",
    major: "الرجاء إدخال التخصص المرغوب",
    notes: "الملاحظات طويلة جداً",
    university: "",
  },
  en: {
    fullName: "Please enter your full name",
    phone: "Invalid phone number",
    email: "Invalid email address",
    nationality: "Please enter your nationality",
    level: "Select a study level",
    language: "Select a language of study",
    major: "Please enter your preferred major",
    notes: "Notes are too long",
    university: "",
  },
} as const;

const fieldClass =
  "w-full rounded-2xl border border-border bg-card px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-[var(--ring)]/25 hover:border-primary/50";

export function ApplyForm() {
  const { t, lang, dir } = useI18n();
  const [values, setValues] = useState<FormValues>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [sent, setSent] = useState(false);

  const uniNames = useMemo(() => universities.map((u) => u.name), []);

  const set = (key: keyof FormValues, value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const summary = (v: FormValues) =>
    [
      `${t("apply.fullName")}: ${v.fullName}`,
      `${t("apply.phone")}: ${v.phone}`,
      `${t("apply.email")}: ${v.email}`,
      `${t("apply.nationality")}: ${v.nationality}`,
      `${t("apply.level")}: ${v.level}`,
      `${t("apply.language")}: ${v.language}`,
      `${t("apply.university")}: ${v.university || "—"}`,
      `${t("apply.major")}: ${v.major}`,
      `${t("apply.notes")}: ${v.notes || "—"}`,
    ].join("\n");

  const validate = () => {
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Partial<Record<keyof FormValues, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof FormValues;
        if (!next[key]) next[key] = errorMsg[lang][key];
      }
      setErrors(next);
      return null;
    }
    return parsed.data;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = validate();
    if (!data) return;
    const subject = lang === "ar" ? `طلب تسجيل جديد — ${data.fullName}` : `New application — ${data.fullName}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(summary(data))}`;
    setSent(true);
  };

  const onWhatsApp = () => {
    const data = validate();
    if (!data) return;
    const intro = lang === "ar" ? "طلب تسجيل جديد عبر موقع نيكسا:" : "New application via the NEXA website:";
    window.open(
      `${site.whatsapp}?text=${encodeURIComponent(`${intro}\n\n${summary(data)}`)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSent(true);
  };

  return (
    <section id="apply" className="border-b border-border bg-[image:var(--gradient-surface)] py-14 md:py-20">
      <div dir={dir} className="mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="grid items-start gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="nx-rise space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-[12px] shadow-[var(--shadow-soft)]">
              <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
              {t("apply.badge")}
            </span>
            <h2 className="text-[28px] font-extrabold leading-tight md:text-[38px]">
              {t("apply.title1")} <span className="nx-gradient-text">{t("apply.title2")}</span> {t("apply.title3")}
            </h2>
            <p className="max-w-[460px] text-[15px] leading-8 text-muted-foreground">{t("apply.intro")}</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[t("apply.b1"), t("apply.b2"), t("apply.b3")].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <form
            onSubmit={onSubmit}
            className="nx-card nx-rise space-y-6 p-5 md:p-8"
            style={{ animationDelay: "0.1s" }}
          >
            <fieldset className="space-y-4">
              <legend className="mb-2 flex items-center gap-2 text-[13px] font-extrabold text-primary">
                <User className="h-4 w-4" />
                {t("apply.sec1")}
              </legend>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label={t("apply.fullName")} error={errors.fullName}>
                  <input className={fieldClass} value={values.fullName} maxLength={100} placeholder={t("apply.fullName")} onChange={(e) => set("fullName", e.target.value)} />
                </Field>
                <Field label={t("apply.phone")} error={errors.phone}>
                  <input dir="ltr" className={fieldClass} value={values.phone} maxLength={20} placeholder="+90 5xx xxx xx xx" onChange={(e) => set("phone", e.target.value)} />
                </Field>
                <Field label={t("apply.email")} error={errors.email}>
                  <input dir="ltr" type="email" className={fieldClass} value={values.email} maxLength={255} placeholder="you@example.com" onChange={(e) => set("email", e.target.value)} />
                </Field>
                <Field label={t("apply.nationality")} error={errors.nationality}>
                  <input className={fieldClass} value={values.nationality} maxLength={60} placeholder={t("apply.nationality")} onChange={(e) => set("nationality", e.target.value)} />
                </Field>
              </div>
            </fieldset>

            <div className="h-px bg-border" />

            <fieldset className="space-y-4">
              <legend className="mb-2 flex items-center gap-2 text-[13px] font-extrabold text-primary">
                <GraduationCap className="h-4 w-4" />
                {t("apply.sec2")}
              </legend>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label={t("apply.level")} error={errors.level}>
                  <select className={fieldClass} value={values.level} onChange={(e) => set("level", e.target.value)}>
                    <option value="">{t("apply.levelPh")}</option>
                    {levels[lang].map((l) => (
                      <option key={l} value={l}>{l}</option>
                    ))}
                  </select>
                </Field>
                <Field label={t("apply.language")} error={errors.language}>
                  <select className={fieldClass} value={values.language} onChange={(e) => set("language", e.target.value)}>
                    <option value="">{t("apply.languagePh")}</option>
                    {studyLanguages[lang].map((l) => (
                      <option key={l} value={l}>{l}</option>
                    ))}
                  </select>
                </Field>
                <Field label={t("apply.university")}>
                  <UniversityPicker
                    value={values.university ?? ""}
                    options={uniNames}
                    placeholder={t("apply.universityPh")}
                    onChange={(v) => set("university", v)}
                  />
                </Field>
                <Field label={t("apply.major")} error={errors.major}>
                  <input className={fieldClass} value={values.major} maxLength={120} placeholder={t("apply.majorPh")} onChange={(e) => set("major", e.target.value)} />
                </Field>
              </div>

              <Field label={t("apply.notes")} error={errors.notes}>
                <textarea rows={3} className={`${fieldClass} resize-none`} value={values.notes} maxLength={1000} placeholder={t("apply.notesPh")} onChange={(e) => set("notes", e.target.value)} />
              </Field>
            </fieldset>

            <div className="flex flex-wrap gap-3">
              <button
                type="submit"
                className="nx-btn inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-[var(--shadow-soft)] sm:flex-none"
              >
                <Send className="h-4 w-4" />
                {t("apply.send")}
              </button>
              <button
                type="button"
                onClick={onWhatsApp}
                className="nx-btn inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-bold hover:border-primary sm:flex-none"
              >
                <MessageCircle className="h-4 w-4 text-primary" />
                {t("apply.wa")}
              </button>
            </div>

            {sent && (
              <p className="flex items-center gap-2 text-[13px] font-semibold text-[var(--success)]">
                <CheckCircle2 className="h-4 w-4" />
                {t("apply.done")}
              </p>
            )}

            <p className="text-[11px] text-muted-foreground">
              {t("apply.or")}{" "}
              <a href={waLink(t("nav.apply"))} target="_blank" rel="noopener noreferrer" className="font-bold text-primary hover:underline">
                WhatsApp
              </a>{" "}
              {t("apply.orMail")}{" "}
              <a href={`mailto:${site.email}`} className="font-bold text-primary hover:underline" dir="ltr">
                {site.email}
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, error, children }: { label: string; error?: string | undefined; children: React.ReactNode }) {
  return (
    <label className="block space-y-1.5">
      <span className="text-[12px] font-bold text-muted-foreground">{label}</span>
      {children}
      {error && <span className="block text-[11px] font-semibold text-destructive">{error}</span>}
    </label>
  );
}

function UniversityPicker({
  value,
  options,
  placeholder,
  onChange,
}: {
  value: string;
  options: string[];
  placeholder: string;
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const matches = useMemo(() => {
    const q = value.trim().toLowerCase();
    const list = q === "" ? options : options.filter((o) => o.toLowerCase().includes(q));
    return list.slice(0, 40);
  }, [options, value]);

  return (
    <div ref={wrapRef} className="relative">
      <input
        className={fieldClass}
        value={value}
        maxLength={120}
        placeholder={placeholder}
        autoComplete="off"
        role="combobox"
        aria-expanded={open}
        onFocus={() => setOpen(true)}
        onChange={(e) => {
          onChange(e.target.value);
          setOpen(true);
        }}
      />
      {open && matches.length > 0 && (
        <ul className="absolute z-30 mt-2 max-h-64 w-full overflow-y-auto rounded-2xl border border-border bg-card p-1 shadow-[var(--shadow-float)]">
          {matches.map((o) => (
            <li key={o}>
              <button
                type="button"
                onClick={() => {
                  onChange(o);
                  setOpen(false);
                }}
                dir="ltr"
                className="block w-full rounded-xl px-3 py-2 text-[12.5px] font-semibold transition-colors hover:bg-surface hover:text-primary ltr:text-left rtl:text-right"
              >
                {o}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
