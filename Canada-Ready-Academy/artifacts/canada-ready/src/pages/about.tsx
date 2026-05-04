import { useLanguage } from "@/lib/language-context";
import { Link } from "wouter";

const T = "#66E6DE"; const TDK = "#007A77"; const GOLD = "#C9903A"; const GOLD_LT = "#E8B84B"; const BG = "#F5FFFE"; const MID = "#4A6B69";

export default function About() {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const stag = { display: "inline-flex" as const, alignItems: "center", gap: "6px", background: "rgba(10,186,181,0.1)", border: "1px solid rgba(10,186,181,0.28)", color: TDK, padding: "6px 14px", borderRadius: "14px", fontSize: "11px", fontWeight: 700, letterSpacing: "1.2px", textTransform: "uppercase" as const, marginBottom: "12px" };

  const whoWeHelp = [
    { icon: "✈️", en: "New immigrants arriving in Canada", ar: "المهاجرون الجدد القادمون إلى كندا" },
    { icon: "🗣️", en: "Arabic-speaking newcomers across all provinces", ar: "القادمون الجدد الناطقون بالعربية في جميع المقاطعات" },
    { icon: "💼", en: "Job seekers looking for their first Canadian job", ar: "الباحثون عن عمل الذين يبحثون عن أول وظيفة كندية" },
    { icon: "👨‍👩‍👧", en: "Families settling into Canadian life", ar: "الأسر التي تستقر في الحياة الكندية" },
    { icon: "📚", en: "Students wanting to improve English and career skills", ar: "الطلاب الراغبون في تحسين الإنجليزية والمهارات المهنية" },
    { icon: "🏢", en: "Workers wanting to move up in their Canadian careers", ar: "العمال الذين يريدون التقدم في مسيرتهم المهنية الكندية" },
  ];

  const whatWeTeach = [
    { icon: "📚", color: T, en: "English", ar: "الإنجليزية", desc_en: "Speaking, listening, reading, writing, pronunciation, workplace communication, IELTS/CELPIP prep.", desc_ar: "التحدث، الاستماع، القراءة، الكتابة، النطق، التواصل في العمل، التحضير لـ IELTS/CELPIP." },
    { icon: "💼", color: GOLD, en: "Careers", ar: "المهن", desc_en: "Resume writing, interviews, LinkedIn, cover letters, job search, Canadian workplace culture, networking.", desc_ar: "كتابة السيرة الذاتية، المقابلات، لينكدإن، خطابات التغطية، البحث عن عمل، ثقافة بيئة العمل الكندية." },
    { icon: "🏠", color: "#25A465", en: "Canada Life", ar: "الحياة في كندا", desc_en: "Banking, credit, CRA taxes, housing, healthcare, government services, driver's license, daily life.", desc_ar: "البنوك، الائتمان، ضرائب CRA، السكن، الرعاية الصحية، الخدمات الحكومية، رخصة القيادة." },
    { icon: "💻", color: "#8B5CF6", en: "Business & Digital", ar: "الأعمال والرقمية", desc_en: "Start a business, freelancing, self-employment, invoicing, digital tools, side hustles, marketplace selling.", desc_ar: "بدء عمل تجاري، العمل الحر، المستقل، الفواتير، الأدوات الرقمية، الدخل الجانبي، البيع الإلكتروني." },
  ];

  const sellingItems = [
    { icon: "💪", en: "Confidence to speak, work, and communicate in Canada", ar: "الثقة في التحدث والعمل والتواصل في كندا" },
    { icon: "🧭", en: "Direction for your career and life in Canada", ar: "التوجيه لمسيرتك المهنية وحياتك في كندا" },
    { icon: "🤝", en: "Support from a community that understands you", ar: "الدعم من مجتمع يفهمك" },
    { icon: "💰", en: "Opportunity to find better jobs and higher income", ar: "الفرصة لإيجاد وظائف أفضل ودخل أعلى" },
    { icon: "🍁", en: "A better life in Canada for you and your family", ar: "حياة أفضل في كندا لك ولعائلتك" },
  ];

  const stats = [
    { n: "500+", l_en: "Newcomers Helped", l_ar: "وافد استفاد" },
    { n: "4", l_en: "Programs Available", l_ar: "برامج متاحة" },
    { n: "3×", l_en: "Weekly Live Classes", l_ar: "صفوف أسبوعياً" },
    { n: "2", l_en: "Languages — Arabic & English", l_ar: "لغتان — عربي وإنجليزي" },
  ];

  return (
    <div style={{ width: "100%" }}>
      {/* Header */}
      <section style={{ padding: "60px 5% 50px", background: `linear-gradient(135deg,${BG},#e8fffe)`, textAlign: "center" }}>
        <div style={{ fontSize: "34px", marginBottom: "8px" }}>🍁</div>
        <div style={stag}>ℹ️ {isAr ? "عنّا" : "ABOUT US"}</div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 800, color: TDK, marginBottom: "10px" }}>
          {isAr ? "عن أكاديمية كندا ريدي" : "About Canada Ready Academy"}
        </h1>
        <p style={{ fontSize: "20px", color: MID, fontWeight: 500, marginBottom: "6px" }}>{isAr ? "نحن مهاجرون نساعد المهاجرين." : "We are immigrants helping immigrants."}</p>
        <p style={{ fontSize: "16px", color: T, fontWeight: 700 }}>{isAr ? "دعم الإنجليزية والمهنة والحياة للقادمين الجدد في كندا" : "English, Career & Life Support for Newcomers in Canada"}</p>
      </section>

      {/* Stats */}
      <section style={{ padding: "0", background: TDK }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: "0", padding: "0 5%" }}>
          {stats.map((s) => (
            <div key={s.n} style={{ textAlign: "center", padding: "32px 20px" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "40px", fontWeight: 700, color: GOLD_LT, lineHeight: 1 }}>{s.n}</div>
              <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.65)", marginTop: "4px" }}>{isAr ? s.l_ar : s.l_en}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Who we help + Mission */}
      <section style={{ padding: "72px 5%", background: "#fff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "start" }}>
          <div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px,3vw,36px)", fontWeight: 800, color: TDK, marginBottom: "20px" }}>
              {isAr ? "من نساعد" : "Who We Help"}
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {whoWeHelp.map((item) => (
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
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "24px", fontWeight: 700, color: GOLD_LT, marginBottom: "12px" }}>
                {isAr ? "مهمتنا" : "Our Mission"}
              </div>
              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.85)", lineHeight: 1.75 }}>
                {isAr
                  ? "تمكين القادمين الجدد الناطقين بالعربية باللغة والمهارات والمعرفة اللازمة للنجاح في كندا. نؤمن بأن كل قادم جديد يستحق مساراً واضحاً للأمام — ليس فقط دروساً في اللغة، بل دعماً حقيقياً لبناء حياة أفضل."
                  : "To empower Arabic-speaking newcomers with the language, skills, and knowledge needed to thrive in Canada. We believe every newcomer deserves a clear path forward — not just language lessons, but real support for building a better life."}
              </p>
            </div>
            <div style={{ background: BG, border: "1px solid rgba(10,186,181,0.15)", borderRadius: "18px", padding: "28px" }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 700, color: TDK, marginBottom: "10px" }}>
                {isAr ? "ما الذي يميزنا" : "What Makes Us Different"}
              </h3>
              <p style={{ fontSize: "14px", color: MID, lineHeight: 1.72 }}>
                {isAr
                  ? "نحن لسنا مدرسة لغة عامة. نحن مجتمع بناه مهاجرون للمهاجرين. نفهم التحديات الحقيقية — ليس فقط اللغة، بل الوظائف والضرائب والسكن والرعاية الصحية والانتماء. برنامجنا يغطي كل شيء في مكان واحد، باللغة التي تفهمها."
                  : "We are not a generic language school. We are a community built by immigrants, for immigrants. We understand the real challenges — not just language, but jobs, taxes, housing, healthcare, and belonging. Our program covers everything in one place, in the language you understand."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Teach */}
      <section style={{ padding: "72px 5%", background: BG }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <div style={stag}>📖 {isAr ? "ماذا ندرّس" : "WHAT WE TEACH"}</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px,3vw,42px)", fontWeight: 800, color: TDK }}>
              {isAr ? "4 مجالات تغطي كل ما تحتاجه" : "4 Areas Covering Everything You Need"}
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "22px" }}>
            {whatWeTeach.map((item) => (
              <div key={item.en} style={{ background: "#fff", borderRadius: "18px", padding: "26px", border: "1px solid rgba(10,186,181,0.15)", borderTop: `4px solid ${item.color}` }}>
                <div style={{ width: "50px", height: "50px", background: `${item.color}18`, borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", marginBottom: "14px" }}>{item.icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 700, color: TDK, marginBottom: "8px" }}>{isAr ? item.ar : item.en}</h3>
                <p style={{ fontSize: "13.5px", color: MID, lineHeight: 1.65 }}>{isAr ? item.desc_ar : item.desc_en}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we are really selling */}
      <section style={{ padding: "72px 5%", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ background: `linear-gradient(135deg, rgba(10,186,181,0.08), rgba(10,186,181,0.03))`, border: "1px solid rgba(10,186,181,0.2)", borderRadius: "28px", padding: "52px" }}>
            <div style={stag}>💡 {isAr ? "ما الذي نبيعه حقاً" : "WHAT WE REALLY SELL"}</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px,3vw,40px)", fontWeight: 800, color: TDK, marginBottom: "10px" }}>
              {isAr ? "لسنا مجرد مدرسة لغة" : "We Are Not Just a Language School"}
            </h2>
            <p style={{ fontSize: "16px", color: MID, marginBottom: "32px", lineHeight: 1.7 }}>
              {isAr
                ? "نحن نبيع الثقة والتوجيه والدعم والفرصة وحياة أفضل في كندا. اللغة الإنجليزية هي الأداة — الهدف هو تغيير حياتك."
                : "We sell confidence, direction, support, opportunity, and a better life in Canada. English is the tool — the goal is to change your life."}
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "14px" }}>
              {sellingItems.map((item) => (
                <div key={item.icon} style={{ background: "#fff", borderRadius: "14px", padding: "16px 18px", display: "flex", alignItems: "flex-start", gap: "12px", border: "1px solid rgba(10,186,181,0.12)" }}>
                  <span style={{ fontSize: "22px", flexShrink: 0 }}>{item.icon}</span>
                  <span style={{ fontSize: "14px", color: MID, fontWeight: 500, lineHeight: 1.5 }}>{isAr ? item.ar : item.en}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: TDK, padding: "72px 5%", textAlign: "center" }}>
        <div style={{ maxWidth: "560px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px,3vw,38px)", fontWeight: 800, color: "#fff", marginBottom: "14px" }}>
            {isAr ? "انضم إلى أكاديمية كندا ريدي اليوم" : "Join Canada Ready Academy Today"}
          </h2>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "17px", marginBottom: "28px" }}>
            {isAr ? "ابدأ بتقييم مجاني. لا التزام، ولا دفع مطلوب للبداية." : "Start with a free assessment. No commitment, no payment required to begin."}
          </p>
          <Link href="/assessment" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: GOLD, color: TDK, padding: "16px 40px", borderRadius: "32px", fontSize: "16px", fontWeight: 800, textDecoration: "none" }} data-testid="about-cta">
            📋 {isAr ? "احجز تقييمك المجاني" : "Book Your Free Assessment"}
          </Link>
        </div>
      </section>
    </div>
  );
}
