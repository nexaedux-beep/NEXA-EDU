import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  Award,
  Building2,
  Clock,
  FileCheck2,
  GraduationCap,
  Headphones,
  Home,
  Plane,
  ShieldCheck,
  Sparkles,
  Wallet,
} from "lucide-react";
import { Header } from "@/components/nexa/header";
import { Footer } from "@/components/nexa/footer";
import { WhatsAppFab } from "@/components/nexa/whatsapp-fab";
import { useI18n } from "@/lib/i18n";
import { universities } from "@/data/universities";
import { waLink } from "@/lib/site";

export const Route = createFileRoute("/why-nexa")({
  component: WhyNexa,
  head: () => ({
    meta: [
      { title: "لماذا نيكسا؟ | Why NEXA Education — وكيل قبولات معتمد في تركيا" },
      {
        name: "description",
        content:
          "لماذا يختار آلاف الطلاب نيكسا التعليمية: خدمة مجانية بالكامل، خصومات حتى ٧٥٪، متابعة القبول والتأشيرة والسكن، وفريق يتحدث العربية والتركية والإنجليزية.",
      },
      { property: "og:title", content: "لماذا نيكسا؟ | Why NEXA Education" },
      {
        property: "og:description",
        content:
          "خدمة مجانية بالكامل، خصومات حتى ٧٥٪، متابعة القبول والتأشيرة والسكن، وفريق متعدد اللغات يرافقك خطوة بخطوة.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/why-nexa" }],
  }),
});

const reasons = [
  {
    icon: Wallet,
    ar: { t: "خدمة مجانية ١٠٠٪", d: "لا نأخذ منك أي رسوم — عمولتنا من الجامعة، فتحصل على استشارة محايدة وخصم حقيقي." },
    en: { t: "100% free service", d: "We charge you nothing — universities pay our fee, so you get neutral advice and a real discount." },
  },
  {
    icon: Award,
    ar: { t: "خصومات حصرية حتى ٧٥٪", d: "اتفاقيات مباشرة مع الجامعات تتيح لنا منح خصومات لا تحصل عليها بالتقديم المباشر." },
    en: { t: "Exclusive discounts up to 75%", d: "Direct agreements with universities unlock scholarships you can't get applying alone." },
  },
  {
    icon: Building2,
    ar: { t: `${universities.length} جامعة معتمدة`, d: "شبكة تغطي إسطنبول وأنقرة وإزمير وأنطاليا وقبرص الشمالية بجميع التخصصات." },
    en: { t: `${universities.length} accredited universities`, d: "A network across Istanbul, Ankara, Izmir, Antalya and Northern Cyprus in every field." },
  },
  {
    icon: FileCheck2,
    ar: { t: "ملف بلا أخطاء", d: "نراجع وثائقك وترجماتها ونعدّل ملفك قبل الإرسال لتفادي الرفض وتأخير القبول." },
    en: { t: "A flawless file", d: "We review your documents and translations before submission to avoid rejection and delays." },
  },
  {
    icon: Clock,
    ar: { t: "قبول خلال ٢٤–٧٢ ساعة", d: "علاقات مباشرة مع مكاتب القبول تعني ردوداً سريعة ومتابعة يومية لطلبك." },
    en: { t: "Offer in 24–72 hours", d: "Direct lines to admission offices mean fast answers and daily follow-up." },
  },
  {
    icon: Plane,
    ar: { t: "التأشيرة والاستقبال", d: "دعوة القبول، ملف الفيزا، الاستقبال في المطار، والتوصيل حتى باب سكنك." },
    en: { t: "Visa & airport pickup", d: "Acceptance letter, visa file, airport pickup and transfer to your door." },
  },
  {
    icon: Home,
    ar: { t: "السكن والإقامة", d: "نساعدك في إيجاد سكن آمن ومناسب لميزانيتك وإتمام معاملات الإقامة الطلابية." },
    en: { t: "Housing & residency", d: "We help you find safe, budget-friendly housing and complete your student residency." },
  },
  {
    icon: Headphones,
    ar: { t: "دعم بعد الوصول", d: "فريقنا في إسطنبول يبقى معك بعد التسجيل: تغيير تخصص، تحويل جامعة، أو أي مشكلة." },
    en: { t: "Support after arrival", d: "Our Istanbul team stays with you after enrolment: major change, transfer, or any issue." },
  },
  {
    icon: ShieldCheck,
    ar: { t: "شفافية كاملة", d: "أرقام الرسوم كما هي من الجامعة، بلا رسوم خفية ولا وعود غير واقعية." },
    en: { t: "Full transparency", d: "Tuition figures exactly as the university states — no hidden fees, no unrealistic promises." },
  },
];

