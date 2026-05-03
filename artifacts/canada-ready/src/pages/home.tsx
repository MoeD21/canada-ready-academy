import { useLanguage } from "@/lib/language-context";
import { Link } from "wouter";

const T = "#81D8D0";
const TDK = "#007A77";
const GOLD = "#C9903A";
const GOLD_LT = "#E8B84B";
const BG = "#F5FFFE";
const MID = "#4A6B69";

export default function Home() {
  const { language } = useLanguage();
  const isAr = language === "ar";

  const stag = { display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(129,216,208,0.1)", border: "1px solid rgba(129,216,208,0.28)", color: TDK, padding: "6px 14px", borderRadius: "14px", fontSize: "11px", fontWeight: 700, letterSpacing: "1.2px", textTransform: "uppercase" as const, marginBottom: "12px" };
  const sTitle = { fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, color: TDK, lineHeight: 1.15, marginBottom: "12px" };
  const sSub = { fontSize: "16px", color: MID, maxWidth: "560px", lineHeight: 1.72, margin: "0 auto" };

  return (
    <div style={{ width: "100%" }}>
      <section style={{ minHeight: "calc(100vh - 68px)", padding: "60px 5%", display: "flex", alignItems: "center", background: BG }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "48px", alignItems: "center", width: "100%" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "7px", background: "rgba(129,216,208,0.1)", border: "1px solid rgba(129,216,208,0.28)", color: TDK, padding: "7px 16px", borderRadius: "22px", fontSize: "12px", fontWeight: 700, marginBottom: "18px" }}>🍁 {isAr ? "نظام دعم الوافدين الجدد في كندا" : "Canada's Newcomer Support System"}</div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(36px,5.2vw,62px)", fontWeight: 800, color: TDK, lineHeight: 1.08, marginBottom: "16px" }}>{isAr ? <>دعم الإنجليزية والمهنة<br />والحياة للوافدين الجدد في <span style={{ color: GOLD }}>كندا</span></> : <>English, Career &amp;<br />Life Support for Newcomers in <span style={{ color: GOLD }}>Canada</span></>}</h1>
            <p style={{ fontSize: "17px", color: MID, maxWidth: "540px", lineHeight: 1.75, marginBottom: "30px" }}>{isAr ? "دروس مباشرة عبر الإنترنت، تحضير للعمل، ودعم التوطين — مصمم للمهاجرين الناطقين بالعربية في كندا." : "Live online classes, job preparation, and settlement support — designed for Arabic-speaking immigrants in Canada."}</p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/assessment" style={{ background: TDK, color: "#fff", padding: "15px 28px", borderRadius: "30px", fontSize: "15px", fontWeight: 700, textDecoration: "none" }}>{isAr ? "احجز تقييماً مجانياً" : "Book Free Assessment"}</Link>
              <Link href="/services" style={{ background: "#fff", color: TDK, border: "1px solid rgba(129,216,208,0.3)", padding: "15px 28px", borderRadius: "30px", fontSize: "15px", fontWeight: 700, textDecoration: "none" }}>{isAr ? "عرض الخدمات" : "View Services"}</Link>
            </div>
          </div>
          <div style={{ background: TDK, borderRadius: "24px", padding: "30px", color: "#fff" }}>
            <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "16px" }}>{isAr ? "ما ستحصل عليه" : "WHAT YOU GET"}</div>
            <div style={{ display: "grid", gap: "12px" }}>
              {["English Classes — All Levels", "Resume + Job Preparation", "Settlement & Life Guidance", "Arabic Community Support", "1-on-1 Coaching Calls"].map((item) => <div key={item} style={{ background: "rgba(255,255,255,0.08)", borderRadius: "12px", padding: "12px 14px", fontSize: "14px" }}>• {item}</div>)}
            </div>
            <div style={{ marginTop: "18px", background: GOLD, borderRadius: "10px", padding: "12px 16px", textAlign: "center", fontWeight: 800, color: TDK }}>{isAr ? "الأسبوع الأول مجاني" : "First week FREE"}</div>
          </div>
        </div>
      </section>
      <section style={{ padding: "72px 5%", background: "#fff" }}><div style={{ maxWidth: "1200px", margin: "0 auto" }}><div style={{ textAlign: "center", marginBottom: "46px" }}><div style={stag}>✅ {isAr ? "نساعدك في" : "WE HELP YOU WITH"}</div><div style={sTitle}>{isAr ? "كل ما يحتاجه الوافد الجديد للنجاح" : "Everything a Newcomer Needs to Succeed"}</div><p style={sSub}>{isAr ? "لا نعلمك الإنجليزي فقط. نساعدك على بناء الثقة والدخل والحياة الحقيقية في كندا." : "We don't just teach English. We help you build confidence, income, and a real life in Canada."}</p></div><div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "16px" }}>{[{icon:"🗣️",title_ar:"تطوير الإنجليزية",title_en:"Improve English",desc_ar:"محادثة، نطق، كتابة، وتحضير اختبارات.",desc_en:"Conversation, pronunciation, writing, and test prep."},{icon:"💼",title_ar:"الوظائف والمهنة",title_en:"Jobs & Career",desc_ar:"سيرة ذاتية، لينكدإن، مقابلات، واستراتيجية التقديم.",desc_en:"Resume, LinkedIn, interviews, and application strategy."},{icon:"🏠",title_ar:"الحياة في كندا",title_en:"Life in Canada",desc_ar:"بنوك، إيجار، صحة، ضرائب، ووثائق.",desc_en:"Banking, rent, healthcare, taxes, and documents."},{icon:"🤝",title_ar:"المجتمع والدعم",title_en:"Community Support",desc_ar:"واتساب، متابعة، جلسات خاصة، ودعم آمن.",desc_en:"WhatsApp, accountability, coaching, and safe support."}].map((item)=><div key={item.title_en} style={{ background: BG, border: "1px solid rgba(129,216,208,0.15)", borderRadius: "18px", padding: "22px" }}><div style={{ width: "44px", height: "44px", background: TDK, borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "14px" }}>{item.icon}</div><div style={{ fontFamily: "'Playfair Display', serif", fontSize: "19px", fontWeight: 800, color: TDK, marginBottom: "8px" }}>{isAr ? item.title_ar : item.title_en}</div><div style={{ color: MID, lineHeight: 1.65, fontSize: "14px" }}>{isAr ? item.desc_ar : item.desc_en}</div></div>)}</div></div></section>
      <section style={{ background: TDK, padding: "70px 5%", textAlign: "center" }}><div style={{ maxWidth: "700px", margin: "0 auto" }}><h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px,3vw,38px)", fontWeight: 800, color: "#fff", marginBottom: "14px" }}>{isAr ? "جاهز لتبدأ؟" : "Ready to Start?"}</h2><p style={{ color: "rgba(255,255,255,0.82)", fontSize: "17px", marginBottom: "26px", lineHeight: 1.7 }}>{isAr ? "احجز تقييمك المجاني وسنحدد لك أفضل مسار." : "Book your free assessment and we'll map the best path for you."}</p><Link href="/assessment" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: GOLD, color: TDK, padding: "16px 38px", borderRadius: "32px", fontSize: "16px", fontWeight: 800, textDecoration: "none" }}>{isAr ? "احجز تقييمك المجاني" : "Book Your Free Assessment"}</Link></div></section>
    </div>
  );
}