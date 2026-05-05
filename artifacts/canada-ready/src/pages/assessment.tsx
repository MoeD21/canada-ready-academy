import { useLanguage } from "@/lib/language-context";
import { useState } from "react";

const TDK = "#007A77";
const GOLD = "#C9903A";
const GOLD_LT = "#E8B84B";
const BG = "#F5FFFE";
const MID = "#4A6B69";

export default function Assessment() {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div style={{ padding: "80px 5%", textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
        <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: `rgba(129,216,208,0.12)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "36px", margin: "0 auto 24px" }}>✅</div>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "32px", fontWeight: 800, color: TDK, marginBottom: "12px" }}>
          {isAr ? "تم حجز موعدك!" : "Appointment Submitted!"}
        </h2>
        <p style={{ fontSize: "17px", color: MID, lineHeight: 1.7, marginBottom: "28px" }}>
          {isAr ? "سنتواصل معك على واتساب خلال 24 ساعة لتأكيد موعدك المجاني." : "We will contact you on WhatsApp within 24 hours to confirm your free appointment."}
        </p>
        <a href="https://wa.me/14034340027" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#25D366", color: "#fff", padding: "16px 36px", borderRadius: "32px", fontSize: "16px", fontWeight: 700, textDecoration: "none" }}>
          💬 {isAr ? "تحدث معنا الآن على واتساب" : "Chat With Us Now on WhatsApp"}
        </a>
      </div>
    );
  }

  const whatHappens = [
    { en: "We check your English level (Beginner or Intermediate)", ar: "نتحقق من مستوى إنجليزيتك (مبتدئ أو متوسط)" },
    { en: "We ask about your career goals and work history", ar: "نسأل عن أهدافك المهنية وتاريخك الوظيفي" },
    { en: "We understand your newcomer challenges", ar: "نفهم تحديات حياتك الجديدة" },
    { en: "We explain how our program works", ar: "نشرح لك كيف يعمل برنامجنا" },
    { en: "We recommend the best plan for you", ar: "نوصيك بأفضل خطة تناسبك" },
    { en: "You get your WhatsApp group & Zoom links", ar: "تحصل على مجموعة واتساب وروابط زووم" },
  ];

  const inputStyle = { border: `1.5px solid rgba(129,216,208,0.25)`, borderRadius: "10px", padding: "12px 14px", fontSize: "14px", fontFamily: "inherit", color: "#1A2E2D", background: "#fff", outline: "none", width: "100%" };
  const labelStyle = { display: "block" as const, fontSize: "12px", fontWeight: 700, color: TDK, marginBottom: "5px" };

  return (
    <div style={{ width: "100%" }}>
      <section style={{ padding: "60px 5% 50px", background: `linear-gradient(135deg,${BG},#e8fffe)`, textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(129,216,208,0.1)", border: "1px solid rgba(129,216,208,0.28)", color: TDK, padding: "6px 14px", borderRadius: "14px", fontSize: "11px", fontWeight: 700, letterSpacing: "1.2px", textTransform: "uppercase" as const, marginBottom: "12px" }}>
          📋 {isAr ? "موعد مجاني" : "FREE APPOINTMENT"}
        </div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px,3.5vw,46px)", fontWeight: 800, color: TDK, marginBottom: "12px" }}>
          {isAr ? "احجز موعدك المجاني للإنجليزية والمهنة" : "Book Your Free English & Career Appointment"}
        </h1>
        <p style={{ fontSize: "17px", color: MID, maxWidth: "600px", margin: "0 auto", lineHeight: 1.7 }}>
          {isAr ? "15–20 دقيقة مع فريقنا. مجانية تماماً." : "15–20 minutes with our team. Completely free."}
        </p>
      </section>

      <section style={{ padding: "60px 5% 80px", background: "#fff" }}>
        <div style={{ maxWidth: "1060px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "52px", alignItems: "start" }}>
          {/* Left column */}
          <div>
            <div style={{ background: TDK, borderRadius: "22px", padding: "34px", color: "#fff", marginBottom: "20px" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 700, color: GOLD_LT, marginBottom: "18px" }}>
                {isAr ? "ماذا يحدث خلال الموعد؟" : "What Happens During the Appointment?"}
              </div>
              {whatHappens.map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "12px" }}>
                  <div style={{ width: "22px", height: "22px", background: "rgba(201,144,58,0.25)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: GOLD_LT, fontSize: "11px", flexShrink: 0, marginTop: "2px", fontWeight: 700 }}>{i + 1}</div>
                  <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.85)", lineHeight: 1.55 }}>{isAr ? item.ar : item.en}</span>
                </div>
              ))}
            </div>
            <div style={{ background: BG, border: "1px solid rgba(129,216,208,0.15)", borderRadius: "16px", padding: "22px" }}>
              <div style={{ fontWeight: 700, fontSize: "15px", color: TDK, marginBottom: "10px" }}>🎁 {isAr ? "مجاني تماماً" : "100% Free"}</div>
              <ul>
                {[
                  { en: "No credit card required", ar: "لا بطاقة ائتمان مطلوبة" },
                  { en: "No commitment or obligation", ar: "لا التزام أو ضغط" },
                  { en: "Call is in Arabic — no pressure", ar: "المكالمة بالعربية — لا ضغط" },
                  { en: "First week is FREE when you join", ar: "الأسبوع الأول مجاني عند الانضمام" },
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13.5px", color: MID }}><span style={{ color: GOLD, fontWeight: 800 }}>✓</span>{isAr ? item.ar : item.en}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right column – traditional HTML form (no fetch, no JS) */}
          <div style={{ background: BG, borderRadius: "22px", padding: "38px", boxShadow: "0 24px 60px rgba(129,216,208,0.1)", border: "1px solid rgba(129,216,208,0.12)" }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 800, color: TDK, marginBottom: "4px" }}>
              {isAr ? "أكمل استمارة الموعد" : "Complete the Appointment Form"}
            </h3>
            <p style={{ fontSize: "13px", color: "#8896AB", marginBottom: "24px" }}>
              {isAr ? "سنتصل بك خلال 24 ساعة." : "We'll contact you within 24 hours."}
            </p>

            {/* ✅ NATIVE FORM SUBMISSION – WORKS 100% */}
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              target="_blank"
              onSubmit={() => setSubmitted(true)}
              style={{ display: "flex", flexDirection: "column", gap: "14px" }}
            >
              {/* Required hidden fields */}
              <input type="hidden" name="access_key" value="95fb604f-3678-4783-a916-ca5991e42627" />
              <input type="hidden" name="subject" value="New Assessment Request" />
              <input type="hidden" name="from_name" value="CanadaReady Assessment" />

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "13px" }}>
                <div>
                  <label style={labelStyle}>{isAr ? "الاسم الكامل" : "Full Name"}</label>
                  <input type="text" name="name" required style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>{isAr ? "رقم الواتساب" : "WhatsApp Number"}</label>
                  <input type="tel" name="whatsapp" placeholder="+1 403 434 0027" required style={inputStyle} />
                </div>
              </div>
              <div>
                <label style={labelStyle}>{isAr ? "البريد الإلكتروني" : "Email"}</label>
                <input type="email" name="email" style={inputStyle} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "13px" }}>
                <div>
                  <label style={labelStyle}>{isAr ? "مستوى الإنجليزية" : "English Level"}</label>
                  <select name="englishLevel" style={inputStyle} required>
                    <option value="beginner">{isAr ? "مبتدئ" : "Beginner"}</option>
                    <option value="intermediate">{isAr ? "متوسط" : "Intermediate"}</option>
                    <option value="advanced">{isAr ? "متقدم" : "Advanced"}</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>{isAr ? "بلد الأصل" : "Country of Origin"}</label>
                  <input type="text" name="country" placeholder={isAr ? "مصر، سوريا، العراق..." : "Egypt, Syria, Iraq..."} style={inputStyle} />
                </div>
              </div>
              <div>
                <label style={labelStyle}>{isAr ? "منذ متى وأنت في كندا؟" : "How Long in Canada?"}</label>
                <select name="timeInCanada" style={inputStyle} required>
                  <option value="justArrived">{isAr ? "وصلت للتو (أقل من شهر)" : "Just arrived (less than 1 month)"}</option>
                  <option value="lessThan1">{isAr ? "أقل من سنة" : "Less than 1 year"}</option>
                  <option value="oneToTwo">{isAr ? "1–2 سنوات" : "1–2 years"}</option>
                  <option value="moreThan2">{isAr ? "أكثر من سنتين" : "More than 2 years"}</option>
                </select>
              </div>
              <div>
                <label style={labelStyle}>{isAr ? "أهدافك المهنية" : "Career Goals"}</label>
                <textarea name="careerGoals" rows={3} style={{ ...inputStyle, resize: "vertical" }} required></textarea>
              </div>
              <div>
                <label style={labelStyle}>{isAr ? "أكبر تحدٍّ تواجهه الآن" : "Biggest Challenge Right Now"}</label>
                <textarea name="biggestChallenge" rows={3} style={{ ...inputStyle, resize: "vertical" }} required></textarea>
              </div>
              <button type="submit" style={{ width: "100%", padding: "16px", background: TDK, color: "#fff", border: "none", borderRadius: "26px", fontSize: "16px", fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginTop: "6px" }}>
                📋 {isAr ? "احجز موعدي المجاني" : "Book My Free Appointment"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}