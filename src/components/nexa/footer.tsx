import { Link } from "@tanstack/react-router";
import { Mail, MessageCircle, Phone } from "lucide-react";
import logoStacked from "@/assets/nexa-logo-stacked.png.asset.json";
import { site, waLink } from "@/lib/site";
import { useI18n } from "@/lib/i18n";
import { SocialLinks } from "./social-links";

export function Footer() {
  const { t, dir } = useI18n();

  return (
    <footer id="contact" dir={dir} className="bg-surface">
      <div className="mx-auto max-w-[1280px] px-4 py-14 md:px-8">
        <div className="nx-card flex flex-col items-center gap-4 p-8 text-center">
          <h2 className="text-[22px] font-extrabold md:text-[28px]">{t("footer.cta.title")}</h2>
          <p className="max-w-[520px] text-[13px] text-muted-foreground">{t("footer.cta.desc")}</p>
          <a
            href={waLink(t("footer.cta.btn"))}
            target="_blank"
            rel="noopener noreferrer"
            className="nx-btn inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-bold text-primary-foreground"
          >
            <MessageCircle className="h-4 w-4" />
            {t("footer.cta.btn")}
          </a>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <img
                src={logoStacked.url}
                alt={site.name}
                width={92}
                height={104}
                loading="lazy"
                className="nx-logo h-16 w-auto object-contain"
              />
              <div>
                <div className="text-[15px] font-extrabold">{site.name}</div>
                <div className="text-[11px] text-muted-foreground">{site.nameAr}</div>
              </div>
            </div>

            <p className="text-[12px] leading-6 text-muted-foreground">{t("footer.tagline")}</p>
            <SocialLinks />
          </div>

          <div className="space-y-2 text-[13px]">
            <div className="font-bold">{t("footer.links")}</div>
            <Link to="/programs" className="nx-press block text-muted-foreground hover:text-primary">{t("nav.programs")}</Link>
            <a href="#universities" className="nx-press block text-muted-foreground hover:text-primary">{t("nav.universities")}</a>
            <a href="#offers" className="nx-press block text-muted-foreground hover:text-primary">{t("nav.offers")}</a>
            <a href="#reviews" className="nx-press block text-muted-foreground hover:text-primary">{t("nav.reviews")}</a>
            <a href="#map" className="nx-press block text-muted-foreground hover:text-primary">{t("nav.map")}</a>
            <Link to="/dashboard" className="nx-press block text-muted-foreground hover:text-primary">{t("nav.dashboard")}</Link>
          </div>

          <div className="space-y-2 text-[13px]">
            <div className="font-bold">{t("footer.contact")}</div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="h-4 w-4" /> <a href={`tel:${site.phone}`} dir="ltr" className="transition-colors hover:text-primary">{site.phone}</a>
            </div>
            <a
              href={site.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-muted-foreground transition-colors hover:text-primary"
            >
              {site.address}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
            >
              <Mail className="h-4 w-4 shrink-0" />
              <bdi dir="ltr" style={{ unicodeBidi: "isolate" }}>
                {site.email}
              </bdi>
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-5 text-center text-[12px] text-muted-foreground">
          © 2026 {site.name} — {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
}
