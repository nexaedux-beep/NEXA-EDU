import denklikHighSchool from "@/assets/services/denklik-high-school.jpg";
import denklikUniversity from "@/assets/services/denklik-university.jpg";
import residencePermit from "@/assets/services/residence-permit.jpg";
import studentHousing from "@/assets/services/student-housing.jpg";

export type Bi = { ar: string; en: string };
export type BiList = { ar: string[]; en: string[] };

export interface Service {
  slug: string;
  image: string;
  icon: "certificate" | "graduation" | "id" | "home";
  name: Bi;
  short: Bi;
  overview: Bi;
  steps: BiList;
  documents: BiList;
  duration: Bi;
}

export const services: Service[] = [
  {
    slug: "high-school-equivalency",
    image: denklikHighSchool,
    icon: "certificate",
    name: { ar: "معادلة الشهادة الثانوية في تركيا", en: "High-School Diploma Equivalency (Denklik)" },
    short: {
      ar: "استخراج وثيقة الدنكليك من مديرية التربية أو القنصلية التركية بأسرع وقت.",
      en: "Obtaining the Denklik document from the Turkish education directorate or consulate.",
    },
    overview: {
      ar: "معادلة الشهادة الثانوية (Denklik) شرط أساسي للتسجيل في أي جامعة تركية حكومية أو خاصة، وهي وثيقة رسمية تُثبت أن شهادتك الثانوية تعادل الثانوية التركية. نتولى عنك تجهيز الملف كاملاً، وترجمة الوثائق وتصديقها، وحجز الموعد ومتابعة الطلب لدى مديرية التربية الوطنية (İl Millî Eğitim Müdürlüğü) حتى استلام الوثيقة بيدك.",
      en: "The high-school equivalency certificate (Denklik) is a mandatory requirement for enrolling at any Turkish university, public or private. It officially confirms your diploma is equivalent to the Turkish high-school diploma. We prepare the full file, translate and certify documents, book the appointment and follow the application at the Provincial Directorate of National Education until the certificate is in your hands.",
    },
    steps: {
      ar: [
        "مراجعة شهادتك الثانوية وكشف العلامات والتأكد من صحتها",
        "الترجمة المحلفة إلى التركية والتصديق لدى كاتب العدل (النوتر)",
        "تجهيز الملف وحجز الموعد الإلكتروني",
        "مرافقتك أو التقديم بالوكالة لدى مديرية التربية",
        "متابعة الطلب واستلام وثيقة الدنكليك وتسليمها لك",
      ],
      en: [
        "Reviewing your diploma and transcript for validity",
        "Sworn translation into Turkish and notarisation",
        "File preparation and online appointment booking",
        "Accompanying you or applying by power of attorney",
        "Following the request and delivering the Denklik document",
      ],
    },
    documents: {
      ar: ["الشهادة الثانوية الأصلية", "كشف العلامات", "جواز السفر", "صورة شخصية", "تصديق الخارجية أو القنصلية عند الحاجة"],
      en: ["Original high-school diploma", "Transcript of records", "Passport", "Personal photo", "Ministry/consulate attestation when required"],
    },
    duration: { ar: "من ٣ أيام إلى أسبوعين", en: "3 days to 2 weeks" },
  },
  {
    slug: "university-degree-equivalency",
    image: denklikUniversity,
    icon: "graduation",
    name: { ar: "معادلة الشهادات الجامعية في تركيا", en: "University Degree Equivalency (YÖK)" },
    short: {
      ar: "معادلة البكالوريوس والماجستير لدى مجلس التعليم العالي التركي YÖK.",
      en: "Bachelor's and master's recognition through the Turkish Higher Education Council (YÖK).",
    },
    overview: {
      ar: "معادلة الشهادة الجامعية تتم عبر مجلس التعليم العالي التركي (YÖK) وهي ضرورية لمتابعة الدراسات العليا أو العمل في تركيا. الإجراء دقيق ويحتاج ملفاً مرتباً: خطة دراسية معتمدة، وساعات معتمدة، وترجمات محلّفة. نرشدك خطوة بخطوة، ونجهز الملف بالشكل الذي يقلل احتمالات الرفض أو طلب امتحان SYBS.",
      en: "University degree recognition is handled by the Turkish Higher Education Council (YÖK) and is required for postgraduate study or employment in Türkiye. The process is exacting and needs an organised file: approved curriculum, credit hours and sworn translations. We guide you step by step and build the file to minimise rejection or an SYBS exam request.",
    },
    steps: {
      ar: [
        "تقييم مبدئي للشهادة والجامعة ومدى قبولها لدى YÖK",
        "تجهيز الخطة الدراسية (Transcript + Course Content) وترجمتها",
        "تصديق الوثائق وفتح ملف إلكتروني على منصة YÖK",
        "تسليم الملف الورقي ومتابعة القرار",
        "التوجيه في حال طُلب امتحان معادلة أو استكمال مواد",
      ],
      en: [
        "Initial assessment of the degree and university against YÖK criteria",
        "Preparing transcript and course-content file with translations",
        "Document certification and opening the YÖK online file",
        "Submitting the physical file and tracking the decision",
        "Guidance if an equivalency exam or extra courses are requested",
      ],
    },
    documents: {
      ar: ["شهادة البكالوريوس/الماجستير", "كشف العلامات الرسمي", "محتوى المواد الدراسية", "جواز السفر", "وثيقة الإقامة إن وُجدت"],
      en: ["Bachelor's/master's certificate", "Official transcript", "Course content descriptions", "Passport", "Residence document if available"],
    },
    duration: { ar: "من ١ إلى ٦ أشهر حسب الملف", en: "1 to 6 months depending on the file" },
  },
  {
    slug: "residence-permit",
    image: residencePermit,
    icon: "id",
    name: { ar: "خدمات الإقامة الطلابية", en: "Student Residence Permit Services" },
    short: {
      ar: "تجهيز ملف الإقامة الطلابية وحجز الموعد والمتابعة حتى استلام الكيمليك.",
      en: "Preparing the residence file, booking the appointment and tracking until the Kimlik arrives.",
    },
    overview: {
      ar: "بعد التسجيل في الجامعة يجب استخراج الإقامة الطلابية (Öğrenci İkamet) خلال المدة القانونية. نتولى تعبئة الطلب على منصة الهجرة، وحجز الموعد، وتجهيز التأمين الصحي، ومراجعة العنوان المسجل، ومرافقتك في الموعد، ومتابعة البطاقة حتى وصولها إلى عنوانك.",
      en: "After university enrolment you must obtain the student residence permit (Öğrenci İkamet) within the legal period. We complete the application on the immigration portal, book the appointment, arrange health insurance, verify your registered address, accompany you at the appointment, and track the card until it reaches your address.",
    },
    steps: {
      ar: [
        "فتح الطلب على منصة الهجرة (e-ikamet) وحجز الموعد",
        "إصدار التأمين الصحي الطلابي",
        "تسجيل العنوان وإثبات السكن",
        "المرافقة في موعد دائرة الهجرة",
        "متابعة البطاقة وتسليمها",
      ],
      en: [
        "Opening the e-ikamet application and booking the appointment",
        "Issuing student health insurance",
        "Address registration and proof of accommodation",
        "Accompaniment at the immigration appointment",
        "Tracking and delivering the card",
      ],
    },
    documents: {
      ar: ["جواز السفر وصور عنه", "وثيقة الطالب من الجامعة", "٤ صور بيومترية", "التأمين الصحي", "عقد السكن أو وثيقة العنوان"],
      en: ["Passport and copies", "Student certificate from the university", "4 biometric photos", "Health insurance", "Rental contract or address document"],
    },
    duration: { ar: "الموعد خلال أيام، والبطاقة خلال ٤–٨ أسابيع", en: "Appointment within days, card in 4–8 weeks" },
  },
  {
    slug: "student-housing",
    image: studentHousing,
    icon: "home",
    name: { ar: "السكن الطلابي", en: "Student Housing" },
    short: {
      ar: "سكنات طلابية وشقق مفروشة قريبة من الجامعة بأسعار مدروسة.",
      en: "Dormitories and furnished apartments near campus at fair prices.",
    },
    overview: {
      ar: "نساعدك في اختيار السكن المناسب قبل وصولك: سكنات طلابية خاصة أو حكومية، أو شقق مشتركة ومفروشة قريبة من الحرم الجامعي وخطوط المواصلات. نراجع العقد معك، ونوضح المصاريف الحقيقية (الإيجار، الفواتير، التأمين) لتجنّب أي مفاجآت، مع خدمة استقبال من المطار وتوصيلك إلى السكن.",
      en: "We help you choose the right accommodation before you arrive: private or state dormitories, or shared and furnished apartments close to campus and transport lines. We review the contract with you and clarify real costs (rent, bills, deposit) so there are no surprises — plus airport pickup and transfer to your residence.",
    },
    steps: {
      ar: [
        "تحديد الميزانية والمنطقة المفضلة",
        "ترشيح خيارات سكن موثوقة مع صور وتفاصيل",
        "الحجز المبكر وتثبيت الغرفة",
        "مراجعة العقد وشرح الشروط",
        "الاستقبال من المطار والتوصيل إلى السكن",
      ],
      en: [
        "Setting the budget and preferred area",
        "Shortlisting trusted options with photos and details",
        "Early booking and room reservation",
        "Contract review and terms explanation",
        "Airport pickup and transfer to the residence",
      ],
    },
    documents: {
      ar: ["جواز السفر", "وثيقة القبول الجامعي", "دفعة الحجز حسب السكن"],
      en: ["Passport", "University acceptance letter", "Reservation deposit as required"],
    },
    duration: { ar: "الحجز خلال ٢٤–٧٢ ساعة", en: "Booking within 24–72 hours" },
  },
];
