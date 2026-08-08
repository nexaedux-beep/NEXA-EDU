import { createFileRoute } from "@tanstack/react-router";
import { Blocks, Handshake, HeartHandshake, Scale, ShieldCheck, Timer } from "lucide-react";
import { StoryPage } from "@/components/nexa/story-page";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/values")({
  component: ValuesPage,
  head: () => ({
    meta: [
      { title: "قيمنا | NEXA Education — صدق وحياد ومسؤولية" },
      {
        name: "description",
        content: "قيم نيكسا التعليمية: الصدق في الأرقام، الحياد في الترشيح، الاحترام في التعامل، والمسؤولية التي تستمر بعد وصول الطالب.",
      },
      { property: "og:title", content: "قيمنا | NEXA Education" },
      { property: "og:description", content: "صدق في الأرقام، حياد في الترشيح، ومسؤولية تستمر بعد الوصول." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/values" }],
  }),
});

function ValuesPage() {
  const { lang } = useI18n();
  const ar = lang === "ar";

  return (
    <StoryPage
      eyebrow={ar ? "من نحن" : "About us"}
      title={ar ? "قيمنا" : "Our values"}
      lead={
        ar
          ? "قيمنا ليست شعارات على الحائط، بل قواعد تحكم كل محادثة وكل ملف: الصدق في الأرقام، الحياد في الترشيح، الاحترام في التعامل، والمسؤولية حتى بعد وصول الطالب."
          : "Our values are not wall slogans — they are rules that govern every conversation and every file: honest numbers, neutral recommendations, respectful service and responsibility beyond arrival."
      }
      quote={ar ? "إذا لم يكن التخصص مناسباً لك، سنقول لك ذلك — حتى لو خسرنا الطلب." : "If a program isn't right for you, we will say so — even if it costs us the application."}
      blocks={[
        { icon: ShieldCheck, t: ar ? "الصدق" : "Honesty", d: ar ? "الرسوم والاعتمادات وفرص العمل كما هي، دون تلميع ولا تهويل." : "Fees, accreditation and job prospects exactly as they are." },
        { icon: Scale, t: ar ? "الحياد" : "Neutrality", d: ar ? "نرشّح الأفضل لملفك وميزانيتك، لا الأعلى عمولة." : "We recommend what fits your file and budget, not the highest commission." },
        { icon: HeartHandshake, t: ar ? "الاحترام" : "Respect", d: ar ? "كل طالب يُعامل كحالة خاصة، وكل سؤال يستحق إجابة كاملة." : "Every student is a distinct case and every question deserves a full answer." },
        { icon: Timer, t: ar ? "الالتزام بالوقت" : "Punctuality", d: ar ? "المواعيد الجامعية لا تنتظر: نتابع يومياً ونذكّرك بكل استحقاق." : "University deadlines don't wait: daily follow-up and reminders." },
        { icon: Handshake, t: ar ? "المسؤولية" : "Accountability", d: ar ? "إذا حدث خطأ نصلحه ونخبرك به، ولا نخفي شيئاً عن ملفك." : "If something goes wrong we fix it and tell you — nothing about your file is hidden." },
        { icon: Blocks, t: ar ? "التطوير المستمر" : "Continuous improvement", d: ar ? "نراجع تجربة كل طالب لنحسّن الخطوة التالية لمن يأتي بعده." : "We review each student's experience to improve the next student's journey." },
      ]}
    />
  );
}
