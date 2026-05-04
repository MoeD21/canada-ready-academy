import { useLanguage } from "@/lib/language-context";
import { Link } from "wouter";

const TDK = "#007A77";
const GOLD = "#C9903A";
const GOLD_LT = "#E8B84B";
const BG = "#F5FFFE";
const MID = "#4A6B69";

export default function Programs() {
  const { language } = useLanguage();
  const isAr = language === "ar";

  const plans = [
    { name_en: "Starter", name_ar: "البداية", price: "$79", per_en: "/ month", per_ar: "/ شهر", featured: false, for_en: "Best for: New beginners building confidence in English", for_ar: "الأنسب لـ: المبتدئين الجدد الذين يبنون ثقتهم", features_en: ["3 live weekly classes", "Speaking practice", "Vocabulary & grammar", "Homework & quizzes", "WhatsApp support"], features_ar: ["3 حصص أسبوعية مباشرة", "ممارسة التحدث", "المفردات والقواعد", "واجبات واختبارات", "دعم واتساب"] },
    { name_en: "Premium", name_ar: "المميز", price: "$129", per_en: "/ month", per_ar: "/ شهر", featured: true, for_en: "Best for: Students preparing for their first Canadian job", for_ar: "الأنسب لـ: الطلاب الذين يستعدون لأول وظيفة كندية", features_en: ["Everything in Starter", "1 monthly coaching call", "Canadian resume", "Cover letter", "LinkedIn setup", "Mock interviews"], features_ar: ["كل شيء في البداية", "مكالمة توجيه شهرية", "سيرة ذاتية كندية", "خطاب تغطية", "إعداد لينكدإن", "مقابلات تجريبية"] },
    { name_en: "Career Boost", name_ar: "الانطلاقة المهنية", price: "$179", per_en: "/ month", per_ar: "/ شهر", featured: false, for_en: "Best for: Students needing career + Canadian life support", for_ar: "الأنسب لـ: الطلاب الذين يحتاجون دعماً مهنياً وللحياة الكندية", features_en: ["Everything in Premium", "2 monthly coaching calls", "Banking & credit", "CRA basics", "Renting & housing", "Healthcare navigation"], features_ar: ["كل شيء في المميز", "مكالمتان شهريتان", "البنوك والائتمان", "أساسيات CRA", "الإيجار والسكن", "التنقل الصحي"] },
    { name_en: "Canada Ready", name_ar: "جاهز لكندا", price: "$249", per_en: "/ month", per_ar: "/ شهر", featured: false, for_en: "Best for: Students wanting complete newcomer support", for_ar: "الأنسب لـ: الطلاب الذين يريدون دعماً شاملاً للوافدين", features_en: ["Everything in Career Boost", "3 monthly coaching calls", "Business startup guidance", "Freelancing basics", "Immigration document help", "90-day success roadmap"], features_ar: ["كل شيء في الانطلاقة", "3 مكالمات شهرية", "توجيه بدء مشروع", "أساسيات العمل الحر", "مساعدة في الوثائق", "خارطة طريق 90 يوماً"] },
  ];

  return (
    <div style={{ width: "100%", direction: isAr ? "rtl" : "ltr" }}>
      <section style={{ padding: "60px 5% 44px", background: `linear-gradient(135deg, ${BG}, #edfdfb)`, textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(129,216,208,0.12)", border: "1px solid rgba(129,216,208,0.25)", color: TDK, padding: "6px 14px", borderRadius: "14px", fontSize: "11px", fontWeight: 700, letterSpacing: "1.2px", textTransform: "uppercase", marginBottom: "12px" }}>📚 {isAr ? "برامجنا" : "OUR PROGRAMS"}</div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 800, color: TDK, marginBottom: "12px" }}>{isAr ? "اختر خطتك" : "Choose Your Plan"}</h1>
        <p style={{ fontSize: "17px", color: MID, maxWidth: "560px", margin: "0 auto" }}>{isAr ? "أسعار بسيطة وواضحة. ألغِ في أي وقت. ابدأ بتقييم مجاني." : "Simple, clear pricing. Cancel anytime. Start with a free assessment."}</p>
      </section>

      <section style={{ padding: "72px 5%", background: "#fff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "18px" }}>
          {plans.map((plan) => (
            <div key={plan.name_en} style={{ background: plan.featured ? TDK : "#fff", border: plan.featured ? `2px solid ${GOLD}` : "1px solid rgba(129,216,208,0.18)", borderRadius: "18px", padding: "28px 22px", position: "relative", display: "flex", flexDirection: "column", direction: isAr ? "rtl" : "ltr" }}>
              {plan.featured && <div style={{ position: "absolute", top: "-13px", left: "50%", transform: "translateX(-50%)", background: GOLD, color: TDK, fontSize: "10px", fontWeight: 800, padding: "4px 13px", borderRadius: "11px", letterSpacing: "0.8px", textTransform: "uppercase", whiteSpace: "nowrap" }}>⭐ {isAr ? "الأكثر شعبية" : "MOST POPULAR"}</div>}
              <div style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "1.8px", textTransform: "uppercase", color: plan.featured ? "rgba(255,255,255,0.5)" : "#8896AB", marginBottom: "9px" }}>{isAr ? plan.name_ar : plan.name_en}</div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "44px", fontWeight: 700, color: plan.featured ? "#fff" : TDK, lineHeight: 1 }}>{plan.price}</div>
              <div style={{ fontSize: "12.5px", color: plan.featured ? "rgba(255,255,255,0.5)" : "#8896AB", marginBottom: "4px" }}>{isAr ? plan.per_ar : plan.per_en}</div>
              <div style={{ background: plan.featured ? "rgba(201,144,58,0.18)" : "rgba(129,216,208,0.08)", border: plan.featured ? "none" : "1px solid rgba(129,216,208,0.2)", borderRadius: "10px", padding: "9px 12px", fontSize: "12px", color: plan.featured ? GOLD_LT : TDK, fontWeight: 600, margin: "13px 0", lineHeight: 1.5 }}>{isAr ? plan.for_ar : plan.for_en}</div>
              <div style={{ height: "1px", background: plan.featured ? "rgba(255,255,255,0.12)" : "rgba(129,216,208,0.12)", margin: "12px 0" }} />
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px", flex: 1, marginBottom: "20px", padding: 0 }}>
                {(isAr ? plan.features_ar : plan.features_en).map((feat, i) => (
                  <li key={i} style={{ fontSize: "13px", color: plan.featured ? "rgba(255,255,255,0.85)" : MID, display: "flex", alignItems: "flex-start", gap: "7px", lineHeight: 1.5, justifyContent: isAr ? "flex-end" : "flex-start", textAlign: isAr ? "right" : "left" }}>
                    <span style={{ color: GOLD, fontWeight: 800, flexShrink: 0, marginTop: "1px" }}>✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              <Link href="/assessment" style={{ display: "block", width: "100%", padding: "13px", borderRadius: "24px", border: plan.featured ? `1.5px solid ${GOLD}` : "1.5px solid rgba(129,216,208,0.3)", background: plan.featured ? GOLD : "transparent", color: TDK, fontSize: "13.5px", fontWeight: 700, cursor: "pointer", textDecoration: "none", textAlign: "center", transition: "0.25s", fontFamily: "inherit" }}>📋 {isAr ? "احجز تقييماً مجانياً" : "Book Free Assessment"}</Link>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: BG, padding: "72px 5%" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px,3vw,42px)", fontWeight: 800, color: TDK, marginBottom: "12px" }}>{isAr ? "كيف يعمل الأسبوع؟" : "How the Week Works"}</h2>
            <p style={{ color: MID, fontSize: "16px", lineHeight: 1.7 }}>{isAr ? "3 حصص مباشرة أسبوعياً مع دعم واتساب ومكالمات توجيه حسب خطتك." : "3 live classes every week with WhatsApp support and coaching calls based on your plan."}</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { day: isAr ? "الاثنين" : "Monday", nameAr: "أساسيات الإنجليزية", nameEn: "English Foundations", descAr: "قواعد ومفردات ومهارات كتابة", descEn: "Grammar, vocabulary, and writing skills" },
              { day: isAr ? "الأربعاء" : "Wednesday", nameAr: "المحادثة والنطق", nameEn: "Conversation & Pronunciation", descAr: "الثقة في التحدث وممارسة النطق", descEn: "Speaking confidence and pronunciation practice" },
              { day: isAr ? "الجمعة" : "Friday", nameAr: "ورشة المهنة والحياة الكندية", nameEn: "Career & Canada Life Workshop", descAr: "مهارات العمل والحياة الكندية", descEn: "Job skills and Canadian life guidance" },
            ].map((step) => (
              <div key={step.day} style={{ background: "#fff", border: "1px solid rgba(129,216,208,0.22)", borderRadius: "16px", padding: "18px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "14px", direction: isAr ? "rtl" : "ltr" }}>
                <div>
                  <div style={{ fontWeight: 800, color: TDK, marginBottom: "4px" }}>{step.day}</div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: TDK }}>{isAr ? step.nameAr : step.nameEn}</div>
                  <div style={{ fontSize: "13px", color: MID, marginTop: "3px" }}>{isAr ? step.descAr : step.descEn}</div>
                </div>
                <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: `linear-gradient(135deg, ${GOLD} 0%, ${GOLD_LT} 100%)`, color: TDK, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900 }}>✓</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
