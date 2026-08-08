import medicine from "@/assets/programs/medicine.jpg";
import dentistry from "@/assets/programs/dentistry.jpg";
import pharmacy from "@/assets/programs/pharmacy.jpg";
import nursing from "@/assets/programs/nursing.jpg";
import software from "@/assets/programs/software.jpg";
import civil from "@/assets/programs/civil.jpg";
import architecture from "@/assets/programs/architecture.jpg";
import business from "@/assets/programs/business.jpg";
import psychology from "@/assets/programs/psychology.jpg";
import physiotherapy from "@/assets/programs/physiotherapy.jpg";
import aviation from "@/assets/programs/aviation.jpg";
import interior from "@/assets/programs/interior.jpg";

import { extraPrograms } from "./programs.extra";
import { morePrograms } from "./programs.more";
import { diplomaPrograms } from "./programs.diploma";

export type Bi = { ar: string; en: string };
export type BiList = { ar: string[]; en: string[] };

export type ProgramLevel = "diploma" | "bachelor" | "master";

export interface Program {
  slug: string;
  /** Academic level; defaults to bachelor when omitted. */
  level?: ProgramLevel;
  image: string;
  name: Bi;
  short: Bi;
  field: Bi;
  years: number;
  degree: Bi;
  langs: Bi;
  tuition: string;
  overview: Bi;
  courses: BiList;
  careers: BiList;
  skills: BiList;
  requirements: BiList;
  universities: string[];
}

