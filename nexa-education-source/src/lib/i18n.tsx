import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Lang = "ar" | "en";

export const languages: { id: Lang; label: string; short: string; dir: "rtl" | "ltr" }[] = [
  { id: "ar", label: "العربية", short: "ع", dir: "rtl" },
  { id: "en", label: "English", short: "EN", dir: "ltr" },
];

type Dict = Record<string, string>;

const ar: Dict = {
  "nav.about": "من نحن",
  "nav.why": "لماذا نيكسا",
  "nav.universities": "الجامعات",
  "nav.programs": "البرامج الدراسية",
  "nav.offers": "العروض",
  "nav.reviews": "آراء الطلاب",
  "nav.map": "مواقعنا",
  "nav.apply": "التسجيل",
  "nav.dashboard": "لوحة التحكم",
  "nav.menu": "القائمة",
  "nav.close": "إغلاق القائمة",

  "prog.title": "أهم البرامج الدراسية",
  "prog.desc": "نرشدك لاختيار البرنامج الأنسب عبر معلومات واضحة عن الدراسة ومتطلبات القبول",
  "prog.all": "عرض كافة التخصصات",
  "prog.details": "تفاصيل التخصص",
  "prog.years": "مدة الدراسة",
  "prog.year": "سنوات",
  "prog.degree": "الدرجة العلمية",
  "prog.lang": "لغة الدراسة",
  "prog.tuition": "الرسوم السنوية التقريبية",
  "prog.field": "المجال",
  "prog.overview": "نظرة عامة على التخصص",
  "prog.courses": "أبرز المواد الدراسية",
  "prog.careers": "فرص العمل بعد التخرج",
  "prog.skills": "المهارات التي تكتسبها",
  "prog.req": "متطلبات القبول",
  "prog.unis": "جامعات مقترحة لهذا التخصص",
  "prog.apply": "قدّم على هذا التخصص",
  "prog.ask": "استفسر عن التخصص",
  "prog.back": "كل التخصصات",
  "prog.related": "تخصصات أخرى قد تناسبك",
  "prog.pageTitle": "كافة التخصصات الدراسية",
  "prog.pageDesc": "استعرض التخصصات المتاحة في الجامعات الخاصة في تركيا وقبرص الشمالية، مع تفاصيل كاملة عن كل تخصص.",
  "prog.notfound": "التخصص غير موجود",

  "theme.light": "الوضع النهاري",
  "theme.dark": "الوضع الليلي",
  "lang.label": "لغة الموقع",

  "uni.more": "عرض المزيد من الجامعات",
  "uni.less": "عرض أقل",
  "video.badge": "جولة بصرية",
  "video.title": "تعرّف على تركيا وجامعاتها",
  "video.desc": "لقطات متحركة من إسطنبول والحرم الجامعي في أرقى الجامعات الخاصة في تركيا وقبرص.",
  "video.caption": "رفيقك من التسجيل حتى التخرّج",
  "hero.badge": "التسجيل مفتوح الآن — خصومات حصرية",
  "hero.title1": "ادرس في",
  "hero.title2": "أرقى الجامعات",
  "hero.title3": "الخاصة في تركيا وقبرص",
  "hero.desc":
    "جامعات خاصة مرتّبة بعناية: إسطنبول ٣٩ • أنقرة ٨ • إزمير ٣ • أنطاليا ٢ • قبرص الشمالية ١٥. قبول مضمون، خصومات حقيقية حتى ٧٥٪، واستشارة مجانية بالكامل.",
  "hero.cta1": "استعرض الجامعات",
  "hero.cta2": "تحدّث مع مستشار",
  "hero.scroll": "تابع للأسفل",
  "hero.captions": "صور من الأحرام الجامعية",
  "hero.slide": "الشريحة",
  "stat.students": "طالب مسجّل",
  "stat.universities": "جامعة شريكة",
  "stat.countries": "دولة",
  "stat.since": "نعمل منذ",

  "about.tag": "من نحن",
  "about.title": "نيكسا التعليمية — شريكك من أول سؤال حتى أول محاضرة",
  "about.desc":
    "نيكسا التعليمية مكتب استشارات ووكيل قبولات معتمد مقره إسطنبول، نرافق الطلبة العرب والدوليين في رحلتهم الجامعية في تركيا وقبرص الشمالية: اختيار التخصص، التقديم، الخصومات، التأشيرة، السكن والاستقبال في المطار.",
  "about.p1.t": "فريق متخصص",
  "about.p1.d": "مستشارون خبراء يتحدثون العربية والتركية والإنجليزية.",
  "about.p2.t": "اعتماد رسمي",
  "about.p2.d": "وكيل معتمد لدى الجامعات الخاصة المدرجة في مجلس التعليم العالي.",
  "about.p3.t": "خدمة مجانية",
  "about.p3.d": "كل خدماتنا مجانية للطالب — أتعابنا من الجامعة وليس منك.",
  "about.p4.t": "متابعة كاملة",
  "about.p4.d": "لا ننتهي عند القبول: نتابع معك حتى التسجيل والسكن والإقامة.",
  "about.cta": "لماذا نيكسا؟ اعرف أكثر",

  "uni.title": "الجامعات الخاصة المعتمدة",
  "uni.desc": "جامعة بأسمائها الكاملة وشعاراتها الرسمية — مرتبة حسب المدينة.",
  "uni.search": "ابحث عن جامعة أو مدينة…",
  "uni.empty": "لا توجد نتائج مطابقة للبحث.",
  "uni.discount": "خصم حتى",
  "uni.inquire": "استفسر الآن",
  "uni.all": "الكل",
  "uni.count": "جامعة",

  "offers.tag": "عروض وخصومات",
  "offers.title": "العروض الحالية",
  "offers.desc":
    "منح وخصومات محدودة على رسوم الجامعات الخاصة في تركيا وقبرص الشمالية. تُحدَّث العروض أولاً بأول — تواصل معنا لمعرفة العرض المناسب لملفك.",
  "offers.empty.title": "عروض جديدة قريباً",
  "offers.empty.desc": "سيتم نشر صور وتفاصيل العروض هنا فور توفرها.",
  "offers.cta": "اسأل عن العروض المتاحة",

  "rev.title": "آراء الطلاب",
  "rev.desc": "تجربة حقيقية لطلاب أنهوا قبولهم عبر نيكسا.",
  "rev.more": "أكثر من",
  "rev.rating": "تقييم ٤٫٩ من ٥",

  "map.title": "أين تدرس؟ اختر مدينتك",
  "map.desc":
    "نغطي أهم المدن الجامعية في تركيا وقبرص الشمالية، مع مكتب رئيسي في إسطنبول لاستقبال الطلاب ومتابعة كامل إجراءات القبول والإقامة.",
  "map.office": "مكتب نيكسا الرئيسي",
  "map.hours": "يومياً ٠٩:٠٠ — ٢١:٠٠ بتوقيت إسطنبول",
  "map.book": "احجز موعد استشارة",
  "map.directions": "الاتجاهات على الخريطة",
  "map.officeLoc": "موقع المكتب — إسنيورت، إسطنبول",
  "map.openMaps": "فتح في خرائط جوجل",
  "city.istanbul": "إسطنبول",
  "city.ankara": "أنقرة",
  "city.izmir": "إزمير",
  "city.antalya": "أنطاليا",
  "city.cyprus": "قبرص الشمالية",
  "city.istanbul.note": "قلب الحياة الجامعية والمكتب الرئيسي",
  "city.ankara.note": "العاصمة ومركز الجامعات البحثية",
  "city.izmir.note": "مدينة ساحلية هادئة ومناسبة للدراسة",
  "city.antalya.note": "دراسة على البحر المتوسط",
  "city.cyprus.note": "تكلفة أقل وشهادات معترف بها",

  "apply.badge": "التسجيل مجاني بالكامل",
  "apply.title1": "نموذج",
  "apply.title2": "التسجيل",
  "apply.title3": "والتقديم",
  "apply.intro": "املأ بياناتك وسيصلنا طلبك مباشرة، ويتواصل معك مستشار مختص خلال ٢٤ ساعة لترشيح أنسب الجامعات والخصومات المتاحة.",
  "apply.b1": "استشارة مجانية وتقييم للملف",
  "apply.b2": "خصومات حصرية حتى ٧٥٪",
  "apply.b3": "متابعة القبول والتأشيرة والسكن",
  "apply.sec1": "البيانات الشخصية",
  "apply.sec2": "التفضيلات الدراسية",
  "apply.fullName": "الاسم الكامل",
  "apply.phone": "رقم الهاتف / واتساب",
  "apply.email": "البريد الإلكتروني",
  "apply.nationality": "الجنسية",
  "apply.level": "المرحلة الدراسية",
  "apply.levelPh": "اختر المرحلة",
  "apply.language": "لغة الدراسة",
  "apply.languagePh": "اختر اللغة",
  "apply.university": "الجامعة المرغوبة (اختياري)",
  "apply.universityPh": "ابحث عن جامعة",
  "apply.major": "التخصص المرغوب",
  "apply.majorPh": "التخصص المرغوب",
  "apply.notes": "ملاحظات إضافية (اختياري)",
  "apply.notesPh": "أي تفاصيل تساعدنا في خدمتك",
  "apply.send": "إرسال الطلب بالبريد",
  "apply.wa": "إرسال عبر واتساب",
  "apply.done": "تم تجهيز طلبك — أكمل الإرسال من التطبيق الذي فُتح لديك.",
  "apply.or": "أو تواصل مباشرة عبر",
  "apply.orMail": "أو",

  "footer.cta.title": "جاهز تبدأ رحلتك الجامعية؟",
  "footer.cta.desc": "استشارة مجانية بالكامل، وتقييم ملفك خلال ٢٤ ساعة، وخصومات حصرية على الرسوم الدراسية.",
  "footer.cta.btn": "ابدأ الآن عبر واتساب",
  "footer.links": "روابط سريعة",
  "footer.contact": "تواصل معنا",
  "footer.tagline": "وكيل قبولات معتمد لأفضل الجامعات الخاصة في تركيا وقبرص الشمالية.",
  "footer.rights": "جميع الحقوق محفوظة.",
  "wa.float": "تواصل معنا على واتساب",

  "why.title": "لماذا نيكسا؟",
  "why.subtitle": "لأن رحلتك الجامعية تستحق فريقاً لا يترك أي تفصيل للصدفة.",
  "why.back": "العودة للرئيسية",
  "why.cta": "ابدأ طلبك الآن",
};

