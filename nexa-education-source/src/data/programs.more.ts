import type { Program } from "./programs";
import mechanical from "@/assets/programs/mechanical-engineering.jpg";
import biomedical from "@/assets/programs/biomedical-engineering.jpg";
import intlRelations from "@/assets/programs/international-relations.jpg";
import accounting from "@/assets/programs/accounting-finance.jpg";
import gastronomy from "@/assets/programs/gastronomy.jpg";
import childDev from "@/assets/programs/child-development.jpg";

export const morePrograms: Program[] = [
  {
    slug: "mechanical-engineering",
    image: mechanical,
    name: { ar: "الهندسة الميكانيكية", en: "Mechanical Engineering" },
    short: {
      ar: "٤ سنوات في تصميم الآلات والطاقة والتصنيع والروبوتات.",
      en: "Four years in machine design, energy, manufacturing and robotics.",
    },
    field: { ar: "الهندسة والتقنية", en: "Engineering & technology" },
    years: 4,
    degree: { ar: "بكالوريوس هندسة ميكانيكية", en: "BSc in Mechanical Engineering" },
    langs: { ar: "إنجليزي / تركي", en: "English / Turkish" },
    tuition: "$3,500 – $8,000",
    overview: {
      ar: "تُعد الهندسة الميكانيكية أوسع فروع الهندسة، وتغطي تصميم وتحليل الأنظمة الميكانيكية والحرارية: من محركات السيارات ومحطات الطاقة إلى خطوط الإنتاج والروبوتات. تركيا مركز صناعي كبير في قطاع السيارات والأجهزة المنزلية، ما يمنح الطالب فرص تدريب صناعي حقيقية داخل مصانع عالمية.",
      en: "Mechanical engineering is the broadest engineering branch, covering the design and analysis of mechanical and thermal systems — from car engines and power plants to production lines and robotics. Türkiye is a major manufacturing hub for automotive and appliances, offering real industrial internships inside global factories.",
    },
    courses: {
      ar: ["الاستاتيكا والديناميكا", "مقاومة المواد", "الديناميكا الحرارية", "ميكانيكا الموائع", "انتقال الحرارة", "تصميم الآلات", "التحكم الآلي", "CAD/CAM ومشروع التخرج"],
      en: ["Statics & dynamics", "Strength of materials", "Thermodynamics", "Fluid mechanics", "Heat transfer", "Machine design", "Automatic control", "CAD/CAM & capstone project"],
    },
    careers: {
      ar: ["مهندس تصميم ميكانيكي", "مهندس إنتاج وتصنيع", "مهندس طاقة وتكييف (HVAC)", "مهندس صيانة صناعية", "قطاع السيارات والطيران"],
      en: ["Mechanical design engineer", "Production & manufacturing engineer", "Energy and HVAC engineer", "Industrial maintenance engineer", "Automotive and aviation sectors"],
    },
    skills: {
      ar: ["SolidWorks وAutoCAD وANSYS", "التحليل الرياضي والفيزيائي", "حل المشكلات الهندسية", "إدارة المشاريع"],
      en: ["SolidWorks, AutoCAD, ANSYS", "Mathematical and physical analysis", "Engineering problem solving", "Project management"],
    },
    requirements: {
      ar: ["شهادة ثانوية علمي بمعدل ٦٠٪ فأعلى", "إتقان الإنجليزية أو اجتياز سنة تحضيرية", "جواز سفر ساري", "معادلة الشهادة الثانوية (الدنكليك)"],
      en: ["Science high-school diploma, 60%+", "English proficiency or preparatory year", "Valid passport", "High-school equivalency (Denklik)"],
    },
    universities: ["Bahçeşehir University", "İstanbul Aydın University", "Atılım University", "Near East University"],
  },
  {
    slug: "biomedical-engineering",
    image: biomedical,
    name: { ar: "الهندسة الطبية الحيوية", en: "Biomedical Engineering" },
    short: {
      ar: "الجسر بين الهندسة والطب: أجهزة طبية وأطراف صناعية وتقنيات تشخيص.",
      en: "The bridge between engineering and medicine: devices, prosthetics and diagnostics.",
    },
    field: { ar: "الهندسة والصحة", en: "Engineering & health" },
    years: 4,
    degree: { ar: "بكالوريوس هندسة طبية حيوية", en: "BSc in Biomedical Engineering" },
    langs: { ar: "إنجليزي / تركي", en: "English / Turkish" },
    tuition: "$4,000 – $9,000",
    overview: {
      ar: "يجمع التخصص بين علوم الحياة والهندسة الإلكترونية والميكانيكية لتصميم الأجهزة الطبية وأنظمة التصوير والأطراف الصناعية والذكاء الاصطناعي في التشخيص. سوق الأجهزة الطبية في تركيا في نمو متسارع مع مستشفيات جامعية ضخمة توفر تدريباً عملياً.",
      en: "The program merges life sciences with electronic and mechanical engineering to design medical devices, imaging systems, prosthetics and AI-based diagnostics. Türkiye's medical-device market is growing fast, and large university hospitals provide hands-on training.",
    },
    courses: {
      ar: ["التشريح والفسيولوجيا للمهندسين", "الإلكترونيات الطبية", "معالجة الإشارات الحيوية", "أنظمة التصوير الطبي", "المواد الحيوية", "الميكانيكا الحيوية", "أنظمة المستشفيات", "مشروع التخرج"],
      en: ["Anatomy & physiology for engineers", "Medical electronics", "Biosignal processing", "Medical imaging systems", "Biomaterials", "Biomechanics", "Hospital systems", "Capstone project"],
    },
    careers: {
      ar: ["مهندس أجهزة طبية في المستشفيات", "مهندس تطوير منتجات طبية", "أخصائي صيانة وأنظمة تصوير", "بحث وتطوير في شركات التقنية الصحية"],
      en: ["Clinical/biomedical engineer in hospitals", "Medical product development engineer", "Imaging systems specialist", "R&D in health-tech companies"],
    },
    skills: {
      ar: ["MATLAB وPython", "الدقة والالتزام بالمعايير", "فهم البيئة السريرية", "التوثيق التقني"],
      en: ["MATLAB and Python", "Precision and standards compliance", "Clinical environment awareness", "Technical documentation"],
    },
    requirements: {
      ar: ["شهادة ثانوية علمي بمعدل ٦٥٪ فأعلى", "إتقان الإنجليزية أو سنة تحضيرية", "جواز سفر ساري", "معادلة الشهادة الثانوية"],
      en: ["Science diploma, 65%+", "English proficiency or prep year", "Valid passport", "High-school equivalency"],
    },
    universities: ["İstanbul Medipol University", "Üsküdar University", "Yeditepe University", "Near East University"],
  },
  {
    slug: "international-relations",
    image: intlRelations,
    name: { ar: "العلاقات الدولية", en: "International Relations" },
    short: {
      ar: "٤ سنوات في السياسة الدولية والدبلوماسية والقانون الدولي.",
      en: "Four years in global politics, diplomacy and international law.",
    },
    field: { ar: "العلوم الإنسانية والاجتماعية", en: "Humanities & social sciences" },
    years: 4,
    degree: { ar: "بكالوريوس علاقات دولية", en: "BA in International Relations" },
    langs: { ar: "إنجليزي / تركي", en: "English / Turkish" },
    tuition: "$3,000 – $7,000",
    overview: {
      ar: "يدرس التخصص العلاقات بين الدول والمنظمات الدولية، والسياسة الخارجية، والاقتصاد السياسي، وحل النزاعات. إسطنبول موقع استراتيجي بين الشرق والغرب وتحتضن قنصليات ومنظمات دولية، ما يفتح باب التدريب لدى مؤسسات دبلوماسية وإعلامية.",
      en: "The program studies relations between states and international organisations, foreign policy, political economy and conflict resolution. Istanbul's strategic position and its consulates and international organisations open internships in diplomatic and media institutions.",
    },
    courses: {
      ar: ["مقدمة في العلوم السياسية", "تاريخ العلاقات الدولية", "القانون الدولي العام", "المنظمات الدولية", "السياسة الخارجية التركية", "الاقتصاد السياسي الدولي", "دراسات الشرق الأوسط", "مناهج البحث"],
      en: ["Introduction to political science", "History of international relations", "Public international law", "International organisations", "Turkish foreign policy", "International political economy", "Middle East studies", "Research methods"],
    },
    careers: {
      ar: ["السلك الدبلوماسي والسفارات", "المنظمات الدولية والإنسانية", "التحليل السياسي والإعلام", "العلاقات العامة والتجارة الدولية"],
      en: ["Diplomatic service and embassies", "International and humanitarian organisations", "Political analysis and media", "Public relations and international trade"],
    },
    skills: {
      ar: ["التحليل النقدي", "التفاوض والإقناع", "الكتابة البحثية", "إتقان أكثر من لغة"],
      en: ["Critical analysis", "Negotiation and persuasion", "Research writing", "Multilingual competence"],
    },
    requirements: {
      ar: ["شهادة ثانوية (أي فرع)", "إتقان الإنجليزية أو سنة تحضيرية", "جواز سفر ساري", "معادلة الشهادة الثانوية"],
      en: ["High-school diploma (any track)", "English proficiency or prep year", "Valid passport", "High-school equivalency"],
    },
    universities: ["Kadir Has University", "İstanbul Aydın University", "Girne American University", "Bahçeşehir University"],
  },
  {
    slug: "accounting-finance",
    image: accounting,
    name: { ar: "المحاسبة والتمويل", en: "Accounting & Finance" },
    short: {
      ar: "٤ سنوات في المحاسبة والتدقيق والأسواق المالية وإدارة الاستثمار.",
      en: "Four years in accounting, auditing, financial markets and investment.",
    },
    field: { ar: "إدارة الأعمال", en: "Business & management" },
    years: 4,
    degree: { ar: "بكالوريوس محاسبة وتمويل", en: "BSc in Accounting & Finance" },
    langs: { ar: "إنجليزي / تركي", en: "English / Turkish" },
    tuition: "$3,000 – $7,000",
    overview: {
      ar: "يؤهل البرنامج الطالب لفهم القوائم المالية والتدقيق والضرائب وإدارة المحافظ الاستثمارية وفق المعايير الدولية IFRS. كثير من الجامعات تُهيّئ الطالب لشهادات مهنية مثل CPA وCFA وACCA، وهو من أكثر التخصصات طلباً في سوق العمل.",
      en: "The program builds mastery of financial statements, auditing, taxation and portfolio management under IFRS. Many universities prepare students for professional certifications such as CPA, CFA and ACCA — one of the most in-demand fields on the job market.",
    },
    courses: {
      ar: ["مبادئ المحاسبة", "المحاسبة المالية والإدارية", "التدقيق والرقابة الداخلية", "الإدارة المالية", "الأسواق المالية", "الضرائب", "المحاسبة الدولية IFRS", "التحليل الكمي"],
      en: ["Principles of accounting", "Financial & managerial accounting", "Auditing and internal control", "Corporate finance", "Financial markets", "Taxation", "IFRS accounting", "Quantitative analysis"],
    },
    careers: {
      ar: ["محاسب ومدقق حسابات", "محلل مالي واستثماري", "مدير مالي (CFO track)", "قطاع البنوك والتأمين"],
      en: ["Accountant and auditor", "Financial and investment analyst", "Finance manager (CFO track)", "Banking and insurance"],
    },
    skills: {
      ar: ["Excel المتقدم وأنظمة ERP", "الدقة والانضباط", "التحليل المالي", "أخلاقيات المهنة"],
      en: ["Advanced Excel and ERP systems", "Accuracy and discipline", "Financial analysis", "Professional ethics"],
    },
    requirements: {
      ar: ["شهادة ثانوية (أي فرع)", "إتقان الإنجليزية أو سنة تحضيرية", "جواز سفر ساري", "معادلة الشهادة الثانوية"],
      en: ["High-school diploma (any track)", "English proficiency or prep year", "Valid passport", "High-school equivalency"],
    },
    universities: ["İstanbul Ticaret University", "Beykent University", "Cyprus International University", "Yaşar University"],
  },
  {
    slug: "gastronomy",
    image: gastronomy,
    name: { ar: "فنون الطهي والضيافة", en: "Gastronomy & Culinary Arts" },
    short: {
      ar: "٤ سنوات بين المطبخ الاحترافي وإدارة المطاعم وعلوم الأغذية.",
      en: "Four years across professional kitchens, restaurant management and food science.",
    },
    field: { ar: "السياحة والضيافة", en: "Tourism & hospitality" },
    years: 4,
    degree: { ar: "بكالوريوس فنون طهي", en: "BA in Gastronomy & Culinary Arts" },
    langs: { ar: "إنجليزي / تركي", en: "English / Turkish" },
    tuition: "$3,500 – $8,000",
    overview: {
      ar: "تركيا وجهة عالمية للمطبخ والضيافة، ويجمع التخصص بين التدريب العملي في مطابخ احترافية وبين علوم الأغذية وسلامة الغذاء وإدارة المنشآت. أغلب البرامج تتضمن تدريباً في فنادق خمس نجوم بإسطنبول وأنطاليا.",
      en: "Türkiye is a global culinary and hospitality destination. The program combines hands-on training in professional kitchens with food science, food safety and venue management. Most programs include internships in five-star hotels in Istanbul and Antalya.",
    },
    courses: {
      ar: ["أساسيات الطهي", "المطبخ التركي والعالمي", "فنون الحلويات والمخبوزات", "سلامة الغذاء HACCP", "إدارة المطاعم والتكاليف", "علم الحواس والتذوق", "تصميم القوائم", "التدريب الميداني"],
      en: ["Culinary fundamentals", "Turkish and world cuisine", "Pastry and baking arts", "Food safety (HACCP)", "Restaurant and cost management", "Sensory science", "Menu design", "Field internship"],
    },
    careers: {
      ar: ["شيف تنفيذي في الفنادق والمطاعم", "مدير مطعم أو منشأة ضيافة", "مستشار تطوير قوائم", "ريادة أعمال في قطاع الأغذية"],
      en: ["Executive chef in hotels and restaurants", "Restaurant or hospitality manager", "Menu development consultant", "Food-sector entrepreneurship"],
    },
    skills: {
      ar: ["الإبداع والذوق", "العمل تحت الضغط", "إدارة الفريق", "حساب التكاليف"],
      en: ["Creativity and taste", "Working under pressure", "Team leadership", "Cost control"],
    },
    requirements: {
      ar: ["شهادة ثانوية (أي فرع)", "إتقان الإنجليزية أو سنة تحضيرية", "جواز سفر ساري", "معادلة الشهادة الثانوية"],
      en: ["High-school diploma (any track)", "English proficiency or prep year", "Valid passport", "High-school equivalency"],
    },
    universities: ["Özyeğin University", "İstanbul Okan University", "Yeditepe University", "Antalya Bilim University"],
  },
  {
    slug: "child-development",
    image: childDev,
    name: { ar: "تنمية الطفل", en: "Child Development" },
    short: {
      ar: "٤ سنوات في نمو الطفل والتربية المبكرة والدعم النفسي.",
      en: "Four years in child growth, early education and psychosocial support.",
    },
    field: { ar: "العلوم الصحية والتربوية", en: "Health & education sciences" },
    years: 4,
    degree: { ar: "بكالوريوس تنمية الطفل", en: "BSc in Child Development" },
    langs: { ar: "تركي / إنجليزي", en: "Turkish / English" },
    tuition: "$2,500 – $6,000",
    overview: {
      ar: "يدرس التخصص مراحل النمو الجسدي والمعرفي والاجتماعي للطفل من الولادة حتى المراهقة، وطرق التدخل المبكر لذوي الاحتياجات الخاصة. يتضمن تدريباً عملياً في الحضانات ومراكز التأهيل والمستشفيات.",
      en: "The program studies physical, cognitive and social development from birth to adolescence, plus early-intervention methods for special needs. It includes practical training in nurseries, rehabilitation centres and hospitals.",
    },
    courses: {
      ar: ["علم نفس النمو", "التربية في الطفولة المبكرة", "صحة الطفل والتغذية", "التدخل المبكر وذوو الاحتياجات الخاصة", "اللعب والتعلم", "تقييم الطفل", "التواصل مع الأسرة", "التدريب الميداني"],
      en: ["Developmental psychology", "Early childhood education", "Child health and nutrition", "Early intervention & special needs", "Play and learning", "Child assessment", "Family communication", "Field placement"],
    },
    careers: {
      ar: ["أخصائي تنمية طفل في المستشفيات", "مراكز التربية الخاصة والتأهيل", "إدارة رياض الأطفال", "الاستشارات الأسرية"],
      en: ["Child development specialist in hospitals", "Special education and rehab centres", "Kindergarten management", "Family counselling"],
    },
    skills: {
      ar: ["الصبر والتعاطف", "الملاحظة والتقييم", "مهارات التواصل", "التخطيط التربوي"],
      en: ["Patience and empathy", "Observation and assessment", "Communication skills", "Educational planning"],
    },
    requirements: {
      ar: ["شهادة ثانوية (أي فرع)", "إتقان لغة الدراسة", "جواز سفر ساري", "معادلة الشهادة الثانوية"],
      en: ["High-school diploma (any track)", "Language proficiency", "Valid passport", "High-school equivalency"],
    },
    universities: ["Üsküdar University", "İstanbul Gelişim University", "Biruni University", "Near East University"],
  },
];
