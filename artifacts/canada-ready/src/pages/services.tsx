import { useLanguage } from "@/lib/language-context";
import { Link } from "wouter";

const T = "#81D8D0";
const TDK = "#007A77";
const GOLD = "#C9903A";
const GOLD_LT = "#E8B84B";
const BG = "#F5FFFE";
const MID = "#4A6B69";

const sections = [
  {
    title_en: "English Support",
    title_ar: "دعم الإنجليزية",
    items_en: [
      "Beginner survival English",
      "Conversation practice",
      "Grammar and vocabulary",
      "Pronunciation training",
      "Reading and writing",
      "Workplace English",
      "Email writing",
      "Phone call practice",
      "IELTS / CELPIP prep",
      "Confidence building",
    ],
    items_ar: [
      "إنجليزية أساسية للحياة اليومية",
      "تدريب المحادثة",
      "القواعد والمفردات",
      "تحسين النطق",
      "القراءة والكتابة",
      "إنجليزية العمل",
      "كتابة البريد الإلكتروني",
      "التحدث عبر الهاتف",
      "التحضير لـ IELTS / CELPIP",
      "بناء الثقة",
    ],
  },
  {
    title_en: "Job & Career Support",
    title_ar: "دعم الوظائف والمهنة",
    items_en: [
      "Canadian resume",
      "Cover letter writing",
      "LinkedIn setup",
      "Job search strategy",
      "Application review",
      "Mock interviews",
      "Interview feedback",
      "Workplace culture",
      "Career planning",
      "Promotion readiness",
    ],
    items_ar: [
      "سيرة ذاتية كندية",
      "كتابة خطاب التغطية",
      "إعداد لينكدإن",
      "استراتيجية البحث عن عمل",
      "مراجعة الطلبات",
      "مقابلات تجريبية",
      "ملاحظات على المقابلة",
      "ثقافة العمل",
      "التخطيط المهني",
      "الاستعداد للترقية",
    ],
  },
  {
    title_en: "Newcomer Life Support",
    title_ar: "دعم الحياة للوافدين",
    items_en: [
      "Banking and credit scores",
      "Renting and housing",
      "Taxes and CRA basics",
      "Healthcare navigation",
      "Government documents",
      "Driver's licence guidance",
      "Transit and local systems",
      "School and family help",
      "Settlement guidance",
      "Daily life in Canada",
    ],
    items_ar: [
      "البنوك ودرجة الائتمان",
      "الإيجار والسكن",
      "الضرائب وCRA",
      "التنقل في النظام الصحي",
      "الوثائق الحكومية",
      "إرشاد رخصة القيادة",
      "المواصلات والأنظمة المحلية",
      "دعم المدرسة والعائلة",
      "إرشادات التوطين",
      "الحياة اليومية في كندا",
    ],
  },
  {
    title_en: "Safe Immigration Support",
    title_ar: "دعم هجرة آمن",
    items_en: [
      "Document organization",
      "IRCC portal help",
      "PR preparation English",
      "Citizenship English prep",
      "Form reading support",
      "Letter understanding",
      "Appointment preparation",
      "File checklist help",
      "Status tracking guidance",
      "Safe non-legal guidance",
    ],
    items_ar: [
      "تنظيم الوثائق",
      "المساعدة في بوابة IRCC",
      "التحضير اللغوي للإقامة الدائمة",
      "التحضير اللغوي للمواطنة",
      "مساعدة في قراءة النماذج",
      "فهم الرسائل والخطابات",
      "التحضير للمواعيد",
      "قائمة مراجعة الملفات",
      "إرشاد متابعة الحالة",
      "دعم آمن غير قانوني",
    ],
  },
  {
    title_en: "Digital & Tech Support",
    title_ar: "الدعم الرقمي والتقني",
    items_en: [
      "Computer basics",
      "Email setup",
      "Zoom training",
      "Microsoft Office help",
      "Phone and app skills",
      "Online forms",
      "Digital literacy",
      "Freelancing basics",
      "Side hustle tools",
      "Online safety",
    ],
    items_ar: [
      "أساسيات الحاسوب",
      "إعداد البريد الإلكتروني",
      "تدريب Zoom",
      "مساعدة Microsoft Office",
      "مهارات الهاتف والتطبيقات",
      "النماذج الإلكترونية",
      "الثقافة الرقمية",
      "أساسيات العمل الحر",
      "أدوات العمل الجانبي",
      "السلامة الرقمية",
    ],
  },
  {
    title_en: "Community & Accountability",
    title_ar: "المجتمع والمتابعة",
    items_en: [
      "WhatsApp group support",
      "Weekly live classes",
      "1-on-1 coaching calls",
      "Goal tracking",
      "Accountability check-ins",
      "Motivation support",
      "Class recordings",
      "Homework support",
      "Arabic-speaking team",
      "Safe newcomer community",
    ],
    items_ar: [
      "دعم مجموعة واتساب",
      "حصص مباشرة أسبوعية",
      "مكالمات توجيه فردية",
      "متابعة الأهداف",
      "مراجعات المسؤولية",
      "دعم التحفيز",
      "تسجيلات الحصص",
      "دعم الواجبات",
      "فريق يتحدث العربية",
      "مجتمع آمن للوافدين",
    ],
  },
  {
    title_en: "Money & Business Help",
    title_ar: "المال والأعمال",
    items_en: [
      "Budgeting",
      "Saving money",
      "Credit building",
      "Side hustle planning",
      "Small business basics",
      "Freelancing support",
      "Marketplace selling",
      "Invoicing basics",
      "Contracts basics",
      "Income strategy",
    ],
    items_ar: [
      "إعداد الميزانية",
      "توفير المال",
      "بناء الائتمان",
      "تخطيط العمل الجانبي",
      "أساسيات المشاريع الصغيرة",
      "دعم العمل الحر",
      "البيع عبر المنصات",
      "أساسيات الفواتير",
      "أساسيات العقود",
      "استراتيجية الدخل",
    ],
  },
  {
    title_en: "Advanced / Future Services",
    title_ar: "خدمات متقدمة / مستقبلية",
    items_en: [
      "Mentorship",
      "Industry coaching",
      "Interview bootcamps",
      "Leadership English",
      "Advanced confidence practice",
      "Business growth support",
      "Community events",
      "Networking sessions",
      "Family support programs",
      "Custom success roadmap",
    ],
    items_ar: [
      "الإرشاد",
      "تدريب حسب المجال",
      "معسكرات المقابلات",
      "إنجليزية القيادة",
      "تدريب متقدم على الثقة",
      "دعم نمو الأعمال",
      "فعاليات مجتمعية",
      "جلسات بناء العلاقات",
      "برامج دعم العائلة",
      "خارطة طريق مخصصة",
    ],
  },
];