const en: Dict = {
  "nav.about": "About us",
  "nav.why": "Why NEXA",
  "nav.universities": "Universities",
  "nav.programs": "Programs",
  "nav.offers": "Offers",
  "nav.reviews": "Reviews",
  "nav.map": "Locations",
  "nav.apply": "Apply",
  "nav.dashboard": "Dashboard",
  "nav.menu": "Menu",
  "nav.close": "Close menu",

  "prog.title": "Top study programs",
  "prog.desc": "We guide you to the right program with clear information about the studies and admission requirements",
  "prog.all": "View all programs",
  "prog.details": "Program details",
  "prog.years": "Duration",
  "prog.year": "years",
  "prog.degree": "Degree awarded",
  "prog.lang": "Language of study",
  "prog.tuition": "Approx. yearly tuition",
  "prog.field": "Field",
  "prog.overview": "Program overview",
  "prog.courses": "Key courses",
  "prog.careers": "Career opportunities",
  "prog.skills": "Skills you gain",
  "prog.req": "Admission requirements",
  "prog.unis": "Recommended universities",
  "prog.apply": "Apply for this program",
  "prog.ask": "Ask about this program",
  "prog.back": "All programs",
  "prog.related": "Other programs you may like",
  "prog.pageTitle": "All study programs",
  "prog.pageDesc": "Browse the programs available at private universities in Türkiye and Northern Cyprus, with full details for each one.",
  "prog.notfound": "Program not found",

  "theme.light": "Light mode",
  "theme.dark": "Dark mode",
  "lang.label": "Site language",

  "uni.more": "Show more universities",
  "uni.less": "Show less",
  "video.badge": "Visual tour",
  "video.title": "Discover Türkiye and its universities",
  "video.desc": "Cinematic frames from Istanbul and the campuses of the finest private universities in Türkiye and Cyprus.",
  "video.caption": "With you from application to graduation",
  "hero.badge": "Applications open — exclusive scholarships",
  "hero.title1": "Study at the",
  "hero.title2": "finest private",
  "hero.title3": "universities in Türkiye & Cyprus",
  "hero.desc":
    "Carefully curated private universities: Istanbul 39 • Ankara 8 • Izmir 3 • Antalya 2 • Northern Cyprus 15. Guaranteed admission, real discounts up to 75%, and fully free consulting.",
  "hero.cta1": "Browse universities",
  "hero.cta2": "Talk to an advisor",
  "hero.scroll": "Scroll down",
  "hero.captions": "Campus photography",
  "hero.slide": "Slide",
  "stat.students": "Enrolled students",
  "stat.universities": "Partner universities",
  "stat.countries": "Countries",
  "stat.since": "Serving since",

  "about.tag": "About us",
  "about.title": "NEXA Education — with you from the first question to the first lecture",
  "about.desc":
    "NEXA Education is an Istanbul-based consultancy and certified admissions agent. We guide Arab and international students through their journey in Türkiye and Northern Cyprus: choosing a major, applying, scholarships, visa, housing and airport pickup.",
  "about.p1.t": "Specialised team",
  "about.p1.d": "Expert advisors fluent in Arabic, Turkish and English.",
  "about.p2.t": "Official accreditation",
  "about.p2.d": "Certified agent for private universities listed by the Higher Education Council.",
  "about.p3.t": "Free of charge",
  "about.p3.d": "All our services are free for students — universities pay our fees, not you.",
  "about.p4.t": "End-to-end care",
  "about.p4.d": "We don't stop at the offer letter: registration, housing and residency included.",
  "about.cta": "Why NEXA? Learn more",

  "uni.title": "Accredited private universities",
  "uni.desc": "universities with full official names and logos — sorted by city.",
  "uni.search": "Search a university or city…",
  "uni.empty": "No matching results.",
  "uni.discount": "Up to",
  "uni.inquire": "Enquire now",
  "uni.all": "All",
  "uni.count": "universities",

  "offers.tag": "Offers & scholarships",
  "offers.title": "Current offers",
  "offers.desc":
    "Limited scholarships and tuition discounts across private universities in Türkiye and Northern Cyprus. Offers are updated regularly — contact us to find the one that fits your profile.",
  "offers.empty.title": "New offers coming soon",
  "offers.empty.desc": "Offer visuals and details will be published here as soon as they are available.",
  "offers.cta": "Ask about available offers",

  "rev.title": "Student reviews",
  "rev.desc": "real experiences from students admitted through NEXA.",
  "rev.more": "More than",
  "rev.rating": "Rated 4.9 / 5",

  "map.title": "Where will you study? Pick your city",
  "map.desc":
    "We cover the main university cities in Türkiye and Northern Cyprus, with a head office in Istanbul that welcomes students and handles the full admission and residency process.",
  "map.office": "NEXA head office",
  "map.hours": "Daily 09:00 — 21:00 Istanbul time",
  "map.book": "Book a consultation",
  "map.directions": "Get directions",
  "map.officeLoc": "Office location — Esenyurt, Istanbul",
  "map.openMaps": "Open in Google Maps",
  "city.istanbul": "Istanbul",
  "city.ankara": "Ankara",
  "city.izmir": "Izmir",
  "city.antalya": "Antalya",
  "city.cyprus": "Northern Cyprus",
  "city.istanbul.note": "The heart of student life and our head office",
  "city.ankara.note": "The capital and hub of research universities",
  "city.izmir.note": "A calm coastal city, ideal for studying",
  "city.antalya.note": "Study on the Mediterranean coast",
  "city.cyprus.note": "Lower costs and recognised degrees",

  "apply.badge": "Applying is completely free",
  "apply.title1": "Application",
  "apply.title2": "registration",
  "apply.title3": "form",
  "apply.intro": "Fill in your details and your request reaches us directly. A dedicated advisor replies within 24 hours with the best-matching universities and discounts.",
  "apply.b1": "Free consultation and profile review",
  "apply.b2": "Exclusive discounts up to 75%",
  "apply.b3": "Admission, visa and housing follow-up",
  "apply.sec1": "Personal details",
  "apply.sec2": "Study preferences",
  "apply.fullName": "Full name",
  "apply.phone": "Phone / WhatsApp",
  "apply.email": "Email address",
  "apply.nationality": "Nationality",
  "apply.level": "Study level",
  "apply.levelPh": "Select level",
  "apply.language": "Language of study",
  "apply.languagePh": "Select language",
  "apply.university": "Preferred university (optional)",
  "apply.universityPh": "Search a university",
  "apply.major": "Preferred major",
  "apply.majorPh": "Preferred major",
  "apply.notes": "Additional notes (optional)",
  "apply.notesPh": "Anything that helps us serve you better",
  "apply.send": "Send by email",
  "apply.wa": "Send via WhatsApp",
  "apply.done": "Your request is ready — finish sending it in the app that opened.",
  "apply.or": "Or contact us directly on",
  "apply.orMail": "or",

  "footer.cta.title": "Ready to start your university journey?",
  "footer.cta.desc": "Completely free consulting, file review within 24 hours, and exclusive tuition discounts.",
  "footer.cta.btn": "Start now on WhatsApp",
  "footer.links": "Quick links",
  "footer.contact": "Contact us",
  "footer.tagline": "Certified admissions agent for the best private universities in Türkiye and Northern Cyprus.",
  "footer.rights": "All rights reserved.",
  "wa.float": "Chat with us on WhatsApp",

  "why.title": "Why NEXA?",
  "why.subtitle": "Because your university journey deserves a team that leaves nothing to chance.",
  "why.back": "Back to home",
  "why.cta": "Start your application",
};

const dicts: Record<Lang, Dict> = { ar, en };

type Ctx = { lang: Lang; dir: "rtl" | "ltr"; setLang: (l: Lang) => void; t: (key: string) => string };

const I18nContext = createContext<Ctx>({ lang: "ar", dir: "rtl", setLang: () => {}, t: (k) => ar[k] ?? k });

const STORAGE_KEY = "nexa-lang";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ar");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? (localStorage.getItem(STORAGE_KEY) as Lang | null) : null;
    if (saved && saved in dicts) setLangState(saved);
  }, []);

  const dir: "rtl" | "ltr" = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  }, []);

  const t = useCallback((key: string) => dicts[lang][key] ?? ar[key] ?? key, [lang]);

  const value = useMemo(() => ({ lang, dir, setLang, t }), [lang, dir, setLang, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export const useI18n = () => useContext(I18nContext);
