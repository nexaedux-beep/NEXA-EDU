import type { Program } from "./programs";
import medicalImaging from "@/assets/programs/medical-imaging.jpg";
import anesthesia from "@/assets/programs/anesthesia.jpg";
import paramedic from "@/assets/programs/paramedic.jpg";
import operatingRoom from "@/assets/programs/operating-room.jpg";
import dentalProsthetics from "@/assets/programs/dental-prosthetics.jpg";
import medicalLab from "@/assets/programs/medical-lab.jpg";

const field = { ar: "دبلومات الصحة (سنتان)", en: "Health diplomas (2 years)" };
const langs = { ar: "تركي / إنجليزي", en: "Turkish / English" };
const req = {
  ar: ["شهادة ثانوية (أي فرع)", "جواز سفر ساري", "ترجمة موثقة للوثائق", "إثبات لغة أو سنة تحضيرية"],
  en: ["High-school diploma (any track)", "Valid passport", "Certified translations", "Language proof or preparatory year"],
};

export const diplomaPrograms: Program[] = [
  {
    slug: "diploma-radiology",
    image: medicalImaging,
    level: "diploma",
    name: { ar: "دبلوم تقنيات الأشعة", en: "Diploma in Radiology Techniques" },
    short: {
      ar: "دبلوم سنتان يؤهلك فني أشعة معتمد بفرص عمل سريعة في المستشفيات.",
      en: "A two-year diploma qualifying you as a certified radiology technician.",
    },
    field,
    years: 2,
    degree: { ar: "دبلوم (Önlisans) تقنيات الأشعة", en: "Associate diploma in Radiology Techniques" },
    langs,
    tuition: "$2,000 – $4,500",
    overview: {
      ar: "برنامج دبلوم عالي (Önlisans) مدته سنتان في الجامعات التركية والقبرصية، يؤهلك لتشغيل أجهزة الأشعة السينية والطبقي المحوري والرنين المغناطيسي والموجات فوق الصوتية. يتضمن تدريباً سريرياً داخل مستشفيات جامعية، وسوق العمل عليه مرتفع الطلب. يمكن للخريج إكمال البكالوريوس لاحقاً عبر امتحان DGS.",
      en: "A two-year associate (Önlisans) diploma across Turkish and Cypriot universities, training you to operate X-ray, CT, MRI and ultrasound systems. It includes clinical rotations in university hospitals, and demand for graduates is high. Graduates can later bridge into a bachelor's degree through the DGS exam.",
    },
    courses: {
      ar: ["فيزياء الأشعة", "التشريح المقطعي", "تقنيات الأشعة السينية", "التصوير الطبقي المحوري", "الرنين المغناطيسي", "الحماية من الإشعاع", "التدريب السريري"],
      en: ["Radiation physics", "Sectional anatomy", "X-ray techniques", "CT imaging", "MRI imaging", "Radiation protection", "Clinical practice"],
    },
    careers: {
      ar: ["فني أشعة في المستشفيات والمراكز التشخيصية", "عيادات الأسنان والتصوير الرقمي", "تطبيقات أجهزة التصوير لدى الشركات الطبية", "إكمال البكالوريوس عبر DGS"],
      en: ["Radiology technician in hospitals and imaging centres", "Dental and digital imaging clinics", "Applications specialist for imaging vendors", "Bridge to a bachelor's via DGS"],
    },
    skills: {
      ar: ["تشغيل أجهزة التصوير", "سلامة المريض والإشعاع", "دقة الوضعيات التشريحية", "التعامل مع أنظمة PACS"],
      en: ["Imaging equipment operation", "Patient and radiation safety", "Accurate anatomical positioning", "PACS systems"],
    },
    requirements: req,
    universities: ["İstanbul Medipol University", "Near East University", "İstanbul Gelişim University", "Final International University"],
  },
  {
    slug: "diploma-anesthesia",
    image: anesthesia,
    level: "diploma",
    name: { ar: "دبلوم التخدير والإنعاش", en: "Diploma in Anaesthesia & Reanimation" },
    short: {
      ar: "دبلوم سنتان لفني تخدير يعمل مع أطباء التخدير في غرف العمليات.",
      en: "A two-year diploma for anaesthesia technicians working alongside anaesthetists.",
    },
    field,
    years: 2,
    degree: { ar: "دبلوم (Önlisans) تقنيات التخدير", en: "Associate diploma in Anaesthesia Techniques" },
    langs,
    tuition: "$2,000 – $4,500",
    overview: {
      ar: "دبلوم عالي مدته سنتان يؤهلك فني تخدير وإنعاش: تجهيز أجهزة التخدير، مراقبة العلامات الحيوية، مساعدة طبيب التخدير قبل وأثناء وبعد العملية، والتعامل مع حالات الإنعاش. التدريب عملي بنسبة كبيرة داخل غرف العمليات الجامعية، والطلب على الخريجين مرتفع في تركيا والخليج.",
      en: "A two-year associate diploma preparing anaesthesia technicians: preparing anaesthesia machines, monitoring vital signs, assisting the anaesthetist before, during and after surgery, and handling resuscitation. Training is heavily practical inside university operating theatres, and demand for graduates is strong in Türkiye and the Gulf.",
    },
    courses: {
      ar: ["مبادئ التخدير", "الفارماكولوجيا التطبيقية", "أجهزة التخدير والمراقبة", "الإنعاش القلبي الرئوي", "التشريح والفسيولوجيا", "التدريب في غرف العمليات"],
      en: ["Principles of anaesthesia", "Applied pharmacology", "Anaesthesia and monitoring devices", "CPR and resuscitation", "Anatomy and physiology", "Operating theatre practice"],
    },
    careers: {
      ar: ["فني تخدير في غرف العمليات", "وحدات العناية المركزة", "أقسام الطوارئ", "عيادات الجراحة النهارية"],
      en: ["Anaesthesia technician in operating theatres", "Intensive care units", "Emergency departments", "Day-surgery clinics"],
    },
    skills: {
      ar: ["مراقبة العلامات الحيوية", "العمل تحت الضغط", "التعقيم وسلامة المريض", "العمل الجماعي الجراحي"],
      en: ["Vital-sign monitoring", "Working under pressure", "Sterilisation and patient safety", "Surgical teamwork"],
    },
    requirements: req,
    universities: ["İstanbul Gelişim University", "Near East University", "Biruni University", "Cyprus International University"],
  },
  {
    slug: "diploma-paramedic",
    image: paramedic,
    level: "diploma",
    name: { ar: "دبلوم الإسعاف والطوارئ", en: "Diploma in First Aid & Emergency" },
    short: {
      ar: "دبلوم سنتان يؤهلك مسعفاً في سيارات الإسعاف وأقسام الطوارئ.",
      en: "A two-year diploma qualifying you as a paramedic in ambulances and ER units.",
    },
    field,
    years: 2,
    degree: { ar: "دبلوم (Önlisans) إسعاف وطوارئ", en: "Associate diploma in Paramedic & Emergency Care" },
    langs,
    tuition: "$1,800 – $4,000",
    overview: {
      ar: "برنامج عملي مدته سنتان يدرّبك على التعامل مع الحالات الحرجة في الميدان: الإنعاش، تثبيت الكسور، إدارة الحوادث، ونقل المصابين. التدريب يتم في سيارات إسعاف حقيقية وأقسام طوارئ جامعية، ويعتبر من أسرع الدبلومات في الحصول على وظيفة.",
      en: "A hands-on two-year program training you for critical field care: resuscitation, fracture stabilisation, incident management and patient transport. Training happens in real ambulances and university emergency departments, making it one of the fastest diplomas to employment.",
    },
    courses: {
      ar: ["الإسعاف الأولي المتقدم", "طب الطوارئ", "الإنعاش القلبي الرئوي", "إدارة الحوادث والكوارث", "نقل المصابين", "التدريب الميداني"],
      en: ["Advanced first aid", "Emergency medicine", "CPR and ACLS basics", "Disaster and incident management", "Patient transport", "Field placement"],
    },
    careers: {
      ar: ["مسعف في سيارات الإسعاف", "أقسام الطوارئ", "فرق السلامة في المصانع والفعاليات", "الهلال الأحمر ومنظمات الإغاثة"],
      en: ["Ambulance paramedic", "Emergency departments", "Industrial and event safety teams", "Red Crescent and relief organisations"],
    },
    skills: {
      ar: ["اتخاذ القرار السريع", "التقييم الميداني", "الهدوء تحت الضغط", "التواصل مع المريض وذويه"],
      en: ["Fast decision-making", "Field assessment", "Composure under pressure", "Patient communication"],
    },
    requirements: req,
    universities: ["İstanbul Gelişim University", "Üsküdar University", "Near East University", "European University of Lefke"],
  },
  {
    slug: "diploma-operating-room",
    image: operatingRoom,
    level: "diploma",
    name: { ar: "دبلوم خدمات غرفة العمليات", en: "Diploma in Operating Room Services" },
    short: {
      ar: "دبلوم سنتان لتجهيز غرف العمليات ومساعدة الفريق الجراحي.",
      en: "A two-year diploma in preparing theatres and assisting surgical teams.",
    },
    field,
    years: 2,
    degree: { ar: "دبلوم (Önlisans) خدمات غرفة العمليات", en: "Associate diploma in Operating Room Services" },
    langs,
    tuition: "$1,800 – $4,000",
    overview: {
      ar: "يؤهلك هذا الدبلوم للعمل كفني غرفة عمليات: تجهيز الأدوات الجراحية، التعقيم، مناولة الأدوات للجراح، ومتابعة سلامة المريض. تخصص مطلوب في كل مستشفى جراحي، ويمنح مساراً وظيفياً واضحاً في وقت قصير.",
      en: "This diploma prepares you as an operating room technician: preparing surgical instruments, sterilisation, passing instruments to the surgeon and safeguarding patient safety. Every surgical hospital needs the role, giving a clear career path in a short time.",
    },
    courses: {
      ar: ["التعقيم ومكافحة العدوى", "الأدوات الجراحية", "التشريح الجراحي", "أساسيات التخدير", "سلامة المريض", "التدريب في غرف العمليات"],
      en: ["Sterilisation and infection control", "Surgical instruments", "Surgical anatomy", "Anaesthesia basics", "Patient safety", "Theatre placement"],
    },
    careers: {
      ar: ["فني غرفة عمليات", "وحدات التعقيم المركزي", "مراكز الجراحة النهارية", "مندوب مستلزمات جراحية"],
      en: ["Operating room technician", "Central sterilisation units", "Day-surgery centres", "Surgical supplies representative"],
    },
    skills: {
      ar: ["الالتزام بالتعقيم", "الدقة والسرعة", "العمل الجماعي", "معرفة الأدوات الجراحية"],
      en: ["Strict aseptic technique", "Precision and speed", "Teamwork", "Instrument knowledge"],
    },
    requirements: req,
    universities: ["İstanbul Gelişim University", "Biruni University", "Near East University", "İstanbul Rumeli University"],
  },
  {
    slug: "diploma-dental-prosthetics",
    image: dentalProsthetics,
    level: "diploma",
    name: { ar: "دبلوم تقنيات الأسنان", en: "Diploma in Dental Prosthetics" },
    short: {
      ar: "دبلوم سنتان لتصنيع التركيبات والتقويم داخل مختبرات الأسنان.",
      en: "A two-year diploma making crowns, bridges and aligners in dental labs.",
    },
    field,
    years: 2,
    degree: { ar: "دبلوم (Önlisans) تقنيات الأسنان", en: "Associate diploma in Dental Prosthetics Technology" },
    langs,
    tuition: "$1,800 – $4,200",
    overview: {
      ar: "تخصص حرفي تقني مدته سنتان: تصميم وتصنيع التركيبات الثابتة والمتحركة، الزيركون، والتقويم الشفاف باستخدام تقنيات CAD/CAM والطباعة الثلاثية الأبعاد. يفتح الباب للعمل في مختبرات الأسنان أو افتتاح مختبر خاص.",
      en: "A two-year technical craft: designing and producing fixed and removable prosthetics, zirconia work and clear aligners using CAD/CAM and 3D printing. It opens the door to dental laboratories or your own lab.",
    },
    courses: {
      ar: ["مواد الأسنان", "التركيبات الثابتة", "التركيبات المتحركة", "تقنيات CAD/CAM", "الطباعة ثلاثية الأبعاد", "تشريح الأسنان"],
      en: ["Dental materials", "Fixed prosthodontics", "Removable prosthodontics", "CAD/CAM technology", "3D printing", "Dental anatomy"],
    },
    careers: {
      ar: ["فني مختبر أسنان", "مختبرات الزيركون وCAD/CAM", "مختبر خاص", "مبيعات وتقنيات مواد الأسنان"],
      en: ["Dental laboratory technician", "Zirconia and CAD/CAM labs", "Own laboratory", "Dental materials sales and support"],
    },
    skills: {
      ar: ["مهارة يدوية عالية", "برامج التصميم الرقمي", "دقة القياسات", "الحس الجمالي واللوني"],
      en: ["High manual dexterity", "Digital design software", "Measurement precision", "Aesthetic and shade sense"],
    },
    requirements: req,
    universities: ["İstanbul Gelişim University", "Near East University", "Üsküdar University", "Cyprus Health and Social Sciences University"],
  },
  {
    slug: "diploma-medical-lab",
    image: medicalLab,
    level: "diploma",
    name: { ar: "دبلوم التحليلات الطبية", en: "Diploma in Medical Laboratory Techniques" },
    short: {
      ar: "دبلوم سنتان للعمل في مختبرات التحليل والتشخيص المخبري.",
      en: "A two-year diploma for work in diagnostic and analysis laboratories.",
    },
    field,
    years: 2,
    degree: { ar: "دبلوم (Önlisans) تحليلات طبية", en: "Associate diploma in Medical Laboratory Techniques" },
    langs,
    tuition: "$1,800 – $4,200",
    overview: {
      ar: "دبلوم سنتان يؤهلك لسحب العينات وتحليلها في مختبرات الدم والأحياء الدقيقة والكيمياء الحيوية، مع تشغيل الأجهزة المخبرية وضبط الجودة. مهنة مطلوبة في المستشفيات والمختبرات الخاصة ومراكز الأبحاث.",
      en: "A two-year diploma covering sample collection and analysis across haematology, microbiology and biochemistry labs, plus instrument operation and quality control. The role is in demand in hospitals, private labs and research centres.",
    },
    courses: {
      ar: ["الكيمياء الحيوية السريرية", "الأحياء الدقيقة", "علم الدم", "أخذ العينات", "ضبط الجودة المخبرية", "التدريب في المختبر"],
      en: ["Clinical biochemistry", "Microbiology", "Haematology", "Sampling techniques", "Laboratory quality control", "Laboratory placement"],
    },
    careers: {
      ar: ["فني مختبر في المستشفيات", "المختبرات الخاصة", "بنوك الدم", "مراكز الأبحاث والتشخيص"],
      en: ["Hospital laboratory technician", "Private laboratories", "Blood banks", "Research and diagnostic centres"],
    },
    skills: {
      ar: ["دقة التحليل", "السلامة الحيوية", "تشغيل أجهزة المختبر", "تسجيل النتائج بدقة"],
      en: ["Analytical accuracy", "Biosafety", "Lab instrument operation", "Accurate result reporting"],
    },
    requirements: req,
    universities: ["İstanbul Gelişim University", "Biruni University", "Near East University", "Final International University"],
  },
];
