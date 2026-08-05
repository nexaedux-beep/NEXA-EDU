import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/nexa/header";
import { Hero } from "@/components/nexa/hero";
import { About } from "@/components/nexa/about";
import { Universities } from "@/components/nexa/universities";
import { ProgramsSection } from "@/components/nexa/programs-section";
import { VideoShowcase } from "@/components/nexa/video-showcase";

import { Offers } from "@/components/nexa/offers";
import { Reviews } from "@/components/nexa/reviews";
import { MapSection } from "@/components/nexa/map-section";
import { ApplyForm } from "@/components/nexa/apply-form";
import { Footer } from "@/components/nexa/footer";
import { WhatsAppFab } from "@/components/nexa/whatsapp-fab";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "NEXA Education — الدراسة في تركيا وقبرص | 67 جامعة خاصة" },
      {
        name: "description",
        content:
          "نيكسا التعليمية: قبولات جامعية في 67 جامعة خاصة في إسطنبول وأنقرة وإزمير وأنطاليا وقبرص الشمالية، بخصومات تصل إلى 75% واستشارة مجانية.",
      },
      { property: "og:title", content: "NEXA Education — الدراسة في تركيا وقبرص | 67 جامعة خاصة" },
      {
        property: "og:description",
        content: "نيكسا التعليمية: قبولات جامعية في 67 جامعة خاصة في إسطنبول وأنقرة وإزمير وأنطاليا وقبرص الشمالية، بخصومات تصل إلى 75% واستشارة مجانية.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  const { dir } = useI18n();
  return (
    <div dir={dir} className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <VideoShowcase />
        <ProgramsSection />
        <Universities />

        <Offers />
        <Reviews />
        <MapSection />
        <ApplyForm />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
