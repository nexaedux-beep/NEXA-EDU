import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Briefcase,
  CheckCircle2,
  Clock,
  GraduationCap,
  Languages,
  MessageCircle,
  Sparkles,
  Wallet,
  Building2,
} from "lucide-react";
import { Header } from "@/components/nexa/header";
import { Footer } from "@/components/nexa/footer";
import { WhatsAppFab } from "@/components/nexa/whatsapp-fab";
import { ProgramCard } from "@/components/nexa/program-card";
import { programBySlug, programs } from "@/data/programs";
import { useI18n } from "@/lib/i18n";
import { waLink } from "@/lib/site";

export const Route = createFileRoute("/programs/$slug")({
  loader: ({ params }) => {
    const program = programBySlug(params.slug);
    if (!program) throw notFound();
    return { slug: program.slug, title: program.name.ar, desc: program.short.ar };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "التخصص غير موجود | NEXA Education" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${loaderData.title} — الدراسة في تركيا وقبرص | NEXA Education`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.desc },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.desc },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProgramDetail,
  notFoundComponent: ProgramNotFound,
});

function ProgramNotFound() {
  const { t, dir } = useI18n();
  return (
    <div dir={dir} className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto max-w-[720px] px-4 py-24 text-center">
        <h1 className="text-[26px] font-extrabold">{t("prog.notfound")}</h1>
        <Link to="/programs" className="nx-btn mt-6 inline-flex rounded-full bg-primary px-6 py-3 text-[13px] font-bold text-primary-foreground">
          {t("prog.back")}
        </Link>
      </main>
      <Footer />
    </div>
  );
}

function InfoTile({ icon: Icon, label, value }: { icon: typeof Clock; label: string; value: string }) {
  return (
    <div className="nx-card flex items-center gap-3 p-4">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-accent text-primary">
        <Icon className="h-4 w-4" />
      </span>
      <div className="min-w-0">
        <div className="text-[11px] text-muted-foreground">{label}</div>
        <div className="truncate text-[13px] font-bold">{value}</div>
      </div>
    </div>
  );
}

function ListCard({
  icon: Icon,
  title,
  items,
  check,
}: {
  icon: typeof BookOpen;
  title: string;
  items: string[];
  check?: boolean;
}) {
  return (
    <div className="nx-card p-6">
      <h2 className="flex items-center gap-2 text-[16px] font-extrabold">
        <Icon className="h-4 w-4 text-primary" />
        {title}
      </h2>
      <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-[13px] leading-6 text-muted-foreground">
            {check ? (
              <CheckCircle2 className="mt-1 h-3.5 w-3.5 shrink-0 text-primary" />
            ) : (
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            )}
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProgramDetail() {
  const { slug } = Route.useParams();
  const { t, lang, dir } = useI18n();
  const program = programBySlug(slug);
  const Back = dir === "rtl" ? ArrowRight : ArrowLeft;

  if (!program) return <ProgramNotFound />;

  const related = programs.filter((p) => p.slug !== program.slug).slice(0, 4);

  return (
    <div dir={dir} className="min-h-screen bg-background text-foreground">
      <Header />

      <main>
        <section className="relative overflow-hidden border-b border-border">
          <img
            src={program.image}
            alt={program.name[lang]}
            width={1200}
            height={800}
            className="absolute inset-0 h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
          <div className="relative mx-auto max-w-[1280px] px-4 py-14 md:px-8 md:py-20">
            <Link
              to="/programs"
              className="nx-press inline-flex items-center gap-2 text-[12px] font-bold text-muted-foreground hover:text-primary"
            >
              <Back className="h-4 w-4" />
              {t("prog.back")}
            </Link>

            <span className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-[11px] font-bold text-primary">
              <GraduationCap className="h-3.5 w-3.5" />
              {program.field[lang]}
            </span>

            <h1 className="mt-3 max-w-[820px] text-[30px] font-extrabold leading-tight md:text-[44px]">
              {program.name[lang]}
            </h1>
            <p className="mt-3 max-w-[680px] text-[14px] leading-7 text-muted-foreground">{program.short[lang]}</p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/"
                hash="apply"
                className="nx-btn inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-[13px] font-bold text-primary-foreground"
              >
                {t("prog.apply")}
              </Link>
              <a
                href={waLink(program.name.ar)}
                target="_blank"
                rel="noopener noreferrer"
                className="nx-btn inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-[13px] font-bold hover:border-primary hover:text-primary"
              >
                <MessageCircle className="h-4 w-4" />
                {t("prog.ask")}
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1280px] px-4 py-12 md:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <InfoTile icon={Clock} label={t("prog.years")} value={`${program.years} ${t("prog.year")}`} />
            <InfoTile icon={GraduationCap} label={t("prog.degree")} value={program.degree[lang]} />
            <InfoTile icon={Languages} label={t("prog.lang")} value={program.langs[lang]} />
            <InfoTile icon={Wallet} label={t("prog.tuition")} value={program.tuition} />
          </div>

          <div className="nx-card mt-6 p-6">
            <h2 className="flex items-center gap-2 text-[16px] font-extrabold">
              <Sparkles className="h-4 w-4 text-primary" />
              {t("prog.overview")}
            </h2>
            <p className="mt-3 text-[13.5px] leading-8 text-muted-foreground">{program.overview[lang]}</p>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <ListCard icon={BookOpen} title={t("prog.courses")} items={program.courses[lang]} />
            <ListCard icon={Briefcase} title={t("prog.careers")} items={program.careers[lang]} check />
            <ListCard icon={Sparkles} title={t("prog.skills")} items={program.skills[lang]} check />
            <ListCard icon={CheckCircle2} title={t("prog.req")} items={program.requirements[lang]} check />
          </div>

          <div className="nx-card mt-6 p-6">
            <h2 className="flex items-center gap-2 text-[16px] font-extrabold">
              <Building2 className="h-4 w-4 text-primary" />
              {t("prog.unis")}
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {program.universities.map((name) => (
                <span
                  key={name}
                  dir="ltr"
                  className="rounded-full border border-border bg-surface px-3.5 py-2 text-[12px] font-semibold"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>

          <h2 className="mt-14 text-[20px] font-extrabold">{t("prog.related")}</h2>
          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => (
              <ProgramCard key={p.slug} program={p} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFab />
    </div>
  );
}
