import { useLanguage } from "@/lib/language-context";
import { Link } from "wouter";

const BRIGHT = "#66E6DE";
const TDK = "#007A77";
const GOLD = "#C9903A";
const MID = "#4A6B69";
const BG = "#F7FFFE";

const sections = [
  {
    title_en: "English Support",
    title_ar: "دعم الإنجليزية",
    items_en: ["Beginner English", "Intermediate English", "Conversation practice", "Pronunciation training", "Speaking confidence", "Listening practice", "Reading practice", "Writing correction", "Grammar lessons", "Vocabulary lessons", "Customer service English", "Construction English", "Healthcare English", "Warehouse English", "Office English", "Phone conversation English", "Email writing", "English homework help", "Weekly quizzes", "Daily vocabulary", "English speaking clubs", "Public speaking practice", "Accent improvement", "Real-life conversation simulation", "Roleplay interviews", "Group speaking practice", "Beginner survival English", "English for parents/schools", "Canadian slang lessons", "Workplace English"],
    items_ar: ["الإنجليزية للمبتدئين", "الإنجليزية للمتوسطين", "تدريب المحادثة", "تحسين النطق", "بناء الثقة في الكلام", "تدريب الاستماع", "تدريب القراءة", "تصحيح الكتابة", "دروس القواعد", "دروس المفردات", "إنجليزية خدمة العملاء", "إنجليزية البناء", "إنجليزية الرعاية الصحية", "إنجليزية المستودعات", "إنجليزية المكتب", "إنجليزية المكالمات الهاتفية", "كتابة البريد الإلكتروني", "مساعدة في الواجبات", "اختبارات أسبوعية", "مفردات يومية", "نوادي التحدث بالإنجليزية", "ممارسة التحدث أمام الناس", "تحسين اللهجة", "محاكاة محادثات حقيقية", "تمثيل المقابلات", "ممارسة جماعية", "إنجليزية الحياة اليومية", "إنجليزية للأهل والمدارس", "دروس العامية الكندية", "إنجليزية العمل"],
  },
  {
    title_en: "Job & Career Support",
    title_ar: "دعم الوظائف والمهنة",
    items_en: ["Canadian resume", "Cover letter writing", "LinkedIn setup", "Job search strategy", "Application review", "Mock interviews", "Interview feedback", "Career planning", "Promotion readiness", "Workplace culture", "Professional communication", "Interview preparation", "Job application support", "Career coaching"],
    items_ar: ["سيرة ذاتية كندية", "كتابة خطاب التغطية", "إعداد لينكدإن", "استراتيجية البحث عن عمل", "مراجعة الطلبات", "مقابلات تجريبية", "ملاحظات على المقابلة", "التخطيط المهني", "الاستعداد للترقية", "ثقافة العمل", "التواصل المهني", "التحضير للمقابلات", "دعم التقديم على الوظائف", "توجيه مهني"],
  },
  {
    title_en: "Newcomer Life Support",
    title_ar: "دعم الحياة للوافدين",
    items_en: ["Banking and credit scores", "Renting and housing", "Taxes and CRA basics", "Healthcare navigation", "Government documents", "Driver's licence guidance", "Transit and local systems", "School and family help", "Settlement guidance", "Daily life in Canada"],
    items_ar: ["البنوك ودرجة الائتمان", "الإيجار والسكن", "الضرائب وCRA", "التنقل في النظام الصحي", "الوثائق الحكومية", "إرشاد رخصة القيادة", "المواصلات والأنظمة المحلية", "دعم المدرسة والعائلة", "إرشادات التوطين", "الحياة اليومية في كندا"],
  },
  {
    title_en: "Safe Immigration Support",
    title_ar: "دعم هجرة آمن",
    items_en: ["Document organization", "IRCC portal help", "PR preparation English", "Citizenship English prep", "Form reading support", "Letter understanding", "Appointment preparation", "File checklist help", "Status tracking guidance", "Safe non-legal guidance"],
    items_ar: ["تنظيم الوثائق", "المساعدة في بوابة IRCC", "التحضير اللغوي للإقامة الدائمة", "التحضير اللغوي للمواطنة", "مساعدة في قراءة النماذج", "فهم الرسائل والخطابات", "التحضير للمواعيد", "قائمة مراجعة الملفات", "إرشاد متابعة الحالة", "دعم آمن غير قانوني"],
  },
  {
    title_en: "Digital & Tech Support",
    title_ar: "الدعم الرقمي والتقني",
    items_en: ["Computer basics", "Email setup", "Zoom training", "Microsoft Office help", "Phone and app skills", "Online forms", "Digital literacy", "Freelancing basics", "Side hustle tools", "Online safety"],
    items_ar: ["أساسيات الحاسوب", "إعداد البريد الإلكتروني", "تدريب Zoom", "مساعدة Microsoft Office", "مهارات الهاتف والتطبيقات", "النماذج الإلكترونية", "الثقافة الرقمية", "أساسيات العمل الحر", "أدوات العمل الجانبي", "السلامة الرقمية"],
  },
  {
    title_en: "Community & Accountability",
    title_ar: "المجتمع والمتابعة",
    items_en: ["WhatsApp group support", "Weekly live classes", "1-on-1 coaching calls", "Goal tracking", "Accountability check-ins", "Motivation support", "Class recordings", "Homework support", "Arabic-speaking team", "Safe newcomer community"],
    items_ar: ["دعم مجموعة واتساب", "حصص مباشرة أسبوعية", "مكالمات توجيه فردية", "متابعة الأهداف", "مراجعات المسؤولية", "دعم التحفيز", "تسجيلات الحصص", "دعم الواجبات", "فريق يتحدث العربية", "مجتمع آمن للوافدين"],
  },
  {
    title_en: "Money & Business Help",
    title_ar: "المال والأعمال",
    items_en: ["Budgeting", "Saving money", "Credit building", "Side hustle planning", "Small business basics", "Freelancing support", "Marketplace selling", "Invoicing basics", "Contracts basics", "Income strategy"],
    items_ar: ["إعداد الميزانية", "توفير المال", "بناء الائتمان", "تخطيط العمل الجانبي", "أساسيات المشاريع الصغيرة", "دعم العمل الحر", "البيع عبر المنصات", "أساسيات الفواتير", "أساسيات العقود", "استراتيجية الدخل"],
  },
  {
    title_en: "Advanced / Future Services",
    title_ar: "خدمات متقدمة / مستقبلية",
    items_en: ["Mentorship", "Industry coaching", "Interview bootcamps", "Leadership English", "Advanced confidence practice", "Business growth support", "Community events", "Networking sessions", "Family support programs", "Custom success roadmap"],
    items_ar: ["الإرشاد", "تدريب حسب المجال", "معسكرات المقابلات", "إنجليزية القيادة", "تدريب متقدم على الثقة", "دعم نمو الأعمال", "فعاليات مجتمعية", "جلسات بناء العلاقات", "برامج دعم العائلة", "خارطة طريق مخصصة"],
  },
];

