import { useLanguage } from "@/lib/language-context";
import { useState } from "react";

const TDK = "#007A77";
const BG = "#F5FFFE";
const MID = "#4A6B69";

export default function Contact() {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div style={{ padding: "80px 5%", textAlign: "center" }}>
        <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: `rgba(129,216,208,0.12)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "36px", margin: "0 auto 24px" }}>✅</div>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "32px", fontWeight: 800, color: TDK }}>
          {isAr ? "تم إرسال رسالتك!" : "Message Sent!"}
        </h2>
        <p style={{ fontSize: "17px", color: MID, marginTop: "12px" }}>
          {isAr ? "سنرد عليك خلال 24 ساعة." : "We will reply within 24 hours."}
        </p>
      </div>
    );
  }

  const channels = [
    { icon: "💬", color: "#25D366", label_en: "WhatsApp", label_ar: "واتساب", val_en: "+1 (403) 434-0027", val_ar: "+1 (403) 434-0027", href: "https://wa.me/14034340027", desc_en: "Chat with us — we reply within hours", desc_ar: "تحدث معنا — نرد خلال ساعات" },
    { icon: "✉️", color: "#66E6DE", label_en: "Email", label_ar: "البريد الإلكتروني", val_en: "canadareadyacademy@gmail.com", val_ar: "canadareadyacademy@gmail.com", href: "mailto:canadareadyacademy@gmail.com", desc_en: "We reply within 24 hours", desc_ar: "نرد خلال 24 ساعة" },
    { icon: "📘", color: "#1877F2", label_en: "Facebook", label_ar: "فيسبوك", val_en: "@CanadaReadyAcademy", val_ar: "@CanadaReadyAcademy", href: "https://facebook.com/groups/1338122224799157", desc_en: "Follow us & message us on Facebook", desc_ar: "تابعنا وراسلنا على فيسبوك" },
    { icon: "📸", color: "#E1306C", label_en: "Instagram", label_ar: "إنستغرام", val_en: "@canadareadyacademy", val_ar: "@canadareadyacademy", href: "https://instagram.com/canadareadyacademy", desc_en: "Daily tips for newcomers", desc_ar: "نصائح يومية للوافدين الجدد" },
  ];

  const stag = { display: "inline-flex" as const, alignItems: "center", gap: "6px", background: "rgba(129,216,208,0.1)", border: "1px solid rgba(129,216,208,0.28)", color: TDK, padding: "6px 14px", borderRadius: "14px", fontSize: "11px", fontWeight: 700, letterSpacing: "1.2px", textTransform: "uppercase" as const, marginBottom: "12px" };
  const inputStyle = { border: "1.5px solid rgba(129,216,208,0.25)", borderRadius: "10px", padding: "12px 14px", fontSize: "14px", fontFamily: "inherit", width: "100%" };
  const labelStyle = { display: "block" as const, fontSize: "12px", fontWeight: 700, color: TDK, marginBottom: "5px" };

  return (
    <div style={{ width: "100%" }}>
      <section style={{ padding: "60px 5% 50px", background: `linear-gradient(135deg,${BG},#e8fffe)`, textAlign: "center" }}>
        <div style={stag}>📞 {isAr ? "تواصل" : "CONTACT US"}</div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 800, color: TDK, marginBottom: "12px" }}>
          {isAr ? "نحن هنا للمساعدة" : "We Are Here to Help"}
        </h1>
        <p style={{ fontSize: "17px", color: MID, maxWidth: "560px", margin: "0 auto" }}>
          {isAr ? "تواصل معنا عبر أي قناة تناسبك. سنرد في أقرب وقت." : "Reach out through any channel that works best for you. We'll respond quickly."}
        </p>
      </section>

      <section style={{ background: "#075E54", padding: "50px 5%", textAlign: "center" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(22px,3vw,34px)", fontWeight: 800, color: "#fff", marginBottom: "10px" }}>
            {isAr ? "هل تحتاج مساعدة في اختيار برنامج؟" : "Need Help Choosing a Program?"}
          </h2>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "17px", marginBottom: "22px" }}>
            {isAr ? "راسلنا مباشرة على واتساب وسنجيب على أي سؤال لديك خلال ساعات قليلة." : "Message us directly on WhatsApp and we will answer any question within a few hours."}
          </p>
          <a href="https://wa.me/14034340027" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#25D366", color: "#fff", padding: "16px 40px", borderRadius: "32px", fontSize: "16px", fontWeight: 700, textDecoration: "none" }}>
            💬 {isAr ? "راسلنا على واتساب" : "Message Us on WhatsApp"}
          </a>
        </div>
      </section>

      <section style={{ padding: "72px 5%", background: "#fff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "52px", alignItems: "start" }}>
          <div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(22px,2.5vw,32px)", fontWeight: 800, color: TDK, marginBottom: "8px" }}>
              {isAr ? "تفاصيل التواصل" : "Our Contact Details"}
            </h2>
            <p style={{ fontSize: "15px", color: MID, marginBottom: "24px" }}>
              {isAr ? "نحن متاحون عبر جميع القنوات التالية." : "We are available on all of the following channels."}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {channels.map((ch) => (
                <a key={ch.label_en} href={ch.href} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "13px", background: "#fff", borderRadius: "18px", padding: "17px 20px", border: "1px solid rgba(129,216,208,0.15)", textDecoration: "none", transition: "0.3s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = ch.color; (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 8px 32px ${ch.color}22`; (e.currentTarget as HTMLAnchorElement).style.transform = "translateX(4px)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(129,216,208,0.15)"; (e.currentTarget as HTMLAnchorElement).style.boxShadow = ""; (e.currentTarget as HTMLAnchorElement).style.transform = ""; }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "11px", background: `${ch.color}18`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", flexShrink: 0 }}>{ch.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: "15px", color: TDK }}>{isAr ? ch.label_ar : ch.label_en}</div>
                    <div style={{ fontSize: "13px", color: "#8896AB" }}>{isAr ? ch.val_ar : ch.val_en}</div>
                    <div style={{ fontSize: "12px", color: ch.color, fontWeight: 600, marginTop: "2px" }}>{isAr ? ch.desc_ar : ch.desc_en}</div>
                  </div>
                  <div style={{ fontSize: "18px", color: "#ccc" }}>→</div>
                </a>
              ))}
            </div>
            <div style={{ marginTop: "24px", background: BG, border: "1px solid rgba(129,216,208,0.15)", borderRadius: "16px", padding: "20px" }}>
              <div style={{ fontWeight: 700, fontSize: "15px", color: TDK, marginBottom: "4px" }}>🌐 {isAr ? "الموقع" : "Location"}</div>
              <div style={{ fontSize: "14px", color: MID }}>{isAr ? "عبر الإنترنت — نخدم جميع أنحاء كندا" : "Online — Serving all of Canada"}</div>
              <div style={{ fontSize: "13px", color: "#8896AB", marginTop: "4px" }}>{isAr ? "ألبرتا · أونتاريو · كولومبيا البريطانية · وأكثر" : "Alberta · Ontario · British Columbia · and more"}</div>
            </div>
          </div>

          <div style={{ background: BG, borderRadius: "22px", padding: "38px", boxShadow: "0 24px 60px rgba(129,216,208,0.1)", border: "1px solid rgba(129,216,208,0.12)" }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "24px", fontWeight: 800, color: TDK, marginBottom: "4px" }}>{isAr ? "أرسل لنا رسالة" : "Send Us a Message"}</h3>
            <p style={{ fontSize: "13px", color: "#8896AB", marginBottom: "24px" }}>{isAr ? "سنرد عليك خلال 24 ساعة." : "We'll get back to you within 24 hours."}</p>

            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              target="_blank"
              onSubmit={() => setSubmitted(true)}
            >
              <input type="hidden" name="access_key" value="95fb604f-3678-4783-a916-ca5991e42627" />
              <input type="hidden" name="subject" value="New Contact Message" />
              <input type="hidden" name="from_name" value="CanadaReady Contact" />

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "13px", marginBottom: "14px" }}>
                <div>
                  <label style={labelStyle}>{isAr ? "الاسم الكامل" : "Full Name"}</label>
                  <input type="text" name="name" required style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>{isAr ? "البريد الإلكتروني" : "Email"}</label>
                  <input type="email" name="email" required style={inputStyle} />
                </div>
              </div>
              <div style={{ marginBottom: "14px" }}>
                <label style={labelStyle}>{isAr ? "رقم الواتساب (اختياري)" : "WhatsApp Number (Optional)"}</label>
                <input type="tel" name="whatsapp" placeholder="+1 403 434 0027" style={inputStyle} />
              </div>
              <div style={{ marginBottom: "14px" }}>
                <label style={labelStyle}>{isAr ? "رسالتك" : "Your Message"}</label>
                <textarea name="message" rows={4} required style={{ ...inputStyle, resize: "vertical" }} />
              </div>
              <button type="submit" style={{ width: "100%", padding: "15px", background: TDK, color: "#fff", border: "none", borderRadius: "26px", fontSize: "15px", fontWeight: 700, cursor: "pointer" }}>
                {isAr ? "إرسال الرسالة" : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}