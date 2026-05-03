import { Link } from "wouter";

const T = "#0ABAB5";
const TD = "#089994";
const TL = "#E0F8F7";
const GOLD = "#C9903A";
const GOLD_L = "#F0C96A";
const NAVY = "#0E1E33";
const NAVY2 = "#1A2F4A";
const OFF = "#F7FAFA";
const GRAY = "#64748B";
const BORDER = "#D1ECE9";

export default function Home() {
  return (
    <div style={{ width: "100%", overflowX: "hidden", background: "#fff", color: NAVY }}>
      <div style={{ background: `linear-gradient(90deg, ${TD}, ${T}, ${TD})`, color: "#fff", textAlign: "center", padding: "11px 20px", fontSize: "14px", fontWeight: 600 }}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
          <span>🍁 Canada&apos;s #1 Newcomer Support System</span>
          <span style={{ fontFamily: "'Tajawal', sans-serif" }}>نظام دعم الوافدين الجدد رقم 1 في كندا</span>
        </div>
      </div>
      <section style={{ background: `linear-gradient(145deg, ${NAVY} 0%, ${NAVY2} 60%, #0a2940 100%)`, padding: "90px 32px 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center" }} className="max-lg:grid-cols-1">
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(10,186,181,.15)", border: "1px solid rgba(10,186,181,.3)", color: "#5EEAE5", padding: "7px 18px", borderRadius: "30px", fontSize: "12px", fontWeight: 700, letterSpacing: "1px", marginBottom: "24px" }}>English & Career Support</div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(34px,5vw,58px)", fontWeight: 900, color: "#fff", lineHeight: 1.15, marginBottom: "20px" }}>
              English, Career &amp; Life Support for Newcomers in <span style={{ color: T }}>Canada</span>
            </h1>
            <h2 style={{ fontFamily: "'Tajawal', sans-serif", fontSize: "clamp(24px,4vw,42px)", fontWeight: 900, color: "rgba(255,255,255,.55)", direction: "rtl", lineHeight: 1.3, marginBottom: "28px" }}>
              دعم الإنجليزية والمهنة والحياة للوافدين الجدد في <span style={{ color: T }}>كندا</span>
            </h2>
            <p style={{ fontSize: "17px", color: "rgba(255,255,255,.7)", marginBottom: "12px", maxWidth: "520px", lineHeight: 1.8 }}>Live online classes, job preparation, and settlement support — designed for Arabic-speaking immigrants in Canada.</p>
            <p style={{ fontFamily: "'Tajawal', sans-serif", fontSize: "16px", color: "rgba(255,255,255,.5)", direction: "rtl", marginBottom: "32px", maxWidth: "520px", lineHeight: 1.8 }}>دروس مباشرة عبر الإنترنت، تحضير للعمل، ودعم التوطين — مصمم للمهاجرين الناطقين بالعربية في كندا.</p>
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginBottom: "48px" }}>
              <Link href="/assessment" style={{ background: `linear-gradient(135deg, ${T}, ${TD})`, color: "#fff", padding: "15px 32px", borderRadius: "40px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "10px", boxShadow: "0 6px 24px rgba(10,186,181,.35)", fontSize: "16px", fontWeight: 700 }}>Book Appointment</Link>
              <Link href="/services" style={{ background: "transparent", color: "#fff", padding: "14px 28px", borderRadius: "40px", border: "1.5px solid rgba(255,255,255,.3)", fontSize: "15px", fontWeight: 600, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}>View Services</Link>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1px", background: "rgba(255,255,255,.08)", borderRadius: "16px", overflow: "hidden" }} className="max-sm:grid-cols-2">
              {[["500+","Newcomers Helped","وافد استفاد"],["4","Programs Available","برامج متاحة"],["3×","Weekly Live Classes","صفوف أسبوعياً"],["2","Languages","لغتان — عربي وإنجليزي"]].map(([n,en,ar]) => (
                <div key={n} style={{ background: "rgba(255,255,255,.04)", padding: "20px 12px", textAlign: "center" }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "36px", fontWeight: 800, color: T, lineHeight: 1 }}>{n}</div>
                  <div style={{ fontSize: "11px", color: "rgba(255,255,255,.45)", marginTop: "5px", lineHeight: 1.4 }}>{en}</div>
                  <div style={{ fontFamily: "'Tajawal', sans-serif", fontSize: "11px", color: "rgba(255,255,255,.3)", direction: "rtl" }}>{ar}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: "#fff", borderRadius: "24px", padding: "36px", boxShadow: "0 24px 80px rgba(0,0,0,.3)" }}>
            <div style={{ background: `linear-gradient(135deg, ${NAVY}, ${NAVY2})`, borderRadius: "16px", padding: "24px", marginBottom: "20px", color: "#fff" }}>
              <div style={{ fontSize: "10px", color: "rgba(255,255,255,.4)", letterSpacing: "2px", fontWeight: 700, marginBottom: "16px" }}>WHAT YOU GET / ما ستحصل عليه</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {["English classes for all levels / حصص لجميع المستويات","Resume and job preparation / تحضير للوظائف والسيرة الذاتية","Settlement and daily life support / دعم الحياة اليومية في كندا","Arabic community and WhatsApp support / مجتمع عربي ودعم واتساب","1-on-1 coaching calls / مكالمات توجيه فردية"].map((t) => (
                  <div key={t} style={{ display: "flex", gap: "12px", padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,.08)", fontSize: "14px", color: "rgba(255,255,255,.85)" }}>
                    <span>✓</span><span>{t}</span>
                  </div>
                ))}
              </div>
            </div>
            <Link href="/assessment" style={{ background: `linear-gradient(135deg, ${GOLD}, ${GOLD_L})`, color: NAVY, textAlign: "center", padding: "13px", borderRadius: "12px", fontWeight: 800, fontSize: "14px", textDecoration: "none", display: "block" }}>Book Your Free Assessment / احجز تقييمك المجاني</Link>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 32px", background: OFF }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "20px", marginTop: "48px" }}>
            {[
              ["🎯","English Classes","حصص الإنجليزية","Speaking, listening, reading, writing, pronunciation, workplace communication, IELTS/CELPIP prep.","التحدث، الاستماع، القراءة، الكتابة، النطق، التواصل في العمل، التحضير لـ IELTS/CELPIP."],
              ["💼","Career Support","دعم المهنة","Resume writing, interviews, LinkedIn, cover letters, job search, Canadian workplace culture.","كتابة السيرة الذاتية، المقابلات، لينكدإن، خطابات التغطية، البحث عن عمل."],
              ["🏠","Canada Life","الحياة في كندا","Banking, credit, CRA taxes, housing, healthcare, government services, daily life.","البنوك، الائتمان، ضرائب CRA، السكن، الرعاية الصحية، الخدمات الحكومية."],
              ["🤝","Community Support","الدعم المجتمعي","WhatsApp support, accountability, coaching, and Arabic-speaking guidance.","دعم واتساب، متابعة، توجيه، وإرشاد باللغة العربية."],
            ].map(([icon,en,ar,descEn,descAr]) => (
              <div key={en} style={{ background: "#fff", borderRadius: "20px", padding: "28px 24px", border: `1.5px solid ${BORDER}`, boxShadow: "0 4px 20px rgba(10,186,181,.06)" }}>
                <div style={{ fontSize: "36px", marginBottom: "16px" }}>{icon}</div>
                <h3 style={{ fontSize: "18px", fontWeight: 700, color: NAVY, marginBottom: "6px" }}>{en}</h3>
                <h3 style={{ fontFamily: "'Tajawal', sans-serif", direction: "rtl", textAlign: "right", fontSize: "18px", fontWeight: 700, color: NAVY, marginBottom: "6px" }}>{ar}</h3>
                <p style={{ fontSize: "14px", color: GRAY, lineHeight: 1.7 }}>{descEn}</p>
                <p style={{ fontFamily: "'Tajawal', sans-serif", fontSize: "13px", color: GRAY, direction: "rtl", textAlign: "right", lineHeight: 1.7 }}>{descAr}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "72px 5%", background: "#fff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px" }} className="max-lg:grid-cols-1">
          <div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px,3vw,36px)", fontWeight: 800, color: NAVY, marginBottom: "20px" }}>Who We Help / من نساعد</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                ["✈️","New immigrants arriving in Canada","المهاجرون الجدد القادمون إلى كندا"],
                ["🗣️","Arabic-speaking newcomers across all provinces","القادمون الجدد الناطقون بالعربية في جميع المقاطعات"],
                ["💼","Job seekers looking for their first Canadian job","الباحثون عن عمل الذين يبحثون عن أول وظيفة كندية"],
                ["👨‍👩‍👧","Families settling into Canadian life","الأسر التي تستقر في الحياة الكندية"],
                ["📚","Students wanting to improve English and career skills","الطلاب الراغبون في تحسين الإنجليزية والمهارات المهنية"],
                ["🏢","Workers wanting to move up in their Canadian careers","العمال الذين يريدون التقدم في مسيرتهم المهنية الكندية"],
              ].map(([icon,en,ar]) => (
                <div key={en} style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "15px", color: GRAY }}>
                  <div style={{ width: "8px", height: "8px", background: GOLD, borderRadius: "50%", flexShrink: 0 }} />
                  <span style={{ fontSize: "18px", flexShrink: 0 }}>{icon}</span>
                  <span>{en} / {ar}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div style={{ background: NAVY, borderRadius: "22px", padding: "38px", color: "#fff", marginBottom: "22px" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "24px", fontWeight: 700, color: GOLD_L, marginBottom: "12px" }}>Our Mission / مهمتنا</div>
              <p style={{ fontSize: "15px", color: "rgba(255,255,255,.85)", lineHeight: 1.75 }}>To empower Arabic-speaking newcomers with the language, skills, and knowledge needed to thrive in Canada. We believe every newcomer deserves a clear path forward — not just language lessons, but real support for building a better life.<br />تمكين القادمين الجدد الناطقين بالعربية باللغة والمهارات والمعرفة اللازمة للنجاح في كندا.</p>
            </div>
            <div style={{ background: OFF, border: `1px solid rgba(10,186,181,.15)`, borderRadius: "18px", padding: "28px" }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 700, color: NAVY, marginBottom: "10px" }}>What Makes Us Different / ما الذي يميزنا</h3>
              <p style={{ fontSize: "14px", color: GRAY, lineHeight: 1.72 }}>We are not a generic language school. We are a community built by immigrants, for immigrants. We understand the real challenges — not just language, but jobs, taxes, housing, healthcare, and belonging.<br />نحن لسنا مدرسة لغة عامة. نحن مجتمع بناه مهاجرون للمهاجرين.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "0 5% 40px", background: NAVY, textAlign: "center" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))" }}>
          {[
            ["500+","Newcomers Helped","وافد استفاد"],
            ["4","Programs Available","برامج متاحة"],
            ["3×","Weekly Live Classes","صفوف أسبوعياً"],
            ["2","Languages","لغتان — عربي وإنجليزي"],
          ].map(([n,en,ar]) => (
            <div key={n} style={{ padding: "28px 20px" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(54px, 7vw, 82px)", fontWeight: 800, color: GOLD_L, lineHeight: 1 }}>{n}</div>
              <div style={{ fontSize: "12px", color: "rgba(255,255,255,.65)", marginTop: "5px" }}>{en} / {ar}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "72px 5%", background: OFF }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: TL, border: `1px solid ${BORDER}`, color: TD, padding: "6px 16px", borderRadius: "30px", fontSize: "11px", fontWeight: 800, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "20px" }}>📖 WHAT WE TEACH / ماذا ندرّس</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px,3vw,42px)", fontWeight: 800, color: NAVY }}>4 Areas Covering Everything You Need / 4 مجالات تغطي كل ما تحتاجه</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "22px" }}>
            {[
              ["📚","English","الإنجليزية","Speaking, listening, reading, writing, pronunciation, workplace communication, IELTS/CELPIP prep.","التحدث، الاستماع، القراءة، الكتابة، النطق، التواصل في العمل، التحضير لـ IELTS/CELPIP."],
              ["💼","Careers","المهن","Resume writing, interviews, LinkedIn, cover letters, job search, Canadian workplace culture, networking.","كتابة السيرة الذاتية، المقابلات، لينكدإن، خطابات التغطية، البحث عن عمل."],
              ["🏠","Canada Life","الحياة في كندا","Banking, credit, CRA taxes, housing, healthcare, government services, daily life.","البنوك، الائتمان، ضرائب CRA، السكن، الرعاية الصحية، الخدمات الحكومية."],
              ["💻","Business & Digital","الأعمال والرقمية","Start a business, freelancing, self-employment, invoicing, digital tools, side hustles.","بدء عمل تجاري، العمل الحر، المستقل، الفواتير، الأدوات الرقمية، الدخل الجانبي."],
            ].map(([icon,en,ar,descEn,descAr], i) => (
              <div key={en} style={{ background: "#fff", borderRadius: "18px", padding: "26px", border: `1px solid rgba(10,186,181,.15)`, borderTop: `4px solid ${i===0?T:i===1?GOLD:i===2?"#25A465":"#8B5CF6"}` }}>
                <div style={{ width: "50px", height: "50px", background: "rgba(102,230,222,0.12)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", marginBottom: "14px" }}>{icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 700, color: NAVY, marginBottom: "8px" }}>{en} / {ar}</h3>
                <p style={{ fontSize: "13.5px", color: GRAY, lineHeight: 1.65 }}>{descEn}<br />{descAr}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "72px 5%", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ background: `linear-gradient(135deg, rgba(10,186,181,0.08), rgba(10,186,181,0.03))`, border: "1px solid rgba(10,186,181,0.2)", borderRadius: "28px", padding: "52px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: TL, border: `1px solid ${BORDER}`, color: TD, padding: "6px 16px", borderRadius: "30px", fontSize: "11px", fontWeight: 800, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "20px" }}>💡 WHAT WE REALLY SELL / ما الذي نبيعه حقاً</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px,3vw,40px)", fontWeight: 800, color: NAVY, marginBottom: "10px" }}>We Are Not Just a Language School / لسنا مجرد مدرسة لغة</h2>
            <p style={{ fontSize: "16px", color: GRAY, marginBottom: "32px", lineHeight: 1.7 }}>We sell confidence, direction, support, opportunity, and a better life in Canada. English is the tool — the goal is to change your life.<br />نحن نبيع الثقة والتوجيه والدعم والفرصة وحياة أفضل في كندا.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "14px" }}>
              {[
                ["💪","Confidence to speak, work, and communicate in Canada","الثقة في التحدث والعمل والتواصل في كندا"],
                ["🧭","Direction for your career and life in Canada","التوجيه لمسيرتك المهنية وحياتك في كندا"],
                ["🤝","Support from a community that understands you","الدعم من مجتمع يفهمك"],
                ["💰","Opportunity to find better jobs and higher income","الفرصة لإيجاد وظائف أفضل ودخل أعلى"],
                ["🍁","A better life in Canada for you and your family","حياة أفضل في كندا لك ولعائلتك"],
              ].map(([icon,en,ar]) => (
                <div key={en} style={{ background: "#fff", borderRadius: "14px", padding: "16px 18px", display: "flex", alignItems: "flex-start", gap: "12px", border: "1px solid rgba(10,186,181,0.12)" }}>
                  <span style={{ fontSize: "22px", flexShrink: 0 }}>{icon}</span>
                  <span style={{ fontSize: "14px", color: GRAY, fontWeight: 500, lineHeight: 1.5 }}>{en} / {ar}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "72px 5%", background: OFF }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "30px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: TL, border: `1px solid ${BORDER}`, color: TD, padding: "6px 16px", borderRadius: "30px", fontSize: "11px", fontWeight: 800, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "20px" }}>📚 OUR PROGRAMS / برامجنا</div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, color: NAVY, lineHeight: 1.15 }}>Choose Your Plan / اختر خطتك</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "18px" }}>
            {[
              ["Starter","البداية","$79"],
              ["Premium","المميز","$129"],
              ["Career Boost","الانطلاقة المهنية","$179"],
              ["Canada Ready","جاهز لكندا","$249"],
            ].map(([en,ar,price], idx) => (
              <div key={en} style={{ background: idx===1?NAVY:"#fff", border: idx===1?`2px solid ${GOLD}`:"1px solid rgba(129,216,208,0.18)", borderRadius: "18px", padding: "28px 22px", position: "relative", display: "flex", flexDirection: "column" }}>
                {idx===1 && <div style={{ position: "absolute", top: "-13px", left: "50%", transform: "translateX(-50%)", background: GOLD, color: NAVY, fontSize: "10px", fontWeight: 800, padding: "4px 13px", borderRadius: "11px", letterSpacing: "0.8px", textTransform: "uppercase" }}>⭐ MOST POPULAR / الأكثر شعبية</div>}
                <div style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "1.8px", textTransform: "uppercase", color: idx===1?"rgba(255,255,255,0.5)":"#8896AB", marginBottom: "9px" }}>{en} / {ar}</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "44px", fontWeight: 700, color: idx===1?"#fff":NAVY, lineHeight: 1 }}>{price}</div>
                <div style={{ background: idx===1?"rgba(201,144,58,0.18)":"rgba(129,216,208,0.08)", borderRadius: "10px", padding: "9px 12px", fontSize: "12px", color: idx===1?GOLD_L:NAVY, fontWeight: 600, margin: "13px 0", lineHeight: 1.5 }}>Free assessment included / يتضمن تقييماً مجانياً</div>
                <div style={{ flex: 1 }} />
                <Link href="/assessment" style={{ display: "block", width: "100%", padding: "13px", borderRadius: "24px", border: idx===1?`1.5px solid ${GOLD}`:"1.5px solid rgba(129,216,208,0.3)", background: idx===1?GOLD:"transparent", color: NAVY, fontSize: "13.5px", fontWeight: 700, textDecoration: "none", textAlign: "center" }}>📋 Book Free Assessment / احجز تقييماً مجانياً</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "72px 5%", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: TL, border: `1px solid ${BORDER}`, color: TD, padding: "6px 16px", borderRadius: "30px", fontSize: "11px", fontWeight: 800, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "20px" }}>FREE APPOINTMENT / الموعد المجاني</div>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, color: NAVY, lineHeight: 1.15, marginBottom: "12px" }}>Book Your Free Assessment / احجز تقييمك المجاني</div>
          <p style={{ fontSize: "16px", color: GRAY, maxWidth: "560px", lineHeight: 1.72, margin: "0 auto 24px" }}>Fill out a short form and schedule a 15–20 minute call with our team. It is completely free and commits you to nothing.<br />املأ استمارة قصيرة وحدد مكالمة 15–20 دقيقة مع فريقنا. مجانية تماماً ولا تُلزمك بشيء.</p>
          <Link href="/assessment" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: GOLD, color: NAVY, padding: "16px 38px", borderRadius: "32px", fontSize: "16px", fontWeight: 900, textDecoration: "none" }}>Book Your Free Assessment / احجز تقييمك المجاني</Link>
        </div>
      </section>
    </div>
  );
}