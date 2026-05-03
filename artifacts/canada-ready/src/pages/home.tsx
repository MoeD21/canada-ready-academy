import { useLanguage } from "@/lib/language-context";
import { Link } from "wouter";

const T = "#66E6DE";
const BRIGHT = "#B8FFF9";
const TDK = "#007A77";
const GOLD = "#C9903A";
const GOLD_LT = "#E8B84B";
const BG = "#F5FFFE";
const MID = "#4A6B69";

export default function Home() {
  const heroButton = {
    background: `linear-gradient(135deg, ${GOLD} 0%, ${GOLD_LT} 100%)`,
    color: TDK,
    padding: "15px 24px",
    borderRadius: "30px",
    fontSize: "15px",
    fontWeight: 900,
    textDecoration: "none",
    boxShadow: "0 10px 26px rgba(201,144,58,0.28)",
    whiteSpace: "nowrap" as const,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: 1,
    minWidth: "fit-content",
    flexShrink: 0,
  };

  const stag = { display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(102,230,222,0.12)", border: "1px solid rgba(102,230,222,0.35)", color: TDK, padding: "6px 14px", borderRadius: "14px", fontSize: "11px", fontWeight: 700, letterSpacing: "1.2px", textTransform: "uppercase" as const, marginBottom: "12px" };
  const sTitle = { fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, color: TDK, lineHeight: 1.15, marginBottom: "12px" };
  const sSub = { fontSize: "16px", color: MID, maxWidth: "560px", lineHeight: 1.72, margin: "0 auto" };
  const aboutStats = [
    { n: "500+", en: "Newcomers Helped", ar: "وافد استفاد" },
    { n: "4", en: "Programs Available", ar: "برامج متاحة" },
    { n: "3×", en: "Weekly Live Classes", ar: "صفوف أسبوعياً" },
    { n: "2", en: "Languages — Arabic & English", ar: "لغتان — عربي وإنجليزي" },
  ];
  const aboutHelp = [
    { icon: "✈️", en: "New immigrants arriving in Canada", ar: "المهاجرون الجدد القادمون إلى كندا" },
    { icon: "🗣️", en: "Arabic-speaking newcomers across all provinces", ar: "القادمون الجدد الناطقون بالعربية في جميع المقاطعات" },
    { icon: "💼", en: "Job seekers looking for their first Canadian job", ar: "الباحثون عن عمل الذين يبحثون عن أول وظيفة كندية" },
    { icon: "👨‍👩‍👧", en: "Families settling into Canadian life", ar: "الأسر التي تستقر في الحياة الكندية" },
    { icon: "📚", en: "Students wanting to improve English and career skills", ar: "الطلاب الراغبون في تحسين الإنجليزية والمهارات المهنية" },
    { icon: "🏢", en: "Workers wanting to move up in their Canadian careers", ar: "العمال الذين يريدون التقدم في مسيرتهم المهنية الكندية" },
  ];
  const whatWeTeach = [
    { icon: "📚", title_en: "English", title_ar: "الإنجليزية", desc_en: "Speaking, listening, reading, writing, pronunciation, workplace communication, IELTS/CELPIP prep.", desc_ar: "التحدث، الاستماع، القراءة، الكتابة، النطق، التواصل في العمل، التحضير لـ IELTS/CELPIP." },
    { icon: "💼", title_en: "Careers", title_ar: "المهن", desc_en: "Resume writing, interviews, LinkedIn, cover letters, job search, Canadian workplace culture, networking.", desc_ar: "كتابة السيرة الذاتية، المقابلات، لينكدإن، خطابات التغطية، البحث عن عمل، ثقافة بيئة العمل الكندية." },
    { icon: "🏠", title_en: "Canada Life", title_ar: "الحياة في كندا", desc_en: "Banking, credit, CRA taxes, housing, healthcare, government services, driver's license, daily life.", desc_ar: "البنوك، الائتمان، ضرائب CRA، السكن، الرعاية الصحية، الخدمات الحكومية، رخصة القيادة." },
    { icon: "💻", title_en: "Business & Digital", title_ar: "الأعمال والرقمية", desc_en: "Start a business, freelancing, self-employment, invoicing, digital tools, side hustles, marketplace selling.", desc_ar: "بدء عمل تجاري، العمل الحر، المستقل، الفواتير، الأدوات الرقمية، الدخل الجانبي، البيع الإلكتروني." },
  ];
  const programs = [
    { name_en: "Starter", name_ar: "البداية", price: "$79", best_en: "New beginners building confidence", best_ar: "المبتدئين الجدد الذين يبنون ثقتهم", features_en: ["3 live weekly classes", "Speaking practice", "Vocabulary & grammar", "Homework & quizzes", "WhatsApp support"], features_ar: ["3 حصص أسبوعية مباشرة", "ممارسة التحدث", "المفردات والقواعد", "واجبات واختبارات", "دعم واتساب"] },
    { name_en: "Premium", name_ar: "المميز", price: "$129", best_en: "Students preparing for jobs", best_ar: "الطلاب الذين يستعدون لأول وظيفة", features_en: ["Everything in Starter", "1 monthly coaching call", "Canadian resume", "Cover letter", "LinkedIn setup", "Mock interviews"], features_ar: ["كل شيء في البداية", "مكالمة توجيه شهرية", "سيرة ذاتية كندية", "خطاب تغطية", "إعداد لينكدإن", "مقابلات تجريبية"] },
    { name_en: "Career Boost", name_ar: "الانطلاقة المهنية", price: "$179", best_en: "Career + life support", best_ar: "دعم مهني وحياتي", features_en: ["Everything in Premium", "2 monthly coaching calls", "Banking & credit", "CRA basics", "Renting & housing", "Healthcare navigation"], features_ar: ["كل شيء في المميز", "مكالمتان شهريتان", "البنوك والائتمان", "أساسيات CRA", "الإيجار والسكن", "التنقل الصحي"] },
    { name_en: "Canada Ready", name_ar: "جاهز لكندا", price: "$249", best_en: "Complete newcomer support", best_ar: "دعم شامل للوافدين", features_en: ["Everything in Career Boost", "3 monthly coaching calls", "Business startup guidance", "Freelancing basics", "Immigration document help", "90-day success roadmap"], features_ar: ["كل شيء في الانطلاقة", "3 مكالمات شهرية", "توجيه بدء مشروع", "أساسيات العمل الحر", "مساعدة في الوثائق", "خارطة طريق 90 يوماً"] },
  ];
  const whyUs = [
    { icon: "💪", en: "Confidence to speak, work, and communicate in Canada", ar: "الثقة في التحدث والعمل والتواصل في كندا" },
    { icon: "🧭", en: "Direction for your career and life in Canada", ar: "التوجيه لمسيرتك المهنية وحياتك في كندا" },
    { icon: "🤝", en: "Support from a community that understands you", ar: "الدعم من مجتمع يفهمك" },
    { icon: "💰", en: "Opportunity to find better jobs and higher income", ar: "الفرصة لإيجاد وظائف أفضل ودخل أعلى" },
    { icon: "🍁", en: "A better life in Canada for you and your family", ar: "حياة أفضل في كندا لك ولعائلتك" },
  ];
  const hiwSteps = [
    { num: "1", icon: "📋", en: "Book Your Free Assessment", ar: "احجز تقييمك المجاني", desc_en: "Fill out a short form and schedule a 15–20 minute call with our team. It is completely free and commits you to nothing.", desc_ar: "املأ استمارة قصيرة وحدد مكالمة 15–20 دقيقة مع فريقنا. مجانية تماماً ولا تُلزمك بشيء." },
    { num: "2", icon: "🤝", en: "Meet Our Team — Your English & Career Interview", ar: "التق بفريقنا — مقابلة اللغة والمهنة", desc_en: "We check your English level, ask about your career goals, understand your background, and learn your struggles.", desc_ar: "نتحقق من مستوى إنجليزيتك، ونسأل عن أهدافك المهنية، ونفهم خلفيتك، ونتعرف على تحدياتك." },
    { num: "3", icon: "📚", en: "Choose Your Program", ar: "اختر برنامجك", desc_en: "Based on your assessment, we recommend the best plan and level for your situation and budget.", desc_ar: "بناءً على تقييمك، نوصيك بأفضل خطة ومستوى يناسب وضعك وميزانيتك." },
    { num: "4", icon: "💬", en: "Join Classes & Community", ar: "انضم للحصص والمجتمع", desc_en: "You receive your WhatsApp group invite, Zoom links, welcome booklet, schedule, and homework access.", desc_ar: "تحصل على دعوة واتساب وروابط زووم وكتيب ترحيبي وجدول الحصص والوصول للواجبات." },
    { num: "5", icon: "🚀", en: "Receive Weekly Support & Build Your Future", ar: "احصل على الدعم الأسبوعي وابنِ مستقبلك", desc_en: "Attend live classes, get coaching calls based on your plan, and achieve your goals step by step.", desc_ar: "احضر الحصص المباشرة واحصل على مكالمات توجيه حسب خطتك وحقق أهدافك خطوة بخطوة." },
  ];
  const testimonials = [
    { emoji: "👨", name: "Ahmed M.", origin_en: "From Egypt — Now in Calgary, Alberta", origin_ar: "من مصر — الآن في كالغاري، ألبرتا", plan_en: "Career Boost Plan", plan_ar: "باقة الانطلاقة المهنية", text_en: "I arrived in Calgary without knowing how interviews work in Canada. After joining Canada Ready Academy, I went through 4 mock interviews with the coach. Within 3 months I got my first IT job at a local company.", text_ar: "وصلت إلى كالغاري دون أن أعرف كيف تعمل المقابلات في كندا. بعد الانضمام لأكاديمية كندا ريدي، خضت 4 مقابلات تجريبية مع المدرب. خلال 3 أشهر حصلت على أول وظيفة في مجال تكنولوجيا المعلومات." },
    { emoji: "👩", name: "Fatima S.", origin_en: "From Syria — Now in Edmonton, Alberta", origin_ar: "من سوريا — الآن في إدمونتون، ألبرتا", plan_en: "Canada Ready Plan", plan_ar: "باقة جاهز لكندا", text_en: "The Canada Life Support pillar was exactly what I needed. My coach helped me understand CRA, open a proper bank account, and find a great apartment for my family.", text_ar: "ركيزة دعم الحياة كانت بالضبط ما احتجته. ساعدني المدرب على فهم CRA وفتح حساب بنكي مناسب وإيجاد شقة رائعة لعائلتي." },
    { emoji: "👨‍💻", name: "Omar K.", origin_en: "From Iraq — Now in Toronto, Ontario", origin_ar: "من العراق — الآن في تورونتو، أونتاريو", plan_en: "Starter → Career Boost", plan_ar: "البداية ← الانطلاقة المهنية", text_en: "I started with very basic English. Now I communicate comfortably at work, started my own small delivery business, and I am teaching my kids the same confidence I learned.", text_ar: "بدأت بإنجليزية ضعيفة جداً. الآن أتواصل براحة في العمل، بدأت مشروعي الصغير للتوصيل، وأعلّم أطفالي نفس الثقة التي اكتسبتها." },
  ];
  const services = [
    { title_en: "English Support", title_ar: "دعم الإنجليزية", items_en: ["Beginner English", "Intermediate English", "Conversation practice", "Pronunciation training", "Speaking confidence", "Listening practice", "Writing correction", "Grammar lessons", "Vocabulary lessons", "Workplace English"], items_ar: ["الإنجليزية للمبتدئين", "الإنجليزية للمتوسطين", "تدريب المحادثة", "تحسين النطق", "بناء الثقة في الكلام", "تدريب الاستماع", "تصحيح الكتابة", "دروس القواعد", "دروس المفردات", "إنجليزية العمل"] },
    { title_en: "Job & Career Support", title_ar: "دعم الوظائف والمهنة", items_en: ["Canadian resume", "Cover letter writing", "LinkedIn setup", "Job search strategy", "Application review", "Mock interviews", "Interview feedback", "Career planning"], items_ar: ["سيرة ذاتية كندية", "كتابة خطاب التغطية", "إعداد لينكدإن", "استراتيجية البحث عن عمل", "مراجعة الطلبات", "مقابلات تجريبية", "ملاحظات على المقابلة", "التخطيط المهني"] },
    { title_en: "Newcomer Life Support", title_ar: "دعم الحياة للوافدين", items_en: ["Banking and credit scores", "Renting and housing", "Taxes and CRA basics", "Healthcare navigation", "Government documents", "Driver's licence guidance", "Transit and local systems", "Settlement guidance"], items_ar: ["البنوك ودرجة الائتمان", "الإيجار والسكن", "الضرائب وCRA", "التنقل في النظام الصحي", "الوثائق الحكومية", "إرشاد رخصة القيادة", "المواصلات والأنظمة المحلية", "إرشادات التوطين"] },
    { title_en: "Safe Immigration Support", title_ar: "دعم هجرة آمن", items_en: ["Document organization", "IRCC portal help", "PR preparation English", "Citizenship English prep", "Form reading support", "Appointment preparation", "File checklist help", "Status tracking guidance"], items_ar: ["تنظيم الوثائق", "المساعدة في بوابة IRCC", "التحضير اللغوي للإقامة الدائمة", "التحضير اللغوي للمواطنة", "مساعدة في قراءة النماذج", "التحضير للمواعيد", "قائمة مراجعة الملفات", "إرشاد متابعة الحالة"] },
    { title_en: "Digital & Tech Support", title_ar: "الدعم الرقمي والتقني", items_en: ["Computer basics", "Email setup", "Zoom training", "Microsoft Office help", "Phone and app skills", "Online forms", "Digital literacy", "Freelancing basics"], items_ar: ["أساسيات الحاسوب", "إعداد البريد الإلكتروني", "تدريب Zoom", "مساعدة Microsoft Office", "مهارات الهاتف والتطبيقات", "النماذج الإلكترونية", "الثقافة الرقمية", "أساسيات العمل الحر"] },
    { title_en: "Community & Accountability", title_ar: "المجتمع والمتابعة", items_en: ["WhatsApp group support", "Weekly live classes", "1-on-1 coaching calls", "Goal tracking", "Accountability check-ins", "Homework support", "Arabic-speaking team", "Safe newcomer community"], items_ar: ["دعم مجموعة واتساب", "حصص مباشرة أسبوعية", "مكالمات توجيه فردية", "متابعة الأهداف", "مراجعات المسؤولية", "دعم الواجبات", "فريق يتحدث العربية", "مجتمع آمن للوافدين"] },
    { title_en: "Money & Business Help", title_ar: "المال والأعمال", items_en: ["Budgeting", "Saving money", "Credit building", "Side hustle planning", "Small business basics", "Freelancing support", "Marketplace selling", "Invoicing basics"], items_ar: ["إعداد الميزانية", "توفير المال", "بناء الائتمان", "تخطيط العمل الجانبي", "أساسيات المشاريع الصغيرة", "دعم العمل الحر", "البيع عبر المنصات", "أساسيات الفواتير"] },
    { title_en: "Advanced / Future Services", title_ar: "خدمات متقدمة / مستقبلية", items_en: ["Mentorship", "Industry coaching", "Interview bootcamps", "Leadership English", "Advanced confidence practice", "Business growth support", "Community events", "Networking sessions"], items_ar: ["الإرشاد", "تدريب حسب المجال", "معسكرات المقابلات", "إنجليزية القيادة", "تدريب متقدم على الثقة", "دعم نمو الأعمال", "فعاليات مجتمعية", "جلسات بناء العلاقات"] },
  ];

  return (
    <div style={{ width: "100%" }}>
      <section style={{ minHeight: "calc(100vh - 68px)", padding: "60px 5%", display: "flex", alignItems: "center", background: BG }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "48px", alignItems: "center", width: "100%" }} className="max-lg:grid-cols-1 max-lg:gap-10">
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "7px", background: "rgba(102,230,222,0.12)", border: "1px solid rgba(102,230,222,0.35)", color: TDK, padding: "7px 16px", borderRadius: "22px", fontSize: "12px", fontWeight: 700, marginBottom: "18px", whiteSpace: "nowrap", flexWrap: "nowrap" as const, maxWidth: "100%" }}>🍁 Canada&apos;s #1 Newcomer Support System / نظام دعم الوافدين الجدد رقم 1 في كندا</div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(36px,5.2vw,62px)", fontWeight: 800, color: TDK, lineHeight: 1.08, marginBottom: "16px", whiteSpace: "normal" }}>
              <>English, Career &amp; Life Support for Newcomers in <span style={{ color: GOLD }}>Canada</span><br />دعم الإنجليزية والمهنة والحياة للوافدين الجدد في <span style={{ color: GOLD }}>كندا</span></>
            </h1>
            <p style={{ fontSize: "17px", color: MID, maxWidth: "540px", lineHeight: 1.75, marginBottom: "30px" }}>Live online classes, job preparation, and settlement support — designed for Arabic-speaking immigrants in Canada.<br />دروس مباشرة عبر الإنترنت، تحضير للعمل، ودعم التوطين — مصمم للمهاجرين الناطقين بالعربية في كندا.</p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "nowrap", alignItems: "center", overflowX: "auto", paddingBottom: "2px" }} className="max-sm:flex-col max-sm:items-stretch max-sm:overflow-visible">
              <Link href="/assessment" style={heroButton}>Book Appointment / احجز موعداً مجانياً</Link>
              <Link href="/services" style={{ background: "#fff", color: TDK, border: "1px solid rgba(102,230,222,0.45)", padding: "15px 24px", borderRadius: "30px", fontSize: "15px", fontWeight: 800, textDecoration: "none", boxShadow: "0 8px 18px rgba(102,230,222,0.10)", whiteSpace: "nowrap", display: "inline-flex", alignItems: "center", justifyContent: "center", lineHeight: 1, minWidth: "fit-content" }} className="max-sm:w-full">View Services / عرض الخدمات</Link>
            </div>
          </div>
          <div style={{ background: "#007a77", border: "1px solid rgba(255,255,255,0.16)", borderRadius: "24px", padding: "28px", color: "#fff", boxShadow: "0 18px 40px rgba(0,122,119,0.18)", overflow: "hidden" }}>
            <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.88)", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "16px" }}>WHAT YOU GET / ما ستحصل عليه</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", minWidth: 0 }}>
              {[
                { icon: "🗣️", text: "English classes for all levels / حصص لجميع المستويات" },
                { icon: "💼", text: "Resume and job preparation / تحضير للوظائف والسيرة الذاتية" },
                { icon: "🏠", text: "Settlement and daily life support / دعم الحياة اليومية في كندا" },
                { icon: "🤝", text: "Arabic community and WhatsApp support / مجتمع عربي ودعم واتساب" },
                { icon: "📞", text: "1-on-1 coaching calls / مكالمات توجيه فردية" },
              ].map((item) => (
                <div key={item.text} style={{ background: "#007a77", border: "1px solid rgba(255,255,255,0.18)", borderRadius: "14px", padding: "12px 14px", fontSize: "14px", display: "flex", alignItems: "center", gap: "10px", color: "#fff", minWidth: 0, boxShadow: "0 8px 18px rgba(0,0,0,0.08)" }}>
                  <span>{item.icon}</span>
                  <span style={{ lineHeight: 1.45, wordBreak: "break-word" }}>{item.text}</span>
                </div>
              ))}
            </div>
            <Link href="/assessment" style={{ marginTop: "18px", background: `linear-gradient(135deg, ${GOLD} 0%, ${GOLD_LT} 100%)`, borderRadius: "12px", padding: "12px 16px", textAlign: "center", fontWeight: 900, color: TDK, boxShadow: "0 10px 24px rgba(201,144,58,0.22)", textDecoration: "none", display: "block" }}>{isAr ? "الأسبوع الأول مجاني" : "First Week FREE"}</Link>
          </div>
        </div>
      </section>
      <section style={{ padding: "72px 5%", background: "#fff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "34px" }}>
            <div style={stag}>WE HELP YOU WITH / نساعدك في</div>
            <div style={sTitle}>Everything a Newcomer Needs to Succeed / كل ما يحتاجه الوافد الجديد للنجاح</div>
            <p style={sSub}>We don&apos;t just teach English. We help you build confidence, income, and a real life in Canada.<br />لا نعلمك الإنجليزي فقط. نساعدك على بناء الثقة والدخل والحياة الحقيقية في كندا.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "16px" }}>
            {[
              { icon: "🗣️", title_ar: "تطوير الإنجليزية", title_en: "Improve English", desc_ar: "محادثة، نطق، كتابة، وتحضير اختبارات.", desc_en: "Conversation, pronunciation, writing, and test prep." },
              { icon: "💼", title_ar: "الوظائف والمهنة", title_en: "Jobs & Career", desc_ar: "سيرة ذاتية، لينكدإن، مقابلات، واستراتيجية التقديم.", desc_en: "Resume, LinkedIn, interviews, and application strategy." },
              { icon: "🏠", title_ar: "الحياة في كندا", title_en: "Life in Canada", desc_ar: "بنوك، إيجار، صحة، ضرائب، ووثائق.", desc_en: "Banking, rent, healthcare, taxes, and documents." },
              { icon: "🤝", title_ar: "المجتمع والدعم", title_en: "Community Support", desc_ar: "واتساب، متابعة، جلسات خاصة، ودعم آمن.", desc_en: "WhatsApp, accountability, coaching, and safe support." },
            ].map((item) => (
              <div key={item.title_en} style={{ background: "#fff", border: "1px solid rgba(102,230,222,0.26)", borderRadius: "18px", padding: "22px", boxShadow: "0 10px 28px rgba(102,230,222,0.08)" }}>
                <div style={{ width: "48px", height: "48px", background: `linear-gradient(135deg, ${BRIGHT} 0%, #B8FFF9 100%)`, borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "14px", fontSize: "20px" }}>{item.icon}</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "19px", fontWeight: 800, color: TDK, marginBottom: "8px" }}>{item.title_en} / {item.title_ar}</div>
                <div style={{ color: MID, lineHeight: 1.65, fontSize: "14px" }}>{item.desc_en}<br />{item.desc_ar}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ padding: "72px 5%", background: BG }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "30px" }}>
            <div style={stag}>FAST NAVIGATION / تنقل سريع</div>
            <div style={sTitle}>Jump Straight to Important Pages / انتقل مباشرة إلى الصفحات المهمة</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "14px" }}>
            {[
              { href: "/services", icon: "🧾", en: "All Services", ar: "كل الخدمات" },
              { href: "/programs", icon: "📚", en: "Programs", ar: "البرامج" },
              { href: "/how-it-works", icon: "🔄", en: "How It Works", ar: "كيف يعمل" },
              { href: "/testimonials", icon: "⭐", en: "Testimonials", ar: "آراء الطلاب" },
              { href: "/contact", icon: "📞", en: "Contact", ar: "تواصل" },
              { href: "/assessment", icon: "📋", en: "Free Assessment", ar: "تقييم مجاني" },
            ].map((item) => (
              <Link key={item.href} href={item.href} style={{ background: "#fff", border: "1px solid rgba(102,230,222,0.26)", borderRadius: "18px", padding: "18px 16px", textDecoration: "none", color: TDK, boxShadow: "0 8px 20px rgba(102,230,222,0.08)" }}>
                <div style={{ fontSize: "24px", marginBottom: "8px" }}>{item.icon}</div>
                <div style={{ fontWeight: 800, fontSize: "15px", marginBottom: "4px" }}>{item.en} / {item.ar}</div>
                <div style={{ fontSize: "12px", color: MID }}>{item.ar} / {item.en}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: TDK, padding: "70px 5%", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px,3vw,38px)", fontWeight: 800, color: "#fff", marginBottom: "14px" }}>Ready to Start? / جاهز لتبدأ؟</h2>
          <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "17px", marginBottom: "26px", lineHeight: 1.7 }}>Book your free assessment and we&apos;ll map the best path for you.<br />احجز تقييمك المجاني وسنحدد لك أفضل مسار.</p>
          <Link href="/assessment" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: `linear-gradient(135deg, ${GOLD} 0%, ${GOLD_LT} 100%)`, color: TDK, padding: "16px 38px", borderRadius: "32px", fontSize: "16px", fontWeight: 900, textDecoration: "none", boxShadow: "0 12px 28px rgba(201,144,58,0.28)" }}>Book Your Free Assessment / احجز تقييمك المجاني</Link>
        </div>
      </section>
      <section style={{ padding: "0 5% 40px", background: TDK, textAlign: "center" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: "0" }}>
          {aboutStats.map((s) => (
            <div key={s.n} style={{ padding: "28px 20px" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "42px", fontWeight: 700, color: GOLD_LT, lineHeight: 1 }}>{s.n}</div>
              <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.65)", marginTop: "5px" }}>{isAr ? s.ar : s.en}</div>
            </div>
          ))}
        </div>
      </section>
      <section style={{ padding: "72px 5%", background: "#fff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "start" }} className="max-lg:grid-cols-1">
          <div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px,3vw,36px)", fontWeight: 800, color: TDK, marginBottom: "20px" }}>{isAr ? "من نساعد" : "Who We Help"}</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {aboutHelp.map((item) => (
                <div key={item.icon} style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "15px", color: MID }}>
                  <div style={{ width: "8px", height: "8px", background: GOLD, borderRadius: "50%", flexShrink: 0 }} />
                  <span style={{ fontSize: "18px", flexShrink: 0 }}>{item.icon}</span>
                  {isAr ? item.ar : item.en}
                </div>
              ))}
            </div>
          </div>
          <div>
            <div style={{ background: TDK, borderRadius: "22px", padding: "38px", color: "#fff", marginBottom: "22px" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "24px", fontWeight: 700, color: GOLD_LT, marginBottom: "12px" }}>{isAr ? "مهمتنا" : "Our Mission"}</div>
              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.85)", lineHeight: 1.75 }}>
                {isAr ? "تمكين القادمين الجدد الناطقين بالعربية باللغة والمهارات والمعرفة اللازمة للنجاح في كندا. نؤمن بأن كل قادم جديد يستحق مساراً واضحاً للأمام — ليس فقط دروساً في اللغة، بل دعماً حقيقياً لبناء حياة أفضل." : "To empower Arabic-speaking newcomers with the language, skills, and knowledge needed to thrive in Canada. We believe every newcomer deserves a clear path forward — not just language lessons, but real support for building a better life."}
              </p>
            </div>
            <div style={{ background: BG, border: "1px solid rgba(10,186,181,0.15)", borderRadius: "18px", padding: "28px" }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 700, color: TDK, marginBottom: "10px" }}>{isAr ? "ما الذي يميزنا" : "What Makes Us Different"}</h3>
              <p style={{ fontSize: "14px", color: MID, lineHeight: 1.72 }}>{isAr ? "نحن لسنا مدرسة لغة عامة. نحن مجتمع بناه مهاجرون للمهاجرين. نفهم التحديات الحقيقية — ليس فقط اللغة، بل الوظائف والضرائب والسكن والرعاية الصحية والانتماء. برنامجنا يغطي كل شيء في مكان واحد، باللغة التي تفهمها." : "We are not a generic language school. We are a community built by immigrants, for immigrants. We understand the real challenges — not just language, but jobs, taxes, housing, healthcare, and belonging. Our program covers everything in one place, in the language you understand."}</p>
            </div>
          </div>
        </div>
      </section>
      <section style={{ padding: "72px 5%", background: BG }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <div style={stag}>📖 {isAr ? "ماذا ندرّس" : "WHAT WE TEACH"}</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px,3vw,42px)", fontWeight: 800, color: TDK }}>{isAr ? "4 مجالات تغطي كل ما تحتاجه" : "4 Areas Covering Everything You Need"}</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "22px" }}>
            {whatWeTeach.map((item) => (
              <div key={item.title_en} style={{ background: "#fff", borderRadius: "18px", padding: "26px", border: "1px solid rgba(10,186,181,0.15)", borderTop: `4px solid ${item.title_en === "English" ? T : item.title_en === "Careers" ? GOLD : item.title_en === "Canada Life" ? "#25A465" : "#8B5CF6"}` }}>
                <div style={{ width: "50px", height: "50px", background: "rgba(102,230,222,0.12)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", marginBottom: "14px" }}>{item.icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 700, color: TDK, marginBottom: "8px" }}>{isAr ? item.title_ar : item.title_en}</h3>
                <p style={{ fontSize: "13.5px", color: MID, lineHeight: 1.65 }}>{isAr ? item.desc_ar : item.desc_en}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ padding: "72px 5%", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ background: `linear-gradient(135deg, rgba(10,186,181,0.08), rgba(10,186,181,0.03))`, border: "1px solid rgba(10,186,181,0.2)", borderRadius: "28px", padding: "52px" }}>
            <div style={stag}>💡 {isAr ? "ما الذي نبيعه حقاً" : "WHAT WE REALLY SELL"}</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px,3vw,40px)", fontWeight: 800, color: TDK, marginBottom: "10px" }}>{isAr ? "لسنا مجرد مدرسة لغة" : "We Are Not Just a Language School"}</h2>
            <p style={{ fontSize: "16px", color: MID, marginBottom: "32px", lineHeight: 1.7 }}>{isAr ? "نحن نبيع الثقة والتوجيه والدعم والفرصة وحياة أفضل في كندا. اللغة الإنجليزية هي الأداة — الهدف هو تغيير حياتك." : "We sell confidence, direction, support, opportunity, and a better life in Canada. English is the tool — the goal is to change your life."}</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "14px" }}>
              {whyUs.map((item) => (
                <div key={item.icon} style={{ background: "#fff", borderRadius: "14px", padding: "16px 18px", display: "flex", alignItems: "flex-start", gap: "12px", border: "1px solid rgba(10,186,181,0.12)" }}>
                  <span style={{ fontSize: "22px", flexShrink: 0 }}>{item.icon}</span>
                  <span style={{ fontSize: "14px", color: MID, fontWeight: 500, lineHeight: 1.5 }}>{isAr ? item.ar : item.en}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section style={{ padding: "72px 5%", background: BG }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "30px" }}>
            <div style={stag}>📚 {isAr ? "برامجنا" : "OUR PROGRAMS"}</div>
            <div style={sTitle}>{isAr ? "اختر خطتك" : "Choose Your Plan"}</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "18px" }}>
            {programs.map((plan, idx) => (
              <div key={plan.name_en} style={{ background: idx === 1 ? TDK : "#fff", border: idx === 1 ? `2px solid ${GOLD}` : "1px solid rgba(129,216,208,0.18)", borderRadius: "18px", padding: "28px 22px", position: "relative", display: "flex", flexDirection: "column", direction: isAr ? "rtl" : "ltr" }}>
                {idx === 1 && <div style={{ position: "absolute", top: "-13px", left: "50%", transform: "translateX(-50%)", background: GOLD, color: TDK, fontSize: "10px", fontWeight: 800, padding: "4px 13px", borderRadius: "11px", letterSpacing: "0.8px", textTransform: "uppercase", whiteSpace: "nowrap" }}>⭐ {isAr ? "الأكثر شعبية" : "MOST POPULAR"}</div>}
                <div style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "1.8px", textTransform: "uppercase", color: idx === 1 ? "rgba(255,255,255,0.5)" : "#8896AB", marginBottom: "9px" }}>{isAr ? plan.name_ar : plan.name_en}</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "44px", fontWeight: 700, color: idx === 1 ? "#fff" : TDK, lineHeight: 1 }}>{plan.price}</div>
                <div style={{ background: idx === 1 ? "rgba(201,144,58,0.18)" : "rgba(129,216,208,0.08)", borderRadius: "10px", padding: "9px 12px", fontSize: "12px", color: idx === 1 ? GOLD_LT : TDK, fontWeight: 600, margin: "13px 0", lineHeight: 1.5 }}>{isAr ? plan.best_ar : plan.best_en}</div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px", flex: 1, marginBottom: "20px", padding: 0 }}>
                  {(isAr ? plan.features_ar : plan.features_en).map((feat, i) => (
                    <li key={i} style={{ fontSize: "13px", color: idx === 1 ? "rgba(255,255,255,0.85)" : MID, display: "flex", alignItems: "flex-start", gap: "7px", lineHeight: 1.5 }}>
                      <span style={{ color: GOLD, fontWeight: 800, flexShrink: 0, marginTop: "1px" }}>✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/assessment" style={{ display: "block", width: "100%", padding: "13px", borderRadius: "24px", border: idx === 1 ? `1.5px solid ${GOLD}` : "1.5px solid rgba(129,216,208,0.3)", background: idx === 1 ? GOLD : "transparent", color: TDK, fontSize: "13.5px", fontWeight: 700, textDecoration: "none", textAlign: "center" }}>📋 {isAr ? "احجز تقييماً مجانياً" : "Book Free Assessment"}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ padding: "72px 5%", background: "#fff" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <div style={stag}>🔄 {isAr ? "كيف يعمل" : "HOW IT WORKS"}</div>
            <div style={sTitle}>{isAr ? "مسارك من وافد جديد إلى كندي واثق" : "Your Path From Newcomer to Confident Canadian"}</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {hiwSteps.map((step) => (
              <div key={step.num} style={{ background: step.num === "5" ? `linear-gradient(135deg,${TDK},#0d9e99)` : BG, borderRadius: "18px", padding: "26px", border: step.num === "5" ? "none" : "1px solid rgba(10,186,181,0.15)", display: "grid", gridTemplateColumns: "80px 1fr", gap: "22px", alignItems: "start" }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ width: "56px", height: "56px", background: step.num === "5" ? "rgba(255,255,255,0.15)" : TDK, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 700, color: step.num === "5" ? "#fff" : GOLD_LT, margin: "0 auto 8px" }}>{step.num}</div>
                  <div style={{ fontSize: "28px" }}>{step.icon}</div>
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 700, color: step.num === "5" ? "#fff" : TDK, marginBottom: "8px" }}>{isAr ? step.ar : step.en}</h3>
                  <p style={{ fontSize: "15px", color: step.num === "5" ? "rgba(255,255,255,0.85)" : MID, lineHeight: 1.7, marginBottom: "14px" }}>{isAr ? step.desc_ar : step.desc_en}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ padding: "72px 5%", background: BG }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "30px" }}>
            <div style={stag}>🧾 {isAr ? "كل الخدمات" : "ALL SERVICES"}</div>
            <div style={sTitle}>{isAr ? "كل الدعم الذي تحتاجه للنجاح في كندا" : "All the Support You Need to Succeed in Canada"}</div>
          </div>
          {services.map((section) => (
            <div key={section.title_en} style={{ marginBottom: "28px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                <div style={{ width: "4px", height: "28px", background: T, borderRadius: "999px" }} />
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", fontWeight: 800, color: TDK, margin: 0 }}>{isAr ? section.title_ar : section.title_en}</h2>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "10px" }}>
                {(isAr ? section.items_ar : section.items_en).map((item) => (
                  <div key={item} style={{ background: "#EEFDFC", border: "1px solid rgba(102,230,222,0.55)", color: MID, padding: "12px 14px", borderRadius: "12px", fontSize: "13px", lineHeight: 1.45 }}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section style={{ padding: "72px 5%", background: "#fff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "22px" }}>
          {testimonials.map((s) => (
            <div key={s.name} style={{ background: "#fff", borderRadius: "18px", padding: "28px", border: "1px solid rgba(129,216,208,0.15)", display: "flex", flexDirection: "column" }}>
              <div style={{ color: GOLD, fontSize: "17px", marginBottom: "11px" }}>★★★★★</div>
              <p style={{ fontSize: "14px", color: MID, lineHeight: 1.75, marginBottom: "18px", fontStyle: "italic", flex: 1 }}>"{isAr ? s.text_ar : s.text_en}"</p>
              <div style={{ borderTop: "1px solid rgba(129,216,208,0.1)", paddingTop: "16px", display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "46px", height: "46px", borderRadius: "50%", background: TDK, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", flexShrink: 0 }}>{s.emoji}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "15px", color: TDK }}>{s.name}</div>
                  <div style={{ fontSize: "12px", color: "#8896AB", marginBottom: "3px" }}>{isAr ? s.origin_ar : s.origin_en}</div>
                  <div style={{ display: "inline-block", background: "rgba(129,216,208,0.1)", color: TDK, fontSize: "11px", fontWeight: 700, padding: "2px 8px", borderRadius: "8px" }}>{isAr ? s.plan_ar : s.plan_en}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section style={{ background: TDK, padding: "70px 5%", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px,3vw,38px)", fontWeight: 800, color: "#fff", marginBottom: "14px" }}>{isAr ? "قصة نجاحك تبدأ هنا" : "Your Success Story Starts Here"}</h2>
          <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "17px", marginBottom: "26px", lineHeight: 1.7 }}>{isAr ? "انضم إلى مئات الوافدين الذين غيّروا حياتهم مع أكاديمية كندا ريدي." : "Join hundreds of newcomers who have already changed their lives with Canada Ready Academy."}</p>
          <Link href="/assessment" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: GOLD, color: TDK, padding: "16px 38px", borderRadius: "32px", fontSize: "16px", fontWeight: 900, textDecoration: "none" }}>{isAr ? "احجز تقييمك المجاني" : "Book Your Free Assessment"}</Link>
        </div>
      </section>
    </div>
  );
}