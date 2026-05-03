import { useLanguage } from "@/lib/language-context";
import { Link } from "wouter";

const T = "#0ABAB5";
const TDK = "#007A77";
const GOLD = "#C9903A";
const GOLD_LT = "#E8B84B";
const BG = "#F5FFFE";
const MID = "#4A6B69";

export default function Home() {
  const { language } = useLanguage();
  const isAr = language === "ar";

  const whatWeHelp = [
    { icon: "🗣️", en: "Improve English", ar: "تطوير الإنجليزية", desc_en: "Beginner survival English to workplace fluency. 3 live classes every week in Arabic and English.", desc_ar: "من الإنجليزية الأساسية إلى الطلاقة في العمل. 3 صفوف مباشرة أسبوعياً." },
    { icon: "💪", en: "Build Confidence", ar: "بناء الثقة", desc_en: "Speaking practice, mock interviews, and a safe Arabic community to grow your confidence.", desc_ar: "تدريب المحادثة ومقابلات تجريبية ومجتمع عربي آمن للنمو." },
    { icon: "💼", en: "Find Better Jobs", ar: "إيجاد وظيفة أفضل", desc_en: "Canadian resume, cover letters, LinkedIn setup, job search strategy and interview prep.", desc_ar: "سيرة ذاتية كندية، خطاب تغطية، لينكدإن، واستراتيجية البحث عن عمل." },
    { icon: "🏠", en: "Understand Life in Canada", ar: "فهم الحياة في كندا", desc_en: "Banking, taxes, renting, healthcare, driver's license — how everything works here, step by step.", desc_ar: "البنوك، الضرائب، الإيجار، الصحة — كيف يعمل كل شيء هنا خطوة بخطوة." },
    { icon: "🤝", en: "Workplace Communication", ar: "التواصل في مكان العمل", desc_en: "Professional emails, phone calls, Canadian workplace culture and communication etiquette.", desc_ar: "البريد الإلكتروني المهني، المكالمات، ثقافة العمل الكندية، وآداب التواصل." },
    { icon: "🎯", en: "Personalized Support", ar: "دعم شخصي", desc_en: "1-on-1 coaching calls, WhatsApp access, and a custom success roadmap — built for you.", desc_ar: "جلسات تدريب فردية، دعم واتساب، وخارطة طريق نجاح مخصصة لك." },
  ];

  const pillars = [
    { bg: `linear-gradient(145deg,${T},#0d9e99)`, icon: "📚", en: "English Training", ar: "تدريب الإنجليزية", desc_en: "Beginner to advanced, workplace English, pronunciation, speaking clubs, IELTS/CELPIP prep.", desc_ar: "من المبتدئ للمتقدم، إنجليزي العمل، النطق، أندية المحادثة.", tags_en: ["Speaking","Grammar","IELTS"], tags_ar: ["محادثة","قواعد","IELTS"] },
    { bg: `linear-gradient(145deg,${GOLD},${GOLD_LT})`, icon: "💼", en: "Career Support", ar: "الدعم المهني", desc_en: "Resume, cover letter, LinkedIn, mock interviews, job search, and Canadian workplace culture.", desc_ar: "السيرة الذاتية، لينكدإن، المقابلات، والبحث عن عمل.", tags_en: ["Resume","LinkedIn","Interviews"], tags_ar: ["السيرة","لينكدإن","مقابلات"], textDark: true },
    { bg: `linear-gradient(145deg,${TDK},#005856)`, icon: "🏠", en: "Canada Life Support", ar: "دعم الحياة في كندا", desc_en: "Banking, taxes, renting, healthcare, immigration document guidance and settlement help.", desc_ar: "البنوك، الضرائب، الإيجار، الصحة، وثائق الهجرة.", tags_en: ["Banking","CRA","Healthcare"], tags_ar: ["بنوك","CRA","صحة"] },
    { bg: "linear-gradient(145deg,#3D7A5C,#25A465)", icon: "💻", en: "Business & Digital", ar: "الأعمال والرقمية", desc_en: "Side hustles, small business basics, tech skills, freelancing, and digital literacy for Canada.", desc_ar: "العمل الجانبي، أساسيات الأعمال، مهارات التقنية، العمل الحر.", tags_en: ["Side Hustle","Tech","Business"], tags_ar: ["عمل جانبي","تقنية","أعمال"] },
  ];

  const steps = [
    { num: "1", en: "Book Free Assessment", ar: "احجز تقييماً مجانياً", desc_en: "Fill out our short form and schedule a 15-minute Arabic call with our team — completely free.", desc_ar: "امل الاستمارة القصيرة وحدد موعد مكالمة عربية لمدة 15 دقيقة مع فريقنا — مجاناً." },
    { num: "2", en: "Meet Our Team", ar: "التق بفريقنا", desc_en: "We check your English level, understand your goals and recommend your perfect plan.", desc_ar: "نقيّم مستواك وأهدافك ونوصي بالخطة المثالية لك." },
    { num: "3", en: "Join Your Group", ar: "انضم لمجموعتك", desc_en: "Receive Zoom links, WhatsApp invite, schedule and welcome booklet. First week is FREE.", desc_ar: "استلم روابط Zoom ودعوة واتساب وجدولك. الأسبوع الأول مجاني." },
    { num: "4", en: "Build Your Future", ar: "ابنِ مستقبلك", desc_en: "3 live weekly classes, coaching calls, and ongoing support to build your Canadian life.", desc_ar: "3 صفوف مباشرة أسبوعياً وجلسات تدريب ودعم مستمر لبناء حياتك الكندية." },
  ];

  const schedule = [
    { color: T, day_en: "Monday", day_ar: "الاثنين", title_en: "English Foundations", title_ar: "أسس الإنجليزية", desc_en: "Grammar, vocabulary, reading, writing and structured language building for all levels.", desc_ar: "القواعد، المفردات، القراءة، الكتابة وبناء اللغة لجميع المستويات." },
    { color: GOLD, day_en: "Wednesday", day_ar: "الأربعاء", title_en: "Conversation & Pronunciation", title_ar: "المحادثة والنطق", desc_en: "Speaking confidence, pronunciation drills, roleplay and real-life conversation practice.", desc_ar: "ثقة الكلام، تدريبات النطق، لعب الأدوار وممارسة المحادثة الواقعية." },
    { color: "#25A465", day_en: "Friday", day_ar: "الجمعة", title_en: "Career & Canada Life Workshop", title_ar: "ورشة المهنة والحياة الكندية", desc_en: "Job skills, Canadian life lessons, interviews, workplace culture and settlement topics.", desc_ar: "مهارات العمل، دروس الحياة الكندية، المقابلات، ثقافة العمل ومواضيع التوطين." },
  ];

  const testimonials = [
    { emoji: "👨", name: "Ahmed M.", origin_en: "From Egypt, now in Calgary", origin_ar: "من مصر، الآن في كالغاري", text_en: "After joining Canada Ready Academy, I went through 4 mock interviews with the coach. Within 3 months I got my first IT job at a local company. The program changed my life.", text_ar: "بعد الانضمام لأكاديمية كندا ريدي، خضت 4 مقابلات تجريبية. خلال 3 أشهر حصلت على أول وظيفة في مجال تكنولوجيا المعلومات. البرنامج غيّر حياتي." },
    { emoji: "👩", name: "Fatima S.", origin_en: "From Syria, now in Edmonton", origin_ar: "من سوريا، الآن في إدمونتون", text_en: "The Canada Life Support pillar helped me understand taxes, open a proper bank account, and find a great apartment for my family. I feel like a real Canadian now.", text_ar: "ركيزة دعم الحياة ساعدتني على فهم الضرائب، وفتح حساب بنكي، وإيجاد شقة رائعة لعائلتي. أشعر الآن أنني كندية حقيقية." },
    { emoji: "👨‍💻", name: "Omar K.", origin_en: "From Iraq, now in Toronto", origin_ar: "من العراق، الآن في تورونتو", text_en: "I started with very basic English. After 6 months I communicate comfortably at work, and I even started my own small delivery business.", text_ar: "بدأت بإنجليزية ضعيفة جداً. بعد 6 أشهر أتواصل براحة في العمل، وحتى بدأت مشروعي الصغير." },
  ];

  const sec = { padding: "80px 5%" };
  const secIn = { maxWidth: "1200px", margin: "0 auto" };
  const stag = { display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(10,186,181,0.1)", border: "1px solid rgba(10,186,181,0.28)", color: TDK, padding: "6px 14px", borderRadius: "14px", fontSize: "11px", fontWeight: 700, letterSpacing: "1.2px", textTransform: "uppercase" as const, marginBottom: "12px" };
  const sTitle = { fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, color: TDK, lineHeight: 1.15, marginBottom: "12px" };
  const sSub = { fontSize: "16px", color: MID, maxWidth: "560px", lineHeight: 1.72, margin: "0 auto" };

  return (
    <div style={{ width: "100%" }}>

      {/* ===== HERO ===== */}
      <section style={{ minHeight: "calc(100vh - 68px)", padding: "60px 5% 60px", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", background: BG }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse 70% 70% at 85% 20%, rgba(10,186,181,0.12), transparent 60%), radial-gradient(ellipse 55% 60% at 0% 85%, rgba(10,186,181,0.07), transparent 55%)`, pointerEvents: "none" }} />
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "60px", alignItems: "center", width: "100%", position: "relative" }}>
          {/* Left */}
          <div className="animate-fade-up">
            <div style={{ display: "inline-flex", alignItems: "center", gap: "7px", background: "rgba(10,186,181,0.1)", border: "1px solid rgba(10,186,181,0.28)", color: "#5A3E0A", padding: "7px 16px", borderRadius: "22px", fontSize: "12px", fontWeight: 700, marginBottom: "18px" }}>
              🍁 {isAr ? "نظام دعم الوافدين الجدد في كندا" : "Canada's Newcomer Support System"}
            </div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(36px,5.2vw,62px)", fontWeight: 800, color: TDK, lineHeight: 1.1, marginBottom: "16px" }}>
              {isAr
                ? <>دعم الإنجليزية والمهنة<br />والحياة للوافدين<br />الجدد في <em style={{ fontStyle: "italic", color: T }}>كندا</em></>
                : <>English, Career &amp;<br />Life Support for<br />Newcomers in <em style={{ fontStyle: "italic", color: T }}>Canada</em></>}
            </h1>
            <p style={{ fontSize: "17px", color: MID, maxWidth: "520px", lineHeight: 1.72, marginBottom: "32px" }}>
              {isAr ? "دروس مباشرة عبر الإنترنت، تحضير للعمل، ودعم التوطين — مصمم للمهاجرين الناطقين بالعربية في كندا. ابدأ بمكالمة تقييم مجانية لمدة 15 دقيقة." : "Live online classes, job preparation, and settlement support — designed for Arabic-speaking immigrants in Canada. Start with a FREE 15-minute assessment call."}
            </p>
            <div style={{ display: "flex", gap: "13px", flexWrap: "wrap", marginBottom: "38px" }}>
              <Link href="/assessment" style={{ background: TDK, color: "#fff", padding: "15px 32px", borderRadius: "30px", fontSize: "15px", fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px", transition: "0.28s" }} data-testid="hero-cta">
                📋 {isAr ? "احجز تقييماً مجانياً" : "Book Free Assessment"}
              </Link>
              <a href="https://wa.me/15870000000" target="_blank" rel="noopener noreferrer" style={{ background: "#25D366", color: "#fff", padding: "15px 26px", borderRadius: "30px", fontSize: "15px", fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                💬 {isAr ? "انضم لصف مجاني" : "Join Free Class"}
              </a>
            </div>
            <div style={{ display: "flex", gap: "28px", paddingTop: "30px", borderTop: "1px solid rgba(10,186,181,0.2)" }}>
              {[
                { n: "500+", l_en: "Newcomers Helped", l_ar: "وافد استفاد" },
                { n: "3×", l_en: "Weekly Live Classes", l_ar: "صفوف مباشرة أسبوعياً" },
                { n: "100%", l_en: "Arabic + English", l_ar: "عربي + إنجليزي" },
              ].map((s) => (
                <div key={s.n}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "34px", fontWeight: 700, color: TDK, lineHeight: 1 }}>{s.n}</div>
                  <div style={{ fontSize: "12px", color: "#8896AB", marginTop: "3px" }}>{isAr ? s.l_ar : s.l_en}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right card */}
          <div style={{ position: "relative" }} className="hidden md:block">
            <div style={{ position: "absolute", background: "#fff", borderRadius: "11px", padding: "9px 13px", boxShadow: "0 8px 32px rgba(10,186,181,0.18)", fontSize: "12px", fontWeight: 700, color: TDK, display: "flex", alignItems: "center", gap: "6px", top: "-14px", left: "-14px", zIndex: 2 }}>
              🇨🇦 {isAr ? "ألبرتا، كندا" : "Alberta, Canada"}
            </div>
            <div style={{ background: TDK, borderRadius: "22px", padding: "34px", color: "#fff", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", fontSize: "120px", right: "-15px", bottom: "-18px", opacity: 0.04 }}>🍁</div>
              <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "16px" }}>{isAr ? "ما ستحصل عليه" : "WHAT YOU GET"}</div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", marginBottom: "22px" }}>
                {[
                  { icon: "📚", en: "English Classes — All Levels", ar: "دروس إنجليزية — جميع المستويات" },
                  { icon: "💼", en: "Resume + Job Preparation", ar: "سيرة ذاتية + تحضير للعمل" },
                  { icon: "🏠", en: "Settlement & Life Guidance", ar: "إرشادات التوطين والحياة" },
                  { icon: "🤝", en: "Arabic Community Support", ar: "مجتمع دعم عربي" },
                  { icon: "📋", en: "1-on-1 Coaching Calls", ar: "جلسات تدريب فردية" },
                ].map((item) => (
                  <li key={item.icon} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", fontWeight: 500 }}>
                    <div style={{ width: "33px", height: "33px", background: "rgba(201,144,58,0.18)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", flexShrink: 0 }}>{item.icon}</div>
                    {isAr ? item.ar : item.en}
                  </li>
                ))}
              </ul>
              <div style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "12px", padding: "14px 18px", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                <div>
                  <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)" }}>{isAr ? "يبدأ من" : "Starting from"}</div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "38px", fontWeight: 700, color: GOLD_LT, lineHeight: 1 }}>$79</div>
                </div>
                <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px" }}>{isAr ? "/ شهر كندي" : "/ month CAD"}</div>
              </div>
              <div style={{ background: GOLD, borderRadius: "9px", padding: "11px 16px", textAlign: "center", fontWeight: 700, color: TDK, fontSize: "13.5px" }}>
                🎁 {isAr ? "الأسبوع الأول مجاني — لا بطاقة ائتمان" : "First week FREE — No credit card needed"}
              </div>
            </div>
            <div style={{ position: "absolute", background: "#fff", borderRadius: "11px", padding: "9px 13px", boxShadow: "0 8px 32px rgba(10,186,181,0.18)", fontSize: "12px", fontWeight: 700, color: TDK, display: "flex", alignItems: "center", gap: "6px", bottom: "-14px", right: "-14px", zIndex: 2 }}>
              ⭐ {isAr ? "يُدرَّس بالعربي والإنجليزي" : "Taught in Arabic & English"}
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT WE HELP WITH ===== */}
      <section style={{ ...sec, background: "#fff" }}>
        <div style={secIn}>
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <div style={stag}>✅ {isAr ? "نساعدك في" : "WE HELP YOU WITH"}</div>
            <div style={sTitle}>{isAr ? "كل ما يحتاجه الوافد الجديد للنجاح" : "Everything a Newcomer Needs to Succeed"}</div>
            <p style={sSub}>{isAr ? "لا نعلمك الإنجليزي فقط. نساعدك على بناء الثقة والدخل والحياة الحقيقية في كندا." : "We don't just teach English. We help you build confidence, income, and a real life in Canada."}</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "20px" }}>
            {whatWeHelp.map((item) => (
              <div key={item.icon} style={{ background: BG, border: "1px solid rgba(10,186,181,0.15)", borderRadius: "18px", padding: "26px", display: "flex", alignItems: "flex-start", gap: "13px", transition: "0.3s", cursor: "default" }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(10,186,181,0.15)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = ""; (e.currentTarget as HTMLDivElement).style.boxShadow = ""; }}
              >
                <div style={{ width: "45px", height: "45px", background: TDK, borderRadius: "11px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "19px", flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", fontWeight: 700, color: TDK, marginBottom: "6px" }}>{isAr ? item.ar : item.en}</div>
                  <p style={{ fontSize: "13.5px", color: MID, lineHeight: 1.62 }}>{isAr ? item.desc_ar : item.desc_en}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 4 CORE PILLARS ===== */}
      <section style={{ ...sec, background: BG }}>
        <div style={secIn}>
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <div style={stag}>🏛️ {isAr ? "4 ركائز أساسية" : "4 CORE PILLARS"}</div>
            <div style={sTitle}>{isAr ? "نظامنا المتكامل" : "Our Complete Support System"}</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "22px" }}>
            {pillars.map((p) => (
              <div key={p.en} style={{ background: p.bg, borderRadius: "18px", padding: "34px 26px", textAlign: "center", border: "1px solid rgba(255,255,255,0.15)", transition: "0.3s", cursor: "default" }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 16px 40px rgba(10,186,181,0.25)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = ""; (e.currentTarget as HTMLDivElement).style.boxShadow = ""; }}
              >
                <span style={{ fontSize: "42px", marginBottom: "14px", display: "block" }}>{p.icon}</span>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "21px", fontWeight: 700, color: p.textDark ? TDK : "#fff", marginBottom: "9px" }}>{isAr ? p.ar : p.en}</h3>
                <p style={{ fontSize: "13px", color: p.textDark ? "rgba(27,58,107,0.8)" : "rgba(255,255,255,0.8)", lineHeight: 1.65 }}>{isAr ? p.desc_ar : p.desc_en}</p>
                <div style={{ marginTop: "14px", display: "flex", flexWrap: "wrap", gap: "5px", justifyContent: "center" }}>
                  {(isAr ? p.tags_ar : p.tags_en).map((tag) => (
                    <span key={tag} style={{ background: p.textDark ? "rgba(27,58,107,0.13)" : "rgba(255,255,255,0.15)", color: p.textDark ? TDK : "#fff", fontSize: "11px", fontWeight: 600, padding: "4px 9px", borderRadius: "8px" }}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section style={{ ...sec, background: "#fff" }}>
        <div style={secIn}>
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <div style={stag}>🔄 {isAr ? "كيف يعمل" : "HOW IT WORKS"}</div>
            <div style={sTitle}>{isAr ? "ابدأ في 4 خطوات بسيطة" : "Start in 4 Simple Steps"}</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "0", position: "relative" }}>
            {steps.map((step, i) => (
              <div key={step.num} style={{ textAlign: "center", padding: "6px 16px", position: "relative", zIndex: 1 }}>
                <div style={{ width: "64px", height: "64px", background: TDK, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px", fontFamily: "'Playfair Display', serif", fontSize: "26px", fontWeight: 700, color: GOLD_LT, border: `4px solid ${BG}`, boxShadow: "0 4px 16px rgba(10,186,181,0.3)" }}>{step.num}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "17px", fontWeight: 700, color: TDK, marginBottom: "6px" }}>{isAr ? step.ar : step.en}</h3>
                <p style={{ fontSize: "13px", color: MID, lineHeight: 1.6 }}>{isAr ? step.desc_ar : step.desc_en}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "44px" }}>
            <Link href="/assessment" style={{ background: TDK, color: "#fff", padding: "17px 44px", borderRadius: "30px", fontSize: "16px", fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}>
              📋 {isAr ? "احجز تقييمك المجاني الآن" : "Book Your Free Assessment Now"}
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WEEKLY SCHEDULE ===== */}
      <section style={{ ...sec, background: BG }}>
        <div style={secIn}>
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <div style={stag}>📅 {isAr ? "الجدول الأسبوعي" : "WEEKLY SCHEDULE"}</div>
            <div style={sTitle}>{isAr ? "3 صفوف مباشرة كل أسبوع" : "3 Live Classes Every Week"}</div>
            <p style={sSub}>{isAr ? "جميع الخطط تشمل نفس الصفوف الثلاثة. مستوى خطتك يحدد التدريب والدعم الإضافي." : "All plans include the same 3 live classes. Your plan level determines the extra coaching and support."}</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "22px" }}>
            {schedule.map((day) => (
              <div key={day.day_en} style={{ background: "#fff", borderRadius: "18px", padding: "26px", borderTop: `4px solid ${day.color}`, border: "1px solid rgba(10,186,181,0.12)", borderTopColor: day.color, borderTopWidth: "4px" }}>
                <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: day.color, marginBottom: "7px" }}>{isAr ? day.day_ar : day.day_en}</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 700, color: TDK, marginBottom: "7px" }}>{isAr ? day.title_ar : day.title_en}</div>
                <p style={{ fontSize: "13.5px", color: MID }}>{isAr ? day.desc_ar : day.desc_en}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS PREVIEW ===== */}
      <section style={{ ...sec, background: "#fff" }}>
        <div style={secIn}>
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <div style={stag}>⭐ {isAr ? "قصص النجاح" : "SUCCESS STORIES"}</div>
            <div style={sTitle}>{isAr ? "ماذا يقول طلابنا" : "What Our Students Say"}</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "20px" }}>
            {testimonials.map((t) => (
              <div key={t.name} style={{ background: "#fff", borderRadius: "18px", padding: "26px", border: "1px solid rgba(10,186,181,0.15)", transition: "0.3s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(10,186,181,0.15)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = ""; }}
              >
                <div style={{ color: GOLD, fontSize: "16px", marginBottom: "11px" }}>★★★★★</div>
                <p style={{ fontSize: "14px", color: MID, lineHeight: 1.7, marginBottom: "16px", fontStyle: "italic" }}>"{isAr ? t.text_ar : t.text_en}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: TDK, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px" }}>{t.emoji}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "14px", color: TDK }}>{t.name}</div>
                    <div style={{ fontSize: "12px", color: "#8896AB" }}>{isAr ? t.origin_ar : t.origin_en}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <Link href="/testimonials" style={{ color: TDK, textDecoration: "none", fontWeight: 700, fontSize: "15px", display: "inline-flex", alignItems: "center", gap: "6px" }}>
              {isAr ? "عرض جميع القصص ←" : "See All Stories →"}
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WHATSAPP CTA ===== */}
      <section style={{ background: TDK, padding: "80px 5%", textAlign: "center" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "30px", fontWeight: 700, color: GOLD_LT, marginBottom: "24px", letterSpacing: "1px" }}>
            {isAr ? "💬 هل تريد أن تبدأ؟" : "💬 Ready to Start?"}
          </div>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "18px", marginBottom: "28px" }}>
            {isAr ? "تحدث معنا مباشرة على واتساب. سنجيب على أسئلتك خلال ساعات." : "Chat with us directly on WhatsApp. We'll answer your questions within hours."}
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://wa.me/15870000000" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#25D366", color: "#fff", padding: "16px 40px", borderRadius: "32px", fontSize: "16px", fontWeight: 700, textDecoration: "none" }}>
              💬 {isAr ? "راسلنا على واتساب" : "Message Us on WhatsApp"}
            </a>
            <a href="https://facebook.com/canadareadyacademy" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "9px", background: "#1877F2", color: "#fff", padding: "16px 34px", borderRadius: "32px", fontSize: "15px", fontWeight: 700, textDecoration: "none" }}>
              📘 {isAr ? "فيسبوك" : "Facebook"}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
