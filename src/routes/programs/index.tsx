import { createFileRoute, Link } from "@tanstack/react-router";
import { GraduationCap, ArrowLeft, ArrowRight } from "lucide-react";
import { Header } from "@/components/nexa/header";
import { Footer } from "@/components/nexa/footer";
import { WhatsAppFab } from "@/components/nexa/whatsapp-fab";
import { ProgramCard } from "@/components/nexa/program-card";
import { programs } from "@/data/programs";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/programs/")({
  component: ProgramsPage,
  head: () => ({
    meta: [
      { title: "التخصصات الدراسية في تركيا وقبرص | NEXA Education" },
      {
        name: "description",
        content:
          "دليل شامل لأهم التخصصات الجامعية في تركيا وقبرص الشمالية: الطب، الأسنان، الصيدلة، الهندسة، إدارة الأعمال وغيرها مع الرسوم ومتطلبات القبول.",
      },
      { property: "og:title", content: "التخصصات الدراسية في تركيا وقبرص | NEXA Education" },
      {
        property: "og:description",
        content: "أهم البرامج الدراسية في الجامعات الخاصة التركية والقبرصية مع تفاصيل كل تخصص.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function ProgramsPage() {
  const { t, dir } = useI18n();
  const Back = dir === "rtl" ? ArrowRight : ArrowLeft;

  return (
    <div dir={dir} className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto max-w-[1280px] px-4 py-14 md:px-8">
        <Link to="/" className="nx-press inline-flex items-center gap-2 text-[12px] font-bold text-muted-foreground hover:text-primary">
          <Back className="h-4 w-4" />
          {t("why.back")}
        </Link>

        <div className="mt-5 flex flex-col gap-3">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-[11px] font-bold text-primary">
            <GraduationCap className="h-3.5 w-3.5" />
            {t("prog.title")}
          </span>
          <h1 className="text-[28px] font-extrabold md:text-[38px]">{t("prog.pageTitle")}</h1>
          <p className="max-w-[720px] text-[13px] leading-7 text-muted-foreground">{t("prog.pageDesc")}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {programs.map((p) => (
            <ProgramCard key={p.slug} program={p} />
          ))}
        </div>
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