export default function Services() {
  const { language } = useLanguage();
  const isAr = language === "ar";

  return (
    <div style={{ width: "100%", background: "#fff" }}>
      <section style={{ padding: "76px 5% 34px", background: `linear-gradient(180deg, #fff 0%, ${BG} 100%)` }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: TDK, fontWeight: 800, letterSpacing: "1.1px", textTransform: "uppercase", fontSize: "11px", marginBottom: "10px" }}>
            <span style={{ width: "4px", height: "22px", background: BRIGHT, borderRadius: "999px" }} />
            {isAr ? "كل الخدمات" : "ALL SERVICES"}
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 800, color: TDK, lineHeight: 1.1, marginBottom: "12px" }}>
            {isAr ? <>كل الدعم الذي تحتاجه للنجاح في <span style={{ color: GOLD }}>كندا</span></> : <>All the Support You Need to Succeed in <span style={{ color: GOLD }}>Canada</span></>}
          </h1>
          <p style={{ maxWidth: "720px", color: MID, fontSize: "17px", lineHeight: 1.7 }}>
            {isAr ? "هذا التصميم يشبه المثال: منظم، بسيط، ومريح للعين — مع لون أزرق Tiffany أوضح وأكثر إشراقاً." : "This layout follows the example: clean, simple, and easy to scan — with a brighter Tiffany Blue."}
          </p>
        </div>
      </section>

      <section style={{ padding: "18px 5% 62px" }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
          {sections.map((section) => (
            <div key={section.title_en} style={{ marginBottom: "28px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                <div style={{ width: "4px", height: "28px", background: BRIGHT, borderRadius: "999px" }} />
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", fontWeight: 800, color: TDK, margin: 0 }}>
                  {isAr ? section.title_ar : section.title_en}
                </h2>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "10px" }}>
                {(isAr ? section.items_ar : section.items_en).map((item) => (
                  <div key={item} style={{ background: "#EEFDFC", border: "1px solid rgba(102,230,222,0.55)", color: MID, padding: "12px 14px", borderRadius: "12px", fontSize: "13px", lineHeight: 1.45, boxShadow: "0 1px 0 rgba(0,0,0,0.02)" }}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "70px 5%", background: TDK, textAlign: "center" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px,3vw,38px)", fontWeight: 800, color: "#fff", marginBottom: "14px" }}>{isAr ? "جاهز لتبدأ؟" : "Ready to Get Started?"}</h2>
          <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "17px", marginBottom: "26px", lineHeight: 1.7 }}>{isAr ? "احجز تقييمك المجاني وسنحدد لك أفضل مسار من خدماتنا." : "Book your free assessment and we'll map the best service path for you."}</p>
          <Link href="/assessment" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: GOLD, color: TDK, padding: "16px 38px", borderRadius: "32px", fontSize: "16px", fontWeight: 800, textDecoration: "none" }}>📋 {isAr ? "احجز تقييمك المجاني" : "Book Your Free Assessment"}</Link>
        </div>
      </section>
    </div>
  );
}