const steps = {
  ar: ["استشارة مجانية وتحديد أهدافك", "ترشيح الجامعات والخصومات", "تجهيز الملف والتقديم", "استلام القبول ودفع المقدم", "التأشيرة والسفر والاستقبال", "التسجيل النهائي والسكن والإقامة"],
  en: ["Free consultation & goal setting", "University and scholarship shortlist", "File preparation & submission", "Offer letter and deposit", "Visa, travel and pickup", "Final registration, housing, residency"],
};

function WhyNexa() {
  const { t, lang, dir } = useI18n();

  return (
    <div dir={dir} className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <section className="relative overflow-hidden border-b border-border bg-[image:var(--gradient-surface)] py-16 md:py-24">
          <div className="nx-grid-bg pointer-events-none absolute inset-0 opacity-70" aria-hidden />
          <div className="nx-drift pointer-events-none absolute -top-28 right-1/4 h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl" aria-hidden />

          <div className="relative mx-auto max-w-[900px] px-4 text-center md:px-8">
            <span className="nx-pop inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-[12px] font-bold shadow-[var(--shadow-soft)]">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              NEXA Education
            </span>
            <h1 className="nx-fade-up mt-4 text-[36px] font-extrabold leading-tight md:text-[58px]">
              <span className="nx-gradient-text">{t("why.title")}</span>
            </h1>
            <p className="nx-fade-up mx-auto mt-4 max-w-[620px] text-[15px] leading-8 text-muted-foreground md:text-[17px]" style={{ animationDelay: "0.12s" }}>
              {t("why.subtitle")}
            </p>
            <div className="nx-fade-up mt-7 flex flex-wrap justify-center gap-3" style={{ animationDelay: "0.2s" }}>
              <Link
                to="/"
                hash="apply"
                className="nx-shine inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1"
              >
                <GraduationCap className="h-4 w-4" />
                {t("why.cta")}
              </Link>
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-bold transition-all hover:-translate-y-1 hover:border-primary"
              >
                <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
                {t("why.back")}
              </Link>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-background py-16">
          <div className="mx-auto grid max-w-[1280px] gap-4 px-4 md:grid-cols-2 md:px-8 lg:grid-cols-3">
            {reasons.map((r, i) => {
              const c = r[lang];
              return (
                <article key={c.t} className="nx-card nx-tilt nx-fade-up p-6" style={{ animationDelay: `${Math.min(i, 9) * 0.06}s` }}>
                  <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-[image:var(--gradient-brand)] text-primary-foreground">
                    <r.icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-[16px] font-extrabold">{c.t}</h2>
                  <p className="mt-2 text-[13px] leading-7 text-muted-foreground">{c.d}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="border-b border-border bg-surface py-16">
          <div className="mx-auto max-w-[900px] px-4 md:px-8">
            <h2 className="text-center text-[24px] font-extrabold md:text-[32px]">
              {lang === "ar" ? "رحلتك معنا في ٦ خطوات" : "Your journey in 6 steps"}
            </h2>
            <ol className="relative mt-10 space-y-6 border-border ltr:border-l rtl:border-r ltr:pl-8 rtl:pr-8">
              {steps[lang].map((s, i) => (
                <li key={s} className="nx-fade-up relative" style={{ animationDelay: `${i * 0.08}s` }}>
                  <span className="absolute top-1 grid h-8 w-8 place-items-center rounded-full bg-[image:var(--gradient-brand)] text-[13px] font-extrabold text-primary-foreground shadow-[var(--shadow-soft)] ltr:-left-12 rtl:-right-12">
                    {i + 1}
                  </span>
                  <div className="nx-card p-4 text-[14px] font-semibold">{s}</div>
                </li>
              ))}
            </ol>

            <div className="mt-12 text-center">
              <a
                href={waLink(lang === "ar" ? "لماذا نيكسا" : "Why NEXA")}
                target="_blank"
                rel="noopener noreferrer"
                className="nx-shine inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-1"
              >
                {t("why.cta")}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