export default function Services() {
  const { language } = useLanguage();
  const isAr = language === "ar";

  return (
    <div style={{ width: "100%" }}>
      <section style={{ padding: "68px 5% 44px", background: `linear-gradient(135deg, ${BG}, #e8fffe)`, textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(129,216,208,0.14)", border: "1px solid rgba(129,216,208,0.28)", color: TDK, padding: "6px 14px", borderRadius: "14px", fontSize: "11px", fontWeight: 700, letterSpacing: "1.2px", textTransform: "uppercase", marginBottom: "12px" }}>
          🧾 {isAr ? "كل الخدمات" : "ALL SERVICES"}
        </div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px,4vw,54px)", fontWeight: 800, color: TDK, marginBottom: "12px" }}>
          {isAr ? <>كل الدعم الذي تحتاجه للنجاح في <em style={{ color: GOLD, fontStyle: "normal" }}>كندا</em></> : <>All the Support You Need to Succeed in <em style={{ color: GOLD, fontStyle: "normal" }}>Canada</em></>}
        </h1>
        <p style={{ fontSize: "17px", color: MID, maxWidth: "760px", margin: "0 auto" }}>
          {isAr ? "هذه الصفحة تجمع كل أفكار الخدمات والدعم في مكان واحد — بشكل واضح، شامل، ومتوافق مع الجوال." : "This page gathers all service ideas in one place — clear, comprehensive, and mobile-friendly."}
        </p>
      </section>
      <section style={{ padding: "72px 5%", background: "#fff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "18px" }}>
          {sections.map((section) => (
            <div key={section.title_en} style={{ borderRadius: "18px", padding: "24px", background: BG, border: "1px solid rgba(129,216,208,0.16)" }}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "24px", fontWeight: 800, color: TDK, marginBottom: "14px" }}>{isAr ? section.title_ar : section.title_en}</h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {(isAr ? section.items_ar : section.items_en).map((item) => (
                  <span key={item} style={{ background: "#fff", border: "1px solid rgba(129,216,208,0.18)", color: MID, padding: "8px 11px", borderRadius: "999px", fontSize: "12px", fontWeight: 600 }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section style={{ background: TDK, padding: "70px 5%", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px,3vw,38px)", fontWeight: 800, color: "#fff", marginBottom: "14px" }}>
            {isAr ? "جاهز لتبدأ؟" : "Ready to Get Started?"}
          </h2>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "17px", marginBottom: "26px" }}>
            {isAr ? "احجز تقييمك المجاني وسنحدد لك أفضل مسار من خدماتنا." : "Book your free assessment and we'll map the best service path for you."}
          </p>
          <Link href="/assessment" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: GOLD, color: TDK, padding: "16px 38px", borderRadius: "32px", fontSize: "16px", fontWeight: 800, textDecoration: "none" }}>
            📋 {isAr ? "احجز تقييمك المجاني" : "Book Your Free Assessment"}
          </Link>
        </div>
      </section>
    </div>
  );
}