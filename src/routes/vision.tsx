import { createFileRoute } from "@tanstack/react-router";
import { Eye, Globe2, GraduationCap, LineChart, Network, Sparkles } from "lucide-react";
import { StoryPage } from "@/components/nexa/story-page";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/vision")({
  component: VisionPage,
  head: () => ({
    meta: [
      { title: "رؤيتنا | NEXA Education — المرجع الأول للطلبة الدوليين" },
      {
        name: "description",
        content: "رؤية نيكسا التعليمية: أن نكون المرجع الأول للطلبة الدوليين في تركيا وقبرص الشمالية بمعايير شفافية ومهنية تُقاس بنجاح الطلاب.",
      },
      { property: "og:title", content: "رؤيتنا | NEXA Education" },
      { property: "og:description", content: "المرجع الأول للطلبة الدوليين في تركيا وقبرص الشمالية." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/vision" }],
  }),
});

function VisionPage() {
  const { lang } = useI18n();
  const ar = lang === "ar";

  return (
    <StoryPage
      eyebrow={ar ? "من نحن" : "About us"}
      title={ar ? "رؤيتنا" : "Our vision"}
      lead={
        ar
          ? "أن نكون المرجع الأول للطلبة الدوليين في تركيا وقبرص الشمالية: مؤسسة تُقاس بمعايير الشفافية والمهنية، ويقاس نجاحها بنجاح طلابها لا بعدد طلباتها."
          : "To be the first reference for international students in Türkiye and Northern Cyprus: an institution judged by transparency and professionalism, and measured by its students' success."
      }
      quote={ar ? "نبني اسماً يثق به الطالب قبل أن يثق به السوق." : "We build a name students trust before the market does."}
      blocks={[
        { icon: Eye, t: ar ? "وضوح مطلق" : "Absolute clarity", d: ar ? "معلومة واحدة صحيحة للجميع: نفس الرسوم، نفس الشروط، نفس الجواب." : "One accurate answer for everyone: same fees, same conditions, same reply." },
        { icon: GraduationCap, t: ar ? "طالب ناجح لا ملف مغلق" : "Successful students, not closed files", d: ar ? "هدفنا التخرّج والتوظيف، لا مجرد إتمام التسجيل." : "Our goal is graduation and employment, not just a completed enrolment." },
        { icon: Network, t: ar ? "شبكة أوسع" : "A wider network", d: ar ? "توسيع الشراكات مع الجامعات ذات الاعتماد الدولي في المنطقة." : "Expanding partnerships with internationally accredited universities in the region." },
        { icon: LineChart, t: ar ? "خدمة رقمية" : "A digital experience", d: ar ? "منصة تتيح للطالب متابعة ملفه وقبوله ومواعيده لحظة بلحظة." : "A platform where students track their file, offer and deadlines in real time." },
        { icon: Globe2, t: ar ? "امتداد إقليمي" : "Regional reach", d: ar ? "حضور يخدم الطلبة من الخليج وشمال أفريقيا وبلاد الشام بالجودة نفسها." : "Serving students from the Gulf, North Africa and the Levant with the same standard." },
        { icon: Sparkles, t: ar ? "معيار مهني جديد" : "A new professional standard", d: ar ? "أن يصبح الحياد في الترشيح قاعدة في هذا القطاع، لا استثناءً." : "Making neutral advice the industry norm rather than the exception." },
      ]}
      listTitle={ar ? "أهدافنا القادمة" : "What we are working toward"}
      list={
        ar
          ? ["توسيع شبكة الجامعات المعتمدة سنوياً", "لوحة متابعة رقمية لكل طالب", "برنامج إرشاد للطلبة الجدد بعد الوصول", "شراكات تدريب وتوظيف مع جهات في تركيا"]
          : ["Growing our accredited university network each year", "A digital tracking dashboard for every student", "A post-arrival mentoring program", "Internship and employment partnerships in Türkiye"]
      }
    />
  );
}
