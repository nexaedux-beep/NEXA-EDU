import { Link } from "@tanstack/react-router";
import { MessageCircle, Phone } from "lucide-react";
import logoStacked from "@/assets/nexa-logo-stacked.png.png";
import { site, waLink } from "@/lib/site";
import { SocialLinks } from "./social-links";

export function Footer() {
  return (
    <footer id="contact" className="bg-surface">
      <div className="mx-auto max-w-[1280px] px-4 py-14 md:px-8">
        <div className="nx-card flex flex-col items-center gap-4 p-8 text-center">
          <h2 className="text-[22px] font-extrabold md:text-[28px]">جاهز تبدأ رحلتك الجامعية؟</h2>
          <p className="max-w-[520px] text-[13px] text-muted-foreground">
            استشارة مجانية بالكامل، وتقييم ملفك خلال ٢٤ ساعة، وخصومات حصرية على الرسوم الدراسية.
          </p>
          <a
            href={waLink("بدء إجراءات القبول")}
            target="_blank"
            rel="noopener noreferrer"
            className="nx-shine inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-1"
          >
            <MessageCircle className="h-4 w-4" />
            ابدأ الآن عبر واتساب
          </a>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <img
                src={logoStacked}
                alt="شعار نيكسا التعليمية"
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

            <p className="text-[12px] leading-6 text-muted-foreground">
              وكيل معتمد لأفضل الجامعات الخاصة في تركيا وقبرص الشمالية.
            </p>
            <SocialLinks />
          </div>

          <div className="space-y-2 text-[13px]">
            <div className="font-bold">روابط سريعة</div>
            <a href="#universities" className="block text-muted-foreground transition-colors hover:text-primary">الجامعات</a>
            <a href="#reviews" className="block text-muted-foreground transition-colors hover:text-primary">آراء الطلاب</a>
            <a href="#map" className="block text-muted-foreground transition-colors hover:text-primary">المدن والمواقع</a>
            <Link to="/dashboard" className="block text-muted-foreground transition-colors hover:text-primary">لوحة التحكم</Link>
          </div>

          <div className="space-y-2 text-[13px]">
            <div className="font-bold">تواصل معنا</div>
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
            <a href={`mailto:${site.email}`} className="block text-muted-foreground transition-colors hover:text-primary">
              {site.email}
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-5 text-center text-[12px] text-muted-foreground">
          © 2026 {site.name} — جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
}