const corePrograms: Program[] = [
  {
    slug: "medicine",
    image: medicine,
    name: { ar: "الطب البشري", en: "Medicine (MD)" },
    short: {
      ar: "برنامج ٦ سنوات يؤهلك طبيباً عاماً معترفاً به دولياً.",
      en: "A six-year program qualifying you as an internationally recognised physician.",
    },
    field: { ar: "العلوم الصحية", en: "Health sciences" },
    years: 6,
    degree: { ar: "بكالوريوس طب وجراحة", en: "Doctor of Medicine" },
    langs: { ar: "إنجليزي / تركي", en: "English / Turkish" },
    tuition: "$12,000 – $25,000",
    overview: {
      ar: "يجمع الطب البشري في الجامعات التركية والقبرصية بين ثلاث سنوات من العلوم الأساسية (تشريح، فسيولوجيا، كيمياء حيوية) وثلاث سنوات سريرية داخل مستشفيات جامعية مجهزة. المناهج معتمدة من مجلس التعليم العالي التركي (YÖK) ومدرجة في القوائم الطبية العالمية، مما يتيح للخريج التقدم لامتحانات المعادلة في معظم الدول العربية وأوروبا.",
      en: "Medicine in Türkiye and Northern Cyprus combines three pre-clinical years (anatomy, physiology, biochemistry) with three clinical years inside fully equipped university hospitals. Curricula are approved by the Turkish Higher Education Council (YÖK) and listed in global medical directories, so graduates can sit equivalency exams across the Arab world and Europe.",
    },
    courses: {
      ar: ["التشريح البشري", "الفسيولوجيا", "الكيمياء الحيوية", "علم الأمراض", "علم الأدوية", "الباطنة والجراحة", "طب الأطفال", "النساء والتوليد", "التدريب السريري (Internship)"],
      en: ["Human anatomy", "Physiology", "Biochemistry", "Pathology", "Pharmacology", "Internal medicine & surgery", "Paediatrics", "Obstetrics & gynaecology", "Clinical internship"],
    },
    careers: {
      ar: ["طبيب عام في المستشفيات والمراكز الصحية", "التخصص (اختصاص) بعد اجتياز امتحان TUS", "البحث الطبي والأكاديمي", "طب الطوارئ والرعاية الحرجة"],
      en: ["General practitioner in hospitals and clinics", "Residency specialisation after the TUS exam", "Medical research and academia", "Emergency and critical care"],
    },
    skills: {
      ar: ["التشخيص السريري", "المهارات الجراحية الأساسية", "التواصل مع المرضى", "أخلاقيات المهنة", "قراءة الأبحاث الطبية"],
      en: ["Clinical diagnosis", "Core surgical skills", "Patient communication", "Medical ethics", "Evidence-based practice"],
    },
    requirements: {
      ar: ["شهادة ثانوية بمعدل ٧٠٪ فما فوق (يختلف حسب الجامعة)", "جواز سفر ساري", "إثبات لغة أو اجتياز سنة تحضيرية", "صور شخصية وترجمة موثقة للوثائق"],
      en: ["High-school diploma with 70%+ (varies by university)", "Valid passport", "Language proof or a preparatory year", "Photos and certified translations of documents"],
    },
    universities: ["İstanbul Medipol University", "Biruni University", "Near East University", "Altınbaş University"],
  },
  {
    slug: "dentistry",
    image: dentistry,
    name: { ar: "طب الأسنان", en: "Dentistry (DDS)" },
    short: {
      ar: "٥ سنوات من التدريب العملي في عيادات أسنان جامعية حديثة.",
      en: "Five years of hands-on training in modern university dental clinics.",
    },
    field: { ar: "العلوم الصحية", en: "Health sciences" },
    years: 5,
    degree: { ar: "بكالوريوس طب وجراحة الفم والأسنان", en: "Doctor of Dental Surgery" },
    langs: { ar: "إنجليزي / تركي", en: "English / Turkish" },
    tuition: "$9,000 – $20,000",
    overview: {
      ar: "برنامج طب الأسنان يمنحك أساساً قوياً في علوم الفم والأسنان مع تدريب عملي مبكر: تبدأ بالعمل على نماذج محاكاة من السنة الثانية، ثم على مرضى حقيقيين تحت إشراف أساتذة مختصين. الجامعات التركية تُعد من الأفضل في المنطقة من حيث تجهيزات عيادات طب الأسنان وتقنيات التصوير الرقمي والزراعة.",
      en: "Dentistry gives you a strong foundation in oral sciences with early practical training: simulation labs from year two, then supervised work with real patients. Turkish universities are regionally leading in dental clinic equipment, digital imaging and implantology.",
    },
    courses: {
      ar: ["تشريح الفم والأسنان", "المواد السنية", "علاج الجذور", "التركيبات الثابتة والمتحركة", "تقويم الأسنان", "جراحة الفم", "طب أسنان الأطفال", "زراعة الأسنان"],
      en: ["Oral anatomy", "Dental materials", "Endodontics", "Fixed & removable prosthodontics", "Orthodontics", "Oral surgery", "Paediatric dentistry", "Implantology"],
    },
    careers: {
      ar: ["طبيب أسنان عام", "فتح عيادة خاصة", "التخصص في التقويم أو الزراعة أو التجميل", "العمل في المستشفيات والمراكز التخصصية"],
      en: ["General dentist", "Private practice owner", "Specialisation in orthodontics, implants or aesthetics", "Hospital and specialist-centre roles"],
    },
    skills: {
      ar: ["الدقة اليدوية العالية", "التخطيط العلاجي", "استخدام التقنيات الرقمية (CAD/CAM)", "إدارة العيادة"],
      en: ["Fine manual dexterity", "Treatment planning", "Digital dentistry (CAD/CAM)", "Clinic management"],
    },
    requirements: {
      ar: ["شهادة ثانوية بمعدل ٦٥٪ فما فوق", "جواز سفر ساري", "إثبات لغة أو سنة تحضيرية", "وثائق مترجمة ومصدقة"],
      en: ["High-school diploma with 65%+", "Valid passport", "Language proof or preparatory year", "Translated and certified documents"],
    },
    universities: ["İstanbul Aydın University", "Biruni University", "Near East University", "İstinye University"],
  },
  {
    slug: "pharmacy",
    image: pharmacy,
    name: { ar: "الصيدلة", en: "Pharmacy" },
    short: {
      ar: "٥ سنوات بين المختبر والصيدلية السريرية وصناعة الدواء.",
      en: "Five years across the lab, clinical pharmacy and drug manufacturing.",
    },
    field: { ar: "العلوم الصحية", en: "Health sciences" },
    years: 5,
    degree: { ar: "بكالوريوس صيدلة", en: "Bachelor of Pharmacy" },
    langs: { ar: "إنجليزي / تركي", en: "English / Turkish" },
    tuition: "$8,000 – $16,000",
    overview: {
      ar: "تدرس الصيدلة تركيب الأدوية وآليات عملها وتفاعلاتها، مع تدريب في صيدليات المستشفيات ومصانع الأدوية. تركيا من أكبر منتجي الأدوية في المنطقة، ما يوفر فرص تدريب وتوظيف واسعة للخريجين في الشركات الدوائية.",
      en: "Pharmacy covers drug composition, mechanisms and interactions, with placements in hospital pharmacies and pharmaceutical plants. Türkiye is a major regional drug manufacturer, opening wide internship and employment options.",
    },
    courses: {
      ar: ["الكيمياء الصيدلانية", "علم الأدوية", "الصيدلة الصناعية", "الصيدلة السريرية", "علم السموم", "العقاقير الطبيعية", "الرقابة الدوائية"],
      en: ["Pharmaceutical chemistry", "Pharmacology", "Industrial pharmacy", "Clinical pharmacy", "Toxicology", "Pharmacognosy", "Drug regulation"],
    },
    careers: {
      ar: ["صيدلي مجتمعي أو مستشفى", "مندوب/مدير علمي في شركات الأدوية", "ضبط الجودة والتصنيع الدوائي", "أبحاث تطوير الدواء"],
      en: ["Community or hospital pharmacist", "Medical science liaison in pharma", "Quality control & manufacturing", "Drug development research"],
    },
    skills: {
      ar: ["التحليل الكيميائي", "الاستشارة الدوائية", "الدقة في الجرعات", "معرفة التشريعات الصحية"],
      en: ["Chemical analysis", "Medication counselling", "Dosage accuracy", "Health regulation literacy"],
    },
    requirements: {
      ar: ["شهادة ثانوية (فرع علمي مفضل)", "جواز سفر ساري", "إثبات لغة أو سنة تحضيرية"],
      en: ["High-school diploma (science stream preferred)", "Valid passport", "Language proof or preparatory year"],
    },
    universities: ["Altınbaş University", "İstinye University", "Yeditepe University", "Near East University"],
  },
  {
    slug: "nursing",
    image: nursing,
    name: { ar: "التمريض", en: "Nursing" },
    short: {
      ar: "٤ سنوات مع تدريب سريري مكثف وفرص عمل عالمية.",
      en: "Four years with intensive clinical training and global demand.",
    },
    field: { ar: "العلوم الصحية", en: "Health sciences" },
    years: 4,
    degree: { ar: "بكالوريوس تمريض", en: "Bachelor of Nursing" },
    langs: { ar: "إنجليزي / تركي", en: "English / Turkish" },
    tuition: "$4,000 – $9,000",
    overview: {
      ar: "التمريض من أكثر التخصصات طلباً عالمياً. يمزج البرنامج بين العلوم الصحية والتدريب داخل المستشفيات منذ السنة الأولى، ويشمل مهارات الرعاية الحرجة والطوارئ ورعاية الأمومة والصحة النفسية.",
      en: "Nursing is one of the most in-demand degrees worldwide. The program mixes health sciences with hospital placements from year one, covering critical care, emergency, maternity and mental-health nursing.",
    },
    courses: {
      ar: ["أساسيات التمريض", "تشريح وفسيولوجيا", "تمريض الباطنة والجراحة", "تمريض الأطفال", "تمريض الأمومة", "الصحة النفسية", "إدارة التمريض"],
      en: ["Fundamentals of nursing", "Anatomy & physiology", "Medical-surgical nursing", "Paediatric nursing", "Maternity nursing", "Mental health nursing", "Nursing management"],
    },
    careers: {
      ar: ["ممرض في المستشفيات والعيادات", "العناية المركزة والطوارئ", "تمريض المجتمع والرعاية المنزلية", "الإشراف وإدارة الأقسام"],
      en: ["Hospital and clinic nurse", "ICU and emergency nursing", "Community and home care", "Ward supervision and management"],
    },
    skills: {
      ar: ["الرعاية السريرية", "العمل تحت الضغط", "التواصل الإنساني", "التوثيق الطبي"],
      en: ["Clinical care", "Working under pressure", "Empathic communication", "Medical documentation"],
    },
    requirements: {
      ar: ["شهادة ثانوية", "جواز سفر ساري", "إثبات لغة أو سنة تحضيرية"],
      en: ["High-school diploma", "Valid passport", "Language proof or preparatory year"],
    },
    universities: ["İstanbul Gelişim University", "Üsküdar University", "Cyprus International University", "Beykent University"],
  },
  {
    slug: "software-engineering",
    image: software,
    name: { ar: "هندسة البرمجيات وعلوم الحاسب", en: "Software Engineering & Computer Science" },
    short: {
      ar: "٤ سنوات في البرمجة والذكاء الاصطناعي وهندسة الأنظمة.",
      en: "Four years of programming, AI and systems engineering.",
    },
    field: { ar: "الهندسة والتقنية", en: "Engineering & technology" },
    years: 4,
    degree: { ar: "بكالوريوس هندسة برمجيات", en: "BSc Software Engineering" },
    langs: { ar: "إنجليزي", en: "English" },
    tuition: "$3,500 – $10,000",
    overview: {
      ar: "برنامج عملي يبني مهندس برمجيات قادراً على تصميم وتطوير الأنظمة الكبيرة. يشمل خوارزميات، قواعد بيانات، تطوير ويب وموبايل، الذكاء الاصطناعي وتعلّم الآلة، وأمن المعلومات، مع مشروع تخرج حقيقي وفرص تدريب في شركات التقنية التركية.",
      en: "A hands-on program building engineers who can design and ship large systems: algorithms, databases, web and mobile development, AI and machine learning, cybersecurity, plus a real capstone project and internships in Türkiye's tech sector.",
    },
    courses: {
      ar: ["برمجة كائنية التوجه", "هياكل البيانات والخوارزميات", "قواعد البيانات", "هندسة البرمجيات", "شبكات الحاسب", "الذكاء الاصطناعي", "تعلّم الآلة", "أمن المعلومات", "مشروع التخرج"],
      en: ["Object-oriented programming", "Data structures & algorithms", "Databases", "Software engineering", "Computer networks", "Artificial intelligence", "Machine learning", "Cybersecurity", "Capstone project"],
    },
    careers: {
      ar: ["مطوّر ويب / تطبيقات", "مهندس بيانات أو ذكاء اصطناعي", "مهندس DevOps", "محلل أمن سيبراني", "ريادة أعمال تقنية"],
      en: ["Web / mobile developer", "Data or AI engineer", "DevOps engineer", "Cybersecurity analyst", "Tech entrepreneur"],
    },
    skills: {
      ar: ["حل المشكلات البرمجية", "العمل ضمن فرق Agile", "التفكير المنطقي", "إدارة المشاريع التقنية"],
      en: ["Problem solving in code", "Agile teamwork", "Logical thinking", "Technical project management"],
    },
    requirements: {
      ar: ["شهادة ثانوية", "جواز سفر ساري", "إثبات لغة إنجليزية أو سنة تحضيرية"],
      en: ["High-school diploma", "Valid passport", "English proof or preparatory year"],
    },
    universities: ["Bahçeşehir University", "İstanbul Aydın University", "Özyeğin University", "Eastern Mediterranean University"],
  },
  {
    slug: "civil-engineering",
    image: civil,
    name: { ar: "الهندسة المدنية", en: "Civil Engineering" },
    short: {
      ar: "٤ سنوات في تصميم المنشآت والبنية التحتية ومقاومة الزلازل.",
      en: "Four years in structures, infrastructure and earthquake-resistant design.",
    },
    field: { ar: "الهندسة والتقنية", en: "Engineering & technology" },
    years: 4,
    degree: { ar: "بكالوريوس هندسة مدنية", en: "BSc Civil Engineering" },
    langs: { ar: "إنجليزي / تركي", en: "English / Turkish" },
    tuition: "$3,500 – $9,000",
    overview: {
      ar: "تركيا من أكثر الدول خبرة في الهندسة الزلزالية وإدارة المشاريع الكبرى، وهذا ينعكس على مناهج الهندسة المدنية التي تركّز على التصميم الإنشائي الآمن، والمواد الحديثة، وإدارة المشاريع، مع زيارات ميدانية لمشاريع قائمة.",
      en: "Türkiye is highly experienced in seismic engineering and mega-projects, and civil engineering curricula reflect that: safe structural design, modern materials, project management and regular site visits.",
    },
    courses: {
      ar: ["الستاتيكا وميكانيكا المواد", "تحليل الإنشاءات", "الخرسانة المسلحة", "المنشآت المعدنية", "ميكانيكا التربة", "الهندسة الزلزالية", "إدارة المشاريع", "المساحة"],
      en: ["Statics & mechanics of materials", "Structural analysis", "Reinforced concrete", "Steel structures", "Soil mechanics", "Earthquake engineering", "Project management", "Surveying"],
    },
    careers: {
      ar: ["مهندس تصميم إنشائي", "مدير موقع/مشروع", "مهندس بنية تحتية وطرق", "استشاري إشراف هندسي"],
      en: ["Structural design engineer", "Site / project manager", "Infrastructure and highway engineer", "Supervision consultant"],
    },
    skills: {
      ar: ["استخدام AutoCAD وETABS وSAP2000", "قراءة المخططات", "تقدير الكميات والتكاليف", "السلامة المهنية"],
      en: ["AutoCAD, ETABS, SAP2000", "Reading technical drawings", "Quantity and cost estimation", "Site safety"],
    },
    requirements: {
      ar: ["شهادة ثانوية", "جواز سفر ساري", "إثبات لغة أو سنة تحضيرية"],
      en: ["High-school diploma", "Valid passport", "Language proof or preparatory year"],
    },
    universities: ["Altınbaş University", "İstanbul Okan University", "Atılım University", "Near East University"],
  },
  {
    slug: "architecture",
    image: architecture,
    name: { ar: "العمارة", en: "Architecture" },
    short: {
      ar: "٤ سنوات بين التصميم والفن والتقنية في مدينة تاريخية.",
      en: "Four years of design, art and technology in a historic city.",
    },
    field: { ar: "التصميم والفنون", en: "Design & arts" },
    years: 4,
    degree: { ar: "بكالوريوس عمارة", en: "BArch Architecture" },
    langs: { ar: "إنجليزي / تركي", en: "English / Turkish" },
    tuition: "$4,000 – $11,000",
    overview: {
      ar: "دراسة العمارة في إسطنبول تجربة استثنائية: مدينة تجمع العمارة العثمانية والبيزنطية والمعاصرة. يعتمد البرنامج على استوديوهات التصميم العملية، مع مواد في تاريخ العمارة، الإنشاء، الاستدامة، والنمذجة الرقمية.",
      en: "Studying architecture in Istanbul is exceptional: Ottoman, Byzantine and contemporary architecture in one city. The program is studio-driven, with history, construction, sustainability and digital modelling modules.",
    },
    courses: {
      ar: ["استوديو التصميم المعماري", "تاريخ العمارة", "الإنشاء ومواد البناء", "التصميم الحضري", "العمارة المستدامة", "النمذجة الرقمية BIM", "الرسم الحر"],
      en: ["Architectural design studio", "History of architecture", "Construction & materials", "Urban design", "Sustainable architecture", "Digital modelling / BIM", "Freehand drawing"],
    },
    careers: {
      ar: ["معماري تصميم", "مصمم حضري", "مدير مشاريع معمارية", "التخصص في الترميم والحفاظ"],
      en: ["Design architect", "Urban designer", "Architectural project manager", "Restoration and heritage specialist"],
    },
    skills: {
      ar: ["التفكير التصميمي", "Revit وSketchUp وRhino", "العرض والإقناع", "إدارة الوقت في الاستوديو"],
      en: ["Design thinking", "Revit, SketchUp, Rhino", "Presentation and pitching", "Studio time management"],
    },
    requirements: {
      ar: ["شهادة ثانوية", "بورتفوليو (لبعض الجامعات)", "إثبات لغة أو سنة تحضيرية"],
      en: ["High-school diploma", "Portfolio (some universities)", "Language proof or preparatory year"],
    },
    universities: ["Bahçeşehir University", "İstanbul Kültür University", "Yeditepe University", "Girne American University"],
  },
  {
    slug: "business-administration",
    image: business,
    name: { ar: "إدارة الأعمال", en: "Business Administration" },
    short: {
      ar: "٤ سنوات تفتح أبواب الإدارة والتسويق والمال وريادة الأعمال.",
      en: "Four years opening management, marketing, finance and entrepreneurship.",
    },
    field: { ar: "الأعمال والاقتصاد", en: "Business & economics" },
    years: 4,
    degree: { ar: "بكالوريوس إدارة أعمال", en: "BBA Business Administration" },
    langs: { ar: "إنجليزي / تركي", en: "English / Turkish" },
    tuition: "$3,000 – $9,000",
    overview: {
      ar: "من أكثر التخصصات مرونة: يمنحك أساساً في المحاسبة والتسويق والموارد البشرية والتمويل والإدارة الاستراتيجية، مع دراسات حالة واقعية وتدريب صيفي في شركات. مناسب لمن يخطط لإدارة شركة عائلية أو بدء مشروعه الخاص.",
      en: "One of the most flexible degrees: accounting, marketing, HR, finance and strategy with real case studies and summer internships. Ideal if you plan to run a family business or launch your own venture.",
    },
    courses: {
      ar: ["مبادئ الإدارة", "المحاسبة المالية", "التسويق", "الاقتصاد الجزئي والكلي", "إدارة الموارد البشرية", "التمويل", "الإدارة الاستراتيجية", "ريادة الأعمال"],
      en: ["Principles of management", "Financial accounting", "Marketing", "Micro & macroeconomics", "Human resource management", "Finance", "Strategic management", "Entrepreneurship"],
    },
    careers: {
      ar: ["مدير مشاريع أو فرع", "أخصائي تسويق رقمي", "محلل مالي", "موارد بشرية", "مؤسس شركة ناشئة"],
      en: ["Project or branch manager", "Digital marketing specialist", "Financial analyst", "HR specialist", "Startup founder"],
    },
    skills: {
      ar: ["القيادة والعمل الجماعي", "تحليل البيانات المالية", "التفاوض", "العرض والتقديم"],
      en: ["Leadership and teamwork", "Financial data analysis", "Negotiation", "Presentation skills"],
    },
    requirements: {
      ar: ["شهادة ثانوية", "جواز سفر ساري", "إثبات لغة أو سنة تحضيرية"],
      en: ["High-school diploma", "Valid passport", "Language proof or preparatory year"],
    },
    universities: ["İstanbul Aydın University", "Beykent University", "Bahçeşehir University", "Cyprus International University"],
  },
  {
    slug: "psychology",
    image: psychology,
    name: { ar: "علم النفس", en: "Psychology" },
    short: {
      ar: "٤ سنوات لفهم السلوك الإنساني والإرشاد النفسي.",
      en: "Four years understanding human behaviour and counselling.",
    },
    field: { ar: "العلوم الإنسانية", en: "Social sciences" },
    years: 4,
    degree: { ar: "بكالوريوس علم النفس", en: "BSc Psychology" },
    langs: { ar: "إنجليزي / تركي", en: "English / Turkish" },
    tuition: "$3,500 – $9,000",
    overview: {
      ar: "تخصص متنامي الطلب في المنطقة العربية. يدرس الطالب النظريات النفسية ومناهج البحث والاختبارات النفسية، مع تدريب عملي في مراكز الإرشاد والمستشفيات. يمكن التخصص لاحقاً في العلاج المعرفي السلوكي أو علم النفس العيادي أو التربوي.",
      en: "A fast-growing field in the Arab region. You study psychological theory, research methods and assessment, with placements in counselling centres and hospitals, then specialise in CBT, clinical or educational psychology.",
    },
    courses: {
      ar: ["مدخل لعلم النفس", "علم النفس النمائي", "علم النفس المعرفي", "الاضطرابات النفسية", "مناهج البحث والإحصاء", "الاختبارات النفسية", "الإرشاد النفسي"],
      en: ["Introduction to psychology", "Developmental psychology", "Cognitive psychology", "Psychopathology", "Research methods & statistics", "Psychological assessment", "Counselling"],
    },
    careers: {
      ar: ["أخصائي نفسي في المراكز والمدارس", "مرشد أسري وتربوي", "موارد بشرية وسلوك تنظيمي", "متابعة ماجستير في العلاج النفسي"],
      en: ["Psychologist in centres and schools", "Family and educational counsellor", "HR / organisational behaviour", "Master's in clinical therapy"],
    },
    skills: {
      ar: ["الإصغاء الفعّال", "تحليل السلوك", "البحث العلمي", "السرية المهنية"],
      en: ["Active listening", "Behaviour analysis", "Scientific research", "Professional confidentiality"],
    },
    requirements: {
      ar: ["شهادة ثانوية", "جواز سفر ساري", "إثبات لغة أو سنة تحضيرية"],
      en: ["High-school diploma", "Valid passport", "Language proof or preparatory year"],
    },
    universities: ["Üsküdar University", "İstanbul Kent University", "Near East University", "Maltepe University"],
  },
  {
    slug: "physiotherapy",
    image: physiotherapy,
    name: { ar: "العلاج الطبيعي وإعادة التأهيل", en: "Physiotherapy & Rehabilitation" },
    short: {
      ar: "٤ سنوات في تأهيل الحركة والإصابات الرياضية.",
      en: "Four years in movement rehabilitation and sports injuries.",
    },
    field: { ar: "العلوم الصحية", en: "Health sciences" },
    years: 4,
    degree: { ar: "بكالوريوس علاج طبيعي", en: "BSc Physiotherapy" },
    langs: { ar: "إنجليزي / تركي", en: "English / Turkish" },
    tuition: "$4,000 – $9,000",
    overview: {
      ar: "تخصص عملي بامتياز يجمع بين علوم الحركة والتشريح والعلاج اليدوي. الطلب عليه مرتفع مع انتشار مراكز التأهيل والأندية الرياضية، ويتيح العمل المستقل بعد الترخيص.",
      en: "A highly practical degree combining kinesiology, anatomy and manual therapy. Demand is rising with rehabilitation centres and sports clubs, and licensed graduates can practise independently.",
    },
    courses: {
      ar: ["التشريح الوظيفي", "الحركة والكينزيولوجيا", "العلاج اليدوي", "الوسائل الفيزيائية", "تأهيل العظام والمفاصل", "التأهيل العصبي", "الإصابات الرياضية"],
      en: ["Functional anatomy", "Kinesiology", "Manual therapy", "Physical modalities", "Orthopaedic rehabilitation", "Neurological rehabilitation", "Sports injuries"],
    },
    careers: {
      ar: ["أخصائي علاج طبيعي في المستشفيات", "مراكز التأهيل والأندية الرياضية", "العلاج المنزلي", "عيادة خاصة"],
      en: ["Hospital physiotherapist", "Rehab centres and sports clubs", "Home-based therapy", "Private clinic"],
    },
    skills: {
      ar: ["التقييم الحركي", "العلاج اليدوي", "بناء برامج تأهيل", "متابعة تقدم المريض"],
      en: ["Movement assessment", "Manual therapy", "Designing rehab programs", "Patient progress tracking"],
    },
    requirements: {
      ar: ["شهادة ثانوية", "جواز سفر ساري", "إثبات لغة أو سنة تحضيرية"],
      en: ["High-school diploma", "Valid passport", "Language proof or preparatory year"],
    },
    universities: ["İstanbul Gelişim University", "Biruni University", "Eastern Mediterranean University", "İstinye University"],
  },
  {
    slug: "aviation-management",
    image: aviation,
    name: { ar: "إدارة الطيران والخدمات الجوية", en: "Aviation Management" },
    short: {
      ar: "٤ سنوات في تشغيل المطارات وشركات الطيران واللوجستيات.",
      en: "Four years in airport operations, airlines and logistics.",
    },
    field: { ar: "الأعمال والاقتصاد", en: "Business & economics" },
    years: 4,
    degree: { ar: "بكالوريوس إدارة طيران", en: "BSc Aviation Management" },
    langs: { ar: "إنجليزي / تركي", en: "English / Turkish" },
    tuition: "$3,500 – $9,000",
    overview: {
      ar: "تركيا مركز طيران عالمي بمطارات ضخمة وشركات طيران رائدة، ما يجعل دراسة إدارة الطيران فيها فرصة قوية. يشمل البرنامج تشغيل المطارات، سلامة الطيران، إدارة شركات الطيران، والخدمات الأرضية، مع تدريب في المطارات.",
      en: "Türkiye is a global aviation hub with huge airports and leading carriers, making aviation management a strong choice. Topics include airport operations, aviation safety, airline management and ground handling, with airport internships.",
    },
    courses: {
      ar: ["مبادئ الطيران", "إدارة المطارات", "سلامة وأمن الطيران", "قانون الطيران", "إدارة شركات الطيران", "اللوجستيات وسلاسل الإمداد", "خدمة العملاء"],
      en: ["Principles of aviation", "Airport management", "Aviation safety & security", "Aviation law", "Airline management", "Logistics & supply chain", "Customer service"],
    },
    careers: {
      ar: ["إدارة عمليات المطار", "شركات الطيران والخدمات الأرضية", "الشحن الجوي واللوجستيات", "تخطيط الرحلات"],
      en: ["Airport operations", "Airlines and ground handling", "Air cargo and logistics", "Flight planning"],
    },
    skills: {
      ar: ["إدارة العمليات", "التعامل مع الأزمات", "الإنجليزية المهنية", "التنسيق متعدد الفرق"],
      en: ["Operations management", "Crisis handling", "Professional English", "Cross-team coordination"],
    },
    requirements: {
      ar: ["شهادة ثانوية", "جواز سفر ساري", "إثبات لغة أو سنة تحضيرية"],
      en: ["High-school diploma", "Valid passport", "Language proof or preparatory year"],
    },
    universities: ["İstanbul Gelişim University", "Turkish Aeronautical Association University", "İstanbul Aydın University", "Girne American University"],
  },
  {
    slug: "interior-design",
    image: interior,
    name: { ar: "التصميم الداخلي", en: "Interior Design" },
    short: {
      ar: "٤ سنوات من الإبداع في تصميم المساحات السكنية والتجارية.",
      en: "Four creative years designing residential and commercial spaces.",
    },
    field: { ar: "التصميم والفنون", en: "Design & arts" },
    years: 4,
    degree: { ar: "بكالوريوس تصميم داخلي", en: "BA Interior Design" },
    langs: { ar: "إنجليزي / تركي", en: "English / Turkish" },
    tuition: "$3,500 – $9,000",
    overview: {
      ar: "يمزج التصميم الداخلي بين الجمال والوظيفة: تتعلم تخطيط المساحات، الإضاءة، المواد والألوان، وبرامج التصميم ثلاثي الأبعاد. إسطنبول سوق ضخم للأثاث والديكور، ما يوفر تدريباً وفرص عمل واقعية.",
      en: "Interior design blends beauty and function: space planning, lighting, materials and colour, plus 3D software. Istanbul's vast furniture and décor market offers real internships and jobs.",
    },
    courses: {
      ar: ["أساسيات التصميم", "تخطيط المساحات", "الإضاءة والمواد", "تصميم الأثاث", "التصميم ثلاثي الأبعاد", "تاريخ الفن والديكور", "مشروع التخرج"],
      en: ["Design fundamentals", "Space planning", "Lighting & materials", "Furniture design", "3D visualisation", "History of art & décor", "Graduation project"],
    },
    careers: {
      ar: ["مصمم داخلي للمشاريع السكنية والتجارية", "مصمم واجهات محلات وفنادق", "استشاري ديكور", "مكتب تصميم خاص"],
      en: ["Interior designer for homes and commercial spaces", "Retail and hospitality designer", "Décor consultant", "Own design studio"],
    },
    skills: {
      ar: ["3ds Max وAutoCAD وSketchUp", "الحس اللوني", "التواصل مع العملاء", "إدارة الميزانية"],
      en: ["3ds Max, AutoCAD, SketchUp", "Colour sense", "Client communication", "Budget management"],
    },
    requirements: {
      ar: ["شهادة ثانوية", "بورتفوليو (اختياري)", "إثبات لغة أو سنة تحضيرية"],
      en: ["High-school diploma", "Portfolio (optional)", "Language proof or preparatory year"],
    },
    universities: ["İstanbul Nişantaşı University", "Bahçeşehir University", "Arkın University of Creative Arts and Design", "Yaşar University"],
  },
];

export const programs: Program[] = [...corePrograms, ...extraPrograms, ...morePrograms, ...diplomaPrograms];

export const programLevel = (p: Program): ProgramLevel => p.level ?? "bachelor";

export const diplomaProgramsList = programs.filter((p) => programLevel(p) === "diploma");

export const programBySlug = (slug: string) => programs.find((p) => p.slug === slug);
