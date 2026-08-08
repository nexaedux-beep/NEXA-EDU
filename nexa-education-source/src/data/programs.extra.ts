import type { Program } from "./programs";
import computerEngineering from "@/assets/programs/computer-engineering.jpg";
import electrical from "@/assets/programs/electrical-engineering.jpg";
import industrial from "@/assets/programs/industrial-engineering.jpg";
import logistics from "@/assets/programs/logistics.jpg";
import law from "@/assets/programs/law.jpg";
import media from "@/assets/programs/media.jpg";
import graphic from "@/assets/programs/graphic-design.jpg";
import nutrition from "@/assets/programs/nutrition.jpg";
import genetics from "@/assets/programs/genetics.jpg";
import tourism from "@/assets/programs/tourism.jpg";

export const extraPrograms: Program[] = [
  {
    slug: "computer-engineering",
    image: computerEngineering,
    name: { ar: "هندسة الحاسوب", en: "Computer Engineering" },
    short: {
      ar: "٤ سنوات بين العتاد والبرمجيات وأنظمة الشبكات والذكاء الاصطناعي.",
      en: "Four years spanning hardware, software, networks and artificial intelligence.",
    },
    field: { ar: "الهندسة والتقنية", en: "Engineering & technology" },
    years: 4,
    degree: { ar: "بكالوريوس هندسة الحاسوب", en: "BSc in Computer Engineering" },
    langs: { ar: "إنجليزي / تركي", en: "English / Turkish" },
    tuition: "$3,500 – $8,000",
    overview: {
      ar: "يجمع التخصص بين تصميم العتاد الرقمي وبناء البرمجيات وأنظمة التشغيل والشبكات، مع مسارات اختيارية في الذكاء الاصطناعي وأمن المعلومات. أغلب الجامعات التركية تعتمد مناهج معتمدة من MÜDEK (المكافئ التركي لـ ABET) وتُلزم الطالب بتدريب صيفي في شركة تقنية.",
      en: "The program blends digital hardware design with software engineering, operating systems and networking, plus electives in AI and cyber-security. Most Turkish universities follow MÜDEK-accredited curricula (the Turkish equivalent of ABET) and require a summer internship at a tech company.",
    },
    courses: {
      ar: ["البرمجة بلغة C/C++", "هياكل البيانات والخوارزميات", "تنظيم الحاسوب والمعالجات", "أنظمة التشغيل", "قواعد البيانات", "شبكات الحاسوب", "الذكاء الاصطناعي", "مشروع التخرج"],
      en: ["Programming in C/C++", "Data structures & algorithms", "Computer organisation", "Operating systems", "Databases", "Computer networks", "Artificial intelligence", "Capstone project"],
    },
    careers: {
      ar: ["مهندس برمجيات", "مهندس شبكات وأنظمة", "مهندس أنظمة مدمجة", "أخصائي أمن معلومات", "مهندس بيانات"],
      en: ["Software engineer", "Network & systems engineer", "Embedded systems engineer", "Cyber-security specialist", "Data engineer"],
    },
    skills: {
      ar: ["التفكير الخوارزمي", "لغات البرمجة المتعددة", "تصميم الأنظمة", "العمل ضمن فريق Agile"],
      en: ["Algorithmic thinking", "Multiple programming languages", "System design", "Agile teamwork"],
    },
    requirements: {
      ar: ["شهادة ثانوية (فرع علمي مفضّل)", "إثبات لغة أو سنة تحضيرية", "جواز سفر ساري", "ترجمة موثقة للوثائق"],
      en: ["High-school diploma (science track preferred)", "Language proof or preparatory year", "Valid passport", "Certified document translations"],
    },
    universities: ["Bahçeşehir University", "Istanbul Aydın University", "Yeditepe University", "Near East University"],
  },
  {
    slug: "electrical-engineering",
    image: electrical,
    name: { ar: "الهندسة الكهربائية والإلكترونية", en: "Electrical & Electronics Engineering" },
    short: {
      ar: "تصميم الدوائر وأنظمة الطاقة والاتصالات والتحكم الآلي.",
      en: "Circuit design, power systems, telecommunications and automatic control.",
    },
    field: { ar: "الهندسة والتقنية", en: "Engineering & technology" },
    years: 4,
    degree: { ar: "بكالوريوس هندسة كهربائية وإلكترونية", en: "BSc in Electrical & Electronics Engineering" },
    langs: { ar: "إنجليزي / تركي", en: "English / Turkish" },
    tuition: "$3,500 – $9,000",
    overview: {
      ar: "يؤهلك البرنامج للعمل في قطاعات الطاقة والاتصالات والإلكترونيات الدقيقة. تتضمن الدراسة مختبرات عملية مكثفة في الدوائر والإشارات وأنظمة التحكم، إضافة إلى مشروع تخرج تطبيقي. تركيا سوق ضخم لمشاريع الطاقة المتجددة ما يوفّر فرص تدريب حقيقية.",
      en: "The degree prepares you for energy, telecom and micro-electronics sectors. It includes intensive labs in circuits, signals and control systems plus an applied graduation project. Türkiye's large renewable-energy market provides real internship opportunities.",
    },
    courses: {
      ar: ["الدوائر الكهربائية", "الإلكترونيات التماثلية والرقمية", "الإشارات والأنظمة", "أنظمة الطاقة الكهربائية", "أنظمة التحكم", "الاتصالات اللاسلكية", "المتحكمات الدقيقة"],
      en: ["Electric circuits", "Analog & digital electronics", "Signals & systems", "Power systems", "Control systems", "Wireless communications", "Microcontrollers"],
    },
    careers: {
      ar: ["مهندس طاقة ومحطات", "مهندس اتصالات", "مهندس أتمتة وتحكم", "مهندس إلكترونيات", "مهندس مشاريع طاقة متجددة"],
      en: ["Power plant engineer", "Telecommunications engineer", "Automation & control engineer", "Electronics engineer", "Renewable-energy project engineer"],
    },
    skills: {
      ar: ["MATLAB وSimulink", "قراءة المخططات الكهربائية", "القياس والاختبار المخبري", "إدارة المشاريع الهندسية"],
      en: ["MATLAB & Simulink", "Reading electrical schematics", "Lab measurement & testing", "Engineering project management"],
    },
    requirements: {
      ar: ["شهادة ثانوية فرع علمي", "إثبات لغة أو سنة تحضيرية", "جواز سفر ساري"],
      en: ["Science-track high-school diploma", "Language proof or preparatory year", "Valid passport"],
    },
    universities: ["Istanbul Okan University", "Yeditepe University", "İzmir University of Economics", "Cyprus International University"],
  },
  {
    slug: "industrial-engineering",
    image: industrial,
    name: { ar: "الهندسة الصناعية", en: "Industrial Engineering" },
    short: {
      ar: "تحسين الأنظمة والإنتاج وسلاسل الإمداد بالتحليل والبيانات.",
      en: "Optimising systems, production and supply chains with data and analytics.",
    },
    field: { ar: "الهندسة والتقنية", en: "Engineering & technology" },
    years: 4,
    degree: { ar: "بكالوريوس هندسة صناعية", en: "BSc in Industrial Engineering" },
    langs: { ar: "إنجليزي / تركي", en: "English / Turkish" },
    tuition: "$3,500 – $8,500",
    overview: {
      ar: "يعمل المهندس الصناعي على جعل المصانع والشركات أكثر كفاءة: تقليل الكلفة، تسريع الإنتاج، وتحسين الجودة. البرنامج مزيج من الرياضيات التطبيقية وبحوث العمليات والإدارة، وهو من أكثر التخصصات طلباً في الصناعة التركية.",
      en: "Industrial engineers make factories and companies more efficient: lower cost, faster production, better quality. The program mixes applied mathematics, operations research and management, and is among the most in-demand fields in Turkish industry.",
    },
    courses: {
      ar: ["بحوث العمليات", "تخطيط ومراقبة الإنتاج", "إدارة الجودة الشاملة", "المحاكاة", "الاقتصاد الهندسي", "إدارة سلاسل الإمداد", "تحليل البيانات"],
      en: ["Operations research", "Production planning & control", "Total quality management", "Simulation", "Engineering economics", "Supply-chain management", "Data analytics"],
    },
    careers: {
      ar: ["مدير عمليات", "مخطط إنتاج", "محلل جودة", "مدير سلسلة إمداد", "استشاري تحسين أعمال"],
      en: ["Operations manager", "Production planner", "Quality analyst", "Supply-chain manager", "Business improvement consultant"],
    },
    skills: {
      ar: ["النمذجة الرياضية", "Lean وSix Sigma", "تحليل التكاليف", "قيادة الفرق"],
      en: ["Mathematical modelling", "Lean & Six Sigma", "Cost analysis", "Team leadership"],
    },
    requirements: {
      ar: ["شهادة ثانوية فرع علمي", "إثبات لغة أو سنة تحضيرية", "جواز سفر ساري"],
      en: ["Science-track high-school diploma", "Language proof or preparatory year", "Valid passport"],
    },
    universities: ["Bahçeşehir University", "Istanbul Bilgi University", "Yaşar University", "Eastern Mediterranean University"],
  },
  {
    slug: "logistics",
    image: logistics,
    name: { ar: "التجارة الدولية والخدمات اللوجستية", en: "International Trade & Logistics" },
    short: {
      ar: "دراسة حركة البضائع والتجارة العالمية والنقل والجمارك.",
      en: "Global trade, freight movement, transport and customs operations.",
    },
    field: { ar: "الأعمال والإدارة", en: "Business & management" },
    years: 4,
    degree: { ar: "بكالوريوس تجارة دولية ولوجستيات", en: "BA in International Trade & Logistics" },
    langs: { ar: "إنجليزي / تركي", en: "English / Turkish" },
    tuition: "$3,000 – $7,000",
    overview: {
      ar: "تركيا نقطة عبور بين أوروبا وآسيا، ما يجعل اللوجستيات من أقوى القطاعات فيها. يتعلم الطالب قوانين التجارة الدولية، النقل البحري والبري والجوي، إدارة المستودعات، والتعامل مع الجمارك وخطابات الاعتماد.",
      en: "Türkiye bridges Europe and Asia, making logistics one of its strongest sectors. Students learn international trade law, sea/land/air freight, warehouse management, customs procedures and letters of credit.",
    },
    courses: {
      ar: ["مبادئ التجارة الدولية", "إدارة النقل", "الجمارك والتشريعات", "إدارة المستودعات والمخزون", "التمويل الدولي", "التسويق الدولي", "اللوجستيات الرقمية"],
      en: ["Principles of international trade", "Transport management", "Customs & regulations", "Warehouse & inventory management", "International finance", "Global marketing", "Digital logistics"],
    },
    careers: {
      ar: ["مسؤول استيراد وتصدير", "مدير لوجستيات", "مخلّص جمركي", "مسؤول مشتريات", "مدير مبيعات دولية"],
      en: ["Import/export officer", "Logistics manager", "Customs broker", "Procurement officer", "International sales manager"],
    },
    skills: {
      ar: ["التفاوض التجاري", "لغات متعددة", "أنظمة ERP", "تحليل الكلفة والوقت"],
      en: ["Commercial negotiation", "Multiple languages", "ERP systems", "Cost & lead-time analysis"],
    },
    requirements: {
      ar: ["شهادة ثانوية", "إثبات لغة أو سنة تحضيرية", "جواز سفر ساري"],
      en: ["High-school diploma", "Language proof or preparatory year", "Valid passport"],
    },
    universities: ["Istanbul Aydın University", "Istanbul Kültür University", "İzmir University of Economics", "Girne American University"],
  },
  {
    slug: "law",
    image: law,
    name: { ar: "الحقوق (القانون)", en: "Law (LLB)" },
    short: {
      ar: "٤ سنوات في القانون التركي والدولي مع تدريب عملي في المحاكم.",
      en: "Four years of Turkish and international law with practical court training.",
    },
    field: { ar: "العلوم الاجتماعية", en: "Social sciences" },
    years: 4,
    degree: { ar: "بكالوريوس في الحقوق", en: "Bachelor of Laws (LLB)" },
    langs: { ar: "تركي (وبعض البرامج بالإنجليزية)", en: "Turkish (some programs in English)" },
    tuition: "$4,000 – $12,000",
    overview: {
      ar: "تُدرَّس كلية الحقوق في تركيا غالباً باللغة التركية، لذا يبدأ الطالب عادة بسنة تحضيرية للغة. تغطي الدراسة القانون المدني والجزائي والتجاري والدولي، وتشمل محاكمات صورية وتدريباً في مكاتب المحاماة. مزاولة المحاماة داخل تركيا تتطلب معادلة وتدريباً نقابياً.",
      en: "Law faculties in Türkiye mostly teach in Turkish, so students usually start with a language preparatory year. Studies cover civil, criminal, commercial and international law with moot courts and law-firm placements. Practising in Türkiye requires equivalency and bar training.",
    },
    courses: {
      ar: ["مدخل إلى علم القانون", "القانون المدني", "القانون الجزائي", "القانون التجاري", "القانون الدولي الخاص", "قانون العمل", "أصول المحاكمات"],
      en: ["Introduction to law", "Civil law", "Criminal law", "Commercial law", "Private international law", "Labour law", "Procedural law"],
    },
    careers: {
      ar: ["محامٍ", "مستشار قانوني للشركات", "قسم الامتثال في البنوك", "العمل الدبلوماسي والمنظمات الدولية", "التحكيم التجاري"],
      en: ["Attorney", "Corporate legal counsel", "Banking compliance", "Diplomacy & international organisations", "Commercial arbitration"],
    },
    skills: {
      ar: ["الصياغة القانونية", "المرافعة والإقناع", "البحث في التشريعات", "التحليل النقدي"],
      en: ["Legal drafting", "Advocacy & persuasion", "Legislative research", "Critical analysis"],
    },
    requirements: {
      ar: ["شهادة ثانوية بمعدل جيد", "سنة تحضيرية للغة التركية غالباً", "جواز سفر ساري", "ترجمة موثقة للوثائق"],
      en: ["Good high-school diploma", "Turkish preparatory year in most cases", "Valid passport", "Certified translations"],
    },
    universities: ["Istanbul Kültür University", "Istanbul Bilgi University", "Beykent University", "Near East University"],
  },
  {
    slug: "media",
    image: media,
    name: { ar: "الإعلام والعلاقات العامة", en: "Media & Public Relations" },
    short: {
      ar: "صناعة المحتوى والصحافة والإعلان وإدارة السمعة الرقمية.",
      en: "Content production, journalism, advertising and digital reputation management.",
    },
    field: { ar: "الفنون والإعلام", en: "Arts & media" },
    years: 4,
    degree: { ar: "بكالوريوس إعلام وعلاقات عامة", en: "BA in Media & Public Relations" },
    langs: { ar: "إنجليزي / تركي", en: "English / Turkish" },
    tuition: "$3,000 – $7,500",
    overview: {
      ar: "برنامج عملي يعتمد على الاستوديوهات ومختبرات المونتاج داخل الحرم الجامعي. يتعلم الطالب كتابة المحتوى، الإنتاج التلفزيوني، إدارة الحملات الإعلانية، والتعامل مع الأزمات الإعلامية، مع تدريب في قنوات ووكالات إعلانية تركية.",
      en: "A hands-on program built around campus studios and editing labs. Students learn content writing, TV production, campaign management and crisis communication, with internships at Turkish channels and agencies.",
    },
    courses: {
      ar: ["مدخل إلى الاتصال الجماهيري", "كتابة المحتوى الإعلامي", "الإنتاج التلفزيوني والإذاعي", "التصوير والمونتاج", "العلاقات العامة وإدارة الأزمات", "التسويق الرقمي", "أخلاقيات الإعلام"],
      en: ["Introduction to mass communication", "Media writing", "TV & radio production", "Videography & editing", "PR & crisis management", "Digital marketing", "Media ethics"],
    },
    careers: {
      ar: ["صحفي ومعد برامج", "مسؤول علاقات عامة", "مدير محتوى ووسائل تواصل", "منتج فيديو", "مسؤول حملات إعلانية"],
      en: ["Journalist & program producer", "PR officer", "Content & social media manager", "Video producer", "Campaign manager"],
    },
    skills: {
      ar: ["الكتابة الإبداعية", "Adobe Premiere وPhotoshop", "التقديم أمام الكاميرا", "تحليل الجمهور"],
      en: ["Creative writing", "Adobe Premiere & Photoshop", "On-camera presenting", "Audience analytics"],
    },
    requirements: {
      ar: ["شهادة ثانوية", "إثبات لغة أو سنة تحضيرية", "جواز سفر ساري"],
      en: ["High-school diploma", "Language proof or preparatory year", "Valid passport"],
    },
    universities: ["Istanbul Bilgi University", "Bahçeşehir University", "İstanbul Nişantaşı University", "Cyprus International University"],
  },
  {
    slug: "graphic-design",
    image: graphic,
    name: { ar: "التصميم الجرافيكي", en: "Graphic Design" },
    short: {
      ar: "الهوية البصرية والتصميم الرقمي والطباعة وتجربة المستخدم.",
      en: "Brand identity, digital design, print and user experience.",
    },
    field: { ar: "الفنون والتصميم", en: "Arts & design" },
    years: 4,
    degree: { ar: "بكالوريوس تصميم جرافيكي", en: "BA in Graphic Design" },
    langs: { ar: "إنجليزي / تركي", en: "English / Turkish" },
    tuition: "$3,200 – $8,000",
    overview: {
      ar: "يبني البرنامج مصمماً قادراً على إنتاج هوية بصرية متكاملة: من الشعار والتايبوغرافي إلى واجهات المواقع والتطبيقات. أغلب الجامعات تطلب بورتفوليو عند التخرج وتوفر استوديوهات طباعة وتصوير.",
      en: "The program builds designers able to deliver complete visual identities: from logos and typography to web and app interfaces. Most universities require a graduation portfolio and provide print and photography studios.",
    },
    courses: {
      ar: ["أساسيات التصميم واللون", "التايبوغرافي", "تصميم الهوية البصرية", "تصميم واجهات UI/UX", "الرسوم المتحركة (Motion)", "التصوير الفوتوغرافي", "مشروع البورتفوليو"],
      en: ["Design & colour fundamentals", "Typography", "Brand identity design", "UI/UX design", "Motion graphics", "Photography", "Portfolio project"],
    },
    careers: {
      ar: ["مصمم جرافيك في وكالة إعلان", "مصمم واجهات UI/UX", "مصمم علامات تجارية", "مصمم حر (Freelancer)", "مدير فني"],
      en: ["Agency graphic designer", "UI/UX designer", "Brand designer", "Freelance designer", "Art director"],
    },
    skills: {
      ar: ["Adobe Illustrator وPhotoshop وFigma", "التفكير الإبداعي", "عرض الأفكار على العميل", "إدارة الوقت"],
      en: ["Adobe Illustrator, Photoshop & Figma", "Creative thinking", "Client presentation", "Time management"],
    },
    requirements: {
      ar: ["شهادة ثانوية", "بورتفوليو (اختياري ومفيد)", "إثبات لغة أو سنة تحضيرية"],
      en: ["High-school diploma", "Portfolio (optional, helpful)", "Language proof or preparatory year"],
    },
    universities: ["İstanbul Nişantaşı University", "Arkın University of Creative Arts and Design", "Istanbul Kültür University", "Yaşar University"],
  },
  {
    slug: "nutrition",
    image: nutrition,
    name: { ar: "التغذية والحمية", en: "Nutrition & Dietetics" },
    short: {
      ar: "٤ سنوات في علوم الغذاء والتغذية العلاجية وصحة المجتمع.",
      en: "Four years in food science, clinical nutrition and community health.",
    },
    field: { ar: "العلوم الصحية", en: "Health sciences" },
    years: 4,
    degree: { ar: "بكالوريوس تغذية وحمية", en: "BSc in Nutrition & Dietetics" },
    langs: { ar: "إنجليزي / تركي", en: "English / Turkish" },
    tuition: "$3,500 – $8,000",
    overview: {
      ar: "تخصص صحي متنامي يجمع بين الكيمياء الحيوية وعلم وظائف الأعضاء والتغذية السريرية. يشمل تدريباً في مستشفيات ومراكز تغذية، ويؤهل للعمل في المستشفيات والنوادي الرياضية وشركات الأغذية والعيادات الخاصة.",
      en: "A growing health field combining biochemistry, physiology and clinical nutrition. It includes placements in hospitals and nutrition centres and leads to work in hospitals, sports clubs, food companies and private clinics.",
    },
    courses: {
      ar: ["الكيمياء الحيوية", "علم وظائف الأعضاء", "أساسيات التغذية", "التغذية العلاجية", "سلامة الغذاء", "تغذية الرياضيين", "التدريب السريري"],
      en: ["Biochemistry", "Physiology", "Nutrition fundamentals", "Clinical nutrition", "Food safety", "Sports nutrition", "Clinical placement"],
    },
    careers: {
      ar: ["أخصائي تغذية في المستشفيات", "أخصائي تغذية رياضية", "استشاري تغذية في العيادات", "مراقب جودة أغذية", "باحث في علوم الغذاء"],
      en: ["Hospital dietitian", "Sports nutritionist", "Clinic nutrition consultant", "Food quality officer", "Food science researcher"],
    },
    skills: {
      ar: ["تقييم الحالة الغذائية", "بناء خطط غذائية", "التواصل والإرشاد", "تحليل البيانات الصحية"],
      en: ["Nutritional assessment", "Diet plan design", "Counselling & communication", "Health data analysis"],
    },
    requirements: {
      ar: ["شهادة ثانوية فرع علمي", "إثبات لغة أو سنة تحضيرية", "جواز سفر ساري"],
      en: ["Science-track high-school diploma", "Language proof or preparatory year", "Valid passport"],
    },
    universities: ["İstanbul Medipol University", "Biruni University", "Üsküdar University", "Near East University"],
  },
  {
    slug: "genetics",
    image: genetics,
    name: { ar: "البيولوجيا الجزيئية وعلم الوراثة", en: "Molecular Biology & Genetics" },
    short: {
      ar: "علم الحياة على مستوى الجينات والخلايا مع مختبرات بحثية متقدمة.",
      en: "Life science at gene and cell level with advanced research labs.",
    },
    field: { ar: "العلوم الأساسية", en: "Basic sciences" },
    years: 4,
    degree: { ar: "بكالوريوس بيولوجيا جزيئية ووراثة", en: "BSc in Molecular Biology & Genetics" },
    langs: { ar: "إنجليزي", en: "English" },
    tuition: "$3,500 – $9,000",
    overview: {
      ar: "تخصص بحثي يفتح أبواب التقنية الحيوية والصناعات الدوائية والتشخيص الجيني. يقضي الطالب وقتاً كبيراً في المختبرات (PCR، زراعة الخلايا، تحليل الجينوم) ويصلح كأساس قوي لإكمال الماجستير والدكتوراه في أوروبا.",
      en: "A research-driven field opening doors to biotechnology, pharmaceuticals and genetic diagnostics. Students spend significant time in labs (PCR, cell culture, genome analysis) and gain a strong base for master's and PhD study in Europe.",
    },
    courses: {
      ar: ["البيولوجيا الخلوية", "علم الوراثة", "الكيمياء الحيوية", "تقنيات الهندسة الوراثية", "علم المناعة", "المعلوماتية الحيوية", "مشروع بحثي"],
      en: ["Cell biology", "Genetics", "Biochemistry", "Genetic engineering techniques", "Immunology", "Bioinformatics", "Research project"],
    },
    careers: {
      ar: ["باحث في مختبرات التقنية الحيوية", "أخصائي مختبر تشخيص جيني", "شركات الأدوية والتحاليل", "الأكاديميا والبحث العلمي"],
      en: ["Biotechnology researcher", "Genetic diagnostics lab specialist", "Pharmaceutical & diagnostics industry", "Academia and research"],
    },
    skills: {
      ar: ["التقنيات المخبرية الدقيقة", "تحليل البيانات الحيوية", "كتابة التقارير العلمية", "الدقة والصبر البحثي"],
      en: ["Precise lab techniques", "Biological data analysis", "Scientific reporting", "Research rigour"],
    },
    requirements: {
      ar: ["شهادة ثانوية فرع علمي", "إثبات لغة إنجليزية أو سنة تحضيرية", "جواز سفر ساري"],
      en: ["Science-track high-school diploma", "English proof or preparatory year", "Valid passport"],
    },
    universities: ["Yeditepe University", "Üsküdar University", "Istanbul Aydın University", "Eastern Mediterranean University"],
  },
  {
    slug: "tourism",
    image: tourism,
    name: { ar: "إدارة السياحة والفنادق", en: "Tourism & Hotel Management" },
    short: {
      ar: "إدارة الضيافة والفنادق والسفر في واحدة من أقوى وجهات العالم السياحية.",
      en: "Hospitality, hotel and travel management in one of the world's top destinations.",
    },
    field: { ar: "الأعمال والإدارة", en: "Business & management" },
    years: 4,
    degree: { ar: "بكالوريوس إدارة سياحة وفنادق", en: "BA in Tourism & Hotel Management" },
    langs: { ar: "إنجليزي / تركي", en: "English / Turkish" },
    tuition: "$3,000 – $7,500",
    overview: {
      ar: "تستقبل تركيا وقبرص عشرات الملايين من السياح سنوياً، ما يجعل هذا التخصص عملياً جداً: تدريب إلزامي في فنادق ٥ نجوم، ودراسة إدارة الغرف والأغذية والمشروبات والتسويق السياحي وتنظيم الفعاليات.",
      en: "Türkiye and Cyprus welcome tens of millions of tourists a year, making this a highly practical degree: mandatory placements in five-star hotels alongside rooms division, food & beverage, tourism marketing and event management.",
    },
    courses: {
      ar: ["مبادئ الضيافة", "إدارة الغرف والاستقبال", "إدارة الأغذية والمشروبات", "التسويق السياحي", "تنظيم الفعاليات والمؤتمرات", "محاسبة الفنادق", "التدريب الميداني"],
      en: ["Hospitality principles", "Rooms division management", "Food & beverage management", "Tourism marketing", "Event & conference management", "Hotel accounting", "Field placement"],
    },
    careers: {
      ar: ["مدير فندق أو قسم", "مسؤول حجوزات وضيافة", "منظم فعاليات ومؤتمرات", "مدير وكالة سياحة وسفر", "مسؤول تسويق سياحي"],
      en: ["Hotel or department manager", "Reservations & guest relations officer", "Event & conference planner", "Travel agency manager", "Tourism marketing officer"],
    },
    skills: {
      ar: ["مهارات خدمة العملاء", "لغات متعددة", "أنظمة إدارة الفنادق (PMS)", "العمل تحت الضغط"],
      en: ["Customer service skills", "Multiple languages", "Hotel PMS systems", "Working under pressure"],
    },
    requirements: {
      ar: ["شهادة ثانوية", "إثبات لغة أو سنة تحضيرية", "جواز سفر ساري"],
      en: ["High-school diploma", "Language proof or preparatory year", "Valid passport"],
    },
    universities: ["Istanbul Okan University", "Yaşar University", "Girne American University", "Akdeniz Karpaz University"],
  },
];
