import { useLanguage } from "@/lib/language-context";
import { Link } from "wouter";

const T = "#0ABAB5"; const TDK = "#007A77"; const GOLD = "#C9903A"; const GOLD_LT = "#E8B84B"; const BG = "#F5FFFE"; const MID = "#4A6B69";

export default function Programs() {
  const { language } = useLanguage();
  const isAr = language === "ar";

  const plans = [
    {
      name_en: "Starter", name_ar: "البداية",
      price: "$79", per_en: "/ month", per_ar: "/ شهر",
      for_en: "Best for: New beginners building confidence in English", for_ar: "الأنسب لـ: المبتدئين الجدد الذين يبنون ثقتهم",
      featured: false,
      features_en: ["3 live weekly classes (Mon, Wed, Fri)", "English speaking practice sessions", "Vocabulary & grammar building", "Homework & weekly quizzes", "WhatsApp support group access", "Daily English practice exercises", "Class recordings to review"],
      features_ar: ["3 حصص أسبوعية مباشرة (إثنين، أربعاء، جمعة)", "جلسات ممارسة التحدث بالإنجليزية", "بناء المفردات والقواعد", "واجبات منزلية واختبارات أسبوعية", "الدعم عبر مجموعة واتساب", "تمارين إنجليزية يومية", "تسجيلات الحصص للمراجعة"],
    },
    {
      name_en: "Premium", name_ar: "المميز",
      price: "$129", per_en: "/ month", per_ar: "/ شهر",
      for_en: "Best for: Students preparing for their first Canadian job", for_ar: "الأنسب لـ: الطلاب الذين يستعدون لأول وظيفة كندية",
      featured: true,
      features_en: ["Everything in Starter, PLUS:", "1 monthly 1-on-1 coaching call (45 min)", "Canadian resume building", "Cover letter writing", "LinkedIn profile setup & optimization", "Job application strategy", "Interview preparation", "Workplace English & professional emails", "Mock interviews with feedback"],
      features_ar: ["كل شيء في باقة البداية، بالإضافة إلى:", "مكالمة توجيه خاصة شهرياً (45 دقيقة)", "بناء السيرة الذاتية الكندية", "كتابة خطاب التغطية", "إعداد ملف لينكدإن وتحسينه", "استراتيجية التقديم على الوظائف", "التحضير للمقابلات", "إنجليزي العمل والبريد الإلكتروني المهني", "مقابلات تجريبية مع ملاحظات"],
    },
    {
      name_en: "Career Boost", name_ar: "الانطلاقة المهنية",
      price: "$179", per_en: "/ month", per_ar: "/ شهر",
      for_en: "Best for: Students needing career + Canadian life support", for_ar: "الأنسب لـ: الطلاب الذين يحتاجون دعماً مهنياً وللحياة الكندية",
      featured: false,
      features_en: ["Everything in Premium, PLUS:", "2 monthly 1-on-1 coaching calls", "Banking & credit score guidance", "CRA / income tax basics", "Renting & housing support", "Healthcare system navigation", "Alberta government documents guidance", "Digital & computer skills support", "Side hustle & gig work guidance", "Driving test prep resources"],
      features_ar: ["كل شيء في الباقة المميزة، بالإضافة إلى:", "مكالمتا توجيه خاصة شهرياً", "توجيه بنكي ودرجة الائتمان", "أساسيات CRA وضريبة الدخل", "دعم الإيجار والسكن", "التنقل في نظام الرعاية الصحية", "توجيه وثائق حكومة ألبرتا", "دعم مهارات الحاسوب والرقمية", "توجيه عمل جانبي وتطبيقات التوصيل", "موارد التحضير لاختبار القيادة"],
    },
    {
      name_en: "Canada Ready", name_ar: "جاهز لكندا",
      price: "$249", per_en: "/ month", per_ar: "/ شهر",
      for_en: "Best for: Students wanting complete newcomer support", for_ar: "الأنسب لـ: الطلاب الذين يريدون دعماً شاملاً للوافدين",
      featured: false,
      features_en: ["Everything in Career Boost, PLUS:", "3 monthly 1-on-1 coaching calls", "Small business startup guidance", "How to register a business in Alberta", "Self-employment & freelancing basics", "Canadian invoicing & contracts basics", "Side hustle income strategy", "Marketplace selling (Amazon, Kijiji, etc.)", "Immigration document organization", "IRCC portal navigation help", "Citizenship / PR English preparation", "Personalized 90-day success roadmap", "VIP priority support access"],
      features_ar: ["كل شيء في باقة الانطلاقة، بالإضافة إلى:", "3 مكالمات توجيه خاصة شهرياً", "توجيه بدء مشروع صغير", "كيفية تسجيل عمل تجاري في ألبرتا", "أساسيات العمل الحر والمستقل", "أساسيات الفواتير والعقود الكندية", "استراتيجية دخل من العمل الجانبي", "البيع في الأسواق (أمازون، كيجيجي، وغيرها)", "تنظيم وثائق الهجرة", "مساعدة في التعامل مع بوابة IRCC", "تحضير إنجليزي للمواطنة / الإقامة الدائمة", "خارطة طريق نجاح شخصية لمدة 90 يوماً", "وصول VIP للدعم الأولوي"],
    },
  ];

  const sec = { padding: "80px 5%" };
  const secIn = { maxWidth: "1200px", margin: "0 auto" };

  return (
    <div style={{ width: "100%" }}>
      {/* Header */}
      <section style={{ padding: "60px 5% 50px", background: `linear-gradient(135deg, ${BG}, #e8fffe)`, textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(10,186,181,0.1)", border: "1px solid rgba(10,186,181,0.28)", color: TDK, padding: "6px 14px", borderRadius: "14px", fontSize: "11px", fontWeight: 700, letterSpacing: "1.2px", textTransform: "uppercase" as const, marginBottom: "12px" }}>
          📚 {isAr ? "برامجنا" : "OUR PROGRAMS"}
        </div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 800, color: TDK, marginBottom: "12px" }}>{isAr ? "اختر خطتك" : "Choose Your Plan"}</h1>
        <p style={{ fontSize: "17px", color: MID, maxWidth: "560px", margin: "0 auto" }}>{isAr ? "أسعار بسيطة وواضحة. إلغاء في أي وقت. ابدأ بتقييم مجاني." : "Simple, clear pricing. Cancel anytime. Start with a free assessment."}</p>
      </section>

      {/* Pricing cards */}
      <section style={{ ...sec, background: "#fff" }}>
        <div style={secIn}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "18px" }}>
            {plans.map((plan) => (
              <div key={plan.name_en} style={{ background: plan.featured ? TDK : "#fff", border: plan.featured ? `2px solid ${GOLD}` : "1px solid rgba(10,186,181,0.18)", borderRadius: "18px", padding: "28px 22px", position: "relative", display: "flex", flexDirection: "column", transition: "0.3s" }}
                onMouseEnter={e => { if (!plan.featured) { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 16px 40px rgba(10,186,181,0.18)"; } }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = ""; (e.currentTarget as HTMLDivElement).style.boxShadow = ""; }}
              >
                {plan.featured && (
                  <div style={{ position: "absolute", top: "-13px", left: "50%", transform: "translateX(-50%)", background: GOLD, color: TDK, fontSize: "10px", fontWeight: 800, padding: "4px 13px", borderRadius: "11px", letterSpacing: "0.8px", textTransform: "uppercase", whiteSpace: "nowrap" }}>
                    ⭐ {isAr ? "الأكثر شعبية" : "MOST POPULAR"}
                  </div>
                )}
                <div style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "1.8px", textTransform: "uppercase", color: plan.featured ? "rgba(255,255,255,0.5)" : "#8896AB", marginBottom: "9px" }}>{isAr ? plan.name_ar : plan.name_en}</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "44px", fontWeight: 700, color: plan.featured ? "#fff" : TDK, lineHeight: 1 }}>{plan.price}</div>
                <div style={{ fontSize: "12.5px", color: plan.featured ? "rgba(255,255,255,0.5)" : "#8896AB", marginBottom: "4px" }}>{isAr ? plan.per_ar : plan.per_en}</div>
                <div style={{ background: plan.featured ? "rgba(201,144,58,0.18)" : "rgba(10,186,181,0.08)", border: plan.featured ? "none" : "1px solid rgba(10,186,181,0.2)", borderRadius: "10px", padding: "9px 12px", fontSize: "12px", color: plan.featured ? GOLD_LT : TDK, fontWeight: 600, margin: "13px 0", lineHeight: 1.5 }}>
                  {isAr ? plan.for_ar : plan.for_en}
                </div>
                <div style={{ height: "1px", background: plan.featured ? "rgba(255,255,255,0.12)" : "rgba(10,186,181,0.12)", margin: "12px 0" }} />
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px", flex: 1, marginBottom: "20px" }}>
                  {(isAr ? plan.features_ar : plan.features_en).map((feat, i) => (
                    <li key={i} style={{ fontSize: "13px", color: plan.featured ? "rgba(255,255,255,0.85)" : MID, display: "flex", alignItems: "flex-start", gap: "7px", lineHeight: 1.5 }}>
                      <span style={{ color: GOLD, fontWeight: 800, flexShrink: 0, marginTop: "1px" }}>✓</span>
                      {feat}
                    </li>
                  ))}
                </ul>
                <Link href="/assessment" style={{ display: "block", width: "100%", padding: "13px", borderRadius: "24px", border: plan.featured ? `1.5px solid ${GOLD}` : "1.5px solid rgba(10,186,181,0.3)", background: plan.featured ? GOLD : "transparent", color: plan.featured ? TDK : TDK, fontSize: "13.5px", fontWeight: 700, cursor: "pointer", textDecoration: "none", textAlign: "center", transition: "0.25s", fontFamily: "inherit" }} data-testid={`btn-plan-${plan.name_en}`}>
                  📋 {isAr ? "احجز تقييماً مجانياً" : "Book Free Assessment"}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly coaching comparison */}
      <section style={{ ...sec, background: BG }}>
        <div style={{ ...secIn, maxWidth: "700px" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px,3vw,36px)", fontWeight: 800, color: TDK }}>{isAr ? "مكالمات التوجيه الشهرية" : "Monthly 1-on-1 Coaching Calls"}</h2>
            <p style={{ fontSize: "16px", color: MID, marginTop: "8px" }}>{isAr ? "مكالمات خاصة مع مدربك حسب خطتك." : "Private calls with your coach, based on your plan."}</p>
          </div>
          {[
            { plan_en: "Starter $79/mo", plan_ar: "البداية $79/شهر", calls: "0", note_en: "Group support via WhatsApp", note_ar: "دعم جماعي عبر واتساب" },
            { plan_en: "Premium $129/mo", plan_ar: "المميز $129/شهر", calls: "1", note_en: "1 private coaching call (45 min)", note_ar: "مكالمة توجيه خاصة (45 دقيقة)" },
            { plan_en: "Career Boost $179/mo", plan_ar: "الانطلاقة $179/شهر", calls: "2", note_en: "2 private coaching calls", note_ar: "مكالمتان خاصتان" },
            { plan_en: "Canada Ready $249/mo", plan_ar: "جاهز لكندا $249/شهر", calls: "3", note_en: "3 private coaching calls + VIP access", note_ar: "3 مكالمات خاصة + وصول VIP" },
          ].map((row, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", borderRadius: "14px", border: "1px solid rgba(10,186,181,0.15)", background: "#fff", marginBottom: "10px" }}>
              <span style={{ fontWeight: 700, color: TDK, fontSize: "15px" }}>{isAr ? row.plan_ar : row.plan_en}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: row.calls === "0" ? "#f0f0f0" : `rgba(10,186,181,0.12)`, color: row.calls === "0" ? "#aaa" : TDK, fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "18px", display: "flex", alignItems: "center", justifyContent: "center" }}>{row.calls}</div>
                <span style={{ fontSize: "13px", color: MID }}>{isAr ? row.note_ar : row.note_en}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: TDK, padding: "72px 5%", textAlign: "center" }}>
        <div style={{ maxWidth: "560px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px,3vw,38px)", fontWeight: 800, color: "#fff", marginBottom: "14px" }}>
            {isAr ? "لست متأكداً أي خطة تناسبك؟" : "Not sure which plan is right for you?"}
          </h2>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "17px", marginBottom: "28px" }}>
            {isAr ? "احجز تقييمك المجاني وسنوصي لك بأفضل خطة." : "Book your free assessment and we'll recommend the best plan for your level and goals."}
          </p>
          <Link href="/assessment" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: GOLD, color: TDK, padding: "16px 40px", borderRadius: "32px", fontSize: "16px", fontWeight: 800, textDecoration: "none" }} data-testid="programs-cta">
            📋 {isAr ? "احجز تقييمك المجاني" : "Book Your Free Assessment"}
          </Link>
        </div>
      </section>
    </div>
  );
}
