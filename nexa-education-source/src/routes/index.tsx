import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/nexa/header";
import { Hero } from "@/components/nexa/hero";
import { Universities } from "@/components/nexa/universities";
import { Reviews } from "@/components/nexa/reviews";
import { MapSection } from "@/components/nexa/map-section";
import { Footer } from "@/components/nexa/footer";

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
  return (
    <div dir="rtl" className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Universities />
        <Reviews />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
}
