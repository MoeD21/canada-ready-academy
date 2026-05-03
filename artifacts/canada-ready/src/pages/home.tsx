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
  const whyUs = [
    { icon: "💪", en: "Confidence to speak, work, and communicate in Canada", ar: "الثقة في التحدث والعمل والتواصل في كندا" },
    { icon: "🧭", en: "Direction for your career and life in Canada", ar: "التوجيه لمسيرتك المهنية وحياتك في كندا" },
    { icon: "🤝", en: "Support from a community that understands you", ar: "الدعم من مجتمع يفهمك" },
    { icon: "💰", en: "Opportunity to find better jobs and higher income", ar: "الفرصة لإيجاد وظائف أفضل ودخل أعلى" },
    { icon: "🍁", en: "A better life in Canada for you and your family", ar: "حياة أفضل في كندا لك ولعائلتك" },
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
            <Link href="/assessment" style={{ marginTop: "18px", background: `linear-gradient(135deg, ${GOLD} 0%, ${GOLD_LT} 100%)`, borderRadius: "12px", padding: "12px 16px", textAlign: "center", fontWeight: 900, color: TDK, boxShadow: "0 10px 24px rgba(201,144,58,0.22)", textDecoration: "none", display: "block" }}>Book Your Free Assessment / احجز تقييمك المجاني</Link>
          </div>
        </div>
      </section>
      <section style={{ padding: "0 5% 40px", background: TDK, textAlign: "center" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: "0" }}>
          {aboutStats.map((s) => (
            <div key={s.n} style={{ padding: "28px 20px" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(54px, 7vw, 82px)", fontWeight: 800, color: GOLD_LT, lineHeight: 1 }}>{s.n}</div>
              <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.65)", marginTop: "5px" }}>{s.en} / {s.ar}</div>
            </div>
          ))}
        </div>
      </section>
      <section style={{ padding: "72px 5%", background: "#fff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "start" }} className="max-lg:grid-cols-1">
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px,3vw,36px)", fontWeight: 800, color: TDK, marginBottom: "20px" }}>Who We Help / من نساعد</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {aboutHelp.map((item) => (
                  <div key={item.icon} style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "15px", color: MID }}>
                    <div style={{ width: "8px", height: "8px", background: GOLD, borderRadius: "50%", flexShrink: 0 }} />
                    <span style={{ fontSize: "18px", flexShrink: 0 }}>{item.icon}</span>
                    {item.en} / {item.ar}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div style={{ background: TDK, borderRadius: "22px", padding: "38px", color: "#fff", marginBottom: "22px" }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "24px", fontWeight: 700, color: GOLD_LT, marginBottom: "12px" }}>Our Mission / مهمتنا</div>
                <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.85)", lineHeight: 1.75 }}>To empower Arabic-speaking newcomers with the language, skills, and knowledge needed to thrive in Canada. We believe every newcomer deserves a clear path forward — not just language lessons, but real support for building a better life.<br />تمكين القادمين الجدد الناطقين بالعربية باللغة والمهارات والمعرفة اللازمة للنجاح في كندا. نؤمن بأن كل قادم جديد يستحق مساراً واضحاً للأمام — ليس فقط دروساً في اللغة، بل دعماً حقيقياً لبناء حياة أفضل.</p>
              </div>
              <div style={{ background: BG, border: "1px solid rgba(10,186,181,0.15)", borderRadius: "18px", padding: "28px" }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 700, color: TDK, marginBottom: "10px" }}>What Makes Us Different / ما الذي يميزنا</h3>
                <p style={{ fontSize: "14px", color: MID, lineHeight: 1.72 }}>We are not a generic language school. We are a community built by immigrants, for immigrants. We understand the real challenges — not just language, but jobs, taxes, housing, healthcare, and belonging. Our program covers everything in one place, in the language you understand.<br />نحن لسنا مدرسة لغة عامة. نحن مجتمع بناه مهاجرون للمهاجرين. نفهم التحديات الحقيقية — ليس فقط اللغة، بل الوظائف والضرائب والسكن والرعاية الصحية والانتماء. برنامجنا يغطي كل شيء في مكان واحد، باللغة التي تفهمها.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ padding: "72px 5%", background: BG }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ background: `linear-gradient(135deg, rgba(10,186,181,0.08), rgba(10,186,181,0.03))`, border: "1px solid rgba(10,186,181,0.2)", borderRadius: "28px", padding: "52px" }}>
            <div style={stag}>💡 WHAT WE REALLY SELL / ما الذي نبيعه حقاً</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px,3vw,40px)", fontWeight: 800, color: TDK, marginBottom: "10px" }}>We Are Not Just a Language School / لسنا مجرد مدرسة لغة</h2>
            <p style={{ fontSize: "16px", color: MID, marginBottom: "32px", lineHeight: 1.7 }}>We sell confidence, direction, support, opportunity, and a better life in Canada. English is the tool — the goal is to change your life.<br />نحن نبيع الثقة والتوجيه والدعم والفرصة وحياة أفضل في كندا. اللغة الإنجليزية هي الأداة — الهدف هو تغيير حياتك.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "14px" }}>
              {whyUs.map((item) => (
                <div key={item.icon} style={{ background: "#fff", borderRadius: "14px", padding: "16px 18px", display: "flex", alignItems: "flex-start", gap: "12px", border: "1px solid rgba(10,186,181,0.12)" }}>
                  <span style={{ fontSize: "22px", flexShrink: 0 }}>{item.icon}</span>
                  <span style={{ fontSize: "14px", color: MID, fontWeight: 500, lineHeight: 1.5 }}>{item.en} / {item.ar}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section style={{ padding: "72px 5%", background: "#fff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "30px" }}>
            <div style={stag}>📚 OUR PROGRAMS / برامجنا</div>
            <div style={sTitle}>Choose Your Plan / اختر خطتك</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "18px" }}>
            {[
              { name_en: "Starter", name_ar: "البداية", price: "$79" },
              { name_en: "Premium", name_ar: "المميز", price: "$129" },
              { name_en: "Career Boost", name_ar: "الانطلاقة المهنية", price: "$179" },
              { name_en: "Canada Ready", name_ar: "جاهز لكندا", price: "$249" },
            ].map((plan, idx) => (
              <div key={plan.name_en} style={{ background: idx === 1 ? TDK : "#fff", border: idx === 1 ? `2px solid ${GOLD}` : "1px solid rgba(129,216,208,0.18)", borderRadius: "18px", padding: "28px 22px", position: "relative", display: "flex", flexDirection: "column" }}>
                {idx === 1 && <div style={{ position: "absolute", top: "-13px", left: "50%", transform: "translateX(-50%)", background: GOLD, color: TDK, fontSize: "10px", fontWeight: 800, padding: "4px 13px", borderRadius: "11px", letterSpacing: "0.8px", textTransform: "uppercase", whiteSpace: "nowrap" }}>⭐ MOST POPULAR / الأكثر شعبية</div>}
                <div style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "1.8px", textTransform: "uppercase", color: idx === 1 ? "rgba(255,255,255,0.5)" : "#8896AB", marginBottom: "9px" }}>{plan.name_en} / {plan.name_ar}</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "44px", fontWeight: 700, color: idx === 1 ? "#fff" : TDK, lineHeight: 1 }}>{plan.price}</div>
                <div style={{ background: idx === 1 ? "rgba(201,144,58,0.18)" : "rgba(129,216,208,0.08)", borderRadius: "10px", padding: "9px 12px", fontSize: "12px", color: idx === 1 ? GOLD_LT : TDK, fontWeight: 600, margin: "13px 0", lineHeight: 1.5 }}>Free assessment included / يتضمن تقييماً مجانياً</div>
                <div style={{ flex: 1 }} />
                <Link href="/assessment" style={{ display: "block", width: "100%", padding: "13px", borderRadius: "24px", border: idx === 1 ? `1.5px solid ${GOLD}` : "1.5px solid rgba(129,216,208,0.3)", background: idx === 1 ? GOLD : "transparent", color: TDK, fontSize: "13.5px", fontWeight: 700, textDecoration: "none", textAlign: "center" }}>📋 Book Free Assessment / احجز تقييماً مجانياً</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ padding: "72px 5%", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <div style={stag}>FREE APPOINTMENT / الموعد المجاني</div>
          <div style={sTitle}>Book Your Free Assessment / احجز تقييمك المجاني</div>
          <p style={sSub}>Fill out a short form and schedule a 15–20 minute call with our team. It is completely free and commits you to nothing.<br />املأ استمارة قصيرة وحدد مكالمة 15–20 دقيقة مع فريقنا. مجانية تماماً ولا تُلزمك بشيء.</p>
          <Link href="/assessment" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: GOLD, color: TDK, padding: "16px 38px", borderRadius: "32px", fontSize: "16px", fontWeight: 900, textDecoration: "none" }}>Book Your Free Assessment / احجز تقييمك المجاني</Link>
        </div>
      </section>
    </div>
  );
}