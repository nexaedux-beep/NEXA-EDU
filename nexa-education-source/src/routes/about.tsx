import { createFileRoute } from "@tanstack/react-router";
import { Building2, Globe2, HeartHandshake, Languages, ShieldCheck, Users } from "lucide-react";
import { StoryPage } from "@/components/nexa/story-page";
import { useI18n } from "@/lib/i18n";
import { universities } from "@/data/universities";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "من نحن | NEXA Education — وكيل قبولات جامعية في تركيا وقبرص" },
      {
        name: "description",
        content:
          "نبذة عن نيكسا التعليمية: فريق عربي‑تركي يرافق الطلبة الدوليين من اختيار التخصص حتى الاستقرار في تركيا وقبرص الشمالية، بخدمة مجانية بالكامل.",
      },
      { property: "og:title", content: "من نحن | NEXA Education" },
      { property: "og:description", content: "فريق عربي‑تركي يرافقك من اختيار التخصص حتى الاستقرار — خدمة مجانية بالكامل." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function AboutPage() {
  const { lang } = useI18n();
  const ar = lang === "ar";

  return (
    <StoryPage
      eyebrow={ar ? "من نحن" : "About us"}
      title={ar ? "نبذة عن نيكسا" : "About NEXA"}
      lead={
        ar
          ? "نيكسا التعليمية مكتب قبولات جامعية متخصص في تركيا وقبرص الشمالية. نعمل كممثل معتمد لعشرات الجامعات، فنقدّم للطالب استشارة محايدة، ترشيحاً دقيقاً، وخصومات حقيقية — دون أي رسوم على الطالب."
          : "NEXA Education is an admissions office specialised in Türkiye and Northern Cyprus. As an authorised representative for dozens of universities, we give students neutral advice, precise shortlisting and real scholarships — at zero cost to the student."
      }
      quote={
        ar
          ? "لسنا وسيطاً يبيع مقاعد جامعية — نحن فريق يبني مستقبل طالب واحد في كل مرة."
          : "We are not brokers selling seats — we are a team building one student's future at a time."
      }
      quoteBy={ar ? "فريق نيكسا التعليمية" : "The NEXA Education team"}
      stats={[
        { v: `${universities.length}+`, k: ar ? "جامعة شريكة" : "Partner universities" },
        { v: "75%", k: ar ? "أقصى خصم متاح" : "Maximum discount" },
        { v: "24–72h", k: ar ? "زمن إصدار القبول" : "Offer turnaround" },
        { v: "0$", k: ar ? "رسوم على الطالب" : "Student fees" },
      ]}
      blocks={[
        {
          icon: Users,
          t: ar ? "من نكون" : "Who we are",
          d: ar
            ? "مستشارون ومختصون ملفات، بعضهم درس في الجامعات نفسها التي نرشّحها، يعرفون الطريق من الداخل."
            : "Advisors and file specialists, many of them graduates of the very universities we recommend.",
        },
        {
          icon: Building2,
          t: ar ? "ماذا نفعل" : "What we do",
          d: ar
            ? "ترشيح الجامعة والتخصص، تجهيز الملف، متابعة القبول، التأشيرة، السكن، والإقامة الطلابية."
            : "University and program shortlisting, file preparation, offers, visas, housing and student residency.",
        },
        {
          icon: Languages,
          t: ar ? "بلغتك" : "In your language",
          d: ar
            ? "نتواصل بالعربية والتركية والإنجليزية، فلا تفقد أي تفصيل في مرحلة حساسة من حياتك."
            : "We work in Arabic, Turkish and English so nothing gets lost at a decisive moment.",
        },
        {
          icon: ShieldCheck,
          t: ar ? "شفافية بالأرقام" : "Transparent numbers",
          d: ar ? "نعرض الرسوم كما تصدرها الجامعة، بلا رسوم خفية ولا وعود غير واقعية." : "Tuition exactly as the university states it — no hidden fees, no fantasy promises.",
        },
        {
          icon: HeartHandshake,
          t: ar ? "علاقة تدوم" : "A lasting relationship",
          d: ar ? "متابعتنا لا تنتهي بالقبول: تحويل تخصص، تجديد إقامة، أو أي عقبة بعد الوصول." : "Our support doesn't end at the offer: transfers, residency renewals and post-arrival issues.",
        },
        {
          icon: Globe2,
          t: ar ? "حضورنا" : "Where we are",
          d: ar ? "مقرّنا في إسطنبول، وشبكتنا تغطي أنقرة وإزمير وأنطاليا وقبرص الشمالية." : "Based in Istanbul, with a network across Ankara, Izmir, Antalya and Northern Cyprus.",
        },
      ]}
    />
  );
}
