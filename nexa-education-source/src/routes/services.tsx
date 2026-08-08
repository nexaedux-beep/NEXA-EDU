import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, BadgeCheck, Clock, FileText, GraduationCap, Home, IdCard, ScrollText, Sparkles } from "lucide-react";
import { Header } from "@/components/nexa/header";
import { Footer } from "@/components/nexa/footer";
import { WhatsAppFab } from "@/components/nexa/whatsapp-fab";
import heroImg from "@/assets/services/services-hero.jpg";
import { services, type Service } from "@/data/services";
import { waLink } from "@/lib/site";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "خدمات الطلاب في تركيا | معادلة الشهادات والإقامة والسكن — NEXA" },
      {
        name: "description",
        content:
          "خدمات نيكسا التعليمية للطلاب الدوليين: معادلة الشهادة الثانوية (الدنكليك)، معادلة الشهادات الجامعية لدى YÖK، الإقامة الطلابية، والسكن الطلابي في تركيا وقبرص الشمالية.",
      },
      { property: "og:title", content: "خدمات الطلاب في تركيا | NEXA Education" },
      {
        property: "og:description",
        content: "معادلة الشهادات الثانوية والجامعية، الإقامة الطلابية والسكن — بإجراءات واضحة ومتابعة كاملة.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const icons = {
  certificate: ScrollText,
  graduation: GraduationCap,
  id: IdCard,
  home: Home,
} as const;

function ServiceBlock({ service, index }: { service: Service; index: number }) {
  const { t, lang, dir } = useI18n();
  const Icon = icons[service.icon];
  const flip = index % 2 === 1;

  return (
    <article id={service.slug} className="nx-fade-up scroll-mt-28">
      <div className={`grid items-center gap-8 lg:grid-cols-2 ${flip ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <div className="nx-card group relative overflow-hidden rounded-[28px] p-0">
          <img
            src={service.image}
            alt={service.name[lang]}
            width={1200}
            height={800}
            loading="lazy"
            className="h-[300px] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110 md:h-[380px]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <div className="absolute bottom-4 start-4 flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[11px] font-bold text-white backdrop-blur-md">
            <Icon className="h-3.5 w-3.5" />
            {service.name[lang]}
          </div>
        </div>

        <div className="min-w-0">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-[11px] font-bold text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            {t("svc.badge")}
          </span>
          <h2 className="mt-3 text-[22px] font-extrabold leading-snug md:text-[28px]">{service.name[lang]}</h2>
          <p className="mt-2 text-[13px] leading-7 text-muted-foreground">{service.overview[lang]}</p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="nx-card p-4">
              <div className="flex items-center gap-2 text-[12px] font-extrabold text-primary">
                <BadgeCheck className="h-4 w-4" />
                {t("svc.steps")}
              </div>
              <ol className="mt-3 space-y-2 text-[12.5px] leading-6 text-muted-foreground">
                {service.steps[lang].map((s, i) => (
                  <li key={s} className="flex gap-2">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/10 text-[10px] font-extrabold text-primary">
                      {i + 1}
                    </span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="nx-card p-4">
              <div className="flex items-center gap-2 text-[12px] font-extrabold text-primary">
                <FileText className="h-4 w-4" />
                {t("svc.documents")}
              </div>
              <ul className="mt-3 space-y-2 text-[12.5px] leading-6 text-muted-foreground">
                {service.documents[lang].map((d) => (
                  <li key={d} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex items-center gap-2 rounded-xl bg-surface px-3 py-2 text-[11.5px] font-semibold">
                <Clock className="h-3.5 w-3.5 text-primary" />
                {t("svc.duration")}: <span className="text-muted-foreground">{service.duration[lang]}</span>
              </div>
            </div>
          </div>

          <a
            href={waLink(`${t("svc.cta")}: ${service.name[lang]}`)}
            target="_blank"
            rel="noopener noreferrer"
            className="nx-btn mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-[13px] font-bold text-primary-foreground"
          >
            {t("svc.cta")}
            {dir === "rtl" ? <ArrowLeft className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
          </a>
        </div>
      </div>
    </article>
  );
}

function ServicesPage() {
  const { t, dir } = useI18n();
  const Back = dir === "rtl" ? ArrowRight : ArrowLeft;

  return (
    <div dir={dir} className="min-h-screen bg-background text-foreground">
      <Header />

      <main>
        <section className="relative overflow-hidden border-b border-border">
          <img src={heroImg} alt="" width={1600} height={900} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/85" />
          <div className="nx-drift absolute -top-28 -right-20 h-[420px] w-[420px] rounded-full bg-primary/25 blur-3xl" />

          <div className="relative mx-auto max-w-[1280px] px-4 py-16 md:px-8 md:py-24">
            <Link to="/" className="nx-press inline-flex items-center gap-2 text-[12px] font-bold text-white/80 hover:text-white">
              <Back className="h-4 w-4" />
              {t("why.back")}
            </Link>

            <div className="nx-rise mt-6 max-w-[760px] space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[12px] text-white backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5" />
                {t("svc.badge")}
              </span>
              <h1 className="text-[30px] font-extrabold leading-tight text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.55)] md:text-[46px]">
                {t("svc.pageTitle")}
              </h1>
              <p className="max-w-[640px] text-[14px] leading-8 text-white/85">{t("svc.pageDesc")}</p>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-[1280px] space-y-16 px-4 py-14 md:px-8 md:py-20">
          {services.map((s, i) => (
            <ServiceBlock key={s.slug} service={s} index={i} />
          ))}
        </div>
      </main>

      <Footer />
      <WhatsAppFab />
    </div>
  );
}
