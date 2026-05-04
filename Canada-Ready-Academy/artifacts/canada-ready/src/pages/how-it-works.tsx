import { useLanguage } from "@/lib/language-context";
import { Link } from "wouter";

const T = "#66E6DE"; const TDK = "#007A77"; const GOLD = "#C9903A"; const GOLD_LT = "#E8B84B"; const BG = "#F5FFFE"; const MID = "#4A6B69";

export default function HowItWorks() {
  const { language } = useLanguage();
  const isAr = language === "ar";

  const steps = [
    {
      num: "1", icon: "📋",
      en: "Book Your Free Assessment", ar: "احجز تقييمك المجاني",
      desc_en: "Fill out our short form online and schedule a 15–20 minute call with our team. It is completely free and commits you to nothing.",
      desc_ar: "امل استمارتنا القصيرة عبر الإنترنت وحدد موعد مكالمة مدتها 15–20 دقيقة مع فريقنا. مجانية تماماً ولا تُلزمك بشيء.",
      detail_en: ["Takes only 3 minutes to fill out", "Schedule at a time that works for you", "Call is in Arabic — no English required", "No credit card, no payment needed"],
      detail_ar: ["يستغرق 3 دقائق فقط لملئه", "حدد موعداً يناسبك", "المكالمة بالعربية — لا حاجة للإنجليزية", "لا بطاقة ائتمان، لا دفع مطلوب"],
    },
    {
      num: "2", icon: "🤝",
      en: "Meet Our Team — Your English & Career Interview", ar: "التق بفريقنا — مقابلة اللغة والمهنة",
      desc_en: "During the call, we check your English level, ask about your career goals, understand your work background, and learn about your newcomer struggles.",
      desc_ar: "خلال المكالمة نتحقق من مستوى إنجليزيتك، ونسأل عن أهدافك المهنية، ونفهم خلفيتك العملية، ونتعرف على تحديات حياتك الجديدة.",
      detail_en: ["English level check (Beginner or Intermediate)", "We ask about your job history and goals", "We understand your biggest challenges", "We explain how our program works"],
      detail_ar: ["تحديد مستوى الإنجليزية (مبتدئ أو متوسط)", "نسأل عن تاريخك الوظيفي وأهدافك", "نفهم أكبر تحدياتك", "نشرح لك كيف يعمل برنامجنا"],
    },
    {
      num: "3", icon: "📚",
      en: "Choose Your Program", ar: "اختر برنامجك",
      desc_en: "Based on your assessment, we recommend the best plan and level (Beginner or Intermediate group) for your specific situation and budget.",
      desc_ar: "بناءً على تقييمك، نوصيك بأفضل خطة ومستوى (مجموعة مبتدئين أو متوسطين) يناسب وضعك وميزانيتك.",
      detail_en: ["Starter ($79) — Beginner English focus", "Premium ($129) — Career preparation added", "Career Boost ($179) — Life in Canada added", "Canada Ready ($249) — Complete newcomer support"],
      detail_ar: ["البداية ($79) — تركيز على الإنجليزية الأساسية", "المميز ($129) — يضاف التحضير المهني", "الانطلاقة ($179) — يضاف دعم الحياة في كندا", "جاهز لكندا ($249) — دعم شامل للوافدين"],
    },
    {
      num: "4", icon: "💬",
      en: "Join Classes & Community", ar: "انضم للحصص والمجتمع",
      desc_en: "You receive your WhatsApp group invite, Zoom links, welcome booklet, class schedule, and homework access — all within 24 hours.",
      desc_ar: "تحصل على دعوة مجموعة واتساب، روابط زووم، كتيب ترحيبي، جدول الحصص، ووصول إلى الواجبات — كل ذلك خلال 24 ساعة.",
      detail_en: ["WhatsApp group with classmates & coach", "Zoom links for all 3 weekly classes", "Printable welcome booklet", "First week is FREE — try before you commit"],
      detail_ar: ["مجموعة واتساب مع الزملاء والمدرب", "روابط زووم لجميع الحصص الأسبوعية الثلاث", "كتيب ترحيبي قابل للطباعة", "الأسبوع الأول مجاني — جرّب قبل الالتزام"],
    },
    {
      num: "5", icon: "🚀",
      en: "Receive Weekly Support & Build Your Future", ar: "احصل على الدعم الأسبوعي وابنِ مستقبلك",
      desc_en: "Attend 3 live classes per week, receive coaching calls based on your plan, get WhatsApp support, and achieve your goals in Canada — step by step.",
      desc_ar: "احضر 3 حصص مباشرة أسبوعياً، واحصل على مكالمات توجيه حسب خطتك، ودعم مستمر عبر واتساب، وحقق أهدافك في كندا خطوة بخطوة.",
      detail_en: ["Monday: English Foundations class", "Wednesday: Conversation & Pronunciation class", "Friday: Career & Canada Life Workshop", "Monthly 1-on-1 coaching calls (based on plan)"],
      detail_ar: ["الاثنين: حصة أسس الإنجليزية", "الأربعاء: حصة المحادثة والنطق", "الجمعة: ورشة المهنة والحياة الكندية", "مكالمات توجيه شهرية (حسب الخطة)"],
      last: true,
    },
  ];

  const stag = { display: "inline-flex" as const, alignItems: "center", gap: "6px", background: "rgba(129,216,208,0.1)", border: "1px solid rgba(129,216,208,0.28)", color: TDK, padding: "6px 14px", borderRadius: "14px", fontSize: "11px", fontWeight: 700, letterSpacing: "1.2px", textTransform: "uppercase" as const, marginBottom: "12px" };

  return (
    <div style={{ width: "100%" }}>
      {/* Header */}
      <section style={{ padding: "60px 5% 50px", background: `linear-gradient(135deg,${BG},#e8fffe)`, textAlign: "center" }}>
        <div style={stag}>🔄 {isAr ? "كيف يعمل" : "HOW IT WORKS"}</div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 800, color: TDK, marginBottom: "12px" }}>
          {isAr ? "مسارك من وافد جديد إلى كندي واثق" : "Your Path From Newcomer to Confident Canadian"}
        </h1>
        <p style={{ fontSize: "17px", color: MID, maxWidth: "560px", margin: "0 auto" }}>
          {isAr ? "5 خطوات بسيطة تبدأ بمكالمة مجانية لمدة 15 دقيقة." : "5 simple steps starting with a free 15-minute call."}
        </p>
        <Link href="/assessment" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: GOLD, color: TDK, padding: "14px 32px", borderRadius: "30px", fontSize: "15px", fontWeight: 800, textDecoration: "none", marginTop: "20px" }} data-testid="hiw-book-btn">
          📋 {isAr ? "احجز موعدك المجاني" : "Book Appointment"}
        </Link>
      </section>

      {/* Steps */}
      <section style={{ padding: "72px 5%", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          {steps.map((step, i) => (
            <div key={step.num} style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: "22px", alignItems: "start", background: step.last ? `linear-gradient(135deg,${TDK},#0d9e99)` : BG, borderRadius: "18px", padding: "26px", border: step.last ? "none" : "1px solid rgba(10,186,181,0.15)", marginBottom: "22px" }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ width: "56px", height: "56px", background: step.last ? "rgba(255,255,255,0.15)" : TDK, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 700, color: step.last ? "#fff" : GOLD_LT, margin: "0 auto 8px", boxShadow: step.last ? "none" : `0 4px 16px rgba(10,186,181,0.3)` }}>{step.num}</div>
                <div style={{ fontSize: "28px" }}>{step.icon}</div>
              </div>
              <div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 700, color: step.last ? "#fff" : TDK, marginBottom: "8px" }}>{isAr ? step.ar : step.en}</h3>
                <p style={{ fontSize: "15px", color: step.last ? "rgba(255,255,255,0.85)" : MID, lineHeight: 1.7, marginBottom: "14px" }}>{isAr ? step.desc_ar : step.desc_en}</p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "6px" }}>
                  {(isAr ? step.detail_ar : step.detail_en).map((d, j) => (
                    <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "13.5px", color: step.last ? "rgba(255,255,255,0.75)" : MID }}>
                      <span style={{ color: step.last ? GOLD_LT : GOLD, fontWeight: 800, flexShrink: 0 }}>✓</span>{d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* After assessment what you receive */}
      <section style={{ padding: "72px 5%", background: BG }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "start" }}>
          <div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(22px,3vw,34px)", fontWeight: 800, color: TDK, marginBottom: "16px" }}>
              {isAr ? "ماذا تحصل عليه بعد التقييم؟" : "What You Receive After Assessment"}
            </h2>
            <p style={{ fontSize: "15px", color: MID, lineHeight: 1.7, marginBottom: "20px" }}>
              {isAr ? "بمجرد الانضمام، ستحصل على كل ما تحتاجه للبدء خلال 24 ساعة." : "Once you join, you'll receive everything you need to start within 24 hours."}
            </p>
            {[
              { icon: "💬", en: "WhatsApp group invitation with classmates & coach", ar: "دعوة مجموعة واتساب مع الزملاء والمدرب" },
              { icon: "📹", en: "Zoom links for all 3 weekly classes", ar: "روابط زووم لجميع الحصص الأسبوعية" },
              { icon: "📅", en: "Your weekly class schedule", ar: "جدول حصصك الأسبوعي" },
              { icon: "📖", en: "Welcome booklet (in Arabic and English)", ar: "كتيب ترحيبي (بالعربية والإنجليزية)" },
              { icon: "📝", en: "Homework access and practice materials", ar: "الوصول للواجبات ومواد التمرين" },
              { icon: "🎁", en: "First week is completely FREE", ar: "الأسبوع الأول مجاني تماماً" },
            ].map((item) => (
              <div key={item.icon} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 16px", borderRadius: "12px", background: "#fff", border: "1px solid rgba(10,186,181,0.12)", marginBottom: "10px" }}>
                <span style={{ fontSize: "22px" }}>{item.icon}</span>
                <span style={{ fontSize: "14px", color: MID, fontWeight: 500 }}>{isAr ? item.ar : item.en}</span>
              </div>
            ))}
          </div>
          <div style={{ background: TDK, borderRadius: "22px", padding: "38px", color: "#fff" }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 700, color: GOLD_LT, marginBottom: "20px" }}>
              {isAr ? "جدول الصفوف الأسبوعي" : "Weekly Class Schedule"}
            </div>
            {[
              { color: "#66E6DE", day_en: "Monday", day_ar: "الاثنين", title_en: "English Foundations", title_ar: "أسس الإنجليزية", desc_en: "Grammar, vocabulary, reading & writing", desc_ar: "القواعد، المفردات، القراءة والكتابة" },
              { color: GOLD_LT, day_en: "Wednesday", day_ar: "الأربعاء", title_en: "Conversation & Pronunciation", title_ar: "المحادثة والنطق", desc_en: "Speaking confidence & pronunciation drills", desc_ar: "ثقة الكلام وتدريبات النطق" },
              { color: "#6EDA8E", day_en: "Friday", day_ar: "الجمعة", title_en: "Career & Canada Life Workshop", title_ar: "ورشة المهنة والحياة الكندية", desc_en: "Jobs, interviews, Canadian life topics", desc_ar: "الوظائف، المقابلات، الحياة الكندية" },
            ].map((d) => (
              <div key={d.day_en} style={{ marginBottom: "20px", paddingBottom: "20px", borderBottom: "1px solid rgba(255,255,255,0.12)" }}>
                <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: d.color, marginBottom: "4px" }}>{isAr ? d.day_ar : d.day_en}</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", fontWeight: 700, marginBottom: "4px" }}>{isAr ? d.title_ar : d.title_en}</div>
                <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.65)" }}>{isAr ? d.desc_ar : d.desc_en}</div>
              </div>
            ))}
            <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: "10px", padding: "12px 16px", fontSize: "13px", color: "rgba(255,255,255,0.7)", textAlign: "center" }}>
              🕐 {isAr ? "جميع الحصص عبر زووم — مباشرة" : "All classes via Zoom — live online"}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: TDK, padding: "72px 5%", textAlign: "center" }}>
        <div style={{ maxWidth: "560px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px,3vw,38px)", fontWeight: 800, color: "#fff", marginBottom: "14px" }}>
            {isAr ? "مستعد للبدء؟" : "Ready to Start?"}
          </h2>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "17px", marginBottom: "28px" }}>
            {isAr ? "احجز تقييمك المجاني اليوم. يستغرق 15–20 دقيقة وقد يغير حياتك في كندا." : "Book your free assessment today. It takes 15–20 minutes and could change your life in Canada."}
          </p>
          <Link href="/assessment" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: GOLD, color: TDK, padding: "16px 40px", borderRadius: "32px", fontSize: "16px", fontWeight: 800, textDecoration: "none" }} data-testid="hiw-cta">
            📋 {isAr ? "احجز تقييمك المجاني" : "Book Your Free Assessment"}
          </Link>
        </div>
      </section>
    </div>
  );
}
