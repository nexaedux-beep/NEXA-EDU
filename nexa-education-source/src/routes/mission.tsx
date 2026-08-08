import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck, Compass, FileCheck2, Handshake, Target, Wallet } from "lucide-react";
import { StoryPage } from "@/components/nexa/story-page";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/mission")({
  component: MissionPage,
  head: () => ({
    meta: [
      { title: "رسالتنا | NEXA Education — تعليم جامعي معترف به بلا وسطاء" },
      {
        name: "description",
        content: "رسالة نيكسا التعليمية: جعل الوصول إلى تعليم جامعي معترف به في تركيا وقبرص الشمالية بسيطاً وآمناً لكل طالب عربي، بلا رسوم ولا وسطاء.",
      },
      { property: "og:title", content: "رسالتنا | NEXA Education" },
      { property: "og:description", content: "تعليم جامعي معترف به، بخطوات واضحة وبلا رسوم على الطالب." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/mission" }],
  }),
});

function MissionPage() {
  const { lang } = useI18n();
  const ar = lang === "ar";

  return (
    <StoryPage
      eyebrow={ar ? "من نحن" : "About us"}
      title={ar ? "رسالتنا" : "Our mission"}
      lead={
        ar
          ? "أن نجعل الوصول إلى تعليم جامعي معترف به في تركيا وقبرص الشمالية بسيطاً وآمناً لكل طالب عربي — بمعلومة صادقة، وخطوات واضحة، وبلا رسوم ولا وسطاء."
          : "To make recognised university education in Türkiye and Northern Cyprus simple and safe for every Arab student — honest information, clear steps, no fees and no middlemen."
      }
      quote={
        ar
          ? "نجاحنا يُقاس بعدد الطلاب الذين تخرّجوا، لا بعدد الطلبات التي أرسلناها."
          : "We measure success by the students who graduated, not by the applications we sent."
      }
      blocks={[
        { icon: Target, t: ar ? "قرار مبني على معلومة" : "Decisions built on facts", d: ar ? "نعطيك مقارنة حقيقية بين الجامعات: الاعتماد، الرسوم، لغة الدراسة، وفرص العمل." : "A real comparison of accreditation, tuition, language of study and employability." },
        { icon: Wallet, t: ar ? "بلا عبء مالي" : "No financial burden", d: ar ? "خدمتنا مجانية للطالب بالكامل؛ الجامعة هي من يدفع عمولتنا." : "Our service is entirely free for students; universities pay our fee." },
        { icon: FileCheck2, t: ar ? "ملف يُقبل من أول مرة" : "A file accepted first time", d: ar ? "مراجعة الوثائق والترجمات قبل الإرسال لتفادي الرفض والتأخير." : "Documents and translations reviewed before submission to avoid rejection." },
        { icon: Compass, t: ar ? "مرافقة كاملة" : "End-to-end guidance", d: ar ? "من أول سؤال حتى أول يوم دراسي: القبول، الفيزا، السفر، السكن، الإقامة." : "From the first question to the first class: offer, visa, travel, housing, residency." },
        { icon: BadgeCheck, t: ar ? "جامعات معتمدة فقط" : "Accredited universities only", d: ar ? "لا نرشّح إلا مؤسسات معترفاً بها من YÖK ووزارات التعليم في بلدك." : "We only shortlist institutions recognised by YÖK and your home ministry." },
        { icon: Handshake, t: ar ? "التزام بعد الوصول" : "Commitment after arrival", d: ar ? "الرسالة لا تنتهي بالتسجيل: نبقى مرجعك خلال سنوات دراستك." : "Our mission doesn't end at enrolment: we remain your reference throughout your studies." },
      ]}
      listTitle={ar ? "كيف نحقق رسالتنا عملياً" : "How we deliver on it"}
      list={
        ar
          ? ["استشارة مجانية تبدأ بأهدافك لا بعمولتنا", "ترشيح ٣ خيارات جامعية بمقارنة مكتوبة", "تجهيز الملف والترجمات ومراجعتها", "متابعة القبول والخصم مع مكتب الجامعة", "ملف التأشيرة والسفر والاستقبال", "التسجيل النهائي والسكن والإقامة والمتابعة"]
          : ["A free consultation that starts with your goals", "Three university options with a written comparison", "File and translation preparation and review", "Offer and scholarship follow-up with the university", "Visa file, travel and airport pickup", "Final registration, housing, residency and follow-up"]
      }
    />
  );
}
