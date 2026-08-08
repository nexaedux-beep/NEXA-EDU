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
import { site } from "@/lib/site";

const HOME_TITLE = "نيكسا التعليمية | NEXA Education — الدراسة في تركيا وقبرص";
const HOME_DESC =
  "نيكسا التعليمية تساعدك في اختيار التخصص والجامعة والتقديم في أفضل الجامعات الخاصة في تركيا وقبرص الشمالية، مع استشارات تعليمية مجانية وخصومات حصرية.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: HOME_TITLE },
      { name: "description", content: HOME_DESC },
      { property: "og:title", content: HOME_TITLE },
      { property: "og:description", content: HOME_DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: HOME_TITLE },
      { name: "twitter:description", content: HOME_DESC },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "EducationalOrganization",
              "@id": "https://nexa-education.com/#organization",
              name: site.name,
              alternateName: site.nameAr,
              url: "https://nexa-education.com/",
              email: site.email,
              telephone: site.phone,
              address: {
                "@type": "PostalAddress",
                streetAddress: site.address,
                addressLocality: "Istanbul",
                addressCountry: "TR",
              },
              sameAs: [
                site.social.facebook,
                site.social.instagram,
                site.social.telegram,
                site.social.x,
              ],
            },
            {
              "@type": "WebSite",
              "@id": "https://nexa-education.com/#website",
              name: site.name,
              alternateName: site.nameAr,
              url: "https://nexa-education.com/",
              inLanguage: ["ar", "en"],
              publisher: { "@id": "https://nexa-education.com/#organization" },
            },
          ],
        }),
      },
    ],
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
